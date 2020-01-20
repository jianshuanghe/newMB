<template>
	<view style="background: #FFFFFF;">
		<!-- 预览模式 -->
		<dataListThrPre 
		v-if='!disabled'
		:indexNum="indexNums"
		:dataLists="dataLists"
		></dataListThrPre>
		<!-- 编辑模式 -->
		<dataListThrSet
		v-if='disabled'
		:dataLists="dataLists"
		:basicDataes="basicDatas"
		:indexNum="indexNums"
		@reTitle="reTitle"
		></dataListThrSet>
	</view>
</template>

<script>
	import dataListThrPre from "./dataListThrPre/dataListThrPre";
	import dataListThrSet from "./dataListThrSet/dataListThrSet";
	export default {
		components:{
			dataListThrPre,
			dataListThrSet,
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
