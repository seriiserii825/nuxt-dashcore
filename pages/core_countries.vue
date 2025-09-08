<script setup lang="ts">
import {useAdminStore} from '~/store/useAdminStore';

const admin_store = useAdminStore();
admin_store.setLevelOne('Indirizzi');
admin_store.setLevelTwo('Nazioni');
</script>

<template>
  <div class="core-users">
    <h1>Core Countries Component</h1>
  </div>
</template>
