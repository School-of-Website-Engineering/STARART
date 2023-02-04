import {getItem, setItem} from "@/utils/sessionStorage";
//防御力
export default {
	namespaced: true,
	actions   : {},
	mutations : {
		//设置防御力
		setDef(state, def) {
			state.def = def;
			setItem("def", def);
		}
	},
	state: {def: getItem("def") || 100}
};
