import * as THREE from "three";

export type OnixPattern = "none" | "lines" | "wave" | "rings";

export type OnixDesign = {
  glaze: string;
  accent: string;
  pattern: OnixPattern;
  /** Logo drawn on the front of the body and on the bottle label. */
  logo: HTMLImageElement | null;
  /** Recolours the logo with the accent colour (useful on light glazes). */
  tintLogo: boolean;
};

// The body texture wraps the cylinder: u = 0 is the back seam, u = 0.5 the front.
export const BODY_TEX = { w: 2400, h: 800 };

function tinted(img: HTMLImageElement, color: string) {
  const c = document.createElement("canvas");
  c.width = img.naturalWidth || img.width;
  c.height = img.naturalHeight || img.height;
  const g = c.getContext("2d")!;
  g.drawImage(img, 0, 0, c.width, c.height);
  g.globalCompositeOperation = "source-in";
  g.fillStyle = color;
  g.fillRect(0, 0, c.width, c.height);
  return c;
}

function drawContained(
  g: CanvasRenderingContext2D,
  src: CanvasImageSource & { width: number; height: number },
  cx: number,
  cy: number,
  maxW: number,
  maxH: number,
) {
  const s = Math.min(maxW / src.width, maxH / src.height);
  const w = src.width * s;
  const h = src.height * s;
  g.drawImage(src, cx - w / 2, cy - h / 2, w, h);
}

function paintPattern(g: CanvasRenderingContext2D, d: OnixDesign) {
  const { w, h } = BODY_TEX;
  g.save();
  g.strokeStyle = d.accent;
  g.fillStyle = d.accent;
  g.lineCap = "round";

  if (d.pattern === "rings") {
    for (const [y, lw] of [
      [h * 0.06, 6],
      [h * 0.095, 2],
      [h * 0.93, 2],
      [h * 0.955, 6],
    ] as const) {
      g.lineWidth = lw;
      g.beginPath();
      g.moveTo(0, y);
      g.lineTo(w, y);
      g.stroke();
    }
  }

  if (d.pattern === "lines") {
    // Diagonal sweeps on both flanks, leaving the front panel clear for the logo.
    for (const side of [-1, 1]) {
      const cx = w / 2 + side * w * 0.21;
      for (let i = 0; i < 7; i++) {
        g.lineWidth = i % 3 === 0 ? 26 : 7;
        g.globalAlpha = i % 3 === 0 ? 1 : 0.75;
        const off = (i - 3) * 46;
        g.beginPath();
        g.moveTo(cx + off - side * 260, h + 20);
        g.lineTo(cx + off + side * 260, -20);
        g.stroke();
      }
    }
    g.globalAlpha = 1;
  }

  if (d.pattern === "wave") {
    for (let k = 0; k < 3; k++) {
      g.lineWidth = k === 1 ? 18 : 5;
      g.beginPath();
      for (let x = 0; x <= w; x += 8) {
        const y = h * (0.78 - k * 0.055) + Math.sin((x / w) * Math.PI * 4 + k * 0.6) * h * 0.06;
        if (x === 0) g.moveTo(x, y);
        else g.lineTo(x, y);
      }
      g.stroke();
    }
  }
  g.restore();
}

export function paintBody(canvas: HTMLCanvasElement, d: OnixDesign) {
  const { w, h } = BODY_TEX;
  canvas.width = w;
  canvas.height = h;
  const g = canvas.getContext("2d")!;
  g.fillStyle = d.glaze;
  g.fillRect(0, 0, w, h);

  // A faint vertical glaze variation so the ceramic never reads as flat CG plastic.
  const grad = g.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, "rgba(255,255,255,0.05)");
  grad.addColorStop(0.5, "rgba(0,0,0,0)");
  grad.addColorStop(1, "rgba(0,0,0,0.06)");
  g.fillStyle = grad;
  g.fillRect(0, 0, w, h);

  paintPattern(g, d);

  if (d.logo) {
    const src = d.tintLogo ? tinted(d.logo, d.accent) : d.logo;
    drawContained(g, src, w / 2, h * 0.24, 420, h * 0.3);
  }
}

export function paintLabel(canvas: HTMLCanvasElement, d: OnixDesign) {
  const w = 768;
  const h = 640;
  canvas.width = w;
  canvas.height = h;
  const g = canvas.getContext("2d")!;
  g.fillStyle = "#f5f1ea";
  g.fillRect(0, 0, w, h);
  g.fillStyle = d.accent;
  g.fillRect(0, h - 70, w, 70);
  if (d.logo) {
    const src = d.tintLogo ? tinted(d.logo, d.accent) : d.logo;
    drawContained(g, src, w / 2, h * 0.36, 360, 230);
  }
  g.fillStyle = "#2a2622";
  g.textAlign = "center";
  g.font = "500 34px Georgia, serif";
  g.fillText("SIGNATURE SCENT", w / 2, h * 0.7);
  g.font = "400 28px Georgia, serif";
  g.fillText("No. 02 · 10 ml", w / 2, h * 0.78);
}

export function makeCanvasTexture(canvas: HTMLCanvasElement) {
  const t = new THREE.CanvasTexture(canvas);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

export function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}
