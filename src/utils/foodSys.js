class Food {
	constructor(name, rare, effect, value, hungry, thirsty) {
		this.name = name;
		this.rare = rare;
		this.effect = effect;
		this.value = value;
		this.hungry = hungry;
		this.thirsty = thirsty;
	}

}

export  const food = {
	water        : new Food("水", 1, "补充水分", 0, 2, 0),
	coreWater    : new Food("核废水", 0, "70%核辐射中毒", 0, 0, 1),
	wheat        : new Food("小麦", 1, "无", 	10, 3, 0),
	peanut       : new Food("花生", 1, "无", 10, 5, 0),
	chili        : new Food("辣椒", 2, "20%肾上腺素飙升", 30, 5, 0),
	cleanWater   : new Food("净水", 2, "可以缓解San", 100, 0, 4),
	grass        : new Food("草药", 3, "治疗效果", 30, 1, 0),
	rawMutton    : new Food("生羊肉", 2, "20%导致食物中毒", 50, 5, 0),
	cookedMutton : new Food("熟羊肉", 3, "治疗和极速效果", 100, 10, 0),
	rawChicken   : new Food("生鸡肉", 1, "50%导致食物中毒", 20, 3, 0),
	cookedChicken: new Food("熟鸡肉", 3, "治疗和缓解San", 50, 12, 0),
	whiskey      : new Food("威士忌", 4, "缓解San和认知力减弱", 450, 0, 2),
	beer         : new Food("啤酒", 3, "San降低，力量暂时提升", 150, 0, 3),
	cocktail     : new Food("鸡尾酒", 3, "暂缓饥饿，但San降低", 300, 0, 4),
	carrot       : new Food("萝卜", 1, "无", 8, 5, 0),
	bread        : new Food("面包", 2, "治疗和缓解San", 50, 8, 0),
	rottenMeat   : new Food("腐肉", 1, "20%概率饥饿加剧", 2, 5, 0),
	rawPork      : new Food("生猪肉", 3, "10%导致食物中毒", 60, 5, 0),
	cookedPork   : new Food("熟猪肉", 4, "力量永久提升，缓解San", 300, 15, 0),
	chocolate    : new Food("巧克力", 5, "天赋点+1", 450, 10, 0),
	cocoa        : new Food("可可豆", 3, "灵巧值永久提升", 200, 3, 0)
};
