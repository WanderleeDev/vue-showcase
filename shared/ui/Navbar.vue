<template>
  <nav
    class="flex flex-col items-center border-2 border-l-purple-200 h-full w-full py-[2vw]"
  >
    <ButtonBorder>
      <AlignCenter class="size-[1.5vw]" />
    </ButtonBorder>

    <ul class="flex flex-col justify-center items-center grow gap-[2.5vw]">
      <li>
        <NuxtLink
          class="rounded-full"
          to="/"
          exact-active-class="router-link-active"
        >
          <House class="size-[1.5vw]" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="rounded-full"
          to="/projects"
          exact-active-class="router-link-active"
        >
          <FolderGit2 class="size-[1.5vw]" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="rounded-full"
          to="https://entry-page-angular.vercel.app/"
          exact-active-class="router-link-active"
          target="_blank"
          external
        >
          <AngularSvg class="size-[1.5vw]" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { NuxtLink } from "#components";
import { AlignCenter, FolderGit2, House } from "lucide-vue-next";
import ButtonBorder from "../components/button-border.vue";
import AngularSvg from "../icons/angular-svg.vue";
</script>

<style scoped>
.router-link-active {
  background-color: rgba(255, 255, 255, 0.205);
  backdrop-filter: blur(0.2rem);
  transform: scale(1.2);
}
</style>
