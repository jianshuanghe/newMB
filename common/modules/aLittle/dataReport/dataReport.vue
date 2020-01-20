<template>
	<div class="dataReport_content">
		<topBox>
			<p class="title-putIn">投放数据分析</p>
			<p class="right-title" @click="clickBusinessPutIn">
				商机投放
				<span class="right-arrow"><img :src="rightArrow" alt="" class="rightArrow" /></span>
			</p>
		</topBox>
		<businessPutIn v-if="GET_ALITTLE.businessPutIn.show"></businessPutIn>
		<dataTrendKanban></dataTrendKanban>
	</div>
</template>

<script>
import topBox from '@/components/mbbo/topBox/topBox';
import businessPutIn from './dataReportItems/businessPutIn';
import dataTrendKanban from './dataTrendKanban/dataTrendKanban';
import { mapMutations, mapGetters } from 'vuex';
export default {
	name: 'dataReport',
	components: {
		topBox,
		businessPutIn,
		dataTrendKanban
	},
	data() {
		return {
			rightArrow:  this.Static+'home/extendManageList/rightArrow4.png'
		};
	},
	computed: {
		...mapGetters(['GET_ALITTLE'])
	},
	watch: {
		GET_ALITTLE: {
			handler(a, b) {},
			deep: true
		}
	},
	created() {
		this.shareEachPage(); // 分享
	},
	methods: {
		...mapMutations({
			setBusinessPutInShow: 'setBusinessPutInShow'
		}),
		clickBusinessPutIn() {
			this.$store.commit('setBusinessPutInShow', true);
			console.log('触发商机投放组件按钮');
		}
	}
};
</script>

<style scoped>
.dataReport_content {
	position: relative;
	width: 100%;
	min-height: 100vh;
	background: #f6f6f6;
}
.right-arrow {
	position: relative;
	width: 2vw;
}
.rightArrow {
	position: relative;
	width: 3.2vw;
	top: 0.6vw;
}
</style>
