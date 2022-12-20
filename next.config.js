/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  // experimental: {
  //   // Required:
  //   // appDir: true,
  // },
  images: {
    domains: [
      'cdn.hswstatic.com',
      's.itl.cat',
      'img.freepik.com',
      'w7.pngwing.com',
      'images.unsplash.com',
      'i.scdn.co',
      'www.pngfind.com',
      'www.investopedia.com',
      'i.pinimg.com',
      'www.wallpaperuse.com',
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
