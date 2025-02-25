<template>
  <header
    class="hidden md:flex flex-col shadow-sm shadow-vue2 h-full w-full justify-center items-center py-[2vw]"
  >
    <NuxtLink
      class="rounded-full overflow-hidden"
      to="https://github.com/WanderleeDev"
      external
      aria-label="Github WanderleeDev"
      target="_blank"
    >
      <NuxtImg
        class="size-[6vw] lg:size-[5vw] xl:size-[4vw]"
        src="https://res.cloudinary.com/dy8gpozi6/image/upload/v1740447261/meme_gato_rwte5r.webp"
        alt="wanderleedev github avatar"
        height="40"
        width="40"
      />
    </NuxtLink>
    <div
      class="flex flex-col grow justify-center items-center gap-[1.5vw] lg:font-bold"
    >
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
