import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fenebrisindia.com",
      },
      {
        protocol: "https",
        hostname: "www.wigomania.com",
      },
    ],
  },
};

export default nextConfig;
