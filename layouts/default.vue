<script setup lang="ts">
</script>

<template>
  <div class="default-layout">
    <div class="default-layout__sidebar">
      <AdminSidebar />
    </div>
    <div class="default-layout__main">
      <AdminTopbar />
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
