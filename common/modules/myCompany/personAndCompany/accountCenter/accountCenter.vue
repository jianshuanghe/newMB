<template>
	<div class="accountCenter-content">
		<topBox><surveyRunWaterTitle v-on:clickNewsType="clickNewsType"></surveyRunWaterTitle></topBox>
		<!--账户概况-->
		<survey v-if="num == 1"></survey>
		<!--账户流水-->
		<runWater v-if="num == 2"></runWater>
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</div>
</template>

<script>
import topBox from '@/components/mbbo/topBox/topBox';
import surveyRunWaterTitle from './surveyAndrunWater/surveyRunWaterTitle';
import survey from './surveyAndrunWater/survey';
import runWater from './surveyAndrunWater/runWater';
import navigation from "@/components/mbbo/navigation/navigation.vue";
import { mapGetters } from 'vuex';
export default {
	name: 'accountCenter',
	components: {
		topBox,
		surveyRunWaterTitle,
		survey,
		runWater,
		navigation,
	},
	data() {
		return {
			clickItemsIndex: 1, // 用户切换类型
			num: 1
		};
	},
	computed: {
		...mapGetters(['ACCOUNTCENTER', 'QUICKNAVCO'])
	},
	watch: {},
	created() {
		this.shareEachPage(); // 分享
	},
	onLoad:function(){
		uni.setNavigationBarTitle({//标题 已收藏
			title: '账户中心'
		});
	},
	methods:{
		clickNewsType(val){
			console.log(val)
			this.num=val;
		}
	}
};
</script>

<style scoped>
.accountCenter-content {
	position: fixed;
	width: 100%;
	min-height: 100vh;
	background: #cccccc14;
}
</style>
