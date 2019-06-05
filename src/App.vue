<template>
<div id="app">
	<router-view/>
	<div class="footer">
		Copyright &#169 2019 上海衡益网络技术有限公司.All Rights Reserved | 沪ICP备18016827号-1
	</div>
</div>
</template>

<script>

export default {
	name: "app-body",
	computed:{

	}
}
</script>

<style scoped lang="less">
#app{
	min-width: 800px;
	>*:not(.footer){
		min-height: 90vh;
	}
	.footer{
		height: 60px;
		line-height: 60px;
		text-align: center;
		color: #666666;
		font-size: 12px;
	}
}

</style>
