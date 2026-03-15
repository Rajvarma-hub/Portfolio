/** @type {import {  } from "module";('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // GitHub Pages deployment configuration
  output: 'export',

  // Required because your repo name is "Portfolio"
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',

  trailingSlash: true,
}

export default nextConfig