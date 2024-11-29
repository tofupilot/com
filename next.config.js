/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/docs",
        destination: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs`,
      },
      {
        source: "/docs/:path+",
        destination: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/:path+`,
      },
      {
        source: "/docs-static/_next/:path+",
        destination: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs-static/_next/:path+`,
      },
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_APP_URL}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
