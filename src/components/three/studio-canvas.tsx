"use client";

import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Onix } from "./onix";
import { StageLights } from "./stage";
import type { OnixDesign } from "./brand-texture";

function Model({ design, exploded }: { design: OnixDesign; exploded: boolean }) {
  const explode = useRef(0);
  useFrame((_, dt) => {
    explode.current = THREE.MathUtils.damp(explode.current, exploded ? 1 : 0, 3.5, dt);
  });
  return (
    <group position={[-2.6, 0, 0]}>
      <Onix design={design} explode={explode} />
    </group>
  );
}

export default function StudioCanvas({ design, exploded }: { design: OnixDesign; exploded: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
      camera={{ position: [7, 12, 42], fov: 28, near: 0.5, far: 200 }}
    >
      <StageLights />
      <Model design={design} exploded={exploded} />
      <OrbitControls
        target={[0, 6.5, 0]}
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI * 0.28}
        maxPolarAngle={Math.PI * 0.52}
        autoRotate
        autoRotateSpeed={0.6}
        enableDamping
      />
    </Canvas>
  );
}
