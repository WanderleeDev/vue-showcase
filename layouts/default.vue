<template>
  <div class="layout overflow-hidden">
    <UiHeaderPage
      class="starting:-translate-x-full transition-transform delay-1000 duration-500 linear"
    />
    <main class="h-full">
      <h1 class="sr-only">Vue Showcase</h1>
      <slot />
    </main>
    <UiNavbarPage
      class="starting:translate-x-full transition-transform delay-1000 duration-500 linear lg"
    />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.layout {
  --width-column: 13vw;

  display: grid;
  height: 100%;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  @media (width >= 768px) {
    grid-template-columns: var(--width-column) 1fr var(--width-column);
  }
  @media (width >= 1024px) {
    --width-column: 9vw;
  }
}
</style>
