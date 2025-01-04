import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.ajio.com",
      },
    ],
  },
};

export default nextConfig;
