<template>
  <div class="layout">
    <UiHeaderPage
      class="starting:-translate-x-full transition-transform delay-1000 duration-500 linear"
    />

    <main class="h-full">
      <h1 class="sr-only">Vue projects</h1>
      <slot />
    </main>
    <UiNavbarPage
      class="starting:translate-x-full transition-transform delay-1000 duration-500 linear"
    />
  </div>
</template>

<script lang="ts" setup>
import { register } from "swiper/element/bundle";
register();
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.layout {
  display: grid;
  height: 100%;
  grid-template-rows: 1fr;
  grid-template-columns: 10vw 1fr 10vw;
  overflow: hidden;
}
</style>
