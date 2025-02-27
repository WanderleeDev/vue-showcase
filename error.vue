<template>
  <section
    class="relative z-10 bg-main h-full content-center flex flex-col justify-center items-center"
  >
    <p
      class="mb-2 font-bold leading-none text-white title-char text-center text-stroke font-Bubblegum-Sans"
    >
      {{ error.statusCode }}
    </p>
    <TypographyTitle
      class="mb-3 text-[22px] font-semibold leading-tight text-white"
      :level="1"
      appearance="h4"
    >
      Oops! {{ error.message }}
    </TypographyTitle>
    <TypographyParagraph
      class="mb-8 text-white text-center"
      v-if="error.statusCode === 404"
    >
      The page you are looking for it maybe deleted
    </TypographyParagraph>
    <ButtonBorder
      class="mx-auto"
      variant="normal"
      @click="clearError({ redirect: '/' })"
    >
      Go To Home
    </ButtonBorder>
    <BackgroundBars />
  </section>
</template>
<script setup lang="ts">
defineProps(["error"]);
</script>

<style scoped>
.text-stroke {
  -webkit-text-stroke: 0.1rem var(--color-vue2);
}
</style>
