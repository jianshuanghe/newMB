<template>
	<!-- 模拟模块组件 -->
	<div class="mode-list"  :id='dataLists.id'>
		<!-- title -->
		<div class="title">
			<!-- <rTitle
			:disabled='!disabled'
			:isShowOne='true'
			:rPadding="tabYItemsIndex === indexNum ? '6vw 0' : '6vw 0'"
			:valueOne="dataLists.iconTitle"
			typeOne="text" 
			:maxlengthOne='5'
			:focusOne='false'
			:cursorOne='0'
			adjustPositionOne='adjustPosition'
			tTAlignOne='center'
			tColorOne='#02C2A2'
			tFontSizeOne='5.333vw'
			tLineHeightOne='8.466vw'
			tWidthOne="100%"
			tHeightOne="8.466vw"
			tPaddingOne="0 10upx"
			tBGOne="rgba(212, 253, 247, 0.21)"
			tBorderOne="1px solid #02C2A2"
			tBStyleOne="dashed"
			:isShowTwo='false'
			@tap-Title='tabIconTitle'
			></rTitle> -->
		</div>
		<div class="mode-items" 
		v-for='(item,index) in dataLists.dataList' 
		:key='index'>
		<div class='items-box'>
			<div class="right item-text">
				<!-- 产品说明 -->
				<div class="titleTwo">
					<rTitle
					:dataList='dataLists.dataList'
					:itemsData='dataLists.dataList[0]'
					:indexNum='index'
					:disabled='!disabled'
					:isShowOne='true'
					:valueOne="item.title"
					typeOne="text" 
					:focusOne='false'
					:cursorOne='0'
					adjustPositionOne='adjustPosition'
					tTAlignOne='left'
					tFontSizeOne='4.266vw'
					tLineHeightOne='7vw'
					tWidthOne="100%"
					tHeightOne="7vw"
					tPaddingOne="0 0 0 7vw"
					tBGOne="rgba(212, 253, 247, 0.21)"
					tBorderOne="1px solid #02C2A2"
					tBStyleOne="dashed"
					:tSortSHow='true'
					:isShowTwo='true'
					:valueTwo='item.content'
					keyNameTwo='content'
					tWidthTwo="100%"
					tTMarginTwo='0vw 0'
					tHeightTwo=""
					:autoHeightTwo='true'
					tPaddingTwo=""
					tLineHeightTwo='5vw'
					tBGTwo="rgba(212, 253, 247, 0.21)"
					tBorderTwo="1px solid #02C2A2"
					tBStyleTwo="dashed"
					@tap-index='tapIndex'
					@tap-Title='tapTitleContent'
					></rTitle>
				</div>
			</div>
			<div class="left item-img">
				<!-- 单张图片组件 -->
				<singlePicture
				:disabled='disabled'
				:dataList='dataLists.dataList'
				:itemsData='dataLists.dataList[0]'
				:indexNum='index'
				:defaultImg='defaultAddImg'
				:imgSrc='item.imgUrl'
				mode='widthFix'
				lazyLoad=true
				pictureWidth='100%'
				pictureHeight='78.666vw'
				@tap-Picture='tabPicture'
				:deleteMoveShow='deleteMoveTipsShow'
				></singlePicture>
			</div>
			<div class="clear"></div>
		</div>
			
			
			<!-- 删除、上移、下移 -->
			<!-- <deleteMoveTips
			:dataList='dataLists.dataList'
			:itemsData='dataLists.dataList[0]'
			:indexNum='index'
			dMWidth='100%'
			dMHeight='100%'
			@tap-DeleteMoveTips='tapDeleteMoveTips'
			v-if='deleteMoveTipsShow && disabled'></deleteMoveTips> -->
		</div>
		<div class='clear'></div>
		<!-- 管理项目、复加此项 -->
		<!-- <manageCopyTips
		v-if='disabled'
		:manageCopyShow='deleteMoveTipsShow'
		:manageType='manageType'
		:dataList='dataLists.dataList'
		:itemsData='dataLists.dataList[0]'
		:isManageShow='true'
		@tap-ManageCopyTips='tapManageCopyTips'
		></manageCopyTips> -->
	</div>
