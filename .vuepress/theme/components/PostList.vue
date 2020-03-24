<template>
  <div class="post-list grid grid-cols-2 gap-4">
    <post-card
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script>
import PostCard from './PostCard'

export default {
  name: 'PostList',
  components: {
    PostCard
  },
  inject: ['globalLayout'],
  computed: {
    posts: vm => vm.globalLayout.posts
  }
}
</script>

<style>

</style>
