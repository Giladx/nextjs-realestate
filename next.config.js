/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['bayut-production.s3.eu-central-1.amazonaws.com'],
  },
  reactStrictMode: true,

  // reactStrictMode: true, // We also don't need this this
  swcMinify: true,
};

module.exports = nextConfig;
