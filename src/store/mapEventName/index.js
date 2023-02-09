export default {
	namespaced: true,
	actions   : {},
	mutations : {},
	state     : {
		home      : ["家", "床", "桌子", "工作台"],
		cave      : ["洞穴", "石头", "便便", "木棍", "洞穴出口"],
		ziYin     : ["只因", "邶贝", "只因你太美", "你干嘛"],
		youDoWhat : ["蛋蛋", "鸡", "太美", "你干嘛"],
		pigeonNest: ["鸽鸽的窝", "唱", "跳", "rap", "篮球", "music", "鸡你太美", "全民制作人们大家好"]
	},
	getters: {
		home      : (state) => state.home,
		cave      : (state) => state.cave,
		ziYin     : (state) => state.ziYin,
		youDoWhat : (state) => state.youDoWhat,
		pigeonNest: (state) => state.pigeonNest
	}
};
