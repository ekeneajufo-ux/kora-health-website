/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — served directly from Cloudflare Pages' global edge
  output: 'export',
  // The static export has no server-side image optimizer; serve images as-is
  images: { unoptimized: true },
  // Emit folder-style URLs (e.g. /page/index.html) for clean static hosting
  trailingSlash: true,
};
export default nextConfig;
