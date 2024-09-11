
const { default: next } = require('next');
const withMDX = require('@next/mdx')({
    extension: /\.(md|mdx)$/,
})

const isGitHub = process.env.GITHUB_ACTIONS === "true";
console.log(`Running in ${isGitHub ? "GitHub Actions" : "local"} mode`);
var repoName;
if (isGitHub) {
    repoName = process.env.GITHUB_REPOSITORY.split('/')[1];
    console.log(`Repo name: ${repoName}`);
}else{
    repoName = 'dhrift';
}

console.log(`page url var? ${process.env.PAGES_PATH}`);

const build = process.env.NODE_ENV === "production";
console.log(`Running in ${process.env.NODE_ENV} mode`);
process.env.NEXT_PUBLIC_REPO_NAME = repoName
process.env.NEXT_PUBLIC_GITHUB_ACTIONS = process.env.GITHUB_ACTIONS || false;
process.env.NEXT_PUBLIC_GITHUBSECRET = process.env.GITHUBSECRET || false;
process.env.NEXT_PUBLIC_ASSET_PREFIX = isGitHub ? '/' + repoName : '';

const nextConfig = {
    output: "export",
    trailingSlash: true,
    basePath: process.env.PAGES_PATH || '',
    images: {
        unoptimized: true,
    },
    experimental: {
        optimizeCss: true,
    },
}

console.log(nextConfig);


module.exports = nextConfig;