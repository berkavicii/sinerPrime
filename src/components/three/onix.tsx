"use client";

import { useEffect, useMemo, useRef, type RefObject } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Billboard } from "@react-three/drei";
import { BODY_TEX, makeCanvasTexture, paintBody, paintLabel, type OnixDesign } from "./brand-texture";

/*
  ONIX, modelled in centimetres from the spec sheet: 8 cm tall, Ø 7.8 cm.
  The body is a pair of lathes (glazed outside, ceramic inside). The arched
  opening is cut in the fragment shader and closed with a generated edge strip,
  so the wall reads as solid ceramic without a CSG dependency.
*/
export const H = 8;
const RB = 3.78; // radius at the foot
const RT = 3.92; // radius at the lip, the body flares slightly
const WALL = 0.32;
const FLOOR = 0.55;
const ARCH_W = 1.72; // half width of the opening
const ARCH_TOP = 4.75;
const SPRING = ARCH_TOP - ARCH_W;

const rOuter = (y: number) => RB + (RT - RB) * (y / H);
const rInner = (y: number) => rOuter(y) - WALL;

const ARCH_GLSL = /* glsl */ `
  varying vec3 vLocal;
  bool archHole(vec3 p) {
    if (p.z <= 0.0 || abs(p.x) >= ${ARCH_W.toFixed(3)} || p.y <= ${(FLOOR + 0.002).toFixed(3)}) return false;
    if (p.y < ${SPRING.toFixed(3)}) return true;
    float dy = p.y - ${SPRING.toFixed(3)};
    return p.x * p.x + dy * dy < ${(ARCH_W * ARCH_W).toFixed(4)};
  }
`;

function withArchCut<T extends THREE.Material>(mat: T) {
  mat.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", "#include <common>\nvarying vec3 vLocal;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\nvLocal = position;");
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", `#include <common>\n${ARCH_GLSL}`)
      .replace("void main() {", "void main() {\n  if (archHole(vLocal)) discard;");
  };
  mat.customProgramCacheKey = () => "onix-arch";
  return mat;
}

function lathe(points: [number, number][], segments = 128, remapV = false) {
  const g = new THREE.LatheGeometry(
    points.map(([r, y]) => new THREE.Vector2(r, y)),
    segments,
    Math.PI,
    Math.PI * 2,
  );
  if (remapV) {
    // Lathe UVs advance per profile point; we want v proportional to height.
    const pos = g.attributes.position;
    const uv = g.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setY(i, pos.getY(i) / H);
    uv.needsUpdate = true;
  }
  return g;
}

