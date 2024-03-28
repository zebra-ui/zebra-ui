<template>
  <div :class="['zebra-doc-nav', { 'zebra-doc-nav-fixed': isFixed }]">
    <div
      v-for="(group, index) in navConfig"
      class="zebra-doc-nav__group"
      :key="index"
    >
      <div class="zebra-doc-nav__title">
        {{ group.title }}
      </div>
      <template v-if="group.items">
        <div
          v-for="(item, groupIndex) in group.items"
          :key="groupIndex"
          class="zebra-doc-nav__item"
        >
          <zebra-doc-nav-link :item="item" :base="base" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
  name: 'zebraDocNav',

  components: {
    [NavLink.name]: NavLink
  },

  props: {
    lang: String,
    navConfig: Array
  },

  data() {
    return {
      isFixed: false
    }
  },

  computed: {
    base() {
      return this.lang != 'zh' ? `/${this.lang}/` : '/'
      // return '/'
    }
  },

  created() {
    window?.addEventListener('scroll', this.onScroll)
    this.onScroll()
  },

  methods: {
    onScroll() {
      if (process.client) {
        const { pageYOffset: offset } = window
        this.isFixed = offset > 64
      }
    }
  }
}
</script>

<style lang="scss">
.zebra-doc-nav {
  position: absolute;
  left: 20px;
  top: calc(var(--zebra-doc-header-top-height) + 30px);
  bottom: 20px;
  z-index: 1;
  min-width: var(--zebra-doc-nav-width);
  max-width: var(--zebra-doc-nav-width);
  padding: 8px 0;
  overflow-y: scroll;
  background-color: var(--zebra-doc-background);
  border-radius: var(--neumorphism-border-radius);
  box-shadow: var(--box-shadow);

  @media (min-width: var(--zebra-doc-row-max-width)) {
    left: 50%;
    margin-left: calc((var(--zebra-doc-row-max-width) / 2 * -1));
  }

  &.zebra-doc-nav-fixed {
    position: fixed;
    top: 20px;
  }
  &::-webkit-scrollbar {
    width: 0px;
    height: 6px;
    background-color: transparent !important;
  }

  &::-webkit-scrollbar-thumb {
    width: 0px;
    background-color: transparent !important;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(69, 90, 100, 0.2);
  }

  &__group {
    margin-bottom: 16px;
    padding: 0 6px;
  }

  &__title {
    padding: 20px 0 0 20px;
    color: var(--zebra-doc-text-color-2);
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
  }

  &__item {
    a {
      display: block;
      margin: 4px;
      padding: 6px 6px 6px 20px;
      color: var(--zebra-doc-text-color-3);
      font-size: 14px;
      line-height: 20px;
      transition: color 0.2s;

      &:hover,
      &.active {
        color: var(--zebra-doc-link-color);
      }

      &.active {
        font-weight: 600;
        box-shadow: var(--box-shadow-inset);
        border-radius: var(--neumorphism-border-radius);
      }

      span {
        font-size: 13px;
      }
    }
  }

  @media (max-width: 1300px) {
    &__item {
      a {
        font-size: 13px;
      }

      &:active {
        font-size: 14px;
      }
    }
  }
}
</style>
