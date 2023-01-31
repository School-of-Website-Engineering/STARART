import {getItem, setItem} from "@/utils/storage";

export default {
	namespaced: true,
	actions   : {},
	mutations : {
		//设置显示loading
		setIsShowLoading(state, isShowLoading) {
			state.isShowLoading = isShowLoading;
			setItem("isShowLoading", isShowLoading);
		}
	},
	state: {isShowLoading: getItem("isShowLoading")}
};
