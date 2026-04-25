/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/proxy/append',
        destination: 'http://sovereignlab.cloud/temp/append',
      },
    ];
  },
};

export default nextConfig;
