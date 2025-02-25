<template>
  <div class="angularLogo" :style="{ '--time-animation': `${duration}s` }">
    <div
      class="angularLogo-ring angularLogo-outset starting:opacity-0 delay-[1.8s] transition-opacity"
    ></div>
    <div
      class="angularLogo-ring angularLogo-inset starting:opacity-0 delay-[1.8s] transition-opacity"
    ></div>
    <div
      class="angularLogo-icon"
      @mouseenter="duration = animationTime / 2"
      @mouseleave="duration = animationTime"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  animationTime: number;
}

const { animationTime = 10 } = defineProps<Props>();
const duration = ref(animationTime);
</script>

<style scoped>
.angularLogo {
  --color-ring1: #41b88370;
  --color-ring2: #49638070;
  --size-ring1: 20rem;
  --size-ring2: calc(var(--size-ring1) + 20rem);
  --size-ball: calc(var(--size-ring1) / 20);
  --rotate-ring1: 0deg;
  --rotate-ring2: calc(var(--rotate-ring1) + 90deg);
  --color-ball1: linear-gradient(to right, #aa4b6b, #6b6b83, #3b8d99);
  --color-ball2: linear-gradient(to right, #1e9600, #fff200, #ff0000);
  --color-ball3: linear-gradient(to right, #a8c0ff, #3f2b96);
  --color-ball4: linear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9);

  display: grid;
  place-content: center;
  place-items: center;
  position: relative;
  margin: auto;

  & .angularLogo-ring {
    grid-area: 1/1/1/1;
    position: relative;
    border-radius: 50%;

    &::after,
    &::before {
      position: absolute;
      content: "";
      width: var(--size-ball);
      height: var(--size-ball);
      border-radius: 50%;
      border: solid var(--color-ring1) 0.1rem;
    }

    &::after {
      top: 0;
      left: 50%;
      translate: 0 -0.5rem;
    }

    &::before {
      bottom: 0;
      left: 50%;
      translate: 0 0.5rem;
    }
  }

  & .angularLogo-inset {
    border: solid 0.1rem var(--color-ring2);
    height: var(--size-ring2);
    width: var(--size-ring2);
    rotate: var(--size-ring1);
    animation: rotate var(--time-animation) linear infinite;

    &::before {
      background: var(--color-ball1);
    }

    &::after {
      background: var(--color-ball2);
    }
  }

  & .angularLogo-outset {
    border: dotted 0.1rem var(--color-ring1);
    height: var(--size-ring1);
    width: var(--size-ring1);
    rotate: var(--rotate-ring2);
    animation: rotate var(--time-animation) linear reverse infinite;

    &::before {
      background: var(--color-ball3);
    }

    &::after {
      background: var(--color-ball4);
    }
  }

  & .angularLogo-icon {
    grid-area: 1/1/1/1;
    width: fit-content;
  }
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>
