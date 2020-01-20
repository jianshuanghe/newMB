<template>
	<view class="my-title">
		<div class="quickBtn-Fd left">
		  <quickBtn></quickBtn>
		</div>
		<!-- 个人中心 -->
		<div class="search-Fd left">
		  {{i18n.title1}}
		</div>
	</view>
</template>

<script>
	import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
	export default {
		data() {
			return {
				
			}
		},
		components: {
			quickBtn,
		},
		computed: {
			i18n () {
			  return this.$t('My')  
			},
		},
		
	}
</script>

<style>
	.my-title{
		width: 100%;
		height: 88upx;
		background: #FFFFFF;
		border-bottom: 2upx solid #F5F5F5;
		position: fixed;
		top: 0;
		z-index: 999;
	}
	.quickBtn-Fd{
		width: 5%;
		margin-left: 38upx;
	}
	.search-Fd{
		position: relative;
		width: 100%;
		text-align: center;
		line-height: 88upx;
		font-size: 28upx;
		color: #2E2E30;
	}
</style>
