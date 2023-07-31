<template>
  <div>
    <n-form :model="model">
      <n-space>
        <n-form-item label="Front color" path="frontColor">
          <n-color-picker
            v-model:value="folderStore.frontColor"
            :show-alpha="false"
          />
        </n-form-item>
        <n-form-item label="Back color" path="backColor">
          <n-color-picker
            v-model:value="folderStore.backColor"
            :show-alpha="false"
          />
        </n-form-item>
      </n-space>
      <!-- <n-space>
        <n-form-item label="Launcher Path" path="launcherPath">
          <n-input
            v-model:value="model.launcherPath"
            type="text"
            placeholder="%LocalAppData%\Programs\Microsoft VS Code\Code.exe"
          />
        </n-form-item>
        <n-form-item label="Folder Path" path="folderPath">
          <n-input
            v-model:value="model.folderPath"
            type="text"
            placeholder="%UserProfile%\repositories\helpers"
          />
        </n-form-item>
      </n-space> -->
      <n-space>
        <n-button type="primary">Generate ICO</n-button>
      </n-space>
    </n-form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useFolderStore } from "../../stores/folder";

const folderStore = useFolderStore();
const model = reactive({
  launcherPath: "",
  folderPath: "",
});
</script>

<style lang="sass"></style>
