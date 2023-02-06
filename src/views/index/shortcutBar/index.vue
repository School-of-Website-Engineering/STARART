<template>
	<div class="shortccutBarBox">
		<van-row type="flex" justify="space-around">
			<van-col span="24" class="quick">
				<van-tag color="#7232dd" class="quick_goods">
					快捷栏
				</van-tag>
				<div class="shortccutBarBody">
					<van-badge :content="5">
						<div class="child"/>
					</van-badge>
					<van-badge :content="5">
						<div class="child"/>
					</van-badge>
					<van-badge :content="5">
						<div class="child"/>
					</van-badge>
					<van-badge :content="5">
						<div class="child"/>
					</van-badge>
					<van-badge :content="5">
						<div class="child"/>
					</van-badge>
					<van-badge :content="5">
						<div class="child"/>
					</van-badge>
					<van-badge :content="5">
						<div class="child"/>
					</van-badge>
					<van-badge :content="5">
						<div class="child"/>
					</van-badge>
					<van-badge :content="5">
						<div class="child"/>
					</van-badge>
					<van-badge :content="5">
						<div class="child"/>
					</van-badge>
					<van-badge :content="5">
						<div class="child"/>
					</van-badge>
					<van-badge :content="5">
						<div class="child"/>
					</van-badge>
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

.shortccutBarBody {
	height: 170px;
	display: flex;
	justify-content: start;
	align-items: start;
	flex-wrap: wrap;
	margin-left: 35px;
	margin-right: 10px;
	margin-top: 12px;
	
	.child {
		width: 70px;
		height: 60px;
		font-size: 12px;
		text-align: center;
		border-radius: $border-radius;
		&:first-child {
			margin-left: 80px;
		}
	}
	.van-badge__wrapper {
		margin-top: 10px;
		width: 70px;
		height: 60px;
		font-size: 12px;
		text-align: center;
		border: $border solid #7232dd;
		border-radius: $border-radius;
		margin-right: 17px;
		&:first-child {
			margin-left: 80px;
		}
	}
}

.quick {
	height: $shortcutBar-height;
	border: $border solid #7232dd;
	border-radius: $border-radius;
	width: $body-width;
	position: relative;
	
	.quick_goods {
		width: 80px;
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
