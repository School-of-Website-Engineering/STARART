<template>
	<div class="root">
		<!-- 加载动画 -->
		<isLoading></isLoading>
		<Header v-show="this.$route.path==='/codeling'"></Header>
		<!-- 路由出口 -->
		<router-view></router-view>
		<Footer v-show="this.$route.path==='/codeling'"></Footer>
	</div>
</template>

<script>
// 引入页面
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import isLoading from "@/components/isLoading/index.vue";
import {food} from "@/utils/foodSys";

export default {
	name      : "App",
	//注册组件
	components: {
		Header,
		Footer,
		isLoading
	},
	mounted() {
		console.log(food.beer)
	}
	
};
</script>

<style lang="scss" scoped>
.root {
}
</style>
