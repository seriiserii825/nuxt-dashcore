<script setup lang="ts">
import {useAdminStore} from '~/store/useAdminStore';

const admin_store = useAdminStore();
admin_store.setLevelOne('Indirizzi');
admin_store.setLevelTwo('Communi');
</script>

<template>
  <div class="core-users">
    <h1>Core Cities Component</h1>
  </div>
</template>
