/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "fybjvcnworlikfxfkeer.supabase.co",
      },
      {
        protocol: "https",
        hostname: "digital.ihg.com",
      },
      {
        protocol: "https",
        hostname: "cache.marriott.com",
      },
    ],
  },
};

export default nextConfig;
