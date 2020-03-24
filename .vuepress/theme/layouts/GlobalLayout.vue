<template>
  <div class="theme-layout">
    <Header class="theme-layout__header" />
    <component :is="layout" class="theme-layout__content" />
    <footer class="theme-layout__footer">
      <h1>MIT Licensed | Copyright © 2020-present xiaoluoboding</h1>
    </footer>
  </div>
</template>

<script>
import HomeLayout from './HomeLayout'
import Header from '@theme/components/Header'

export default {
  name: 'GlobalLayout',
  components: {
    HomeLayout,
    Header
  },
  provide () {
    return {
      globalLayout: this
    }
  },
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          return this.$frontmatter.layout
        }
        if (this.$page.path === '/') return 'HomeLayout'
        return 'Layout'
      }
      return 'NotFound'
    },
    posts () {
      const posts = this.$site.pages
        .filter(page => page.path.startsWith('/posts/') && page.path !== '/posts/')
        .sort((prev, next) => {
          return new Date(next.frontmatter.published_at) - new Date(prev.frontmatter.published_at)
        })
      return posts
    },
  }
}
</script>

<style lang="stylus" scoped>
.theme-layout
  @apply h-full w-full
  &__header
    @apply h-20 px-16
    @apply border-b-2
  &__content
    @apply flex justify-center items-center p-20
  &__footer
    @apply absolute left-0 bottom-0 flex justify-center items-center h-16 w-full
    @apply border-t-2
</style>
