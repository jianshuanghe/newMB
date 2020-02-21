<template>
	<view>
		<view class="bottomBtn">
			<view class="btn" @click="toNewsale">
				新建网点
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'createsale',
	components: {},
	data() {
		return {
			
		};
	},
	methods: {
		toNewsale(){
			console.log('kdfjskd')
			uni.navigateTo({
			    url: '/modules/myCompany/aftersale/newsale'
			});
		}
	},
	created() {
		
	}
}
</script>

<style>
	.bottomBtn{
		width: 100%;
		height: 120upx;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.btn{
		width: 92%;
		height: 90upx;
		background: #02C2A2;
		border-radius: 4upx;
		display: flex;
		justify-content: center;
		align-items: center;
		ont-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #FFFFFF;
		letter-spacing: 0;
	}
</style>
