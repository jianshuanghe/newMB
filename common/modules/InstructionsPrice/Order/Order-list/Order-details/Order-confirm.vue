<template>
	<view class="Order-confirm">
		<view class="news-system-title">
			<div class="quickBtn-Fd left">
			  <quickBtn></quickBtn>
			</div>
			<!-- 系统通知 -->
			<div class="search-Fd left">
				确认定制信息
			</div>
		</view>
		<view class="tian"></view>
		<view class="Order-details-A">
			<view>提醒：进行操作前请确认您已收到买家的货款或者您与买家已达成协议，平台对买家是否支付货款不做监督。</view>
		</view>
		<view class="Supply-order-list" @tap="gotodetails(item.id)">
			<!-- 标品 -->
			<!-- <image :src="biao" class="Supply-order-tu" v-if="item.orderType == 1"></image> -->
			<!-- 定制 -->
			<image class="Supply-order-tu" :src="ding"></image>
			<view class="Supply-order-listA">
				<view>订单号:{{list.orderOrder}}</view>
				<view v-if="list.orderState == 0">待确认</view>
				<view v-if="list.orderState == 1" style="color: #02C2A2;">待发货</view>
				<view v-if="list.orderState == 2" style="color: #02C2A2;">待收货</view>
				<view v-if="list.orderState == 3" style="color: #FF4D6A;">已完成</view>
				<view v-if="list.orderState == 4" style="color: #2E2E30;">已关闭</view>
			</view>
			<view class="Supply-order-listB">
				<view class="Supply-order-listB-img">
					<image :src="list.bannerImg" mode=""></image>
				</view>
				<view class="Supply-order-listB-zi">
					<view>{{list.instrucTitle}}</view>
					<view>{{list.moneyStr}}&nbsp;&nbsp;X{{list.orderSpCount}}</view>
					<view>订单总额约：<span>￥{{list.orderSpMoney}}</span></view>
				</view>
			</view>
		</view>
		<view class="Order-confirm-header">
			<view class="Order-confirm-heaA">定制信息</view>
			<view class="Order-confirm-heaB" v-for="(item,index) in thid" :key="index">
				<view>{{item.iconTitle}}</view>
				<view class="Order-confirm-heaB-ji" v-for="(ite,index) in item.dataList" :key="index" v-if="item.iconTitle=='基本信息'">
					<view>{{ite.key1}}</view>
					<view>{{ite.value}}</view>
					<view>{{ite.key1}}</view>
				</view>
				<view class="Order-confirm-heaB-img"  v-if="item.iconTitle=='图片选择'">
					<view v-for="(ite,index) in item.dataList" :key="index">
						<image :src="ite.imgUrl"></image>
						<view><span>{{ite.title}}</span><image :src="selectEd" v-if="ite.select==true"></image><image :src="select" v-if="ite.select==false"></image></view>
					</view>
				</view>
				<view class="Order-confirm-heaB-yang" v-if="item.iconTitle=='样式选择'"  v-for="(ite,index) in item.dataList" :key="index">
					<view class="Order-confirm-heaB-yangss">
						<image :src="ite.imgUrl" mode=""></image>
					</view>
					<view class="Order-confirm-heaB-right">
						<view><span>{{ite.title}}</span><image :src="selectEd" v-if="ite.select==true"></image><image :src="select" v-if="ite.select==false"></image></view>
						<view>{{ite.content3}}</view>
					</view>
				</view>
				<view class="Order-confirm-heaB-shu" v-if="item.iconTitle=='采购数量'" v-for="(ite,index) in item.dataList" :key="index">
					<view>{{ite.key}}</view>
					<view>+</view>
					<view>{{ite.count}}</view>
					<view>一</view>
				</view>
				<view class="Order-confirm-heaB-pinck" v-if="item.iconTitle=='添加照片'">
					<image :src="ite.imgUrl" v-for="(ite,index) in item.dataList" :key="index" v-if='item.dataList.length!==0'></image>
					<span v-if='item.dataList.length==0'>暂无图片</span>
				</view>
				<view class="Order-confirm-heaB-con" v-if="item.iconTitle=='备注说明'">
					{{item.content || '暂无备注消息'}}
				</view>
			</view>
		</view>
		<view class="Order-confirm-heaC">
			<view class="Order-confirm-heaC-con">
				<view class="Order-confirm-heaC-conA">物流</view>
				<view class="Order-confirm-heaC-conB">
					<view>
						<provinceCity
						column="-2" 
						v-on:clickCity="clickCity"
						></provinceCity>
						<image :src="right" mode=""></image>
					</view>
					<view>至</view>
					<view>{{list.receivPcodeStr}}{{list.receivCcodeStr}}<image :src="right" mode=""></image></view>
				</view>
				<view class="Order-confirm-heaC-conC">
					<view>需</view>
					<view><input type="text" v-model="money" placeholder="请输入物流费用" maxlength="7" placeholder-style="color: #D2D2D2;"/></view>
					<view>元</view>
				</view>
				<view class="Order-confirm-heaC-conD">
					注：此处的物流费用会向买家展示，请填写预估比较准确的物流费用。具体以双方约定的物流费用为准。
				</view>
			</view>
		</view>
		<view class="Order-confirm-heaD">
			<view>备注说明</view>
			<view><input type="text" placeholder="可填写您的特殊要求" v-model="beizhu"/></view>
		</view>
		<view class="tians"></view>
		<view class="Order-confirm-hea-footer" @tap="add()">
			提交订单
		</view>
	</view>
