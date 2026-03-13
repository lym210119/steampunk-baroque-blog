/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 如果需要完全静态导出，可注释掉
  images: {
    unoptimized: true, // 静态导出需要
  },
}

module.exports = nextConfig
