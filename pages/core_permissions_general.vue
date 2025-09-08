<script setup lang="ts">
import {useAdminStore} from '~/store/useAdminStore';

const admin_store = useAdminStore();
admin_store.setLevelOne('Autorizzazioni');
admin_store.setLevelTwo('Elenco delle autorizzazioni');
</script>

<template>
  <div class="core-users">
    <h1>Core Permission general Component</h1>
  </div>
</template>
