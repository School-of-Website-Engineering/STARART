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
	</div>

</template>

<script>
export default {name: "bottomMenu"}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_media.scss";
@import "@/assets/scss/_color.scss";
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
