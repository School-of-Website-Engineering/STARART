<template>
	<div>
		<van-row type="flex" justify="space-around">
			<van-col span="24" class="textOutput">文本输出</van-col>
		</van-row>
	</div>
</template>

<script>
export default {name: "textOutput"}
</script>

<style lang="scss" scoped>
.textOutput{
	background: rgb(82, 125, 126);
	height: 80px;
	line-height: 80px;
	text-align: center;
}
</style>
