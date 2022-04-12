<template>
	<div>
		<div class="form">
			<form>
				<table>
					<tr>
						<td>用户名：</td>
						<td><input ref="username" class="accountInfo" placeholder="请输入用户名称" type="text"/></td>
					</tr>
					<tr>
						<td>手机号：</td>
						<td><input ref="phone" class="accountInfo" maxlength="11" minlength="11" placeholder="请输入手机号码"
								   type="text"/>
							<el-button style="margin-left:-6rem;width:5rem;" type="warning" @click="verify">获取验证码
							</el-button>
							<br/>
						</td>
					</tr>
					<tr>
						<td>验证码：</td>
						<td><input ref="verifyCode" class="accountInfo" placeholder="请输入验证码" type="text"/></td>
					</tr>
					<tr>
						<td>密码：</td>
						<td><input ref="password" class="accountInfo" maxlength="20" minlength="6"
								   placeholder="请输入6-20位登录密码" type="password"/></td>
					</tr>
					<tr>
						<td>确认密码：</td>
						<td><input ref="conPassword" class="accountInfo" placeholder="请再次输入登录密码" type="password"/></td>
					</tr>
					<tr>
						<td><label style="color:#999999;font-size:10px"><input class="rememberCheckbox" name="remember"
																			   type="checkbox" value="remember"/>勾选同意《用户服务协议》</label>
						</td>
					</tr>
				</table>
			</form>
			<button style="margin-top:1rem" type="submit" @click="confirm">注册</button>
			<br/><br/>
			<router-link class="router" style="color:#999999;text-decoration:none;font-size:1rem;" to="/login">
				已有账号，立即登录
			</router-link>
			<br/>
		</div>
		<router-view></router-view>
	</div>
</template>
<script lang="js" setup>
import {ElNotification} from "element-plus"

let code = 0;

export default {
	name: "register",
	methods: {
		confirm() {
			let ref = this.$refs;
			if (ref.username.value == "") {
				ElNotification({
					title: "用户名不能为空",
					message: "请重新输入",
					type: "warning",
				});
				return;
			} else if (ref.phone.value == "") {
				ElNotification({
					title: "手机号不能为空",
					message: "请重新输入",
					type: "warning",
				});
				return;
			} else if (ref.verifyCode.value != code.toString()) {
				ElNotification({
					title: "验证码错误",
					message: "请重新输入",
					type: "warning",
				});
				return;
			} else if (ref.password.value == "" || ref.conPassword.value == "") {
				ElNotification({
					title: "密码不能为空",
					message: "请重新输入",
					type: "warning",
				});
				return;
			} else if (ref.password.value.length < 6) {
				ElNotification({
					title: "密码不能少于6位",
					message: "请重新输入",
					type: "warning",
				});
				return;
			} else if (ref.password.value !== ref.conPassword.value) {
				ElNotification({
					title: "两次输入密码不一致",
					message: "请重新输入",
					type: "warning",
				});
				return;
			}
			ElNotification({
				title: "注册成功",
				message: "即将跳转至登录页面",
				type: "success",
			});
			setTimeout(() => {
				this.$router.push("/login");
			}, 1000);
		},
		verify() {
			let ref = this.$refs;
			code = parseInt(Math.random() * (999999 - 100000) + 100000);
			if (ref.phone.value == "" || ref.phone.value.length != 11) {
				ElNotification({
					title: "手机号为空或有误",
					message: "请重新输入",
					type: "warning",
				});
				return;
			}
			ElNotification({
				title: "成功获取验证码",
				message: "您的验证码为：" + code,
				type: "success",
			});

		}
	}
};
</script>

<style scoped="scoped">
table {
	margin: 0 auto;
}

td {
	text-align: justify;
	text-justify: inter-ideograph;
}

.accountInfo {
	border-radius: 0px;
	height: 2rem;
	margin: 1rem 0px;
	width: 20rem;
}

button {
	width: 10rem;
	border-radius: 0px;
	height: 2rem;
	background-color: #facd91;
	color: white;
	border: 0px;
}

button:hover {
	cursor: pointer;
}
</style>