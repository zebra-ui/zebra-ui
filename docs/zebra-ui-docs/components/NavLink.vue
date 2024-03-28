<template>
  <NuxtLink v-if="item.path" :class="{ active }" :to="path">
    {{ (item.title || item.name).split(' ')[0] }}
    <span>{{ (item.title || item.name).split(' ').slice(1).join(' ') }}</span>
  </NuxtLink>
  <a v-else-if="item.link" :href="item.link" v-html="itemName" />
  <a v-else v-html="itemName" />
</template>

<script>
export default {
  name: 'zebraDocNavLink',

  props: {
    base: String,
    item: Object
  },

  computed: {
    itemName() {
      const name = (this.item.title || this.item.name).split(' ')
      if (process.client) {
        return `${name[0]} <span>${name.slice(1).join(' ')}</span>`
      }
    },

    path() {
      if (this.item.path == 'home') {
        return `${this.base}`
      }
      return `${this.base}${this.item.path}`
    },

    active() {
      if (this.$route.path === this.path) {
        return true
      }

      if (this.item.path === 'home') {
        return this.$route.path === this.base
      }

      return false
    }
  },

  watch: {
    active() {
      this.scrollIntoView()
    }
  },

  mounted() {
    this.scrollIntoView()
  },

  methods: {
    scrollIntoView() {
      if (this.active && this.$el && this.$el.scrollIntoViewIfNeeded) {
        this.$el.scrollIntoViewIfNeeded()
      }
    }
  }
}
</script>
