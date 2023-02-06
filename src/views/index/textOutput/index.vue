<template>
	<div class="textOutputBox">
		<van-row type="flex" justify="space-around">
			<van-col span="24" class="textOutput">
				<van-tag color="#7232dd" class="textOut">
					文本输出
				</van-tag>
				<van-notice-bar
					background="#fff"
					left-icon="volume-o"
					text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
				/>
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
	border: $border solid #7232dd;
	border-radius: $border-radius;
	position: relative;
	margin-top: 10px;
	.textOut{
		z-index: 1;
		width: 80px;
		height: 98%;
		font-size: 14px;
		text-align: center;
		border: $border solid #7232dd;
	    border-radius: $border-radius;
		position: absolute;
		top: 0px;
		left: 0px;
		background-color: #fff;
	}
	.van-notice-bar{
		width: 585px;
		height: 100%;
		margin-left: 80px;
	}
}
</style>
