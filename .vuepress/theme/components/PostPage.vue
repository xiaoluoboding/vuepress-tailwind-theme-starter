<template>
  <div class="container post-page mt-24">
    <h1 class="text-5xl font-semibold leading-tight">{{ $frontmatter.title }}</h1>
    <hr>
    <h2 class="mb-12">{{ sugar.Date.relative(sugar.Date.create($frontmatter.published_at))}}</h2>
    <Content class="markdown-body" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      sugar: require('sugar/date')
    }
  }
}
</script>

<style>

</style>
