/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                pathname: '**',
            },


            {
                protocol: 'https',
                hostname: 'stores.maxfashion.in',
                pathname: '**',
            },  

            {
                protocol: 'https',
                hostname: 'www.amazon.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
