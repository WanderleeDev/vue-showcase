<template>
  <div class="grid place-content-center w-full h-full">
    <UiVueAnimation />
  </div>
</template>
<script setup lang="ts">
const titlePage = ref("Vue Showcase - Home");
const descriptionPage = ref(
  "Here you will find my projects made with vuejs and nuxt"
);

useSeoMeta({
  title: "Home",
  description: descriptionPage,
  ogTitle: titlePage,
  ogDescription: descriptionPage,
  twitterDescription: descriptionPage,
  twitterTitle: titlePage,
});
</script>
