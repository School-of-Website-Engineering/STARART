<template>
	<div>
		<van-row type="flex" justify="space-around">
			<van-col span="12" class="textOutput">文本输出</van-col>
			<van-col span="12" class="more">更多</van-col>
		</van-row>
	</div>

</template>

<script>
export default {name: "bottomMenu"}
</script>

<style lang="scss" scoped>
.textOutput {
	background: #2b579a;
	height: 177px;
	text-align: center;
	line-height: 177px;
}

.more {
	background: #05a6f0;
	height: 177px;
	text-align: center;
	line-height: 177px;
}
</style>
