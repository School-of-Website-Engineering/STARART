<template>
	<div>
		<van-row type="flex" justify="space-around">
			<van-col span="24" class="textOutput">
				<div class="textOut">
					文本输出
				</div>
				<div class="scrolltext">
					<div class="scroll-new"> <van-button plain hairline type="danger" size="mini">NEW</van-button>
					</div>
					<div id="scroll-text"> <van-notice-bar text="总有地上的生灵敢于直面雷霆的微光!666666666666666666666666" />
					</div>
				</div>
			</van-col>
		</van-row>
	</div>
</template>

<script>
export default { name: "textOutput" }
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_media.scss";
@import "@/assets/scss/_color.scss";

.textOutput {
	height: $textOutput-height;
	width: $body-width;
	border: $border solid $tip-color;
	border-radius: $border-radius;
	position: relative;
	margin-top: .125rem;

	.textOut {
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
	.scrolltext{
		width: 100%;
		display: flex;
		.scroll-new{
			width: 10%;
			font-size:0.1rem;
			margin: 15px;
		}
		#scroll-text{
			width: 90%;
			float: right;
			margin-top: 8px;
			.van-notice-bar{
				background-color: #fff;
				color: rgb(145, 145, 145);
			}
		}
	}
}
</style>
