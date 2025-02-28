<template>
  <nav
    class="hidden md:flex flex-col items-center shadow-vue2 shadow-sm h-full w-full py-[2vw]"
  >
    <ButtonBorder @click="toggleModal">
      <Icon name="heroicons:bars-2-solid" class="size-icon-xs" />
    </ButtonBorder>

    <ul class="flex flex-col justify-center items-center grow gap-[1.5vw]">
      <li>
        <NuxtLink class="router-link" to="/" active-class="active-link">
          <span class="sr-only">Go to home</span>
          <Icon class="text-[1.5vw]" name="fluent-color:home-20" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="router-link" to="/projects" active-class="active-link">
          <span class="sr-only">Go to projects</span>

          <Icon class="text-[1.5vw]" name="vscode-icons:folder-type-github" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="router-link"
          to="https://entry-page-angular.vercel.app/"
          target="_blank"
          external
        >
          <span class="sr-only">Go to angular projects</span>
          <Icon class="text-[1.5vw]" name="devicon:angular" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="router-link"
          to="https://react-showcase-three.vercel.app/"
          target="_blank"
          aria-label="Go to React projects"
          external
        >
          <span class="sr-only">Go to React projects</span>
          <Icon class="text-[1.5vw]" name="devicon:react" />
        </NuxtLink>
      </li>
    </ul>

    <Teleport to="body">
      <Transition name="translate" mode="in-out">
        <UiModalNavbar v-if="showModal" @close="toggleModal(false)" />
      </Transition>
    </Teleport>
  </nav>
</template>

<script lang="ts" setup>
const showModal = ref(false);
const toggleModal = (value = true) => {
  showModal.value = value;
};
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

.translate-enter-active,
.translate-leave-active {
  transition: transform 0.35s;
}

.translate-enter-from,
.translate-leave-to {
  transform: translateX(100%);
}
</style>
