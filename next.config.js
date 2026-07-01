/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
    // e.g. "nishlfernando11/Port4lio" → "/Port4lio"
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
    assetPrefix = `/${repo}/`;
    basePath = `/${repo}`;
}

const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    basePath,
    assetPrefix,
};

module.exports = nextConfig;
