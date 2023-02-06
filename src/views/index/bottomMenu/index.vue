<template>
	<div>
		<van-row type="flex" justify="space-around" class="bottomMenu">
			<van-col span="12" class="textOutput">
				<div class="menu-head">文本输出</div>
				<div class="menu-main">
					<h3>你失去了两份水</h3>
				</div>
			</van-col>
			<van-col span="12" class="more">
				<div class="menu-head">更多</div>
				<div class="menu-content">
					<div class="content-btn">
						<van-button plain hairline type="danger" size="mini">读取存档</van-button>
						<van-button plain hairline type="danger" size="mini">世界图鉴</van-button>
					</div>
					<div class="content-etn">
						<van-button plain hairline type="danger" size="mini">包</van-button>
					</div>
					<div class="content-btn">
						<van-button plain hairline type="danger" size="mini">探索笔记</van-button>
						<van-button plain hairline type="danger" size="mini">关于我们</van-button>
					</div>
				</div>
			</van-col>
		</van-row>
		<van-row type="flex" justify="space-around" class="bottomLine">
			<div class="time-list">
				{{ worldTime }}
			</div>
			<div class="pause">
				暂停游戏
			</div>
		</van-row>
	</div>

</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
	name: "bottomMenu",
	created() {
		// 获取timer的游戏世界时间(changeTime)
		this.changeTime();
	},
	computed: { ...mapGetters("timer", ["worldTime"]) },
	methods: { ...mapActions("timer", ["changeTime"]) }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_media.scss";
@import "@/assets/scss/_color.scss";

.bottomLine {
	width: $body-width;
	height: 6vh;
	margin: 0 auto;
	margin-top: 1px;
	border: $border solid $tip-color;
	border-radius: 5px;

	.time-list {
		width: 1.5rem;
		font-size: .1rem;
		margin: auto;
		text-align: center;
		border: $border solid $tip-color;
		border-radius: 5px;
	}

	.pause {
		width: 2rem;
		font-size: .1rem;
		margin: auto;
		text-align: center;
		border: $border solid $tip-color;
		border-radius: 5px;
	}
}

.bottomMenu {
	border: $border solid $tip-color;
	border-radius: $border-radius;
	width: $body-width;
	height: $bottomMenu-height;
	display: flex;
	justify-content: space-around;
	margin: .125rem auto 0;

	.textOutput {
		height: $Menu-height;
		border: $border solid $tip-color;
		border-radius: $border-radius;
		position: relative;
		width: 40%;
		margin-top: .15rem;
	}

	.more {
		height: $Menu-height;
		border: $border solid $tip-color;
		border-radius: 5px;
		position: relative;
		width: 50%;
		margin-top: .15rem;
	}

	.menu-head {
		width: 1.5rem;
		font-size: .1rem;
		text-align: center;
		border: $border solid $tip-color;
		border-radius: 5px;
		position: absolute;
		top: -3px;
		left: 6px;
		background-color: #fff;
	}

	.menu-main {
		font-size: .1rem;
		margin: 15px;
	}

	.menu-content {
		width: 90%;
		margin: 0 auto;
		margin-top: 25px;

		.content-btn {
			margin: 5px;
			display: flex;
			justify-content: space-between;
		}

		.content-etn {
			position: absolute;
			left: 72px;
			top: 26px;
		}
	}
}
</style>
