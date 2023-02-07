import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/scss/global.scss";
import "amfe-flexible"
import {Button, Col, Loading, NoticeBar, Row, Tag, Badge, icon, cell} from "vant";

Vue.use(cell);
Vue.use(icon);
Vue.use(NoticeBar);
Vue.use(Tag);
Vue.use(Button);
Vue.use(Loading);
Vue.use(Col);
Vue.use(Row);
Vue.use(Badge);

new Vue({
	store,
	router,
	render: (h) => h(App)
}).$mount("#app");
