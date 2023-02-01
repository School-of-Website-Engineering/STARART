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
.globalStatus {
	background: cadetblue;
	height: 80px;
	line-height: 80px;
	text-align: center;
}
</style>
