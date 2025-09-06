<script setup lang="ts">
import { admin_menu } from "~/data/menu/admin_menu";
</script>

<template>
  <div class="admin-sidebar">
    <img src="/images/app_header_logo.png" alt="" class="admin-sidebar__logo" />
    <!-- <FontAwesomeIcon :icon="['fas', 'coffee']" /> -->
    <nav class="main-menu">
      <ul class="menu-list">
        <MenuItem v-for="(item, i) in admin_menu" :key="i" :item="item" />
      </ul>
    </nav>
  </div>
</template>
<style scoped lang="scss">
.admin-sidebar {
  padding: 3.2rem 0;
  height: 100%;
  background-color: #26374c;
  &__logo {
    margin-bottom: 3.2rem;
    padding: 0 3.2rem;
  }
}
</style>
