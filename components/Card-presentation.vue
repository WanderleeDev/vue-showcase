<template>
  <figure
    class="bg-gradient-to-br from-vue-blue to-vue-green rounded-3xl gap-[1vw] w-full h-full lg:h-[35vw] overflow-hidden grid"
    v-bind="$attrs"
  >
    <div
      class="bg-[radial-gradient(circle_at_center,rgba(66,184,131,0.6)_0%,rgba(53,73,94,0.9)_70%)] row-[1/2] col-[1/2] w-full h-full"
    ></div>
    <figcaption
      class="row-[1/2] col-[1/2] font-Saira-stencil-one flex justify-center items-center gap-[1vw] drop-shadow-xl shadow-black lg:gap-0 select-none"
    >
      <Icon name="devicon-vuejs" class="text-[13vw]" />
      <TypographyTitle
        :level="2"
        appearance="h3"
        class="lg:-translate-x-[4vw] lg:first-letter:opacity-0"
      >
        Vue projects
      </TypographyTitle>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
const animationStarted = ref(false);

onMounted(() => {
  // Iniciar la animación después de un breve retraso
  setTimeout(() => {
    animationStarted.value = true;
  }, 500);
});
</script>
