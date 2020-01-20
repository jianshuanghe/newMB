<template>
	<div class="iconInput-content">
		<div class="iconInput" v-for='(item,index) in datas' :key='index'>
			<div class="icon left">
				<div class="icon-box">
					<image class="icon-img" :src="item.icon"></image>
				</div>
			</div>
			<div class="input left">
				<div class='input-content'>
					<rTitle
					:dataList='item'
					itemsData=''
					:indexNum='index'
					:disabled='!disabled'
					:isShowOne='true'
					:valueOne="item.title"
					typeOne="text" 
					:focusOne='false'
					:cursorOne='0'
					adjustPositionOne='adjustPosition'
					tTAlignOne='left'
					tFontSizeOne='3.466vw'
					tLineHeightOne='5.6vw'
					tWidthOne="100%"
					tHeightOne="5.6vw"
					tPaddingOne=""
					tBGOne="rgba(212, 253, 247, 0.21)"
					tBorderOne="1px solid #02C2A2"
					tBStyleOne="dashed"
					:tLineYSHow='false'
					:isShowTwo='true'
					:valueTwo='item.content'
					keyNameTwo='content'
					tWidthTwo="100%"
					tTMarginTwo='0vw 0'
					tHeightTwo="5.6vw"
					:autoHeightTwo='true'
					tPaddingTwo=""
					tLineHeightTwo='5.6vw'
					tBGTwo="rgba(212, 253, 247, 0.21)"
					tBorderTwo="1px solid #02C2A2"
					tBStyleTwo="dashed"
					@tap-index='tapIndex'
					@tap-Title='tabTitleItem'
					></rTitle>
				</div>
			</div>
			<div class="clear"></div>
		</div>
	</div>
</template>

<script>
	// import iconSrc from '@/static/mbcImg/publish/purchase/delete.png';
	import rTitle from '@/components/common/RHX/rTitle/rTitle';
	export default {
		components: {
			rTitle
		},
		props: [
			'icon',
			'data',
			'dataList',
			'disabled',
			'iconSrc',
			'iconWidth',
			'iconHeight',
			'iconTAlign',
			'iconPadding',
			'isShowOne',
			'valueOne',
			'keyNameOne',
			'typeOne',
			'placeholderOne',
			'placeholderStyleOne',
			'placeholderClassOne',
			'focusOne',
			'cursorOne',
			'adjustPositionOne',
			'maxlengthOne',
			'tTAlignOne',
			'tWidthOne',
			'tHeightOne',
			'tPaddingOne',
			'tBGOne',
			'tBorderOne',
			'tBStyleOne'
		],
		data() {
			return {
				index: -1,
				datas: this.data
			};
		},
		created() {},
		methods: {
			tapIndex (e) {
				console.log(e, '用户修改的数据的index');
				this.index = e;
			},
			// 点击完成按钮时触发
			tabTitleItem(e) {
				console.log(e, 'input返回值');
				this.datas.map((item,index)=>{
					if(index === this.index) {
						item.title = e[0],
						item.content = e[1]
					}
				});
				console.log(this.datas);
				this.$emit('tap-IconInput',this.datas);
			},
		}
	};
</script>

<style>
	.iconInput-content{
		position: relative;
		width: 100%;
	}
	.iconInput{
		position: relative;
		width: 100%;
	}
	.icon{
		position: relative;
		width: 14%;
	}
	.icon-box{
		position: relative;
		width: 80upx;
		height: 80upx;
		margin: auto;
		border-radius: 50%;
		background: #02c2a2;
		margin: 0 0 40upx 0;
	}
	.icon-img{
		pposition: relative;
		width: 40upx;
		height: 40upx;
		margin: auto;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.input{
		position: relative;
		width: 86%;
	}
	.inputBox{
		position: relative;
		width: 100%;
	}
</style>
