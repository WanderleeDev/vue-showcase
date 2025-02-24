<template>
  <!-- <UiVuePresentation /> -->
  <div
    class="grid place-content-center w-full h-full size-vue-icon"
    ref="container"
  >
    <Icon
      class="scale-150 row-[1/2] col-[1/2] blur-[5.5rem] bg-[linear-gradient(-45deg,#41b88380_30%,#35495e80)]"
      name="devicon-vuejs"
    />
    <Icon class="scale-105 row-[1/2] col-[1/2] blur-sm" name="devicon-vuejs" />
    <Icon class="row-[1/2] col-[1/2] z-10" name="devicon-vuejs" />
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: "Vue projects",
  description: "My projects",
});
</script>
<style scoped>
.size-vue-icon {
  font-size: clamp(5rem, calc(35vw + 1rem), 18rem);
}
</style>
