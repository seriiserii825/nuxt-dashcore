<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <main class="styleguides">
    <transition appear>
      <GlobalBlock title="Evento list">
        <ul class="styleguides__list">
          <li>
            <NuxtLink to="/evento/status1/dettaglio/info?code=R23BZS">
              Main event(Teacher)
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/evento/status1/dettaglio/info?code=D23UUU">
              Main event(Student)
            </NuxtLink>
          </li>
          <hr />
          <li>
            <NuxtLink to="/event/status1/contenuto/62/info?code=R23VAS">
              Session content(Teacher)
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/event/status1/contenuto/62/discenti/info?code=D23YTG">
              Session content(Student)
            </NuxtLink>
          </li>
          <hr />
          <li>
            <NuxtLink to="/evento/status1">Public status1(need login)</NuxtLink>
          </li>
          <hr />
          <li>
            <NuxtLink to="/evento/unpublished">unpublished</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/evento/status0">Public status0 - Terminato</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/evento/status2">Public status2(Will start)</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/evento/status1/repository">Public repository</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contenuto/16">Contenuto 16</NuxtLink>
          </li>
        </ul>
      </GlobalBlock>
    </transition>
  </main>
</template>
<style lang="scss" scoped>
.styleguides {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  .block {
    width: 80rem;
    a {
      text-decoration: underline;
      &:hover {
        text-decoration: none;
      }
    }
  }
  &__list {
    li {
      margin-bottom: 2rem;
    }
  }
}
</style>
