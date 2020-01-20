<template>
	<!-- 资讯 -->
	<view class="mybusiness-information">
		<view class="mybusiness-supply-con" v-for="(item,index) in lists" v-if="lists.lenght!=0" @tap="gotomyproducts(item)">
			<view class="mybusiness-supply-conone">
				<view class="mybusiness-supply-conone-zi" :class="item.bannerImg==''?'widtaaa':''">
					<view>{{item.instrucTitle}}</view>
					<view><span>资讯</span><span>{{item.updateTime}}</span></view>
				</view>
				<view class="mybusiness-supply-conone-tu" v-if="item.bannerImg!==''">
					<image :src="item.bannerImg"></image>
				</view>
			</view>
			<!-- 底部按钮 -->
			<view class="myproduct-list-edit">
				<view class="product-book-BA one">
					<image :src="look"></image>
					<span>{{item.pv}}</span>
				</view>
				<view class="product-book-BA">
					<image :src="phones"></image>
					<span>{{item.telCount}}</span>
				</view>
				<view class="product-book-BA">
					<image :src="liu"></image>
					<span>{{item.msgCnt}}</span>
				</view>
				<view class="product-book-BA">
					<image :src="zan"></image>
					<span>{{item.likeCn}}</span>
				</view>
				<view class="product-book-BA shou">
					<image :src="shou"></image>
					<span>{{item.followCount}}</span>
				</view>
				<view class="product-book-BA right shou">
					<image :src="fen"></image>
					<span>{{item.isShare}}</span>
				</view>
			</view>
		</view>
		<view class="meirenkanwo" v-if="lists.length === 0">
			<image :src="kong" mode=""></image>
			暂无！
		</view>
		<!-- 底部按钮 -->
		<view class="mybusiness-supply-bot">
			<view class="mybusiness-supply-Customer" @tap="phone(data.userPhone)" v-if="String(this.listid)!==String(this.id)">联系商家</view>
			<view class="mybusiness-supply-Customer" @tap="clickBasicInforEdit" v-if="String(this.listid)==String(this.id)">编辑</view>
			<!-- <view class="mybusiness-supply-contact">联系商家</view> -->
		</view>
	</view>
</template>

<script>
	import Location from '@/static/mbcImg/my/Image.png';
	//看過 電話 聊天 點讚..
	import zan from '@/static/mbcImg/my/zan.png';
	import look from '@/static/mbcImg/my/look.png';
	import phones from '@/static/mbcImg/my/phone.png';
	import liu from '@/static/mbcImg/my/liu.png';
	import shou from '@/static/mbcImg/my/shou.png';
	import fen from '@/static/mbcImg/my/fen.png';
	//結束
	import { mapMutations, mapGetters } from 'vuex';
	import kong from '@/static/mbcImg/my/kong.png';
	export default {
		data() {
			return {
				Location:Location,
				activeIndex:"0",
				lists:[],
				zan:zan,
				look:look,
				kong:kong,
				phones:phones,
				liu:liu,
				shou:shou,
				fen:fen,
			}
		},
		watch: {
			GET_MY: {
				handler(a, b) {
					console.log(a, b)
					this.lists = a.zi;
					console.log(this.lists)
				},
				deep: true
			},
		},
		computed: {
		  ...mapGetters(['GET_HOME', 'QUICKNAVCO','GET_MY'])
		},
		created(){
			let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
			
			this.id=landRegistLG.user.id;
			console.log(this.id,this.listid);
			this.inf();
		},
		props:['listid','data'],
		filters: {
			formatDate: function(value) {
				let date = new Date(value);
				let y = date.getFullYear();
				let MM = date.getMonth() + 1;
				MM = MM < 10 ? ('0' + MM) : MM;
				let d = date.getDate();
				d = d < 10 ? ('0' + d) : d;
				let h = date.getHours();
				h = h < 10 ? ('0' + h) : h;
				let m = date.getMinutes();
				m = m < 10 ? ('0' + m) : m;
				let s = date.getSeconds();
				s = s < 10 ? ('0' + s) : s;
				return y + '.' + MM + '.' + d ;
			}
		},
		methods:{
			clickBasicInforEdit() {
				console.log('基本信息编辑');
				uni.navigateTo({
					url:'/modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/editBasicInfor'
				})
			},
			phone(e){
				uni.makePhoneCall({
					phoneNumber:e//仅为示例
				});
			},
			getActive(index){
				this.activeIndex=index;
				this.$emit("changes",this.activeIndex);
			},
			gotomyproducts(e){
				if (!uni.getStorageSync('landRegist')) {
					this.landRegistra(); // 判断登录状态
				}else{
					console.log(e, '----------------e-跳转详情-----------------')
					let a = e.type;
					let b = e.id;
					let lookUserId = null;
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						lookUserId = landRegistLG.user.id;
					} else {
						lookUserId = uni.getStorageSync('UUID');
					};
					let urlParams = {
						isFlow: 0, // 平台来源
						tempType: 0, // 说明书类型
						orderType: 0, // 订单类型
						sourceTemp: 2, // 说明书来源
						aiListTemp: 1, // 是否展示ai
						id: e.tempId, // 模板id
						isMenu: e.isMenu, // 横向导航
						instrucId:  e.instrucId, // 说明书id
						lookUserId: lookUserId, // 浏览者
						creatorId: e.userId, // 说明书创建者
						instrucState: e.instrucState ,// 说明书状态
						instrucCustType: e.instrucCustType, // 模板类型
					}
					console.log(urlParams)
					uni.navigateTo({
						url: '/modules/createBusiness/templatePro/templatePro?urlParams=' + this.urlCrypto(urlParams, 0)
					});
				}
				
			},
			inf(){//资讯
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/instruc?userId='+this.listid+'&page=1&instrucCustType=2', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.zi = response.data.content.list
							this.$store.commit('setzi', this.zi);
							// this.lists = response.data.content.instKeys
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
				}else{
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/instruc?userId='+this.listid+'&page=1&instrucCustType=2', //接口地址。
						// data: params,
						method: 'GET',
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.zi = response.data.content.list
							this.$store.commit('setzi', this.zi);
							// this.lists = response.data.content.instKeys
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
		}
		
	}
