/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static export
    images: {
      unoptimized: true, // Disable Next.js image optimization (GitHub Pages doesn't support it)
    },
    // basePath: "/fancy-website-project", // Replace with your actual repository name
    // assetPrefix: "/fancy-website-project/",
  };
  
  module.exports = nextConfig;