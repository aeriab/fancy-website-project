/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static export
    images: {
      unoptimized: true, // Disable Next.js image optimization (GitHub Pages doesn't support it)
    },
    // basePath: "/fancy-website-project", // COMMENT OUT IF RUNNING LOCALLY
    // assetPrefix: "/fancy-website-project/", // BRING BACK IF DEPLOYING TO GITHUB PAGES
  };
  
  module.exports = nextConfig;