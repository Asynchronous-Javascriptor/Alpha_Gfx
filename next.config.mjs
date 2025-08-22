/** @type {import('next').NextConfig} */
const nextConfig = {
    
  webpack: (config) => {
    config.cache = true;
    return config;
}

};

export default nextConfig;
