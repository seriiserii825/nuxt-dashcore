<template>
  <div class="admin">
    <div class="admin__sidebar"></div>
    <div class="admin__main">
      <div class="admin__topbar"></div>
      <div class="admin__content">
        <slot />
      </div>
      <footer class="admin__footer">
        Copyright {{ new Date().getFullYear() }} -
        <strong>Altuofianco</strong>
      </footer>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.admin {
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
    background: #f5f8fa;
  }
  &__topbar {
    height: 60px;
    flex-shrink: 0;
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
