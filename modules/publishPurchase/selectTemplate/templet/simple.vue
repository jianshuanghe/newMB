<template>
	<div class="editBasicInfor-content">
		<div class="kongBai"></div>
		<div class="editBasicInfor">
			<div class="editBasicInfor-box">
				<div class="MI-box M-Bttom">
					<!--采购名称-->
					<div class="MI-items">
						<div class="MI-left-EBI left">
							<p class="">采购名称</p>
							<img :src="xing" alt="" class="img" />
						</div>
						<div class="MI-right right">
							<div class="right-Box-MI">
								<div class="img-MI EBI-img-MI left">
									<view class="BI-text-right"><wInput v-model="caiGouList.purcTitle" placeholder="您的采购名称" :maxlength="20" typeInput="1"></wInput></view>
								</div>
							</div>
						</div>
						<div class="clear"></div>
						<div class="line"></div>
					</div>
					<!--补充说明-->
					<div class="MI-items">
						<div class="MI-left-EBI left"><p class="">补充说明</p></div>
						<div class="MI-right right">
							<div class="right-Box-MI">
								<div class="img-MI EBI-img-MI left">
									<view class="BI-text-right">
										<rTitle
										:disabled='false'
										:isShowOne='false'
										:isShowTwo='true'
										placeholderTwo='您的其他要求'
										placeholderStyleTwo='color: #BDBDBD'
										:valueTwo='caiGouList.purcContent'
										tColorTwo=' #5D5D5D'
										tFontSizeTwo='3.733vw'
										tTAlignTwo='left'
										tWidthTwo="100%"
										tTMarginTwo='3.5vw 0 0 0'
										tHeightTwo=""
										:tMaxNumShow='false'
										:maxlengthTwo="500"
										:autoHeightTwo='true'
										tPaddingTwo=""
										tLineHeightTwo='5vw'
										tBGTwo=""
										tBorderTwo="0px solid #fff"
										tBStyleTwo="dashed"
										@tap-Title='purcContent'
										></rTitle>
										<!-- <wInput v-model="caiGouList.purcContent" placeholder="您的其他要求" typeInput="1"></wInput> -->
									</view>
								</div>
							</div>
						</div>
						<div class="clear"></div>
						<div class="line"></div>
					</div>
					<!--添加图片-->
					<div class="MI-items">
						<div class="EBI-uploadImg">
							<view class="" v-if="true">
								<imageUploadMore
									class="imhae"
									typeImg="1"
									v-model="listData.imageData"
									:server-url="listData.serverUrl"
									limit="5"
									@delete="deleteImage"
									@add="addImage"
								></imageUploadMore>
							</view>
						</div>
						<!-- 附件上传附件大小，数量等提示 -->
						<div class="tips-EQI"><p class="">注：最多可添加5张哦～</p></div>
						<div class="line"></div>
					</div>
				</div>
			</div>
		</div>
		<!-- 设为默认采购模版 -->
		<div class="checked-moren">
			<div class="B-check-items" @click="checkType(1)">
				<div class="check-items">
					<div class="items-ch-box">
						<div class="check-img left"><img :src="caiGouList.purcType === '0' && caiGouList.purcDefault === '1' ? checked : check" alt="" class="img" /></div>
						<div class="check-text left"><p class="">设为默认采购模版</p></div>
						<div class="clear"></div>
					</div>
				</div>
			</div>
		</div>
		<!-- 公司水印区 -->
		<div class="waterMark">
			<div class="text">本系统由 @陌拜 提供技术支持</div>
		</div>
	</div>
</template>

<script>
import wInput from '@/components/common/watch-login/watch-input.vue';
import rTitle from '@/components/common/RHX/rTitle/rTitle';
import imageUploadMore from '@/components/common/imageUpload/imageUploadMore.vue';
import { mapMutations, mapGetters } from 'vuex';
export default {
	name: 'editQualificatCert',
	components: {
		wInput,
		imageUploadMore,
		rTitle
	},
	data() {
		return {
			xing:  this.Static+'common/xinghao.png',
			check:  this.Static+'home/extendManageList/dataReport/check1.png', // type 选择按钮的未选中状态 img
			checked:  this.Static+'home/extendManageList/dataReport/checked.png', // type 选择按钮的选中状态 img
			check1: false,
			caiGouList:{}, // 采购列表数据
			listData: {}, // 附件数据列表
		};
	},
	created () {
		this.caiGouList = this.GET_PUBLISH.publishPurchase.caiGouList;
		this.listData = this.GET_PUBLISH.publishPurchase.imgList;
	},
	computed: {
		i18n() {
			return this.$t('qualificatCert');
		},
		...mapGetters(['GET_PUBLISH'])
	},
	watch: {
		GET_PUBLISH: {
			handler(a, b) {
				this.caiGouList = a.publishPurchase.caiGouList;
				this.listData = a.publishPurchase.imgList;
			},
			deep: true
		}
	},
	mounted() {},
	beforeDestroy () {
		console.log('页面销毁之前缓存数据更新-----------setImgList、setCaiGouList');
		this.$store.commit('setImgList', this.listData); // 更新ssetImgList
		this.$store.commit('setCaiGouList', this.caiGouList); // 更新setCaiGouList
	},
	methods: {
		...mapMutations({
			setImgList: 'setImgList',
			setCaiGouList: 'setCaiGouList'
		}),
		checkType() {
			console.log('设置采购默认模板');
			if (this.caiGouList.purcDefault === '1') {
				this.caiGouList.purcDefault = '0'
			} else {
				this.caiGouList.purcDefault = '1'
			};
			this.$store.commit('setCaiGouList', this.caiGouList); // 更新setCaiGouList
		},
		purcContent(e) {
			this.caiGouList.purcContent = e[1];
			this.$store.commit('setCaiGouList', this.caiGouList); // 更新setCaiGouList
		},
		addImage (e) {
			console.log(e, '添加的数据');
			this.listData.imageData=e.allImages;
			this.$store.commit('setImgList', this.listData); // 更新ssetImgList
		},
		deleteImage (e) {
			console.log(e, '删除数据');
			this.listData.imageData=e.allImages;
			this.$store.commit('setImgList', this.listData); // 更新ssetImgList
		}
	}
};
</script>

