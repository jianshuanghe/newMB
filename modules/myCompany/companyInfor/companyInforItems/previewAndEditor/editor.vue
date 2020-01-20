<template>
	<div class="editor-content">
		<!-- <div class="" v-if="ADDRESSBS"> -->
			<!--地址组件-->
			<!-- <addressBs></addressBs> -->
		<!-- </div> -->
		<div class="">
			<!--基本信息编辑-->
			<!-- <div class="editor-basic" v-if="true">
				<topBox><p class="title-putIn">编辑基本信息</p></topBox>
				<editBasicInfor></editBasicInfor>
			</div> -->
			<!-- 资质认证编辑--> 
			<div class="editor-qualificatCert" v-if="true" >
				<topBox>
				  <p class="title-putIn">编辑认证信息</p>
				</topBox>
				<editQualificatCert :listid="listid"></editQualificatCert>
		  </div>
		</div>
	</div>
</template>

<script>
import topBox from '@/components/mbbo/topBox/topBox';
import editBasicInfor from './editor/editorItems/editBasicInfor';
import editQualificatCert from './editor/editorItems/editQualificatCert';
import addressBs from './editor/editorItems/industryAddress/address';
import { mapMutations, mapGetters } from 'vuex';
export default {
	name: 'editor',
	components: {
		addressBs,
		topBox,
		editBasicInfor,
		editQualificatCert
	},
	data() {
		return {};
	},
	created() {
		// if (this.$route.query.personTitle) {
		// 	// 定位当前处于状态
		// 	let personTitle = Number(this.$route.query.personTitle);
		// 	this.clickNewsType(personTitle);
		// }
	},
	props:['listid'],
	computed: {
		...mapGetters(['PERSONCENTER', 'ADDRESSBS'])
	},
	methods: {
		...mapMutations({
			setPersonTitle: 'setPersonTitle'
		}),
		clickAllRead() {
			this.confirmShow = true;
		},
		clickNewsType(e) {
			console.log(e, '切换基本信息和资质认证类型');
			this.$store.commit('setPersonTitle', e);
		}
	}
};
</script>

<style scoped>
.editor-qualificatCert {
	/*position: relative;*/
	/*height: 12vw;*/
}
</style>
