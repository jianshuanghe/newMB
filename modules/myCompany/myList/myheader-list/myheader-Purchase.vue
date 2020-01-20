<template>
	<view class="myheader-Purchase">
		<view class="myheader-Purchase-biao">
			<view>定制您的供应关键词</view>
			<view>定制后更容易找到自己感兴趣的商机哦</view>
		</view>
		<view class="myheader-Purchase-box">
			<view class="myheader-Keyword-Tips">
				添加您的供应关键词
			</view>
			<view class="myheader-Purchase-industry">
				<div class="key-box" v-for="(item,index) in lists" :key="index">
					<view class="myheader-Purchase-Label" v-if="item">{{item}}<image :src="del" @tap="dele(index)"></image></view>
				</div>
				<view class="myheader-Purchase-Labela" v-if="hidens === '1'">
					<input type="text" maxlength="5" focus="true" v-model="edits" @blur="subs()"/>
				</view>
				<view class="myheader-Purchase-Labelss" @tap="adds()">
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
				lists:[],
				hidens:2,
				del:del,
				nums:0,
				edits:'',
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
			this.Purchase();
		},
		methods: {
			Purchase(){
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
							this.lists = response.data.content.instKeys
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
				this.lists.splice(e,1)
			},
			Preservation(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					if(this.lists.length===0){
						this.lists.push('')
						var params = {
							"instKeys":this.lists,
						}; // 请求总数居时 参数为空
					}else{
						var params = {
							"instKeys":this.lists,
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
							this.GET_MY.headers.instKeys = this.lists;
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
			adds(){
				this.hidens = '1';
				this.nums = '1';
				console.log('创建新标签');
			},
			subs(){
				if(this.edits === ''){ // 失脚时没有数据
					this.hidens = 2
				}else{ // 失焦时存在数据
					this.hidens = 2
					this.lists.push(this.edits);
					this.edits = '';
				}
			}
		}
	};
</script>

<style>
	.hiden{
		display: none;
	}
	.myheader-Purchase{
		width: 100%;
		min-height: 100%;
		background: #FFFFFF;
	}
	.myheader-Purchase-biao{
		width: 100%;
		height: 140upx;
		padding-top: 80upx;
		text-align: center;
		
	}
	.myheader-Purchase-biao>view:nth-of-type(1){
		font-size: 36upx;
		color: #2E2E30;
		font-weight: bold;
	}
	.myheader-Purchase-biao>view:nth-of-type(2){
		font-size: 24upx;
		color: #9B9B9B;
	}
	.myheader-Purchase-industry{
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
	.myheader-Purchase-Label{
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
	.myheader-Purchase-Label>image{
		width: 36upx;
		height: 36upx;
		top: -15upx;
		right: 0upx;
		position: absolute;
	}
	.myheader-Purchase-Labels{
		padding: 10upx 50upx 10upx 50upx;
		border: 2upx solid #E2E2E2;
		border-radius: 35upx;
		display: block;
		float: left;
		margin-left: 20upx;
		margin-top: 20upx;
		font-size: 26upx;
		color: #02C2A2;
	}.myheader-Purchase-Labela{
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
	}
	.myheader-Purchase-Labela>input{
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
	.myheader-Purchase-box{
		padding-bottom: 300upx;
	}

	.myheader-Purchase-Labelss{
		padding: 10upx 50upx 10upx 50upx;
		border: 2upx solid #E2E2E2;
		border-radius: 35upx;
		display: block;
		float: left;
		margin-left: 20upx;
		margin-top: 20upx;
		font-size: 26upx;
		color: #02C2A2;
	}
</style>
