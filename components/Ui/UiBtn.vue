<script setup lang="ts">
const emits = defineEmits(["click_emit"]);
type ButtonClassNames = "btn-primary" | "btn-secondary" | "btn-success" | "btn-danger" | "btn-warning" | "btn-info" | "btn-light" | "btn-dark";
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
  class_names: {
    type: String as PropType<ButtonClassNames>,
    required: false,
    default: "",
  }
});
const classes = computed(() => {
  return [
    "btn",
    props.outline ? "btn--outline" : "btn--filled",
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
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
}
</style>