</template>

<script>
	import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
	import navigation from "@/components/mbbo/navigation/navigation.vue";
	import provinceCity from '@/components/common/provinceCity/provinceCity.vue';
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				list: [],
				thid:[],
				ding: this.Static+'my/ding.png',
				id:'',
				select: this.Static+'my/select.png',
				selectEd: this.Static+'my/selectEd.png',
				right: this.Static+'my/right.png',
				money:'',
				beizhu:'',
				arr:[],
			}
		},
		components: {
			quickBtn,
			navigation,
			provinceCity,
		},
		computed: {
			i18n () {
			  return this.$t('Howtoshow')  
			},
			...mapGetters(['GET_HOME', 'QUICKNAVCO'])
		},
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
				return y + '-' + MM + '-' + d +' ' + h + ':' + m + ':' + s; 
			}
		},
		onLoad:function(options){
			this.id = options.id
			this.details();
			console.log(this.arr)
		},
		created(){
			// this.details();
		},
		methods:{
			clickCity:function(clickCity){
				this.arr=clickCity
				console.log(this.arr)
			},
			add(){
				if(this.arr.cityText==undefined){
					uni.showToast({
						title: '请选择发货地',
						icon: 'none',
						duration: 1000
					});
				}else if(this.money==''){
					uni.showToast({
						title: '请输入物流费用',
						icon: 'none',
						duration: 1000
					});
				}else if(!/^[0-9]*$/.test(this.money)){
					uni.showToast({
						title: '运费格式有误',
						icon: 'none',
						duration: 1000
					});
				}else{
					if (uni.getStorageSync('landRegist')) {
						let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
						console.log(landRegistLG.user.id);
						let params = {
							state:'1',
							expressPcode:this.arr.pcode,
							expressCcode:this.arr.ccode,
							orderYfMoney:this.money,
							content:this.beizhu,
							orderUser:String(landRegistLG.user.id),
							//0卖家 1买家
							"orderUserType":"0",
						}; // 请求总数居时 参数为空
						uni.showLoading({ // 展示loading
							title: '加载中'
						});
						uni.request({
							url: this.api2 + '/rest-rp/order/updateOrderState?orderId=' + this.id, //接口地址。
							data: params,
							method: 'POST',
							header: {
								Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
							},
							success: (response) => {
								uni.hideLoading();
								console.log(response.data);
								if(response.data.ret==200){
									uni.navigateBack({})
								}
								// this.$store.commit('setSupply', this.gong);
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
				}
				
			},
			details(){
				console.log(this.id)
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/order/selectOrderInfo?orderId=' + this.id, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.list = response.data.content
							this.thid = response.data.content.context.custModules
							console.log(this.thid)
							// this.$store.commit('setSupply', this.gong);
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
	.Order-confirm{
		width: 100%;
		min-height: 100%;
		
	}
	.tian{
		width: 100%;
		height: 88upx;
	}
	.news-system-title{
		width: 100%;
		height: 88upx;
		background: #FFFFFF;
		border-bottom: 2upx solid #F5F5F5;
		position: fixed;
		top: 0;
		z-index: 999;
	}
	.quickBtn-Fd{
		width: 5%;
		margin-left: 38upx;
	}
	.search-Fd{
		position: relative;
		width: 23%;
		margin-left: 40%;
		text-align: center;
		line-height: 88upx;
		font-size: 28upx;
		color: #2E2E30;
		float: left;
	}
	.Supply-order-list{
		width: 100%;
		height: 340upx;
		background: #FFFFFF;
		/* margin-top: 40upx; */
		position: relative;
	}
	.Supply-order-tu{
		left: 0;
		top: 0;
		width: 100upx;
		height: 100upx;
		position: absolute;
	}
	.Supply-order-listA{
		width: 100%;
		height: 96upx;
		border-bottom: 2upx solid #F5F5F5;
		
	}
	.Order-details-A{
		width: 100%;
		height: 120upx;
		background: #FEEEC7;
		
	}
	.Order-details-A>view{
		width: 90%;
		margin: 0 auto;
		font-size: 24upx;
		color: #FAB100;
		line-height: 36upx;
		padding-top: 24upx;
	}
	.Supply-order-listA>view:nth-of-type(1){
		font-size: 32upx;
		color: #2E2E30;
		line-height: 96upx;
		padding-left: 70upx;
		float: left;
	}
	.Supply-order-listA>view:nth-of-type(2){
		font-size: 32upx;
		color: #FAB100;
		line-height: 96upx;
		padding-right: 30upx;
		float: right;
	}
	.Supply-order-listB{
		width: 90%;
		min-height: 234upx;
		margin: 0 auto;
		overflow: hidden;
	}
	.Supply-order-listB-img{
		width: 168upx;
		height: 174upx;
		margin-top: 44upx;
		float: left;
	}
	.Supply-order-listB-img>image{
		width: 100%;
		height: 100%;
	}
	.Supply-order-listB-zi{
		width: 72%;
		height: 174upx;
		float: right;
		margin-top: 44upx;
		position: relative;
	}
	.Supply-order-listB-zi>view:nth-of-type(1){
		font-size: 28upx;
		color: #2E2E30;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.Supply-order-listB-zi>view:nth-of-type(2){
		font-size: 28upx;
		color: #9B9B9B;
	}
	.Supply-order-listB-zi>view:nth-of-type(3){
		font-size: 28upx;
		color: #9B9B9B;
		position: absolute;
		bottom: 0;
	}
	.Supply-order-listB-zi>view:nth-of-type(3)>span{
		color: #FF4D6A;
	}
	.Supply-order-listC{
		width: 90%;
		height: 136upx;
		margin: 0 auto;
		overflow: hidden;
	}
	.Supply-order-listC>view{
		font-size: 28upx;
		color: #9B9B9B;
	}
	.Supply-order-listC>view:nth-of-type(1){
		margin-top: 18upx;
	}
	.Order-confirm-header{
		width: 100%;
		min-height:200upx;
		background: #FFFFFF;
		margin-top: 20upx;
	}
	.Order-confirm-heaA{
		font-size: 32upx;
		color: #2E2E30;
		font-weight: bold;
		padding-top: 30upx;
		padding-left: 30upx;
	}
	.Order-confirm-heaB{
		width: 92%;
		margin: 50upx auto;
		min-height: 160upx;
	}
	.Order-confirm-heaB>view:nth-of-type(1){
		font-size: 28upx;
		color: #2E2E30;
		font-weight: bold;
	}
	.Order-confirm-heaB-ji{
		width: 100%;
		height: 80upx;
		margin-top: 20upx;
		position: relative;
	}
	.Order-confirm-heaB-ji>view:nth-of-type(1){
		font-size: 28upx;
		color: #2E2E30;
		float: left;
		line-height: 80upx;
	}
	.Order-confirm-heaB-ji>view:nth-of-type(2){
		width: 400upx;
		height: 78upx;
		border: 2upx solid #D2D2D2;
		border-radius: 4upx;
		font-size: 26upx;
		color: #BDBDBD;
		float: left;
		line-height: 80upx;
		position: absolute;
		left: 19%;
		top: 0;
		padding-left: 20upx;
	}
	.Order-confirm-heaB-ji>view:nth-of-type(3){
		font-size: 28upx;
		color: #2E2E30;
		float: right;
		line-height: 80upx;
		/* margin-right: 64upx; */
	}
	.Order-confirm-heaB-img{
		width: 100%;
		height: 200upx;
		display: flex;
		justify-content: space-between;
		margin-top: 20upx;
	}
	.Order-confirm-heaB-img>view{
		width: 25%;
		height: 100%;
		text-align: center;
	}
	.Order-confirm-heaB-img>view>image:nth-of-type(1){
		width: 100%;
		height: 160upx;
	}
	.Order-confirm-heaB-img>view>view{
		font-size: 24upx;
		color: #2E2E30;
	}
	.Order-confirm-heaB-img>view>view>span{
		display: block;
		float: left;
		margin-left: 40upx;
	}
	.Order-confirm-heaB-img>view>view>image{
		width: 26upx;
		height: 26upx;
		display: block;
		float: left;
		padding-top: 6upx;
		margin-left: 6upx;
	}
	.Order-confirm-heaB-yang{
		width: 100%;
		height: 148upx;
		margin-top: 20upx;
	}
	.Order-confirm-heaB-yangss{
		width: 160upx;
		height: 100%;
		float: left;
	}
	.Order-confirm-heaB-yangss>image{
		width: 100%;
		height: 100%;
	}
	.Order-confirm-heaB-right{
		width: 73%;
		height: 100%;
		float: right;
	}
	.Order-confirm-heaB-right>view:nth-of-type(1){
		font-size: 13px;
		color: #2E2E30;
	}
	.Order-confirm-heaB-right>view:nth-of-type(1)>span{
		display: block;
		float: left;
	}
	.Order-confirm-heaB-right>view:nth-of-type(1)>image{
		width: 26upx;
		height: 26upx;
		display: block;
		float: left;
		padding-top: 10upx;
		margin-left: 20upx;
	}
	.Order-confirm-heaB-right>view:nth-of-type(2){
		width: 100%;
		height: 84upx;
		font-size: 26upx;
		color: #9B9B9B;
		line-height: 40upx;
		display: -webkit-box;
		-webkit-line-clamp:2;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		clear: both;
	}
	.Order-confirm-heaB-shu{
		width: 100%;
		height: 80upx;
		margin-top: 20upx;
	}
	.Order-confirm-heaB-shu>view:nth-of-type(1){
		width: 320upx;
		height: 100%;
		border: 2upx solid #D2D2D2;
		border-radius: 4upx;
		font-size: 26upx;
		color: #2E2E30;
		float: left;
		line-height: 80upx;
		padding-left: 20upx;
	}
	.Order-confirm-heaB-shu>view:nth-of-type(2){
		width: 80upx;
		height: 100%;
		border: 2upx solid #D2D2D2;
		border-radius: 4upx;
		float: right;
		text-align: center;
		line-height: 80upx;
		font-size: 80upx;
		color: #D2D2D2;
	}
	.Order-confirm-heaB-shu>view:nth-of-type(3){
		width: 140upx;
		height: 100%;
		border: 2upx solid #D2D2D2;
		border-radius: 4upx;
		float: right;
		text-align: center;
		line-height: 80upx;
		font-size: 26upx;
		color: #2E2E30;
	}
	.Order-confirm-heaB-shu>view:nth-of-type(4){
		width: 80upx;
		height: 100%;
		border: 2upx solid #D2D2D2;
		border-radius: 4upx;
		float: right;
		text-align: center;
		line-height: 80upx;
		font-size: 46upx;
		color: #D2D2D2;
	}
	.Order-confirm-heaB-pinck{
		width: 100%;
		min-height: 80upx;
		line-height: 80upx;
		display: flex;
		justify-content: space-between;
		font-size: 28upx;
		color: #9B9B9B;
	}
	.Order-confirm-heaB-pinck>image{
		width: 220upx;
		height: 220upx;
	}
	.Order-confirm-heaB-con{
		width: 100%;
		height: 60upx;
		line-height: 60upx;
		font-size: 28upx;
		color: #9B9B9B;
	}
	.Order-confirm-heaC{
		width: 100%;
		height: 452upx;
		margin-top: -30upx;
		background: #FFFFFF;
	}
	.Order-confirm-heaC-con{
		width: 92%;
		height: 100%;
		margin: 0 auto auto auto;
	}
	.Order-confirm-heaC-conA{
		font-size: 26upx;
		color: #2E2E30;
		font-weight: bold;
		padding-top: 40upx;
	}
	.Order-confirm-heaC-conB{
		width: 100%;
		height: 80upx;
		margin-top: 20upx;
	}
	.Order-confirm-heaC-conB>view:nth-of-type(1){
		width: 280upx;
		height: 100%;
		border:2upx solid #D2D2D2;
		border-radius: 4upx;
		float: left;
		padding-left: 20upx;
		font-size: 26upx;
		color: #2E2E30;
		position: relative;
		line-height: 80upx;
	}
	.Order-confirm-heaC-conB>view:nth-of-type(1)>image{
		position: absolute;
		right: 10upx;
		top: 40%;
		width: 18upx;
		height: 18upx;
	}
	.Order-confirm-heaC-conB>view:nth-of-type(2){
		float: left;
		width: 80upx;
		height: 80upx;
		text-align: center;
		line-height: 80upx;
		font-size: 26upx;
		color: #9B9B9B;
	}
	.Order-confirm-heaC-conB>view:nth-of-type(3){
		width: 280upx;
		height: 100%;
		border:2upx solid #D2D2D2;
		border-radius: 4upx;
		float: right;
		padding-left: 20upx;
		font-size: 26upx;
		color: #2E2E30;
		position: relative;
		line-height: 80upx;
	}
	.Order-confirm-heaC-conB>view:nth-of-type(3)>image{
		position: absolute;
		right: 10upx;
		top: 40%;
		width: 18upx;
		height: 18upx;
	}
	.Order-confirm-heaC-conC{
		width: 100%;
		height: 80upx;
		margin-top: 40upx;
		
	}
	.Order-confirm-heaC-conC>view:nth-of-type(1){
		width: 60upx;
		height: 80upx;
		font-size: 26upx;
		color: #2E2E30;
		line-height: 80upx;
		float: left;
	}
	.Order-confirm-heaC-conC>view:nth-of-type(2){
		width: 79%;
		height: 80upx;
		border: 2upx solid #D2D2D2;
		border-radius: 4upx;
		line-height: 80upx;
		float: left;
		padding-left: 20upx;
	}
	.Order-confirm-heaC-conC>view:nth-of-type(2)>input{
		width: 100%;
		height: 100%;
	}
	.Order-confirm-heaC-conC>view:nth-of-type(3){
		width: 60upx;
		height: 80upx;
		text-align: right;
		color: #2E2E30;
		line-height: 80upx;
		float: right;
	}
	.Order-confirm-heaC-conD{
		width: 100%;
		height: 50upx;
		font-size: 26upx;
		color: #9B9B9B;
		line-height: 40upx;
		clear: both;
		margin-top: 20upx;
	}
	.Order-confirm-heaD{
		width: 100%;
		height: 200upx;
		margin-top: 20upx;
		background: #FFFFFF;
	}
	.Order-confirm-heaD>view:nth-of-type(1){
		font-size: 28upx;
		color: #2E2E30;
		font-weight: bold;
		padding-top: 40upx;
		padding-left: 30upx;
	}
	.Order-confirm-heaD>view:nth-of-type(2){
		width: 92%;
		height: 100upx;
		margin: 0 auto auto auto;
		
	}
	.Order-confirm-heaD>view:nth-of-type(2)>input{
		width: 100%;
		height: 100%;
	}
	.tians{
		width: 100%;
		height: 150upx;
	}
	.Order-confirm-hea-footer{
		width: 100%;
		height: 100upx;
		background: #02C2A2;
		text-align: center;
		line-height: 100upx;
		font-size: 32upx;
		color: #FFFFFF;
		position: fixed;
		bottom: 0;
	}
</style>
