// 定义天气状态
const WEATHER_STATUS = {
	SUNNY       : "SUNNY",
	// 晴天
	RAINY       : "RAINY",
	// 雨天
	CLOUDY      : "CLOUDY",
	// 阴天
	THUNDERSTORM: "THUNDERSTORM",
	// 暴雨
	LIGHTENING  : "LIGHTENING"
	// 雷暴
};

// 生成天气状态
export function generateWeatherStatus() {
	// 生成随机数
	const randomNum = Math.random();

	if (randomNum <= 0.4) {
		return WEATHER_STATUS.SUNNY;
	}
	else if (randomNum <= 0.75) {
		return WEATHER_STATUS.RAINY;
	}
	else if (randomNum <= 0.93) {
		return WEATHER_STATUS.CLOUDY;
	}
	else if (randomNum <= 0.98) {
		return WEATHER_STATUS.THUNDERSTORM;
	}
	else {
		return WEATHER_STATUS.LIGHTENING;
	}
}

// 定义天气模块
const state = {
	weatherStatus: WEATHER_STATUS.SUNNY
	// 默认游戏开始天气状态为晴天
};

const mutations = {
	// 更新天气状态
	UPDATE_WEATHER_STATUS(state) {
		state.weatherStatus = generateWeatherStatus();
	}
};

const getters = {
	// 获取当前天气状态
	getWeatherStatus(state) {
		return state.weatherStatus;
	}
};

export default {state, mutations, getters};
