const docsUrl = process.env.DOCS_URL;

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
        source: '/docs',
        destination: `${docsUrl}/docs`,
      },
      {
        source: '/docs/:path+',
        destination: `${docsUrl}/docs/:path+`,
      },
      {
        source: '/docs-static/_next/:path+',
        destination: `${docsUrl}/docs-static/_next/:path+`,
      },
    ];
  },
};

module.exports = nextConfig;
