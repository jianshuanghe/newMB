<!-- 实例
 <moduleItems
 	:disabled="disabled" // 略
 	:dataList="currentList" // 略
 	:indexNum="item.SortNumber" // SortNumber根据用户拖动更改位置，重新设定的值
 	:valueOne="item.iconTitle" // 输入框双向绑定
 	:iconSrc="item.icon || iconSrc" // 绑定的图标
 	:isSelect='isSelect === item.SortNumber ? true : false' // 用户是否点击此图标
 	@tap-ModuleItemsDel='tapModuleItemsDel' // 组件的删除
 	@tap-ModuleItemsIcon='tapModuleItemsIcon' // 组件跟换图标
 	@tap-ModuleItems="tapModuleItems" // 组件的点击
 ></moduleItems>	
 -->
<template>
	<div class="moduleItems-content">
		<div class="moduleItems">
			<!-- 模块条组件 -->
			<moduleBar
			:disabled='false'
			:dataList='dataList'
			:indexNum='indexNum'
			:isSelect='isSelect'
			:isShowOne='true'
			:valueOne="valueOne"
			typeOne="text" 
			placeholderOne='请输入'
			tTAlignOne='left'
			tWidthOne="100%"
			tHeightOne="7.466vw"
			tPaddingOne="1.333vw"
			tBGOne="rgba(212, 253, 247, 0.21)"
			tBorderOne="1px solid #02C2A2"
			tBStyleOne="dashed"
			:iconSrc='iconSrc'
			iconWidth='4.266vw'
			iconHeight='4.266vw'
			iconPadding='2vw 0 0 0vw'
			@tap-ModuleBarDel='tapModuleBarDel'
			@tap-ModuleBarIcon='tapModuleBarIcon'
			@tap-ModuleBar='tapModuleBar'></moduleBar>
		</div>
	</div>
</template>

<script>
	import del from '@/static/mbcImg/publish/createBusiness/del.png';
	import moduleBar from '@/components/common/RHX/moduleBar/moduleBar';
	export default {
		components: {
			moduleBar
		},
		props: [
			'dataList',
			'indexNum',
			'sortNumber',
			'isSelect',
			'disabled',
			'valueOne',
			'iconSrc'],
		data() {
			return {
			};
		},
		created() {
		},
		watch: {
			valueOne: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听valueOne变化---------------------------------------');
				},
				deep: true
			},
		},
		methods: {
			// 点击tapModuleBar组件
			tapModuleBar (e) {
				console.log(e, '点击tapModuleBar组件');
				this.$emit('tap-ModuleItems', [e[0], this.indexNum]);
			},
			// 点击删除
			tapModuleBarDel (e) {
				console.log(e, this.indexNum, '--------------点击删除----------------');
				this.$emit('tap-ModuleItemsDel', this.indexNum);
			},
			// 点击更换icon
			tapModuleBarIcon () {
				console.log(this.indexNum, this.sortNumber, '点击更换icon');
				this.$emit('tap-ModuleItemsIcon', this.indexNum);
			}
		}
	};
</script>

<style>
	.moduleItems-content{
		position: relative;
		width: 100%;
		background: #fff;
	}
	.moduleItems{
		position: relative;
		width: 100%;
	}
</style>
