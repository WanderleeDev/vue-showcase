<template>
  <NuxtLink
    class="relative grid place-items-center gap-8 p-8 rounded-lg overflow-hidden min-h-60"
    :to="deploy"
    :style="{ background: background }"
    target="_blank"
    :aria-label="`Go to ${name} projects`"
    :title="`Go to ${name} projects`"
    external
  >
    <span class="sr-only">Go to {{ name }} projects</span>
    <div class="relative grid h-full">
      <TypographyTitle
        class="font-Saira-stencil-one w-max flex gap-2"
        :level="2"
        appearance="h4"
      >
        <span class="font-semibold text-orange-600">&lt;</span>
        Projects {{ name }}
        <span class="font-semibold text-orange-600">&gt;</span>
      </TypographyTitle>
      <TypographyParagraph class="font-Inter">
        Some of my projects carried out with {{ name }}.
      </TypographyParagraph>
    </div>
    <Icon :name="icon" class="card-icon" />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { ProjectExtra } from "~/types";

const { background, deploy, icon, name } = defineProps<ProjectExtra>();
</script>

<style scoped>
.card {
  & .card-svgWrapper {
    position: relative;
    &::before {
      position: absolute;
      content: "";
      inset: -5rem;
      border-radius: 50%;
      border: solid 0.1rem #1565c0;
    }
  }

  & .card-svg {
    color: rgba(0, 0, 0, 0.171);
    width: fit-content;
    right: 2rem;
    z-index: -1;
    height: 100%;
    transition: opacity 0.15s linear;
    animation: rotate linear 10s infinite reverse;
  }

  & .card-icon {
    @media (width <= 500px) {
      position: absolute;
      z-index: -1;
      opacity: 0.4;
    }
  }
}
</style>
