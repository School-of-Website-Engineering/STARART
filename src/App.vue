<template>
	<div class="root">
		<!-- 加载动画 -->
		<isLoading></isLoading>
		<Header v-show="this.$route.path==='/codeling'"></Header>
		<!-- 路由出口 -->
		<router-view></router-view>
		<Views></Views>
		<Footer v-show="this.$route.path==='/codeling'"></Footer>
	</div>
</template>

<script>
// 引入页面
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import isLoading from "@/components/isLoading/index.vue";
import Views from "@/views/index.vue"

export default {
	name      : "App",
	//注册组件
	components: {
		Header,
		Footer,
		isLoading,
		Views
	}
	
};
</script>

<style lang="scss" scoped>
.root {
}
</style>
