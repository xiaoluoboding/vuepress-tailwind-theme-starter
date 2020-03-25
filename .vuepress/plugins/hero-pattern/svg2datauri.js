const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const svgToMiniDataURI = require('mini-svg-data-uri')

const readFileAsync = promisify(fs.readFile)
const readdirAsync = promisify(fs.readdir)

const svg2datauri = async (folder = './assets/icons') => {
  let svgs = []
  const filePath = path.join(__dirname, folder)
  const files = await readdirAsync(filePath)
  const filtered = files.filter(file => path.extname(file) === '.svg')
  for (const file of filtered) {
    const data = await readFileAsync(path.resolve(filePath, file))
    const svg = {
      name: file,
      datauri: svgToMiniDataURI(data.toString())
    }
    svgs = [...svgs, svg]
  }
  return Promise.resolve(svgs)
}

module.exports = svg2datauri
