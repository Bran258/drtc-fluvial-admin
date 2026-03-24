import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://backend-drtc.onrender.com/api/v1/:path*",
      },
    ];
  },
};

export default nextConfig;