<template>
	<div>
		<!-- <el-menu :default-active="index" class="el-menu-footer" mode="horizontal" text-color="#c86058" :router="true"
			background-color="#f8dbb0" active-text-color="#2c3e50">
			<el-menu-item index="/contact">
				<router-link to="/contact">联系我们</router-link>
			</el-menu-item>
			<el-menu-item index="/about">
				<router-link to="/about">关于我们</router-link>
			</el-menu-item>
			<el-menu-item index="/help">
				<router-link to="/help">使用帮助</router-link>
			</el-menu-item>
			<el-menu-item index="/suggest">
				<router-link to="/suggest">网站建议</router-link>
			</el-menu-item>
		</el-menu> -->
		<hr/>
		<p>&copy; 2022 遗境 版权所有</p>
	</div>
</template>

<script>
export default {
	name: "Footer",
	// data() {
	//     return {
	//         index: "1"
	//     };
	// },
	// mounted() {
	//     this.index = this.$route.name;
	// }
}
</script>

<style scoped>
.el-menu-footer {
	width: 50%;

}
</style>