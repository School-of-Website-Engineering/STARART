class Player {
	constructor(Health, Con, Gift, Def, Hungry, Water, Chrs, Dex) {
		//生命值
		this.Health = Health;
		//体力
		this.Con = Con;
		//天赋值
		this.Gift = Gift;
		//防御值
		this.Def = Def;
		//饥饿值
		this.Hungry = Hungry;
		//
		this.Water = Water;
		//魅力
		this.Chrs = Chrs;
		//灵巧
		this.Dex = Dex;
	}
}

//生成玩家类，防御力初始10，天赋点初始5， 魅力20 灵巧20 其他均100
export let player = new Player(100, 100, 5, 10, 100, 100, 20, 20);
