"use client";

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

/*
  Slow, warm wisps of scent drifting upwards: domain-warped fbm drawn on a
  single full-screen triangle. The pointer stirs the air around it.
*/
const frag = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform vec2 uRes;
  uniform vec2 uPointer;
  uniform float uFade;
  varying vec2 vUv;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
  }
  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
    for (int i = 0; i < 4; i++) { v += a * noise(p); p = m * p; a *= 0.5; }
    return v;
  }

  void main() {
    vec2 uv = (vUv - 0.5) * vec2(uRes.x / uRes.y, 1.0);
    float t = uTime * 0.06;

    // stir the air around the pointer
    vec2 toP = uv - uPointer;
    float stir = exp(-dot(toP, toP) * 6.0);
    uv += vec2(-toP.y, toP.x) * stir * 0.35;

    vec2 p = uv * 1.5 + vec2(0.0, -t * 2.2);
    vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, 1.3) - t));
    vec2 r = vec2(fbm(p + 3.2 * q + vec2(1.7, 9.2) + t * 1.4), fbm(p + 3.2 * q + vec2(8.3, 2.8) - t));
    float f = fbm(p + 2.8 * r);

    // soft body of smoke plus fine filaments along the iso-lines
    float body = smoothstep(0.58, 1.0, f);
    float fil = 1.0 - smoothstep(0.0, 0.02, abs(fract(f * 4.0 + r.x * 1.5) - 0.5) - 0.46);
    fil *= smoothstep(0.42, 0.8, f);

    // rise from below, keep the top calm
    float rise = smoothstep(0.75, -0.55, vUv.y - 0.15) * 0.7 + 0.3;
    float vig = smoothstep(1.25, 0.2, length((vUv - vec2(0.62, 0.42)) * vec2(1.3, 1.0)));

    vec3 gold = vec3(0.78, 0.64, 0.42);
    vec3 hi = vec3(0.98, 0.90, 0.74);
    float a = (body * 0.32 + fil * 0.5 + stir * 0.06) * rise * vig * uFade;
    vec3 col = mix(gold, hi, clamp(fil * 0.8 + body * 0.4, 0.0, 1.0));
    gl_FragColor = vec4(col * a, a);
  }
`;

function Field({ fade }: { fade: { current: number } }) {
  const { size } = useThree();
  const pointer = useRef(new THREE.Vector2(0.4, -0.1));
  const target = useRef(new THREE.Vector2(0.4, -0.1));

  const mat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: {
          uTime: { value: 0 },
          uRes: { value: new THREE.Vector2(1, 1) },
          uPointer: { value: new THREE.Vector2() },
          uFade: { value: 0 },
        },
        vertexShader: /* glsl */ `
          varying vec2 vUv;
          void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
        `,
        fragmentShader: frag,
      }),
    [],
  );
  const geo = useMemo(() => {
    // one triangle covering the screen
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
    g.setAttribute("uv", new THREE.Float32BufferAttribute([0, 0, 2, 0, 0, 2], 2));
    return g;
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const aspect = window.innerWidth / window.innerHeight;
      target.current.set((e.clientX / window.innerWidth - 0.5) * aspect, 0.5 - e.clientY / window.innerHeight);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      mat.dispose();
      geo.dispose();
    };
  }, [mat, geo]);

  useFrame(({ clock }, dt) => {
    pointer.current.lerp(target.current, 1 - Math.exp(-dt * 2.5));
    mat.uniforms.uTime.value = clock.elapsedTime + 40;
    mat.uniforms.uRes.value.set(size.width, size.height);
    mat.uniforms.uPointer.value.copy(pointer.current);
    mat.uniforms.uFade.value = THREE.MathUtils.damp(mat.uniforms.uFade.value, fade.current, 1.2, dt);
  });

  return <mesh geometry={geo} material={mat} frustumCulled={false} />;
}

// rendered at a reduced resolution: the smoke is soft, and a full-res fbm shader stutters scrolling
export default function ScentField({ active = true, fade }: { active?: boolean; fade: { current: number } }) {
  return (
    <Canvas
      frameloop={active ? "always" : "never"}
      dpr={0.6}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 1] }}
    >
      <Field fade={fade} />
    </Canvas>
  );
}
