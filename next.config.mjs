/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "*dog.ceo*",
            },
        ],
    },
};

export default nextConfig;
