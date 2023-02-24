//回合制战斗系统
export default {
	namespaced: true,
	actions   : {
		//玩家开始战斗
		startFight({ commit }) {
			commit("START_FIGHT");
		},
		//玩家逃跑
		goRun({ commit, state }) {
			if (state.player && state.roll > 3) {
				commit("GO_RUN");
			}
		},
		//鉴定骰子
		roll({ commit }, roll) {
			commit("ROLL", roll);
		},
		// 执行战斗，根据穿透属性（light）来判断攻击类型
		battle({ commit, getters }, { damage, defends, light }) {
			commit("setPlayerDamage", damage);
			commit("setMobsDefends", defends);
			const type = light ? "light" : "normal";
			const totalDamage = getters.totalDamage(type);
			return totalDamage;
		}
	},
	mutations: {
		//玩家如果在战斗过程中试图逃跑，则会追加一个鉴定骰子 大于3才能逃跑

		//玩家开始战斗
		START_FIGHT(state) {
			state.player = true;
		},
		//鉴定骰子
		ROLL(state, roll) {
			state.roll = roll;
		},
		//玩家逃跑
		GO_RUN(state) {
			state.GoRun = false;
		},
		// 设置玩家伤害值
		setPlayerDamage: (state, damage) => {
			state.player.damage = damage;
		},
		// 设置怪物防御值
		setMobsDefends: (state, defends) => {
			state.mobs.defends = defends;
		}
	},
	state: {
		//玩家是否正在战斗
		type  : false,
		//玩家是否可以逃跑
		GoRun : true,
		//是否可以逃跑
		roll  : 6, //鉴定骰子
		player: { damage: 0 },
		mobs  : { defends: 0 }
	},
	getters: {
		// 计算总伤害
		totalDamage: (state) => (type) => {
			let { damage, defends } = state;
			if (type === "normal") {
				const result = damage - defends;
				return result < 5 ? 5 : result;
			}
			else if (type === "light") {
				const result = damage * 0.5 - defends / 2;
				return result < 10 ? 10 : result;
			}
		}
	}
};

/* 使用方法：
使用 this.startFight();
//玩家开始战斗 this.goRun();
//玩家试图逃跑 this.roll(4);
//鉴定骰子
*/
