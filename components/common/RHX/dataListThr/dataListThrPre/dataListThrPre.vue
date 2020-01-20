<template>
	<view class="body1 table" >
		<view class="oneList" v-for="(item,index) in dataLists.dataList" :key="index" v-if="item.key !== '- -' || item.value !=='- -'">
			<view class="listkey">
				<span>{{item.key}}</span>
			</view>
			<view class="listvalue">
				<span>{{item.value}}</span>
			</view>
		</view>
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
	.table{
		border: 1upx solid #D2D2D2;
		border-radius: 4upx;
		width: 82.4%;
		margin-left: 40upx;
	}
	.oneList{
		display: flex;
		align-items: center;
		height: 80upx;
		position: relative;
		width: 100%;
		border-bottom: 1upx solid #D2D2D2;
		font-family: PingFangSC-Light;
	}
	.listkey{
		width: 200upx;
		height: 100%;
		color: #9B9B9B;
		margin-left: 20upx;
		font-size: 28upx;
		border-right: 1upx solid #D2D2D2;
		display: flex;
		align-items: center;
	}
	.listvalue{
		height: 100%;
		display: flex;
		align-items: center;
		margin-left: 19upx;
		color: #2E2E30;
		font-size: 28upx;
	}
</style>
