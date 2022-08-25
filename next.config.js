/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BACK_END_URL: process.env.BACK_END_URL,
  },
};

module.exports = nextConfig;
