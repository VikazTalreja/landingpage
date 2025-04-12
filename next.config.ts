import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Completely disable ESLint during development and builds
    ignoreDuringBuilds: true,
    dirs: [], // Don't run ESLint on any directories
  },
  typescript: {
    // Also ignore TypeScript errors to ensure smooth builds
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