/** The thickness of the wall around the arched opening (jambs, arch and sill). */
function archEdgeGeometry() {
  const path: [number, number][] = [];
  const steps = 18;
  for (let i = 0; i <= steps; i++) path.push([-ARCH_W, FLOOR + ((SPRING - FLOOR) * i) / steps]);
  for (let i = 1; i <= 48; i++) {
    const a = Math.PI - (Math.PI * i) / 48;
    path.push([Math.cos(a) * ARCH_W, SPRING + Math.sin(a) * ARCH_W]);
  }
  for (let i = 1; i <= steps; i++) path.push([ARCH_W, SPRING - ((SPRING - FLOOR) * i) / steps]);
  for (let i = 1; i <= 24; i++) path.push([ARCH_W - (2 * ARCH_W * i) / 24, FLOOR]);

  const verts: number[] = [];
  const idx: number[] = [];
  path.forEach(([x, y], i) => {
    const xo = Math.min(Math.abs(x), ARCH_W - 1e-3) * Math.sign(x);
    verts.push(xo, y, Math.sqrt(rOuter(y) ** 2 - xo * xo));
    verts.push(xo, y, Math.sqrt(rInner(y) ** 2 - xo * xo));
    if (i > 0) {
      const a = (i - 1) * 2;
      const b = i * 2;
      idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

/* ---------- shaders ---------- */

const flameMaterial = () =>
  new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uPower: { value: 1 } },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      uniform float uTime;
      void main() {
        vUv = uv;
        vec3 p = position;
        p.x += sin(uTime * 7.0 + p.y * 3.0) * 0.035 * smoothstep(-0.5, 0.6, p.y);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec2 vUv;
      uniform float uTime;
      uniform float uPower;
      void main() {
        vec2 p = vUv * 2.0 - 1.0;
        float flicker = 0.92 + 0.08 * sin(uTime * 23.0) * sin(uTime * 7.3);
        float y = (p.y + 1.0) * 0.5;
        float width = mix(0.55, 0.02, pow(y, 0.9)) * (1.0 - smoothstep(0.0, 0.18, 0.18 - y) * 0.6);
        float d = abs(p.x) / max(width, 0.001);
        float body = smoothstep(1.0, 0.15, d) * smoothstep(1.0, 0.72, y * flicker) * smoothstep(0.0, 0.12, y);
        float core = smoothstep(0.55, 0.0, d) * smoothstep(0.55, 0.12, y);
        vec3 col = mix(vec3(1.0, 0.42, 0.08), vec3(1.0, 0.82, 0.45), y);
        col = mix(col, vec3(1.0, 0.97, 0.88), core);
        col = mix(vec3(0.25, 0.35, 1.0), col, smoothstep(0.02, 0.16, y));
        float a = body * uPower;
        gl_FragColor = vec4(col * a * 1.6, a);
      }
    `,
  });

const glowMaterial = () =>
  new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: { uPower: { value: 1 } },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    `,
    fragmentShader: /* glsl */ `
      varying vec2 vUv;
      uniform float uPower;
      void main() {
        float d = length(vUv - 0.5) * 2.0;
        float a = pow(max(1.0 - d, 0.0), 2.6) * 0.55 * uPower;
        gl_FragColor = vec4(vec3(1.0, 0.6, 0.25) * a, a);
      }
    `,
  });

const smokeMaterial = () =>
  new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: { uTime: { value: 0 }, uAmount: { value: 1 } },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    `,
    fragmentShader: /* glsl */ `
      varying vec2 vUv;
      uniform float uTime;
      uniform float uAmount;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
      }
      float fbm(vec2 p) {
        float v = 0.0, a = 0.5;
        for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; }
        return v;
      }
      void main() {
        vec2 uv = vUv;
        float t = uTime * 0.18;
        vec2 q = vec2(uv.x * 2.2, uv.y * 1.6 - t);
        float warp = fbm(q + vec2(0.0, t * 0.5));
        float x = uv.x - 0.5 + (warp - 0.5) * 0.55 * uv.y + sin(uv.y * 5.0 - uTime * 0.6) * 0.06 * uv.y;
        float column = exp(-pow(x * mix(9.0, 3.2, uv.y), 2.0));
        float n = fbm(vec2(x * 4.0, uv.y * 3.0 - t * 2.0) + warp);
        float fade = smoothstep(0.0, 0.12, uv.y) * smoothstep(1.0, 0.45, uv.y);
        float a = column * fade * smoothstep(0.35, 0.85, n) * 0.42 * uAmount;
        gl_FragColor = vec4(vec3(0.95, 0.92, 0.86), a);
      }
    `,
  });

/* ---------- model ---------- */

export type OnixHandle = {
  /** 0 = assembled, 1 = fully exploded. Read every frame. */
  explode: { current: number };
  smoke?: { current: number };
};

type Props = OnixHandle & {
  design: OnixDesign;
  /**
   * DOM elements positioned over the canvas at each part (body, bowl, tealight, bottle).
   * Projected by hand rather than with drei's Html, whose portals throw on route changes.
   */
  labelEls?: RefObject<(HTMLElement | null)[]>;
  showBottle?: boolean;
};

export function Onix({ design, explode, smoke, labelEls, showBottle = true }: Props) {
  const bodyCanvas = useMemo(() => (typeof document !== "undefined" ? document.createElement("canvas") : null), []);
  const labelCanvas = useMemo(() => (typeof document !== "undefined" ? document.createElement("canvas") : null), []);

  const tex = useMemo(() => {
    if (!bodyCanvas || !labelCanvas) return null;
    bodyCanvas.width = BODY_TEX.w;
    bodyCanvas.height = BODY_TEX.h;
    return { body: makeCanvasTexture(bodyCanvas), label: makeCanvasTexture(labelCanvas) };
  }, [bodyCanvas, labelCanvas]);

  const geo = useMemo(() => {
    const outerProfile: [number, number][] = [[RB - 0.14, 0], [RB - 0.03, 0.03], [RB, 0.14]];
    for (let i = 1; i <= 24; i++) {
      const y = 0.14 + ((H - 0.2 - 0.14) * i) / 24;
      outerProfile.push([rOuter(y), y]);
    }
    outerProfile.push([RT - 0.02, H - 0.02], [RT - 0.07, H]);
    return {
      outer: lathe(outerProfile, 160, true),
      inner: lathe([
        [RT - 0.07, H],
        [RT - WALL + 0.05, H],
        [rInner(H - 0.08), H - 0.08],
        [rInner(FLOOR + 0.12), FLOOR + 0.12],
        [rInner(FLOOR) - 0.1, FLOOR],
        [0, FLOOR],
      ]),
      foot: lathe([[0, 0.001], [RB - 0.14, 0.001]], 64),
      edge: archEdgeGeometry(),
      bowl: lathe(
        [
          [RT + 0.04, H + 0.05],
          [RT - 0.02, H + 0.11],
          [RT - 0.16, H + 0.09],
          [RT - 0.42, H - 0.2],
          [RT - 0.75, H - 1.25],
          [2.1, H - 1.75],
          [0, H - 1.8],
        ],
        96,
      ),
      oil: new THREE.CircleGeometry(2.86, 64).rotateX(-Math.PI / 2),
      cup: lathe([[0, 0], [1.5, 0], [1.56, 0.05], [1.56, 1.0], [1.61, 1.06]], 64),
      wax: new THREE.CylinderGeometry(1.5, 1.5, 0.9, 64),
      wick: new THREE.CylinderGeometry(0.035, 0.03, 0.34, 8),
      bottle: lathe([[0, 0], [1.24, 0], [1.34, 0.12], [1.34, 3.15], [1.2, 3.55], [0.6, 3.82], [0.56, 4.25]], 64),
      label: new THREE.CylinderGeometry(1.355, 1.355, 2.1, 64, 1, true, -1.25, 2.5),
      cap: new THREE.CylinderGeometry(0.74, 0.76, 1.35, 48),
    };
  }, []);

  const mats = useMemo(() => {
    const glazeOut = withArchCut(
      new THREE.MeshPhysicalMaterial({
        roughness: 0.3,
        clearcoat: 0.9,
        clearcoatRoughness: 0.14,
        side: THREE.DoubleSide,
      }),
    );
    const glazeIn = withArchCut(
      new THREE.MeshPhysicalMaterial({ roughness: 0.42, clearcoat: 0.5, side: THREE.DoubleSide }),
    );
    return {
      glazeOut,
      glazeIn,
      edge: new THREE.MeshStandardMaterial({ roughness: 0.85, side: THREE.DoubleSide }),
      foot: new THREE.MeshStandardMaterial({ color: "#cfc6b6", roughness: 0.95 }),
      alu: new THREE.MeshStandardMaterial({
        color: "#e2e2df",
        metalness: 0.9,
        roughness: 0.34,
        side: THREE.DoubleSide,
      }),
      oil: new THREE.MeshPhysicalMaterial({
        color: "#c98a2c",
        roughness: 0.05,
        transparent: true,
        opacity: 0.7,
        emissive: "#5a2a00",
        emissiveIntensity: 0.4,
      }),
      cup: new THREE.MeshStandardMaterial({
        color: "#e4e2de",
        metalness: 0.65,
        roughness: 0.32,
        side: THREE.DoubleSide,
      }),
      wax: new THREE.MeshStandardMaterial({ color: "#f3efe7", roughness: 0.65, emissive: "#ff9a3c", emissiveIntensity: 0.05 }),
      wick: new THREE.MeshStandardMaterial({ color: "#141210", roughness: 1 }),
      glass: new THREE.MeshPhysicalMaterial({
        color: "#b7652a",
        roughness: 0.06,
        transmission: 0.82,
        thickness: 1.4,
        ior: 1.5,
        attenuationColor: new THREE.Color("#5b2406"),
        attenuationDistance: 1.6,
        clearcoat: 1,
      }),
      label: new THREE.MeshStandardMaterial({ roughness: 0.7 }),
      cap: new THREE.MeshStandardMaterial({ color: "#0d0d0e", roughness: 0.42, metalness: 0.2 }),
      flame: flameMaterial(),
      glow: glowMaterial(),
      smoke: smokeMaterial(),
    };
  }, []);

  // Repaint the brand artwork whenever the design changes.
  useEffect(() => {
    if (!tex || !bodyCanvas || !labelCanvas) return;
    paintBody(bodyCanvas, design);
    paintLabel(labelCanvas, design);
    tex.body.needsUpdate = true;
    tex.label.needsUpdate = true;
    mats.glazeOut.map = tex.body;
    mats.glazeOut.needsUpdate = true;
    mats.label.map = tex.label;
    mats.label.needsUpdate = true;
    mats.glazeIn.color.set(design.glaze);
    mats.edge.color.set(design.glaze).offsetHSL(0, -0.05, -0.04);
  }, [design, tex, bodyCanvas, labelCanvas, mats]);

  useEffect(
    () => () => {
      Object.values(geo).forEach((g) => g.dispose());
      Object.values(mats).forEach((m) => m.dispose());
      tex?.body.dispose();
      tex?.label.dispose();
    },
    [geo, mats, tex],
  );

  const bowl = useRef<THREE.Group>(null);
  const light = useRef<THREE.Group>(null);
  const bottle = useRef<THREE.Group>(null);
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
    if (bowl.current) {
      bowl.current.position.y = e * 4.6;
      bowl.current.rotation.x = e * 0.22;
      bowl.current.rotation.z = -e * 0.08;
    }
    if (light.current) {
      light.current.position.z = e * 6.4;
      light.current.position.y = e * 0.4;
    }
    if (bottle.current) {
      bottle.current.position.x = 6.6 + e * 2.6;
      bottle.current.position.y = e * 1.2;
      bottle.current.rotation.z = -e * 0.12;
    }
    const flicker = 0.85 + Math.sin(t * 13) * 0.06 + Math.sin(t * 31.7) * 0.05 + Math.sin(t * 5.3) * 0.04;
    if (candle.current) candle.current.intensity = 9 * flicker;
    mats.flame.uniforms.uTime.value = t;
    mats.glow.uniforms.uPower.value = flicker;
    mats.smoke.uniforms.uTime.value = t;
    mats.smoke.uniforms.uAmount.value = s;
    const show = THREE.MathUtils.smoothstep(e, 0.55, 0.9);
    labelEls?.current.forEach((el, i) => {
      const a = anchors.current[i];
      if (!el || !a) return;
      projected.setFromMatrixPosition(a.matrixWorld).project(camera);
      const x = ((projected.x + 1) / 2) * size.width;
      const y = ((1 - projected.y) / 2) * size.height;
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      el.style.opacity = String(show);
    });
  });

  return (
    <group>
      {/* body */}
      <mesh geometry={geo.outer} material={mats.glazeOut} castShadow receiveShadow />
      <mesh geometry={geo.inner} material={mats.glazeIn} receiveShadow />
      <mesh geometry={geo.edge} material={mats.edge} />
      <mesh geometry={geo.foot} material={mats.foot} />
      <object3D ref={anchor(0)} position={[-RB - 0.2, 2.6, 0]} />

      {/* removable aluminium bowl with a film of oil */}
      <group ref={bowl}>
        <mesh geometry={geo.bowl} material={mats.alu} castShadow />
        <mesh geometry={geo.oil} material={mats.oil} position={[0, H - 1.25, 0]} />
      <object3D ref={anchor(1)} position={[RT + 0.3, H + 0.2, 0]} />
      </group>

      {/* tealight */}
      <group ref={light} position={[0, 0, 0]}>
        <group position={[0, FLOOR, 0.45]}>
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
          <pointLight ref={candle} color="#ff9d4d" position={[0, 2.1, 0]} distance={18} decay={2} />
      <object3D ref={anchor(2)} position={[1.9, 0.6, 0]} />
        </group>
      </group>

      {/* rising scent */}
      <Billboard position={[0, H + 5.4, 0]}>
        <mesh material={mats.smoke}>
          <planeGeometry args={[5.5, 10.5]} />
        </mesh>
      </Billboard>

      {/* signature scent bottle */}
      {showBottle && (
        <group ref={bottle} position={[6.6, 0, 0.6]}>
          <mesh geometry={geo.bottle} material={mats.glass} castShadow />
          <mesh geometry={geo.label} material={mats.label} position={[0, 1.75, 0]} />
          <mesh geometry={geo.cap} material={mats.cap} position={[0, 4.88, 0]} castShadow />
      <object3D ref={anchor(3)} position={[1.6, 3.6, 0]} />
        </group>
      )}
    </group>
  );
}
