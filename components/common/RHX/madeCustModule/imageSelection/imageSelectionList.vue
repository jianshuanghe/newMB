<template>
	<div class="imageSelectionList">
		<div class="list">
			<div class='items-box left' 
				v-for="(items, index) in dataLists" 
				:key="index">
				<div class="rRadio-items3"
				 :class="(index + 1)%4===0 && index > 2? 'rRadio-itemsM3' : 'rRadio-items3'"
				 >
					<div class="img-box">
						<!-- 单张图片组件 -->
						<singlePicture
						:disabled='disabled'
						:dataList='dataLists'
						:itemsData='dataLists[0]'
						:indexNum='index'
						:defaultImg='defaultAddImg'
						:imgSrc='items.imgUrl'
						mode='widthFix'
						lazyLoad=true
						pictureWidth='16vw'
						pictureHeight='21.333vw'
						tipsLeft='-2vw'
						@tap-index='tapIndex'
						@tap-Picture='tabPicture'
						:deleteMoveShow='deleteMoveShow'
						></singlePicture>
					</div>
					<div class="text-box">
						<div class="text left">
							<rTitle
							:disabled='!disabled'
							:isShowOne='true'
							rPadding="0vw 0"
							:valueOne="items.title"
							placeholderOne='请输入文字'
							typeOne="text" 
							:maxlengthOne='5'
							:focusOne='false'
							:cursorOne='0'
							adjustPositionOne='adjustPosition'
							tTAlignOne='justify'
							tColorOne='#2E2E30'
							tFontSizeOne='3.466vw'
							tLineHeightOne='6.466vw'
							tWidthOne="100%"
							tHeightOne="6.466vw"
							tPaddingOne="1.333vw"
							tBGOne="rgba(212, 253, 247, 0.21)"
							tBorderOne="1px solid #02C2A2"
							tBStyleOne="dashed"
							:isShowTwo='false'
							:indexNum='index'
							@tap-index='tapIndexNumTitle'
							@tap-Title='tapTitle'
							></rTitle>
						</div>
						<image class="selectImg left" :src="current === index ? selectEd : select"></image>
						<div class="clear"></div>
					</div>
					<div class="deleteBox" v-if='disabled' @tap='clickDelBtn(index)'>
						<image class="delIcon" :src='dels'></image>
					</div>
				</div>
				<div class="clear"></div>
			</div>
			<div class="clear"></div>
		</div>
	</div>
</template>

<script>
	import singlePicture from '@/components/common/RHX/singlePicture/singlePicture';
	import rTitle from '@/components/common/RHX/rTitle/rTitle';
	
	export default {
		props: [
			'disabled',
			'itemsData',
			'indexNum',
			'dataList',
			'deleteMoveShow'
		],
		data() {
			return {
				dels: this.Static+'my/dels.png', // 删除图片
				dataLists: this.dataList,
				indexs: -1, // 用户选择的项
				checkedItems:  this.Static+'publish/createBusiness/checkedItems.png', // 选择后的图片对勾标注
				selectEd:  this.Static+'publish/createBusiness/selectEd.png', // 勾选圆框 黑色
				select:  this.Static+'publish/createBusiness/select.png', // 未勾选圆框 白色
				defaultAddImg:  this.Static+'publish/createBusiness/defaultAdd.png', 
			};
		},
		components: {
			singlePicture,
			rTitle 
		},
		computed: {},
		watch: {
			dataList: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------dataList---------------------------------------');
					this.dataLists = a;
				},
				deep: true
			}
		},
		created() {
			this.dataLists.map((items, index)=>{
				if (items.select === true) {
					this.current = index;
				}
			});
		},
		mounted() {},
		methods: {
			// 删除
			clickDelBtn (e) {
				console.log(e, '删除');
				delete this.dataLists.splice(e, 1); // 删除选中的子项
				this.$emit('tap-ImageSelectionList', this.dataLists);
			},
			tapIndex (e) {
				console.log(e, '用户修改的数据的index');
				this.indexs = e;
			},
			tapIndexNumTitle(e) {
				console.log(e, '用户修改的数据的index');
				this.indexs = e;
			},
			// 修改图片
			tabPicture(e) {
				console.log(e, '修改图片');
				this.dataLists = e;
				this.$emit('tap-ImageSelectionList', this.dataLists);
			},
			// 修改
			tapTitle(e) {
				console.log(e);
				this.dataLists.map((items, index)=>{
					if(this.indexs === index) {
						items.title = e[0];
					}
				})
				this.$emit('tap-ImageSelectionList', this.dataLists);
			}
		}
	};
