<template>
	<div>
		<div class="form">
			<form>
				账&nbsp;&nbsp;户：<input ref="username" class="accountInfo" placeholder="请输入账号/手机/邮箱" type="text"/><br/>
				密&nbsp;&nbsp;码：<input ref="password" class="accountInfo" placeholder="请输入密码" type="password"/><br/>
				<label style="color:#999999;font-size:10px"><input class="rememberCheckbox" name="remember"
																   type="checkbox"
																   value="remember"/>记住登录状态</label>
				<router-link class="router" style="color:#999999;text-decoration:none;font-size:10px" to="/register">
					注册新用户
				</router-link>
				<br/>
			</form>
			<button style="margin-top:1rem" type="submit" @click="confirm">登录</button>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
import {ElNotification} from "element-plus";

export default {
	name: "Login",
	methods: {
		confirm() {
			let ref = this.$refs;
			if (ref.username.value == "" || ref.password.value == "") {
				ElNotification({
					title: "用户名或密码不能为空",
					message: "请重新输入",
					type: "warning",
				});
				return;
			}
			ElNotification({
				title: "登录成功",
				message: "即将跳转至主页",
				type: "success",
			});
			setTimeout(() => {
				this.$router.push("/");
			}, 1000);
		},
	},
};
</script>
<style scoped="scoped">
.accountInfo {
	border-radius: 0px;
	height: 2rem;
	margin: 1rem 0px;
	width: 20rem;
}

.router {
	margin-left: 2rem;
}

button {
	width: 10rem;
	border-radius: 0px;
	height: 2rem;
	background-color: #facd91;
	color: white;
	border: 0px;
	cursor: pointer;
}
</style>