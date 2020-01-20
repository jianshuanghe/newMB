<template>
	<div class="addButton-content">
		<div class="addButton">
			<div class="manageCopyTips">
				<div class="copy-manage-box" @tap='clickCopy'>
					<savePreviewBtn
					backGround= '#2E2E30'
					textColor='#FFFFFF'
					lineY='0'
					:name='name'
					padding='0.53vw'
					fontSize='3.733vw'
					lineHeight='6.666vw'
					width='25.333vw'
					marginImg='1.333vw'
					:imgSrc='copy'></savePreviewBtn>
				</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import copy from '@/static/mbcImg/publish/createBusiness/copy.png';
	import savePreviewBtn from '@/components/common/button/savePreviewBtn.vue';
	export default {
		props: [
			'name',
			'dataList', 
			'itemsData', 
			'manageCopyShow', 
			'manageType',
		],
		data() {
			return {
				copy: copy,
				dataLists: this.dataList,
			};
		},
		components: {
			savePreviewBtn
		},
		computed: {
			i18n() {
				return this.$t('navigation');
			},
		},
		watch: {
			dataList: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听数管理变化---------------------------------------');
					this.dataLists = a;
				},
				deep: true
			},
		},
		created () {},
		methods: {
			clickCopy () {
				console.log('触发复制按钮');
				// this.changeData('copy');
				this.$emit('tap-ManageCopyTips',[this.dataLists, true]); // 给模块组件返回当前数组、当前管理状态
			},
		}
	};
</script>

<style>
	.addButton-content{
		position: relative;
		width: 100%;
		padding: 5vw 0;
	}
	.addButton{
		position: relative;
		width: 100%;
	}
	.manageCopyTips{
		position: relative;
		width: 440upx;
		margin: 0 auto;
	}
	.manage-box{
		width: 190upx;
	}
	.copy-box{
		position: relative;
		width: 190upx;
	}
	.copy-manage-box{
		position: relative;
		width: 190upx;
		margin: auto;
	}
</style>
