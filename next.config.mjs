/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/shradd-portfolio',
  assetPrefix: '/shradd-portfolio',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
