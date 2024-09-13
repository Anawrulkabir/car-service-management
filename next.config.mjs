/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
<<<<<<< HEAD
          {
            protocol: 'https',
            hostname: '**', // Allow all domains
          },
        ],
      },
=======
            {
                protocol: 'https',
                hostname: 'i.ibb.co.com',
                port: '',
                pathname: '/**',
            },
        ]
    }
>>>>>>> e3534b349cbe7c768204aa5ea81fc71c11611dd3
};

export default nextConfig;
