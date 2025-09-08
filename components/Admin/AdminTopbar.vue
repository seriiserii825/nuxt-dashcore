<script setup lang="ts">
import IBurger from "~/icons/IBurger.vue";
import { useAdminStore } from "~/store/useAdminStore";
const admin_store = useAdminStore();
</script>

<template>
  <div class="admin-topbar">
    <IBurger />
    <h1 class="admin-topbar__title">
      <span>{{ admin_store.level_1 }}</span>
      <small v-if="admin_store.level_2">{{ admin_store.level_2 }}</small>
    </h1>
    <div class="admin-topbar__info">
      <AccountInfo name="John Doe" role="Administrator" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.admin-topbar {
  display: flex;
  align-items: center;
  padding: 1.5rem 4rem 1.5rem 2rem;
  height: 8rem;
  color: #444;
  &__title {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin: 0 0 0 3.2rem;
    span {
      font-size: 2rem;
      font-weight: 600;
      color: var(--text-dark);
    }
    small {
      position: relative;
      top: 0.2rem;
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
    fill: var(--text-dark);
  }
  &__info {
    margin-left: auto;
  }
}
</style>
