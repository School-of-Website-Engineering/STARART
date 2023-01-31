export default [
	//重定向
	// {
	// 	path    : "/",
	// 	redirect: "isloading"
	// },
	{
		path     : "/codeling",
		component: () =>
			import(/* webpackChunkName: "eggs" */ "@/components/Header/Header.vue"),
		name: "codeling"
	},
	{
		path     : "/isloading",
		component: () =>
			import(/* webpackChunkName: "loading" */ "@/components/isLoading"),
		name: "isloading"
	},
	{
		path     : "/views",
		component: () =>
			import(/* webpackChunkName: "views" */ "@/views"),
		name: "views"
	}
];
