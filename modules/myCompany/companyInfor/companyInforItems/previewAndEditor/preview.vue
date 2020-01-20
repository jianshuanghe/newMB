<template>
	<div class="preview-content">
		<topBox><companyInforTitle v-on:PersonTitle='PersonTitle'></companyInforTitle></topBox>
		<!--基本信息-->
		<basicInfor v-if="num == 1"></basicInfor>
		<!--资质认证-->
		<qualificatCert v-if="num == 2"></qualificatCert>
	</div>
</template>

<script>
import topBox from '@/components/mbbo/topBox/topBox';
import companyInforTitle from './preview/companyInforTitle';
import basicInfor from './preview/previewItems/basicInfor';
import qualificatCert from './preview/previewItems/qualificatCert';
import { mapGetters,mapMutations } from 'vuex';
export default {
	name: 'preview',
	components: {
		topBox,
		companyInforTitle,
		basicInfor,
		qualificatCert
	},
	data() {
		return {
			clickItemsIndex: 1, // 用户切换类型
			num:1,
		};
	},
	computed: {
		...mapGetters(['GET_MY'])
	},
	watch: {
		GET_MY: {
			handler(a, b) {
				this.clickItemsIndex = a.PersonTitle; // 侦听切换类型消息
				console.log(a,b)
			},
			deep: true
		}
	},
	methods: {
		PersonTitle:function(PersonTitle){
			console.log(PersonTitle)
			this.num=PersonTitle;
		}
	},
};
</script>

<style scoped>
.preview-content {
	position: relative;
	min-height: 100vh;
	background: #f9f9f9;
}
</style>
