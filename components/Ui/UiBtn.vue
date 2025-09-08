<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  outline: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  hidden: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
  url: {
    type: String,
    required: false,
    default: null,
  },
  color: {
    type: String as PropType<"primary" | "secondary" | "success" | "danger" | "warning" | "info">,
    required: false,
    default: "primary",
  },
});
const classes = computed(() => {
  return [
    "btn",
    `btn--${props.color}`,
    props.outline ? "btn--outline" : "",
    props.disabled ? "btn--disabled" : "",
    props.hidden ? "btn--hidden" : "",
    props.small ? "btn--small" : "",
  ].join(" ");
});
</script>
<template>
  <NuxtLink v-if="url" :class="classes" :to="url">
    <slot />
  </NuxtLink>
  <button v-else :class="classes" :disabled="disabled">
    <slot />
  </button>
</template>
<style lang="scss">
.btn {
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 0;
  padding: 6px 12px;
  text-align: center;
  user-select: none;
  white-space: nowrap;
  transition: all .4s;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  &.btn--primary {
    color: white;
    background-color: #3c8dbc;
    border-color: #367fa9;
    &:hover {
      background-color: #367fa9;
      border-color: #204d74;
    }
  }
  &.btn--success {
    color: white;
    background-color: #00a65a;
    border-color: #008d4c;
    &:hover {
      background-color: #008d4c;
      border-color: #005729;
    }
  }
  &.btn--info {
    color: white;
    background-color: #00c0ef;
    border-color: #00acd6;
    &:hover {
      background-color: #00acd6;
      border-color: #0073b7;
    }
  }
  &.btn--error {
    color: white;
    background-color: #dd4b39;
    border-color: #d73925;
    &:hover {
      background-color: #d73925;
      border-color: #b52b27;
    }
  }
}
</style>
