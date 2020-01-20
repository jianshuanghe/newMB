<template>
	<div class="addLink-content">
		<div class="addLink">
			<div class="name">按钮名称</div>
			<div class="input-box">
				<inputBox
					:value="itemsData.name"
					type="text"
					:isPassword='false'
					placeholder="想让用户去哪,为它起个名字吧!"
					:adjustPosition="true"
					:maxlength="5"
					inputTAlign='left'
					inputWidth="90vw"
					inputHeight="9vw"
					inputPadding=""
					inputBoxMargin='0'
					inputLineStyle='background: #EEEEEE'
					:inputLine='true'
					@tap-Input='tapLinkName'
				></inputBox>
			</div>
		</div>
		<div class="addLink">
			<div class="name">链接地址</div>
			<div class="input-box">
				<inputBox
					:value="itemsData.url"
					type="text"
					:isPassword='false'
					placeholder="想让用户去哪,为它添加链接地址吧! http://...."
					:adjustPosition="true"
					maxlength=""
					inputTAlign='left'
					inputWidth="90vw"
					inputHeight="9vw"
					inputPadding=""
					inputBoxMargin='0'
					inputLineStyle='background: #EEEEEE'
					:inputLine='true'
					@tap-Input='tapLinkUrl'
				></inputBox>
			</div>
		</div>
	</div>
</template>

<script>
	import inputBox from '@/components/common/RHX/inputBox/inputBox';
	export default {
		data() {
			return {
				itemsData:{ // 按钮数据
					btnShow: true, // 按钮是否展示，默认展示
					delShow: false,
					type: null,
					name: '',
					url: 'https://',
				},
			};
		},
		props: [
			'disabled',
			'addBtnList',
		],
		watch: {
			addBtnList: {
				handler(a, b) {
					console.log(a, b, '-------------------addBtnList-----------------')
					this.showTypeAdd(a);
				},
				deep: true
			},
		},
		components: {
			inputBox
		},
		computed: {
			i18n () {
			  return this.$t('Howtoshow')  
			},
		},
		created () {
			this.showTypeAdd(this.addBtnList);
		},
		mounted(){
		},
		onLoad:function(){
			uni.setNavigationBarTitle({
				title: this.i18n.product9
			});
		},
		methods: {
			// 自动带入显示类型
			showTypeAdd(e) {
				console.log(e, '--------------e--------------');
				if (e.activeAdd === 0) { // 左边
					this.addType = e.btnLeft.type;
					this.itemsData = e.btnLeft;
				} else if (e.activeAdd === 1) { // 右边
					this.addType = e.btnRight.type;
					this.itemsData = e.btnRight;
				}
			},
			// 名称 
			tapLinkName (e) {
				console.log(e,'名字');
				this.itemsData.name = e;
				this.$emit('tap-AddLink', this.itemsData);
			},
			// 链接url
			tapLinkUrl (e) {
				console.log(e,'链接url');
				this.itemsData.url = e;
				this.$emit('tap-AddLink', this.itemsData);
			},
		}
	};
</script>

<style>
	.addLink-content{
		position: relative;
		width: 100%;
	}
	.addLink{
		position: relative;
		width: 90%;
		margin: 0 auto;
	}
	.name{
		font-size: 28upx;
		color: #2E2E30;
		padding-top: 16upx;
		line-height: 60upx;
	}
	.input-box{
		position: relative;
		width: 100%;
	}
</style>
