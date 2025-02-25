import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add domains if you are loading external images
  },
};

export default nextConfig;
