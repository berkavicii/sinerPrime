"use client";

import { useMemo, useRef, type RefObject } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import type { MotionValue } from "motion/react";
import { Onix } from "./onix";
import { PRESETS, StageLights, useSinerLogo } from "./stage";
import { easeInOut, range } from "@/lib/utils";

type LabelEls = RefObject<(HTMLElement | null)[]>;

const damp = THREE.MathUtils.damp;

function Rig({ progress, labelEls }: { progress: MotionValue<number>; labelEls: LabelEls }) {
  const group = useRef<THREE.Group>(null);
  const explode = useRef(0);
  const smoke = useRef(1);
  const look = useRef(new THREE.Vector3(0, 5, 0));
  const { camera, size, pointer } = useThree();
  const logo = useSinerLogo();
  const design = useMemo(() => ({ ...PRESETS.ivory, logo }), [logo]);

  useFrame(({ clock }, dt) => {
    const g = group.current;
    if (!g) return;
    const p = progress.get();
    const t = clock.elapsedTime;
    const narrow = size.width < 768;
    const fit = narrow ? 1.75 : Math.max(1, 1.25 / (size.width / size.height));

    const intro = easeInOut(range(p, 0.05, 0.24));
    const ex = easeInOut(range(p, 0.3, 0.5)) * (1 - easeInOut(range(p, 0.78, 0.9)));
    const outro = easeInOut(range(p, 0.84, 0.97));

    explode.current = damp(explode.current, ex, 5, dt);
    smoke.current = damp(smoke.current, (1 - ex) * (1 - 0.5 * intro * (1 - outro)), 3, dt);

    const heroX = narrow ? 0 : 7.4;
    const outroX = narrow ? 0 : 6.4;
    // on phones the bottle sits far right when exploded, so centre the whole set instead of the body
    const exX = narrow ? -2.6 : 0;
    const x = THREE.MathUtils.lerp(THREE.MathUtils.lerp(THREE.MathUtils.lerp(heroX, 0, intro), exX, ex), outroX, outro);
    g.position.x = damp(g.position.x, x, 4, dt);

    const sway = Math.sin(t * 0.35) * 0.35;
    const rot = -0.45 + sway * (1 - intro) * (1 - ex) + outro * Math.PI * 2 + pointer.x * 0.12;
    g.rotation.y = damp(g.rotation.y, rot, 3, dt);

    const dist = THREE.MathUtils.lerp(THREE.MathUtils.lerp(narrow ? 46 : 40, 34, intro), narrow ? 41 : 38, ex) * fit;
    camera.position.x = damp(camera.position.x, pointer.x * 1.2, 2, dt);
    camera.position.y = damp(camera.position.y, THREE.MathUtils.lerp(8, 10, ex) + pointer.y * 0.8, 2, dt);
    camera.position.z = damp(camera.position.z, dist, 3, dt);
    look.current.set(0, THREE.MathUtils.lerp(4.6, 6.4, ex), 0);
    camera.lookAt(look.current);

    // phones stack copy under the object: push the object into the upper part of the frame
    const cam = camera as THREE.PerspectiveCamera;
    if (narrow) cam.setViewOffset(size.width, size.height, 0, size.height * THREE.MathUtils.lerp(0.22, 0.15, intro), size.width, size.height);
    else if (cam.view?.enabled) cam.clearViewOffset();
  });

  return (
    <group ref={group}>
      <Onix design={design} explode={explode} smoke={smoke} labelEls={labelEls} />
    </group>
  );
}

export default function StoryCanvas({ progress, labelEls }: { progress: MotionValue<number>; labelEls: LabelEls }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 8, 34], fov: 28, near: 0.5, far: 200 }}
    >
      <StageLights />
      <Rig progress={progress} labelEls={labelEls} />
    </Canvas>
  );
}
