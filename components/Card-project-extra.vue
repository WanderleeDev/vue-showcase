<template>
  <NuxtLink
    class="relative grid place-items-center gap-8 p-8 rounded-lg overflow-hidden min-h-60"
    :to="deploy"
    :style="{ background: background }"
    target="_blank"
    :aria-label="`ver proyectos extra de ${name}`"
    :title="`ir a proyects ${name} extra`"
    external
  >
    <div class="relative grid h-full">
      <TypographyTitle
        class="font-Saira-stencil-one w-max flex gap-2"
        :level="2"
        appearance="h4"
      >
        <span class="font-semibold text-orange-600">&lt;</span>
        Proyectos {{ name }}
        <span class="font-semibold text-orange-600">&gt;</span>
      </TypographyTitle>
      <TypographyParagraph class="font-Inter">
        Algunos de mis proyectos realizados con {{ name }}.
      </TypographyParagraph>
    </div>
    <div class="card-icon">
      <Icon :name="icon" />
    </div>
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
