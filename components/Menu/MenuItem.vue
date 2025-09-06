<script setup lang="ts">
import { ref, computed } from "vue"
import { NuxtLink } from "#components"

export type MenuNode = {
  label: string
  to?: string
  icon?: [string, string] | string
  children?: MenuNode[]
}

const props = withDefaults(
  defineProps<{
    item: MenuNode
    depth?: number
  }>(),
  {
    depth: 0,
  }
)

const isLeaf = computed(() => !props.item.children || props.item.children.length === 0)
const isOpen = ref(false)

// Only allow dropdowns up to depth 2 (3 levels total: 0,1,2)
const canHaveDropdown = computed(() => !isLeaf.value && props.depth < 2)

function toggle() {
  if (canHaveDropdown.value) {
    isOpen.value = !isOpen.value
  }
}
</script>

<template>
  <li class="menu-item">
    <!-- Leaf item (NuxtLink) -->
    <template v-if="isLeaf">
      <NuxtLink :to="item.to || '#'" class="menu-link">
        <FontAwesomeIcon v-if="item.icon" :icon="item.icon as any" class="menu-icon" />
        <span class="menu-label">{{ item.label }}</span>
      </NuxtLink>
    </template>

    <!-- Dropdown trigger -->
    <template v-else>
      <button type="button" class="menu-button" @click="toggle">
        <FontAwesomeIcon v-if="item.icon" :icon="item.icon as any" class="menu-icon" />
        <span class="menu-label">{{ item.label }}</span>
        <span class="menu-arrow">
          <FontAwesomeIcon :icon="['fas', isOpen ? 'chevron-up' : 'chevron-down']" />
        </span>
      </button>

      <!-- Dropdown -->
      <ul v-if="isOpen" class="submenu">
        <MenuItem
          v-for="(child, idx) in item.children"
          :key="idx + child.label"
          :item="child"
          :depth="depth + 1"
        />
      </ul>
    </template>
  </li>
</template>
