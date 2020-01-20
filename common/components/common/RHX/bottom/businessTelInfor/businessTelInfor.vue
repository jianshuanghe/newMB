<template>
	<div class="businessTel-content">
		<div class="input-box">
			<inputBox
				:value="businessTemLists.contactTelphone"
				type="text"
				:isPassword='false'
				placeholder="请输入您的联系电话"
				:adjustPosition="true"
				maxlength=""
				inputTAlign='left'
				inputWidth="90vw"
				inputHeight="14vw"
				inputPadding=""
				inputBoxMargin='0'
				inputLineStyle='background: #EEEEEE'
				:inputLine='true'
				@tap-Input='tapInput'
			></inputBox>
		</div>
		<div class="tips">注：保存的信息会直接同步到个人资料哦～</div>
	</div>
</template>

<script>
	import inputBox from '@/components/common/RHX/inputBox/inputBox';
	export default {
		data() {
			return {
				// erweima: erweima,
				businessTemLists: this.businessTemList, // 商家数据
			};
		},
		props: [
			'disabled',
			'defaultAddImg',
			'businessTemList',
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
			inputBox
			// singlePicture
			// imageUploadMore
		},
		computed: {
			i18n () {
			  return this.$t('Howtoshow')  
			},
		},
		mounted(){
		},
		onLoad:function(){
			uni.setNavigationBarTitle({
				title: this.i18n.product9
			});
		},
		methods: {
			// 电话 
			tapInput (e) {
				console.log(e,'电话');
				this.businessTemLists.contactTelphone=e;
				this.$emit('tap-BusinessInfor', this.businessTemLists);
			},
		}
	};
</script>

<style>
	.businessTel-content{
		position: relative;
		width: 100%;
		margin: 60upx 0 0 0;
	}
	.input-box{
		position: relative;
		width: 90%;
		margin: 0 auto;
	}
	.tips{
		position: relative;
		width: 90%;
		margin: 0 auto;
		font-family: PingFangSC-Regular;
		font-size: 24upx;
		color: #FAB100;
		letter-spacing: 0;
		line-height: 50upx;
		margin-bottom: 15vh;
	}
</style>
