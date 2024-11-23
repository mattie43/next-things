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
        ],
    },
};

export default nextConfig;
