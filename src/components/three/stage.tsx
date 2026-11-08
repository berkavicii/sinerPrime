"use client";

import { useEffect, useState } from "react";
import { ContactShadows, Environment, Lightformer } from "@react-three/drei";
import { loadImage, type OnixDesign } from "./brand-texture";

/** Studio lighting: a warm key, a champagne rim and soft reflections for the glaze and aluminium. */
export function StageLights({ shadowY = 0 }: { shadowY?: number }) {
  return (
    <>
      <ambientLight intensity={0.12} />
      <spotLight position={[14, 26, 18]} angle={0.42} penumbra={1} intensity={1400} decay={2} color="#fff3e2" />
      <directionalLight position={[-16, 9, -14]} intensity={2.2} color="#d6ae6e" />
      <directionalLight position={[10, 4, -16]} intensity={0.8} color="#8aa0c8" />
      <Environment resolution={256} frames={1}>
        <Lightformer form="rect" intensity={2.4} position={[0, 10, 8]} scale={[16, 5, 1]} />
        <Lightformer form="rect" intensity={1.1} position={[-12, 4, 4]} rotation-y={Math.PI / 2} scale={[12, 2, 1]} />
        <Lightformer
          form="rect"
          intensity={1.6}
          color="#e9c58c"
          position={[12, 5, -2]}
          rotation-y={-Math.PI / 2}
          scale={[12, 3, 1]}
        />
        <Lightformer form="ring" intensity={0.7} position={[0, 3, -12]} scale={7} />
      </Environment>
      <ContactShadows position={[0, shadowY, 0]} scale={34} blur={2.6} far={12} opacity={0.62} resolution={512} />
    </>
  );
}

export const PRESETS = {
  ivory: { glaze: "#efe8dc", accent: "#a5804c", pattern: "rings", tintLogo: true },
  noir: { glaze: "#151517", accent: "#c8a46a", pattern: "lines", tintLogo: false },
  terracotta: { glaze: "#a9542f", accent: "#f3e7d3", pattern: "wave", tintLogo: true },
  sage: { glaze: "#7d8a77", accent: "#f1ebdf", pattern: "rings", tintLogo: true },
  ink: { glaze: "#1f2d4a", accent: "#e6cf9f", pattern: "lines", tintLogo: true },
} as const satisfies Record<string, Omit<OnixDesign, "logo">>;

export type PresetName = keyof typeof PRESETS;

let defaultLogo: Promise<HTMLImageElement> | null = null;
export function useSinerLogo() {
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  useEffect(() => {
    defaultLogo ??= loadImage("/brand/logo-full.png");
    let live = true;
    defaultLogo.then((i) => live && setImg(i)).catch(() => {});
    return () => {
      live = false;
    };
  }, []);
  return img;
}
