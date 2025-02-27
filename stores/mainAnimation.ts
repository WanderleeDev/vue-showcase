import { defineStore } from "pinia";

export const useMainAnimation = defineStore("mainAnimation", {
  state: () => ({ initAnimation: false }),
  actions: {
    triggerAnimation() {
      this.initAnimation = true;
    },
  },
});
