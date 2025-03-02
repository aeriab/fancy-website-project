import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/fancy-website-project",  // Replace with your GitHub repository name
  assetPrefix: "/fancy-website-project/",
};

export default nextConfig;