<template>
  <NuxtLayout name="project">
    <div class="cards flex flex-col gap-[10vw]">
      <CardPresentation class="cards-card" :style="{ '--index': 0 }" />
      <template v-for="(project, i) in projects" :key="project.id">
        <CardProject
          class="cards-card"
          :style="{ '--index': `${i + 1}` }"
          v-bind="project"
        />
      </template>
    </div>
    <div class="flex flex-col lg:flex-row justify-between gap-[10vw_5vw]">
      <CardProjectExtra
        v-for="project in projectsExtra"
        :key="project.name"
        v-bind="project"
      />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { projectsExtra } from "~/constants/extraProjects";
import type { Project } from "~/types";

const { data: projects } = await useFetch<Project[]>("/api/projects");
const titlePage = ref("Vue Showcase - Projects");
const descriptionPage = ref(
  "Check out the compilation of my vuejs / nuxtjs projects, more added soon"
);

useSeoMeta({
  title: "Projects",
  description: descriptionPage,
  ogTitle: titlePage,
  ogDescription: descriptionPage,
  twitterDescription: descriptionPage,
  twitterTitle: titlePage,
});
</script>

<style scoped>
.cards {
  --total-cards: v-bind(projects.length);
  --card-height: calc(100% / var(--total-cards));
  --target-brightness: 50%;

  view-timeline-name: --card;

  & .cards-card {
    position: sticky;
    top: calc(var(--index) * 20px);
    transform-origin: top center;

    animation: stacking linear forwards;
    animation-timeline: --card;
    animation-range-start: exit-crossing
      calc(var(--card-height) * (var(--index) - 1));
    animation-range-end: exit-crossing calc(var(--card-height) * var(--index));
  }
}

@keyframes stacking {
  to {
    transform: scale(calc(1 - 0.1 * (var(--total-cards) - var(--index))));
  }
}
</style>
