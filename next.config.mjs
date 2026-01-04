/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "projects.candyboxdesign.com",
      },
    ],
  },
};

export default nextConfig;
