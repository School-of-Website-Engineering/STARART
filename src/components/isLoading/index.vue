<template>
	<div class="loading" v-show="Loading">
		<div class="isloding">
			<div class="hex" style="--d:0;">
				<span>L</span>
			</div>
			<div class="hex" style="--d:1;">
				<span>O</span>
			</div>
			<div class="hex" style="--d:2;">
				<span>A</span>
			</div>
			<div class="hex" style="--d:3;">
				<span>D</span>
			</div>
			<div class="hex" style="--d:4;">
				<span>I</span>
			</div>
			<div class="hex" style="--d:5;">
				<span>N</span>
			</div>
			<div class="hex" style="--d:6;">
				<span>G</span>
			</div>
		</div>
	</div>
</template>

<script>
import {mapMutations, mapState} from "vuex";
import {getItem} from "@/utils/sessionStorage";

export default {
	name: "Loading",
	data() {
		return {first: getItem("isShowLoading")};
	},
	mounted() {
		this.isLoading();
	},
	methods: {
		...mapMutations({showLoading: "isShowLoading/setIsShowLoading"}),
		isLoading() {
			//第一次进入页面，显示加载动画
			if (this.first === null) {
				this.showLoading(true);
				this.first = false;
				setTimeout(() => {
					this.showLoading(false);
				}, 6500);
			}
		}
	},
	computed: {...mapState({Loading: state => state.isShowLoading.isShowLoading})}
}
</script>

<style lang="scss" scoped>
//遮罩，覆盖整个页面
.loading {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #fff;
	z-index: 999;
}

.isloding {
	display: flex;
	position: absolute;
	left: -240px;
	top: calc(50% - 65px);
	transform: scale(0.3);
	
	.hex {
		width: 160px;
		height: 140px;
		background: #1e90ff;
		clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: -35px;
	}
	
	.hex:nth-child(2n+1) {
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
		font-size: 100px;
		width: 160px;
		height: 100%;
		text-align: center;
		line-height: 140px;
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
		animation: resize .7s linear infinite calc(var(--d) * 0.75s);
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
