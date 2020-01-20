<template>
	<!-- 模拟模块组件 -->
	<div class="mode-list"  :id='dataLists.id' >
		<!-- title -->
		<div class="title">
			<div class="titleModule">
				<rTitle
				:disabled='!disabled'
				:isShowOne='true'
				rPadding="0"
				:valueOne="dataLists.iconTitle"
				typeOne="text" 
				:maxlengthOne='5'
				:focusOne='false'
				:cursorOne='0'
				adjustPositionOne='adjustPosition'
				tTAlignOne='left'
				tColorOne='#2E2E30'
				rfontWeight="bold"
				rbackground="#FFFFFF"
				tFontSizeOne='36upx'
				rfontFamily="PingFangSC-Semibold"
				tLineHeightOne='8.466vw'
				tWidthOne="100%"
				tHeightOne="8.466vw"
				tPaddingOne="0 10upx"
				tBGOne="rgba(212, 253, 247, 0.21)"
				tBorderOne="1px solid #02C2A2"
				tBStyleOne="dashed"
				:isShowTwo='false'
				@tap-Title='tabIconTitle'
				></rTitle>
			</div>
			<div class="deleteModule" v-if='disabled' @tap='deleteModule(indexNum)'>
				<image class="deteteIcon" :src='delsss'></image>
			</div>
		</div>
		<div class="mode-items" >
			<!-- 添加照片组件 -->
			<addImage
			:disabled='disabled'
			:dataList='dataLists'
			@tap-AddImage='tapAddImage'
			></addImage>
		</div>
	</div>
</template>

<script>
	import delsss from '@/static/mbcImg/publish/createBusiness/delsss.png';
	import addImage from '@/components/common/RHX/madeCustModule/addImage/addImage';
	import rTitle from '@/components/common/RHX/rTitle/rTitle';
	import manageCopyTips from '@/components/common/RHX/manageCopyTips/manageCopyTips';
	import deleteMoveTips from '@/components/common/RHX/deleteMoveTips/deleteMoveTips';
	export default {
		components: {
			addImage,
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
				delsss: delsss,
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
					console.log(a, b, '--------------------------------------监听TITLE_CONTENT_IMG_B变化---------------------------------------');
					this.scrollTitleChange(this.dataLists.id, 60, [this.dataLists, this.indexNum]);
				},
				deep: true
			}
		},
		methods: {
			// 删除当前模块
			deleteModule(e) {
				console.log(e, '删除当前模块');
				delete this.basicDatas.splice(e, 1); // 删除选中的子项
				this.$emit('tap-INPUTTEXTA', this.basicDatas);
			},
			// 添加照片组件
			tapAddImage (e) {
				console.log(e, '添加照片');
				this.dataLists.dataList = e;
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
				this.$emit('tap-INPUTTEXTA', data);
			},
			// 顶部标题修改
			tabIconTitle(e) {
				console.log(e,'顶部标题修改');
				this.dataLists.iconTitle = e[0];
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
				this.$emit('tap-INPUTTEXTA', data);
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
				this.$emit('tap-INPUTTEXTA', data);
			},
			// 点击删除、上移、下移
			tapDeleteMoveTips (e) {
				console.log(e[0], e[1], '删除、上移、下移操作后返回的数据，e[0]:返回的dataList， e[1]:返回的布尔值：当触发删除最后数组没有数据时，返回false');
				this.dataLists.dataList = e[0];
				this.deleteMoveTipsShow = e[1];
				e[1] === false ? this.manageType = 1 : this.manageType = 0;
				console.log(this.manageType, '------------------this.manageType-------------------');
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
				this.$emit('tap-INPUTTEXTA', data);
			},
			// 点击管理、复制、完成组件
			tapManageCopyTips (e) {
				console.log(e, '管理、复制、完成:返回两个值 e[0]:当前编辑的数组，e[1]:当前 控制deleteMoveTips组件显示隐藏的值');
				this.dataLists.dataList = e[0];
				this.deleteMoveTipsShow = e[1];
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
				this.$emit('tap-INPUTTEXTA', data);
			},
		}
	};
</script>

<style>
	.mode-list{
		position: relative;
		width: 100%;
		background: #FFFF;
		padding: 18upx 24upx 32upx 24upx;
		margin-bottom: 20upx;
	}
	.mode-items{
		position: relative;
		width: 100%;
	}
	.titleModule{
		position: relative;
		width: 80%;
	}
	.deleteModule{
		position: absolute;
		width: 20%;
		top: 4vw;
		right: 30upx;
	}
	.deteteIcon{
		position: relative;
		float: right;
		width: 30upx;
		height: 34upx;
	}
	.title{
		margin-bottom: 3vw;
	}
</style>
