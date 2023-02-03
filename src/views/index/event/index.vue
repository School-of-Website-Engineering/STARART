<template>
	<div>
		<van-row type="flex" class="eventMenu">
<<<<<<< Updated upstream
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
=======
			<van-col span="8" class="text">
				<div class="events-head">地图</div>
			</van-col>
			<van-col span="16" class="event">
				<div class="events-head">事件区
				</div>
			<div class="mainflex">
				<!-- 主菜单界面 -->
				<div class="menu-main">
					<!-- TODO 事件区 -->
					<div class="menu-list">
						制作
					</div>
					<div class="menu-list">
						天赋
					</div>
					<div class="menu-list">
						休息
					</div>
				</div>
				
			</div>
			</van-col>
>>>>>>> Stashed changes
		</van-row>
	</div>
</template>


<script>
export default {name: "event"}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_media.scss";
.event{
	background: cadetblue;
	height: $event-height;
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
.text{
	background: rgb(160, 95, 95);
	height: $event-height;
	text-align: center;
}
</style>
