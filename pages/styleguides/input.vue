<script setup lang="ts">
definePageMeta({
  layout: "styleguides",
});

const name = ref("");
</script>

<template>
  <div class="inputs">
    <div class="inputs__item">
      <UiInput id="name" v-model="name" label="Input" placeholder="placeholder..." />
    </div>
    <div class="inputs__item">
      <UiInput
        id="name-error"
        v-model="name"
        label="Input Error"
        placeholder="placeholder..."
        :errors="['new error']" />
    </div>
    <div class="inputs__item">
      <UiInput
        id="name-success"
        v-model="name"
        label="Input Sucess"
        placeholder="placeholder..."
        :errors="[]" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.inputs {
  max-width: 400px;
  &__item {
    margin-bottom: 2.4rem;
  }
}
</style>
