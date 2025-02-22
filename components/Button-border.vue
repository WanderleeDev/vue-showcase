<template>
  <BaseButton
    class="border-2 border-red-700 grid place-content-center size-[3vw] hover:text-red-700 hover:bg-red-700/10 transition-colors"
    v-bind="$attrs"
  >
    <slot />
  </BaseButton>
</template>

<script lang="ts" setup></script>
