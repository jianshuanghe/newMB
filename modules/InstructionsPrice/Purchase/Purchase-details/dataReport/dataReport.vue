<template>
	<div class="dataReport_content">
		<topBox>
			<p class="title-putIn">采购名称</p>
			<!-- <p class="right-title" @click="clickBusinessPutIn">
				商机投放
				<span class="right-arrow"><img :src="rightArrow" alt="" class="rightArrow" /></span>
			</p> -->
		</topBox>
		<dataTrendKanban :dataid="this.id"></dataTrendKanban>
	</div>
</template>

<script>
import topBox from '@/components/mbbo/topBox/topBox';
import dataTrendKanban from './dataTrendKanban/dataTrendKanban';
import { mapMutations, mapGetters } from 'vuex';
export default {
	name: 'dataReport',
	components: {
		topBox,
		dataTrendKanban
	},
	data() {
		return {
			rightArrow:  this.Static+'home/extendManageList/rightArrow.png',
			id:'',
		};
	},
	onLoad:function(val){
		console.log(val)
		this.id=val.id
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
.title-putIn{
	margin-top: 5upx;
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
