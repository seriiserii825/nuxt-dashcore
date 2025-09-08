<script setup lang="ts">
import {useAdminStore} from '~/store/useAdminStore';

const admin_store = useAdminStore();
admin_store.setLevelOne('Clienti');
admin_store.setLevelTwo('Gestione');
</script>

<template>
  <div class="core-users">
    <h1>Core Customers Component</h1>
  </div>
</template>
