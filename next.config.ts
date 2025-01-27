/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: { 
    unoptimized: true,
    domains: [
      'images.unsplash.com',
      'cdn.jsdelivr.net',
      'raw.githubusercontent.com',
      'www.svgrepo.com',
      'its.ucr.edu',
      'upload.wikimedia.org',
      'miro.medium.com'
    ]
  },
};

module.exports = nextConfig;