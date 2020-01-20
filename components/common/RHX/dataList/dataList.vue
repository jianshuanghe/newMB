<template>
	<view style="background: #FFFFFF;">
		<!-- 预览模式 -->
		<dataListPre 
		v-if='!disabled'
		:indexNum="indexNums"
		:dataLists="dataLists"
		></dataListPre>
		<!-- 编辑模式 -->
		<dataListSet
		v-if='disabled'
		:dataLists="dataLists"
		:basicDataes="basicDatas"
		:indexNum="indexNums"
		@reTitle="reTitle"
		></dataListSet>
	</view>
</template>

<script>
	import dataListPre from "./dataListPre/dataListPre";
	import dataListSet from "./dataListSet/dataListSet";
	export default {
		components:{
			dataListPre,
			dataListSet,
		},
		props:[
			'dataList',
			'disabled',
			'basicData',
			'indexNum'
		],
		data(){
			return {
				dataLists:this.dataList,
				basicDatas: this.basicData, // 原始数据
				indexNums:this.indexNum,
			}
		},
		methods:{
			reTitle(e){
				console.log(e,'从编辑返回的数据');
				this.$emit('tap-dataList', e);
			},
			
		}
	}
</script>

<style>
	*{
		font-family: PingFangSC-Regular;
	}
</style>
