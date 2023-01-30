<template>
	<div class="isloding">
		<van-loading type="spinner" color="#1989fa" vertical v-if="this.Loading">加载中...</van-loading>
	</div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
	name: "Loading",
	mounted() {
		this.isLoading();
	},
	//动画加载完后销毁组件
	beforeDestroy() {
		this.$destroy();
	},
	methods: {
		...mapMutations({showLoading: "isShowLoading/setIsShowLoading"}),
		isLoading() {
			setTimeout(() => {
				this.showLoading(false);
			}, 2500);
		}
	},
	computed: {...mapState({Loading: state => state.isShowLoading.isShowLoading})}
}
</script>

<style lang="scss" scoped>
.isloding {
	
	.van-loading {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		
		span {
			width: 130px;
			height: 130px;
			text-align: center;
			font-size: 16px;
		}
	}
}
</style>
