export default [
	//重定向
	{
		path    : "/",
		redirect: "/index"
	},
	{
		path     : "/codeling",
		component: () =>
			import(
				/* webpackChunkName: "eggs" */ "@/components/Header/Header.vue"
			),
		name: "codeling"
	},
	{
		path     : "/index",
		component: () =>
			import(/* webpackChunkName: "index" */ "@/views/index/index.vue"),
		name: "index"
	}
];
