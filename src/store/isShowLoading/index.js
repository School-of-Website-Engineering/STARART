export default {
	namespaced: true,
	actions   : {},
	mutations : {
		setIsShowLoading(state, isShowLoading) {
			state.isShowLoading = isShowLoading;
		}
	},
	state: {isShowLoading: true}
};
