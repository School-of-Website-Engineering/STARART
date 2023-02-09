//游戏时间系统
// 用于控制游戏世界时间的变化，以及游戏世界时间的加速
import store from "@/store";
import { addClassName } from "@/utils/flash";

export default {
	namespaced: true,
	actions   : {
		// 改变游戏世界时间，每秒改变一次，初始化时调用
		changeTime({ commit, state }) {
			let minutes = state.minutes,
				hours = state.hours,
				Day = state.toDay;
			setInterval(() => {
				if (state.speed !== 0) {
					minutes++;
					if (minutes > 59) {
						minutes = 0;
						hours++;
					}
					if (hours > 24) {
						Day++;
						hours = 0;
						//调用weatherSys vuex模块的mutations中的UPDATE_WEATHER_STATUS
						store.commit("weatherSys/UPDATE_WEATHER_STATUS");
						addClassName(".time-list", ["alertMsg", ""]);
						//调用timer vuex模块的mutations中的runGroup
						store.commit("timer/runGroup");
					}
					commit("updateTime", { hours, minutes, Day });
				}
			}, state.speed * 1000);
		},
		// 改变加速倍数
		changeSpeed({ commit }, speed) {
			commit("updateSpeed", { speed });
		},
		// 暂停游戏时间
		pauseTime({ commit }) {
			commit("pauseTime");
		},
		// 恢复游戏时间
		resumeTime({ commit }) {
			commit("updateSpeed", { speed: 1 });
		}
	},
	mutations: {
		//设置时间
		// 更新游戏世界时间
		updateTime(state, { hours, minutes, Day }) {
			state.hours = hours;
			state.minutes = minutes;
			state.toDay = Day;
		},
		// 更新游戏世界天数
		updateToDay(state, toDay) {
			state.toDay = toDay;
		},
		// 更新加速参数
		updateSpeed(state, { speed }) {
			state.speed = speed;
		},
		// 暂停游戏世界时间
		pauseTime(state) {
			state.speed = 0;
		},
		// 恢复游戏世界时间
		resumeTime(state) {
			state.speed = 1;
		},

		runGroup(state) {
			// 生存鉴定期--第8天到第12天
			// 生存高危期--第13天到第16天
			// 自由探索期--第17天以上
			let num;
			let num2;
			if (state.toDay < 7) {
				num = Math.floor(Math.random() * 8 + 1);
				if (num >= 6) {
					num2 = Math.floor(Math.random() * 100 + 1);
					if (num2 <= 20) {
						state.message =
							"鉴定骰子为：" +
							num +
							"	在xxxx资源地图区资源产出翻倍！";
					}
					else if (num2 <= 45) {
						state.message =
							"鉴定骰子为：" + num + "	所有怪物的刷新速度降低20%";
					}
					else if (num2 <= 80) {
						state.message =
							"鉴定骰子为：" + num + "	玩家制造物品的速度提升20%";
					}
					else {
						state.message =
							"鉴定骰子为：" +
							num +
							"	我们遇到了敌袭，2回合后强制作战";
					}
				}
				else if (num >= 3) {
					state.message = "鉴定骰子为：" + num + "	暂无特殊事件";
				}
				else {
					num2 = Math.floor(Math.random() * 100 + 1);
					if (num2 <= 40) {
						state.message =
							"鉴定骰子为：" +
							num +
							"	今天天气格外炎热，你的口渴程度提升20%";
					}
					else if (num2 <= 80) {
						state.message =
							"鉴定骰子为：" +
							num +
							"	我们遇到了敌袭，1回合后强制作战";
					}
					else {
						state.message =
							"鉴定骰子为：" +
							num +
							"	我们遇到了原住民，但对方似乎敌意满满（立刻开始特殊战斗）";
					}
				}
			}
			else if (state.toDay < 12) {
				state.message = "生存鉴定期--第8天到第12天";
			}
			else if (state.toDay < 16) {
				state.message = "生存高危期--第13天到第16天";
			}
			else {
				state.message = "自由探索期";
			}
		}
	},

	state: {
		hours  : 0,
		minutes: 0,
		speed  : 0.0001, //初始加速为1
		toDay  : 1,
		message: "生存评估期--第1天到第7天"
	},
	getters: {
		// 获取游戏世界时间
		worldTime: (state) => {
			let hours = 0,
				minutes = 0;
			hours = state.hours;
			minutes = state.minutes;
			return `${hours}:${minutes}`;
		},
		// 获取当前加速倍数
		speed: (state) => state.speed,
		// 获取游戏世界天数
		toDay: (state) => state.toDay
	}
};
