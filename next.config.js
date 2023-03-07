/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    TWITCH_API_KEY: 'khp0em2rdqf177hpi6yqk9klp5mirq',
    TWITCH_BEARER: 'vr57zizqzfp7k9r0uzv4xk3dpln4e3'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
