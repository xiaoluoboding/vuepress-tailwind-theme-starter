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
  inject: ['rootLayout'],
  computed: {
    posts: vm => vm.rootLayout.posts
  }
}
</script>

<style>

</style>
