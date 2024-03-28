<template>
  <div
    :class="['zebra-doc-simulator', { 'zebra-doc-simulator-fixed': isFixed }]"
  >
    <iframe ref="iframe" :src="src" :style="simulatorStyle" frameborder="0" />
  </div>
</template>

<script>
export default {
  name: 'zebraDocSimulator',

  props: {
    src: String
  },

  data() {
    return {
      scrollTop: window?.scrollY,
      windowHeight: window?.innerHeight
    }
  },

  computed: {
    isFixed() {
      return this.scrollTop > 60
    },

    simulatorStyle() {
      if (process.client) {
        const height = Math.min(740, this.windowHeight - 90)
        return {
          height: height + 'px'
        }
      } else {
        return {
          height: '740px'
        }
      }
    }
  },

  mounted() {
    window?.addEventListener('scroll', () => {
      this.scrollTop = window?.scrollY
    })
    window?.addEventListener('resize', () => {
      this.windowHeight = window?.innerHeight
    })
  }
}
</script>

<style lang="scss">
.zebra-doc-simulator {
  position: absolute;
  top: calc(var(--zebra-doc-padding) + var(--zebra-doc-header-top-height));
  right: var(--zebra-doc-padding);
  z-index: 1;
  box-sizing: border-box;
  width: var(--zebra-doc-simulator-width);
  min-width: var(--zebra-doc-simulator-width);
  overflow: hidden;
  background: var(--zebra-doc-background-2);
  border-radius: var(--neumorphism-border-radius);
  box-shadow: var(--box-shadow);

  @media (max-width: 1100px) {
    right: auto;
    left: 750px;
  }

  @media (min-width: var(--zebra-doc-row-max-width)) {
    right: 50%;
    margin-right: calc(var(--zebra-doc-row-max-width) / 2 * -1 + 24px);
  }

  &-fixed {
    position: fixed;
    top: var(--zebra-doc-padding);
  }

  iframe {
    display: block;
    width: 100%;
  }
}
</style>
