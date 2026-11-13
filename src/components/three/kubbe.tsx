"use client";

import { useEffect, useMemo, useRef, type RefObject } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Billboard } from "@react-three/drei";
import { flameMaterial, glowMaterial, lathe, projectLabels, smokeMaterial } from "./shared";

/*
  Kubbe, modelled in centimetres from the product photos: 11.5 cm tall.
  A glazed black base hides the tealight inside its neck; the perforated dome
  sits on top and carries the 50 ml bowl. The perforations are cut in the
  fragment shader, in object space, so the outer and inner shells line up.
*/
export const KUBBE_H = 11.5;
const DOME_Y = 6.0; // dome rests on the neck
const NECK_R = 2.62;
const BORE_R = 2.2;
const BORE_FLOOR = 3.6;

// dome side: a gentle taper up to Y0, then a rounded superellipse shoulder into the flat top
const D = { R: 4.62, RS: 4.42, Y0: 1.8, RC: 2.1, B: 3.7, N: 2.4, WALL: 0.35 };

function domePoint(theta: number, inset = 0): [number, number] {
  const e = 2 / D.N;
  const a = D.RS - D.RC - inset;
  const b = D.B - inset;
  return [D.RC + a * Math.pow(Math.cos(theta), e), D.Y0 + b * Math.pow(Math.sin(theta), e)];
}

const HOLE_GLSL = /* glsl */ `
  varying vec3 vLocal;
  float domeRadius(float y) {
    if (y < ${D.Y0.toFixed(2)}) return mix(${D.R.toFixed(2)}, ${D.RS.toFixed(2)}, y / ${D.Y0.toFixed(2)});
    float s = clamp((y - ${D.Y0.toFixed(2)}) / ${D.B.toFixed(2)}, 0.0, 1.0);
    float sn = pow(s, ${(D.N / 2).toFixed(2)});
    float cs = sqrt(max(1.0 - sn * sn, 0.0));
    return ${D.RC.toFixed(2)} + ${(D.RS - D.RC).toFixed(2)} * pow(cs, ${(2 / D.N).toFixed(4)});
  }
  bool domeHole(vec3 p) {
    if (p.y < 0.45 || p.y > 5.05) return false;
    float row = floor((p.y - 0.55) / 0.64 + 0.5);
    float yc = 0.55 + row * 0.64;
    float n = floor(6.2831853 * domeRadius(yc) / 0.86);
    float a = atan(p.z, p.x) / 6.2831853 * n + mod(row, 2.0) * 0.5;
    float du = (a - floor(a + 0.5)) * 6.2831853 * length(p.xz) / n;
    float dy = p.y - yc;
    return du * du + dy * dy < 0.027;
  }
`;

function withHoles<T extends THREE.Material>(mat: T) {
  mat.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", "#include <common>\nvarying vec3 vLocal;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\nvLocal = position;");
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", `#include <common>\n${HOLE_GLSL}`)
      .replace("void main() {", "void main() {\n  if (domeHole(vLocal)) discard;");
  };
  mat.customProgramCacheKey = () => "kubbe-holes";
  return mat;
}

type Props = {
  /** 0 = assembled, 1 = fully exploded. Read every frame. */
  explode: { current: number };
  smoke?: { current: number };
  /** DOM labels for base, dome, bowl and tealight, positioned every frame. */
  labelEls?: RefObject<(HTMLElement | null)[]>;
};

