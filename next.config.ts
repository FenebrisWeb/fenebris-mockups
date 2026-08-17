import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fenebrisindia.com",
      },
    ],
  },
};

export default nextConfig;
