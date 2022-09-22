<template>
  <div class="home">
    <div>首页的页面</div>
    <div>初始值:{{ homeStore.num }}</div>
    <div>姓名:{{ homeStore.name }}</div>
    <div>年龄:{{ homeStore.age }}</div>
    <div>getter值:{{ homeStore.doubleNum }}</div>
    <a-button type="primary" @click="add">添加</a-button>
    <a-button type="primary" @click="reset">重置</a-button>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs } from "vue";
import { useHomeStore } from "@/store/home";

export default defineComponent({
  name: "home",
  setup() {
    const homeStore = useHomeStore();
    const data = reactive({});

    homeStore.$subscribe((mutation, state) => {
      console.log(mutation);
      console.log(state);
    });

    return {
      ...toRefs(data),
      homeStore,
    };
  },
  methods: {
    add() {
      this.homeStore.num++;
    },
    reset() {
      this.homeStore.$reset();
    },
  },
});
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("@/images/home.webp") no-repeat;
  background-size: 100% 100%;
}
</style>
