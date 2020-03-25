<template>
  <div class="site-header flex justify-between items-center">
    <router-link to="/" class="site-header__banner text-2xl">
      {{$site.title}}
    </router-link>
    <nav class="site-header__nav flex items-center">
      <div
        v-for="item in themeNavs"
        :key="item.link"
        class="nav-items"
      >
        <router-link :to="item.link" v-if="item.rel !== ''">
          <span
            class="link-text dark:text-themeF-dark
              mx-1 p-2 sm:mx-4 lg:mr-0
              font-semibold leading-tight text-gray-600
              hover:text-blue-500 dark:hover:text-neon"
            v-text="item.text"
          />
        </router-link>
        <template v-else>
          <a :href="item.link" :target="item.target">
            <span
              class="link-text dark:text-themeF-dark
                mx-1 p-2 sm:mx-4 lg:mr-0
                font-semibold leading-tight
                hover:text-blue-500 dark:hover:text-neon"
              v-text="item.text"
            />
          </a>
        </template>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    themeNavs () {
      return this.$themeConfig.nav
    }
  }
}
</script>

<style>

</style>
