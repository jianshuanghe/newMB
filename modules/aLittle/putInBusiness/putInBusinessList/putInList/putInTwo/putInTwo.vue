<template>
	<div class="putIn-content">
		<!-- 已选择1个说明书、创建商机 -->
		<div class="title-items">
			<!-- 已选择 <text class="num">5</text> 个说明书 -->
			<!-- <text class="createBusiness">+ 创建新商机</text> -->
		</div>
		<!-- 列表list -->
		<div class="items-list">
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="loadMore"
			@scroll="scroll">
				<view class="scrollContent">
					<putInFrom v-on:AreaChange="AreaChange" v-on:eChange="eChange"></putInFrom>
				</view>
			</scroll-view>
		</div>
		<!-- 返回上一步、提交审核 -->
		<div class="backOrSubmit">
			<div class="back left" @tap="Return()">返回上一步</div>
			<div class="submit left" @tap="Submit()">提交审核</div>
			<div class="clear"></div>
		</div>
	</div>
</template>

<script>
	import putInFrom from './putInFrom'
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		components: {
		  putInFrom
		},
		data() {
			return {
				isBanner:'',
				isGoogle:'',//谷歌
				isBaidu:'',//百度
				isToutiao:'',//头条
				instrucId:[],
			}
		},
		props: {
		},
		methods: {
			Return(){
				this.$emit('putInstates', '1');
				this.$emit('putIn', '1');
			},
			AreaChange(val){
				console.log(val)
				if(val[0]==0){
					this.isBanner=1;//banner位置
				}else if(val[0]==1){
					this.isBanner=0;//不限位置
				}
				console.log(this.isBanner)
				this.instrucId=val[1];
				console.log(this.instrucId)
			},
			eChange(val){
				// if(val[0]==1||val[1]==1||val[2]==1){
				// 	console.log('选择头条')
				// 	console.log('选择百度')
				// 	console.log('选择谷歌')
				// }else if(val[0]==2||val[1]==2||val[2]==2){
				// 	console.log('选择百度')
				// }else if(val[0]==3||val[1]==3||val[2]==3){
				// 	console.log('选择谷歌')
				// }
				if(val.length==3){
					console.log('全选')
					this.isGoogle=1;//谷歌
					this.isBaidu=1;//百度
					this.isToutiao=1;//头条
				}else if(val.length==2){
					console.log('选择两个')
					if(val[0]==1&&val[1]==2){
						console.log('第一个是头条')
						console.log('第二个是百度')
						this.isGoogle=0;//谷歌
						this.isBaidu=1;//百度
						this.isToutiao=1;//头条
					}else if(val[0]==1&&val[1]==3){
						console.log('第一个是头条')
						console.log('第二个是谷歌')
						this.isGoogle=1;//谷歌
						this.isBaidu=0;//百度
						this.isToutiao=1;//头条
					}else if(val[0]==2&&val[1]==3){
						console.log('第一个是百度')
						console.log('第二个是谷歌')
						this.isGoogle=1;//谷歌
						this.isBaidu=1;//百度
						this.isToutiao=0;//头条
					}
				}else if(val.length==1){
					console.log('选择一个')
					if(val==1){
						console.log('选择头条')
						this.isGoogle=0;//谷歌
						this.isBaidu=0;//百度
						this.isToutiao=1;//头条
					}else if(val==2){
						console.log('选择百度')
						this.isGoogle=0;//谷歌
						this.isBaidu=1;//百度
						this.isToutiao=0;//头条
					}else if(val==3){
						console.log('选择谷歌')
						this.isGoogle=1;//谷歌
						this.isBaidu=0;//百度
						this.isToutiao=0;//头条
					}
				}
				
			},
			Submit(){
				console.log(this.isBanner)
				if(this.isBanner===''){
					uni.showToast({
						title: '请选择投放位置',
						icon: 'none',
						duration: 1000
					});
				}else if(this.isGoogle==''&&this.isBaidu==''&&this.isToutiao==''){
					uni.showToast({
						title: '请选择流量来源',
						icon: 'none',
						duration: 1000
					});
				}else{
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						let params={
							userId:landRegistLG.user.id,
							isBanner:this.isBanner,
							isGoogle:this.isGoogle,
							isBaidu:this.isBaidu,
							isToutiao:this.isToutiao,
							instIds:this.instrucId,
						}
						console.log(params)
						uni.request({
							url: this.api2 + '/rest-rp/putIn/putInAddDO', //接口地址。
							data: params,
							method: 'POST',
							header: {
								Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
							},
							success: response => {
								console.log(response.data);
								if(response.data.ret==200){
									this.quanxuan();
									
								}else if(response.data.ret==400){
									uni.showToast({
										title: response.data.msg,
										icon: 'none',
										duration: 1000
									});
								}
							},
							fail: error => {
								console.log(error, '网络繁忙，请稍后');
							}
						});
					}
				}
				
			},
			quanxuan(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {
						page:String(1),
						userId:landRegistLG.user.id,
					}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/putIn/selectInstList', //接口地址。
						data: params,
						method: 'POST',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.putInBusinessData=response.data.content.list
							// this.list = response.data.content
							this.$store.commit('setputInBusinessData', this.putInBusinessData); // 更新vuex
							var _this = this;
							uni.setStorage({
								key: 'Cumulative',//累计投放商机
								data: _this.putInBusinessData,
								success: function() {
									console.log('success');
								}
							});
							if(response.data.ret==200){
								uni.navigateTo({
									url:'/modules/aLittle/putInBusiness/putInBusiness?id=1',
								})
							}
						},
						fail: (error) => {
							uni.hideLoading(); // 隐藏 loading
							uni.showToast({
								title: '网络繁忙，请稍后',
								icon: 'none',
								duration: 1000
							});
							console.log(error, '网络繁忙，请稍后');
						}
					});
				}
			},
			Ltoufan(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {
						page:String(1),
						userId:landRegistLG.user.id,
					}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/putIn/selectInstList', //接口地址。
						data: params,
						method: 'POST',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.putInBusinessData=response.data.content.list
							// this.list = response.data.content
							this.$store.commit('setputInBusinessData', this.putInBusinessData); // 更新vuex
							if(response.data.ret==200){
								uni.navigateTo({
									url:'/modules/aLittle/putInBusiness/putInBusiness?id='+e,
								})
							}
						},
						fail: (error) => {
							uni.hideLoading(); // 隐藏 loading
							uni.showToast({
								title: '网络繁忙，请稍后',
								icon: 'none',
								duration: 1000
							});
							console.log(error, '网络繁忙，请稍后');
						}
					});
				}
			}
		}
	}
