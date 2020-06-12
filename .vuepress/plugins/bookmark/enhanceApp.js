import { META_DATA } from '@dynamic/constants'
import Bookmark from './Bookmark.vue'

export default ({ Vue }) => {
  // Use BookMark component
  Vue.component('Bookmark', Bookmark)
  // inject dynamic computed properties
  Vue.mixin({
    computed: {
      $bookmarks: () => JSON.parse(META_DATA)
    }
  })
}
