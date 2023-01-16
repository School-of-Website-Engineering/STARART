import Vue from "vue";
import App from "./App.vue";
import element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

//全局样式表
import "./assets/scss/global.scss";

Vue.use(element);

Vue.config.productionTip = false;

new Vue({ render: (h) => h(App) }).$mount("#app");
