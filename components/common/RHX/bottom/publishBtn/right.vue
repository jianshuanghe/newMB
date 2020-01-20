<template>
	<div class="jshBtn-box" :style="{ 
			margin:bMargin,
			border:bBorder,
			borderStyle: bBorderStyle,
			lineHeight: bLineHeight,
			}">
		<p class="jshTextY" 
		:style="{
			borderColor: bColor, 
			padding: paddingNum, 
			background: bgColor, 
			boxShadow: bShadow, 
			backgroundImage: bgImage 
			}"
		@tap='clickBtn'>{{names}}</p>
		<div class="delete" v-if='isShowDel && activeAdd !== 1' @tap='clickDelBtn'>
			<image class="delIcon" :src='dels'></image>
		</div>
	</div>
</template>

<script>
	import dels from '@/static/mbcImg/my/dels.png';
	export default {
		data() {
			return {
				bMargin:'1px',
				bBorder:'',
				bBorderStyle:'',
				bLineHeight:'',
				bgImages: this.bgImage,
				names: this.name,
				dels: dels, // 删除图片
			};
		},
		props: [
			'activeAdd',
			'bColor', 
			'paddingNum', 
			'bgColor', 
			'bShadow', 
			'bgImage',
			 'btnData',
			'name',
			'isShowDel',
			'indexNum'],
		components: {},
		computed: {
			i18n() {
				return this.$t('navigation');
			},
		},
		watch: {
			name: {
				handler(a, b) {
					console.log(a, '----------------name--------------')
					this.names = a;
				},
				deep: true
			},
			btnData: {
				handler(a, b) {
					console.log(a, '----------------btnData--------------')
					if (a.type === 0) { // 0 URL  1、立即定制 2、立即购买 3、立即咨询 4、立即询价
						this.names = a.name;
					} else if (a.type === 1) {
						this.names = '立即定制'
					} else if (a.type === 2) {
						this.names = '立即购买'
					} else if (a.type === 3) {
						this.names = '立即咨询'
					} else if (a.type === 4) {
						this.names = '立即询价'
					}
				},
				deep: true
			},
			bgImage: {
				handler(a, b) {
					console.log(a, '----------------bgImage--------------')
					this.bgImages = a;
				},
				deep: true
			},
			activeAdd: {
				handler(a, b) {
					console.log(a, '----------------activeAdd--------------')
					this.editShowBorder(a);
				},
				deep: true
			},
		},
		methods: {
			// 编辑状态显示边框
			editShowBorder(e) {
				if (e === 1) {
					this.bMargin = '0';
					this.bBorder='1px solid #02C2A2';
					this.bBorderStyle='dashed';
					this.bLineHeight='11.4666vw';
				} else {
					this.bMargin = '1px';
					this.bBorder='';
					this.bBorderStyle='';
					this.bLineHeight='';
				}
			},
			clickBtn(){
				console.log('用户触发按钮');
				this.$emit('tap-EditAddBtn', this.indexNum);
			},
			clickDelBtn(){
				console.log('点击删除按钮');
				this.bMargin = '1px';
				this.bBorder='';
				this.bBorderStyle='';
				this.bLineHeight='';
				this.$emit('tap-DeleteBtn', this.indexNum);
			}
		}
	};
</script>

<style>
	.jshBtn-box{
		position: relative;
		width: 100%;
		background: #FFFFFF;
	}
	.jshImg{
		position: relative;
		width: 32upx;
		height: 32upx;
		margin-top: 28upx;
		margin-right: 6upx;
		display: inline-block;
	}
	.jshTextY{
		position: relative;
		font-family: PingFangSC-Regular;
		font-size: 32upx;
		color: #FFFFFF;
		letter-spacing: 0;
		text-align: center;
		line-height: 96upx;
		background-image: linear-gradient(134deg, #15D49F 0%, #57D6CF 100%);
	}
	.delete{
		position: absolute;
		top: -2.5vw;
		right: 1.5vw;
	}
	.delIcon{
		position: relative;
		width: 40upx;
		height: 40upx;
	}
</style>
