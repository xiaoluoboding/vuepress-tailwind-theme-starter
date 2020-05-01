import { svgSprite } from '@dynamic/svg-sprite'

const generateSprite = () => {
  if (typeof window === 'undefined') return

  const doc = window.document
  const svgWrapper = doc.createElement('div')

  svgWrapper.setAttribute('data-plugin-name', '__VUEPRESS_PLUGIN_SVG_SPRITE__')
  svgWrapper.setAttribute('style', 'display: none;')
  svgWrapper.innerHTML = svgSprite
  doc.body.appendChild(svgWrapper)
}

export default ({ Vue }) => {
  generateSprite()

  // regisiter a svg-icon component
  Vue.component('svg-icon', {
    functional: true,
    props: {
      symbol: {
        type: String,
        required: true
      },
      className: {
        type: String,
        default: ''
      }
    },
    render: function (h, { data, props, children }) {
      return h(
        'svg',
        {
          ...data,
          class: [
            'svg-icon',
            `svg-icon-${props.className}`
          ],
          style: {
            width: '1em',
            height: '1em',
            fill: 'currentColor',
            overflow: 'hidden'
          },
          attrs: { 'aria-hidden': true }
        },
        [
          h('use', {
            attrs: {
              'xlink:href': `#icon-${props.symbol}`
            }
          })
        ]
      )
    }
  })
}
