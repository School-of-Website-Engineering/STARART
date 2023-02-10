<template>
	<div class="globalStatusBox">
		<van-row type="flex" justify="space-around">
			<van-col span="24" class="globalStatus">
				<div class="property">
					<!-- 动态定义这里的数据，而不是硬编码 -->
					<div class="attribute-name">
						<van-tag color="#7232dd" class="weather" plain
							>天气:{{ getWeatherStatus }}
						</van-tag>
						<van-tag color="#2da44e" plain
							>生命:{{ Health }}</van-tag
						>
						<van-tag type="warning " plain
							>防御力：{{ Defens }}</van-tag
						>
						<van-tag v-show="this.Hungry > 60" type="warning " plain
							>饥饿值：{{ Hungry }}</van-tag
						>
						<van-tag type="danger " plain
							>口渴：{{ Water }}</van-tag
						>
						<van-tag type="success " plain
							>魅力：{{ Chars }}</van-tag
						>
						<van-tag type="primary" plain
							>灵巧值：{{ Dex }}</van-tag
						>
						<van-tag type="primary" plain
							>背包格子：{{ Backpack }}</van-tag
						>
					</div>
				</div>
			</van-col>
		</van-row>
	</div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
	created() {
		console.log(this.getWeatherStatus);
	},
	name    : "globalStatusBar",
	//获取天气状态(getWeatherStatus)
	computed: {
		...mapGetters("weatherSys", ["getWeatherStatus"]),
		...mapState("player", [
			"Health",
			"Hungry",
			"Defens",
			"Backpack",
			"Water",
			"Hungry",
			"Dex",
			"Chars"
		]),
		//获取weatherSys天气状态weatherStatus
		...mapState("weatherSys", ["weatherStatus"]),
		...mapActions("player", ["HealthUp"])
		//如果为晴天情况下玩家的生命恢复速度上升5%
	}
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_media.scss";
@import "@/assets/scss/_color.scss";

.globalStatus {
	height: $globalStatusBar-height;
	width: $body-width;
	margin: 5px;

	.property {
		height: 100%;

		.attribute-name {
			display: flex;
			justify-content: start;
			flex-wrap: wrap;
			text-align: center;
			float: left;

			.van-tag {
				margin-right: 18px;
				margin-top: 4px;
				height: 42px;
			}
		}
	}
}
</style>
