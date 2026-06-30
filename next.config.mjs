/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  ...(isGitHubPages && {
    output: "export",
    basePath: "/niverbia",
    assetPrefix: "/niverbia",
    trailingSlash: true,
    images: { unoptimized: true },
  }),
};

export default nextConfig;
