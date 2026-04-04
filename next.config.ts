import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picture.whgd.eu.org",
        pathname: "/file/**",
      },
    ],
  },
};

export default nextConfig;
