import type { NextConfig } from "next";

// Static export: `npm run build` writes a plain HTML/CSS/JS site to `out/`,
// which can be uploaded to Plesk's httpdocs without a Node.js runtime.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
