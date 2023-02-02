<template>
	<div>
		<van-row type="flex" justify="space-around">
			<van-col span="24" class="globalStatus">全局状态栏</van-col>
		</van-row>
	</div>
</template>

<script>
export default {name: "globalStatusBar"}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_media.scss";
.globalStatus {
	background: cadetblue;
	height: $globalStatusBar-height;
	text-align: center;
}
</style>
