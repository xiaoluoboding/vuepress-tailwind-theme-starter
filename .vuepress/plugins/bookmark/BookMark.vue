<template>
  <figure
    class="vp-bookmark-card"
    :class="{
      'vp-bookmark-card--large': size === 'large',
      'vp-bookmark-card--medium': size === 'medium',
      'vp-bookmark-card--small': size === 'small'
    }"
  >
    <a :href="metaData.url" class="vp-bookmark-wrapper" :style="dynamicStyle" target="_blank">
      <div class="vp-bookmark-content">
        <div class="vp-bookmark-content--box vp-bookmark-content__title">
          <span>{{metaData.title}}</span>
        </div>
        <div class="vp-bookmark-content--box vp-bookmark-content__desc">
          <span>{{metaData.description}}</span>
        </div>
        <div class="vp-bookmark-content--box vp-bookmark-content__meta">
          <div class="vp-bookmark-meta">
            <img :src="metaData.logo" class="vp-bookmark-meta__icon" v-if="metaData.logo">
            <span class="vp-bookmark-meta__author">{{metaData.author}}</span>
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
export default {
  name: 'Bookmark',
  props: {
    alias: {
      type: String,
      require: true
    },
    size: {
      type: String,
      default: () => 'medium'
    },
    /**
     * the image render position of bookmark
     */
    cover: {
      type: String,
      default: () => 'right'
    }
  },
  computed: {
    metaData: vm => {
      const idx = vm.$bookmarks.findIndex(item => item.alias === vm.alias)
      return idx !== -1 ? vm.$bookmarks[idx] : {}
    },
    dynamicStyle () {
      return {
        flexDirection: this.cover === 'right'
          ? 'row-reverse'
          : 'row'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.vp-bookmark-card {
  width: 100%;
  position: relative;
  margin: 0 0 1.5em;
  border: 1px solid #e5eff5;
  border-radius: 5px;
  box-shadow: 0 0 1px rgba(0,0,0,.06), 0 2px 6px rgba(0,0,0,.03);
  overflow: hidden;

  .vp-bookmark-wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    color: currentColor !important;
    font-family: inherit;
    text-decoration: none !important;
    /* border: 1px solid rgba(0, 0, 0, 0.1); */
    color: #364247;
    box-shadow: none;
    &:hover {
      text-decoration: none;
    }
    .vp-bookmark-content {
      display: grid;
      flex-grow: 999;
      flex-basis: 0;
      padding: 16px 18px;
      min-width: 50%;
      order: 1;
      &--box {
        display: flex;
        align-items: center;
      }
      &__title {
        font-weight: 600;
      }
      &__desc,
      &__meta {
        margin-top: .5em;
      }
      &__desc {
        display: -webkit-box;
        word-break: break-all;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #636363;
      }
      &__meta {
        align-items: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .vp-bookmark-meta {
        display: flex;
        align-items: center;
        &__icon {
          display: inline-block;
          vertical-align: text-bottom;
          margin-right: .5rem;
        }
        &__author {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }

    .vp-bookmark-thumbnail {
      position: relative;
      flex-basis: 16rem;
      flex-grow: 1;
      min-width: 33%;
      max-height: 100%;
      height: 9rem;
      img {
        margin: 0;
        width: 100%;
        height: 100%;
        vertical-align: bottom;
        object-fit: cover;
      }
    }
  }

  &.vp-bookmark-card--medium {
    .vp-bookmark-content {
      &__title {
        font-size: 16px;
      }
      &__desc {
        font-size: 14px;
      }
    }
    .vp-bookmark-meta {
      &__icon {
        width: 1rem;
        height: 1rem;
      }
      &__author {
        font-size: 14px;
      }
    }
  }

  // size small style
  &.vp-bookmark-card--small {
    .vp-bookmark-content {
      padding: 8px 12px;
      &__title {
        font-size: 14px;
      }
      &__desc {
        font-size: 12px;
      }
    }
    .vp-bookmark-meta {
      &__icon {
        width: 0.88rem;
        height: 0.88rem;
      }
      &__author {
        font-size: 12px;
      }
    }
    .vp-bookmark-thumbnail {
      flex-basis: 13.5rem;
      height: 7.5rem;
    }
  }
}
</style>
