import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "~": path.resolve(__dirname), // Ensure `~` points to project root
    };
    return config;
  },
};

export default nextConfig;