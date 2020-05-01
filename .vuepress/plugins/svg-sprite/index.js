const path = require('path')
const fs = require('fs')
const resolve = dir => path.join(__dirname, dir)
const readSvg = require('./readSvg')

module.exports = (options, context) => {
  // plugin options iconsDir, point to '.vuepress/public/icons'
  const { iconsDir = '.vuepress/public/icons' } = options
  const iconsPath = path.isAbsolute(iconsDir)
    ? iconsDir
    : path.resolve(context.sourceDir, iconsDir)

  if (!fs.existsSync(iconsPath)) {
    console.log(`svg-sprite: Folder ${iconsPath} does not exist`)
  }

  return {
    name: 'svg-sprite',
    enhanceAppFiles: [
      resolve('enhanceApp.js')
    ],
    async clientDynamicModules () {
      const svgSprite = await readSvg(iconsPath)

      return {
        name: 'svg-sprite.js',
        content: `
          export const svgSprite = '${JSON.stringify(svgSprite)}'
        `
      }
    }
  }
}