</template>

<script>
	import singlePicture from '@/components/common/RHX/singlePicture/singlePicture';
	import rTitle from '@/components/common/RHX/rTitle/rTitle';
	import manageCopyTips from '@/components/common/RHX/manageCopyTips/manageCopyTips';
	import deleteMoveTips from '@/components/common/RHX/deleteMoveTips/deleteMoveTips';
	export default {
		components: {
			singlePicture,
			rTitle,
			manageCopyTips,
			deleteMoveTips
		},
		props: [
			'disabled',
			'basicData',
			'scrollTop',
			'defaultImg',
			'dataList',
			'indexNum',
			'tabYItemsIndex',
		],
		data() {
			return {
				indexs: -1,
				basicDatas: this.basicData, // 原始数据
				defaultAddImg: this.defaultImg,
				dataLists: this.dataList,
				deleteMoveTipsShow: false, // 控制deleteMoveTips组件显示隐藏
				manageType: 0, // 0展示管理 和 复制； 1只展示复制
			};
		},
		created() {
			console.log(this.dataLists, '-------------------------dataLists-----------------------')
		},
		watch: {
			scrollTop: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听TITLE_CONTENT_IMG_C变化---------------------------------------');
					this.scrollTitleChange(this.dataLists.id, 60, [this.dataLists, this.indexNum]);
				},
				deep: true
			}
		},
		methods: {
			// 点击单张图片
			tabPicture (e) {
				console.log(e, '操作单张图片返回值');
				this.dataLists.dataList = e;
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
				this.$emit('tap-TITLECONTENTIMGC', data);
			},
			// 顶部标题修改
			tabIconTitle(e) {
				console.log(e,'顶部标题修改');
				this.dataLists.iconTitle = e[0];
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
				this.$emit('tap-TITLECONTENTIMGC', data);
			},
			tapIndex (e) {
				console.log(e, '用户修改的数据的index');
				this.indexs = e;
			},
			// 带点击标题返回
			tapTitleContent (e) {
				console.log(e,'点击标题返回值----数组');
				this.dataLists.dataList.map((item, index)=>{
					if(index === this.indexs) {
						item.title = e[0];
						item.content = e[1];
					}
				});
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
				this.$emit('tap-TITLECONTENTIMGC', data);
			},
			// 点击删除、上移、下移
			tapDeleteMoveTips (e) {
				console.log(e[0], e[1], '删除、上移、下移操作后返回的数据，e[0]:返回的dataList， e[1]:返回的布尔值：当触发删除最后数组没有数据时，返回false');
				this.dataLists.dataList = e[0];
				this.deleteMoveTipsShow = e[1];
				e[1] === false ? this.manageType = 1 : this.manageType = 0;
				console.log(this.manageType, '------------------this.manageType-------------------');
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
				this.$emit('tap-TITLECONTENTIMGC', data);
			},
			// 点击管理、复制、完成组件
			tapManageCopyTips (e) {
				console.log(e, '管理、复制、完成:返回两个值 e[0]:当前编辑的数组，e[1]:当前 控制deleteMoveTips组件显示隐藏的值');
				this.dataLists.dataList = e[0];
				this.deleteMoveTipsShow = e[1];
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
				this.$emit('tap-TITLECONTENTIMGC', data);
			},
		}
	};
</script>

<style>
	.mode-list{
		position: relative;
		width: 100%;
		background: #FFFF;
		padding: 0upx  2% 2upx 2%;
	}
	.titleTwo{
		margin-bottom: 30upx;
	}
	.mode-items{
		position: relative;
		width: 100%;
	}
	.items-box{
		position: relative;
		width: 100%;
	}
	.item-text{
		position: relative;
		width: 48%;
	}
	.item-img{
		position: relative;
		width: 48%;
	}
</style>
