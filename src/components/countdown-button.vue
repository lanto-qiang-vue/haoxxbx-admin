<template>
<div :class="['countdown-button', {[disableClass]: disable}]" @click="click">
{{showText}}
</div>
</template>

<script>
import { reg} from '@/util.js'
export default {
	name: "countdown-button",
	props:{
		seconds:{
			default: 60
		},
		text:{
			default: '获取验证码'
		},
		disableClass:{
			default: 'off'
		},
        phone:{
		    default:"",
        },
        url:{
		    default:"",
        },
        token:{
		    default:"",
        },
	},
	data(){
		return{
			timer: null,
			showText: '',
			disable: false,
		}
	},
	mounted(){
		this.showText= this.text
	},
	methods:{
		click(){
			if(!this.disable){
				if(reg.mobile.test(this.phone)){
					this.disable= true;
					this.axiosHxx.post(this.url,{telphone:this.phone, access_token: this.token}).then(res => {
						if(res.data.success){
							this.$toast('验证码已发送');
							this.$emit('click', res.data.data.telSession);
							this.startTimers();
						}else{
							this.enable()
						}
						// console.log(res)
					},(err)=>{
						this.enable();
					})
				}else{
					this.$toast('请输入正确手机号');
				}
			}
		},
		enable(){
			this.disable= false
		},
		startTimers(){
			let times= this.seconds
			this.disable= true
			this.showText= times+'s'
			this.timer = setInterval(()=>{
				times--
				this.showText= times+'s'
				if(times<=0){
					clearInterval(this.timer)
					this.showText= this.text
					this.disable= false
				}
			}, 1000)
		}
	}
}
</script>

<style scoped lang="less">

</style>
