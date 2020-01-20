<template>
	<view class="Edit-instructions">
		<view class="my-title">
			<div class="quickBtn-Fd left"><quickBtn></quickBtn></div>
			<view class="myproduct-title">
				{{i18n.product9}}
			</view>
		</view>
		<view class="tian"></view>
		<view class="Edit-instructions-A">
			<!-- 标题组件 -->
			<rTitle
			:disabled='false'
			:isShowOne='true'
			valueOne=""
			typeOne="number" 
			placeholderOne='公司名称'
			placeholderStyleOne='placeholderStyle'
			placeholderClassOne='placeholderClass'
			:focusOne='false'
			:cursorOne='0'
			adjustPositionOne='adjustPosition'
			maxlengthOne="maxlength" 
			tTAlignOne='center'
			tWidthOne=""
			tHeightOne="6.4vw"
			tPaddingOne="1.333vw"
			tBGOne="rgba(212, 253, 247, 0.21)"
			tBorderOne="1px solid #02C2A2"
			tBStyleOne="dashed"
			:isShowTwo='true'
			valueTwo=''
			typeTwo="text" 
			placeholderTwo='请输入商家详情'
			placeholderStyleTwo='placeholderStyle'
			placeholderClassTwo='placeholderClass'
			:focusTwo='false'
			:cursorTwo='0'
			adjustPositionTwo='adjustPosition'
			:tMaxNumShow='false'
			:maxlengthTwo="100"
			tTAlignTwo='center'
			tWidthTwo=""
			tHeightTwo="17.333vw"
			tMinHeightTwo='8.333vw'
			tPaddingTwo="1.333vw"
			tBGTwo="rgba(212, 253, 247, 0.21)"
			tBorderTwo="1px solid #02C2A2"
			tBStyleTwo="dashed"
			@tap-Title='tabTitle'
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
							<view class="" v-if="true">
								<imageUploadMore
								 class="imhae"
									v-model="listData.imageData"
									:server-url="listData.serverUrl" 
									limit=1
									:typeImg=10
									@delete="deleteImage" 
									@add="addImage">
								</imageUploadMore>
							</view>
						</div>
					</div>
				</view>
			</view>
			<view class="Edit-instructions-Bd">
				长按识别图中二维码</br>若无法识别，请复制链接在微信中打开
			</view>
		</view>
		<view class="Edit-instructions-C">
			<view class="Edit-instructions-Ca">联系电话:</view>
			<view class="Edit-instructions-Cb">
				<rTitle
				:disabled='false'
				:isShowOne='true'
				valueOne=""
				typeOne="text" 
				placeholderOne='联系电话'
				placeholderStyleOne='placeholderStyle'
				placeholderClassOne='placeholderClass'
				:focusOne='false'
				:cursorOne='0'
				adjustPositionOne='adjustPosition'
				maxlengthOne="maxlength" 
				tTAlignOne='left'
				tWidthOne=""
				tHeightOne=""
				tPaddingOne=""
				tBGOne="rgba(212, 253, 247, 0.21)"
				tBorderOne="1px solid #02C2A2"
				tBStyleOne="dashed"
				:isShowTwo='false'
				@tap-Title='tabTitle'
				style="float: left;"
				></rTitle>
			</view>
			<view class="Edit-instructions-Ca">联系邮箱:</view>
			<view class="Edit-instructions-Cb">
				<rTitle
				:disabled='false'
				:isShowOne='true'
				valueOne=""
				typeOne="text" 
				placeholderOne='联系邮箱'
				placeholderStyleOne='placeholderStyle'
				placeholderClassOne='placeholderClass'
				:focusOne='false'
				:cursorOne='0'
				adjustPositionOne='adjustPosition'
				maxlengthOne="maxlength" 
				tTAlignOne='left'
				tWidthOne=""
				tHeightOne=""
				tPaddingOne=""
				tBGOne="rgba(212, 253, 247, 0.21)"
				tBorderOne="1px solid #02C2A2"
				tBStyleOne="dashed"
				:isShowTwo='false'
				@tap-Title='tabTitle'
				style="float: left;"
				></rTitle>
			</view>
			<view class="Edit-instructions-Ca">联系地址:</view>
			<view class="Edit-instructions-Cb">
				<rTitle
				:disabled='false'
				:isShowOne='true'
				valueOne=""
				typeOne="text" 
				placeholderOne='联系地址'
				placeholderStyleOne='placeholderStyle'
				placeholderClassOne='placeholderClass'
				:focusOne='false'
				:cursorOne='0'
				adjustPositionOne='adjustPosition'
				maxlengthOne="maxlength" 
				tTAlignOne='left'
				tWidthOne=""
				tHeightOne=""
				tPaddingOne=""
				tBGOne="rgba(212, 253, 247, 0.21)"
				tBorderOne="1px solid #02C2A2"
				tBStyleOne="dashed"
				:isShowTwo='false'
				@tap-Title='tabTitle'
				style="float: left;"
				></rTitle>
			</view>
		</view>
		<view class="Edit-instructions-D">
			保存
		</view>
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</view>
</template>

<script>
	import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
	import navigation from "@/components/mbbo/navigation/navigation.vue";
	import rTitle from '@/components/common/RHX/rTitle/rTitle';
	import erweima from '@/static/mbcImg/news/erweima.png';
	import imageUploadMore from '@/components/common/imageUpload/imageUploadMore.vue';
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				erweima:erweima,
				logo1:[],
				listData: {
					imageData: [],
					serverUrl: 'https://img01.iambuyer.com/imgup/upLoad/fileUpload', // 图片上传地址
				},
			};
		},
		components: {
			quickBtn,
			navigation,
			rTitle,
			imageUploadMore
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
			tabTitle (e) {
				console.log(e,'点击标题返回值----数组');
			},
			addImage: function(e) {
				console.log(e, '添加图片')
				if (e.allImages) { // 上传成功
					this.logo1=e.allImages[0].imgName;
					console.log(this.logo1)
				}
			},
			deleteImage:function(e,index){
				console.log(e,'删除图片')
				this.logo1=[]
				console.log(this.logo1,'删除后的数组')
			}
			
		}
	};
</script>

<style>
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
		height:200upx;
		margin: 50upx auto auto auto;
	}
	.Edit-instructions-B{
		width: 484upx;
		height: 604upx;
		border: 2upx solid #E2E2E2;
		margin: 30upx auto;
	}
	.Edit-instructions-Ba{
		width: 100%;
		height: 484upx;
		border: 2upx solid #E2E2E2;
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
		width: 315upx;
		height: 315upx;
		position: absolute;
		top: 84upx;
		left: 86upx;
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
		height: 130upx;
		margin: 40upx auto auto auto;
	}
	.Edit-instructions-Ca{
		width: 130upx;
		height: 30upx;
		font-size: 26upx;
		color: #5D5D5D;
		float: left;
	}
	.Edit-instructions-Cb{
		width: 532upx;
		height: 44upx;
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
