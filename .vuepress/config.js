const { path } = require('@vuepress/shared-utils')
const HeroPattern = require('./plugins/hero-pattern/index')

module.exports = {
  title: 'VuePress Tailwind Starter',
  description: 'VuePress Recipes for Using Tailwind',
  themeConfig: {
    nav: [
      { text: 'HOME', link: '/' },
      { text: 'POSTS', link: '/posts/' }
    ]
  },
  alias: {
    '@': path.resolve(__dirname, '../.vuepress')
  },
  postcss: {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer')
    ]
  },
  plugins: [
    HeroPattern
  ]
}