</script>

<style>
	.mybusiness-information{
		width: 100%;
		min-height: 50%;
		background: #FFFFFF;
		padding-bottom: 120upx;
	}
	.mybusiness-information-box{
		width: 90%;
		height: 300upx;
		margin: 0 auto;
		border-bottom: 2upx solid #F5F5F5;
	}
	.mybusiness-supply-con{
		width: 90%;
		min-height: 250upx;
		margin: 0 auto;
		border-bottom: 2upx solid #F5F5F5;
		overflow: hidden;
	}
	.mybusiness-supply-conone{
		width: 100%;
		min-height: 140upx;
		margin-top: 40upx;
	}
	.widtaaa{
		width: 100%!important;
	}
	.mybusiness-supply-conone-zi{
		width: 60%;
		height: 100%;
		float: left;
	}
	.mybusiness-supply-conone-zi>view:nth-of-type(1){
		width: 100%;
		height: 80upx;
		font-size: 34upx;
		color: #2E2E30;
		line-height: 40upx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		
	}
	.mybusiness-supply-conone-zi>view:nth-of-type(2){
		width: 100%;
		height: 40upx;
		line-height: 40upx;
		margin-top: 16upx;
	}
	.mybusiness-supply-conone-zi>view:nth-of-type(2)>span:nth-of-type(1){
		border: 2upx solid #3893FF;
		border-radius: 4upx;
		width: 52upx;
		height: 28upx;
		font-size: 20upx;
		color: #3893FF;
		text-align: center;
		line-height: 28upx;
	}
	.mybusiness-supply-conone-zi>view:nth-of-type(2)>span:nth-of-type(2){
		font-size: 22upx;
		color: #9B9B9B;
		margin-left: 10upx;
	}
	.mybusiness-supply-conone-zis{
		width: 100%;
		height: 100%;
		float: left;
	}
	.mybusiness-supply-conone-zis>view:nth-of-type(1){
		width: 100%;
		height: 80upx;
		font-size: 34upx;
		color: #2E2E30;
		line-height: 40upx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		
	}
	.mybusiness-supply-conone-zis>view:nth-of-type(2){
		width: 100%;
		height: 40upx;
		line-height: 40upx;
		padding-left: 12upx;
		margin-top: 40upx;
	}
	.mybusiness-supply-conone-zis>view:nth-of-type(2)>span:nth-of-type(1){
		border: 2upx solid #3893FF;
		border-radius: 4upx;
		padding: 6upx 6upx 6upx 6upx;
		font-size: 20upx;
		color: #3893FF;
	}
	.mybusiness-supply-conone-zis>view:nth-of-type(2)>span:nth-of-type(2){
		font-size: 22upx;
		color: #9B9B9B;
		margin-left: 10upx;
	}
	.mybusiness-supply-conone-tu{
		width: 226upx;
		height: 166upx;
		float: right;
		border-radius: 4upx;
	}
	.mybusiness-supply-conone-tu>image{
		width: 100%;
		height: 100%;
	}
	.mybusiness-supply-bot{
		width: 100%;
		height: 120upx;
		border-top: 2upx solid #F5F5F5;
		position: fixed;
		bottom: 0;
		background: #FFFFFF;
	}
	.mybusiness-supply-Customer{
		width: 95%;
		height:90upx ;
		background: #02C2A2;
		margin: 15upx auto;
		border-radius: 2px;
		font-size: 32upx;
		color: #FFFFFF;
		text-align: center;
		line-height: 90upx;
	}
	.myproduct-list-edit{
		width: 100%;
		height: 60upx;
	}
	.product-book-BA{
		width: 13.5%;
		height: 26upx;
		margin-top: 20upx;
		line-height: 26upx;
		font-size: 24upx;
		color: #9B9B9B;
		border-right: 2upx solid #E2E2E2;
		float: left;
		margin-left: 22upx;
	}
	.right{
		border: 0;
	}
	.one{
		margin-left: 0;
	}
	.shou>image{
		width: 24upx!important;
		height: 24upx!important;
		margin-top: 0upx !important;
	}
	.product-book-BA>image{
		width: 24upx;
		height: 20upx;
		margin-top: 2upx;
		display: block;
		float: left;
	}
	.product-book-BA>span{
		margin-left: 10upx;
		display: block;
		float: left;
	}
	.meirenkanwo{
		width: 330upx;
		height: 280upx;
		display: block;
		margin: 0 auto auto auto;
		font-size: 28upx;
		text-align: center;
		color: #9B9B9B;
		clear: both;
	}
	.meirenkanwo>image {
		width: 92%;
		height: 80%;
		padding-top: 120upx;
	}
</style>
