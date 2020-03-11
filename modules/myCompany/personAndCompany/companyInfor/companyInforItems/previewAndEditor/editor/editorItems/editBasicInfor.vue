<template>
	<div class="editBasicInfor-content">
		<view class="my-title">
			<div class="quickBtn-Fd left"><quickBtn></quickBtn></div>
			<view class="myproduct-title">
				编辑基本信息
			</view>
		</view>
		<view class="tian"></view>
		<div class="editBasicInfor">
			<div class="editBasicInfor-box">
				<!--logo 名称-->
				<div class="MI-box M-Bttom">
					<div class="MI-items">
						<div class="MI-left-EBI left">
							<img :src="xing" alt="" class="img" />
							<p class="">企业logo</p>
						</div>
						<div class="MI-right right">
							<div class="right-Box-MI">
								<div class="img-MI left">
									<view class="BI-text-right">
										<!-- <view class="BI-picker" v-if="!logo">点击上传</view> -->
										<image class="BI-picker-Img" v-if="!logo" :src="GET_MY.headers.compLogo"></image>
										<view class="Img-logo">
											<!-- 图片上传 -->
											<view class="Img-Upload">
												<imageUploadOne
													v-model="listData.imageData"
													:server-url="listData.serverUrl"
													limit="1"
													:images="0"
													@delete="deleteImage"
													@add="addImage"
												></imageUploadOne>
											</view>
										</view>
										<!-- <image :src="rightArrow" class="BI-rightArrow"></image> -->
									</view>
								</div>
								<div class="arrow-img-MI left"><img :src="lineRightArrow" alt="" class="right" /></div>
							</div>
						</div>
						<div class="clear"></div>
						<div class="line"></div>
					</div>
					<div class="MI-items">
						<div class="MI-left-EBI left">
							<img :src="xing" alt="" class="img" />
							<p class="">企业名称</p>
						</div>
						<div class="MI-right right">
							<div class="right-Box-MI">
								<div class="img-MI EBI-img-MI left">
									<view class="BI-text-right">
										<wInput
											v-model="GET_MY.headers.companyName"
											placeholder="点击填写"
											maxlength='18'
										></wInput>
									</view>
								</div>
								<div class="arrow-img-MI left"></div>
							</div>
						</div>
						<div class="clear"></div>
						<div class="line"></div>
					</div>
				</div>
				<!--简介-->
				<div class="EBI-textArea M-Bttom">
					<div class="MI-left-EBI-TextArea"><p class="">企业简介</p></div>
					<div class="textAarea-box">
						<view class="uni-textarea">
							<textarea placeholder-style=""  maxlength="300" placeholder="请简单描述您的企业" v-model="GET_MY.headers.companyIntro"/>
							<view class="info">{{GET_MY.headers.companyIntro.length}}/300</view>
						</view>
						<!-- <textarea class="introduce2" placeholder="请简单描述您的企业" :rows="8" :cols="30"></textarea> -->
					</div>
				</div>
				<!--行业 地址 二维码-->
				<div class="MI-box">
					<div class="MI-items">
						<div class="MI-left-EBI left">
							<img :src="xing" alt="" class="img" />
							<p class="">所属行业</p>
						</div>
						<!-- <div class="MI-right right">
							<div class="right-Box-MI">
								<div class="img-MI left">
									<p :class="industryDataCkeck.compTypePcodeStr ? 'intro-MI2' : 'intro-MI'">{{ industryDataCkeck.compTypePcodeStr || '点击选择' }}</p>
								</div>
								<div class="arrow-img-MI left"><img :src="lineRightArrow" alt="" class="right" /></div>
							</div>
						</div> -->
						<div class="MI-hao" @click="clickIndustry">
							<div class="MII-nih" v-if="industryss==''&&GET_MY.headers.compTypePcodeStr==''">请输入</div>
							<div class="MII-nih" style="color:black;" v-if="GET_MY.headers.compTypePcodeStr!==''&&industryss==''">{{GET_MY.headers.compTypePcodeStr}}</div>
							<div class="MII-nih" style="color:black;" v-if="industryss!=''">{{industryss}}</div>
							<div class="MII-image"><image :src="lineRightArrow"></image></div>
						</div>
						<div class="clear"></div>
						<div class="line"></div>
					</div>
					<div class="MI-items">
						<div class="MI-left-EBI left">
							<img :src="xing" alt="" class="img" />
							<p class="">联系地址</p>
						</div>
						<div class="MI-hao" @tap="area()">
							<div class="MII-nih" v-if="placker==''&&GET_MY.headers.addrStr==''">请选择</div>
							<div class="MII-nih" style="color:black;" v-if="GET_MY.headers.addrStr!==''&&placker==''">{{GET_MY.headers.addrStr}}</div>
							<div class="MII-nih" style="color:black;" v-if="placker!=''">{{placker}}</div>
							<div class="MII-image"><image :src="lineRightArrow"></image></div>
						</div>
						<div class="clear"></div>
						<div class="line"></div>
					</div>
					<div class="MI-items">
						<div class="MI-left-EBI left"><p class="">微信公众号二维码</p></div>
						<div class="MI-right right">
							<div class="right-Box-MI">
								<div class="img-MI left">
									<view class="BI-text-right">
										<!-- <view class="BI-picker" v-if="!listData.logo">点击上传</view> -->
										<image class="BI-picker-Img" v-if="!logoo" :src="GET_MY.headers.wechatQrImg"></image>
										<view class="Img-logo">
											<!-- 图片上传 -->
											<view class="Img-Upload">
												<imageUploadOne
													v-model="listData.imageData"
													:server-url="listData.serverUrl"
													limit="1"
													:images="0"
													@delete="deleteImages"
													@add="addImages"
												></imageUploadOne>
											</view>
										</view>
									</view>
								</div>
								<div class="arrow-img-MI left"><img :src="lineRightArrow" alt="" class="right" /></div>
							</div>
						</div>
						<div class="clear"></div>
						<div class="line"></div>
					</div>
				</div>
				<!--提示-->
				<div class="topTips"><p class="T-left">上传官方微信公众号二维码，方便更多用户关注您</p></div>
				<!--电话 邮箱-->
				<div class="MI-box M-Bttom">
					<div class="MI-items">
						<div class="MI-left-EBI left">
							<img :src="xing" alt="" class="img" />
							<p class="">联系人</p>
						</div>
						<div class="MI-right right">
							<div class="right-Box-MI">
								<div class="img-MI EBI-img-MI left">
									<view class="BI-text-right">
										<wInput
											v-model="GET_MY.headers.contactMan"
											placeholder="点击填写"
										></wInput>
									</view>
								</div>
								<div class="arrow-img-MI left"><!--<img :src="lineRightArrow" alt="" class="right">--></div>
							</div>
						</div>
						<div class="clear"></div>
						<div class="line"></div>
					</div>
					<div class="MI-items">
						<div class="MI-left-EBI left">
							<img :src="xing" alt="" class="img" />
							<p class="">联系电话</p>
						</div>
						<div class="MI-right right">
							<div class="right-Box-MI">
								<div class="img-MI EBI-img-MI left">
									<view class="BI-text-right">
										<wInput
											v-model="GET_MY.headers.contactTelphone"
											placeholder="点击填写"
											maxlength="11"
										></wInput>
									</view>
								</div>
								<div class="arrow-img-MI left"><!--<img :src="lineRightArrow" alt="" class="right">--></div>
							</div>
						</div>
						<div class="clear"></div>
						<div class="line"></div>
					</div>
					<div class="MI-items">
						<div class="MI-left-EBI left"><p class="">联系邮箱</p></div>
						<div class="MI-right right">
							<div class="right-Box-MI">
								<div class="img-MI EBI-img-MI left">
									<view class="BI-text-right">
										<wInput
											v-model="GET_MY.headers.contactEmail"
											placeholder="点击填写"
										></wInput>
									</view>
								</div>
								<div class="arrow-img-MI left"><!--<img :src="lineRightArrow" alt="" class="right">--></div>
							</div>
						</div>
						<div class="clear"></div>
						<div class="line"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="BIF-bottom">
			<div class="BIF-btn" @click="clickSaveBasicInfor">保存</div>
		</div>
		<navigation v-if="QUICKNAVCO.show"></navigation>
		<!--行业组件-->
		<industry 
		v-if="hangye==1" 
		v-on:CloseMask="CloseMask" 
		v-on:clickConfirm="clickConfirm" 
		:data="industryss"
		></industry>
		<!--图片预览组件-->
		<!-- <previewImg :previewImgSrc="ImgSrc"  @sendValueToParent = "getValueFromChild"v-if="previewImgShow"></previewImg> -->
	</div>
