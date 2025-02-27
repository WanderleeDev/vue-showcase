<template>
  <NuxtLayout name="project">
    <div class="cards">
      <CardProject
        v-for="(card, i) in cards"
        class="cards-card"
        :key="card"
        :style="{ '--index': `${i + 1}` }"
      />
    </div>
    <div class="flex flex-col lg:flex-row justify-between gap-[5vw]">
      <CardProjectExtra
        v-for="{ background, title, url, icon } in extraProjects"
        :key="title"
        :background
        :title
        :url
      >
        <Icon :name="icon" />
      </CardProjectExtra>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import type { ExtraData } from "~/shared/interfaces/ExtraProject.interface";

const cards: number[] = Array.from({ length: 7 }, (_, i) => i + 1);
const extraProjects: ExtraData[] = [
  {
    title: "Angular",
    url: "https://entry-page-angular.vercel.app/",
    background: "linear-gradient(to left, #3a6186, #89253e);",
    icon: "devicon:angular",
  },
  {
    title: "React",
    url: "https://react-showcase-three.vercel.app/",
    background: "linear-gradient(to right, #4b79a1, #283e51);",
    icon: "devicon:react",
  },
];
</script>

<style scoped>
.cards {
  --total-cards: v-bind(cards.length);
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
