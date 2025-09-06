<script setup>
const props = defineProps({
  className: {
    type: String,
    default: "language-html",
  },
});
</script>
<template>
  <div class="code-preview">
    <pre><code :class="className"><slot></slot></code></pre>
  </div>
</template>
<style lang="scss" scoped>
.code-preview {
  padding: 15px;
  font-family: "Fira Code", monospace;
  font-size: 14px;
  background: var(--admin-bg-darken);
  border-radius: 8px;
  overflow-x: auto;
  pre {
    color: var(--text-light);
  }
}
</style>
