<template>
	<div>
		<van-row type="flex" justify="space-around">
			<van-col span="24" class="textOutput">
				<div class="textOut">
					文本输出
				</div>
			</van-col>
		</van-row>
	</div>
</template>

<script>
export default {name: "textOutput"}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_media.scss";
@import "@/assets/scss/_color.scss";
.textOutput{
	height: $textOutput-height;
	width: $body-width;
	border: $border solid $tip-color;
	border-radius: $border-radius;
	position: relative;
	margin-top: .125rem;
	.textOut{
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
