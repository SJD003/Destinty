/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/Destinty',
  assetPrefix: '/Destinty/',
  trailingSlash: true,
};
export default nextConfig;
