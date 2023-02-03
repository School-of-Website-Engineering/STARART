<template>
	<div>
		<van-row type="flex" justify="space-around" class="bottomMenu">
			<van-col span="12" class="textOutput">文本输出</van-col>
			<van-col span="12" class="more">更多</van-col>
		</van-row>
	</div>

</template>

<script>
export default {name: "bottomMenu"}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_media.scss";
<<<<<<< Updated upstream
.textOutput {
	background: #2b579a;
	height: $bottomMenu-height;
	text-align: center;
=======
@import "@/assets/scss/_color.scss";

.bottomLine {
	border: $border solid $tip-color;
	border-radius: $border-radius;
	width: $body-width;
	height: 6vh;
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	margin-top: 1px;
	.time-list{
		width: 1.5rem;
		font-size: .1rem;
		margin: auto;
		text-align: center;
		border: $border solid $tip-color;
		border-radius: 5px;
		padding:0.1rem;
	}
	.pause{
		width: 2rem;
		font-size: .1rem;
		margin: auto;
		text-align: center;
		border: $border solid $tip-color;
		border-radius: 5px;
		padding:0.1rem;
	}
>>>>>>> Stashed changes
}

.more {
	background: #05a6f0;
	height: $bottomMenu-height;
	text-align: center;
}
.bottomMenu {
	position: relative;
	bottom: 0;
	width: 100%;
}
</style>
