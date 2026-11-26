"use client";

import { useEffect, useMemo, useRef, type RefObject } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Billboard } from "@react-three/drei";
import { flameMaterial, glowMaterial, lathe, projectLabels, smokeMaterial } from "./shared";

/*
  Kubbe, modelled in centimetres from the product photos: 11.5 cm tall.
  A glazed black base with a wide neck that hides the tealight; the perforated
  dome sits over the neck and carries a wide bowl in its top. The perforations
  are cut in the fragment shader so the outer and inner shells line up, and the
  glaze is bent round each hole's edge so every hole catches a ring of light.
*/
export const KUBBE_H = 11.5;
const DOME_Y = 6.42; // the dome's rim floats just above the base; it rests on the neck inside
const NECK_R = 3.15;
const NECK_TOP = 6.7;
const BORE_R = 2.8;
const BORE_FLOOR = 4.3;

// dome profile: a glazed rim band, near-vertical sides, a round superellipse shoulder, a flat lip round a wide bowl
const D = { R: 4.58, RB: 4.52, RS: 4.46, Y0: 1.15, RC: 2.5, TOP: 5.08, N: 2.05, WALL: 0.36 };
// perforations: rows spaced evenly along the surface (not in height), so the shoulder holes stay round
const H = { S0: 0.92, PITCH: 0.52, SPACING: 0.6, R: 0.155, BEVEL: 0.075, DEPTH: 0.05, MIN_R: 3.0 };

function domePoint(theta: number, inset = 0): [number, number] {
  const e = 2 / D.N;
  const a = D.RS - D.RC - inset;
  const b = D.TOP - D.Y0 - inset;
  return [D.RC + a * Math.pow(Math.cos(theta), e), D.Y0 + b * Math.pow(Math.sin(theta), e)];
}

/** Arc length along the outer shoulder by profile angle; the surface coordinate s carries on from the side's height. */
const SHOULDER = (() => {
  const n = 400;
  const s: number[] = [];
  const pts: [number, number][] = [];
  let len = 0;
  for (let i = 0; i <= n; i++) {
    const p = domePoint((i / n) * (Math.PI / 2));
    if (i > 0) len += Math.hypot(p[0] - pts[i - 1][0], p[1] - pts[i - 1][1]);
    s.push(D.Y0 + len);
    pts.push(p);
  }
  return { s, pts };
})();

/** Surface coordinate of the shoulder point at profile angle theta. */
function shoulderS(theta: number) {
  const x = (theta / (Math.PI / 2)) * (SHOULDER.s.length - 1);
  const i = Math.min(Math.floor(x), SHOULDER.s.length - 2);
  return THREE.MathUtils.lerp(SHOULDER.s[i], SHOULDER.s[i + 1], x - i);
}

const sideRadius = (y: number) => THREE.MathUtils.lerp(D.RB, D.RS, (y - 0.55) / (D.Y0 - 0.55));

/** Point and outward normal (in the profile plane) on the outer surface at surface coordinate s. */
function outerAt(s: number) {
  if (s <= D.Y0) {
    const slope = (D.RS - D.RB) / (D.Y0 - 0.55);
    return { r: sideRadius(s), y: s, n: new THREE.Vector2(1, -slope).normalize() };
  }
  const { s: S, pts } = SHOULDER;
  let i = 1;
  while (i < S.length - 1 && S[i] < s) i++;
  const t = (s - S[i - 1]) / (S[i] - S[i - 1]);
  const a = pts[i - 1];
  const b = pts[i];
  const tan = new THREE.Vector2(b[0] - a[0], b[1] - a[1]).normalize();
  return { r: a[0] + (b[0] - a[0]) * t, y: a[1] + (b[1] - a[1]) * t, n: new THREE.Vector2(tan.y, -tan.x) };
}

const ROWS = (() => {
  const rows: { s: number; count: number }[] = [];
  for (let s = H.S0; ; s += H.PITCH) {
    const { r } = outerAt(s);
    if (r < H.MIN_R) break;
    rows.push({ s, count: Math.floor((Math.PI * 2 * r) / H.SPACING) });
  }
  return rows;
})();

