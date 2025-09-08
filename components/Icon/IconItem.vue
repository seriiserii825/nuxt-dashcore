<script setup lang="ts">
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import type {PropType} from 'vue';
import type {IconTuple} from '~/data/icons';

const props = defineProps({
  icon: {
    type: Object as PropType<IconTuple>,
    required: true,
  },
});

const icon_code = `<FontAwesomeIcon v-if="!copied" :icon="${props.icon.key} ${props.icon.label}" />`;
const copied = ref(false);
function copyToBuffer(text: string) {
  navigator.clipboard.writeText(text);
  copied.value = true;
  useSweetAlert('success', 'Copied to clipboard');
  setTimeout(() => {
    copied.value = false;
  }, 1000);
}
</script>
<template>
  <div class="icons-view-item" :title="`${icon.key} ${icon.label}`" @click="copyToBuffer(icon_code)">
    <div class="icons-view__wrap">
      <div class="icons-view__icon">
        <FontAwesomeIcon v-if="!copied" :icon="`${icon.key} ${icon.label}`" />
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
  padding: 1rem 0;
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
