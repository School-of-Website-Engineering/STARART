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
@import "@/assets/scss/_media.scss";
.quick{
	background: rgb(15, 90, 91);
	height: $shortcutBar-height;
	text-align: center;
}
</style>
