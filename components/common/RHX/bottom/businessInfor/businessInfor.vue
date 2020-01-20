<template>
	<view class="Edit-instructions">
		
		<view class="Edit-instructions-A">
			<!-- 标题组件 -->
			<rTitle
			:disabled='!disabled'
			:isShowOne='true'
			placeholderOne='请填写公司名称…例如:xxx有限公司'
			:valueOne="businessTemLists.companyName"
			typeOne="text" 
			:focusOne='false'
			:cursorOne='0'
			adjustPositionOne='adjustPosition'
			tTAlignOne='center'
			tFontSizeOne='4.266vw'
			tColorOne='#2E2E30'
			tLineHeightOne='10vw'
			tWidthOne="100%"
			tHeightOne="10vw"
			tPaddingOne=""
			tBGOne="rgba(212, 253, 247, 0.21)"
			tBorderOne="1px solid #02C2A2"
			tBStyleOne="dashed"
			:tLineYSHow='false'
			:isShowTwo='false'
			@tap-Title='tapCompanyName'
			></rTitle>
			<rTitle
			:disabled='!disabled'
			:isShowOne='false'
			:isShowTwo='true'
			placeholderTwo='请填写商家简介…例如：慧聪网（HK2280）成立于1992年，2003年2月慧聪在香港挂牌上市，成为国内信息服务业及B2B电子商务服务业首家上市公司。'
			:valueTwo='businessTemLists.companyIntro'
			tColorTwo=' #5D5D5D'
			tFontSizeTwo='3.466vw'
			tTAlignTwo='center'
			tWidthTwo="100%"
			tTMarginTwo='0vw 0'
			tHeightTwo=""
			:autoHeightTwo='true'
			tPaddingTwo=""
			tLineHeightTwo='5.6vw'
			tBGTwo="rgba(212, 253, 247, 0.21)"
			tBorderTwo="1px solid #02C2A2"
			tBStyleTwo="dashed"
			@tap-Title='tapCompanyIntro'
			></rTitle>
		</view>
		<view class="Edit-instructions-B">
			<view class="Edit-instructions-Ba">
				<view class="Edit-instructions-Bb">
					<image :src="erweima"></image>
				</view>
				<view class="Edit-instructions-Bc">
					<div class="MI-items">
						<div class="EBI-uploadImg">
							<view class="">
								<!-- 单张图片组件 -->
								<singlePicture
								:disabled='disabled'
								dataList=''
								itemsData=''
								indexNum=''
								:defaultImg='defaultAddImg'
								:imgSrc='businessTemLists.wechatQrImg'
								mode='scaleToFill'
								lazyLoad=true
								pictureWidth='45.33vw'
								pictureHeight='45.33vw'
								@tap-index='tapIndex'
								@tap-Picture='tabPicture'
								:deleteMoveShow='false'
								></singlePicture>
							</view>
						</div>
					</div>
				</view>
			</view>
			<view class="Edit-instructions-Bd">
				请上传二维码
			</view>
		</view>
		<view class="Edit-instructions-C">
			<div class='ca-cb'>
				<view class="Edit-instructions-Ca">联系电话:</view>
				<view class="Edit-instructions-Cb">
					<rTitle
					:disabled='!disabled'
					:isShowOne='true'
					:valueOne="businessTemLists.contactTelphone"
					typeOne="number" 
					placeholderOne='联系电话'
					placeholderStyleOne='placeholderStyle'
					placeholderClassOne='placeholderClass'
					:focusOne='false'
					:cursorOne='0'
					adjustPositionOne='adjustPosition'
					:maxlengthOne="11" 
					tTAlignOne='left'
					tFontSizeOne='28upx'
					tLineHeightOne='6.466vw'
					tWidthOne="100%"
					tHeightOne="6.466vw"
					rbackground="#FFFFFF"
					tPaddingOne="0 10upx"
					tBGOne="rgba(212, 253, 247, 0.21)"
					tBorderOne="1px solid #02C2A2"
					tBStyleOne="dashed"
					:isShowTwo='false'
					@tap-Title='tapPhone'
					style="float: left;"
					></rTitle>
				</view>
				<div class="clear"></div>
				<div class='line'></div>
			</div>
			<div class='ca-cb'>
				<view class="Edit-instructions-Ca">联系邮箱:</view>
				<view class="Edit-instructions-Cb" >
					<rTitle
					:disabled='!disabled'
					:isShowOne='true'
					:valueOne="businessTemLists.contactEmail"
					typeOne="text" 
					placeholderOne='联系邮箱'
					placeholderStyleOne='placeholderStyle'
					placeholderClassOne='placeholderClass'
					:focusOne='false'
					:cursorOne='0'
					adjustPositionOne='adjustPosition'
					maxlengthOne="maxlength" 
					tTAlignOne='left'
					tFontSizeOne='28upx'
					tLineHeightOne='6.466vw'
					tWidthOne="100%"
					tHeightOne="6.466vw"
					rbackground="#FFFFFF"
					tPaddingOne="0 10upx"
					tBGOne="rgba(212, 253, 247, 0.21)"
					tBorderOne="1px solid #02C2A2"
					tBStyleOne="dashed"
					:isShowTwo='false'
					@tap-Title='tapEmail'
					style="float: left;"
					></rTitle>
				</view>
				<div class="clear"></div>
				<div class='line'></div>
			</div>
			<div class='ca-cb'>
				<view class="Edit-instructions-Ca">所在地区:</view>
				<view class="Edit-instructions-Cb">
					<div class='areaBox'>
						<provinceCity
						column="3" 
						textAlignArea='left'
						bgColor='#F9F9F9'
						marginArea='0 0 0 -12px'
						:value="businessTemLists.proCityAreaStr"  
						@clickCity="getCity"
						></provinceCity>
					</div>
				</view>
				<div class="clear"></div>
				<div class='line'></div>
			</div>
			<div class='ca-cb'>
				<view class="Edit-instructions-Ca">联系地址:</view>
				<view class="Edit-instructions-Cb">
					<rTitle
					:disabled='!disabled'
					:isShowOne='true'
					:valueOne="businessTemLists.addressDetail"
					typeOne="text" 
					placeholderOne='联系地址'
					placeholderStyleOne='placeholderStyle'
					placeholderClassOne='placeholderClass'
					:focusOne='false'
					:cursorOne='0'
					adjustPositionOne='adjustPosition'
					maxlengthOne="maxlength" 
					tTAlignOne='left'
					tFontSizeOne='28upx'
					tLineHeightOne='6.466vw'
					tWidthOne="100%"
					tHeightOne="6.466vw"
					rbackground="#FFFFFF"
					tPaddingOne="0 10upx"
					tBGOne="rgba(212, 253, 247, 0.21)"
					tBorderOne="1px solid #02C2A2"
					tBStyleOne="dashed"
					:isShowTwo='false'
					@tap-Title='tapDetail'
					style="float: left;"
					></rTitle>
				</view>
				<div class="clear"></div>
				<div class='line'></div>
			</div>
			</view>
		<!-- <view class="Edit-instructions-D">
			保存
		</view> -->
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</view>
</template>

