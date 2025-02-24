<template>
  <header
    class="flex flex-col border-r-2 border-purple-200 h-full w-full justify-center items-center py-[2vw]"
  >
    <div class="bg-red-400 size-[2vw]"></div>
    <div class="flex flex-col grow justify-center items-center gap-[1.5vw]">
      <NuxtLink
        class="link hover:text-blue-200 transition-colors tracking-wider"
        to="https://github.com/WanderleeDev"
        external
        aria-label="Github WanderleeDev"
        target="_blank"
      >
        Develop by WanderleeDev
      </NuxtLink>
      <span class="bg-accent rounded-full size-[.5vw] block"></span>
    </div>
  </header>
</template>

<script lang="ts" setup></script>

<style>
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
    font-size: 0.9vw;
  }
}
</style>
