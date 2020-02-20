<template>
	<view class="body1">
		<view class="mode-list"  :id='dataLists.id'>
			<!-- <rTitle
			:disabled='!disabled'
			:isShowOne='true'
			:rPadding="tabYItemsIndex === indexNum ? '70upx 0 30upx 20upx' : '70upx 0 30upx 20upx'"
			:valueOne="dataLists.iconTitle"
			typeOne="text" 
			:maxlengthOne='5'
			:focusOne='false'
			:cursorOne='0'
			rfontFamily="PingFangSC-Semibold"
			adjustPositionOne='adjustPosition'
			tTAlignOne='left'
			tColorOne='#2E2E30'
			tFontSizeOne='36upx'
			tLineHeightOne='8.466vw'
			tWidthOne="100%"
			tHeightOne="8.466vw"
			tPaddingOne="10upx"
			rfontWeight="bold"
			rbackground="#FFFFFF"
			tBGOne="rgba(212, 253, 247, 0.21)"
			tBorderOne="1px solid #02C2A2"
			tBStyleOne="dashed"
			:isShowTwo='false'
			@tap-Title='tabIconTitle'
			></rTitle> -->
		</view>
		<view class="content">
			<view class="content-item" v-for="(item,index) in dataLists.dataList" :key="index">
				<view class="moudule_list">
					<view class="con-img">
						<!-- 单张图片组件 -->
						<singlePicture
						:disabled='disabled'
						:dataList='dataLists.dataList'
						:itemsData='dataLists.dataList[0]'
						:indexNum='index'
						:defaultImg='defaultAddImg'
						:imgSrc='item.imgUrl'
						mode='scaleToFill'	
						lazyLoad=true
						pictureWidth='424upx'
						pictureHeight='320upx'
						@tap-index='tapIndex'
						@tap-Picture='tabPicture'
						:deleteMoveShow='deleteMoveTipsShow'
						></singlePicture>
					</view>
					<view class="con-content" v-if="isconContentShow">	
						<view class="con-content-title">
							<rTitle
							:disabled='!disabled'
							:isShowOne='true'
							:valueOne="item.content"
							:rPadding="tabYItemsIndex === indexNum ? '20upx 0 0 0' : '20upx 0 0 0'"
							typeOne="text" 
							placeholderOne="请添加文本"
							:maxlengthOne='10'
							:indexNum='index'
							:focusOne='false'
							:cursorOne='0'
							rfontFamily="PingFangSC-Semibold"
							adjustPositionOne='adjustPosition'
							tTAlignOne='left'
							tColorOne='#FFFFFF'
							tFontSizeOne='32upx'
							tLineHeightOne='32upx'
							tWidthOne="100%"
							tHeightOne="32upx"
							tPaddingOne="0 0 0 24upx"
							tBGOne="rgba(212, 253, 247, 0.21)"
							tBorderOne="1px solid #02C2A2"
							tBStyleOne="dashed"
							:isShowTwo='false'
							@tap-index='tapIndex'
							@tap-Title='tabcontent'
							></rTitle>
						</view>
						<view>
							<rTitle
							:disabled='!disabled'
							:isShowOne='true'
							:valueOne="item.content2"
							:indexNum='index'
							:rPadding="tabYItemsIndex === indexNum ? '40upx 0 0 0' : '40upx 0 0 0'"
							typeOne="text" 
							:maxlengthOne='10'
							placeholderOne="请添加文本"
							:focusOne='false'
							:cursorOne='0'
							rfontFamilyTwo="PingFangSC-Regular"
							adjustPositionOne='adjustPosition'
							tTAlignOne='left'
							tColorOne='#FFFFFF'
							tFontSizeOne='22upx'
							tLineHeightOne='32upx'
							tWidthOne="100%"
							tHeightOne="32upx"
							tPaddingOne="0 0 0 24upx"
							tBGOne="rgba(212, 253, 247, 0.21)"
							tBorderOne="1px solid #02C2A2"
							tBStyleOne="dashed"
							:isShowTwo='false'
							@tap-index='tapIndex'
							@tap-Title='tabcontent2'
							></rTitle>
						</view>
					</view>
				</view>
				<!-- 删除、上移、下移 -->
				<deleteMoveTips
				:dataList='dataLists.dataList'
				:itemsData='dataLists.dataList[0]'
				:indexNum='index'
				dMWidth='100vw'
				dMHeight='100%'
				@tap-DeleteMoveTips='tapDeleteMoveTips'
				v-if='deleteMoveTipsShow && disabled'></deleteMoveTips>
			</view>
		</view>
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
	</view>
