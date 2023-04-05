/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'res.cloudinary.com',
      'icongr.am'
    ]
  }
}

module.exports = nextConfig
