/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // 🔥 यह लाइन 'undici' के मॉडर्न कोड को Vercel पर क्रैश होने से बचाएगी
  transpilePackages: ['undici', 'firebase', '@firebase/auth'],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
};

export default nextConfig;
