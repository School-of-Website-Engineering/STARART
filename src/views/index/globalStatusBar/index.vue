<template>
	<div>
		<van-row type="flex" justify="space-around">
			<van-col span="24" class="globalStatus">
				<div class="property">
					<!-- 动态定义这里的数据，而不是硬编码 -->
					<div class="attribute-name">
						天气：<span>{{ getWeatherStatus }}</span>
					</div>
					<div class="attribute-name">生命：<span>100</span></div>
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

.globalStatus {
	height: $globalStatusBar-height;
	width: $body-width;
	margin: 5px;
	border-bottom: $border solid $tip-color;

	.property {
		.attribute-name {
			border: $border solid $tip-color;
			border-radius: 2px;
			text-align: center;
			padding: 0.015rem 0;
			margin: 0 0.1rem;
			font-size: 0.1rem;
			float: left;

			&:nth-child(6) {
				float: right;
			}
		}
	}
}
</style>
