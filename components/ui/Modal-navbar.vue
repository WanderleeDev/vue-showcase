<template>
  <BaseModal
    @click="closeModal"
    class="cursor-pointer"
    role="dialog"
    aria-labelledby="navbar-modal"
  >
    <div
      class="w-full h-full p-[5vw] md:w-8/12 md:h-10/12 flex flex-col justify-between items-center md:p-[2vw] bg-white/15 backdrop-blur-md rounded-md cursor-auto"
      @click="(e) => e.stopPropagation()"
    >
      <ButtonBorder
        class="self-end"
        @click="closeModal"
        aria-label="close navbar"
      >
        <X class="size-icon-xs" />
      </ButtonBorder>

      <ul
        class="flex flex-col justify-center items-start grow gap-[2.5vw] font-nav"
      >
        <li>
          <NuxtLink
            class="router-link"
            @click="closeModal"
            to="/"
            active-class="active-link"
          >
            <House class="size-icon" />
            <span class="uppercase block">home</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="router-link"
            @click="closeModal"
            to="/projects"
            active-class="active-link"
          >
            <FolderGit2 class="size-icon" />
            <span class="uppercase block">projects</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="router-link"
            @click="closeModal"
            to="https://entry-page-angular.vercel.app/"
            active-class="active-link"
            target="_blank"
            external
          >
            <IconAngular class="size-icon" />
            <span class="uppercase block">Angular projects</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </BaseModal>
</template>

<script lang="ts" setup>
import { X, FolderGit2, House } from "lucide-vue-next";

const emit = defineEmits(["close"]);
const closeModal = () => emit("close", false);

onBeforeMount(() => {
  document.body.style.overflow = "hidden";
});

onUnmounted(() => {
  document.body.style.overflow = "auto";
});
</script>

<style scoped>
.router-link {
  display: flex;
  gap: 1vw;
  align-items: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.5vw;
    left: 0;
    width: 100%;
    height: 0.2vw;
    background-color: currentColor;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
}

.active-link {
  &::after {
    bottom: -0.5vw;
    height: 0.2vw;
    transform: scaleX(1);
    background-color: currentColor;
  }
}
</style>
