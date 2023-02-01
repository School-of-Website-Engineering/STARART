<template>
	<div>
		<van-row type="flex" >
			<van-col span="8" class="text">快捷栏</van-col>
			<van-col span="16" class="event">文字栏</van-col>
		</van-row>
	</div>
</template>

<script>
export default {name: "event"}
</script>

<style lang="scss" scoped>
.event{
	background: cadetblue;
	height: 250px;
	text-align: center;
	line-height: 250px;
}
.text{
	background: rgb(160, 95, 95);
	height: 250px;
	text-align: center;
	line-height: 250px;
}
</style>
