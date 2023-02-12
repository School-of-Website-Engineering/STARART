<template>
	<!--div class="loading" v-show="Loading"-->
	<div class="maingame">
		<div class="isloding">
			<div class="newgame">
				<font class="maintext">星之往昔</font>
				<van-button class="newgames mainbutton">新的冒险</van-button>
				<van-button class="loadinggames mainbutton"
					>载入存档</van-button
				>
				<van-button class="gamenews mainbutton">游戏新闻</van-button>
				<van-button class="onlinesaves mainbutton">云上存档</van-button>
				<van-button class="regsiterlogins mainbutton"
					>登录注册</van-button
				>
				<!-- TODO 尝试接入GA -->
				<font size="4px" class="maintext">{{ Version }}</font>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { getItem } from "@/utils/sessionStorage";

export default {
	//处理初始化问题
	name: "Loading",
	data() {
		return {
			first: getItem("isShowLoading"),
			Version: "v0.0.1.243",
		};
	},
	mounted() {
		this.isLoading();
	},
	methods: {
		...mapMutations({ showLoading: "isShowLoading/setIsShowLoading" }),
		isLoading() {
			//第一次进入页面，显示加载动画
			if (this.first === null) {
				this.showLoading(true);
				setTimeout(() => {
					this.showLoading(false);
				}, 6500);
			}
		},
	},
	computed: {
		...mapState({ Loading: (state) => state.isShowLoading.isShowLoading }),
	},
};
</script>

<style lang="scss" scoped>
//遮罩，覆盖整个页面
.maingame {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #807f7f;
	z-index: 999;
}

.newgame {
	display: flex;
	margin-top: calc(50% - 75px);
	left: calc(50% - 75px);
	top: calc(50% - 65px);
	transform: scale(1.4);
	flex-direction: column;

	.maintext {
		width: auto;
		@media only screen and (min-width: 500px) {
			height: 10px;
			margin: 2% auto;
			bottom: 360px;
			font-size: 24px;
		}
		height: 100px;
		margin: 1% auto;
		color: white;
		position: relative;
	}

	.mainbutton {
		background-color: #858b91;
		border-radius: 5px;
		width: 200px;
		@media only screen and (min-width: 500px) {
			height: 40px;
			margin: 1% auto;
			bottom: 320px;
		}
		height: 100px;
		margin: 1% auto;
		color: white;
	}

	.hex {
		width: 160px;
		height: 140px;
		background: #1e90ff;
		clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		text-align: center;
	}

	.hex:nth-child(2n + 1) {
		transform: translateY(-70px);
	}

	.hex::before {
		content: "";
		width: 145px;
		height: 130px;
		position: absolute;
		background: white;
		clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
	}

	.hex span {
		z-index: 1;
		font-size: 60px;
		width: 160px;
		text-align: center;
		line-height: 100%;
		color: white;
	}

	.hex span::before {
		content: "";
		width: 100%;
		height: 100%;
		background: #1e90ff;
		position: absolute;
		right: 0;
		top: 0;
		z-index: -1;
		animation: resize 0.7s linear infinite calc(var(--d) * 0.75s);
	}

	@keyframes resize {
		14.28%,
		50% {
			width: 0;
			right: 0;
		}
		64.28%,
		100% {
			left: 0;
			width: 100%;
		}
	}
}
</style>
