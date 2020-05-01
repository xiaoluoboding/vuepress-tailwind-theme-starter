<template>
  <main class="theme-container site-post p-6">
    <component :is="layout" />
  </main>
</template>

<script>
import PostList from '@/theme/components/PostList'
import PostPage from '@/theme/components/PostPage'

export default {
  name: 'PostLayout',
  components: {
    PostList,
    PostPage
  },
  computed: {
    layout () {
      if (this.$page.path === '/posts/') return 'PostList'
      return 'PostPage'
    }
  }
}
</script>
