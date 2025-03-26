/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This exports your app as static HTML
  distDir: 'out',    // Explicitly specify the output directory
  basePath: process.env.NODE_ENV === 'production' ? '/SvaStudy' : '',  // Use your GitHub repo name
  images: {
    unoptimized: true,  // Required for static export
  },
  // Add this to ensure GitHub Pages doesn't try to process as Jekyll
  trailingSlash: true,
};

module.exports = nextConfig; 