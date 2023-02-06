//引入timer
import timer from "@/store/timer";
// 存储当前游戏时间, 世界状态 , 怪物密度 和 生物密度 的状态
const state = {
	// 当前游戏时间
	//载入timer游戏时间
	currentTime    : timer.state.hours * 100 + timer.state.minutes,
	// 当前世界状态
	worldStatus    : "",
	// 当前怪物密度
	monsterDensity : 0,
	// 当前生物密度
	creatureDensity: 0
};

// 修改当前时间所对应的世界状态 , 怪物密度 和 生物密度
const mutations = {
	SET_CURRENT_TIME(state, payload) {
		state.currentTime = payload;
		// 根据当前时间计算世界状态 , 怪物密度 和 生物密度,
		// 将时间转化成以分钟为单位
		const timeInMinutes
			= Math.floor(state.currentTime / 100) * 60
			+ (state.currentTime % 100);
		if (timeInMinutes >= 0 && timeInMinutes <= 459) {
			state.worldStatus = "凌晨深夜";
			state.monsterDensity = 4;
			state.creatureDensity = 1;
		}
		else if (timeInMinutes >= 500 && timeInMinutes <= 759) {
			state.worldStatus = "黎明到来";
			state.monsterDensity = 3;
			state.creatureDensity = 2;
		}
		else if (timeInMinutes >= 800 && timeInMinutes <= 1159) {
			state.worldStatus = "早日清晨";
			state.monsterDensity = 2;
			state.creatureDensity = 3;
		}
		else if (timeInMinutes >= 1200 && timeInMinutes <= 1659) {
			state.worldStatus = "晌午时分";
			state.monsterDensity = 1;
			state.creatureDensity = 5;
		}
		else if (timeInMinutes >= 1700 && timeInMinutes <= 1959) {
			state.worldStatus = "傍晚降至";
			state.monsterDensity = 3;
			state.creatureDensity = 2;
		}
		else if (timeInMinutes >= 2000 && timeInMinutes <= 2359) {
			state.worldStatus = "夜幕降临";
			state.monsterDensity = 5;
			state.creatureDensity = 1;
		}
	}
};

// 提交 mutations 触发修改
const actions = {
	setCurrentTime({commit}, payload) {
		commit("SET_CURRENT_TIME", payload);
	}
};

export default {state, mutations, actions};
