import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: "standalone",

  compress: true,

  poweredByHeader: false,

  images: {
    unoptimized: false,
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "motion", "react-icons"],
  },
};

export default withNextIntl(nextConfig);
