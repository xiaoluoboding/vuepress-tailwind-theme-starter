<template>
  <div class="site-header flex justify-between items-center bg-gray-900 p-2">
    <router-link to="/" class="site-header__banner text-base sm:text-2xl">
      <span class="font-semibold whitespace-no-wrap">{{$site.title}}</span> <span class="font-mono text-blue-500">{frex-e}</span>
    </router-link>
    <nav class="site-header__nav flex items-center flex-end">
      <div
        v-for="item in themeNavs"
        :key="item.link"
        class="nav-items">
        <router-link :to="item.link" v-if="item.rel !== ''">
          <span
            class="link-text
              mx-1 sm:p-2 sm:mx-4 lg:mr-0
              font-semibold leading-tight text-gray-600
              hover:text-blue-500"
            v-text="item.text"
          />
        </router-link>
        <template v-else>
          <a :href="item.link" :target="item.target">
            <span
              class="link-text
                mx-1 p-2 sm:mx-4 lg:mr-0
                font-semibold leading-tight
                hover:text-blue-500"
              v-text="item.text"
            />
          </a>
        </template>
      </div>
      <div class="nav-items open-in-github ml-8 hidden sm:block">
        <a href="https://github.com/frex-e/vuepress-blog" target="_blank">
          <img width="24px" height="24px" preserveAspectRatio="xMidYMid meet" src="https://github.githubassets.com/favicons/favicon-dark.svg">
        </a>
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

<style lang="stylus" scoped>
</style>
