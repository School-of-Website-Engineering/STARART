import {getItem, setItem} from "@/utils/sessionStorage";
//健康值
export default {
	namespaced: true,
	actions   : {},
	mutations : {
		//设置健康值
		setHealth(state, health) {
			state.health = health;
			setItem("health", health);
		}
	},
	state: {Health: getItem("health") || 100}
};
