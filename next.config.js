/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Replace with your real IDX/CDN host(s) when live
      { protocol: 'https', hostname: '**.your-idx-cdn.com' }
    ]
  },
  experimental: {}
};
