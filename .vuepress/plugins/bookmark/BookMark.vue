<template>
  <figure class="vp-bookmark-card">
    <a :href="metaData.url" class="vp-bookmark-container" target="_blank">
      <div class="vp-bookmark-content">
        <div class="vp-bookmark-content-box">
          <div class="vp-bookmark-title">{{metaData.title}}</div>
        </div>
        <div class="vp-bookmark-content-box">
          <div class="vp-bookmark-description">{{metaData.description}}</div>
        </div>
        <div class="vp-bookmark-content-box">
          <div class="vp-bookmark-metadata">
            <img :src="metaData.logo" class="vp-bookmark-icon" v-if="metaData.logo">
            <span class="vp-bookmark-author">{{metaData.author}}</span>
          </div>
        </div>
      </div>
      <div class="vp-bookmark-thumbnail" v-if="metaData.image">
        <img :src="metaData.image">
      </div>
    </a>
  </figure>
</template>

<script>
import { META_DATA } from '@dynamic/constants'

export default {
  name: 'BookMark',
  props: {
    mark: {
      type: String,
      require: true
    }
  },
  computed: {
    metaData: vm => {
      const idx = META_DATA.findIndex(item => item.mark === vm.mark)
      return idx !== -1 ? META_DATA[idx] : {}
    }
  }
}
</script>

<style>
.vp-bookmark-card {
  width: 100%;
  position: relative;
  margin: 0 0 1.5em;
  border: 1px solid #e5eff5;
  border-radius: 5px;
  box-shadow: 0 0 1px rgba(0,0,0,.06), 0 2px 6px rgba(0,0,0,.03);
  overflow: hidden;
}

.vp-bookmark-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  color: currentColor;
  font-family: inherit;
  text-decoration: none;
  /* border: 1px solid rgba(0, 0, 0, 0.1); */
  color: #364247;
  box-shadow: none;
}

.vp-bookmark-container:hover {
  text-decoration: none;
}

.vp-bookmark-content {
  display: grid;
  flex-grow: 999;
  flex-basis: 0;
  padding: 16px 18px;
  min-width: 50%;
  order: 1;
}

.vp-bookmark-content-box {
  display: flex;
  align-items: center;
}

.vp-bookmark-title {
  font-weight: 600;
}

.vp-bookmark-metadata,
.vp-bookmark-description {
  margin-top: .5em;
}

.vp-bookmark-metadata {
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.vp-bookmark-description {
  display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}

.vp-bookmark-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: text-bottom;
  margin-right: .5em;
  margin-bottom: .05em;
}

.vp-bookmark-thumbnail {
  position: relative;
  flex-basis: 20rem;
  flex-grow: 1;
  min-width: 33%;
  max-height: 100%;
  height: 12rem;
}

.vp-bookmark-thumbnail img {
  margin: 0;
  width: 100%;
  height: 100%;
  vertical-align: bottom;
  object-fit: cover;
}

.vp-bookmark-author {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
