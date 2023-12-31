<template>
  <n-layout>
    <n-layout-header>
      <n-page-header :class="{ mobile: isMobile }">
        <template #subtitle>
          <a href="https://marcxandre.dev/" style="text-decoration: none">
            <span class="handwrite" style="font-size: 1.2em">
              Fuelled by passion
            </span>
          </a>
        </template>
        <template #avatar>
          <a
            href="https://marcxandre.dev/"
            style="text-decoration: none; color: inherit"
          >
            <img
              width="28"
              height="28"
              src="/icons/apple-touch-icon-180x180.png"
              :class="{ inverted: themeStore.isDark }"
              alt="Marc Logo"
            />
          </a>
        </template>
        <template #extra>
          <n-space>
            <n-button
              tag="a"
              href="https://blog.marcxandre.dev/"
              target="_blank"
              referrerpolicy="origin"
            >
              Blog
            </n-button>
            <n-button
              tag="a"
              href="https://www.linkedin.com/in/marc-x-andre/"
              target="_blank"
              referrerpolicy="origin"
            >
              Linkedin
            </n-button>
            <n-button
              tag="a"
              href="https://cv.marcxandre.dev/"
              target="_blank"
              referrerpolicy="origin"
            >
              Resume
            </n-button>
          </n-space>
        </template>
      </n-page-header>
    </n-layout-header>
    <div class="content">
      <slot />
    </div>
    <div class="centered">
      <p class="muteted">
        Copyright © 2023 Marc-André Daigneault. All rights reserved.
      </p>
    </div>
  </n-layout>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import { useThemeStore } from "@/stores/theme";
const themeStore = useThemeStore();

const displayArrow = ref(0);
const hideArrow = ref(true);

onMounted(() => {
  document
    .getElementsByClassName("n-page-header")[0]
    .classList.add("animate__animated", "animate__fadeInDown");
});

setInterval(() => {
  displayArrow.value = 1;
  hideArrow.value = false;
}, 6000);
</script>

<style lang="sass">
@import vars
.n-layout
  height: 100vh

  .n-layout-scroll-container
    display: flex
    flex-direction: column

  .content
    flex-grow: 1
    width: 80%
    max-width: 1024px
    padding: 4rem 2rem 2rem
    margin: auto
    display: flex
    align-items: center
    justify-content: center

.mobile
  .n-page-header
    position: relative
    display: flex
    flex-direction: column
    gap: 1rem
    transition: color .3s var(--n-bezier), background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier), border-color .3s var(--n-bezier)
    background-color: var(--n-color) !important
    &:before
      content: none

.n-page-header
  padding: 1rem 2rem
  position: fixed
  width: calc( 100vw - 4rem )
  z-index: 1000
  &:before
    position: absolute
    top: 0
    left: 0
    content: ''
    height: 100%
    width: 100%
    transition: color .3s var(--n-bezier), background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier), border-color .3s var(--n-bezier)
    // background: linear-gradient(to top, transparent, var(--n-color), var(--n-color))
  .n-page-header__main
    z-index: 1

.arrow-links
  z-index: -1
  position: absolute
  top: -2rem
  right: 0.5rem
  width: 200px
  transform: scale(0.75)
  display: none
  +fromLargeScreen()
    display: inherit
  .arrow_1
    top: 10px
    position: absolute
    width: 200px

.hide
  opacity: 0

a
  transition: color .3s var(--n-bezier), background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier), border-color .3s var(--n-bezier)
  color: inherit
  &:hover
    color: var(--accent-color)

.muteted
  opacity: 0.8
  font-size: 0.6rem
</style>
