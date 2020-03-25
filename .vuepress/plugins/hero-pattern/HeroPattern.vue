<template>
  <div class="hero-pattern" :style="style">
    <slot />
  </div>
</template>

<script>
import { SVG_DATAURI } from '@dynamic/svg2datauri'

export default {
  name: 'HeroPattern',
  props: {
    pattern: { type: String, default: 'line-in-motion' },
    // Given color is hexadecimal color value [0-F]
    color: {
      type: String,
      default: () => '#9c92ac',
      validator (val) {
        const regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g
        return regex.test(val)
      }
    },
    // Controls the relative background color of the generated image.
    bgColor: {
      type: String,
      default: () => '#dfdbe5',
      validator (val) {
        const regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g
        return regex.test(val)
      }
    },
    opacity: {
      type: String,
      default: () => '0.4'
    },
    repeat: { type: String, default: 'repeat' }
  },
  data: () => ({
    svgDataUri: SVG_DATAURI
  }),
  computed: {
    style () {
      let svg = {}
      const idx = this.svgDataUri.findIndex(element => element.name.split('.').shift() === this.pattern)
      if (idx !== -1) {
        svg = this.svgDataUri[idx]
        const drop = (arr, n = 1) => arr.slice(n)
        const color = drop(Array.from(this.color)).join('')
        const fillReg = /fill='(\w+|\S+)'/g
        const fillOpacity = /fill-opacity='(\w+|\S+)'/

        const datauri = svg.datauri
          .replace(fillReg, `fill='%23${color}'`)
          .replace(fillOpacity, `fill-opacity='${this.opacity}'`)

        return {
          'background-color': this.bgColor,
          'background-image': `url("${datauri}")`,
          'background-repeat': this.repeat
        }
      }
      return {}
    }
  },
  mounted () {
    // this.getPattern()
    // console.log(SVG_DATAURI)
  },
  methods: {
    // async getPattern () {
    //   const svg = await fs.readFile(path.join(__dirname, './assets/icons/line-in-motion'))
    //   console.log(svg)
    //   const uri = svgToMiniDataURI(svg)
    //   console.log(uri)
    // },
    getRandomColor (hexs) {
      const shuffle = ([...arr]) => {
        let m = arr.length
        while (m) {
          let temp = null
          const i = Math.floor(Math.random() * m--)
          temp = arr[m]
          arr[m] = arr[i]
          arr[i] = temp
        }
        return arr
      }
      return shuffle(hexs).join('')
    }
  }
}
</script>

<style scoped>
.hero-pattern {
  transition: all 0.5s ease-in-out;
}
</style>
