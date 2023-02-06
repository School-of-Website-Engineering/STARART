<template>
	<div>
		<van-row type="flex" justify="space-around">
			<van-col span="24" class="quick">
				<div class="quick_goods">
					快捷栏
				</div>
			</van-col>
		</van-row>
	</div>
</template>

<script>
export default {name: "shortcutBar"}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_media.scss";
@import "@/assets/scss/_color.scss";
.quick{
	height: $shortcutBar-height;
	border: $border solid $tip-color;
	border-radius: $border-radius;
	width: $body-width;
	position: relative;
	.quick_goods{
		width: 1.5rem;
		font-size: .1rem;
		text-align: center;
		border: $border solid $tip-color;
	    border-radius: $border-radius;
		position: absolute;
		top: -3px;
		left: 6px;
		background-color: #fff;
	}
}
</style>
