<template>
  <div class="site-home container w-4/5">
    <section class="intro mb-8 text-center">
      <p class="text-5xl mb-6">Welcome to VuePress Tailwind Starter</p>
      <p class="text-xl text-gray-700 mb-4">
        This is a Starter of VuePress setup with Tailwind CSS.
      </p>
      <p class="text-xl text-gray-700 mb-4">
        VuePress provides a lot of out of the box functionality tools you can use in your custom theme,
      </p>
      <p class="text-xl text-gray-700 mb-4">
       Tailwind CSS provides low-level utility-first classes that buiding responsive interfaces quickly.
      </p>
      <p class="text-xl text-gray-700 mb-4">
        Now we got the power of VuePress + Tailwind CSS + Vue.js, Let's build a beautiful Website with these powerful tech stacks.
      </p>
      <!-- Extracting component classes: -->
      <button class="btn btn-blue mt-4" @click="$router.push('/posts/')">
        View Posts →
      </button>
    </section>
    <div class="feature grid grid-cols-3">
      <svg-icon symbol="html5" class-name="symbol" />
      <svg-icon symbol="css3" class-name="symbol" />
      <svg-icon symbol="javascript" class-name="symbol" />
      <svg-icon symbol="vue" class-name="symbol" />
      <svg-icon symbol="webpack" class-name="symbol" />
      <svg-icon symbol="eslint" class-name="symbol" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="stylus" scoped>
.btn
  @apply font-bold py-4 px-6 rounded

.btn-blue
  @apply bg-blue-500 text-white

.btn-blue:hover
  @apply bg-blue-700
.svg-icon-symbol
  @apply text-4xl my-8 mx-auto
</style>
