<template>
	<div>
		<van-row type="flex" class="eventMenu">
			<van-col span="8" class="text">快捷栏</van-col>
			<van-col span="16" class="event">文字栏</van-col>
		</van-row>
	</div>
</template>

<script>
export default {name: "event"}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_media.scss";
.event{
	background: cadetblue;
	height: $event-height;
	text-align: center;
}
.text{
	background: rgb(160, 95, 95);
	height: $event-height;
	text-align: center;
}
</style>
