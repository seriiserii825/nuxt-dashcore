<script setup lang="ts">
import {useAdminStore} from '~/store/useAdminStore';

const admin_store = useAdminStore();
admin_store.setLevelOne('Eccezioni');
admin_store.setLevelTwo('Elenco dei users con eccezioni');
</script>

<template>
  <div class="core-users">
    <h1>Core Exceptions Component</h1>
  </div>
</template>
