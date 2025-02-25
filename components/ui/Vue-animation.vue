<template>
  <Rings :animation-time="10">
    <NuxtLink
      class="grid place-content-center size-vue-icon translate-y-[1.5vw]"
      to="projects"
      aria-label="view projects"
    >
      <Icon
        class="scale-[2] row-[1/2] col-[1/2] blur-[4.5rem] bg-[linear-gradient(-45deg,#41b88380_30%,#35495e80)]"
        :class="{ 'background-animation': !mainAnimation.initAnimation }"
        @animationend="catchAnimationEnd"
        name="devicon-vuejs"
      />
      <Icon
        class="scale-105 row-[1/2] col-[1/2] blur-sm"
        :class="{ 'animation-icon': !mainAnimation.initAnimation }"
        name="devicon-vuejs"
      />
      <Icon
        class="row-[1/2] col-[1/2] z-10"
        :class="{ 'animation-icon': !mainAnimation.initAnimation }"
        name="devicon-vuejs"
      />
    </NuxtLink>
  </Rings>
</template>

<script lang="ts" setup>
import { useMainAnimation } from "~/stores/mainAnimation";

const mainAnimation = useMainAnimation();
const catchAnimationEnd = () => (mainAnimation.$state.initAnimation = true);
</script>

<style scoped>
.size-vue-icon {
  font-size: 35vw;
  @media (width >= 768px) {
    font-size: 20vw;
  }
  @media (width >= 1024px) {
    font-size: 15vw;
  }
}

.animation-icon {
  animation: fadeBlurUp 800ms ease-in-out forwards;
}

.background-animation {
  animation: fade 1700ms ease-in-out forwards;
}

@keyframes fadeBlurUp {
  0% {
    filter: blur(2rem);
    transform: translateY(10vw);
    opacity: 0;
  }
  50% {
    opacity: 1;
    filter: blur(0);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
