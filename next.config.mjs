/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
      },
      {
        protocol: "https",
        hostname: "f005.backblazeb2.com",
      }
    ],
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  }
};

export default nextConfig;
