<template>
	<div class="jshBtn-box">
		<p class="jshTextY" 
		:style="{ 
			borderColor: bColor, 
			padding: paddingNum, 
			background: bgColor, 
			boxShadow: bShadow, 
			backgroundImage: bgImage 
			}"
		@tap='clickBtn'>{{name}}</p>
		<div class="delete" v-if='isShowDel' @tap='clickDelBtn'>
			<image class="delIcon" :src='dels'></image>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bgImages: this.bgImage,
				dels: this.Static+'my/dels.png', // 删除图片
			};
		},
		props: [
			'bColor', 
			'paddingNum', 
			'bgColor', 
			'bShadow', 
			'bgImage', 
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
			bgImage: {
				handler(a, b) {
					console.log(a, '----------------statusTemp--------------')
					this.bgImages = a;
				},
				deep: true
			},
		},
		methods: {
			clickBtn(){
				console.log('用户触发按钮');
				this.$emit('tap-EditAddBtn', this.indexNum);
			},
			clickDelBtn(){
				console.log('点击删除按钮');
			}
		}
	};
</script>

<style>
	.jshBtn-box{
		position: relative;
		width: 100%;
		background: #2E2E30;
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
		line-height: 88upx;
	}
	.delete{
		position: absolute;
		top: 0.5vw;
		right: 0.5vw;
	}
	.delIcon{
		position: relative;
		width: 32upx;
		height: 32upx;
	}
</style>
