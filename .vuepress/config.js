const { path } = require('@vuepress/shared-utils')

const BookMark = require('./plugins/bookmark/index')

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
    [
      BookMark,
      {
        urls: [
          {
            mark: 'one',
            url: 'https://medium.com/memory-leak/the-jamstack-its-pretty-sweet-e0834e4e6bb7'
          },
          {
            mark: 'two',
            url: 'https://ghost.org/docs/api/v2/handlebars-themes/'
          },
          {
            mark: 'three',
            url: 'https://www.monterail.com/state-of-vuejs-report'
          },
          {
            mark: 'four',
            url: 'https://www.netlify.com/blog/2019/11/30/how-to-deploy-a-vue-site/'
          },
          {
            mark: 'five',
            url: 'https://xiaoluoboding.github.io/monthly/'
          }
        ]
      }
    ]
  ]
}
