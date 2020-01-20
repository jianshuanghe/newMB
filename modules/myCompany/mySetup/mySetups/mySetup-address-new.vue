<template>
	<view class="mySetup-address-new">
		<!-- 添加地址 -->
		<view class="my-title">
			<div class="quickBtn-Fd left"><quickBtn></quickBtn></div>
			<div class="search-Fd left">{{ i18n.title24 }}</div>
		</view>
		<view class="tiancong"></view>
		<view class="mySetup-address-new-detailed">
			
			<view class="mySetup-address-new-name">
				<!-- 收货人 -->
				<view>{{ i18n.title62 }}</view>
				<!-- 名字 -->
				<view><input type="text" :placeholder="i18n.title63" placeholder-style="color: #BDBDBD" v-model="name"/></view>
				<view><image :src="ming" class="mySetup-address-img"></image></view>
			</view>
			<view class="mySetup-address-new-name">
				<!-- 联系电话 -->
				<view>{{i18n.title14}}</view>
				<!-- 手机或固定电话 -->
				<view><input type="text" :placeholder="i18n.title64" maxlength="11" placeholder-style="color: #BDBDBD" v-model="phone"/></view>
			</view>
			
			<view class="mySetup-address-new-name">
				<!-- 所在地区 -->
				<view>{{i18n.title65}}</view>
				<view>
					<!-- <picker @change="Finan" :range="arr">
						<view class="ziti" :class="{'zitis':zitis}">{{picker? picker : i18n.title69}}</view>
					</picker> -->
					<view class="mySetup-address-dili">
						<provinceCity
						column="-1" 
						v-on:clickCity="clickCity"
						></provinceCity>
					</view>
				</view>
				<view><image :src="dili" class="dili"></image></view>
			</view>
			
			<view class="mySetup-address-new-names">
				<!-- 详细地址 -->
				<view>{{i18n.title66}}</view>
				<!-- 如街道，楼层，门牌号等信息 -->
				<view><input type="text" :placeholder="i18n.title67" placeholder-style="color: #BDBDBD" v-model="addres"/></view>
			</view>
			<view class="mySetup-address-new-mo">
				<image :src="xuanzhong" v-if="num === '1'" @tap="xuan(1)"></image>
				<image :src="weixuan" v-if="num === '0'" @tap="xuan(0)"></image>
				<!-- 默认发货地址 -->
				<span>{{i18n.title61}}</span>
			</view>
		</view>
		<!-- 保存地址 -->
		<view class="mySetup-address-new-sub" @tap="baoadd()">{{i18n.title68}}</view>
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</view>
</template>

