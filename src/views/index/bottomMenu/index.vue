<template>
	<div>
		<van-row type="flex" justify="space-around" class="bottomMenu">
			<van-col span="12" class="textOutput">文本输出</van-col>
			<van-col span="12" class="more">更多</van-col>
		</van-row>
	</div>

</template>

<script>
export default {name: "bottomMenu"}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_media.scss";
.textOutput {
	background: #2b579a;
	height: $bottomMenu-height;
	text-align: center;
}

.more {
	background: #05a6f0;
	height: $bottomMenu-height;
	text-align: center;
}
.bottomMenu {
	position: relative;
	bottom: 0;
	width: 100%;
}
</style>
