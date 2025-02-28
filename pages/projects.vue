<template>
  <NuxtLayout name="project">
    <div class="cards">
      <CardProject
        v-for="(project, i) in projects"
        class="cards-card"
        :key="project.id"
        :style="{ '--index': `${i + 1}` }"
        v-bind="project"
      />
    </div>
    <div class="flex flex-col lg:flex-row justify-between gap-[5vw]">
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
</script>

<style scoped>
.cards {
  --total-cards: v-bind(projects.length);
  --spacing-y: 10vw;
  --card-height: calc(100% / var(--total-cards));
  --target-brightness: 50%;

  display: flex;
  flex-direction: column;
  gap: var(--spacing-y);
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