const g = (x: number) => x.toFixed(4);
const HOLE_GLSL = /* glsl */ `
  varying vec3 vLocal;
  varying vec2 vSR;
  const float HOLE_COUNTS[${ROWS.length}] = float[${ROWS.length}](${ROWS.map((r) => r.count.toFixed(1)).join(", ")});
  // distance from this fragment to the nearest perforation centre, measured on the outer surface
  float holeDist() {
    float row = floor((vSR.x - ${g(H.S0)}) / ${g(H.PITCH)} + 0.5);
    if (row < 0.0 || row > ${(ROWS.length - 1).toFixed(1)}) return 9.0;
    float n = HOLE_COUNTS[int(row)];
    float a = atan(vLocal.z, vLocal.x) / 6.2831853 * n + mod(row, 2.0) * 0.5;
    float du = (a - floor(a + 0.5)) * 6.2831853 * vSR.y / n;
    float ds = vSR.x - (${g(H.S0)} + row * ${g(H.PITCH)});
    return length(vec2(du, ds));
  }
  // bump-maps a height field through screen derivatives (Mikkelsen), here the glaze rounding into each hole
  vec3 holeBevel(vec3 surfPos, vec3 surfNorm, float h, float faceDir) {
    vec3 sx = dFdx(surfPos);
    vec3 sy = dFdy(surfPos);
    vec3 r1 = cross(sy, surfNorm);
    vec3 r2 = cross(surfNorm, sx);
    float det = dot(sx, r1) * faceDir;
    vec3 grad = sign(det) * (dFdx(h) * r1 + dFdy(h) * r2);
    return normalize(abs(det) * surfNorm - grad);
  }
`;

/** A soft, low-frequency normal map: the slight unevenness of a glaze poured by hand. */
function glazeRipple() {
  const size = 128;
  const data = new Uint8Array(size * size * 4);
  // whole periods across the tile, so it repeats without seams
  const k = (Math.PI * 2) / size;
  const h = (x: number, y: number) =>
    Math.sin(x * k * 3 + Math.sin(y * k * 2) * 1.5) * 0.6 + Math.sin(y * k * 4 + Math.sin(x * k * 2) * 1.2) * 0.4;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = h(x + 1, y) - h(x - 1, y);
      const dy = h(x, y + 1) - h(x, y - 1);
      const i = (y * size + x) * 4;
      data[i] = 128 + dx * 60;
      data[i + 1] = 128 + dy * 60;
      data[i + 2] = 255;
      data[i + 3] = 255;
    }
  }
  const t = new THREE.DataTexture(data, size, size);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(3, 2);
  t.needsUpdate = true;
  return t;
}

/** One matrix per perforation: a short tube along the surface normal, through the wall. */
function holeWalls() {
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const up = new THREE.Vector3(0, 1, 0);
  const n = new THREE.Vector3();
  const p = new THREE.Vector3();
  const one = new THREE.Vector3(1, 1, 1);
  const out: THREE.Matrix4[] = [];
  ROWS.forEach(({ s, count }, row) => {
    const o = outerAt(s);
    for (let k = 0; k < count; k++) {
      // the shader's hole centres: atan(z, x) * n / 2pi + stagger is a whole number
      const th = ((k - (row % 2) * 0.5) / count) * Math.PI * 2;
      const c = Math.cos(th);
      const sn = Math.sin(th);
      n.set(o.n.x * c, o.n.y, o.n.x * sn).normalize();
      p.set(o.r * c, o.y, o.r * sn).addScaledVector(n, -D.WALL / 2);
      q.setFromUnitVectors(up, n);
      out.push(m.compose(p, q, one).clone());
    }
  });
  return out;
}

type ProfilePoint = { p: [number, number]; s: number; r: number };

/** A lathe whose vertices carry (surface coordinate, outer radius) for the hole pattern. */
function domeLathe(points: ProfilePoint[]) {
  const geom = lathe(
    points.map((x) => x.p),
    192,
  );
  const P = points.length;
  const count = geom.attributes.position.count;
  const sr = new Float32Array(count * 2);
  for (let v = 0; v < count; v++) {
    const j = v % P;
    sr[v * 2] = points[j].s;
    sr[v * 2 + 1] = points[j].r;
  }
  geom.setAttribute("aSR", new THREE.BufferAttribute(sr, 2));
  return geom;
}

