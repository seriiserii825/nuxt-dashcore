<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="account-info">
    <div class="account-info__top">
      <div class="account-info__left">
        <h3 class="account-info__name">{{ name }}</h3>
        <div class="account-info__role">{{ role }}</div>
      </div>
      <div class="account-info__icon">
        <FontAwesomeIcon icon="fa-s fa-user" />
      </div>
    </div>
    <div class="account-info__bottom">
      <FontAwesomeIcon icon="faw fa-sign-out" />
    </div>
  </div>
</template>
