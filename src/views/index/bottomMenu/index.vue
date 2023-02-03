<template>
	<div>
		<van-row type="flex" justify="space-around" class="bottomMenu">
			<van-col span="12" class="textOutput">
				<div class="menu-head">文本输出</div>
			</van-col>
			<van-col span="12" class="more">
				<div class="menu-head">更多</div>
			</van-col>
		</van-row>
		<van-row type="flex" justify="space-around" class="bottomLine">
			<div class="time-list">
				11：45
			</div>
			<div class="pause">
				暂停游戏
			</div>
	</van-row>
	</div>

</template>

<script>
export default {name: "bottomMenu"}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_media.scss";
<<<<<<< Updated upstream
@import "@/assets/scss/_color.scss";

.bottomLine {
	border: $border solid $tip-color;
	border-radius: $border-radius;
	width: $body-width;
	height: 10vh;
	margin: 0 auto;
	top: 5px;
	display: flex;
	justify-content: space-around;
	margin-top: 1px;
	.time-list{
		width: 0.5rem;
		height: 5px;
		font-size: .1rem;
		margin: auto;
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
		border: $border solid $tip-color;
		border-radius: 5px;
		padding:0.1rem;
		background-color: #fff;
	}
	.pause{
		width: 0.5rem;
		height: 5px;
		font-size: .1rem;
		margin: auto;
		text-align: center;
		border: $border solid $tip-color;
		border-radius: 5px;
		padding:0.1rem;
		background-color: #fff;
	}
}

.bottomMenu {
	border: $border solid $tip-color;
	border-radius: $border-radius;
	width: $body-width;
	height: $bottomMenu-height;
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	margin-top: .125rem;
	.textOutput {
	    height: $Menu-height;
		border: $border solid $tip-color;
		border-radius: $border-radius;
		position: relative;
		width: 40%;
		margin-top: .15rem;
        }

    .more {
    	height: $Menu-height;
		border: $border solid $tip-color;
		border-radius: 5px;
		position: relative;
		width: 50%;
		margin-top: .15rem;
        }
		.menu-head{
			width: 1.5rem;
		    font-size: .1rem;
		    text-align: center;
		    border: $border solid $tip-color;
	        border-radius: 5px;
		    position: absolute;
		    top: -3px;
		    left: 6px;
			background-color: #fff;
		}
}
</style>
