/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// Example next.config.js
const path = require("path");

module.exports = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(process.cwd());
    return config;
  },
};
