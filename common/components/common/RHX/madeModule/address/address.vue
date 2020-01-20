<template>
	<div class="address-content">
		<div class="address">
			<div class="address-box">
				<div class="title left">选择地区</div>
				<div class="text left">
					<provinceCity
					column="3" 
					textAlignArea='left'
					bgColor='#F9F9F9'
					marginArea='0 0 0 -7px'
					value="北京-北京-昌平区" 
					@clickCity="getCity"
					></provinceCity>
				</div>
				<div class="clear"></div>
			</div>
			<div class="line"></div>
			<div class="address-box">
				<div class="title left">选择地区</div>
				<div class="text left">
					<rTitle
					:disabled='false'
					:isShowOne='true'
					valueOne="回龙观七里渠南村"
					placeholderOne='如街道、楼层等详细地址'
					typeOne="text" 
					:maxlengthOne='5'
					:focusOne='false'
					:cursorOne='0'
					adjustPositionOne='adjustPosition'
					tTAlignOne='left'
					tColorOne='#2E2E30'
					tFontSizeOne='3.8vw'
					tLineHeightOne='10.466vw'
					tWidthOne="100%"
					tHeightOne="10.466vw"
					tPaddingOne="1.333vw"
					tBorderOne="1px solid #F9F9F9"
					tBGOne=""
					tBStyleOne="dashed"
					:isShowTwo='false'
					@tap-Title='tapAddress'
					></rTitle>
				</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import provinceCity from '@/components/common/provinceCity/provinceCity.vue';
	import rTitle from '@/components/common/RHX/rTitle/rTitle';
	export default {
		components: {
			rTitle,
			provinceCity
		},
		data() {
			return {
			};
		},
		created () {
		},
		computed: {
			i18n() {
				return this.$t('qualificatCert');
			},
		},
		watch: {
			GET_PUBLISH: {
				handler(a, b) {
				},
				deep: true
			}
		},
		mounted() {},
		beforeDestroy () {
			console.log('页面销毁之前缓存数据更新-----------setImgList、setCaiGouList');
		},
		methods: {
			getCity(e) {
				console.log(e, '选择城市返回的code、text');
				this.caiGouList.purcCcodeStr = e.cityText; // 用户选择的省市区文字
				console.log(this.caiGouList.purcCcodeStr, '------------------this.caiGouList.purcCcodeStr--------------')
			},
			tapAddress (e) {
				console.log(e, '详细地址');
			}
		}
	};
</script>

<style>
	.address-content{
		position: relative;
		width: 100%;
		background: #F9F9F9;
		margin-bottom: 12upx;
	}
	.address{
		position: relative;
		width: 100%;
	}
	.address-box{
		position: relative;
		width: 100%;
	}
	.title{
		position: relative;
		width: 20%;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		line-height: 11vw;
	}
	.text{
		position: relative;
		width: 80%;
	}
</style>
