const fs = require('fs')
const { promisify } = require('util')
const { extname, resolve } = require('path')
const svgSpreact = require('svg-spreact')

const readFileAsync = promisify(fs.readFile)
const readdirAsync = promisify(fs.readdir)

const readFolder = async folder => {
  let svgs = []
  const files = await readdirAsync(folder)
  const filtered = files.filter(file => extname(file) === '.svg')
  const filenames = filtered.map(file => file.replace('.svg', ''))
  for (const file of filtered) {
    const data = await readFileAsync(resolve(folder, file))
    svgs = [...svgs, data.toString()]
  }
  return Promise.resolve({ svgs, filenames })
}

const doSprite = ({ svgs, filenames }) => {
  const processId = v => `icon-${filenames[v]}`
  return svgSpreact(svgs, {
    tidy: true,
    processId,
    className: 'icon'
  })
}

const readSvg = async dir => {
  const res = await readFolder(dir).then(doSprite)
  return res
}

module.exports = readSvg
