import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // GitHub Pages serves a static export; the Sites build continues to use Vinext.
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
