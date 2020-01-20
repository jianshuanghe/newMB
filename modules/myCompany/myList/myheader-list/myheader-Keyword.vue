<template>
	<view class="myheader-Keyword">
		<view class="myheader-Keyword-biao">
			<view>定制您的采购关键词</view>
			<view>定制后更容易找到自己感兴趣的商机哦</view>
		</view>
		<view class="myheader-Keyword-box">
			<view class="myheader-Keyword-Tips">
				添加您的采购关键词
			</view>
			<view class="myheader-Keyword-industry">
				<div class="key-box" v-for="(item,index) in list" :key="index">
					<view class="myheader-Keyword-Label" v-if="item">{{item}}<image :src="del" @tap="dele(index)"></image></view>
				</div>
				<view class="myheader-Keyword-Labela" v-if="hiden === '1'">
					<input type="text" maxlength="5" focus="true" v-model="edit" @blur="sub()"/>
				</view>
				<view class="myheader-Keyword-Labels" @tap="add()">
					+添加
				</view>
			</view>
		</view>
		
		<view class="myheader-btn" @tap="Preservation()">保存</view>
	</view>
</template>

<script>
	import { mapMutations, mapGetters } from 'vuex';
	import del from '@/static/mbcImg/my/del.png'
	export default {
		data() {
			return {
				list:[],
				del:del,
				hiden:2,
				num:0,
				edit:'',
				blurType: '1', // 代表默认失去焦点事件，2代表点击添加时失去焦点事件
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
			this.Keyword();
		},
		methods: {
			Keyword(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/user/'+landRegistLG.user.id, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.list = response.data.content.purcKeys
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
			dele(e){
				console.log(e)
				this.list.splice(e,1)
				console.log(this.list)
			},
			Preservation(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					if(this.list.length===0){
						this.list.push('')
						var params = {
							"purcKeys":this.list,
						}; // 请求总数居时 参数为空
					}else{
						var params = {
							"purcKeys":this.list,
						}; // 请求总数居时 参数为空
					}
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
							this.GET_MY.headers.purcKeys = this.list;
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
			add(){
				this.hiden = '1';
				this.num = '1';
				console.log(this.list)
			},
			
			sub(){
				if(this.edit === ''){ // 失脚时没有数据
					this.hiden = 2
				}else{ // 失焦时存在数据
					this.hiden = 2;
					console.log('创建新标签');
					
					this.list.push(this.edit);
					this.edit = '';
				}
			},
		}
	};
</script>

<style>
	.hiden{
		display: none;
	}
	.myheader-Keyword{
		width: 100%;
		min-height: 100%;
		background: #FFFFFF;
	}
	.myheader-Keyword-biao{
		width: 100%;
		height: 140upx;
		padding-top: 80upx;
		text-align: center;
		
	}
	.myheader-Keyword-biao>view:nth-of-type(1){
		font-size: 36upx;
		color: #2E2E30;
		font-weight: bold;
	}
	.myheader-Keyword-biao>view:nth-of-type(2){
		font-size: 24upx;
		color: #9B9B9B;
	}
	.myheader-Keyword-industry{
		width: 90%;
		min-height: 100upx;
		margin: 20upx auto;
		
	}
	.myheader-Keyword-Tips{
		width: 84%;
		height: 40upx;
		margin: 0 auto;
		font-size: 28upx;
		color: #2E2E30;
	}
	.myheader-Keyword-Label{
		padding: 10upx 50upx 10upx 50upx;
		border: 2upx solid #E2E2E2;
		border-radius: 35upx;
		display: block;
		float: left;
		margin-left: 20upx;
		margin-top: 20upx;
		font-size: 26upx;
		position: relative;
	}
	.myheader-Keyword-Label>image{
		width: 36upx;
		height: 36upx;
		top: -15upx;
		right: 0upx;
		position: absolute;
	}
	.myheader-Keyword-Labels{
		padding: 10upx 50upx 10upx 50upx;
		border: 2upx solid #E2E2E2;
		border-radius: 35upx;
		display: block;
		float: left;
		margin-left: 20upx;
		margin-top: 20upx;
		font-size: 26upx;

		color: #FAB000;
	}.myheader-Keyword-Labela{
		padding: 10upx 50upx 10upx 50upx;
		border: 2upx solid #E2E2E2;
		border-radius: 35upx;
		display: block;
		float: left;
		margin-left: 20upx;
		margin-top: 20upx;
		font-size: 26upx;
		color: #02C2A2;
		width: 130upx;
		height: 45upx;
		line-height: 45upx;
		position: relative;
	}
	.myheader-Keyword-Labela>input{
		width: 100%;
		height: 100%;
	}
	.myheader-btn{
		width: 90%;
		height: 90upx;
		background: #02C2A2;
		text-align: center;
		line-height: 90upx;
		font-size: 32upx;
		color: #FFFFFF;
		position:fixed;
		bottom: 20upx;
		left: 5%;
	}
	.myheader-Keyword-box{
		padding-bottom: 300upx;
	}
	.topsss{
		width: 84%;
		height: 40upx;
		/* margin: 40upx auto auto!important; */
		/* margin-top: 100upx; */
		margin: 0upx auto auto auto;
		padding-top: 80upx;
		font-size: 28upx;
		color: #2E2E30;
		clear: both;
	}
	.myheader-Keyword-Labelss{
		padding: 10upx 50upx 10upx 50upx;
		border: 2upx solid #E2E2E2;
		border-radius: 35upx;
		display: block;
		float: left;
		margin-left: 20upx;
		margin-top: 20upx;
		font-size: 26upx;
		color: #FAB000;
	}
</style>
