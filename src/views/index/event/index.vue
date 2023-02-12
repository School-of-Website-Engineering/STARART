<template>
	<div class="eventMenuBox">
		<van-row type="flex" class="eventMenu">
			<van-col span="8" class="text">
				<van-tag class="events-head" color="#7232dd">地图</van-tag>
				<div class="mapShow">
					<open-map />
				</div>
				<div class="mapBoxContainer">
					<van-button
						v-for="(item, index) in mapEvent"
						:key="index"
						class="tag"
						plain
						type="danger"
						@click="getEventInfo(item)"
						>{{ item.name }}
					</van-button>
				</div>
			</van-col>
			<van-col span="16" class="event">
				<div class="mainflex">
					<!--  事件区 -->
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
				<div class="eventContainer">
					<exploreNotes />
				</div>
			</van-col>
		</van-row>
	</div>
</template>

<script>
import openMap from "@/views/openMap/index.vue";
import exploreNotes from "@/views/index/components/exploreNotes.vue";
import { mapMutations, mapState } from "vuex";

export default {
	name: "event",
	data: function() {
		return { isRender: true };
	},
	components: { openMap, exploreNotes },
	//获取mapEvent模块的mapEvent、mapEventInfo
	computed  : {
		...mapState({
			mapEvent    : (state) => state.mapEvent.mapEvent,
			mapEventInfo: (state) => state.mapEvent.mapEventInfo
		})
	},
	methods: {
		// 点击后使用commit方法提交一个mutation(setEventInfo)
		...mapMutations({ setEventInfo: "mapEvent/setEventInfo" }),
		getEventInfo(item) {
			this.setEventInfo(item);
		}
	}
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
	z-index: 2;
}

.menu-list {
	width: 18px;
	height: 54px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1mm ridge rgba(0, 0, 0, 0.6);
	margin-top: 8px;
	padding: 8px;

	&:active {
		background-color: #7232dd;
		color: #fff;
	}
	//PE媒体查询
	@media only screen and (max-width: 500px) {
		width: 24px;
		height: 24px;
	}
	@media only screen and (min-width: 500px) {
		width: 40px;
		height: 24px;
		top: -8px;
		font-weight: bold;
		border-radius: 14px;
	}
}

.eventMenu {
	border: $border solid #7232dd;
	width: $body-width;
	height: $eventMenu-height;
	display: flex;
	justify-content: space-around;
	margin: 0 auto;
	margin-top: 5px;

	.text {
		height: $event-height;
		border: $border solid #7232dd;
		border-radius: $border-radius;
		position: relative;
		margin-top: 12px;

		@media only screen and (min-width: 500px) {
			width: 38%;
			margin-top: 12px;

			.mapBoxContainer {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				overflow: hidden;

				.tag {
					width: 110px;
					height: 80px;
					margin: 12px 18px 12px 8px;
					font-size: 9px;
					text-align: center;
					padding: 0;

					&:nth-child(1) {
						margin-left: 120px;
					}
				}
			}
		}
	}

	.event {
		height: $event-height;
		border: $border solid #7232dd;
		border-radius: $border-radius;
		position: relative;
		margin-top: 12px;

		@media only screen and (min-width: 500px) {
			width: 59%;
			margin-top: 12px;
		}
	}

	.events-head {
		border-radius: 5px;

		@media only screen and (min-width: 500px) {
			width: 59px;
			height: 40px;
			display: flex;
			justify-content: center;
			line-height: 40px;
			position: absolute;
			top: -10px;
			left: 6px;
		}
	}
}
</style>
