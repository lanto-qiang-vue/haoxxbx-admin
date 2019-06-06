<template>
<div class="main">
	<div class="header">
	<div class="center">
		<img class="logo" src="~@/assets/img/hoxiuxiu-logo.png"/>

		<div class="right">
			您好，<b>中国人寿保险公司</b>
			<a>修改密码</a> |
			<a>退出</a>
		</div>
	</div>
	</div>
	<div class="body">
		<h1>{{title}}</h1>
		<router-view></router-view>
	</div>
	<foot></foot>
</div>
</template>

<script>
import Foot from '@/components/Footer.vue'
export default {
	name: "main-body",
	components: { Foot},
	computed:{
		title(){
			// console.log(this.$route)
			return this.$route.meta.name
		}
	},
	mounted(){
		console.log(this.$route)
	}
}
</script>

<style scoped lang="less">
.main{
	background-color: #FAFAFA;
	.header{
		background-color: white;
		border-bottom: 2px solid #064998;
		text-align: center;
		.center{
			max-width: 1200px;
			display: inline-block;
			padding: 0 10px;
			line-height: 60px;
			height: 60px;
			text-align: left;
			width: 100%;
			.logo{
				height: 40px;
				vertical-align: middle;
			}
			.right{
				float: right;
				font-size: 14px;
				color: #333333;
				b{
					font-size: 16px;
					font-weight: 600;
					color: black;
					padding: 0 10px;
					margin-right: 20px;
				}
				a{
					display: inline-block;
					margin: 0 5px;
				}
			}
		}
	}
	.body{
		background-color: white;
		margin: 10px 20px;
		min-height: 600px;
		overflow: hidden;
		>h1{
			font-size: 30px;
			text-align: center;
			font-weight: 400;
			line-height: 50px;
			margin: 20px 0;
		}
	}
}
</style>