</template>

<script>
	import rTitle from '@/components/common/RHX/rTitle/rTitle';
	import singlePicture from '@/components/common/RHX/singlePicture/singlePicture';
	import deleteMoveTips from '@/components/common/RHX/deleteMoveTips/deleteMoveTips';
	import manageCopyTips from '@/components/common/RHX/manageCopyTips/manageCopyTips';
	export default{
		components:{
			rTitle,
			singlePicture,
			deleteMoveTips,
			manageCopyTips
		},
		props:[
			'basicData',//传过来的modules数据
			'dataList',
			'disabled',
			'tabYItemsIndex',
			'indexNum',
			'defaultImg',
			'scrollTop'
		],
		data(){
			return {
				indexs: -1,
				dataLists:this.dataList,
				basicDatas:this.basicData,
				defaultAddImg: this.defaultImg,
				deleteMoveTipsShow: false, // 控制deleteMoveTips组件显示隐藏
				manageType: 0, // 0展示管理 和 复制； 1只展示复制
				isconContentShow:true,//是否展示当前文本框组件
			}
		},
		watch: {
			scrollTop: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听IMG_CONTENT_C变化---------------------------------------');
					this.scrollTitleChange(this.dataLists.id, 60, [this.dataLists, this.indexNum]);
				},
				deep: true
			},
			disabled: {
				handler(a, b) {
					console.log(a, b, this.dataLists.dataList[0].content,'--------------------------------------监听当前文本框组件---------------------------------------');
					if ((b === true && this.dataLists.dataList[0].content == "" && this.dataLists.dataList[0].content2 =="")||(b === true && this.dataLists.dataList[0].content == "此处点击可输入内容" && this.dataLists.dataList[0].content2 =="此处点击可输入内容")) { // 如果在预览状态，且图片没有的状态，此模块不显示
						this.isconContentShow = false;
					} else {
						this.isconContentShow = true;
					}
				},
				deep: true
			},
		},
		methods:{
			// 点击单张图片
			tabPicture (e) {
				console.log(e, '操作单张图片返回值');
				this.dataLists.dataList = e;
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
				this.$emit('tap-IMGCONTENTA', data);
			},
			tapIndex (e) {
				console.log(e, '用户修改的数据的index');
				this.indexs = e;
			},
			// 顶部标题修改
			tabIconTitle(e) {
				console.log(e,'顶部标题修改');
				this.dataLists.iconTitle = e[0];
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
				this.$emit('tap-IMGCONTENTC', data);
			},
			//细节1修改
			tabcontent(e){
				console.log(e,'细节1修改');
				this.dataLists.dataList.map((item, index)=>{
					if(index === this.indexs) {
						item.content = e[0];
					}
				});
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
				this.$emit('tap-IMGCONTENTC', data);
			},
			//细节2修改
			tabcontent2(e){
				console.log(e,'细节2修改');
				this.dataLists.dataList.map((item, index)=>{
					if(index === this.indexs) {
						item.content2 = e[0];
					}
				});
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
				this.$emit('tap-IMGCONTENTC', data);
			},
			// 点击删除、上移、下移
			tapDeleteMoveTips (e) {
				console.log(e[0], e[1], '删除、上移、下移操作后返回的数据，e[0]:返回的dataList， e[1]:返回的布尔值：当触发删除最后数组没有数据时，返回false');
				this.dataLists.dataList = e[0];
				this.deleteMoveTipsShow = e[1];
				e[1] === false ? this.manageType = 1 : this.manageType = 0;
				console.log(this.manageType, '------------------this.manageType-------------------');
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
				this.$emit('tap-IMGCONTENTC', data);
			},
			// 点击管理、复制、完成组件
			tapManageCopyTips (e) {
				console.log(e, '管理、复制、完成:返回两个值 e[0]:当前编辑的数组，e[1]:当前 控制deleteMoveTips组件显示隐藏的值');
				this.dataLists.dataList = e[0];
				this.deleteMoveTipsShow = e[1];
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
				this.$emit('tap-IMGCONTENTC', data);
			},
			
		}
	}
</script>

<style>
	/*  */
	.body1{
		background: #FFFFFF;
	}
	.content{
		position: relative;
	}
	.con-img{
		width: 424upx;
		padding-left: 30upx;
	}
	
	.content-item{
		/* display: flex; */
		position: relative;
	}
	.con-content{
		width: 246upx;
		height: 168upx;
		background: #FB871D;
		margin-left: 20upx;
	}
	.moudule_list{
		display: flex;
	}
</style>
