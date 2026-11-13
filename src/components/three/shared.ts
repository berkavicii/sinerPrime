import * as THREE from "three";

/* Pieces shared by the procedural products (ONIX, Kubbe). */

export function lathe(points: [number, number][], segments = 128, remapHeight = 0) {
  const g = new THREE.LatheGeometry(
    points.map(([r, y]) => new THREE.Vector2(r, y)),
    segments,
    Math.PI,
    Math.PI * 2,
  );
  if (remapHeight) {
    // Lathe UVs advance per profile point; we want v proportional to height.
    const pos = g.attributes.position;
    const uv = g.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setY(i, pos.getY(i) / remapHeight);
    uv.needsUpdate = true;
  }
  return g;
}

/* ---------- shaders ---------- */

export const flameMaterial = () =>
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

export const glowMaterial = () =>
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

export const smokeMaterial = () =>
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

/** Moves DOM labels over the canvas to follow 3D anchors (drei's Html portals throw on route changes). */
export function projectLabels(
  labelEls: (HTMLElement | null)[] | undefined,
  anchors: (THREE.Object3D | null)[],
  camera: THREE.Camera,
  size: { width: number; height: number },
  opacity: number,
  v: THREE.Vector3,
) {
  labelEls?.forEach((el, i) => {
    const a = anchors[i];
    if (!el || !a) return;
    v.setFromMatrixPosition(a.matrixWorld).project(camera);
    const x = ((v.x + 1) / 2) * size.width;
    const y = ((1 - v.y) / 2) * size.height;
    el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    el.style.opacity = String(opacity);
  });
}
