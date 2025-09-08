import { ref } from "vue";
import { defineStore } from "pinia";
export const useAdminStore = defineStore("admin", () => {
  const level_1 = ref("");
  const level_2 = ref("");
  function setLevelOne(title: string) {
    level_1.value = title;
  }
  function setLevelTwo(title: string) {
    level_2.value = title;
  }
  return { level_1, setLevelOne, level_2, setLevelTwo };
});
