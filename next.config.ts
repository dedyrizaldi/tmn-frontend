import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: "standalone",

  compress: true,

  poweredByHeader: false,

  images: {
    unoptimized: false,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.tmn.co.id",
        pathname: "/storage/**",
      },

      // Untuk development lokal (opsional)
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
      },

      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
      },
    ],
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "motion", "react-icons"],
  },
};

export default withNextIntl(nextConfig);
