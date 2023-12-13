// next.config.js
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "store.storeimages.cdn-apple.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.apple.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i9.ytimg.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
        pathname: "**",
      }
    ]
  },
};

module.exports = withContentlayer(nextConfig);
