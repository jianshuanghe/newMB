<template>
	<div class="imageSelectionList">
		<div class="list">
			<div class='items-box' 
				v-for="(items, index) in dataLists" 
				:key="index">
				<div class="rRadio-items5" :class="(index + 1) % 4 === 0 && index > 2 ? 'rRadio-itemsM5' : 'rRadio-items5'">
					<div class="styleClose-box">
						<div class="SC-left left">
							<div class="SC-image-box">
								<!-- 单张图片组件 -->
								<singlePicture
								:disabled='disabled'
								:dataList='dataLists'
								:itemsData='dataLists[0]'
								:indexNum='index'
								:defaultImg='defaultAddImg'
								:imgSrc='items.imgUrl'
								mode='scaleToFill'
								lazyLoad=true
								pictureWidth='26v.666vw'
								pictureHeight='21.333vw'
								tipsLeft='-2vw'
								@tap-index='tapIndex'
								@tap-Picture='tabPicture'
								:deleteMoveShow='deleteMoveShow'
								></singlePicture>
							</div>
						</div>
						<div class="SC-right left">
							<div class="SC-text-box">
								<div class="SC-text">
									<div class="text left">
										<rTitle
										:disabled='!disabled'
										:isShowOne='true'
										placeholderOne='标题文字'
										rPadding="0vw 0"
										:valueOne="items.title"
										typeOne="text" 
										:maxlengthOne='5'
										:focusOne='false'
										:cursorOne='0'
										adjustPositionOne='adjustPosition'
										tTAlignOne='justify'
										tColorOne='#2E2E30'
										tFontSizeOne='3.466vw'
										tLineHeightOne='6.466vw'
										tWidthOne="20vw"
										tHeightOne="6.466vw"
										tPaddingOne="1.333vw"
										tBGOne="rgba(212, 253, 247, 0.21)"
										tBorderOne="1px solid #02C2A2"
										tBStyleOne="dashed"
										:isShowTwo='false'
										:indexNum='index'
										@tap-index='tapIndexNumTitle'
										@tap-Title='tapTitleOne'
										></rTitle>
									</div>
									<image class="selectImg" :src="current === index ? selectEd : select"></image>
								</div>
								<div class="SC-ins">
									<div class="text left">
										<rTitle
										:disabled='!disabled'
										:isShowOne='false'
										:isShowTwo='true'
										:valueTwo='items.content3'
										typeTwo="text" 
										keyNameTwo='content'
										placeholderTwo='可输入关于图片的具体描述信息，限50位'
										placeholderStyleTwo='placeholderStyle'
										placeholderClassTwo='placeholderClass'
										focusTwo='focus'
										cursorTwo='cursor'
										adjustPositionTwo='adjustPosition'
										:tMaxNumShow='false'
										:maxlengthTwo='50'
										tFontSizeTwo='3.466vw'
										tColorTwo='#9B9B9B'
										autoHeightTwo=''
										tTAlignTwo='left'
										tWidthTwo='60vw'
										tHeightTwo=''
										tPaddingTwo='0.5vw'
										tTMarginTwo=''
										tLineHeightTwo='6vw'
										tBGTwo="rgba(212, 253, 247, 0.21)"
										tBorderTwo="1px solid #02C2A2"
										tBStyleTwo="dashed"
										:indexNum='index'
										@tap-index='tapIndexNumTitle'
										@tap-Title='tapTitleTwo'
										></rTitle>
									</div>
								</div>
							</div>
						</div>
						<div class="clear"></div>
					</div>
					<!-- 删除、上移、下移 -->
					<deleteMoveTips
					:dataList='dataLists'
					:itemsData='dataLists[0]'
					:indexNum='index'
					dMWidth='100vw'
					dMHeight='100%'
					@tap-DeleteMoveTips='tapDeleteMoveTips'
					v-if='deleteMoveTipsShow && disabled'></deleteMoveTips>
				</div>
				<div class="clear"></div>
			</div>
			<div class="clear"></div>
		</div>
	</div>
