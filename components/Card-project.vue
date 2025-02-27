<template>
  <section
    class="rounded-3xl flex flex-col gap-[1vw] w-full h-full bg-pink-800 container-project lg:flex-row-reverse lg:h-[35vw] font-Inter"
    :style="backgroundStyles"
    v-bind="$attrs"
  >
    <div
      class="grid h-full w-full place-items-center bg-black/15 lg:bg-transparent px-[5%] overflow-hidden lg:basis-3/4 select-none"
    >
      <NuxtImg
        class="z-10 w-8/12 self-end justify-self-end col-[1/1] row-[1/1] rounded-t-2xl aspect-video rotate-6 scale-y-110 img-shadow lg:self-center lg:scale-y-125"
        src="https://res.cloudinary.com/dy8gpozi6/image/upload/v1740540855/switch2-clone-thumbnail_lbwq8a.webp"
        alt=""
        height="100"
        width="220"
      />
      <NuxtImg
        class="z-20 w-2/4 h-[45vw] object-cover object-center justify-self-start col-[1/1] row-[1/1] aspect-[9/16] scale-y-125 -rotate-3 img-shadow"
        src="https://res.cloudinary.com/dy8gpozi6/image/upload/v1740540376/nintendo-switch-full-page_vpohap.webp"
        alt=""
        height="300"
        width="100"
      />
    </div>
    <div class="p-[5%] lg:basis-2/4">
      <ul></ul>
      <TypographyTitle
        class="font-Sora-Semi-Bold-Upload"
        appearance="h2"
        :level="2"
      >
        Project
      </TypographyTitle>
      <TypographyParagraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora nemo
        dolorum esse assumenda, numquam expedita rerum atque?
      </TypographyParagraph>
      <LinkBase class="group w-full lg:w-fit" href="/" external target="_blank">
        Go demo
        <Icon
          class="size-icon-xs group-hover:translate-x-1.5 transition-transform ease-in-out duration-300"
          name="pajamas:arrow-right"
        />
      </LinkBase>
    </div>
  </section>
</template>

<script lang="ts" setup>
import LinkBase from "./base/Link-base.vue";

const img = useImage();
const backgroundStyles = computed(() => {
  const imgUrl = img("/multi-dots.webp");
  return {
    backgroundImage: `url('${imgUrl}')`,
    backgroundPosition: "50%, 0 0",
    backgroundSize: "220px, auto",
  };
});
</script>
<style scoped>
.img-shadow {
  box-shadow: 2.5rem 0.187rem 1.1rem -0.25rem rgba(0, 0, 0, 0.31);
}
</style>
