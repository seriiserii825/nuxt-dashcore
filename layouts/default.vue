<script setup lang="ts">
import IBurger from "~/icons/IBurger.vue";
import { useAdminStore } from "~/store/useAdminStore";
const admin_store = useAdminStore();
</script>

<template>
  <div class="default-layout">
    <div class="default-layout__sidebar">
      <AdminSidebar />
    </div>
    <div class="default-layout__main">
      <div class="default-layout__topbar">
        <IBurger />
        <h1>
          <span>{{ admin_store.level_1 }}</span>
          <small v-if="admin_store.level_2">{{ admin_store.level_2 }}</small>
        </h1>
      </div>
      <div class="default-layout__content">
        <slot />
      </div>
      <footer class="default-layout__footer">
        Copyright {{ new Date().getFullYear() }} -
        <strong>Altuofianco</strong>
      </footer>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.default-layout {
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  &__sidebar {
    flex: 0 0 250px;
  }
  &__main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: var(--admin-bg);
  }
  &__topbar {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    height: 8rem;
    color: #444;
    background: #fff;
    border-bottom: 1px solid #d2d6de;
    h1 {
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
  }
  &__content {
    flex: 1;
    padding: 20px;
  }
  &__footer {
    padding: 15px;
    color: #444;
    background: #fff;
    border-top: 1px solid #d2d6de;
  }
}
</style>
