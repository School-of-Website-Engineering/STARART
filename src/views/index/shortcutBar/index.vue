<template>
	<div>
		<van-row type="flex" justify="space-around">
			<van-col span="24" class="quick">快捷栏</van-col>
		</van-row>
	</div>
</template>

<script>
export default {name: "shortcutBar"}
</script>

<style lang="scss" scoped>
.quick{
	background: rgb(15, 90, 91);
	height: 80px;
	line-height: 80px;
	text-align: center;
}
</style>
