import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/scss/global.scss";
import "amfe-flexible"
import { Button, Loading } from "vant";

Vue.use(Button);
Vue.use(Loading);

new Vue({
	store,
	router,
	render: (h) => h(App)
}).$mount("#app");
