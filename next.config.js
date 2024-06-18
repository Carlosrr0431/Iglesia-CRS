// const withPWA = require("@ducanh2912/next-pwa").default({
//   dest: "public",
//   cacheOnFrontEndNav: true,
//   aggressiveFrontEndNavCaching: true,
//   reloadOnOnline: true,
//   swcMinify: true,
//   disable: process.env.NODE_ENV === "development",
//   workboxOptions: {
//     disableDevLogs: true,
//   },
// });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com", "lh3.googleusercontent.com"],
  },

  experimental: {
    serverActions: {
      allowedOrigins: ["https://d0jvt1bv-3000.brs.devtunnels.ms", "localhost:3000"]
    }
  }
};

module.exports = nextConfig;
