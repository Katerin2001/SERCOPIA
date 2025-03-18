/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.fonleslegaltech.com',
      },
    ],
  },
}

module.exports = nextConfig; 