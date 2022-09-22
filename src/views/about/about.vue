<template>
  <div>其他页面</div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs } from "vue";
export default defineComponent({
  name: "",
  setup() {
    const data = reactive({});
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style lang="scss" scoped></style>