function withHoles<T extends THREE.Material>(mat: T, bevel: boolean) {
  mat.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", "#include <common>\nattribute vec2 aSR;\nvarying vec3 vLocal;\nvarying vec2 vSR;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\nvLocal = position;\nvSR = aSR;");
    let frag = shader.fragmentShader.replace("#include <common>", `#include <common>\n${HOLE_GLSL}`).replace(
      "void main() {",
      `void main() {
  float kD = holeDist();
  if (kD < ${g(H.R)}) discard;
  float kT = clamp((kD - ${g(H.R)}) / ${g(H.BEVEL)}, 0.0, 1.0);
  float kH = -${g(H.DEPTH)} * (1.0 - kT) * (1.0 - kT);`,
    );
    if (bevel) {
      frag = frag
        .replace(
          "#include <normal_fragment_maps>",
          "#include <normal_fragment_maps>\nnormal = holeBevel(-vViewPosition, normal, kH, faceDirection);",
        )
        .replace(
          "#include <clearcoat_normal_fragment_maps>",
          "#include <clearcoat_normal_fragment_maps>\nclearcoatNormal = holeBevel(-vViewPosition, clearcoatNormal, kH, faceDirection);",
        );
    }
    shader.fragmentShader = frag;
  };
  mat.customProgramCacheKey = () => (bevel ? "kubbe-holes-bevel" : "kubbe-holes");
  return mat;
}

/** Outer and inner dome profiles; points outside the perforated band get s = -1 (below) or 99 (above) so they never take a hole. */
function domeProfiles() {
  const OUT = 99;
  const steps = 36;
  const outer: ProfilePoint[] = [
    { p: [D.R - D.WALL, 0], s: -1, r: D.R },
    { p: [D.R - 0.04, 0], s: -1, r: D.R },
    { p: [D.R, 0.06], s: -1, r: D.R },
    { p: [D.R, 0.4], s: 0.4, r: D.R },
    { p: [D.R - 0.03, 0.47], s: 0.47, r: D.R },
    { p: [D.RB, 0.55], s: 0.55, r: D.RB },
  ];
  const inner: ProfilePoint[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * (Math.PI / 2);
    const s = shoulderS(t);
    const p = domePoint(t);
    outer.push({ p, s, r: p[0] });
    inner.push({ p: domePoint(t, D.WALL), s, r: p[0] });
  }
  // the lip rolls over into a wide, shallow bowl
  const T = D.TOP;
  outer.push({ p: [D.RC - 0.18, T - 0.02], s: OUT, r: D.RC });
  outer.push({ p: [D.RC - 0.3, T - 0.08], s: OUT, r: D.RC });
  outer.push({ p: [D.RC - 0.36, T - 0.18], s: OUT, r: D.RC });
  for (let i = 0; i <= 14; i++) {
    const phi = (1 - i / 14) * (Math.PI / 2);
    outer.push({ p: [2.2 * Math.sin(phi), T - 1.3 + 1.1 * (1 - Math.cos(phi))], s: OUT, r: D.RC });
  }
  const underside: ProfilePoint[] = [];
  for (let i = 0; i <= 10; i++) {
    const phi = (i / 10) * (Math.PI / 2);
    underside.push({ p: [1.95 * Math.sin(phi), T - 1.6 + 1.1 * (1 - Math.cos(phi))], s: OUT, r: D.RC });
  }
  const innerAll: ProfilePoint[] = [
    ...underside,
    ...inner.slice().reverse(),
    { p: [D.RB - D.WALL, 0.55], s: 0.55, r: D.RB },
    { p: [D.R - D.WALL, 0], s: -1, r: D.R },
  ];
  return { outer, inner: innerAll };
}

const LIQUID_Y = 4.3;

type Props = {
  /** 0 = assembled, 1 = fully exploded. Read every frame. */
  explode: { current: number };
  smoke?: { current: number };
  /** DOM labels for base, dome, bowl and tealight, positioned every frame. */
  labelEls?: RefObject<(HTMLElement | null)[]>;
};

