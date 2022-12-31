<template>
  <div id="app">
	  <el-container>
		  <el-aside width="25vw">Aside</el-aside>
		  <el-container>
			  <el-header>Header</el-header>
			  <el-main>Main</el-main>
			  <el-footer>Footer</el-footer>
		  </el-container>
	  </el-container>
  </div>
</template>

<script>
export default {name: "App"}
</script>

<style scoped lang="scss">
.el-container {
  height: 100vh;
	background-color: #B3C0D1;
}
.el-header, .el-footer {
	height:20vh !important;
	background-color: #B3C0D1;
	color: #333;
	text-align: center;
}

.el-aside {
	background-color: #D3DCE6;
	color: #333;
	text-align: center;
}

.el-main {
	background-color: #E9EEF3;
	color: #333;
	text-align: center;
}
</style>
