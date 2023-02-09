<template>
	<div class="exploreNotes">
		<van-row>
			<van-tag class="events-head" color="#7232dd"
				>{{ event[0] || tips[0] }}
			</van-tag>
			<van-col span="24" class="eventsBox">
				<van-button
					ref="eventBtnObjItem"
					v-for="(item, index) in event"
					:key="index"
					:class="'tag' + ' eventBtnObj' + index"
					plain
					type="default"
					>{{ item }}
				</van-button>
			</van-col>
		</van-row>
	</div>
</template>

<script>
export default {
	name: "exploreNotes",
	data() {
		return { tips: ["请选择事件"] };
	},
	props: {
		event: {
			type   : Array,
			default: () => []
		}
	}
};
</script>

<style lang="scss" scoped>
.eventsBox {
	position: relative;
	top: -170px;
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
	background-color: #fff;
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
