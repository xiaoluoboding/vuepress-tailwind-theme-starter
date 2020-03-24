<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <!-- <img class="w-full" :src="/img/card-top.jpg" alt="Sunset in the mountains"> -->
    <div class="px-6 py-4">
      <div
        class="font-bold text-xl mb-2 hover:text-blue-500 cursor-pointer"
        @click="$router.push(post.path)"
      >
        {{fm.title}}
      </div>
      <p class="text-gray-700 text-base">
        {{fm.excerpt}}
      </p>
    </div>
    <template v-if="fm.tags">
      <div class="px-6 py-4">
        <span
          v-for="tag in fm.tags"
          :key="tag.slug"
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >{{tag.name}}
        </span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    fm: vm => vm.post.frontmatter
  }
}
</script>

<style>

</style>
