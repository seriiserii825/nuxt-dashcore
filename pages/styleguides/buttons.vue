<script setup>
import { UiBtn } from "#components";
</script>
<template>
  <div class="buttons">
    <div class="buttons__item">
      <UiBtn>Default Button</UiBtn>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.buttons {
  &__title {
    margin-bottom: 2rem;
  }
  &__item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 2rem;
  }
  &__content {
    margin-right: 6rem;
    flex: 0 0 50rem;
  }
}
</style>
