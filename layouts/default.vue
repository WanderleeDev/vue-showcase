<template>
  <div class="layout">
    <UiHeaderPage />

    <main class="h-full">
      <Transition name="fade">
        <slot />
      </Transition>
    </main>
    <UiNavbarPage />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.layout {
  display: grid;
  height: 100%;
  grid-template-rows: 1fr;
  grid-template-columns: 10vw 1fr 10vw;
}
</style>
