<script setup>
import MainLayout from "@/layout/MainLayout.vue";
import { light, dark } from "./assets/themes";
import { useThemeStore } from "@/stores/theme";
import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";

const themeStore = useThemeStore();
hljs.registerLanguage("json", json);
</script>

<template>
  <n-config-provider
    :hljs="hljs"
    :theme-overrides="themeStore.isDark ? dark : light"
  >
    <MainLayout>
      <router-view />
    </MainLayout>
  </n-config-provider>
</template>
