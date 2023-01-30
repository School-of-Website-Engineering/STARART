import Vue from "vue";
import Vuex from "vuex";
import isShowLoading from "@/store/isShowLoading";

Vue.use(Vuex);

export default new Vuex.Store({modules: {isShowLoading}});
