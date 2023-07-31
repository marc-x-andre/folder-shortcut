<template>
  <div class="folder">
    <n-space>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.com/svgjs"
        width="256"
        height="256"
        viewBox="0 0 48 48"
      >
        <g data-name="Open Folder">
          <path
            :fill="folderStore.backColor"
            d="M45 18h-4v-4a2.996 2.996 0 0 0-3-3H22.75a3 3 0 0 1-2.33-1.11l-1.96-2.41A3.985 3.985 0 0 0 15.36 6H4a2.996 2.996 0 0 0-3 3v29.57a3.367 3.367 0 0 0 1.01 2.42A3.367 3.367 0 0 0 4.43 42h33.66a3.441 3.441 0 0 0 3.3-2.47l5.53-18.97A2.003 2.003 0 0 0 45 18z"
          ></path>
          <path
            :fill="folderStore.frontColor"
            d="M44.999 18H16.572a3.43 3.43 0 0 0-3.292 2.47L7.72 39.531A3.429 3.429 0 0 1 4.429 42h33.663a3.43 3.43 0 0 0 3.294-2.47l5.533-18.97a2 2 0 0 0-1.92-2.56z"
          ></path>
        </g>
      </svg>
      <Form />
    </n-space>
  </div>
</template>

<script setup>
import Form from "./Form.vue";
import { useFolderStore } from "../../stores/folder";

const folderStore = useFolderStore();
</script>

<style lang="sass">
@import vars
</style>
