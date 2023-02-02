// Buff状态系统
export const BuffSystem = function() {
	// 状态字典
	const BuffDict = {
		RADIATION: {
			name    : "核辐射中毒",
			duration: 5, //持续时间
			effect  : function() {
				// 核辐射中毒，每秒减少1点生命值
				player.hp--;
			}
		},
		SPEEDUP: {
			name    : "活力极速",
			duration: 5,
			effect  : function() {
				// 活力极速，每秒增加5点行动力
				player.action += 5;
			}
		},
		ATTACKUP: {
			name    : "攻击力提升",
			duration: 5,
			effect  : function() {
				// 攻击力提升，每次攻击增加10点伤害
				player.attack += 10;
			}
		}
	};
	// 状态计时器
	let Timer = {
		start: function(buffName) {
			// 获取buff
			var buff = BuffDict[buffName];
			// 计时器
			var timer = setInterval(function() {
				// 执行buff效果
				buff.effect();
				// 时间减1
				buff.duration--;
				// 如果时间为0，则清除计时器
				if (buff.duration <= 0) {
					clearInterval(timer);
				}
			}, 1000);
		}
	};

	// 接口
	return {
		addBuff: function(buffName) {
			// 添加buff
			Timer.start(buffName);
		},
		getBuff: function(buffName) {
			// 获取buff
			return BuffDict[buffName];
		}
	};
};
