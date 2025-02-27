<template>
  <div
    class="container"
    :style="{ '--time-animation': `${animationTime}s` }"
    v-bin="$attrs"
  >
    <div class="container-ring container-outset animate-fade"></div>
    <div
      class="container-ring container-inset shadow-2xl shadow-white/5 animate-fade"
    ></div>
    <div class="container-slot">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { animationTime = 10 } = defineProps<{ animationTime: number }>();
</script>

<style scoped>
.container {
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

  & .container-ring {
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

  & .container-inset {
    border: solid 0.1rem var(--color-ring2);
    height: var(--size-ring2);
    width: var(--size-ring2);
    rotate: var(--size-ring1);
    animation: rotate var(--time-animation) linear infinite;
    background-color: hwb(0 100% 0% / 0.02);
    border: none;

    &::before {
      background: var(--color-ball1);
    }

    &::after {
      background: var(--color-ball2);
    }
  }

  & .container-outset {
    border: dotted 0.1rem var(--color-ring1);
    height: var(--size-ring1);
    width: var(--size-ring1);
    rotate: var(--rotate-ring2);
    animation: rotate var(--time-animation) linear reverse infinite;
    background-color: hwb(0 0% 100% / 0.3);

    &::before {
      background: var(--color-ball3);
    }

    &::after {
      background: var(--color-ball4);
    }
  }

  & .container-slot {
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
