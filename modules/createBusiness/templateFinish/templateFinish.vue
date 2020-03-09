<template>
	<!-- 说明书详情 完善说明书 -->
	<view class="QRcodelist-edit">
		<view class="product-book-title">
			<div class="quickBtn-Fd left"><quickBtn></quickBtn></div>
			<div class="search-Fd left">{{ i18n.product3 }}</div>
			<div class="skipBtn" @tap='clickSkipBtn' v-if='false'>跳过</div>
		</view>
		<!-- 顶部填充 -->
		<view class="tian"></view>
		<view class="QRcodelist-edit-ti">完善基本信息，有利于帮您更快匹配到采购者哦</view>
		<view class="QRcodelist-edit-header">
			<view>为您的说明书起个名字吧<img :src="xing" alt="" class="xing" /></view>
			<view>
				<rTitle
				:disabled='false'
				:isShowOne='false'
				:isShowTwo='true'
				placeholderStyleTwo="color: #D2D2D2"
				placeholderTwo='【营销关键词】【品牌词】【类目词】【属性卖点词】'
				:valueTwo='dateLists.instrucTitle'
				tColorTwo=' #5D5D5D'
				tFontSizeTwo='3.733vw'
				tTAlignTwo='left'
				tWidthTwo="100%"
				tTMarginTwo='0vw 0'
				tHeightTwo=""
				:tMaxNumShow='true'
				:maxlengthTwo="30"
				:autoHeightTwo='true'
				tPaddingTwo=""
				tLineHeightTwo='5vw'
				tBGTwo=""
				tBorderTwo="1px solid #fff"
				tBStyleTwo="dashed"
				@tap-Title='instrucTitle'
				></rTitle>
			</view>
		</view>
		<view class="QRcodelist-edit-look">
			<view @tap="clickShowTitle(0)">
				<image :src="look"></image>
				<span>{{tips[0].show === false ? '查看示例' : '收起'}}</span>
			</view>
			<view v-if='tips[0].show === true'>
				<view>【新品包邮】黑尚莓【莓果酒】厂家直销低度酒聚会party伴侣。</view>
			</view>
		</view>
		<view class="QRcodelist-edit-Middle">
			<view>用一句话介绍一下您的说明书<img :src="xing" alt="" class="xing" /></view>
			<view>
				<rTitle
				:disabled='false'
				:isShowOne='false'
				:isShowTwo='true'
				placeholderStyleTwo="color: #D2D2D2"
				placeholderTwo='快用一句话介绍一下您的说明书吧…'
				:valueTwo='dateLists.instrucIntro'
				tColorTwo=' #5D5D5D'
				tFontSizeTwo='3.733vw'
				tTAlignTwo='left'
				tWidthTwo="100%"
				tTMarginTwo='0vw 0'
				tHeightTwo=""
				:tMaxNumShow='true'
				:maxlengthTwo="50"
				:autoHeightTwo='true'
				tPaddingTwo=""
				tLineHeightTwo='5vw'
				tBGTwo=""
				tBorderTwo="1px solid #fff"
				tBStyleTwo="dashed"
				@tap-Title='instrucIntro'
				></rTitle>
			</view>
		</view>
		<view class="QRcodelist-edit-look">
			<view  @tap="clickShowTitle(1)">
				<image :src="look"></image>
				<span>{{tips[1].show === false ? '查看示例' : '收起'}}</span>
			</view>
			<view v-if='tips[1].show === true'>
				<view>美峪黑尚莓莓果酒，以黑莓果为原料，经冷冻储存，榨汁、低温发酵、蒸馏、陈酿等工艺生产的自然水果蒸馏酒。酒体呈现琥珀光泽，香气宜人。欢迎您品鉴。
