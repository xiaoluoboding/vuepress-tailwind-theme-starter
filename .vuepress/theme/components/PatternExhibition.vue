<template>
  <div class="patterns grid grid-cols-2 gap-4">
    <div class="pattern-container border shadow-md" v-for="(pattern, index) in patterns" :key="index">
      <hero-pattern
        class="w-full h-64 hover:scale-110"
        :color="sample(colorPalette)"
        :bg-color="sample(bgPalette)"
        opacity="0.88"
        repeat="repeat"
        :pattern="pattern"
      />
      <div class="pattern-name text-gray-600 py-2 px-4 text-lg">{{pattern}}</div>
    </div>
  </div>
</template>

<script>
import { HERO_PATTERNS } from '@/theme/constants'

const sample = arr => arr[Math.floor(Math.random() * arr.length)]

export default {
  name: 'PatternExhibition',
  data: () => ({
    patterns: HERO_PATTERNS,
    colorPalette: [
      '#F7FAFC', '#FFF5F5', '#FFFAF0', '#FFFFF0', '#F0FFF4',
      '#E6FFFA', '#EBF8FF', '#EBF4FF', '#FAF5FF', '#FFF5F7'
    ],
    bgPalette: [
      '#2D3748', '#9B2C2C', '#9C4221', '#975A16', '#276749',
      '#285E61', '#2C5282', '#434190', '#553C9A', '#97266D'
    ],
    sample
  }),
  computed: {
  }
}
</script>

<style>

</style>
