<template>
  <div class="grid place-content-center w-full h-full">
    <NuxtLink to="projects" aria-label="view projects">
      <UiVuePresentation />
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: "Vue projects",
  description: "My projects",
});
</script>
<style scoped></style>