<script>
	import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
	import navigation from '@/components/mbbo/navigation/navigation.vue';
	import { mapMutations, mapGetters } from 'vuex';
	import xuanzhong from '@/static/mbcImg/my/16.png'
	import weixuan from '@/static/mbcImg/my/15.png'
	import ming from '@/static/mbcImg/my/17.png'
	import dili from '@/static/mbcImg/my/18.png';
	import provinceCity from '@/components/common/provinceCity/provinceCity.vue';
	export default {
		data() {
			return {
				weixuan:weixuan,
				xuanzhong:xuanzhong,
				ming:ming,
				dili:dili,
				picker: "",
				zitis: false,
				num:'1',//控制按钮是否选中 1位选中 0位未选中
				phone:'',
				name:'',
				addres:'',
				arr:[],
			};
		},
		components: {
			quickBtn,
			navigation,
			provinceCity,
		},
		computed: {
			i18n() {
				return this.$t('Mypersonal');
			},
			...mapGetters(['GET_HOME', 'QUICKNAVCO'])
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.i18n.title23
			});
		},
		methods: {
			Finan: function(e) {
				this.arr.map((items, index) => {
					if (String(index) === String(e.target.value)) {
						this.picker = items;
						// this.id2 = items.id
						console.log(this.picker)
						if (this.picker !== '请选择') {
							this.zitis = true
						}
					}
				})
			},
			clickCity:function(clickCity){
				this.arr=clickCity
				console.log(this.arr)
			},
			baoadd(){
				if(this.name==''){
					uni.showToast({
						title: '姓名不能为空',
						icon: 'none',
						duration: 1000
					});
					return false;
				}else if(this.phone==''){
					uni.showToast({
						title: '手机号不能为空',
						icon: 'none',
						duration: 1000
					});
					return false;
				}else if(!(/^1[34578]\d{9}$/.test(this.phone))){
					uni.showToast({
						title: '手机号格式有误',
						icon: 'none',
						duration: 1000
					});
					return false;
				}else if(this.arr==''){
					uni.showToast({
						title: '请选择所在地区',
						icon: 'none',
						duration: 1000
					});
					return false;
				}else if(this.addres==''){
					uni.showToast({
						title: '请输入详细地址',
						icon: 'none',
						duration: 1000
					});
					return false;
				}
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {
						//手机号
						"addrPhone":this.phone,
						//名称
						"addrName":this.name,
						//省市区地址
						"addrPcode":this.arr.pcode,
						"addrCcode":this.arr.ccode,
						"addrAcode":this.arr.tcode,
						"address":this.addres,
						//是否默认地址
						"addrState":this.num,
						//用户ID
						"userId":landRegistLG.user.id,
						//传递就编辑 不传递就插入
						"id":'',
					}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/address/', //接口地址。
						data: params,
						method: 'POST',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.address();
							uni.navigateBack({})
							// console.log(this.list)
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
			address(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/address?userId='+landRegistLG.user.id, //接口地址。
						// data: this.endParams(params),
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.list = response.data.content
							// console.log(this.list)
							this.$store.commit('setaddress', this.list); // 更新vuex
							
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
			xuan(e){//改变默认地址的按钮
				console.log(e)
				if(e===1){
					this.num='0';
				}else if(e===0){
					this.num='1';
				}
			}
		}
	};
</script>

<style>
	.mySetup-address-new{
		width: 100%;
		min-height: 100%;
	}
	.my-title {
		width: 100%;
		height: 88upx;
		background: #ffffff;
		border-bottom: 2upx solid #f5f5f5;
		position: fixed;
		top: 0;
		z-index: 999;
	}
	.quickBtn-Fd {
		width: 5%;
		margin-left: 38upx;
	}
	.search-Fd {
		position: relative;
		width: 100%;
		text-align: center;
		line-height: 88upx;
		font-size: 28upx;
		color: #2e2e30;
	}
	.tiancong{
		width: 100%;
		height: 88upx;
	}
	.mySetup-address-new-detailed{
		width: 100%;
		height: 570upx;
		background: #FFFFFF;
	}
	.mySetup-address-new-name{
		width: 90%;
		height: 120upx;
		border-bottom: 2upx solid #D2D2D2;
		margin: 0 auto;
		
	}
	.mySetup-address-new-name>view:nth-child(1){
		font-size: 28upx;
		color: #2E2E30;
		line-height: 120upx;
		height: 100%;
		width: 20%;
		float: left;
		
	}
	.mySetup-address-new-name>view:nth-child(2){
		font-size: 28upx;
		line-height: 120upx;
		height: 100%;
		width: 40%;
		float: left;
	}
	.mySetup-address-new-name>view:nth-child(2)>input{
		width: 100%;
		height: 100%;
	}
	.mySetup-address-new-name>view:nth-child(3){
		width: 5%;
		height: 100%;
		line-height: 148upx;
		float:right;
	}
	.mySetup-address-new-name>view:nth-child(3)>image{
		width: 32upx;
		height: 40upx;
	}
	.ziti{
		margin-top: 36upx;
		color: #BDBDBD;
	}
	.zitis{
		margin-top: 36upx;
		color: black;
	}
	.mySetup-address-new-names{
		width: 90%;
		height: 120upx;
		border-bottom: 2upx solid #D2D2D2;
		margin: 0 auto;
		
	}
	.mySetup-address-new-names>view:nth-child(1){
		font-size: 28upx;
		color: #2E2E30;
		line-height: 120upx;
		height: 100%;
		width: 20%;
		float: left;
		
	}
	.mySetup-address-new-names>view:nth-child(2){
		font-size: 28upx;
		line-height: 120upx;
		height: 100%;
		width: 75%;
		float: left;
	}
	.mySetup-address-new-names>view:nth-child(2)>input{
		width: 100%;
		height: 100%;
	}
	.mySetup-address-new-names>view:nth-child(3){
		width: 5%;
		height: 100%;
		line-height: 148upx;
		float:right;
	}
	.mySetup-address-new-names>view:nth-child(3)>image{
		width: 32upx;
		height: 40upx;
	}
	.mySetup-address-new-mo{
		width: 90%;
		height: 70upx;
		margin: 0 auto;
		display: flex;
		line-height: 76upx;
		margin-top: 5upx;
	}
	.mySetup-address-new-mo>image{
		width: 32upx;
		height: 32upx;
		display: block;
		margin-top: 20upx;
	}
	.mySetup-address-new-mo>span{
		margin-left: 20upx;
	}
	.mySetup-address-new-sub{
		width: 90%;
		height: 90upx;
		margin: 0 auto;
		background: #02C2A2;
		text-align: center;
		line-height: 90upx;
		font-size: 32upx;
		color: #FFFFFF;
		margin-top: 120upx;
	}
	.mySetup-address-img{
		width: 40upx!important;
		height: 40upx;
		right: 10upx!important;
	}
	.mySetup-address-dili{
		width: 150%;
		height: 100%;
		margin-left: -46upx;
		margin-top: 20upx;
	}
</style>
