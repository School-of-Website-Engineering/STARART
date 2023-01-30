const prodPlugins = [];
// 如果是发布阶段,处于生产环境
if (process.env.NODE_ENV === "production") {
	prodPlugins.push("transform-remove-console");
}
module.exports = {
	presets: ["@vue/cli-plugin-babel/preset"],
	plugins: [...prodPlugins] // 把上面定义的prodPlugins数组里面的每一项展开添加到这个plugins数组里面
};
module.exports = {
	plugins: [
		[
			"import",
			{
				libraryName     : "vant",
				libraryDirectory: "es",
				style           : true
			},
			"vant"
		]
	]
};
