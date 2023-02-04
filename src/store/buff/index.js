// buff系统模块
const buffModule = {
	state: {
		buffTypes: [
			"liveRecovery",
			"extremeSport",
			"adrenalineRise",
			"fullness",
			"accurateStrike",
			"purifyEnergy"
		],
		// buff类型
		buffList: []
		// buff列表
	},
	mutations: {
		// 添加buff
		addBuff(state, obj) {
			state.buffList.push(obj);
		},
		// 删除buff
		deleteBuff(state, type) {
			// 获取buff列表
			const list = state.buffList;
			for (let i = 0; i < list.length; i++) {
				// 找到要删除的buff
				if (list[i].type === type) {
					// 删除
					list.splice(i, 1);
				}
			}
		}
	},
	actions: {
		// 添加buff
		addBuff(context, obj) {
			context.commit("addBuff", obj);
		},
		// 删除buff
		deleteBuff(context, type) {
			context.commit("deleteBuff", type);
		}
	}
};

export default buffModule;
