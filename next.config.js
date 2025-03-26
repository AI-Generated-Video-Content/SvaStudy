/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This exports your app as static HTML
  basePath: process.env.NODE_ENV === 'production' ? '/SvaStudy' : '',  // Use your GitHub repo name
  images: {
    unoptimized: true,  // Required for static export
  },
};

module.exports = nextConfig; 