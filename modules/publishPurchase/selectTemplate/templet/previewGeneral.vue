<template>
	<div class="preview-box">
		<topBox>
		  <p class="title-putIn">采购详情</p>
		</topBox>
		<div class="preview-content">
			<!-- 倒计时 -->
			<div class="countDown" >
				<div class="count-end" v-if='quotedPriceShow'>
					距离报价结束还剩：
					<div class="count-text">
						<uni-count-down :day="quotedPrice.day" :hour="quotedPrice.hour" :minute="quotedPrice.minute" :second="quotedPrice.second" />
					</div>
					<text class="count-num">{{quotedPrice.quotedNum}}条报价</text>
				</div>
				<div class="count-start">
					报价开始时间：{{quotedPrice.startTime}}
					<text class="baoJia right">报价截止时间：{{quotedPrice.endTime}}</text>
					<div class="clear"></div>
				</div>
			</div>
			<!-- 采购 -->
			<div class="caiGou-content">
				<!-- 采购产品 -->
				<div class="caiGou-title">采购产品</div>
				<div class="caiGou-product">
					<div class="rightLine"></div>
					<div class="two-titel">{{caiGouList.purcTitle}}</div>
					<p class="caiGouListItems" v-if='caiGouList.purcSpec'>商品规格：{{caiGouList.purcSpec}}</p>
					<p class="caiGouListItems"  v-if='caiGouList.purcCount && caiGouList.purcUnit'>采购数量：{{caiGouList.purcCount}} {{caiGouList.purcUnit}}</p>
					<p class="caiGouListItems"  v-for="(items, index) in caiGouList.paraList" :key="index" v-if="items.paraKey !== '' && items.paraValue !== ''">{{items.paraKey}}：{{items.paraValue}}</p>
				</div>
				<!-- 其他要求 -->
				<div class="caiGou-title">其他要求</div>
				<!-- 表格 -->
				<div class="reportFrom-box">
					<div class="reportFrom">
						<div class="RF-cont borderRight borderLeft" >
							<!-- 收货地区 -->
							<div class="RF-lists" v-if='caiGouList.purcCcodeStr'>
								<div class="RF-item width1 left">
									<p class="color9B9B9B">收货地区</p>
								</div>
								<div class="RF-item width2 left">
									<p class="borderLeft">{{caiGouList.purcCcodeStr}}</p>
								</div>
								<div class="clear"></div>
							</div>
							<!-- 报价含税 -->
							<div class="RF-lists" >
								<div class="RF-item width1 left">
									<p class="color9B9B9B">报价含税</p>
								</div>
								<div class="RF-item width2 left">
									<p class="borderLeft">{{caiGouList.purcInvo | switchText}}</p>
								</div>
								<div class="clear"></div>
							</div>
							<!-- 报价含运费 -->
							<div class="RF-lists">
								<div class="RF-item width1 left">
									<p class=" color9B9B9B">报价含运费</p>
								</div>
								<div class="RF-item width2 left">
									<p class="borderLeft">{{caiGouList.purcFrei | switchText}}</p>
								</div>
								<div class="clear"></div>
							</div>
							<!-- 报价截止时间 -->
							<div class="RF-lists"  v-if='caiGouList.purcEndTime'>
								<div class="RF-item width1 left">
									<p class=" color9B9B9B">报价截止时间</p>
								</div>
								<div class="RF-item width2 left">
									<p class="borderLeft">{{caiGouList.purcEndTime}}</p>
								</div>
								<div class="clear"></div>
							</div>
							<!-- 收货日期 -->
							<div class="RF-lists"  v-if='caiGouList.purcReceTime'>
								<div class="RF-item width1 left">
									<p class="color9B9B9B">收货日期</p>
								</div>
								<div class="RF-item width2 left">
									<p class="borderLeft">{{caiGouList.purcReceTime}}</p>
								</div>
								<div class="clear"></div>
							</div>
							<!-- 补充说明 -->
							<div class="RF-lists"  v-if='caiGouList.purcContent'>
								<div class="RF-item width1 left">
									<p class=" color9B9B9B">补充说明</p>
								</div>
								<div class="RF-item width2 left">
									<p class="borderLeft">{{caiGouList.purcContent}}</p>
								</div>
								<div class="clear"></div>
							</div>
							<!-- 其他要求 -->
							<div class="RF-lists" v-for="(items, index) in caiGouList.requList" :key="index">
								<div class="RF-item width1 left">
									<p class="color9B9B9B">{{items.paraKey}}</p>
								</div>
								<div class="RF-item width2 left">
									<p class="borderLeft">{{items.paraValue || '- -'}}</p>
								</div>
								<div class="clear"></div>
							</div>
							<div class="lineBoxTop"></div>
						</div>
					</div>
				</div>
			</div>
			<!-- img图片 -->
			<div class="caiGou-img">
				<div 
				class="imgList-items" 
				v-for="(items, index) in listData.imageData" 
				:key="index"
				@tap="previewImageS(listData.imageData, index)"
				>
					<image :src="items.imgUrl" alt="" mode='widthFix' class="img-items"></image>
				</div>
			</div>
			<!-- 公司水印区 -->
			<div class="waterMark">
				<div class="text">本系统由 @陌拜 提供技术支持</div>
			</div>
		</div>
		<!-- 预览 -->
		<div class="Btn-box">
			<fixedBgBtn
			:bbottom='isEdit.isBtnBottom'
			bColor= ''
			paddingNum=''
			bgColor='#F5F5F5'
			bShadow='0 -1px 0 0 #F5F5F5'>
				<div class="businessBtn left">
					<div class="itemsBtn left"  @tap="tapStorePreview">
						<btsBtn
						colorType='1'
						name='商家'
						:imgSrc='business'></btsBtn>
					</div>
					<div class="itemsBtn left" @tap="tapContactPreview">
						<btsBtn
						colorType='1'
						name='联系'
						:imgSrc='contact'></btsBtn>
					</div>
					<div class="itemsBtn left" @tap="tapCollectPreview">
						<btsBtn
						colorType='1'
						name='收藏'
						:imgSrc='store'></btsBtn>
					</div>
				</div>
				<!-- <div class="priceBtn left">
					<div class="publishBtn left" @tap='myQuote'>
						<publishBtn 
						bgImage='linear-gradient(135deg, #FAD161 0%, #F77F3B 100%)'
						name='我要报价'></publishBtn>
					</div>
					<div class="publishBtn left" @tap='mySeek'>
						<publishBtn 
						bgImage='linear-gradient(134deg, #15D49F 0%, #57D6CF 100%)'
						name='立即咨询'></publishBtn>
					</div>
				</div> -->
				<div class="clear"></div>
			</fixedBgBtn>
		</div>
		<!-- 继续编辑、发布采购 -->
		<div class="Btn-box" v-if='isEdit.isEditShowBtn'>
			<fixedBgBtn
			bbottom='0upx'
			bColor= ''
			paddingNum=''
			bgColor='#2E2E30'
			bShadow='0 -1px 0 0 #F5F5F5'>
				<div class="againEditBtn-box">
					<div class="againEditBtn left" @tap='againEditCaigou'>
						<savePreviewBtn
						textColor='#FFFFFF'
						lineY='1'
						name='继续编辑'
						width='27vw'
						:imgSrc='againEdit'></savePreviewBtn>
					</div>
					<div class="againPublishBtn left"  @tap="caiGouSavePublish('1')">
						<savePreviewBtn
						textColor='#02C2A2'
						lineY='0'
						name='发布采购'
						width='27vw'
						:imgSrc='publish'></savePreviewBtn>
					</div>
					<div class="clear"></div>
				</div>
			</fixedBgBtn>
		</div>
		<!-- 快捷导航 -->
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</div>
</template>

