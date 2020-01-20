<template>
	<div class="pageStatus-content">
		<div class="pageStatus">
			<div class="status" v-if='isMenu === 1'>
				<image class="statusImg" :src='pageStatus1' mode='widthFix'></image>
			</div>
			<div class="status" v-if='isMenu === 0'>
				<image class="statusImg" :src='pageStatus2' mode='widthFix'></image>
			</div>
		</div>
	</div>
</template>

<script>
	import pageStatus1 from '@/static/mbcImg/publish/createBusiness/pageStatus1.png';
	import pageStatus2 from '@/static/mbcImg/publish/createBusiness/pageStatus2.png';
	export default {
		components: {
		},
		props: [
			'isMenu',
			],
		data() {
			return {
				pageStatus1: pageStatus1,
				pageStatus2: pageStatus2,
			};
		},
		created() {},
		methods: {
			// 点击完成按钮时触发
		}
	};
</script>

<style>
	.pageStatus-content{
		position: relative;
		width: 100%;
	}
	.pageStatus{
		position: relative;
		width: 100%;
	}
	.status{
		position: fixed;
		width: 100%;
	}
	.statusImg{
		position: relative;
		width: 100vw;
		height: 100vh;
	}
</style>
