/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Temporarily disable ESLint during build for migration to ESLint v9
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
