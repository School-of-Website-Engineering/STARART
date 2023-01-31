import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/scss/global.scss";
import "amfe-flexible"
import { Button, Loading } from "vant";

//引入BootstrapVue
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

//引入全局样式
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Button);
Vue.use(Loading);

new Vue({
	store,
	router,
	render: (h) => h(App)
}).$mount("#app");
