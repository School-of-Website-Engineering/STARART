<template>
	<div>
		<van-row type="flex" class="eventMenu">
			<van-col span="8" class="text">
				<div class="events-head">地图</div>
			</van-col>
			<van-col span="16" class="event">
				<div class="events-head">事件区
				</div>
				<div class="mainflex">
					<!-- 主菜单界面 -->
					<div class="mainflex-l"></div>
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
		</van-row>
	</div>
</template>

<script>
export default { name: "event" }
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_media.scss";
@import "@/assets/scss/_color.scss";

//菜单模板
.mainflex {
	display: flex;
	justify-content: space-between;

	.mainflex-l {
		width: 65%;
		height: 24vh;
		border-radius: 5px;
		border: $border solid $tip-color;
		margin: 15px;
	}

	.menu-main {
		float: right;
		width: 30%;
		margin-top: 10px;
	}

	.menu-list {
		width: .8rem;
		font-size: .1rem;
		text-align: center;
		border: $border solid $tip-color;
		border-radius: 5px;
		margin-top: .2rem;

	}
}

.eventMenu {
	border: $border solid $tip-color;
	border-radius: $border-radius;
	width: $body-width;
	height: $eventMenu-height;
	display: flex;
	justify-content: space-around;
	margin: .125rem auto 0;

	.text {
		height: $event-height;
		border: $border solid $tip-color;
		border-radius: $border-radius;
		position: relative;
		width: 40%;
		margin-top: .15rem;
	}

	.event {
		height: $event-height;
		border: $border solid $tip-color;
		border-radius: $border-radius;
		position: relative;
		width: 50%;
		margin-top: .15rem;
	}

	.events-head {
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
