<template>
  <NuxtLink
    v-bind="$attrs"
    href="#"
    class="shadow-md bg-white/25 border-transparent border rounded-full inline-flex items-center justify-center py-[2%] px-[5%] text-center text-base font-medium text-dark hover:bg-dark-3 hover:opacity-80 transition-opacity gap-[1vw] font-link"
  >
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup></script>
<style scoped>
.font-link {
  font-size: 3vw;
  @media (width >= 768px) {
    font-size: 2vw;
  }
  @media (width >= 1024px) {
    font-size: 1.3vw;
  }
}
</style>
