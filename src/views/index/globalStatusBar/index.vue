<template>
	<div class="globalStatusBox">
		<van-row type="flex" justify="space-around">
			<van-col span="24" class="globalStatus">
				<div class="property">
					<!-- 动态定义这里的数据，而不是硬编码 -->
					<van-cell class="attribute-name">
						<van-tag color="#7232dd" plain>天气:{{ getWeatherStatus }}</van-tag>
						<van-tag color="#2da44e" plain>生命:100</van-tag>
						<van-tag  type="warning " plain>防御力：100</van-tag>
						<van-tag type="danger " plain>口渴：0</van-tag>
						<van-tag type="success " plain>魅力：100</van-tag>
						<van-tag type="primary" plain>灵巧值：100</van-tag>
						<van-tag type="primary" plain>背包格子：20</van-tag>
					</van-cell>
					
				</div>
			</van-col>
		</van-row>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name    : "globalStatusBar",
	//获取天气状态(getWeatherStatus)
	computed: { ...mapGetters("weatherSys", ["getWeatherStatus"]) }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_media.scss";
@import "@/assets/scss/_color.scss";

.globalStatusBox{
}
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
				margin-right: 8px;
				margin-top: 4px;
				height: 42px;
			}
		}
	}
}
</style>
