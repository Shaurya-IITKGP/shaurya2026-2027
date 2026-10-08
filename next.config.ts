import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.145.49.3"],

  async headers() {
    return [
      {
        // Images (png, jpg, jpeg, gif, webp, svg, ico, avif)
        source: "/:path*.(png|jpg|jpeg|gif|webp|svg|ico|avif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=259200, must-revalidate",
          },
        ],
      },
      {
        // 3D models (glb, gltf, obj, fbx)
        source: "/:path*.(glb|gltf|obj|fbx)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=259200, must-revalidate",
          },
        ],
      },
      {
        // Fonts (woff, woff2, ttf, otf, eot)
        source: "/:path*.(woff|woff2|ttf|otf|eot)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=259200, must-revalidate",
          },
        ],
      },
      {
        // Videos & audio (mp4, webm, ogg, mp3)
        source: "/:path*.(mp4|webm|ogg|mp3)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=259200, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
