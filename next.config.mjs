/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // 🔥 Fix for Firebase & Undici Build Error
  transpilePackages: ['undici', 'firebase', '@firebase/auth'],

  // Image optimization safe for all hosting
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // Prevent random Vercel hydration issues
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
};

export default nextConfig;