<script>
	import topBox from '@/components/mbbo/topBox/topBox';
	import uniCountDown from '@/components/common/uni-count-down/uni-count-down.vue';
	import fixedBgBtn from '@/components/common/button/fixedBgBtn.vue';
	import btsBtn from '@/components/common/button/btsBtn.vue';
	import publishBtn from '@/components/common/button/publishBtn.vue';
	import savePreviewBtn from '@/components/common/button/savePreviewBtn.vue';
	import navigation from '@/components/mbbo/navigation/navigation.vue';
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				business:  this.Static+'publish/purchase/business.png',
				contact:  this.Static+'publish/purchase/contact.png',
				store:  this.Static+'publish/purchase/store.png',
				loved: this.Static+'publish/purchase/stored.png',
				love: this.Static+'publish/purchase/store.png',
				againEdit:  this.Static+'publish/purchase/againEdit.png',
				publish:  this.Static+'publish/purchase/publish.pngg',
				product:  this.Static+'publish/purchase/product.png',
				isEdit:{
					isEditShowBtn: true,
					isBtnBottom: '88upx'
				},
				home: this.Static + 'mbcImg/tabBar/homed.png',
				routeParams: this.routeParam, // 路由参数
				quotedPriceShow: true, // 展示倒计时
				quotedPrice: {
				}, // 报价、倒计时
				caiGouList: this.caiGouListData, // 采购列表数据
				businessTemLists: this.businessTemList,
				listData: null // 附件数据列表
			};
		},
		components: {
			navigation,
		},
		created () {
			this.caiGouList = this.GET_PUBLISH.publishPurchase.caiGouList;
			console.log(this.caiGouList, '存在vuex中的数据，用于渲染');
			// this.quotedPrice = {
			// 	// day: this.returnDateNum( this.getNewDate(), this.caiGouList.purcEndTime), // 倒计时天数
			// 	day: this.caiGouList.day, // 倒计时天数
			// 	hour: this.caiGouList.hour || 0, //倒计时小时
			// 	minute: this.caiGouList.minute || 0, // 倒计时分钟
			// 	second: 0, // 倒计时秒
			// 	quotedNum: 0, // 条数
			// 	startTime: this.getNewDate(), //报价开始时间
			// 	endTime: this.caiGouList.purcEndTime, //报价结束时间
			// };
			this.listData = this.GET_PUBLISH.publishPurchase.imgList;
			console.log(this.listData, '-------------++++++++++++------------------')
			console.log(this.returnDateNum( this.getNewDate(), this.caiGouList.purcEndTime));
			this.resetDataPage(this.routeParams);
			let purcCcodeStr = this.caiGouList.purcCcodeStr;
			console.log(purcCcodeStr);
			if (this.routeParams.sourceTemp !== 0) {
				console.log(purcCcodeStr.split('-'), '------------------+++++++++++++++')
				this.caiGouList.purcCcodeStr=  purcCcodeStr.split('-')[0] + '-' + purcCcodeStr.split('-')[1]
			}
		},
		filters:{
			switchText(val) {
				console.log(val, '-----------------shui--------------')
				if (Number(val) === 1) {
					return '是'
				} else if (Number(val) === 0) {
					return '否'
				};
			}
		},
		computed: {
			i18n() {
				return this.$t('qualificatCert');
			},
			...mapGetters(['GET_PUBLISH', 'QUICKNAVCO'])
		},
		props: [
			'routeParam',
			'caiGouListData',
			'businessTemList',
			'caiGouDetileData'
		],
		watch: {
			caiGouDetileData: {
				handler(a, b) {
					console.log(a, b, '---------------caiGouDetileData--------------');
					if (a) {
						if (a.isFollow === '1') {
							this.store = this.loved;
						} else {
							this.store = this.love;
						}
					}
				},
				deep: true
			},
			routeParam: {
				handler(a, b) {
					console.log(a, b, '---------------routeParam--------------');
					this.routeParams = a;
					this.resetDataPage(this.routeParams);
					let purcCcodeStr = this.caiGouList.purcCcodeStr;
					console.log(purcCcodeStr);
					if (this.routeParams.sourceTemp !== 0) {
						console.log(purcCcodeStr.split('-'), '------------------+++++++++++++++')
						this.caiGouList.purcCcodeStr=  purcCcodeStr.split('-')[0] + '-' + purcCcodeStr.split('-')[1]
					}
				},
				deep: true
			},
			businessTemList: {
				handler(a, b) {
					console.log(a, b, '---------------businessTemList--------------');
					this.businessTemLists = a.content;
				},
				deep: true
			},
			GET_PUBLISH: {
				handler(a, b) {
					console.log(a, b, '------------------GET_PUBLISH----------------');
					this.caiGouList = a.publishPurchase.caiGouList;
					this.quotedPrice = {
						day: this.caiGouList.day, // 倒计时天数
						hour: this.caiGouList.hour || 0, //倒计时小时
						minute: this.caiGouList.minute || 0, // 倒计时分钟
						second: 0, // 倒计时秒
						quotedNum: 0, // 条数
						startTime: this.getNewDate(), //报价开始时间
						endTime: this.caiGouList.purcEndTime, //报价结束时间
					};
					this.quotedPriceShow = false;
					this.$nextTick(function() {
						this.quotedPriceShow = true
					});
					this.listData = a.publishPurchase.imgList;
				},
				deep: true
			}
		},
		mounted() {
			console.log(this.GET_PUBLISH.publishPurchase,'publishPurchase.caiGouList')
		},
		beforeDestroy () {
			console.log('页面销毁之前缓存数据更新-----------setImgList、setCaiGouList');
			// this.$store.commit('setImgList', this.listData); // 更新ssetImgList
			// this.$store.commit('setCaiGouList', this.caiGouList); // 更新setCaiGouList
		},
		components: {
			topBox,
			uniCountDown,
			fixedBgBtn,
			btsBtn,
			publishBtn,
			savePreviewBtn
		},
		methods: {
			...mapMutations({
				setPreviceCaiGou: 'setPreviceCaiGou'
			}),
			previewImageS (e, key) {
				console.log(e, '附件地址');
				let imgList = [];
				e.map((items, index) => {
					imgList.push(items.imgUrl)
				});
				uni.previewImage({
					current: imgList[key],
					indicator: "number",
					loop: "true",
					urls:imgList
				})
			},
			caiGouSavePublish (e) {
				console.log(this.GET_PUBLISH.publishPurchase, '触发保存发布按钮');
				let params = this.GET_PUBLISH.publishPurchase.caiGouList;
				let listData = this.GET_PUBLISH.publishPurchase.imgList.imageData;
				console.log(listData, '---------------listData------------')
				if (params.purcTitle === '') {
					uni.showToast({
						title: '请填写采购名称！',
						icon: 'none',
						duration: 1000
					});
					return
				}
				if (!uni.getStorageSync('landRegist')) {
					this.landRegistra(); // 判断登录状态
				} else if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					uni.showLoading({
						// 展示loading
						title: '加载中'
					});
					params.purcState = e; // 状态
					if (listData) { // 附件
						console.log(listData, '用户附件')
						listData.map((items, index) => {
							if (items.imgName) {
								params.imgList.push(items.imgName)
							}
						})
					};
					params.userId = landRegistLG.user.id; // id
					params.purcType = String(this.GET_PUBLISH.publishPurchase.templetType);// 简单模板 // 普通模板
					delete params.purcCcodeStr; // 删除地址text字段
					params.day ? delete params.day : console.log('不存在');
					params.hour ? delete params.hour : console.log('不存在');
					params.minute ? delete params.minute : console.log('不存在');
					params.purcReceTime === '0-0-0' ? params.purcReceTime = '' : console.log('时间正确');
					let url = '/rest-rp/purc/add';
					if (this.routeParam.sourceTemp === 4) { // 来源于我的采购列表，用户属于更新数据
						url = '/rest-rp/purc/update';
					};
					if (params.purcType === '0') { // 简单模板需要传这些值
						params.purcEndTime = '';
						params.purcInvo = '0';
						params.purcFrei = '0';
					};
					uni.request({
						url: this.api2 + url, //接口地址。
						data: params,
						method: 'POST',
						header: {
							Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
						},
						success: response => {
							if (response.data.ret === '200') {
								uni.hideLoading(); // 隐藏 loading
								if (e === '0') { // 保存
									uni.showToast({
										title: '保存成功！',
										icon: 'none',
										duration: 1000
									});
									console.log(response.data.content);
									uni.navigateTo({
										url: '/modules/publishPurchase/selectTemplate/publishPurchaseFinish/publishPurchaseFinishShare?urlParams=' + this.urlCrypto(response.data.content, 0)
									});
								} else if (e === '1') { // 发布
									uni.showToast({
										title: '发布成功！',
										icon: 'none',
										duration: 1000
									});
									console.log(response.data.content);
									uni.navigateTo({
										url: '/modules/publishPurchase/selectTemplate/publishPurchaseFinish/publishPurchaseFinishShare?urlParams=' + this.urlCrypto(response.data.content, 0)
									});
								}
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
							console.log(error, '网络繁忙，请稍后');
						}
					});
				}
			},
			tapStorePreview() {
				console.log(this.businessTemList.content, '商机信息');
				uni.navigateTo({
					url: '/modules/myCompany/mybusiness/my-business?id=' + this.routeParam.creatorId
				});
			},
			tapContactPreview() {
				console.log(this.businessTemList.content, '电话');
			
				if (this.routeParam.sourceTemp === 2 || this.routeParam.sourceTemp === 3) {
					// 先去判断是否来自流量承载页，或者是平台
					let parmas = {
						userId: this.routeParam.lookUserId,
						id: this.routeParam.purcId,
						type: 4
					};
					this.platformAccount(this.routeParam.isFlow, 8, parmas, this.routeParam).then(res => {
						console.log(res);
					})
					.catch(err => {
						console.log(err);
					});
				};
				uni.makePhoneCall({
					phoneNumber: this.businessTemList.content.contactTelphone // 拨打电话
				});
			},
			tapCollectPreview() {
				let parmas = {
					userId: this.routeParam.lookUserId,
					modelId: this.routeParam.purcId,
					type: 1
				};
				this.focusStore(parmas).then(res => {
					console.log(res);
					if (res.success === true) {
						this.store = this.loved;
					} else {
						this.store = this.love;
					}
				})
				.catch(err => {
					console.log(err);
				});
			},
			myQuote () {
				uni.showToast({
					title: '此功能暂未开发，敬请期待！',
					icon: 'none',
					duration: 1000
				});
			},
			mySeek () {
				uni.showToast({
					title: '此功能暂未开发，敬请期待！',
					icon: 'none',
					duration: 1000
				});
			},
			resetDataPage(e){
				console.log(e, '根据路径参数，判断页面如何显示------------普通！');
				if (e.sourceTemp === 0) { // 来源于模板，发布采购
					this.isEdit.isEditShowBtn = true;
					this.isEdit.isBtnBottom = '88upx';
				} else if (e.sourceTemp !== 0) {
					if (e.sourceTemp === 4) { // 来源我的采购
						if (e.purcState === '0' || e.purcState === '4') { // 未发布状态或者已下架状态
							this.isEdit.isEditShowBtn = true;
							this.isEdit.isBtnBottom = '88upx';
						} else { // 已发布，或者已下架
							this.isEdit.isEditShowBtn = false;
							this.isEdit.isBtnBottom = '0upx';
						}
					} else if (e.sourceTemp !== 4) { // 暂定，不是来源于我的采购的都不可以编辑
						this.isEdit.isEditShowBtn = false;
						this.isEdit.isBtnBottom = '0upx';
					}
				}
			},
			getNewDate () {
				console.log('获取当前时间');
				var day2 = new Date();
				day2.setTime(day2.getTime());
				var s2 = day2.getFullYear()+"-" + (day2.getMonth()+1) + "-" + day2.getDate();
				return s2
			},
			againEditCaigou () {
				console.log('触发继续编辑按钮');
				this.$store.commit('setPreviceCaiGou', false); // 更新setPreviceCaiGou
			}
		}
	};
