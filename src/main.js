import Vue from "vue"
import App from "./App.vue"
import element from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import globalStyle from "./assets/scss/global.scss"

Vue.use(globalStyle)
Vue.use(element)

Vue.config.productionTip = false

new Vue({render: h => h(App)}).$mount("#app")
