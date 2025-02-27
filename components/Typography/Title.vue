<template>
  <span></span>
  <component v-bind="$attrs" :is="tag" :class="appearances[appearance]">
    <slot />
  </component>
</template>

<script lang="ts" setup>
interface Props {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  appearance: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const { level = 1, appearance = "h4" } = defineProps<Partial<Props>>();

const appearances = {
  h1: "text-[clamp(2rem,calc(5vw+0.5rem),6rem)]",
  h2: "text-[clamp(1.5rem,calc(4vw+0.5rem),4rem)]",
  h3: "text-[clamp(1.25rem,calc(3vw+0.5rem),3rem)]",
  h4: "text-[clamp(1rem,calc(2vw+0.5rem),2rem)]",
  h5: "text-[clamp(0.75rem,calc(1.5vw+0.5rem),1.5rem)]",
  h6: "text-[clamp(0.5rem,calc(1vw+0.5rem),1rem)]",
};

const tag = computed(() => `h${level}`);
</script>
