<template>
	<el-menu :default-active="activeIndex" :router="true" active-text-color="#2c3e50" background-color="#f8dbb0"
			 class="el-menu-demo"
			 mode="horizontal" text-color="#c86058">
		<el-menu-item index="/"><img src="../assets/logo.png"/></el-menu-item>
		<el-menu-item index="/">
			<router-link to="/">首页</router-link>
		</el-menu-item>
		<el-menu-item index="/display">
			<router-link to="/display">展览</router-link>
		</el-menu-item>
		<el-menu-item index="/news">
			<router-link to="/news">资讯</router-link>
		</el-menu-item>
		<el-menu-item index="/cultural">
			<router-link to="/cultural">文创</router-link>
		</el-menu-item>
		<el-menu-item index="/about">
			<router-link to="/about">关于</router-link>
		</el-menu-item>
		<el-menu-item index="/login">
			<router-link to="/login">账户</router-link>
		</el-menu-item>
		<span class="slogan">欢迎来到遗境</span>
	</el-menu>
</template>

<script>
export default {
	name: "HeaderMenu",
	data() {
		return {
			activeIndex: "1"
		};
	},
	mounted() {
		this.activeIndex = this.$route.name;
	}
};
</script>

<style>
.slogan {
	margin-top: 1.5rem;
	margin-left: 10rem;
	color: white;
	font-family: "黑体";
	font-size: 1.2rem;
}
</style>

<style>
.el-menu-demo {
	padding: 30px;
	font-family: "黑体";
}

.el-menu-demo a {
	font-size: 1.5rem;
	font-weight: bold;
	text-decoration: none;
}

.el-menu-demo a.router-link-exact-active {
	color: #2c3e50;
}
</style>