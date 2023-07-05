/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/Home',
        permanent: true,
      },



    ];
  },
  images: {
    domains: ['cdn.citientertainment.com', 'res.cloudinary.com'],
  },
};

module.exports = nextConfig