<style scoped>
.B-check-items {
	position: relative;
	width: 100%;
	padding: 12upx 3vw;
}
.check-items {
	position: relative;
	width: 100%;
}
.items-ch-box {
	position: relative;
	width: 100%;
}
.check-img {
	position: relative;
	margin-right: 20upx;
}
.check-img > img {
	position: relative;
	width: 4vw;
	height: 4vw;
}
.check-text {
	position: relative;
	width: 80%;
}
.check-text > p {
	font-family: PingFangSC-Regular;
	font-size: 24upx;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 40upx;
}
.uni-textarea > textarea {
	margin-left: 4%;
}
.info {
	position: absolute;
	bottom: 0;
	right: 0;
	font-size: 24upx;
	color: #d2d2d2;
}
.BI-text-right {
	position: relative;
	width: 100%;
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
.MI-left-EBI-TextArea {
	position: relative;
	width: 100%;
	min-height: 8vw;
}
.MI-left-EBI-TextArea > p {
	position: relative !important;
	line-height: 0 !important;
	font-family: PingFangSC-Light;
	font-size: 3.733vw;
	color: #2e2e30;
	padding-top: 7vw;
	margin-left: 4vw;
	margin-bottom: 1vw;
}
.MI-left-EBI-TextArea > img {
	position: relative;
	width: 2vw;
	height: 2vw;
	float: left;
	top: 5.5vw;
	margin-right: 1vw;
	left: 0;
	display: inline-block;
}
.MI-left-EBI-TextArea > p {
	position: absolute;
	font-family: PingFangSC-Light;
	font-size: 3.733vw;
	color: #2e2e30;
	line-height: 15vw;
	margin-left: 4vw;
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
.editBasicInfor-content {
	position: relative;
	width: 100%;
	background: #f9f9f9;
	padding-bottom: 10vh;
}
.editBasicInfor {
	position: relative;
	width: 100%;
	background: #f9f9f9;
	-webkit-overflow-scrolling: touch;
}
.editBasicInfor-box {
	position: relative;
	width: 100%;
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
	width: 22%;
	height: 11vw;
}
.MI-left-EBI > img {
	position: relative;
	width: 2vw;
	height: 2vw;
	float: right;
	top: 3.5vw;
	margin-right: 1vw;
	left: -8upx;
	display: inline-block;
}
.MI-left-EBI > p {
	position: absolute;
	font-family: PingFangSC-Light;
	font-size: 3.733vw;
	color: #2e2e30;
	line-height: 11vw;
}
.MI-right {
	position: relative;
	width: 78%;
}
.right-Box-MI {
	position: relative;
	width: 100%;
}
.img-MI {
	position: relative;
	width: 90%;
}
.img-MINUM {
	position: relative;
	width: 80% !important;
}
.img-MIDW {
	position: relative;
	width: 20% !important;
	padding-left: 2vw;
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
	padding: 1.5vw 4vw 1.5vw 4vw;
	bottom: 0;
	z-index: 105;
	background: #fff;
}
.BIF-btn {
	position: relative;
	width: 100%;
	background: #02c2a2;
	border-radius: 2px;
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #ffffff;
	text-align: center;
	letter-spacing: 0;
	line-height: 12vw;
}
.error-tips-EBI {
	position: absolute;
	top: 10vw;
	left: 4vw;
	font-family: PingFangSC-Light;
	font-size: 3.2vw;
	color: #ff4d6a;
	line-height: 4vw;
}
.tips-EQI {
	position: relative;
	width: 100%;
	height: 9vw;
}
.tips-EQI > p {
	font-family: PingFangSC-Light;
	font-size: 3.7vw;
	color: #9b9b9b;
	line-height: 8vw;
}
.EBI-uploadImg {
	position: relative;
	width: 100%;
	margin-top: 3vw;
	height: 100%;
}
.waterMark{
		background: #F9F9F9;
	}
	.text{
		font-family: PingFangSC-Regular;
		font-size: 24upx;
		color: #bdbdbd;
		text-align: center;
		line-height: 80upx;
		padding: 10vh 0 0;
	}
	.kongBai{
		height: 2vw;
		width: 100%;
	}
</style>
