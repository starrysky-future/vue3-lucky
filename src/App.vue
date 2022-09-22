<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs } from "vue";
export default defineComponent({
  setup() {
    const data = reactive({});
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
}
</style>
