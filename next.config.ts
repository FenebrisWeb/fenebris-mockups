import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 defaults `images.qualities` to [75] and silently coerces any
    // other `quality` prop down to it — that's what was flattening the
    // wigomaniav2 hero banners. Allow the higher tiers we actually use.
    qualities: [75, 90, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fenebrisindia.com",
      },
      {
        protocol: "https",
        hostname: "www.wigomania.com",
      },
      {
        protocol: "https",
        hostname: "staging.wigomania.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "unitattva.com",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
};

export default nextConfig;
