//vuex中的食物系统模块，用于存储游戏中的食物数据
export default {
	namespaced: true,
	actions   : {},
	mutations : {},
	state     : {
		foodList: [
			{
				name  : "水",
				rarity: 1,
				effect: "补充水分",
				price : 0,
				hunger: 0,
				thirst: 2
			},
			{
				name  : "核废水",
				rarity: 0,
				effect: "70%核辐射中毒",
				price : 0,
				hunger: 0,
				thirst: 1
			},
			{
				name  : "小麦",
				rarity: 1,
				effect: "无",
				price : 10,
				hunger: 3,
				thirst: 0
			},
			{
				name  : "花生",
				rarity: 1,
				effect: "无",
				price : 10,
				hunger: 5,
				thirst: 0
			},
			{
				name  : "辣椒",
				rarity: 2,
				effect: "20%肾上腺素飙升",
				price : 30,
				hunger: 5,
				thirst: 0
			},
			{
				name  : "净水",
				rarity: 2,
				effect: "可以缓解San",
				price : 0,
				hunger: 4,
				thirst: 1
			},
			{
				name  : "草药",
				rarity: 3,
				effect: "治疗效果",
				price : 300,
				hunger: 1,
				thirst: 0
			},
			{
				name  : "生羊肉",
				rarity: 2,
				effect: "20%导致食物中毒",
				price : 500,
				hunger: 5,
				thirst: 0
			},
			{
				name  : "熟羊肉",
				rarity: 3,
				effect: "治疗和极速效果",
				price : 1000,
				hunger: 10,
				thirst: 0
			},
			{
				name  : "生鸡肉",
				rarity: 1,
				effect: "50%导致食物中毒",
				price : 200,
				hunger: 3,
				thirst: 0
			},
			{
				name  : "熟鸡肉",
				rarity: 3,
				effect: "治疗和缓解San",
				price : 500,
				hunger: 12,
				thirst: 0
			},
			{
				name  : "威士忌",
				rarity: 4,
				effect: "缓解San和认知力减弱",
				price : 4000,
				hunger: 0,
				thirst: 2
			},
			{
				name  : "啤酒",
				rarity: 3,
				effect: "San降低，力量暂时提升",
				price : 1050,
				hunger: 0,
				thirst: 3
			},
			{
				name  : "鸡尾酒",
				rarity: 3,
				effect: "暂缓饥饿，但San降低",
				price : 3000,
				hunger: 0,
				thirst: 4
			},
			{
				name  : "萝卜",
				rarity: 1,
				effect: "无",
				price : 80,
				hunger: 5,
				thirst: 0
			},
			{
				name  : "面包",
				rarity: 2,
				effect: "治疗和缓解San",
				price : 500,
				hunger: 8,
				thirst: 0
			},
			{
				name  : "腐肉",
				rarity: 1,
				effect: "20%概率饥饿加剧",
				price : 20,
				hunger: 5,
				thirst: 0
			},
			{
				name  : "生猪肉",
				rarity: 3,
				effect: "10%导致食物中毒",
				price : 600,
				hunger: 5,
				thirst: 0
			},
			{
				name  : "熟猪肉",
				rarity: 4,
				effect: "力量永久提升，缓解San",
				price : 3000,
				hunger: 15,
				thirst: 0
			},
			{
				name  : "巧克力",
				rarity: 5,
				effect: "天赋点+1",
				price : 4050,
				hunger: 10,
				thirst: 0
			},
			{
				name  : "可可豆",
				rarity: 3,
				effect: "灵巧值永久提升",
				price : 2000,
				hunger: 3,
				thirst: 0
			}
		],
		// 金币计算公式
		coinRate: {bronze: 1, silver: 100, gold: 1000}
	},
	getters: {
		// 食物列表
		foodList: (state) => state.foodList,
		// 金币转换汇率
		coinRate: (state) => state.coinRate
	}
};
