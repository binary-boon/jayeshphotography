/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
    NEXT_PUBLIC_YOUTUBE_CHANNEL_NAME: process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_NAME,
    NEXT_PUBLIC_YOUTUBE_API_KEY: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
  }
};

export default nextConfig;
