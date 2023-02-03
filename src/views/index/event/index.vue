<template>
	<div>
		<van-row type="flex" class="eventMenu">
			<van-col span="8" class="text">
				<div class="events-head">地图</div>
			</van-col>
			<van-col span="16" class="event">
				<div class="events-head">文字栏(事件区)
				</div>
			<div class="mainflex">
				<!-- 主菜单界面 -->
				<div class="menu-main">
					<!-- TODO 事件区 -->
					<div class="menu-list">
						制作物品
					</div>
					<div class="menu-list">
						天赋加点
					</div>
					<div class="menu-list">
						睡觉休息
					</div>
				</div>
				
			</div>
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
//菜单模板
.menu-list{
	width: 0.5rem;
	height: 5px;
	font-size: .1rem;
	margin: auto;
	top: 1px;
	margin-left: 128px;
	margin-top: 1px;
	text-align: center;
	border: $border solid $tip-color;
	border-radius: 5px;
	padding:0.1rem;
	background-color: #fff;
}

.mainflex{
	display: flex;
}

.menu-main{
	border: $border solid $tip-color;
	border-radius: $border-radius;
	width: 100vh;
	height: 23vh;
	margin: 0 auto;
	top: -3px;
	left: 6px;
	margin-top: .125rem;
	margin-left: .125rem;
	margin-right: .125rem;
}

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