</script>

<style>
	.rRadio-content{
		position: relative;
		width: 100%;
		padding: 20upx 40upx;
	}
	.rRadio{
		position: relative;
		width: 100%;
	}
	.items-box{
		/* margin: 20upx 0; */
	}
	.rRadio-items{
		position: relative;
		width: 324upx;
		height: 324upx;
		margin: 20upx 0;
	}
	.items-img{
		width: 320upx;
		height: 320upx;
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.itemsChecked{
		position: absolute;
		bottom: 0;
		right: 0;
		width: 100upx;
		height: 100upx;
	}
	.marginBottom{
		position: relative;
		margin-bottom: 20vh;
	}
	.rRadio-items2{
		position: relative;
		width: 156upx;
		height: 80upx;
		margin: 10upx 14upx 10upx 0;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		letter-spacing: 0;
		line-height: 80upx;
		border: 1px solid #D2D2D2;
		border-radius: 2px;
		text-align: center;
	}
	.rRadio-itemsM{
		position: relative;
		width: 156upx;
		height: 80upx;
		margin: 10upx 0;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		letter-spacing: 0;
		line-height: 80upx;
		border: 1px solid #D2D2D2;
		border-radius: 2px;
		text-align: center;
	}
	.rRadio-items3{
		position: relative;
		margin: 10upx -6upx 10upx 0;
		width: 180upx;
		text-align: center;
	}
	.rRadio-itemsM3{
		position: relative;
		width: 180upx;
		margin: 10upx 0;
		text-align: center;
	}
	.img-box{
		position: relative;
		width: 100%;
	}
	.img-box .img{
		position: relative;
		width: 120upx;
	}
	.text-box{
		position: relative;
		width: 100%;
		text-align: center;
	}
	.selectImg{
		position: relative;
		width: 26upx;
		height: 26upx;
		top: 16upx;
	}
	.rRadio-items4{
		position: relative;
		margin: 10upx 14upx 10upx 0;
		width: 156upx;
	}
	.rRadio-items4{
		position: relative;
		margin: 10upx 14upx 10upx 0;
		width: 100%;
	}
	.rRadio-itemsM4{
		position: relative;
		width: 100%;
		margin: 10upx 0;
	}
	.selectImg-box4{
		position: relative;
		width: 10%;
	}
	.img-box4{
		position: relative;
		width: 25%;
	}
	.img-box4 .img{
		position: relative;
		width: 120upx;
		height: 120upx;
	}
	.text-box4{
		position: relative;
		width: 65%;
	}
	.title-text4{
		font-family: PingFangSC-Regular;
		font-size: 26upx;
		color: #2E2E30;
		line-height: 40upx;
		overflow:hidden;
		text-overflow:ellipsis;
		-o-text-overflow:ellipsis;
		-webkit-text-overflow:ellipsis;
		-moz-text-overflow:ellipsis;
		white-space:nowrap;
	}
	.content-text4{
		font-family: PingFangSC-Regular;
		font-size: 26upx;
		color: #9B9B9B;
		text-align: justify;
		line-height: 40upx;
		word-break:break-all;
		display:-webkit-box;
		-webkit-line-clamp:2;
		-webkit-box-orient:vertical;
		overflow:hidden;
	}
	.text{
		position: relative;
		width: 80%;
	}
	.deleteBox{
		position: absolute;
		width: 44upx;
		height: 44upx;
		top: -20upx;
		right: 6upx;
	}
	.delIcon{
		position: relative;
		width: 100%;
		height: 100%;
	}
</style>
