import {getItem, setItem} from "@/utils/storage";
//体质力
export default {
	namespaced: true,
	actions   : {},
	mutations : {
		//设置体质力
		setPhysicalCon(state, payload) {
			state.physicalCon = payload;
			setItem("physicalCon", payload);
		}
	},
	state: {PhysicalCon: getItem("PhysicalCon") || 100}
};
