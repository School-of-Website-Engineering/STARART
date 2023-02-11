<template>
	<div class="exploreNotes">
		<van-row>
			<van-tag class="events-head" color="#7232dd">{{ mapEventInfo.name || tips[0] }}
			</van-tag>
			<van-col span="24" class="eventsBox">
				<van-button v-for="(item, index) in mapEventInfo.things" :key="index"
					:class="'tag' + ' eventBtnObj' + index" plain type="default">{{ item }}
				</van-button>
			</van-col>
		</van-row>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	name: "exploreNotes",
	data() {
		return { tips: ["请选择事件"] };
	},
	//获取mapEvent模块的mapEvent、mapEventInfo
	computed: { ...mapState({ mapEventInfo: (state) => state.mapEvent.mapEventInfo }) }
};
</script>

<style lang="scss" scoped>
.eventsBox {
	position: relative;
	top: -170px;
	width: 380px;
}

.events-head {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 124px;
	height: 40px;
	text-align: center;
	border-radius: 5px;
	position: absolute;
	top: -3px;
	left: 6px;

	@media only screen and (min-width: 500px) {
		width: 124px;
		height: 40px;
		top: -10px;
		left: 6px;
	}
}

.tag {
	margin: 10px;
	padding: 0 15px;

	&:first-child {
		display: none;
	}
}

.eventBtnObj0 {
	border-color: #ff976a;
	color: #ff976a;
}

.eventBtnObj1 {
	color: #1989fa;
	border-color: #1989fa;
}

.eventBtnObj2 {
	color: #07bc5d;
	border-color: #07bc5d;
}

.eventBtnObj3 {
	color: #7e3afb;
	border-color: #7e3afb;
}

.eventBtnObj4 {
	color: #ee0a24;
	border-color: #ee0a24;
}

.eventBtnObj5 {
	color: #88c1fa;
	border-color: #88c1fa;
}
</style>
