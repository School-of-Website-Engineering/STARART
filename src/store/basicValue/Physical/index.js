import {getItem, setItem} from "@/utils/sessionStorage";
//体力
export default {
	namespaced: true,
	actions   : {},
	mutations : {
		//设置体力
		setPhysical(state, physical) {
			state.physical = physical;
			setItem("physical", physical);
		}
	},
	state: {Physical: getItem("Physical") || 100}
};
