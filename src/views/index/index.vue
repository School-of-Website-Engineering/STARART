<template>
	<div>
		<!-- 全局状态栏 -->
		<globalStatusBar></globalStatusBar>
		<!-- 快捷栏 -->
		<shortcutBar></shortcutBar>
		<!--		文本输出-->
		<textOutput></textOutput>
		<!-- 事件 -->
		<event></event>
		<!-- 底部菜单 -->
		<bottomMenu></bottomMenu>
	</div>
</template>

<script>
import bottomMenu from "@/views/index/bottomMenu";
import event from "@/views/index/event/index.vue";
import globalStatusBar from "@/views/index/globalStatusBar";
import shortcutBar from "@/views/index/shortcutBar";
import textOutput from "@/views/index/textOutput";

export default {
	name      : "index",
	components: {
		bottomMenu,
		event,
		globalStatusBar,
		shortcutBar,
		textOutput
	},
	data() {
		return {
			// 声明一个time不变量以及一个timestep变量，其分别用于储存时间值和时间步长
			time    : 0,
			timestep: 1,
			// 声明一个player对象，用于储存玩家的各种状态
			player  : {
				// 声明一个Health属性，用于储存玩家的生命值
				Health  : 100,
				// 声明一个Defens属性，用于储存玩家的防御值
				Defens  : 20,
				// 声明一个Backpack属性，用于储存玩家的背包容量
				Backpack: 5,
				// 声明一个Water属性，用于储存玩家的水量
				Water   : 0,
				// 声明一个Hungry属性，用于储存玩家的饥饿值
				Hungry  : 0,
				// 声明一个灵巧值属性，用于储存玩家的当前灵巧值
				Dex     : 20,
				// 声明一个Chars属性，用于储存玩家的魅力值
				Chars   : 20
			}
		};
	},
	mounted() {
		// 创建一个定时器，在一个固定的间隔内不断地对time加上合适的timestep：
		setInterval(() => {
			this.time += this.timestep;
		}, 1000);
	},
	methods: {
		// 声明一个takeDamage方法，用于处理玩家受到伤害的情况
		takeDamage(damage) {
			let effectiveDamage =
				damage - this.player.Defens > 0
					? damage - this.player.Defens
					: 0;
			this.player.Health = this.player.Health - effectiveDamage;
		},
		// 声明一个heal方法，用于处理玩家受到治疗的情况
		decreaseWater() {
			this.player.Water--;
		},
		//声明一个增加水量的方法
		increaseWater() {
			this.player.Water++;
		},
		//声明一个减少饥饿值的方法
		decreaseHungry() {
			this.player.Hungry--;
		},
		//声明一个增加饥饿值的方法
		increaseHungry() {
			this.player.Hungry++;
		},
		//声明一个减少灵巧值的方法
		increaseChars() {
			this.player.Chars++;
		},
		
		// 暂停
		pauseTime() {
			this.timestep = 0;
		},
		// 加速
		speedTime() {
			this.timestep = 2;
		},
		// 减速
		slowTime() {
			this.timestep = 0.5;
		}
	}
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_color.scss";
    body{
		background: $white;
	}
</style>
