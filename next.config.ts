import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  async redirects() {
    return [{ source: "/insights", destination: "/blog", permanent: true }];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.tractrac.co",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "msps.tractrac.co",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
