<template>
  <BaseButton
    class="border-2 border-red-700 grid place-content-center hover:text-red-700 hover:bg-red-700/10 transition-colors"
    :class="{
      'size-icon': variant === 'icon',
      'p-[1.5%_3%]': variant === 'normal',
    }"
    v-bind="$attrs"
  >
    <slot />
  </BaseButton>
</template>

<script lang="ts" setup>
interface Props {
  variant: "normal" | "icon";
}

const { variant = "icon" } = defineProps<Partial<Props>>();
</script>
