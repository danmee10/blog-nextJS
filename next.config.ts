import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Set this to false to ensure type errors are caught during build
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
