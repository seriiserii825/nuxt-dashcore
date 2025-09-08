<script setup lang="ts">
import { IconItem } from "#components";
import { icons } from "~/data/icons";

definePageMeta({
  layout: "styleguides",
});
</script>

<template>
  <div class="icons-view">
    <div v-if="icons && icons.length" class="icons-view__wrap">
      <IconItem v-for="(icon, index) in icons" :key="index" :icon="icon" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.icons-view__wrap {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  grid-gap: 2rem;
}
</style>
