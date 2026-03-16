/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: "/Portfolio",
  assetPrefix: "/Portfolio/",
  trailingSlash: true,
}

export default nextConfig
