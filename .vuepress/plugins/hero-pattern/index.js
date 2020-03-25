const path = require('path')

const svg2datauri = require('./svg2datauri')

module.exports = (options, context) => ({
  name: 'heropattern',

  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceApp.js')
  ],

  async clientDynamicModules () {
    const svgs = await svg2datauri()
    console.log(svgs)

    return {
      name: 'svg2datauri.js',
      content: `export const SVG_DATAURI = ${JSON.stringify(svgs)}`
    }
  },

  chainWebpack (config, isServer) {
  }
})
