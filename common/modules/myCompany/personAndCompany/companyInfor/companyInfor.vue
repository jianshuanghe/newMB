<template>
	<div class="companyInfor-content">
		<!--预览状态-->
		<preview></preview>
	</div>
</template>

<script>
import preview from './companyInforItems/previewAndEditor/preview';
// import editor from './companyInforItems/previewAndEditor/editor';
export default {
	name: 'companyInfor',
	components: {
		preview,
		// editor
	},
	created() {
		this.shareEachPage(); // 分享
	},
	onLoad:function(options){
		uni.setNavigationBarTitle({
			title: '公司信息'
		});
	},
};
</script>

<style scoped>
.companyInfor-content {
	position: relative;
	width: 100%;
}
</style>
