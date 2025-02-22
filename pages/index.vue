<template>
  <NuxtLayout>
    <h1 class="text-2xl">Index page</h1>
  </NuxtLayout>
</template>
<script setup lang="ts">
definePageMeta({
  name: "Vue projects",
  layout: "default",
  scrollToTop: true,
});

useSeoMeta({
  title: "Vue projects",
  description: "My projects",
});
</script>
