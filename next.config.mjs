/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Add any external image domains if needed
    remotePatterns: [],
  },
  // Disable x-powered-by header
  poweredByHeader: false,
  // Enable experimental features if needed
  experimental: {
    // optimizeCss: true, // Uncomment if using Tailwind with CSS optimization
  },
}

export default nextConfig