若用户未填写，则以模版简介为该说明书的简介。</view>
			</view>
		</view>
		<view class="QRcodelist-edit-lei" @tap="editpin()">
			<view>所属品类<img :src="xing" alt="" class="xing" /></view>
			<view :style="{color: dateLists.instrucCategory !== '' ? 'black' : '#BDBDBD'}">{{ editleis || '请选择'}}</view>
			<view><image :src="right"></image></view>
		</view>
		<view class="myheader-Keyword-box">
			<view class="myheader-Keyword-Tips">关键词</view>
			<view class="myheader-Keyword-industry">
				<div class="key-box" v-for="(item, index) in list" :key="index">
					<view class="myheader-Keyword-Label" v-if="item">
						{{ item }}
						<image :src="del" @tap="dele(index)"></image>
					</view>
				</div>
				<view class="myheader-Keyword-Labela" v-if="hiden === '1'"><input type="text" maxlength="8" focus="true" v-model="edit" @blur="sub()" /></view>
				<view class="myheader-Keyword-Labels" @tap="add()">+&nbsp;添加关键词</view>
			</view>
		</view>
		<view class="clear"></view>
		<!-- <view class="QRcodelist-edit-baoNo" v-if="dateLists.instrucTitle === '' || dateLists.instrucIntro === ''">保存</view> -->
		<view class="QRcodelist-edit-bao" @tap="editbao()">保存</view>
		<!-- 快捷导航 -->
		<navigation v-if="QUICKNAVCO.show"></navigation>
		<!-- 所属品类 -->
		<view class="QRcodelist-edit-category" v-if="iscategory">
			<view class="QRcodelist-edit-greak">
				<view class="QRcodelist-edit-greak-one">
					<view @tap="quxiao()">取消</view>
					<view>选择说明书所属品类</view>
				</view>
				<view class="QRcodelist-edit-greak-two">
					<div class="tips">说明书所属品类是单选哦</div>
					<view v-for="(item, index) in arrs" :key="index" :class="nums == index ? 'hidens' : ''" @tap="hidens(item, index)">{{ item.typeName }}</view>
				</view>
			</view>
		</view>
		<skipMask
		:dateListM='dateLists'
		@tap-SkipMask='tapSkipMask'
		v-if='skipMaskShow'
		></skipMask>
	</view>
</template>

