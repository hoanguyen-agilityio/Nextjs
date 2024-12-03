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
  async redirects() {
    return [
      {
        source: '/detail/edit/:id*',
        destination: '/edit/:id*',
        permanent: true,
      },
      {
        source: '/detail/add',
        destination: '/add',
        permanent: true,
      },
      {
        source: '/edit/add',
        destination: '/add',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
