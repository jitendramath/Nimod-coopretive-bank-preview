/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // 🔥 यह लाइन सबसे ज्यादा जरूरी है
  transpilePackages: ['undici', 'firebase', '@firebase/auth', '@firebase/component', '@firebase/util'],

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "undici": "undici-types", // Undici को बाइपास करने की कोशिश
    };
    return config;
  },

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
    // serverComponentsExternalPackages: ["undici"], // अगर ऊपर वाला काम न करे तो इसे अनकमेंट करें
  },
};

export default nextConfig;
