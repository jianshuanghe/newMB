<template>
	<view style="background: #FFFFFF;">
		<!-- 预览模式 -->
		<dataListTwoPre 
		v-if='!disabled'
		:indexNum="indexNums"
		:dataLists="dataLists"
		></dataListTwoPre>
		<!-- 编辑模式 -->
		<dataListTwoSet
		v-if='disabled'
		:dataLists="dataLists"
		:basicDataes="basicDatas"
		:indexNum="indexNums"
		@reTitle="reTitle"
		></dataListTwoSet>
	</view>
</template>

<script>
	import dataListTwoPre from "./dataListTwoPre/dataListTwoPre";
	import dataListTwoSet from "./dataListTwoSet/dataListTwoSet";
	export default {
		components:{
			dataListTwoPre,
			dataListTwoSet,
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
