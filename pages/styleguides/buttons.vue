<script setup></script>
<template>
  <div class="buttons">
    <UiBtn color="primary">Primary</UiBtn>
    <UiBtn color="primary">
      <FontAwesomeIcon icon="fas fa-download" />
    </UiBtn>
  </div>
</template>
<style lang="scss" scoped>
.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
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
