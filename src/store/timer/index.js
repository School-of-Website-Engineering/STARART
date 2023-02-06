//游戏时间系统
// 用于控制游戏世界时间的变化，以及游戏世界时间的加速
import store from "@/store";

export default {
	namespaced: true,
	actions   : {
		// 改变游戏世界时间，每秒改变一次
		changeTime({  commit, state }) {
			let minutes = state.minutes,
				hours = state.hours;
			setInterval(() => {
				if (state.speed !== 0) {
					minutes++;
					if (minutes > 59) {
						minutes = 0;
						hours++;
						//调用weatherSys vuex模块的mutations中的UPDATE_WEATHER_STATUS
						store.commit("weatherSys/UPDATE_WEATHER_STATUS");
					}
					if (hours > 24) {
						hours = 0;
					}
					commit("updateTime", { hours, minutes });
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
		}
	},
	mutations: {
		//设置时间
		// 更新游戏世界时间
		updateTime(state, { hours, minutes }) {
			state.hours = hours;
			state.minutes = minutes;
		},
		// 更新加速参数
		updateSpeed(state, { speed }) {
			state.speed = speed;
		},
		// 暂停游戏世界时间
		pauseTime(state) {
			state.speed = 0;
		}
	},

	state: {
		hours  : 0,
		minutes: 0,
		speed  : 1 //初始加速为1
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
		speed: (state) => {
			return state.speed;
		}
	}
};
