/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    serverComponentsExternalPackages: ['pdf-parse'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/compliance',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
