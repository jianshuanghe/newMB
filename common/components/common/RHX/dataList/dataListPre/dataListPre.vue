<template>
	<view class="body1">
		<view class="oneList" v-for="(item,index) in dataLists.dataList" :key="index" v-if="item.key !== '- -' || item.value !=='- -'">
			<view class="listkey">
				<span>{{item.key}}</span>
			</view>
			<view class="listvalue">
				<span>{{item.value}}</span>
			</view>
		</view>
		<view class="fg" style="background:  rgba(249,249,249,0.90);"></view>
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
		width: 89.3%;
		display: flex;
		align-items: center;
		height: 108upx;
		border-bottom: 2upx solid #F5F5F5;
		position: relative;
	}
	.listkey{
		color: #9B9B9B;
		width: 180upx;
		font-size: 28upx;
		line-height: 36upx;
		letter-spacing: 0upx;
	}
	
	/*value*/
	.listvalue{
		margin-left: 30%;
		position: absolute;
		color: #000000;
		font-size: 28upx;
		line-height: 36upx;
		letter-spacing: 0upx;
	}
	.fg{
		width: 100%;
		height: 16upx;
		
	}
</style>
