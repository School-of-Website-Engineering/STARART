<template>
	<div>
		<van-row type="flex" class="eventMenu">
			<van-col span="8" class="text">
				<div class="events-head">地图</div>
			</van-col>
			<van-col span="16" class="event">
				<div class="events-head">文字栏</div>
			</van-col>
		</van-row>
	</div>
</template>

<script>
export default {name: "event"}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_media.scss";
@import "@/assets/scss/_color.scss";

.eventMenu{
	border: $border solid $tip-color;
	border-radius: $border-radius;
	width: $body-width;
	height: $eventMenu-height;
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	margin-top: .125rem;
	.text{
	    height: $event-height;
		border: $border solid $tip-color;
		border-radius: $border-radius;
		position: relative;
		width: 40%;
		margin-top: .15rem;
    }
	.event{
	    height: $event-height;
		border: $border solid $tip-color;
		border-radius: $border-radius;
		position: relative;
		width: 50%;
		margin-top: .15rem;
    }
	.events-head{
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
