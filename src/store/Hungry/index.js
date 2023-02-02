import {getItem, setItem} from "@/utils/storage";
//天赋点
export default {
	namespaced: true,
	actions   : {},
	mutations : {
		//设置天赋点
		setGift(state, gift) {
			state.gift = gift;
			setItem("gift", gift);
		}
	},
	state: {gift: getItem("gift") || 100}
};
