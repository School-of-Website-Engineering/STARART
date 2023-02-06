<template>
	<div class="shortccutBarBox">
		<van-row type="flex" justify="space-around">
			<van-col span="24" class="quick">
				<van-tag color="#7232dd" class="quick_goods">
					快捷栏
				</van-tag>
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

.shortccutBarBox{

}
.quick{
	height: $shortcutBar-height;
	border: $border solid #7232dd;
	border-radius: $border-radius;
	width: $body-width;
	position: relative;
	.quick_goods{
		width: 89px;
		height: 40px;
		font-size: 12px;
		text-align: center;
		border: $border solid #7232dd;
	    border-radius: $border-radius;
		position: absolute;
		top: -3px;
		left: 6px;
	}
}
</style>
