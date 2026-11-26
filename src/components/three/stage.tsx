"use client";

import { useEffect, useState } from "react";
import { ContactShadows, Environment, Lightformer } from "@react-three/drei";
import { loadImage, type OnixDesign } from "./brand-texture";

/** Studio lighting: a warm key, a champagne rim and soft reflections for the glaze and aluminium. */
export function StageLights({
  shadowY = 0,
  shadow = true,
  glossy = false,
}: {
  shadowY?: number;
  /** false when the caller places its own shadow, e.g. one that travels with the product */
  shadow?: boolean;
  /** tall softboxes for black glaze: long vertical highlights like a product photo */
  glossy?: boolean;
}) {
  return (
    <>
      <ambientLight intensity={0.12} />
      <spotLight position={[14, 26, 18]} angle={0.42} penumbra={1} intensity={1400} decay={2} color="#fff3e2" />
      <directionalLight position={[-16, 9, -14]} intensity={2.2} color="#d6ae6e" />
      <directionalLight position={[10, 4, -16]} intensity={0.8} color="#8aa0c8" />
      <Environment resolution={512} frames={1}>
        {/* black glaze mirrors this one almost white on flat shoulders, so it is softer there */}
        <Lightformer form="rect" intensity={glossy ? 1.5 : 2.4} position={[0, 10, 8]} scale={[16, 5, 1]} />
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
        {glossy && (
          <>
            {/* key strip front-left and a narrower fill front-right */}
            <Lightformer form="rect" intensity={3.2} position={[-7, 5, 9]} rotation-y={-0.65} scale={[2.2, 16, 1]} />
            <Lightformer form="rect" intensity={1.6} position={[8, 5, 8]} rotation-y={0.8} scale={[1.2, 16, 1]} />
            {/* a warm kicker behind, and a low bounce that lifts the shoulder of the base */}
            <Lightformer form="rect" intensity={1.2} color="#f2d3a4" position={[3, 6, -10]} scale={[1.4, 14, 1]} />
            <Lightformer form="rect" intensity={0.6} position={[0, -2, 10]} rotation-x={0.4} scale={[18, 2, 1]} />
          </>
        )}
      </Environment>
      {shadow && <ContactShadows position={[0, shadowY, 0]} scale={34} blur={2.6} far={12} opacity={0.62} resolution={512} />}
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
