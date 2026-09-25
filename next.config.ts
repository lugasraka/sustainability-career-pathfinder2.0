import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    optimizePackageImports: ["recharts", "lucide-react", "motion"],
  },
};

export default nextConfig;
