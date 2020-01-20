<!-- 实例
 <replaceIcon
 :iconSrc='iconSrc' // 当前传入的icon
 :iconWidth='iconWidth' // 略
 :iconHeight='iconHeight' // 略
 :iconPadding='iconPadding' // 略
 :isSelect='isSelect' // 用户是否点击了当前icon,此icon是否需要更换,以及更具此值true Or false判断当前icon需要如何展示
 @tap-ReplaceIcon='tapReplaceIcon'
 ></replaceIcon>
 -->
<template>
	<div class="moduleAdd-content" @tap='ModuleAdd'>
		<image class="moduleAddIcon left" :src='moduleAddIcon'></image>
		<div class="addText left">添加模块</div>
		<div class="clear"></div>
	</div>
</template>

<script>
	import moduleAddIcon from '@/static/mbcImg/publish/createBusiness/moduleAddIcon.png';
	export default {
		components: {
		},
		props: [],
		data() {
			return {
				moduleAddIcon: moduleAddIcon,
			};
		},
		created() {},
		methods: {
			// 添加模块
			ModuleAdd() {
				console.log('触发添加模块按钮');
				this.$emit('tap-moduleAdd');
			},
		}
	};
</script>

<style>
	.moduleAdd-content{
		position: relative;
		width: 100%;
		padding: 0 40upx;
		background: #FFFFFF;
		box-shadow: 0 -1px 0 0 #F5F5F5;
	}
	.moduleAddIcon{
		position: relative;
		width: 32upx;
		height: 32upx;
		margin-right: 28upx;
		margin-top: 44upx;
	}
	.addText{
		position: relative;
		font-family: PingFangSC-Medium;
		font-size: 32upx;
		color: #02C2A2;
		letter-spacing: 0;
		line-height: 120upx;
	}
</style>
