<script setup lang="ts">
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

const props = defineProps({
  icon: {
    type: Array,
    required: true,
  },
});

const icon_code = `<font-awesome-icon icon="${props.icon}"/>`;
const array_code = `<font-awesome-icon icon="${props.icon}"/>`;
const copied = ref(false);
function copyToBuffer(text: string) {
  navigator.clipboard.writeText(text);
  copied.value = true;
}
</script>
<template>
  <div class="icons-view-item" @click="copyToBuffer">
    <div class="icons-view__wrap">
      <div class="icons-view__icon">
        <FontAwesomeIcon v-if="!copied" :icon="`${icon[0]} ${icon[1]}`" />
        <span v-else>copied</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.icons-view-item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  border: 1px solid #333;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    color: white;
    background: #000;
  }
}
.icons-view__code {
  cursor: pointer;
}
</style>
