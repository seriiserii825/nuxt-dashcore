<script setup lang="ts">
import { ref, computed } from "vue";
import { NuxtLink } from "#components";

export type MenuNode = {
  label: string;
  to?: string;
  icon?: [string, string] | string;
  children?: MenuNode[];
};

const props = withDefaults(
  defineProps<{
    item: MenuNode;
    depth?: number;
  }>(),
  {
    depth: 0,
  }
);

const isLeaf = computed(() => !props.item.children || props.item.children.length === 0);
const isOpen = ref(false);

// Only allow dropdowns up to depth 2 (3 levels total: 0,1,2)
const canHaveDropdown = computed(() => !isLeaf.value && props.depth < 2);

function toggle() {
  if (canHaveDropdown.value) {
    isOpen.value = !isOpen.value;
  }
}
</script>

<template>
  <li
    class="menu-item"
    :class="[
      isLeaf ? 'menu-item--leaf' : 'menu-item--has-children',
      isOpen && !isLeaf ? 'menu-item--open' : '',
      `menu-item--depth-${depth}`,
    ]">
    <!-- Leaf item (NuxtLink) -->
    <template v-if="isLeaf">
      <NuxtLink :to="item.to || '#'" class="menu-item__link menu-item__link--leaf" role="menuitem">
        <FontAwesomeIcon v-if="item.icon" :icon="item.icon as any" class="menu-item__icon" />
        <span class="menu-item__label">{{ item.label }}</span>
      </NuxtLink>
    </template>

    <!-- Dropdown trigger -->
    <template v-else>
      <button
        type="button"
        class="menu-item__button"
        :aria-expanded="isOpen ? 'true' : 'false'"
        aria-haspopup="true"
        @click="toggle">
        <FontAwesomeIcon v-if="item.icon" :icon="item.icon as any" class="menu-item__icon" />
        <span class="menu-item__label">{{ item.label }}</span>
        <span class="menu-item__arrow">
          <FontAwesomeIcon :icon="['fas', isOpen ? 'chevron-up' : 'chevron-down']" />
        </span>
      </button>

      <!-- Dropdown -->
      <ul
        v-if="isOpen"
        class="menu-item__submenu"
        :class="[`menu-item__submenu--level-${depth + 1}`]"
        role="menu">
        <MenuItem
          v-for="(child, idx) in item.children"
          :key="idx + child.label"
          :item="child"
          :depth="depth + 1" />
      </ul>
    </template>
  </li>
</template>
<style lang="scss">
.menu-item {
  width: 100%;
  font-size: 1.8rem;
  color: var(--text-light);
  &.menu-item--open {
    & > .menu-item__button {
      color: white;
    }
    .menu-item__link {
      &.router-link-exact-active {
        color: white;
      }
    }
  }
  &.menu-item--depth-0 > .menu-item__link--leaf.router-link-exact-active {
    color: white;
  }
  &.menu-item--depth-0 > .menu-item__link--leaf,
  .menu-item--depth-1 > .menu-item__link,
  &__button {
    display: flex;
    padding: 0.8rem 3.2rem;
    width: 100%;
    font-size: 1.8rem;
    color: var(--text-light);
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  &__label {
    margin-left: 1rem;
    margin-right: auto;
  }
  &__submenu {
    display: flex;
    flex-direction: column;
    padding: 1.6rem 0 1.6rem 1.6rem;
    background: #182330;
    .menu-item__submenu {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      padding-left: 5.4rem;
    }
  }
}
</style>
