/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yqnvrjriorwuathbmbxd.supabase.co",
        pathname: "/storage/v1/object/public/post-images/**",
      },
    ],
  },
};

export default nextConfig;
