/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_LOCAL_URI: "mongodb://localhost:27017/yaatri-app",
  },
  images: {
    domains: ["a0.muscache.com", "res.cloudinary.com", "picsum.photos"],
  },
};

module.exports = nextConfig;