</template>

<script>
	import dels from '@/static/mbcImg/my/dels.png';
	import defaultAddImg from '@/static/mbcImg/publish/createBusiness/defaultAdd.png';
	import singlePicture from '@/components/common/RHX/singlePicture/singlePicture';
	import deleteMoveTips from '@/components/common/RHX/deleteMoveTips/deleteMoveTips';
	import rTitle from '@/components/common/RHX/rTitle/rTitle';
	import checkedItems from '@/static/mbcImg/publish/createBusiness/checkedItems.png';
	import selectEd from '@/static/mbcImg/publish/createBusiness/selectEd.png';
	import select from '@/static/mbcImg/publish/createBusiness/select.png';
	
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
				dels: dels, // 删除图片
				dataLists: this.dataList,
				indexs: -1, // 用户选择的项
				checkedItems: checkedItems, // 选择后的图片对勾标注
				selectEd: selectEd, // 勾选圆框 黑色
				select: select, // 未勾选圆框 白色
				defaultAddImg: defaultAddImg, 
				deleteMoveTipsShow: this.deleteMoveShow
			};
		},
		components: {
			singlePicture,
			rTitle,
			deleteMoveTips
		},
		computed: {},
		watch: {
			dataList: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------dataList---------------------------------------');
					this.dataLists = a;
				},
				deep: true
			},
			deleteMoveShow: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------deleteMoveShow---------------------------------------');
					this.deleteMoveTipsShow = a;
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
				this.$emit('tap-StyleSelectionList', this.dataLists);
			},
			// 修改
			tapTitleOne(e) {
				console.log(e);
				this.dataLists.map((items, index)=>{
					if(this.indexs === index) {
						items.title = e[0];
					}
				});
				this.$emit('tap-StyleSelectionList', this.dataLists);
			},
			// 修改
			tapTitleTwo(e) {
				console.log(e);
				this.dataLists.map((items, index)=>{
					if(this.indexs === index) {
						items.content = e[1];
					}
				});
				this.$emit('tap-StyleSelectionList', this.dataLists);
			},
			// 点击删除、上移、下移
			tapDeleteMoveTips (e) {
				console.log(e[0], e[1], '删除、上移、下移操作后返回的数据，e[0]:返回的dataList， e[1]:返回的布尔值：当触发删除最后数组没有数据时，返回false');
				this.dataLists = e[0];
				this.deleteMoveTipsShow = e[1];
				e[1] === false ? this.$emit('tap-UpDataManage', 1) : this.$emit('tap-UpDataManage', 0);
				this.$emit('tap-StyleSelectionList', this.dataLists);
			},
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
		margin: 10upx 4upx 10upx 0;
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
		height: 160upx;
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
		top: 10upx;
	}
	.rRadio-items5 {
		position: relative;
		width: 100%;
	}
	.rRadio-items5 {
		position: relative;
		width: 100%;
	}
	.rRadio-itemsM5 {
		position: relative;
		width: 100%;
		margin: 10upx 0;
	}
	.styleClose-box {
		position: relative;
		width: 100%;
		margin-bottom: 4vw;
	}
	.SC-left{
		position: relative;
		width: 29.333vw;
	}
	.SC-image-box{
		position: relative;
		width: 26.6666vw;
		height: 21.333vw;
	}
	.SC-image{
		position: relative;
		width: 200upx;
		height: 160upx;
	}
	.SC-right{
		position: relative;
		width: 62.4vw;
	}
	.SC-text-box{
		position: relative;
		width: 100%;
	}
	.SC-text{
		position: relative;
		font-family: PingFangSC-Regular;
		font-size: 26upx;
		color: #2E2E30;
		line-height: 40upx;
	}
	.SC-ins{
		position: relative;
		width: 100%;
		font-family: PingFangSC-Regular;
		font-size: 26upx;
		color: #9B9B9B;
		text-align: justify;
		line-height: 40upx;
	}
</style>
