/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true, // इसे हटा दिया है क्योंकि Next 15 में यह पहले से ऑन रहता है
  
  // अगर भविष्य में बाहरी इमेज (जैसे Google/Cloudinary) यूज़ करनी पड़ी तो यह काम आएगा
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