<script>
	import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
	import navigation from "@/components/mbbo/navigation/navigation.vue";
	import rTitle from '@/components/common/RHX/rTitle/rTitle';
	import erweima from '@/static/mbcImg/news/erweima.png';
	import singlePicture from '@/components/common/RHX/singlePicture/singlePicture';
	import provinceCity from '@/components/common/provinceCity/provinceCity.vue';
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				erweima: erweima,
				businessTemLists: this.businessTemList, // 商家数据
			};
		},
		props: [
			'disabled',
			'defaultAddImg',
			'businessTemList',
			'deleteMoveShow'
		],
		watch: {
			businessTemList: {
				handler(a, b) {
					console.log('----------------businessTemLists--------------')
					this.businessTemLists = a;
				},
				deep: true
			},
		},
		components: {
			quickBtn,
			navigation,
			rTitle,
			singlePicture,
			provinceCity
			// imageUploadMore
		},
		computed: {
			i18n () {
			  return this.$t('Howtoshow')  
			},
		  ...mapGetters(['GET_HOME', 'QUICKNAVCO','GET_MY'])
		},
		mounted(){
		},
		onLoad:function(){
			uni.setNavigationBarTitle({
				title: this.i18n.product9
			});
		},
		methods: {
			// 公司名称 
			tapCompanyName (e) {
				console.log(e,'公司名称');
				this.businessTemLists.companyName=e[0];
				this.$emit('tap-BusinessInfor', this.businessTemLists);
			},
			// 公司详情
			tapCompanyIntro (e) {
				console.log(e,'公司详情');
				this.businessTemLists.companyIntro=e[1];
				this.$emit('tap-BusinessInfor', this.businessTemLists);
			},
			// 电话
			tapPhone(e) {
				console.log(e, '电话');
				this.businessTemLists.contactTelphone=e[0];
				this.$emit('tap-BusinessInfor', this.businessTemLists);
			},
			// 邮箱
			tapEmail(e){
				console.log(e, '邮箱');
				this.businessTemLists.contactEmail=e[0];
				this.$emit('tap-BusinessInfor', this.businessTemLists);
			},
			getCity(e) {
				console.log(e, '选择城市返回的code、text');
				this.businessTemLists.areaCode = e.tcode;
				this.businessTemLists.cityCode = e.ccode;
				this.businessTemLists.provinceCode = e.pcode;
				this.businessTemLists.proCityAreaStr = e.cityText;
				this.$emit('tap-BusinessInfor', this.businessTemLists);
			},
			// 联系详细地址
			tapDetail(e){
				console.log(e, '联系详细地址');
				this.businessTemLists.addressDetail=e[0];
				this.$emit('tap-BusinessInfor', this.businessTemLists);
			},
			// 点击单张图片
			tabPicture (e) {
				console.log(e, '操作单张图片返回值');
				this.businessTemLists.wechatQrImg=e;
				this.$emit('tap-BusinessInfor', this.businessTemLists);
			},
		}
	};
