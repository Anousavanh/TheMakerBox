/** @type {import('next').NextConfig} */
const nextConfig = {
    imaged:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'**',
            }
        ]
    }
}

module.exports = nextConfig