export function Kubbe({ explode, smoke, labelEls }: Props) {
  const geo = useMemo(() => {
    const dome = domeProfiles();
    return {
      // unglazed foot ring, then the glazed body: chamfered bottom, straight side, ledge, wide neck, bore
      foot: lathe([
        [0, 0.002],
        [4.2, 0.002],
        [4.29, 0.03],
        [4.33, 0.16],
      ], 128),
      base: lathe([
        [4.33, 0.16],
        [4.36, 0.24],
        [4.76, 1.78],
        [4.78, 1.9],
        [4.78, 5.14],
        [4.74, 5.26],
        [4.64, 5.32],
        [NECK_R + 0.05, 5.32],
        [NECK_R, 5.38],
        [NECK_R, NECK_TOP - 0.08],
        [NECK_R - 0.07, NECK_TOP],
        [BORE_R + 0.07, NECK_TOP],
        [BORE_R, NECK_TOP - 0.07],
        [BORE_R, BORE_FLOOR + 0.1],
        [BORE_R - 0.12, BORE_FLOOR],
        [0, BORE_FLOOR],
      ], 160),
      domeOuter: domeLathe(dome.outer),
      domeInner: domeLathe(dome.inner),
      // the wall of each perforation, so the holes read as cut through thick ceramic
      hole: new THREE.CylinderGeometry(H.R, H.R, D.WALL + 0.02, 20, 1, true),
      liquid: new THREE.CircleGeometry(1.84, 48).rotateX(-Math.PI / 2),
      cup: lathe([[0, 0], [1.9, 0], [1.96, 0.05], [1.96, 1.0], [2.01, 1.06]], 64),
      wax: new THREE.CylinderGeometry(1.9, 1.9, 0.9, 64),
      wick: new THREE.CylinderGeometry(0.035, 0.03, 0.34, 8),
    };
  }, []);

  const walls = useMemo(() => holeWalls(), []);
  const mats = useMemo(() => {
    // thick black glaze: a dark body under a mirror-like coat, with the faint ripple of a hand-dipped glaze
    const ripple = glazeRipple();
    const glaze = () =>
      new THREE.MeshPhysicalMaterial({
        color: "#050506",
        roughness: 0.28,
        metalness: 0,
        clearcoat: 1,
        clearcoatRoughness: 0.025,
        clearcoatNormalMap: ripple,
        clearcoatNormalScale: new THREE.Vector2(0.07, 0.07),
        envMapIntensity: 1.6,
        side: THREE.DoubleSide,
      });
    return {
      glaze: glaze(),
      domeOuter: withHoles(glaze(), true),
      // inside the dome the glaze is thinner and matte, so the holes read dark until the candle lights them
      domeInner: withHoles(new THREE.MeshStandardMaterial({ color: "#110e0c", roughness: 0.55, side: THREE.DoubleSide }), false),
      holeWall: new THREE.MeshStandardMaterial({ color: "#09080a", roughness: 0.35, emissive: "#3a1806", emissiveIntensity: 0.1, side: THREE.DoubleSide }),
      foot: new THREE.MeshStandardMaterial({ color: "#a39a8c", roughness: 0.95, side: THREE.DoubleSide }),
      liquid: new THREE.MeshPhysicalMaterial({
        color: "#b9772a",
        roughness: 0.04,
        transparent: true,
        opacity: 0.75,
        emissive: "#4a2200",
        emissiveIntensity: 0.4,
      }),
      cup: new THREE.MeshStandardMaterial({ color: "#e4e2de", metalness: 0.65, roughness: 0.32, side: THREE.DoubleSide }),
      wax: new THREE.MeshStandardMaterial({ color: "#f3efe7", roughness: 0.65, emissive: "#ff9a3c", emissiveIntensity: 0.05 }),
      wick: new THREE.MeshStandardMaterial({ color: "#141210", roughness: 1 }),
      flame: flameMaterial(),
      glow: glowMaterial(),
      inside: glowMaterial(),
      smoke: smokeMaterial(),
      ripple,
    };
  }, []);

  useEffect(
    () => () => {
      Object.values(geo).forEach((x) => x.dispose());
      Object.values(mats).forEach((x) => x.dispose());
    },
    [geo, mats],
  );

  const dome = useRef<THREE.Group>(null);
  const light = useRef<THREE.Group>(null);
  const candle = useRef<THREE.PointLight>(null);
  const anchors = useRef<(THREE.Object3D | null)[]>([]);
  const anchor = (i: number) => (o: THREE.Object3D | null) => {
    anchors.current[i] = o;
  };
  const projected = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ clock, camera, size }) => {
    const t = clock.elapsedTime;
    const e = explode.current;
    const s = smoke?.current ?? 1 - e;
    if (dome.current) {
      dome.current.position.y = DOME_Y + e * 5.4;
      dome.current.rotation.x = e * 0.2;
      dome.current.rotation.z = e * 0.06;
    }
    if (light.current) {
      // rise out of the neck first, then come forward
      light.current.position.y = BORE_FLOOR + THREE.MathUtils.smoothstep(e, 0, 0.55) * 3.6;
      light.current.position.z = THREE.MathUtils.smoothstep(e, 0.4, 1) * 5.8;
    }
    const flicker = 0.85 + Math.sin(t * 13) * 0.06 + Math.sin(t * 31.7) * 0.05 + Math.sin(t * 5.3) * 0.04;
    if (candle.current) candle.current.intensity = 12 * flicker;
    mats.flame.uniforms.uTime.value = t;
    mats.glow.uniforms.uPower.value = flicker;
    mats.inside.uniforms.uPower.value = flicker * 1.1 * (1 - THREE.MathUtils.smoothstep(e, 0, 0.4));
    mats.smoke.uniforms.uTime.value = t;
    mats.smoke.uniforms.uAmount.value = s;
    projectLabels(labelEls?.current, anchors.current, camera, size, THREE.MathUtils.smoothstep(e, 0.55, 0.9), projected);
  });

  return (
    <group>
      {/* base */}
      <mesh geometry={geo.base} material={mats.glaze} castShadow receiveShadow />
      <mesh geometry={geo.foot} material={mats.foot} />
      <object3D ref={anchor(0)} position={[-5.0, 2.8, 0]} />

      {/* the candle's light leaking through the perforations */}
      <Billboard position={[0, DOME_Y + 0.2, 0]}>
        <mesh material={mats.inside}>
          <planeGeometry args={[7.5, 7.5]} />
        </mesh>
      </Billboard>

      {/* perforated dome with the bowl on top */}
      <group ref={dome} position={[0, DOME_Y, 0]}>
        <mesh geometry={geo.domeOuter} material={mats.domeOuter} castShadow />
        <mesh geometry={geo.domeInner} material={mats.domeInner} />
        <instancedMesh
          args={[geo.hole, mats.holeWall, walls.length]}
          ref={(m) => {
            if (!m || m.userData.placed) return;
            walls.forEach((w, i) => m.setMatrixAt(i, w));
            m.instanceMatrix.needsUpdate = true;
            m.userData.placed = true;
          }}
        />
        <mesh geometry={geo.liquid} material={mats.liquid} position={[0, LIQUID_Y, 0]} />
        <object3D ref={anchor(1)} position={[4.75, 2.4, 0]} />
        <object3D ref={anchor(2)} position={[2.2, D.TOP + 0.2, 0]} />
        <Billboard position={[0, 10.2, 0]}>
          <mesh material={mats.smoke}>
            <planeGeometry args={[5.5, 10.5]} />
          </mesh>
        </Billboard>
      </group>

      {/* tealight */}
      <group ref={light} position={[0, BORE_FLOOR, 0]}>
        <mesh geometry={geo.cup} material={mats.cup} />
        <mesh geometry={geo.wax} material={mats.wax} position={[0, 0.52, 0]} />
        <mesh geometry={geo.wick} material={mats.wick} position={[0, 1.12, 0]} />
        <Billboard position={[0, 1.78, 0]}>
          <mesh material={mats.flame}>
            <planeGeometry args={[0.62, 1.3]} />
          </mesh>
          <mesh material={mats.glow} position={[0, -0.15, -0.01]}>
            <planeGeometry args={[4.2, 4.2]} />
          </mesh>
        </Billboard>
        <pointLight ref={candle} color="#ff9d4d" position={[0, 2.2, 0]} distance={16} decay={2} />
        <object3D ref={anchor(3)} position={[2.2, 0.6, 0]} />
      </group>
    </group>
  );
}
