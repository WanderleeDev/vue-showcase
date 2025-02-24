<template>
  <section class="h-full grid place-content-center overflow-hidden">
    <strong
      class="title-char font-extrabold text-transparent transition-colors duration-1000 starting:text-white bg-clip-text flex flex-col justify-center items-center font-Salsa bg-center bg-cover"
      :style="{ backgroundImage: `url(${images[currentImage]})` }"
      @animationend="handleAnimation"
    >
      <span
        class="starting:translate-y-[10vw] starting:blur-md transition-all duration-1000 ease-in-out title"
      >
        Vue
      </span>
      <span class="text-[3vw]"> projects </span>
      <!-- <span
        class="starting:translate-y-[-10vw] starting:opacity-0 duration-1000 ease-in-out"
      >
        u
      </span>
      <span
        class="starting:translate-y-[10vw] starting:opacity-0 duration-1000 ease-in-out"
      >
        e
      </span> -->
      <!-- <sub class="text-[5vw] text-white">projects</sub> -->
    </strong>
  </section>
</template>

<script lang="ts" setup>
const currentImage = ref(0);
const images = ref([
  "https://res.cloudinary.com/dy8gpozi6/image/upload/v1740362616/nuxt_akbhez.webp",
  "https://nuxt.com/_vercel/image?url=%2Fassets%2Fblog%2Funderstanding-how-fetch-works-in-nuxt-2.12.png&w=640&q=100",
  "https://www.nintendo.com/successor/assets/img/en-us/l-live-bg3.webp",
]);

let intervalId: NodeJS.Timeout;

onMounted(() => {
  intervalId = setInterval(() => {
    currentImage.value = (currentImage.value + 1) % images.value.length;
  }, 3000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});

function handleAnimation(e: any) {
  console.log(e);
}
</script>

<style>
.title {
  font-size: clamp(1.8rem, calc(30vw + 1rem), 20rem);
}
</style>
