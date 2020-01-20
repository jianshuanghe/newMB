<template>
	<view>
		<view class="body1">
			<view class="oneList" v-for="(item,index) in dataLists.dataList" :key="index">
				<view class="listkey">
					<rTitle
					:isShowTwo='true'
					:valueTwo='item.key'
					:indexNum='index'
					typeTwo="text" 
					placeholderStyleTwo='placeholderStyle'
					placeholderClassTwo='placeholderClass'
					focusTwo='focus'
					cursorTwo='cursor'
					adjustPositionTwo='adjustPosition'
					:tMaxNumShow='false' 
					:maxlengthTwo="10"
					tWidthTwo="180upx"
					tHeightTwo="72upx"
					tMinHeightTwo='36upx'
					tColorTwo="#9B9B9B"
					tPaddingTwo="0"
					tBGTwo="rgba(212, 253, 247, 0.21)"
					tBorderTwo="1px solid #02C2A2"
					tBStyleTwo="dashed"
					@tap-index='tapIndex'
					@tap-Title='tapTitleKey'
					></rTitle>
				</view>
				<view class="listvalue" v-if="!deleteMoveTipsShow">
					<rTitle
					:isShowTwo='true'
					:valueTwo='item.value'
					:indexNum='index'
					typeTwo="text" 
					placeholderStyleTwo='placeholderStyle'
					placeholderClassTwo='placeholderClass'
					focusTwo='focus'
					cursorTwo='cursor'
					adjustPositionTwo='adjustPosition'
					:tMaxNumShow='false' 
					:maxlengthTwo="30"
					tWidthTwo="460upx"
					tHeightTwo="72upx"
					tMinHeightTwo='36upx'
					tPaddingTwo="0"
					tBGTwo="rgba(212, 253, 247, 0.21)"
					tBorderTwo="1px solid #02C2A2"
					tBStyleTwo="dashed"
					@tap-index='tapIndex'
					@tap-Title='tapTitleTitle'
					></rTitle>
				</view>
				<!-- 删除、上移、下移 -->
				<deleteMoveTipsTwo
				:dataList='dataLists.dataList'
				:itemsData='dataLists.dataList[0]'
				:indexNum='index'
				dMWidth='236upx'
				dMHeight='100%'
				@tap-DeleteMoveTips='tapDeleteMoveTips'
				v-if='deleteMoveTipsShow'></deleteMoveTipsTwo>
			</view>
			<view class="manage">
				<!-- 管理项目、复加此项 -->
				<manageCopyTips
				:manageCopyShow='deleteMoveTipsShow'
				:manageType='manageType'
				:dataList='dataLists.dataList'
				:itemsData='dataLists.dataList[0]'
				@tap-ManageCopyTips='tapManageCopyTips'
				:isManageShow='true'
				></manageCopyTips>
			</view>
		</view>
	</view>
</template>

<script>
	import rTitle from '@/components/common/RHX/rTitle/rTitle';
	import manageCopyTips from '@/components/common/RHX/manageCopyTips/manageCopyTips';
	import deleteMoveTipsTwo from '@/components/common/RHX/deleteMoveTips/deleteMoveTipsTwo';
	export default{
		components:{
			rTitle,
			manageCopyTips,
			deleteMoveTipsTwo
		},
		props:[
			'dataLists',
			'basicDataes',
			'indexNum'
		],
		data(){
			return{	
				basicDatas:this.basicDataes,
				indexs: -1,
				manageType: 0, // 0展示管理 和 复制； 1只展示复制
				deleteMoveTipsShow: false, // 控制deleteMoveTips组件显示隐藏
				itemkey:'',//当输入为空时默认提示
				itemvalue:''//当输入为空时默认提示
			}
		},
		methods:{
			tapIndex (e) {
				console.log(e, '用户修改的数据的index');
				this.indexs = e;
			},
			// 带点击标题返回
			tapTitleKey (e) {
				console.log(e,'点击标题返回值----数组');
				// if(e[1]==""){
				// 	console.log(11111111111111111111111111111111111111111111111111111111111111111111111)
				// }
				this.dataLists.dataList.map((item, index)=>{
					if(index === this.indexs) {
						if(e[1]==""){
							item.key = "- -";
						}else{
							item.key = e[1];
						}
						
					}
				});
				console.info(this.basicDatas);
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists); // 合并数据
				console.log(data,'lalalalallalallalalalalalalal');
				this.$emit('reTitle', data);
			},
			tapTitleTitle (e) {
				console.log(e,'点击标题返回值----数组');
				this.dataLists.dataList.map((item, index)=>{
					if(index === this.indexs) {
						if(e[1]==""){
							item.value = "- -";
						}else{
							item.value = e[1];
						}
					}
				});
				console.info(this.basicDatas);
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists); // 合并数据
				console.log(data,'lalalalallalallalalalalalalal');
				this.$emit('reTitle', data);
			},
			// 点击管理、复制、完成组件
			tapManageCopyTips (e) {
				console.log(e, '管理、复制、完成:返回两个值 e[0]:当前编辑的数组，e[1]:当前 控制deleteMoveTips组件显示隐藏的值');
				this.dataLists.dataList = e[0];
				this.deleteMoveTipsShow = e[1];
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists); // 合并数据
				this.$emit('tap-dataList', data);
			},
			// 点击删除、上移、下移
			tapDeleteMoveTips (e) {
				console.log(e[0], e[1], '删除、上移、下移操作后返回的数据，e[0]:返回的dataList， e[1]:返回的布尔值：当触发删除最后数组没有数据时，返回false');
				this.dataLists.dataList = e[0];
				this.deleteMoveTipsShow = e[1];
				e[1] === false ? this.manageType = 1 : this.manageType = 0;
				console.log(this.manageType, '------------------this.manageType-------------------');
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists); // 合并数据
				this.$emit('tap-TITLECONTENTIMGC', data);
			},
		}
	}
</script>

<style>
	.body1{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.oneList{
		width: 89.3%;
		display: flex;
		align-items: center;
		height: 108upx;
		font-size: 28upx;
		letter-spacing: 0;
		line-height: 28upx;
		border-bottom: 2upx solid #F5F5F5;
		position: relative;
	}
	.listkey{
		color: #9B9B9B;
	}
	.listvalue{
		margin-left: 30%;
		position: absolute;
		color: #000000;
	}
	.manage{
		margin-bottom: 80upx;
	}
</style>
