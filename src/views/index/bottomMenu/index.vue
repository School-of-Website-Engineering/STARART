<template>
	<div class="bottomMenuBox">
		<van-row type="flex" justify="space-around" class="bottomMenu">
			<van-col span="12" class="textOutput">
				<van-tag color="#7232dd" class="menu-head bubbleDialogue">文本输出</van-tag>
			</van-col>
			<van-col span="12" class="more">
				<van-tag color="#7232dd" class="menu-head">更多</van-tag>
			</van-col>
		</van-row>
		<van-row type="flex" justify="space-around" class="bottomLine">
			<van-tag class="time-list" plain type="primary">
				<span>第1天</span>
				<span>{{ this.worldTime }}</span>
			</van-tag>
			<van-button class="pause" type="danger">暂停游戏</van-button>
		</van-row>
	</div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
	name: "bottomMenu",
	created() {
		// 获取timer的游戏世界时间(changeTime)
		this.changeTime();
	},
	computed: {...mapGetters("timer", ["worldTime"])},
	methods : {...mapActions("timer", ["changeTime"])}
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_media.scss";
@import "@/assets/scss/_color.scss";

.bottomLine {
	width: $body-width;
	height: 6vh;
	margin: 0 auto 0;
	border: $border solid rgb(114, 50, 221);
	
	.time-list {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 128px;
		height: 45px;
		margin: auto;
		text-align: center;
		border-radius: 5px;
	}
	
	.pause {
		width: 180px;
		height: 40px;
		margin: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 5px;
	}
}

.bottomMenu {
	border: $border solid #7232dd;
	width: $body-width;
	height: $bottomMenu-height;
	border-bottom: none;
	display: flex;
	justify-content: space-around;
	margin: 6px auto 0;
	
	.textOutput {
		height: $Menu-height;
		border: $border solid #7232dd;
		border-radius: $border-radius;
		position: relative;
		width: 43%;
		margin-top: 15px;
	}
	
	.more {
		height: $Menu-height;
		border: $border solid #7232dd;
		border-radius: 5px;
		position: relative;
		width: 54%;
		margin-top: 15px;
	}
	
	.menu-head {
		width: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		border: $border solid #7232dd;
		border-radius: 5px;
		position: absolute;
		top: -3px;
		left: 6px;
	}
	
	.bubbleDialogue {
		width: 100px;
	}
}
</style>
