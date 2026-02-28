/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enable static export
  basePath: "", // Leave empty for username.github.io
  assetPrefix: "", // Leave empty for username.github.io
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "heroui-assets.nyc3.cdn.digitaloceanspaces.com",
      },
      // Add other domains as needed
      {
        protocol: "https",
        hostname: "*.digitaloceanspaces.com",
      },
    ],
  },
  trailingSlash: true, // Important for GitHub Pages
};

export default nextConfig;
