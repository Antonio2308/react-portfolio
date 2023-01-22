/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['tailwindcss'])

module.exports = withPlugins([withCSS, withTM], {
  postcssLoaderOptions: {
    parser: 'postcss-scss',
    config: {
      ctx: {
        tailwind: './tailwind.config.js'
      }
    }
  }
})