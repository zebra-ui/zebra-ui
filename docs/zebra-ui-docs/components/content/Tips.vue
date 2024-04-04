<template>
  <div class="zebra-docs-tips">
    <slot />
  </div>
</template>

<script></script>

<style>
.zebra-docs-tips {
  margin-top: 20px;
  padding: 20px;
  background: var(--zebra-doc-tips);
  color: var(--zebra-doc-text-color-1);
  border-radius: var(--neumorphism-border-radius);
  font-size: 14px;

  a {
    margin: 0 1px;
    color: var(--zebra-doc-link-color);
    -webkit-font-smoothing: auto;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }
  }
}
</style>
