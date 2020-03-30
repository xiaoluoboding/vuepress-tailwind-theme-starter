import { META_DATA } from '@dynamic/constants'
import BookMark from './BookMark.vue'

export default ({ Vue }) => {
  // Use BookMark component
  Vue.component('BookMark', BookMark)
  // inject dynamic computed properties
  Vue.mixin({
    computed: {
      $bookmarks: () => META_DATA
    }
  })
}
