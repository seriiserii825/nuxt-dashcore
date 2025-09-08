<script setup lang="ts">
import { useDebounce } from "@vueuse/core";
import { icons } from "~/data/icons";

definePageMeta({
  layout: "styleguides",
});

const search = ref("");

const debouncedSearch = useDebounce(search, 300);

const filtered_icons = computed(() => {
  const q = debouncedSearch.value.trim().toLowerCase();
  if (!q) return icons;
  return icons.filter((i) => i.label.toLowerCase().includes(q));
});
</script>

<template>
  <div class="icons-view">
    <div class="icons-view__search">
      <UiInput id="search" v-model="search" placeholder="Search icons..." />
    </div>
    <div v-if="icons && icons.length" class="icons-view__wrap">
      <IconItem v-for="(icon, index) in filtered_icons" :key="index" :icon="icon" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.icons-view {
  &__search {
    margin-bottom: 2rem;
    max-width: 400px;
  }
  &__wrap {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
    grid-gap: 2rem;
  }
}
</style>
