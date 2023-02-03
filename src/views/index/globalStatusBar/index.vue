<template>
	<div>
		<van-row type="flex" justify="space-around">
			<van-col span="24" class="globalStatus">
				<div class="property">
					<div class="attribute-name">生命<span>666</span></div>
					<div class="attribute-name">生命<span>666</span></div>
					<div class="attribute-name">生命<span>666</span></div>
					<div class="attribute-name">生命<span>666</span></div>
					<div class="attribute-name">生命<span>666</span></div>
					<div class="attribute-name">辐射<span>666</span></div>
				</div>
			</van-col>
		</van-row>
	</div>
</template>

<script>
export default {name: "globalStatusBar"}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_media.scss";
@import "@/assets/scss/_color.scss";
.globalStatus {
	height: $globalStatusBar-height;
	width: $body-width;
	margin: 5px;
	border-bottom: $border solid $tip-color;
	.property{
		display: flex;
		justify-content: flex-start;
		.attribute-name{
		    border: $border solid $tip-color;
			border-radius: 2px;
			text-align: center;
			padding: 1px 0px;
			font-size: .1rem;
		}
	}
}
</style>
