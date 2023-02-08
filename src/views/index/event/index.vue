<template>
	<div class="eventMenuBox">
		<van-row type="flex" class="eventMenu">
			<van-col span="8" class="text">
				<van-tag class="events-head" color="#7232dd">地图</van-tag>
				<div class="mapShow">
					<open-map />
				</div>
			</van-col>
			<van-col span="16" class="event">
				<van-tag class="events-head" color="#7232dd">事件</van-tag>
				<div class="mainflex">
					<!-- TODO 事件区 -->
					<van-tag class="menu-list" type="primary" plain size="large"
						>制作
					</van-tag>
					<van-tag class="menu-list" plain type="primary" size="large"
						>天赋
					</van-tag>
					<van-tag plain class="menu-list" type="primary" size="large"
						>休息
					</van-tag>
				</div>
			</van-col>
		</van-row>
	</div>
</template>

<script>
import openMap from "@/views/openMap/index.vue";

export default {
	name      : "event",
	components: { openMap }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_media.scss";
@import "@/assets/scss/_color.scss";

.mainflex {
	position: relative;
	left: 390px;
	width: 40px;
	display: flex;
	flex-wrap: wrap;
	margin: 0;
}

.menu-list {
	width: 18px;
	height: 48px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: $border solid;
	border-radius: 5px;
	margin-top: 10px;
	padding: 8px;
}

.eventMenu {
	border: $border solid #7232dd;
	width: $body-width;
	height: $eventMenu-height;
	display: flex;
	justify-content: space-around;
	margin: 0 auto;

	.text {
		height: $event-height;
		border: $border solid #7232dd;
		border-radius: $border-radius;
		position: relative;
		width: 38%;
		margin-top: 12px;
	}

	.event {
		height: $event-height;
		border: $border solid #7232dd;
		border-radius: $border-radius;
		position: relative;
		width: 59%;
		margin-top: 12px;
	}

	.events-head {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 59px;
		height: 40px;
		text-align: center;
		border-radius: 5px;
		position: absolute;
		top: -3px;
		left: 6px;
		background-color: #fff;
	}
}
</style>