</template>

<script>
import industry from './industryAddress/industry';
import wInput from '@/components/common/watch-login/watch-input1.vue';
import imageUploadOne from '@/components/common/imageUpload/imageUploadOne.vue';
import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
import navigation from "@/components/mbbo/navigation/navigation.vue";
import { mapMutations, mapGetters } from 'vuex';
export default {
	name: 'editBasicInfor',
	components: {
		wInput,
		imageUploadOne,
		quickBtn,
		navigation,
		industry
	},
	data() {
		return {
			text: '',
			touxiang: '',
			touxiang1:  this.Static+'images/business/home/extendManageList/touxiang.png',
			lineRightArrow:  this.Static+'images/common/line-right-arrow.png',
			xing:  this.Static+'images/common/xing.png',
			logo:'',
			logos:'',
			logoo:'',
			logoos:'',
			placker:'',
			hangye:0,
			industryss:'',
			timeOutEvent: 0,
			previewImgShow: false, // 预览组件显示，默认为false
			ImgSrc: '', // 预览图片路径参数
			action: 'http://img01.iambuyer.com/imgup/upLoad/fileUpload',
			files: [],
			files2: [],
			industryShow: false,
			addressDetail: '',
			idStringAddress: '',
			addrPcode: '', // 省
			addrCcode: '', // 市
			addrAcode: '', // 区
			industryDataCkeck: {
				// 所属行业
				compTypePcodeStr: '',
				compTypePcode: 0
			},
			listData: {
				imageData: [],
				serverUrl: 'https://img01.iambuyer.com/imgup/upLoad/fileUpload' // 图片上传地址
			},
			UserData: {
				passWord: null,
				compLogo: 'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKB0hUYibokE4jkgia3wClLMz8l20TYbdX0uibziavftrg0ylDne3W9N7mIQI7SRtibpmic5p0KP1WK7ONw/132',
				wechatQrImg: 'https://img04.iambuyer.com/imgup/upload/images/2019/07/15/PM1sECJS2n1G7n5sCDwcQWlB8kNlPrHoEYnQPJ79b4I7LpNNxN0v9Eb46SDBm4fk.jpeg',
				companyName: '菅双鹤',
				nickname: '菅双鹤',
				companyIntro: '',
				addressDetail: '肉丸无语',
				contactTelphone: '13146296160',
				contactEmail: '274088960@qq.com',
				contactMan: '偶遇语音',
				userPhone: '13146296160',
				userEmail: '11@qq.com',
				money: 2718,
				beyondUser: '91.00%',
				wxId: '12555',
				content: '购物与物无忤',
				headImg: 'https://img04.iambuyer.com/imgup/upload/images/2019/06/18/M2Mhcjjc2Bu5b6jatbBmSPsyLgfdTRBTuT88rYVpgQmcsOAOjxlFNfgZ20B5FbyUoXe6nT.jpeg',
				toBCount: 9,
				toCCount: 11,
				companyAccountVo: {
					money: 0,
					frozenMoney: null,
					consMoney: 0,
					putInCount: 0,
					authState: '2',
					toDayRechMoney: null,
					yesterdayConsMoney: null
				},
				compTypePcode: 120,
				compTypeCode: 0,
				compTypePcodeStr: '计算机服务和软件业',
				compTypeCodeStr: null,
				provinceCode: '110000',
				cityCode: '110100',
				areaCode: '110101',
				provinceCodeStr: '北京',
				cityCodeStr: '北京市',
				areaCodeStr: '东城区',
				vipState: '1',
				cydVipLv: null
			},
			imgData: {}
		};
	},
	created() {
	},
	onLoad:function(){
		uni.setNavigationBarTitle({//标题 已收藏
			title: '公司信息'
		});
	},
	computed: {
		...mapGetters(['PERSONCENTER', 'IMGDATA','QUICKNAVCO','GET_MY'])
	},
	watch: {
		PERSONCENTER: {
			handler(a, b) {
				this.UserData = a.basicInforEdit; // 基本信息
				this.addressDetail = a.info.idStringAddress;
				this.industryShow = a.industry.industryShow;
				this.industryDataCkeck = a.industry.industryCheck; // 所属会员
				this.addrPcode = a.info.addrPcode; // 省
				this.addrCcode = a.info.addrCcode; // 市
				this.addrAcode = a.info.addrAcode; // 区
			},
			
			deep: true
		},
		GET_MY: {
			handler(a, b) {
				console.log(a, b, 'header----list');
				// console.log(a.GET_MY.Effective)
				this.Effec=a.Effective
				if(a.clickCity.idString!==undefined){
					this.placker=a.clickCity.idString
					this.regPcode=a.clickCity.addrPcode
					this.regCcode=a.clickCity.addrCcode
					this.regAcode=a.clickCity.addrTcode
					this.regAddr=a.clickCity.idaddress
				}
				
				// this.authQualTypeText=a.clickCity.idString
			},
			deep: true
		},
	},
	mounted() {},
	methods: {
		...mapMutations({
			setAddShow: 'setAddShow',
			setIdStringAddress: 'setIdStringAddress',
			setIdString: 'setIdString',
			setAddrPcode: 'setAddrPcode',
			setAddrCcode: 'setAddrCcode',
			setAddrAcode: 'setAddrAcode',
			setIdAddress: 'setIdAddress',
			setLoadingShow: 'setLoadingShow',
			setLoadingText: 'setLoadingText',
			setIndustryShow: 'setIndustryShow',
			setIndustryData: 'setIndustryData',
			setIndustryCheck: 'setIndustryCheck',
			setBasicInforEdit: 'setBasicInforEdit',
			setCompLogo: 'setCompLogo',
			setWechatQrImg: 'setWechatQrImg'
		}),
		CloseMask:function(CloseMask){
			this.hangye= CloseMask
		},
		clickConfirm:function(clickConfirm){
			console.log(clickConfirm)
			this.industryss=clickConfirm.name
			this.id=clickConfirm.id
		},
		area() {
			console.log('to地址选择');
			uni.navigateTo({
				url: '/modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/industryAddress/address',
			});
		},
		clickIndustry() {
			console.log('触发所属行业按钮');
			this.hangye=1;
			console.log(this.hangye)
		},
		clickSaveBasicInfor() {
			if(this.logo==''&&this.GET_MY.headers.compLogo==''){
				uni.showToast({
					title: '请选择企业logo',
					icon: 'none',
					duration: 1000
				});
				return false;
			}else if(this.GET_MY.headers.companyName==''){
				uni.showToast({
					title: '请填写企业名称',
					icon: 'none',
					duration: 1000
				});
				return false;
			}else if(this.GET_MY.headers.compTypePcodeStr==''&&this.industryss==''){
				uni.showToast({
					title: '请选择所属行业',
					icon: 'none',
					duration: 1000
				});
				return false;
			}else if(this.GET_MY.headers.addrStr==''&&this.placker==''){
				uni.showToast({
					title: '请选择联系地址',
					icon: 'none',
					duration: 1000
				});
				return false;
			}else if(this.GET_MY.headers.contactMan==''){
				uni.showToast({
					title: '请输入联系人',
					icon: 'none',
					duration: 1000
				});
				return false;
			}else if(this.GET_MY.headers.contactTelphone==''){
				uni.showToast({
					title: '请输入联系电话',
					icon: 'none',
					duration: 1000
				});
				return false;
			}else if(!(/^1[3456789]\d{9}$/.test(this.GET_MY.headers.contactTelphone))){
				uni.showToast({
					title: '手机号格式有误，请重输',
					icon: 'none',
					duration: 1000
				});
				return false;
			}else if(this.GET_MY.headers.contactEmail!==''){
				if(!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(this.GET_MY.headers.contactEmail)){
					uni.showToast({
						title: '邮箱格式有误',
						icon: 'none',
						duration: 1000
					});
					return false;
				}
			}
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {
						compLogo:this.logo,
						companyName:this.GET_MY.headers.companyName,
						companyIntro:this.GET_MY.headers.companyIntro,
						compTypePcode:this.id,
						provinceCode:this.regPcode,
						cityCode:this.regCcode,
						areaCode:this.regAcode,
						addressDetail:this.regAddr,
						wechatQrImg:this.logoo,
						contactTelphone:this.GET_MY.headers.contactTelphone,
						contactEmail:this.GET_MY.headers.contactEmail,
						contactMan:this.GET_MY.headers.contactMan,
					}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					console.log(params)
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
							if(this.logo){
								this.GET_MY.headers.compLogo = this.logos;
								console.log(1)
							}else{
								this.GET_MY.headers.compLogo = this.GET_MY.headers.compLogo;
								console.log(2)
							}
							if(this.industryss!==''){
								this.GET_MY.headers.compTypePcodeStr=this.industryss
							}
							if(this.placker!==''){
								this.GET_MY.headers.addressDetail=this.regAddr
							}
							if(this.logoo){
								this.GET_MY.headers.wechatQrImg=this.logoos
							}else{
								this.GET_MY.headers.wechatQrImg=this.GET_MY.headers.wechatQrImg
							}
							// this.$store.commit('setMy', this.GET_MY.headers);
							this.getmy();
							
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
		getmy() {
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				let params = {}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/user/'+landRegistLG.user.id, //接口地址。
					// data: this.endParams(params),
					method: 'GET',
					header: {
						Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
					},
					success: (response) => {
						uni.hideLoading();
						if (response.data.ret === '202') {
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
						}else{
							uni.navigateBack({});
							this.list = response.data.content
							this.$store.commit('setMy', this.list); // 更新vuex
						}
						// console.log(response.data);
						
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
		//企业logo
		deleteImage: function(e) {
			console.log(e, '删除图片')
			this.logo = ''; // 清空数据
		},
		addImage: function(e) {
			console.log(e, '添加图片')
			if (e.allImages) { // 上传成功
				this.logo = (e.allImages[0].imgName);
				this.logos = (e.allImages[0].imgUrl)
				console.log(this.logo)
			}
		},
		//二维码
		deleteImages: function(e) {
			console.log(e, '删除图片')
			this.logoo = ''; // 清空数据
		},
		addImages: function(e) {
			console.log(e, '添加图片')
			if (e.allImages) { // 上传成功
				this.logoo = (e.allImages.imgName);
				this.logoos = (e.allImages.imgUrl)
				console.log(this.logo)
			}
		},
	}
};
</script>

<style scoped>
	.uni-textarea >textarea{
		margin-left: 4%;
	}
	.info{
		position: absolute;
		bottom: 0;right: 0;font-size:24upx;
		color: #d2d2d2;
	}
	.tian{
			width: 100%;
			height: 88upx;
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
		.myproduct-title{
			width: 67%;
			height: 100%;
			margin-left: 120upx;
			line-height: 90upx;
			float: left;
			text-align: center;
		}
.BI-text-right {
	position: relative;
	width: 100%;
	    margin-top: 36upx;
	margin-bottom: 44upx;
}
.BI-picker {
	position: relative;
	font-family: PingFang-SC-Medium;
	font-size: 28upx;
	color: #d2d2d2;
	overflow: hidden;
	text-overflow: clip;
	white-space: pre;
	word-break: keep-all;
	letter-spacing: 0;
	padding: 0px;
	    margin-top: 36upx;
	margin-bottom: 44upx;
	line-height: 36upx;
	margin-left: 24upx;
	text-align: right;
	-webkit-box-flex: 1;
	-webkit-flex: 1;
	-ms-flex: 1;
	flex: 1;
	text-align: right;
	margin-left: 0px;
}
.BI-pickered {
	color: #2e2e30 !important;
}
.Img-Upload {
	width: 120upx;
	height: 80upx;
	position: absolute;
	right: 28upx;
	top: -20upx;
}
.BI-picker-Img {
	width: 80upx;
	height: 80upx;
	position: absolute;
	right: 28upx;
	top: -20upx;
}
.mustFill {
	position: absolute;
	left: 0;
}
.mustFill > image {
	position: relative;
	width: 14upx;
	height: 14upx;
}
.uni-input-wrapper {
	text-align: right;
}
.BI-rightArrow {
	position: absolute;
	width: 24upx;
	height: 24upx;
	right: 0;
	top: 6upx;
}
.uni-input-placeholder {
	color: #d2d2d2 !important;
}
.editBasicInfor-content {
	position: relative;
	width: 100%;
	background: #f9f9f9;
}
.editBasicInfor {
	position: relative;
	width: 100%;
	background: #f9f9f9;
	padding-bottom: 5vh;
	-webkit-overflow-scrolling: touch;
}
.editBasicInfor-box {
	position: relative;
	width: 100%;
	margin-bottom: 20vw;
}
.topTips {
	position: relative;
	width: 100%;
	background: #f9f9f9;
	padding: 0 4vw 0 4vw;
}
.topTips > p {
	position: relative;
	width: 100%;
	font-family: PingFangSC-Light;
	font-size: 3.2vw;
	color: #9b9b9b;
	line-height: 8vw;
	text-align: center;
}
.EBI-textArea {
	position: relative;
	width: 100%;
	background: #fff;
	padding: 0 4vw 0 4vw;
}
.textAarea-box {
	position: relative;
	width: 100%;
}
.introduce2 {
	position: relative;
	width: 96%;
	margin-left: 4%;
}
.MI-box {
	position: relative;
	width: 100%;
	padding: 0vw 4vw 0 4vw;
	background: #fff;
}
.MI-items {
	position: relative;
	width: 100%;
}
.MI-left-EBI {
	position: relative;
	width: 37%;
	height: 15vw;
	float: left;
}
.MI-left-EBI > img {
	position: relative;
	width: 2vw;
	float: left;
	top: 5.5vw;
	margin-right: 1vw;
	left: 0;
	display: inline-block;
}
.MI-left-EBI-TextArea>p{
	font-family: PingFangSC-Light;
	font-size: 3.733vw;
	color: #2e2e30;
	padding-top: 4vw;
	margin-left: 4vw;
}
.MI-left-EBI > p {
	position: absolute;
	font-family: PingFangSC-Light;
	font-size: 3.733vw;
	color: #2e2e30;
	line-height: 15vw;
	margin-left: 4vw;
}
.MI-right {
	position: relative;
	width: 50%;
}
.right-Box-MI {
	position: relative;
	width: 100%;
}
.img-MI {
	position: relative;
	width: 90%;
}
.EBI-img-MI {
	width: 100% !important;
}
.img-MI .touxiang {
	position: relative;
	width: 100%;
	float: right;
}
.imgTouXiang {
	position: relative;
	width: 10.66vw;
	height: 10.66vw;
	margin-top: 2.1vw;
}
.imgKongText {
	position: relative;
	width: 100%;
	font-family: PingFang-SC-Medium;
	font-size: 3.733vw;
	color: #d2d2d2;
	letter-spacing: 0;
	text-align: right;
	line-height: 15vw;
}
.arrow-img-MI {
	position: relative;
	width: 10%;
}
.arrow-img-MI > img {
	position: relative;
	width: 2vw;
	height: 2vw;
	margin-top: 6.5vw;
	float: right;
}
.img{
	width: 15upx;
	height: 15upx;
}
.perInfoItemR {
	width: 100%;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #3c3c3f;
	letter-spacing: 0;
	/* height: 15vw; */
	padding: 5vw 0;
	/* margin: 5vw 0; */
	line-height: 5vw;
	text-align: right;
	margin-right: 1vw;
	float: left;
}
.intro-MI {
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #d2d2d2;
	letter-spacing: 0;
	text-align: right;
	line-height: 15vw;
}
.intro-MI2 {
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #3c3c3f;
	letter-spacing: 0;
	text-align: right;
	line-height: 15vw;
}
.BIF-bottom {
	position: fixed;
	width: 100%;
	height: 113upx;
	/* padding: 1.5vw 4vw 1.5vw 4vw; */
	bottom: 0;
	z-index: 105;
	background: #fff;
}
.BIF-btn {
	position: relative;
	width: 90%;
	height: 80%;
	background: #02c2a2;
	margin: 10upx auto auto auto;
	border-radius: 2px;
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #ffffff;
	text-align: center;
	letter-spacing: 0;
	line-height: 88upx;
}
.MI-hao{
	width:63%;
	height:106upx;
	/* background:red; */
	float:left;
	text-align:right;
	line-height:116upx;
}
.MII-image{
	width:14upx;
	height:100%;
	position:absolute;
	right:0;
	top:0;
	/* #ifdef MP-WEIXIN */
	line-height: 104upx;
	/* #endif */
}
.MII-image>image{
	width:100%;
	height:14upx;
}
.MII-nih{
	margin-right:34upx;
	color: #d2d2d2;
	width: 91%;
	height: 100%;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
	/* #ifdef MP-WEIXIN */
	line-height: 116upx;
	/* #endif */
}
</style>
