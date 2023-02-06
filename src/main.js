import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/scss/global.scss";
import "amfe-flexible"
import { Button, Loading, Col, Row ,NoticeBar ,Icon } from "vant";

Vue.use(Button);
Vue.use(Loading);
Vue.use(Col);
Vue.use(Row);
Vue.use(NoticeBar);
Vue.use(Icon);

new Vue({
	store,
	router,
	render: (h) => h(App)
}).$mount("#app");
