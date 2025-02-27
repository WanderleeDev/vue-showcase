<template>
  <p class="font-paragraph" v-bind="$attrs">
    <slot />
  </p>
</template>

<script lang="ts" setup></script>

<style>
.font-paragraph {
  font-size: 5vw;
  @media (width >= 768px) {
    font-size: 3vw;
  }
  @media (width >= 1024px) {
    font-size: 1.4vw;
  }
}
</style>
