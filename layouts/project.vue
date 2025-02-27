<template>
  <section
    class="p-[clamp(5%,calc(2vw+.5rem),3rem)] overflow-y-auto h-dvh flex flex-col gap-[10vw] customScroll"
  >
    <TypographyTitle :level="2" class="sr-only">Projects</TypographyTitle>
    <slot />
  </section>
</template>
<script setup lang="ts"></script>
<style scoped>
.customScroll {
  --sb-track-color: #070731;
  --sb-thumb-color: #646da2;
  --sb-size: 0.5vw;

  &::-webkit-scrollbar {
    width: var(--sb-size);
  }

  &::-webkit-scrollbar-track {
    background: var(--sb-track-color);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--sb-thumb-color);
    border-radius: 3px;
  }
}

@supports not selector(::-webkit-scrollbar) {
  .customScroll {
    scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);
  }
}
</style>
