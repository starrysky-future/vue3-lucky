<template>
  <div class="login">
    <div class="loginBox">
      <a-form
        class="form"
        v-bind="layout"
        :model="formState"
        @finish="handleFinish"
        @finishFailed="handleFinishFailed"
      >
        <a-form-item label="用户名">
          <a-input
            v-model:value="formState.username"
            placeholder="请输入用户名"
          >
            <template #prefix>
              <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="密码">
          <a-input
            v-model:value="formState.password"
            type="password"
            placeholder="请输入密码"
          >
            <template #prefix>
              <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item class="loginBtn">
          <a-button
            type="primary"
            html-type="submit"
            :disabled="formState.username === '' || formState.password === ''"
          >
            登录
          </a-button>
          <a-button
            type="primary"
            html-type="submit"
            :disabled="formState.username === '' || formState.password === ''"
          >
            注册
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";
import { defineComponent, ref, reactive, toRefs } from "vue";
import { getLogin } from "@/apis/loginApi";
import { setTokenAUTH } from "@/utils/auth";
import { useUserStore } from "@/store/user";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "login",
  components: { UserOutlined, LockOutlined },
  setup() {
    // 获取状态
    const userStore = useUserStore();
    // 获取路由实例
    const router = useRouter();
    const formState = reactive({
      username: "",
      password: "",
    });
    const layout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 13 },
    };
    const handleFinish = async () => {
      const res = await getLogin(formState);
      setTokenAUTH(res.result.token);
      if (userStore.lastVisitRoute) {
        router.push({ path: userStore.lastVisitRoute }).then(() => {
          userStore.lastVisitRoute = "";
        });
      } else {
        router.push({ path: "/" });
      }
    };
    const handleFinishFailed = (errors) => {
      console.log(errors);
    };

    return {
      layout,
      formState,
      handleFinish,
      handleFinishFailed,
    };
  },
});
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: black;
  .loginBox {
    width: 400px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 10px;
    .form {
      padding: 20px;
      .loginBtn {
        margin-bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        /deep/.ant-form-item-control-input-content {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>
