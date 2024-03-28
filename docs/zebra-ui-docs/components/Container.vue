<template>
  <div
    class="zebra-doc-container zebra-doc-row"
    :class="{ 'zebra-doc-container--with-simulator': hasSimulator }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'zebraDocContainer',

  props: {
    hasSimulator: Boolean
  }
}
</script>

<style lang="scss">
.zebra-doc-container {
  box-sizing: border-box;
  padding-left: calc(var(--zebra-doc-nav-width) + 40px);
  overflow: hidden;

  &--with-simulator {
    padding-right: calc(
      var(--zebra-doc-simulator-width) + var(--zebra-doc-padding)
    );

    @media (max-width: 1100px) {
      padding-right: calc(var(--zebra-doc-simulator-width) - 8px);
    }
  }
}
</style>
