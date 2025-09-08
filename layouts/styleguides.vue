<script setup lang="ts"></script>

<template>
  <div class="styleguides">
    <div class="styleguides__sidebar">
      <h2 class="styleguides__title">
        <NuxtLink to="/home">Dashboard</NuxtLink>
      </h2>
      <MenuDropdown
        label="Forms"
        icon="fa-user-secret"
        :items="[
          { title: 'Icons', url: '/styleguides' },
          { title: 'Buttons', url: '/styleguides/buttons' },
          { title: 'Checkbox', url: '/styleguides/checkox' },
          { title: 'Radio', url: '/styleguides/radio' },
          { title: 'Inut', url: '/styleguides/input' },
          { title: 'Select', url: '/styleguides/select' },
        ]" />
    </div>
    <div class="styleguides__main">
      <slot />
    </div>
  </div>
</template>
<style lang="scss">
.styleguides {
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  &__sidebar {
    padding: 3rem 2rem;
    width: 16%;
    color: white;
    background: #444;
  }
  &__main {
    flex: 1;
    padding: 3rem 2rem;
    background: #f1f1f1;
  }
  &__title {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #666;
  }
}
</style>
