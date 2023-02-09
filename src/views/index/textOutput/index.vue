<template>
	<div class="textOutputBox">
		<van-row type="flex" justify="space-around">
			<van-col span="24" class="textOutput">
				<van-tag color="#7232dd" class="textOut">
					消息
				</van-tag>
				<van-notice-bar
					background="#fff"
					left-icon="volume-o"
					:scrollable="true"
					text="侦测到暴风雨即将来临，请做好避难准备"
				/>
			</van-col>
		</van-row>
	</div>
</template>

<script>
export default { name: "textOutput" };
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_media.scss";
@import "@/assets/scss/_color.scss";
.textOutput {
	height: $textOutput-height;
	width: $body-width;
	border: $border solid #7232dd;
	position: relative;
	margin-top: 10px;
	.textOut {
		z-index: 1;
		width: 70px;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 98%;
		font-size: 14px;
		text-align: center;
		border: $border solid #7232dd;
		position: absolute;
		top: 0px;
		left: 0px;
		background-color: #fff;
	}
	.van-notice-bar {
		width: 585px;
		height: 100%;
		margin-left: 70px;
	}
}
</style>