</script>

<style>
	.ca-cb{
		position: relative;
		width: 100%;
		height: 13vw;
	}
	.areaBox{
		position: relative;
		width: 100%;
		margin-top: -18upx;
	}
	.Edit-instructions{
		width: 100%;
		min-height: 100%;
		padding-bottom: 50upx;
		background: #FFFFFF;
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
	.Edit-instructions-A{
		width: 90%;
		min-height:200upx;
		margin: 50upx auto auto auto;
	}
	.Edit-instructions-B{
		width: 484upx;
		
		/* border: 2upx solid #E2E2E2; */
		margin: 30upx auto;
	}
	.Edit-instructions-Ba{
		width: 100%;
		height: 380upx;
		/* border: 2upx solid #E2E2E2; */
		position: relative;
	}
	.Edit-instructions-Bb{
		width: 364upx;
		height: 364upx;
		margin: 60upx auto;
	}
	.Edit-instructions-Bb>image{
		width: 100%;
		height: 100%;
	}
	.Edit-instructions-Bc{
		width: 346upx;
		height: 358upx;
		position: absolute;
		top: 6upx;
		left: 68upx;
	}
	.Edit-instructions-Bd{
		width: 100%;
		text-align: center;
		height: 120upx;
		font-size: 24upx;
		color: #02C2A2;
		line-height: 36upx;
		padding-top: 26upx;
	}
	.Edit-instructions-C{
		width: 90%;
		margin: 40upx auto 10vh auto;
	}
	.Edit-instructions-Ca{
		width: 130upx;
		height: 56upx;
		font-size: 28upx;
		color: #2E2E30;
		float: left;
		margin-bottom: 16upx;
	}
	.Edit-instructions-Cb{
		width: 532upx;
		height: 56upx;
		float: left;
	}
	.Edit-instructions-D{
		width: 90%;
		height: 88upx;
		background: #02C2A2;
		margin: 60upx auto auto auto;
		text-align: center;
		line-height: 88upx;
		font-size: 32upx;
		color: #FFFFFF;
	}
	
</style>
