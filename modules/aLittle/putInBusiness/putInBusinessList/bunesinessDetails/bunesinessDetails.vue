<template>
	<div class="content-BunessDetails">
		<topBox>
			<p class="title-putIn">
				<!--{{PUTINBUSINESS.instName}}-->
				商机详情
			</p>
		</topBox>
		<div class="detailsPutIn-Box-Cont">
			<detailsPutIn :itmes="this.id"></detailsPutIn>
			
		</div>
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</div>
</template>

<script>
import topBox from '@/components/mbbo/topBox/topBox';
import dataTitle from './bunesinessDetailsItems/dataTitle';
import detailsPutIn from './bunesinessDetailsItems/detailsPutIn';
import dataTrendKanban from './bunesinessDetailsItems/dataTrendKanban';
import navigation from "@/components/mbbo/navigation/navigation.vue";
import { mapGetters } from 'vuex';
export default {
	name: 'bunesinessDetails',
	components: {
		topBox,
		dataTitle,
		detailsPutIn,
		dataTrendKanban,
		navigation
	},
	data() {
		return {
			id: ''
		};
	},
	computed: {
		...mapGetters(['PUTINBUSINESS','QUICKNAVCO'])
	},
	created() {
		this.shareEachPage(); // 分享
	},
	onLoad(val) {
		this.id = val.id;
		console.log(this.id);
	},
	watch: {
		PUTINBUSINESS: {
			handler(a, b) {
				console.log(a, b);
			},
			deep: true
		}
	},
	methods: {
		
	},
};
</script>

<style scoped>
.content-BunessDetails {
	position: relative;
	width: 100%;
	min-height: 100vh;
	background: #f6f6f6;
}
.detailsPutIn-Box-Cont {
	position: relative;
	width: 100%;
	min-height: 97vh;
}
</style>
