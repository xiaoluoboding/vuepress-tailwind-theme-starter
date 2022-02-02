<template>
  <div class="theme-layout text-white flex flex-col">
    <Header class="theme-layout__header flex-none" />
    <component :is="layout" class="theme-layout__content" />
    <Footer class="theme-layout__footer flex-none mt-auto" />
  </div>
</template>

<script>
import HomeLayout from './HomeLayout'
import PostLayout from './PostLayout'
import Header from '@theme/components/Header'
import Footer from '@theme/components/Footer'

export default {
  name: 'Layout',
  components: {
    HomeLayout,
    PostLayout,
    Header,
    Footer
  },
  provide () {
    return {
      rootLayout: this
    }
  },
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          return this.$frontmatter.layout
        }
        if (this.$page.path === '/') return 'HomeLayout'
        return 'PostLayout'
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
  @apply h-full w-full bg-gray-800 overflow-auto
  &__header
    @apply border-b-2 border-blue-500
  &__content
    @apply flex items-center
  &__footer
    @apply flex justify-center items-center w-full
    @apply border-t-2 border-blue-500 p-2
</style>
