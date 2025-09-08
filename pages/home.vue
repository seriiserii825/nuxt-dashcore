<script setup lang="ts">
import {useAdminStore} from '~/store/useAdminStore';

const admin_store = useAdminStore();
admin_store.setLevelOne('Dashboard');
</script>

<template>
  <div class="dashboard">
    <h2>Dashboard page</h2>
  </div>
</template>
