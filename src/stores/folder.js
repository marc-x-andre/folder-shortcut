import { ref } from "vue";
import { defineStore } from "pinia";

export const useFolderStore = defineStore("folder", () => {
  const frontColor = ref("#a855f7");
  const backColor = ref("#723aa5");

  return { frontColor, backColor };
});
