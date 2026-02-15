/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Performance: Use SWC for faster minification

  // Images: Prioritize modern formats for Apple-like crispness
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
