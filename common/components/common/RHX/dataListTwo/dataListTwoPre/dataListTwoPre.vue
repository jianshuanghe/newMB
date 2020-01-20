<template>
	<view class="body1">
		<view class="oneList" v-for="(item,index) in dataLists.dataList" :key="index" v-if="item.key !== '- -' || item.value !=='- -'">
			<view class="listkey">
				<span>{{item.key+':'}}</span>
			</view>
			<view class="listvalue">
				<span>{{item.value}}</span>
			</view>
		</view>
		<view class="fg" style="background:rgba(249,249,249,0.90);"></view>
	</view>
</template>

<script>
	export default{
		props:[
			'dataLists'
		],
		data(){
			return{
			}
		}
	}
</script>

<style>
	.body1{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.oneList{
		width: 92%;
		display: flex;
		align-items: center;
		height: 80upx;
		position: relative;
	}
	.listkey{
		color: #2E2E30;
		width: 100upx;
		font-size: 28upx;
		line-height: 28upx;
		letter-spacing: 0upx;
		font-weight: bold;
		font-family: PingFangSC-Medium;
	}
	
	/*value*/
	.listvalue{
		margin-left: 13.1%;
		position: absolute;
		color: #9B9B9B;
		font-size: 28upx;
		line-height: 32upx;
		letter-spacing: 0upx;
		font-family: PingFangSC-Regular;
	}
	.fg{
		width: 100%;
		height: 16upx;
		
	}
</style>
