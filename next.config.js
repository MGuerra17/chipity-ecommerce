/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'res.cloudinary.com',
      'icongr.am'
    ]
  }
}

module.exports = nextConfig
