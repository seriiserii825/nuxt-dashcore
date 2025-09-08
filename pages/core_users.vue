<script setup lang="ts">
import {useAdminStore} from '~/store/useAdminStore';

const admin_store = useAdminStore();
admin_store.setLevelOne('Utenti');
admin_store.setLevelTwo('Elenco utenti');
</script>

<template>
  <div class="core-users">
    <h1>Core Users Component</h1>
  </div>
</template>
