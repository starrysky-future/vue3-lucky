import "./style";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App";
import router from "./router/index";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.min.css";

const pinia = createPinia();
const app = createApp(App);

// app.config.productionTip = false;

app.use(router).use(pinia).use(Antd).mount("#root");
