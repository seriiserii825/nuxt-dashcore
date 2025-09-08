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

const is_logout_visible = ref(false);
</script>

<template>
  <div class="account-info">
    <div class="account-info__top" @click="is_logout_visible = !is_logout_visible">
      <div class="account-info__left">
        <h3 class="account-info__name">{{ name }}</h3>
        <div class="account-info__role">{{ role }}</div>
      </div>
      <div class="account-info__icon">
        <FontAwesomeIcon icon="fa-s fa-user" />
      </div>
    </div>
    <div v-if="is_logout_visible" class="account-info__bottom">
      <FontAwesomeIcon icon="faw fa-sign-out" />
      <span>Esci</span>
    </div>
  </div>
</template>
<style lang="scss">
.account-info {
  position: relative;
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 0.3rem 1rem;
    text-align: center;
    border-radius: 0.9rem;
    transition: all 0.4s;
    cursor: pointer;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  &__name {
    color: #3c8dbc;
    font-size: 1.4rem;
    font-weight: 900;
  }
  &__role {
    font-size: 1.1rem;
    font-weight: 700;
    color: #101a33;
  }
  &__icon {
    opacity: 0.8;
  }
  &__bottom {
    position: absolute;
    top: 4.2rem;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3rem 0;
    font-size: 14px;
    color: var(--text-gray);
    background: white;
    cursor: pointer;
  }
}
</style>
