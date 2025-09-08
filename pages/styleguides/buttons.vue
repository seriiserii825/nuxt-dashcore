<script setup>
definePageMeta({
  layout: "styleguides",
});
</script>
<template>
  <div class="buttons">
    <div class="buttons__row">
      <UiBtn color="primary">Primary</UiBtn>
      <UiBtn color="primary">
        <FontAwesomeIcon icon="fas fa-download" />
      </UiBtn>
      <UiBtn color="primary">
        <FontAwesomeIcon icon="fas fa-plus" />
        Nuovo utente
      </UiBtn>
    </div>
    <div class="buttons__row">
      <UiBtn color="success">Success</UiBtn>
    </div>
    <div class="buttons__row">
      <UiBtn color="info">Info</UiBtn>
    </div>
    <div class="buttons__row">
      <UiBtn color="error">Error</UiBtn>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.buttons {
  &__row {
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
    margin-bottom: 1.6rem;
  }
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
