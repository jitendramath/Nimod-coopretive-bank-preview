/** @type {import('next').NextConfig} */
const nextConfig = {
  // इमेज ऑप्टिमाइजेशन के लिए (अगर तुम बाहर से इमेज लोड करो)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // बेहतर परफॉरमेंस के लिए
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
