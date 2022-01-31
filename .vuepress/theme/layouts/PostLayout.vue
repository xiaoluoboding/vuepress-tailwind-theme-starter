<template>
  <div class="flex flex-col items-center">
    <main class="theme-container site-post p-6 max-w-4xl w-full">
      <component :is="layout" />
    </main>
  </div>
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
