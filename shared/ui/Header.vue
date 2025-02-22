<template>
  <header
    class="flex flex-col border-2 border-l-purple-200 h-full w-full justify-center items-center py-[2vw]"
  >
    <div class="bg-red-400 size-[2vw]"></div>
    <div class="flex flex-col grow justify-center items-center gap-[1.5vw]">
      <NuxtLink class="link"> Develop by WanderleeDev </NuxtLink>
      <span class="bg-amber-100 rounded-full size-[.5vw] block"></span>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { NuxtLink } from "#components";
</script>

<style scoped>
.link {
  text-orientation: sideways;
  transform: rotate(180deg);
  writing-mode: vertical-rl;
  font-size: 2.5vw;

  @media (width >= 500px) {
    font-size: 2vw;
  }

  @media (width >= 800px) {
    font-size: 1.5vw;
  }

  @media (width >= 1200px) {
    font-size: 1vw;
  }
}
</style>
