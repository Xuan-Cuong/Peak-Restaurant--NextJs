// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Bật chế độ Strict Mode của React để phát hiện lỗi tiềm ẩn
    images: {
      // Cho phép Next.js tối ưu hóa hình ảnh từ các domain này
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.peaknyc.com',
          port: '', // Để trống nếu là port mặc định (443 cho https)
          pathname: '/wp-content/**', // Cho phép tất cả ảnh trong thư mục /wp-content/
        },
        // Thêm các domain khác nếu bạn sử dụng ảnh từ nguồn khác
        // Ví dụ:
        // {
        //   protocol: 'https',
        //   hostname: 'images.unsplash.com',
        // },
      ],
      // (Tùy chọn) Cấu hình khác cho hình ảnh nếu cần
      // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    // (Tùy chọn) Các cấu hình khác bạn có thể cần sau này:
    // env: {
    //   CUSTOM_ENV_VARIABLE: process.env.CUSTOM_ENV_VARIABLE,
    // },
    // async redirects() {
    //   return [
    //     {
    //       source: '/old-path',
    //       destination: '/new-path',
    //       permanent: true,
    //     },
    //   ]
    // },
  };
  
  module.exports = nextConfig;