<script>
import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
import navigation from '@/components/mbbo/navigation/navigation.vue';
import rTitle from '@/components/common/RHX/rTitle/rTitle';
import skipMask from './skipMask';
import { mapMutations, mapGetters } from 'vuex';
export default {
	data() {
		return {
			xing:  this.Static+'common/xinghao.png',
			remnane: 0,
			rem: 0,
			desc: '',
			des: '',
			look:  this.Static+'my/look.png',
			hiden: 2,
			num: 0,
			nums: 9999999999,
			edit: '',
			del:  this.Static+'my/del.png',
			list: [],
			id: '',
			editleiid:'',
			arr: [],
			editleis: '',
			right:  this.Static+'my/right.png',
			iscategory: false,
			arrs: [],
			tips:[
				{
					show: false
				},
				{
					show: false
				}
			],
			skipMaskShow: false, //默认不展示
			shipPublish: false, // 是否跳过
			dateLists:null, // 链接上的参数
			publishOrUpdata: 0, // 发布还是更新
		};
	},
	components: {
		quickBtn,
		navigation,
		rTitle,
		skipMask
	},
	onLoad() {
	},
	created() {
		this.shareEachPage(); // 分享
		let urlParamsTemp = JSON.parse(uni.getStorageSync('urlParamsTemp')); // 读取缓存的用户信息
		this.dateLists = this.urlCrypto(urlParamsTemp, 1)[0];
		this.publishOrUpdata = this.urlCrypto(urlParamsTemp, 1)[1];
		console.log(this.publishOrUpdata, '发布还是跟新')
		console.log(this.publishOrUpdata, '---------------this.publishOrUpdata---------------');
		this.editleis = this.dateLists.instrucCategoryStr;
		this.list = this.dateLists.keyList;
		// console.log(this.dateLists, '----------------------------------------------------')
		this.Varieties();
		if (!uni.getStorageSync('templateFinishSkip')) {
			this.shipPublish = false;
		} else {
			if (uni.getStorageSync('templateFinishSkip') === true) {
				this.shipPublish = true;
			}
		}
		// console.log(this.dateLists, '----------------------------------------------------')
	},
	methods: {
		clickShowTitle(e) {
			this.tips[e].show = !this.tips[e].show
		},
		Varieties(){
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				// console.log(landRegistLG.user.id);
				// let params = {}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/instruc/getTypes', //接口地址。
					// data: params,
					method: 'GET',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						uni.hideLoading();
						// console.log(response.data);
						if (response.data.ret === '200') {
							this.arrs=response.data.content;
						} else if (response.data.ret === '202') {
						 	uni.removeStorageSync('landRegist');
						 	uni.removeStorageSync('clickItems');
						 	this.$store.commit('setHome', 1);
						 	this.$store.commit('setLandRegist', 0);
							uni.showToast({
								title: '登录已过期，请重新登录',
								icon: 'none',
								duration: 1000
							});
							if (!uni.getStorageSync('landRegist')) {
								this.landRegistra(); // 判断登录状态
							}
						} else if (response.data.ret === '400') {
							uni.showToast({
								title: response.data.msg,
								icon: 'none',
								duration: 1000
							});
						} else {
							uni.hideLoading(); // 隐藏 loading
							uni.showToast({
								title: '网络开小差了，请稍后重试',
								icon: 'none',
								duration: 1000
							});
						}
					},
					fail: error => {
						uni.hideLoading(); // 隐藏 loading
						uni.showToast({
							title: '网络繁忙，请稍后',
							icon: 'none',
							duration: 1000
						});
						// console.log(error, '网络繁忙，请稍后');
					}
				});
			}
		},
		hidens(item, e) {
			// console.log(item, e, '');
			this.dateLists.instrucCategory = item.id;
			this.editleis = item.typeName;
			this.iscategory = !this.iscategory
		},
		editpin() {
			this.iscategory = true;
			this.arrs.map((items,index)=>{
				if(this.editleis===items.typeName){
					this.nums = index
				}
			})
		},
		quxiao() {
			this.iscategory = false;
		},
		dele(e) {
			this.list.splice(e, 1);
			// console.log(this.list);
		},
		instrucTitle(e) {
			// console.log(e)
			this.dateLists.instrucTitle = e[1];
		},
		instrucIntro(e) {
			// console.log(e)
			this.dateLists.instrucIntro = e[1];
		},
		add() {
			this.hiden = '1';
			this.num = '1';
			// console.log(this.list);
		},
		sub() {
			if (this.edit === '') {
				// 失脚时没有数据
				this.hiden = 2;
			} else {
				// 失焦时存在数据
				this.hiden = 2;
				// console.log('创建新标签');
				if (this.list.length > 14) {
					this.edit = '';
					uni.showToast({
						title: '最多只能添加15个标签',
						icon: 'none',
						duration: 1000
					});
					return false;
				} else {
					this.list.push(this.edit);
					this.edit = '';
				}
			}
		},
		clickSkipBtn () { // 跳过
			// console.log('跳过');
			if (!uni.getStorageSync('templateFinishSkip')) {
				this.skipMaskShow = true;
			} else {
				// console.log('直接提交');
			}
		},
		tapSkipMask(e) {
			console.log(e, '操作shipMask');
			this.skipMaskShow = e[0];
			if (e[1] === 1) {
				this.shipPublish = true;
				this.editbao()
			}
		},
		editbao() {
			let params = {}; // 请求总数居时 参数为空
			if (!uni.getStorageSync('landRegist')) {
				this.landRegistra(); // 判断登录状态
			} else if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				// console.log(landRegistLG.user.id);
				params = this.dateLists;
				params.keyList = this.list;
				if (params.instrucTitle === '') {
					uni.showToast({
						title: '请填写说明书名称!',
						icon: 'none',
						duration: 1000
					});
					return
				};
				if (params.instrucIntro === '') {
					uni.showToast({
						title: '请填写说明书简介!',
						icon: 'none',
						duration: 1000
					});
					return
				};
				if (params.instrucCategory === '') {
					uni.showToast({
						title: '请选择所属品类!',
						icon: 'none',
						duration: 1000
					});
					return
				};
				// console.log(params.keyList, '-------params.keyList--------');
				let keyLists = [];
				if (params.keyList) {
					params.keyList.map((items, index)=>{
						if (items !== '') {
							keyLists.push(items);
						}
					});
				}
				params.keyList = keyLists;
				if (params.keyList.length < 1 && this.shipPublish === false && !uni.getStorageSync('templateFinishSkip')) {
					this.skipMaskShow = true;
					return
				};
				// 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				if (this.publishOrUpdata === 0) {
					delete params.instrucCategoryStr;
					
					uni.request({
						url: this.api2 + '/rest-rp/instruc', //接口地址。
						data: params,
						method: 'POST',
						header: {
							Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
						},
						success: response => {
							if (response.data.ret === '200') {
								uni.hideLoading();
								// console.log(response.data.content);
								if (params.instrucState === '0') {
									uni.navigateTo({
										url: '/modules/InstructionsPrice/myproduct/myproduct-shu'
									});
								} else {
									uni.navigateTo({
										url: '/modules/createBusiness/templateFinish/templateFinishShare?urlParams=' + this.urlCrypto(response.data.content, 0)
									});
								}
							} else if (response.data.ret === '202') {
								uni.removeStorageSync('landRegist');
								uni.removeStorageSync('clickItems');
								this.$store.commit('setHome', 1);
								this.$store.commit('setLandRegist', 0);
								uni.showToast({
									title: '登录已过期，请重新登录',
									icon: 'none',
									duration: 1000
								});
								if (!uni.getStorageSync('landRegist')) {
									this.landRegistra(); // 判断登录状态
								}
							} else if (response.data.ret === '400') {
								uni.showToast({
									title: response.data.msg,
									icon: 'none',
									duration: 1000
								});
							} else {
								uni.hideLoading(); // 隐藏 loading
								uni.showToast({
									title: '网络开小差了，请稍后重试',
									icon: 'none',
									duration: 1000
								});
							}
						},
						fail: error => {
							uni.hideLoading(); // 隐藏 loading
							uni.showToast({
								title: '网络繁忙，请稍后',
								icon: 'none',
								duration: 1000
							});
							// console.log(error, '网络繁忙，请稍后');
						}
					});
				} else if (this.publishOrUpdata === 1) {
					delete params.instrucCategoryStr;
					let keyLists = [];
					params.keyList.map((items, index)=>{
						if (items !== '') {
							keyLists.push(items);
						}
					});
					params.keyList = keyLists;
					uni.request({
						url: this.api2 + '/rest-rp/instruc/' + params.context.instrucId, //接口地址。
						data: params,
						method: 'POST',
						header: {
							Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
						},
						success: response => {
							if (response.data.ret === '200') {
								uni.hideLoading();
								// console.log(response.data.content);
								if (params.instrucState === '0') {
									uni.navigateTo({
										url: '/modules/InstructionsPrice/myproduct/myproduct-shu'
									});
								} else {
									uni.navigateTo({
										url: '/modules/createBusiness/templateFinish/templateFinishShare?urlParams=' + this.urlCrypto(response.data.content, 0)
									});
								}
							}  else if (response.data.ret === '202') {
								uni.hideLoading(); // 隐藏 loading
								uni.removeStorageSync('landRegist');
								uni.removeStorageSync('clickItems');
								this.$store.commit('setHome', 1);
								this.$store.commit('setLandRegist', 0);
								uni.showToast({
									title: '登录已过期，请重新登录',
									icon: 'none',
									duration: 1000
								});
								if (!uni.getStorageSync('landRegist')) {
									this.landRegistra(); // 判断登录状态
								}
							} else if (response.data.ret === '400') {
								uni.hideLoading(); // 隐藏 loading
								uni.showToast({
									title: response.data.msg,
									icon: 'none',
									duration: 1000
								});
							} else {
								uni.hideLoading(); // 隐藏 loading
								uni.showToast({
									title: '网络开小差了，请稍后重试',
									icon: 'none',
									duration: 1000
								});
							}
						},
						fail: error => {
							uni.hideLoading(); // 隐藏 loading
							uni.showToast({
								title: '网络繁忙，请稍后',
								icon: 'none',
								duration: 1000
							});
							// console.log(error, '网络繁忙，请稍后');
						}
					});
				}
				
			}
		},
		
	},
	computed: {
		i18n() {
			return this.$t('Howtoshow');
		},
		...mapGetters(['GET_NEWS', 'GET_HOME', 'QUICKNAVCO'])
	}
};
</script>

