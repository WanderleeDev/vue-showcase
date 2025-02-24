<template>
  <div
    class="fixed inset-0 h-full w-full z-50 bg-main flex flex-col items-center justify-center"
    v-bind="$attrs"
  >
    <slot name="default" />
  </div>
</template>
