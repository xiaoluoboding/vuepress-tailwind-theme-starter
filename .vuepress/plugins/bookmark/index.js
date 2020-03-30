const path = require('path')
const fetchMetaData = require('./fetchMetaData')

module.exports = ({ urls }, context) => ({
  name: 'bookmark',

  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceApp.js')
  ],

  async clientDynamicModules () {
    console.log(urls)
    const metaData = await fetchMetaData(urls)
    /**
     * {
        author: 'Ghost',
        description: 'Our handlebars theme templating framework works with the Ghost API to build flexible publishing websites. Get all the tools you need to start building your custom theme here!',
        image: 'https://ghost.org/images/meta/Ghost-Docs.jpg',
        logo: 'https://ghost.org/favicon.png',
        title: 'Ghost Handlebars Themes - Building a custom Ghost theme - Docs'
      }
     */
    return {
      name: 'constants.js',
      content: `export const META_DATA = ${JSON.stringify(metaData)}`
    }
  }
})
