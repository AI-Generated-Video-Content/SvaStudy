/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  basePath: process.env.NODE_ENV === 'production' ? "/SvaStudy" : "",
  assetPrefix: process.env.NODE_ENV === 'production' ? "/SvaStudy/" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
