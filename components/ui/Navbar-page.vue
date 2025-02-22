<template>
  <nav
    class="flex flex-col items-center border-l-2 border-l-purple-200 h-full w-full py-[2vw]"
  >
    <ButtonBorder>
      <AlignCenter class="size-[1.5vw]" />
    </ButtonBorder>

    <ul class="flex flex-col justify-center items-center grow gap-[1.5vw]">
      <li>
        <NuxtLink class="router-link" to="/" active-class="active-link">
          <House class="size-[1.5vw]" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="router-link" to="/projects" active-class="active-link">
          <FolderGit2 class="size-[1.5vw]" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="router-link"
          to="https://entry-page-angular.vercel.app/"
          active-class="active-link"
          target="_blank"
          external
        >
          <IconAngular class="size-[1.5vw]" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { AlignCenter, FolderGit2, House } from "lucide-vue-next";
</script>

<style scoped>
.router-link {
  border-radius: 50%;
  width: 2.5vw;
  height: 2.5vw;
  display: grid;
  place-content: center;
  transition: all 0.3s linear;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(0.5rem);
    transform: scale(1.3);
  }
}

.active-link {
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(0.5rem);
  transform: scale(1.3);
}
</style>