<style>
.QRcodelist-edit {
	width: 100%;
	min-height: 100%;
	background: #ffffff;
}
.clear {
	clear: both;
	width: 100%;
	height: 120upx;
}
.product-book-title {
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
	width: 30%;
	margin-left: 36%;
	text-align: center;
	line-height: 88upx;
	font-size: 28upx;
	color: #2e2e30;
	float: left;
}
.tian {
	width: 100%;
	height: 88upx;
}
.QRcodelist-edit-ti {
	width: 94%;
	font-size: 32upx;
	color: #02c2a2;
	margin: 0 auto;
	padding-top: 54upx;
	font-weight: bold;
}
.QRcodelist-edit-header {
	width: 94%;
	height: 200upx;
	margin: 0 auto;
	/* border-bottom: 2upx solid #f5f5f5; */
	position: relative;
}
.QRcodelist-edit-header > view:nth-of-type(1) {
	font-size: 32upx;
	color: #2e2e30;
	padding-top: 40upx;
	font-weight: bold;
}
.QRcodelist-edit-header > view:nth-of-type(2) {
	width: 100%;
	min-height: 30upx;
	padding-top: 20upx;
}
.QRcodelist-edit-header > view:nth-of-type(2) > input {
	width: 100%;
	height: 100%;
}
.QRcodelist-edit-header > view:nth-of-type(3) {
	font-size: 28upx;
	color: #d2d2d2;
	position: absolute;
	right: 0;
	bottom: 0;
}
.QRcodelist-edit-Middle {
	width: 94%;
	min-height: 182upx;
	margin: 0 auto;
	/* border-bottom: 2upx solid #f5f5f5; */
	position: relative;
}
.QRcodelist-edit-Middle > view:nth-of-type(1) {
	font-size: 32upx;
	color: #2e2e30;
	padding-top: 20upx;
	font-weight: bold;
}
.QRcodelist-edit-Middle > view:nth-of-type(2) {
	width: 100%;
	min-height: 30upx;
	padding-top: 20upx;
}
.QRcodelist-edit-Middle > view:nth-of-type(2) > input {
	width: 100%;
	height: 100%;
}
.QRcodelist-edit-Middle > view:nth-of-type(3) {
	font-size: 28upx;
	color: #d2d2d2;
	position: absolute;
	right: 0;
	bottom: 0;
}
.QRcodelist-edit-look {
	width: 94%;
	margin: 0 auto;
}
.QRcodelist-edit-look > view:nth-of-type(1) {
	width: 100%;
	height: 30upx;
	font-size: 28upx;
	color: #2e2e30;
	line-height: 30upx;
	padding-top: 14upx;
}
.QRcodelist-edit-look > view:nth-of-type(1) > image {
	width: 28upx;
	height: 24upx;
	display: block;
	float: left;
	margin-top: 2upx;
}
.QRcodelist-edit-look > view:nth-of-type(1) > span {
	margin-left: 10upx;
	display: block;
	float: left;
}
.QRcodelist-edit-look > view:nth-of-type(2) {
	width: 100%;
	min-height: 150upx;
	background: #f9f9f9;
	margin-top: 20upx;
	border-radius: 4upx;
	overflow: hidden;
}
.QRcodelist-edit-look > view:nth-of-type(2) > view {
	width: 95%;
	margin: 20upx auto 40upx auto;
	font-size: 24upx;
	color: #2e2e30;
}
.myheader-Keyword-industry {
	width: 95%;
	min-height: 100upx;
	margin: 20upx auto;
}
.myheader-Keyword-Tips {
	width: 94%;
	height: 40upx;
	margin: 80upx auto auto auto;
	font-size: 28upx;
	color: #2e2e30;
	font-weight: bold;
}
.myheader-Keyword-Label {
	padding: 10upx 30upx 10upx 30upx;
	border: 2upx solid #e2e2e2;
	border-radius: 8upx;
	display: block;
	float: left;
	margin-left: 20upx;
	margin-top: 20upx;
	font-size: 26upx;
	position: relative;
}
.myheader-Keyword-Label > image {
	width: 36upx;
	height: 36upx;
	top: -15upx;
	right: -12upx;
	position: absolute;
}
.myheader-Keyword-Labels {
	padding: 13upx 30upx 13upx 30upx;
	border: 2upx solid #02c2a2;
	border-radius: 8upx;
	display: block;
	float: left;
	margin-left: 20upx;
	margin-top: 20upx;
	font-size: 28upx;

	color: #02c2a2;
}
.myheader-Keyword-Labela {
	padding: 10upx 30upx 10upx 30upx;
	border: 2upx solid #e2e2e2;
	border-radius: 8upx;
	display: block;
	float: left;
	margin-left: 20upx;
	margin-top: 20upx;
	font-size: 26upx;
	color: #02c2a2;
	width: 130upx;
	height: 45upx;
	line-height: 45upx;
	position: relative;
}
.myheader-Keyword-Labela > input {
	width: 100%;
	height: 100%;
}
.myheader-btn {
	width: 94%;
	height: 90upx;
	background: #02c2a2;
	text-align: center;
	line-height: 90upx;
	font-size: 32upx;
	color: #ffffff;
	position: fixed;
	bottom: 20upx;
	left: 5%;
}
.myheader-Keyword-box {
	/* padding-bottom: 300upx; */
}
.topsss {
	width: 84%;
	height: 40upx;
	/* margin: 40upx auto auto!important; */
	/* margin-top: 100upx; */
	margin: 0upx auto auto auto;
	padding-top: 80upx;
	font-size: 28upx;
	color: #2e2e30;
	clear: both;
}
.myheader-Keyword-Labelss {
	padding: 10upx 50upx 10upx 50upx;
	border: 2upx solid #e2e2e2;
	border-radius: 35upx;
	display: block;
	float: left;
	margin-left: 20upx;
	margin-top: 20upx;
	font-size: 26upx;
	color: #fab000;
}
.QRcodelist-edit-bao {
	width: 100%;
	height: 100upx;
	background-image: linear-gradient(134deg, #15d49f 0%, #57d6cf 100%);
	position: fixed;
	bottom: 0;
	text-align: center;
	line-height: 100upx;
	font-size: 32upx;
	color: #ffffff;
}
.QRcodelist-edit-baoNo{
	width: 100%;
	height: 100upx;
	background: #a5efea;
	position: fixed;
	bottom: 0;
	text-align: center;
	line-height: 100upx;
	font-size: 32upx;
	color: #ffffff;
}
.QRcodelist-edit-lei {
	width: 94%;
	height: 100upx;
	border-bottom: 2upx solid #f5f5f5;
	margin: 20upx auto;
}
.QRcodelist-edit-lei > view:nth-of-type(1) {
	line-height: 100upx;
	font-size: 32upx;
	color: #2e2e30;
	float: left;
	font-weight: bold;
}
.QRcodelist-edit-lei > view:nth-of-type(2) {
	line-height: 100upx;
	font-size: 28upx;
	color: #bdbdbd;
	float: left;
	margin-left: 20upx;
}
.QRcodelist-edit-lei > view:nth-of-type(3) {
	line-height: 100upx;
	width: 20upx;
	height: 100%;
	float: right;
}
.QRcodelist-edit-lei > view:nth-of-type(3) > image {
	width: 100%;
	height: 20upx;
}
.QRcodelist-edit-category {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	background: rgba(0, 0, 0, 0.3);
	z-index: 99999;
}
.QRcodelist-edit-greak {
	width: 100%;
	height: 900upx;
	position: absolute;
	bottom: 0;
	background: #ffffff;
}
.QRcodelist-edit-greak-one {
	width: 100%;
	height: 114upx;
	border-bottom: 2upx solid #f5f5f5;
}
.QRcodelist-edit-greak-one > view:nth-of-type(1) {
	font-size: 32upx;
	color: #9b9b9b;
	line-height: 114upx;
	padding-left: 40upx;
	float: left;
}
.QRcodelist-edit-greak-one > view:nth-of-type(2) {
	width: 50%;
	height: 100%;
	padding-left: 76upx;
	text-align: center;
	line-height: 114upx;
	font-size: 32upx;
	color: #2e2e30;
	float: left;
}
.QRcodelist-edit-greak-two {
	width: 94%;
	margin: 10upx auto;
	height: 753upx;
	overflow: auto;
}

.QRcodelist-edit-greak-two > view {
	width: 204upx;
	height: 70upx;
	border-radius: 35upx;
	border: 2upx solid #e2e2e2;
	text-align: center;
	line-height: 70upx;
	font-size: 26upx;
	color: #2e2e30;
	float: left;
	margin-top: 30upx;
	margin-left: 16upx;
}
.QRcodelist-edit-greak-two .tips{
	font-family: PingFangSC-Regular;
	font-size: 24upx;
	color: #BDBDBD;
	line-height: 80upx;
	text-align: center;
}
.hidens {
	background: #02c2a2 !important;
	color: #ffffff !important;
}
.skipBtn{
	position: absolute;
	width: 10%;
	right: 20upx;
	top: 0;
	line-height: 88upx;
	font-size: 28upx;
	color: #15d49f;
}
.xing{
	position: relative;
	width: 16upx;
	height: 16upx;
	margin-left: 10upx;
	top: -8upx;
}
</style>
