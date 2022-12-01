module.exports = {
	root: true,
	env : {
		browser: true,
		node   : true,
		es2021 : true,
		es6    : true
	},
	extends: ["plugin:vue/essential"],

	plugins: ["@typescript-eslint"],

	parserOptions: { parser: "babel-eslint" },
	plugins      : ["vue"],
	// 在此处添加自定义规则
	rules        : {
		eqeqeq: "off", // 要求使用 `===` 和 `!==`

		curly: "error", // 强制所有控制语句使用一致的括号风格

		quotes: ["error", "double"], // 引号

		"arrow-parens": 0, // allow paren-less arrow functions

		"generator-star-spacing": 0, // allow async-await

		"no-unused-vars": "error", // disabled no ununsed var  `V1.1`

		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off", // no use debugger in production

		indent: [2, 4, { SwitchCase: 1 }], // 4 space for tab for perttier

		"space-before-function-paren": ["error", "never"], // no space in function name for perttier

		// # Possible Errors
		//
		"no-constant-condition": ["warn"],

		// 允许 if(...){带有花括号的空代码}
		"no-empty": ["off"],

		// 数组, 对象 逗号后面强制一空格
		"comma-spacing": ["error", { after: true }],

		// 对象单行 多行对齐模式
		"key-spacing": [
			"error",
			{
				singleLine: {},
				multiLine : { align: "colon" }
			}
		],

		// # Best Practices
		// 对象换行策略 , 如果多行, `{`和`}` 前后不能跟值
		"object-curly-newline" : ["error", { multiline: true }],
		"array-bracket-newline": ["error", { multiline: true }],

		// if后面强制花括号
		curly: ["error", "all"],

		// # Strict Mode
		// # Variables
		"no-unused-vars": ["warn"],

		// # Stylistic Issues

		quotes           : ["error", "double"],
		indent           : ["error", "tab"],
		"linebreak-style": ["error", "windows"],

		// if else try catch 换行
		"brace-style": ["error", "stroustrup", { allowSingleLine: false }],

		// 操作符周围前后必须空格
		"space-infix-ops": ["error"],

		// 提醒尾逗号 , 微信浏览器 , uc浏览器的问题
		"comma-dangle": ["warn", "never"]
		// # ECMAScript 6
		// # Deprecated
		// # Removed
	},
	overrides: [
		{
			files: ["*.vue"],
			rules: { "vue/multi-word-component-names": 0 }
		}
	]
};
