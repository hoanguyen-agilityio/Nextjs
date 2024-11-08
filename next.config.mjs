/** @type {import('next').NextConfig} */
function createRemotePattern(hostname) {
  return {
    protocol: 'https',
    hostname,
    port: '',
    pathname: '/**',
  };
}
const nextConfig = {
  images: {
    remotePatterns: [
      createRemotePattern('loremflickr.com'),
      createRemotePattern('picsum.photos'),
      createRemotePattern('fastly.picsum.photos'),
    ],
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png |webp)",
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, must-revalidate',
          }
        ]
      }
    ]
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
