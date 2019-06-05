<template>
<div class="login">
	<div class="block">
		<h1><img src="~@/assets/img/hoxiuxiu-logo.png"/>保险数据管理系统</h1>
	</div>
	<div class="input-box">
		<Tabs value="phone">
			<TabPane label="验证码登录" name="phone">
				<Form ref="phone" :rules="rulePhone"  :model="formPhone"  @keydown.enter.native="toLogin('phone')">
					<FormItem prop="userMobile">
						<Input v-model="formPhone.userMobile" :maxlength="11" size="large" placeholder="请输入手机号">
						<span slot="prepend">
	                  <Icon :size="16" type="ios-person"></Icon>
	                </span>
						</Input>
					</FormItem>
					<FormItem prop="captcha">
						<Input v-model="formPhone.captcha" placeholder="请输入验证码" size="large">
						<span slot="prepend">
	                      <Icon :size="14" type="md-lock"></Icon>
	                    </span>
						<span slot="append"><Button  type="primary" @click='getCaptcha(false)'>
	                      {{description}}</Button></span>
						</Input>
					</FormItem>
					<FormItem style="margin-bottom: 10px">
						<Button type="primary" long size="large" @click="toLogin('phone')">验证并登录</Button>
					</FormItem>
				</Form>
			</TabPane>
			<TabPane label="密码登录" name="pass">
				<Form ref="pass" :model="formPass" @keydown.enter.native="toLogin('pass')">
					<FormItem prop="userName">
						<Input v-model="formPass.userName" size="large" placeholder="请输入用户名">
						<span slot="prepend">
	                  <Icon :size="16" type="ios-person"></Icon>
	                </span>
						</Input>
					</FormItem>
					<FormItem prop="password">
						<Input type="password" v-model="formPass.password" size="large" placeholder="请输入密码">
						<span slot="prepend">
	                  <Icon :size="14" type="md-lock"></Icon>
	                </span>
						</Input>
					</FormItem>
					<FormItem style="margin-bottom: 10px">
						<Button type="primary" long size="large" @click="toLogin('pass')">登录</Button>
					</FormItem>
					<div class="deal">
						<a style="float: right" @click="showFind= true">忘记密码?</a>
					</div>

				</Form>
			</TabPane>
		</Tabs>
	</div>
</div>
</template>

<script>
export default {
	name: "login",
	data(){
		return{
			formPhone: {

			},
			formPass: {

			}
		}
	},
	methods:{
		toLogin(){

		}
	}
}
</script>

<style scoped lang="less">

</style>
