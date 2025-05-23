/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*dog.ceo*",
      },
      {
        hostname: "*cdn-siege.fly.dev*",
      },
      {
        hostname: "*realm.wiki*",
      },
      {
        hostname: "*imgur*",
      },
    ],
  },
};

export default nextConfig;
