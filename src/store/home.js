import { defineStore } from "pinia";

export const useHomeStore = defineStore({
  id: "home",
  state: () => ({
    num: 0,
    name: "anna",
    age: 20,
  }),
  // 派生值
  getters: {
    doubleNum: (state) => state.num * 2,
  },
  // 改变state
  actions: {
    increment() {
      this.num++;
    },
  },
});
