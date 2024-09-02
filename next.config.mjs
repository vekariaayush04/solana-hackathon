/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        NEXT_PUBLIC_DEVNET_ENDPOINT: process.env.NEXT_PUBLIC_DEVNET_ENDPOINT,
    }
};

export default nextConfig;