</script>

<style>
	.Btn-box{
		width: 100%;
	}
	.businessBtn{
		position: relative;
		width: 100%;
	}
	.itemsBtn{
		position: relative;
		width: 33.33%;
	}
	.priceBtn{
		position: relative;
		width: 50%;
	}
	.publishBtn{
		position: relative;
		width: 50%;
	}
	.publishBtn{
		width: 50%;
	}
	.preview-box{
		position: relative;
		width: 100%;
		min-height: 100vh;
		padding-bottom: 10vh;
	}
	.preview-content{
		position: relative;
		width: 100vw;
		padding-bottom: 10vh;
	}
	.againEditBtn-box{
		position: relative;
		width: 100%;
	}
	.againEditBtn{
		position: relative;
		width: 50%;
	}
	.againPublishBtn{
		position: relative;
		width: 50%;
	}
	.countDown{
		position: relative;
		width: 100%;
		background: #fff;
		padding:2vw 3vw 0;
	}
	.countDown{
		position: relative;
		width: 100%;
	}
	.count-end{
		position: relative;
		width: 100%;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		letter-spacing: 0;
		line-height: 80upx;
	}
	.count-num{
		font-family: PingFangSC-Regular;
		font-size: 24upx;
		color: #9B9B9B;
		letter-spacing: 0;
		float: right;
	}
	.count-text{
		position: absolute;
		top: 0;
		width: 100%;
		text-align: center;
		font-family: PingFangSC-Medium;
		font-size: 28upx;
		color: #FF3A2E;
		letter-spacing: 0;
		text-align: center;
		line-height: 80upx;
		padding-left: 3vw;
	}
	.count-start{
		font-family: PingFangSC-Regular;
		font-size: 24upx;
		color: #9B9B9B;
		line-height: 40upx;
		padding-bottom: 26upx;
	}
	.baoJia{
		position: absolute;
		right: 3vw;
	}
	.caiGou-content{
		position: relative;
		width: 100%;
		margin-top: 2vw;
		background: #fff;
		padding: 0 3vw;
	}
	.caiGou-title{
		position: relative;
		width: 100%;
		font-family: PingFangSC-Medium;
		font-size: 36upx;
		color: #2E2E30;
		letter-spacing: 0;
		line-height: 110upx;
		font-weight: bold;
	}
	.caiGou-product{
		position: relative;
		width: 100%;
		margin-bottom: 3vw;
		padding: 3vw;
		background: #FFFFFF;
		border: 1px solid #D2D2D2;
		border-radius: 8px;
	}
	.rightLine{
		position: absolute;
		top: 0;
		left: 0;
		width: 10upx;
		height: 100%;
		background: #02C2A2;
		border-radius: 13px 0 0 13px;
	}
	.two-titel{
		position: relative;
		width: 100%;
		font-family: PingFangSC-Medium;
		font-size: 36upx;
		color: #2E2E30;
		text-align: justify;
		line-height: 56upx;
		font-weight: bold;
		margin-bottom: 7px;
	}
	.caiGouListItems{
		position: relative;
		width: 100%;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #9B9B9B;
		text-align: left;
		line-height: 52upx;
	}
	.caiGou-img{
		position: relative;
		width: 100%;
		margin-top: 2vw;
	}
	.imgList-items{
		position: relative;
		width: 100%;
	}
	.img-items{
		position: relative;
		width: 100%;
	}
	
	.reportFrom-box {
		position: relative;
		width: 100%;
		background: #fff;
	}
	.RF-title {
		position: relative;
		width: 100%;
		padding: 1vw 4vw 1vw 4vw;
		margin-bottom: 2vw;
	}
	.RF-title > p {
		font-family: PingFang-SC-Bold;
		font-size: 4.266vw;
		color: #2e2e30;
		line-height: 5vw;
	}
	.reportFrom {
		position: relative;
		width: 100%;
	}
	.RF-top {
		position: relative;
		width: 100%;
	}
	.RF-bg {
		position: relative;
		background: #fafafa;
	}
	.RF-item {
		position: relative;
		border-top: 1px solid #d2d2d2;
	}
	.color9B9B9B{
		color: #9B9B9B !important;
	}
	.width1{
		width: 39%;
	}
	.width2{
		width: 61%;
	}
	.width3{
		width: 35%;
	}
	.RF-item > p {
		position: relative;
		width: 100%;
		font-family: PingFang-SC-Regular;
		font-size: 3.5vw;
		color: #2e2e30;
		line-height: 6.4vw;
		padding: 14upx 1vw 10upx 3vw;
	}
	.borderRight {
		border-right: 1px solid #d2d2d2;
	}
	.borderLeft {
		border-left: 1px solid #d2d2d2;
	}
	.findMore-RF {
		position: relative;
		width: 100%;
	}
	.findMore-RF > p {
		position: relative;
		width: 100%;
		text-align: center;
		font-family: PingFang-SC-Medium;
		font-size: 3.5vw;
		color: #9b9b9b;
		line-height: 10.4vw;
	}
	.lineBoxTop {
		border-top: 1px solid #d2d2d2;
	}
	.waterMark{
			/* background: #F9F9F9; */
		}
		.text{
			font-family: PingFangSC-Regular;
			font-size: 24upx;
			color: #bdbdbd;
			text-align: center;
			line-height: 80upx;
			padding: 20vw 0 0;
		}
</style>
