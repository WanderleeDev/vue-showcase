<template>
  <div class="grid place-content-center h-full">
    <h1 class="title-char lg">V</h1>
    <!-- <Slide class="w-80" /> -->
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: "Vue projects",
  description: "My projects",
});
</script>
<style scoped>
.title-char {
  font-size: 50vw;
  font-weight: 900;
  @media (width >= 768px) {
    font-size: 40vw;
  }
  @media (width >= 1024px) {
    font-size: 30vw;
  }
}
</style>
