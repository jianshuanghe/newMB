<template>
	<view class="myheader-interested">
		<view class="myheader-interested-biao">
			<view>选择感兴趣的行业</view>
			<view>选择后更容易找到自己感兴趣的商机哦</view>
		</view>
		<view class="myheader-interested-industry">
			<span class="myheader-interested-Label" v-for="(item,index) in list" :key="index" @tap="Choices(item)" :class="{'active': item.hiden}">{{item.typeName}}</span>
			<view class="both"></view>
		</view>
		<view class="myheader-btns">
			<view class="myheader-btn" @tap="Preservation()">保存</view>
		</view>
		
	</view>
</template>

<script>
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				list:[],
				selectedItem:[],
				selectedItems:[],
			};
		},
		components: {

		},
		computed: {
			i18n() {
				return this.$t('Mypersonal');
			},
			...mapGetters(['GET_HOME', 'QUICKNAVCO','GET_MY'])
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.i18n.title1
			});
		},
		created() {
			this.interested();
			
		},
		methods: {
			Choices(item){
				console.log(item)
				 if (item.hiden) {//不选中状态时点击
					item.hiden = false//变为选中状态
					
					const i = this.selectedItem.indexOf(item.id)//找到当前点击项
					console.log(i)
					this.selectedItem.splice(i, 1)//移除一个不选中项
					this.selectedItems.splice(i, 1)//移除一个不选中项
					console.log(this.selectedItem)
					console.log(this.selectedItems)
				  } else if (!item.hiden && this.selectedItems.length < 3) {//选中状态时点击
					item.hiden = true//变为不选中状态
					this.selectedItem.push(item.id)//更新数组（不选中项）
					let obj={
						induCode:item.id,
						induName:item.typeName
					}
					this.selectedItems.push(obj)//更新数组（不选中项）
					console.log(this.selectedItems)
				  }
			},
			Preservation(){//保存
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {
						"induCodes":this.selectedItem,
					}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/user/'+landRegistLG.user.id, //接口地址。
						data: params,
						method: 'POST',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.GET_MY.headers.induCodes = this.selectedItem;
							this.GET_MY.headers.induBeans = this.selectedItems;
							this.$store.commit('setMy', this.GET_MY.headers); // 更新vuex
							uni.navigateBack({});
							// this.$store.commit('setMation', this.List); // 更新vuex
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
			interested(){//获取感兴趣的行业
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/compIndustry/selectList', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.list=response.data.content
							this.list.forEach(item => {
								// console.log(item.id)
								// console.log(this.GET_MY.headers.induBeans.length)
								
								if(this.GET_MY.headers.induBeans.length == 1){
									if(item.id == this.GET_MY.headers.induBeans[0].induCode){
										this.$set(item, 'hiden', true)
										let obj={
											induCode:item.id,
											induName:item.typeName
										}
										this.selectedItems.push(obj)
									}else {
										this.$set(item, 'hiden', false)
									}
								}else if(this.GET_MY.headers.induBeans.length == 2||this.GET_MY.headers.induBeans.length == 1){
									if(item.id == this.GET_MY.headers.induBeans[1].induCode||item.id == this.GET_MY.headers.induBeans[0].induCode){
										this.$set(item, 'hiden', true)
										let obj={
											induCode:item.id,
											induName:item.typeName
										}
										this.selectedItems.push(obj)
									}else {
										this.$set(item, 'hiden', false)
									}
								}else if(this.GET_MY.headers.induBeans.length == 2||this.GET_MY.headers.induBeans.length == 3||item.id == this.GET_MY.headers.induBeans.length == 1){
									if(item.id == this.GET_MY.headers.induBeans[2].induCode||item.id == this.GET_MY.headers.induBeans[1].induCode||item.id == this.GET_MY.headers.induBeans[0].induCode){
										this.$set(item, 'hiden', true)
										let obj={
											induCode:item.id,
											induName:item.typeName
										}
										this.selectedItems.push(obj)
										let objs={
											induCode:item.id,
											induName:item.typeName,
										}
										this.selectedItem.push(objs)
										console.log(this.selectedItem)
									}else {
										this.$set(item, 'hiden', false)
									}
								}
								
							})
							console.log(this.GET_MY.headers.induBeans)
							console.log(this.selectedItem)
							console.log(this.selectedItems)
							// this.GET_MY.headers.content = this.desc;
							// this.$store.commit('setMy', this.GET_MY.headers); // 更新vuex
							// uni.navigateBack({});
							
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
	};
</script>

<style>
	.myheader-interested{
		width: 100%;
		min-height: 100%;
		background: #FFFFFF;
	}
	.myheader-interested-biao{
		width: 100%;
		height: 150upx;
		padding-top: 80upx;
		text-align: center;
		
	}
	.myheader-interested-biao>view:nth-of-type(1){
		font-size: 36upx;
		color: #2E2E30;
		font-weight: bold;
	}
	.myheader-interested-biao>view:nth-of-type(2){
		font-size: 24upx;
		color: #9B9B9B;
	}
	.myheader-interested-industry{
		width: 90%;
		min-height: 100upx;
		margin: 0 auto;
		padding-bottom: 140upx;
	}
	.myheader-interested-Label{
		padding: 10upx 50upx 10upx 50upx;
		border: 2upx solid #E2E2E2;
		border-radius: 35upx;
		display: block;
		float: left;
		margin-left: 20upx;
		margin-top: 20upx;
	}
	.active{
		background: #02c2a2;
		color: #FFFFFF!important;
	}
	.both{
		clear: both;
	}
	.myheader-btns{
		width: 100%;
		height: 120upx;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
	}
	.myheader-btn{
		width: 90%;
		height: 90upx;
		background: #02C2A2;
		margin: 80upx auto auto auto;
		text-align: center;
		line-height: 90upx;
		font-size: 32upx;
		color: #FFFFFF;
		position: fixed;
		bottom: 20upx;
		left: 5%;
	}
</style>