export function Kubbe({ explode, smoke, labelEls }: Props) {
  const geo = useMemo(() => {
    const shoulder: [number, number][] = [];
    const inner: [number, number][] = [];
    for (let i = 0; i <= 28; i++) {
      const t = (i / 28) * (Math.PI / 2);
      shoulder.push(domePoint(t));
      inner.push(domePoint(t, D.WALL));
    }
    const top = D.Y0 + D.B;
    return {
      base: lathe([
        [3.88, 0],
        [4.02, 0.04],
        [4.12, 0.14],
        [4.72, 1.6],
        [4.74, 1.7],
        [4.74, 5.12],
        [4.7, 5.24],
        [4.6, 5.28],
        [NECK_R + 0.04, 5.28],
        [NECK_R, 5.34],
        [NECK_R, 5.94],
        [NECK_R - 0.06, 6.0],
        [BORE_R + 0.06, 6.0],
        [BORE_R, 5.94],
        [BORE_R, BORE_FLOOR + 0.1],
        [BORE_R - 0.12, BORE_FLOOR],
        [0, BORE_FLOOR],
      ], 128),
      foot: lathe([[0, 0.002], [3.88, 0.002]], 64),
      domeOuter: lathe([
        [D.R - D.WALL, 0],
        [D.R - 0.04, 0],
        [D.R, 0.06],
        ...shoulder.slice(0, -1),
        [D.RC + 0.25, top - 0.02],
        [2.55, top - 0.04],
        [2.38, top - 0.14],
        [1.9, 4.5],
        [1.0, 4.08],
        [0, 4.0],
      ], 160),
      domeInner: lathe([
        [0, 3.62],
        [1.0, 3.7],
        [1.75, 4.05],
        [2.1, 4.8],
        ...inner.slice().reverse(),
        [D.R - D.WALL, 0],
      ], 160),
      liquid: new THREE.CircleGeometry(1.6, 48).rotateX(-Math.PI / 2),
      cup: lathe([[0, 0], [1.9, 0], [1.96, 0.05], [1.96, 1.0], [2.01, 1.06]], 64),
      wax: new THREE.CylinderGeometry(1.9, 1.9, 0.9, 64),
      wick: new THREE.CylinderGeometry(0.035, 0.03, 0.34, 8),
    };
  }, []);

  const mats = useMemo(
    () => ({
      glaze: new THREE.MeshPhysicalMaterial({
        color: "#0b0b0c",
        roughness: 0.16,
        clearcoat: 1,
        clearcoatRoughness: 0.05,
        side: THREE.DoubleSide,
      }),
      domeOuter: withHoles(
        new THREE.MeshPhysicalMaterial({
          color: "#0b0b0c",
          roughness: 0.16,
          clearcoat: 1,
          clearcoatRoughness: 0.05,
          side: THREE.DoubleSide,
        }),
      ),
      // the inside is glazed too, but a touch warmer so the candle reads through the holes
      domeInner: withHoles(new THREE.MeshStandardMaterial({ color: "#2a1f17", roughness: 0.38, side: THREE.DoubleSide })),
      foot: new THREE.MeshStandardMaterial({ color: "#8f877b", roughness: 0.95 }),
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
    }),
    [],
  );

  useEffect(
    () => () => {
      Object.values(geo).forEach((g) => g.dispose());
      Object.values(mats).forEach((m) => m.dispose());
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
      light.current.position.y = BORE_FLOOR + THREE.MathUtils.smoothstep(e, 0, 0.55) * 3.4;
      light.current.position.z = THREE.MathUtils.smoothstep(e, 0.35, 1) * 5.6;
    }
    const flicker = 0.85 + Math.sin(t * 13) * 0.06 + Math.sin(t * 31.7) * 0.05 + Math.sin(t * 5.3) * 0.04;
    if (candle.current) candle.current.intensity = 12 * flicker;
    mats.flame.uniforms.uTime.value = t;
    mats.glow.uniforms.uPower.value = flicker;
    mats.inside.uniforms.uPower.value = flicker * 1.6 * (1 - THREE.MathUtils.smoothstep(e, 0, 0.4));
    mats.smoke.uniforms.uTime.value = t;
    mats.smoke.uniforms.uAmount.value = s;
    projectLabels(labelEls?.current, anchors.current, camera, size, THREE.MathUtils.smoothstep(e, 0.55, 0.9), projected);
  });

  return (
    <group>
      {/* base */}
      <mesh geometry={geo.base} material={mats.glaze} castShadow receiveShadow />
      <mesh geometry={geo.foot} material={mats.foot} />
      <object3D ref={anchor(0)} position={[-4.95, 2.8, 0]} />

      {/* the candle's light leaking through the perforations */}
      <Billboard position={[0, DOME_Y - 0.1, 0]}>
        <mesh material={mats.inside}>
          <planeGeometry args={[7.5, 7.5]} />
        </mesh>
      </Billboard>

      {/* perforated dome with the bowl on top */}
      <group ref={dome} position={[0, DOME_Y, 0]}>
        <mesh geometry={geo.domeOuter} material={mats.domeOuter} castShadow />
        <mesh geometry={geo.domeInner} material={mats.domeInner} />
        <mesh geometry={geo.liquid} material={mats.liquid} position={[0, 4.36, 0]} />
        <object3D ref={anchor(1)} position={[4.75, 2.6, 0]} />
        <object3D ref={anchor(2)} position={[2.2, D.Y0 + D.B + 0.2, 0]} />
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
