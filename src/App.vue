<template>
	<div id="app" class="common-layout">
		<el-container>
			<!-- header -->
			<el-affix :offset="0">
				<el-header>
					<HeaderMenu></HeaderMenu>
				</el-header>
			</el-affix>
			<!-- main -->
			<el-main style="margin-top: 5rem;">
				<router-view/>
			</el-main>
			<!-- footer -->
			<el-footer height="50px">
				<Footer></Footer>
			</el-footer>
		</el-container>
		<el-backtop :bottom="80" :right="100"/>
	</div>
</template>

<script lang="js" setup>
//本地化
import {ElConfigProvider} from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import HeaderMenu from "./components/HeaderMenu.vue"
import Footer from "./components/Footer.vue"

export default {
	name: "app",
	components: {
		[ElConfigProvider.name]: ElConfigProvider,
		HeaderMenu,
		Footer
	},
	setup() {
		let locale = zhCn;
		return {
			locale,
		};
	}
};
</script>

<style>
body {
	width: 70%;
	margin: 0 auto;
	background-color: #FCE2BF;
}
</style>

<style scoped>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}

.el-backtop {
	background: white;
	border: 1px #FCE2BF solid;
}
</style>