</script>

<style>
	.scroll-Y {
		height: 90vh;
		padding-bottom: 90upx;
	}
	
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}
	.uni-scroll-view{
		height: 82vh;
	}
	.scroll-view-item {
		height: 82vh;
		line-height: 300upx;
		text-align: center;
		font-size: 36upx;
	}
	
	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
		height: 300upx;
		line-height: 300upx;
		text-align: center;
		font-size: 36upx;
	}
	.loading-more {
		align-items: center;
		justify-content: center;
		padding-top: 20upx;
		padding-bottom: 50upx;
		text-align: center;
	}
	.loading-more-text {
		font-size: 28upx;
		color: #999;
	}
	.scrollContent{
		padding-bottom: 35vh;
	}
	.putIn-content{
		position: fixed;
		width: 100vw;
		margin-top: 2vw;
	}
	.title-items{
		position: relative;
		width: 100%;
		padding: 3vw;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		letter-spacing: 0;
		line-height: 46upx;
		background: #fff;
	}
	.num{
		color: #02C2A2;
	}
	.createBusiness{
		color: #02C2A2;
		float: right;
	}
	.items-list{
		position: relative;
	}
	.backOrSubmit{
		position: fixed;
		bottom: 0;
		width: 100%;
		background: rgba(255,255,255,0.90);
		box-shadow: 0 -1px 0 0 #F5F5F5;
	}
	.back{
		width: 50%;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #030303;
		letter-spacing: 0;
		text-align: center;
		line-height: 100upx;
		background: #fff;
	}
	.submit {
		width: 50%;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
		text-align: center;
		line-height: 100upx;
		background-image: linear-gradient(-134deg, #57D6CF 0%, #15D49F 100%);
	}
	.next{
		position: fixed;
		bottom: 0;
		width: 100%;
		background: #fff;
		padding: 2vw 3vw;
	}
	.next>p{
		font-family: PingFangSC-Regular;
		font-size: 32upx;
		color: #FFFFFF;
		letter-spacing: 0;
		text-align: center;
		line-height: 90upx;
		background: #02C2A2;
	}
	
</style>
