
<!-- 实例
 <fixedBgBtn
 :bbottom="-translateY + 'px'" // 底部高度
 bColor= '' // 字体颜色
 paddingNum='' // 填充
 left='0' // left
 bgColor='' // 背景颜色
 bShadow='' // 阴影
 bgImage='linear-gradient(134deg,  #15D49F 0%, #57D6CF 100%)'> // 背景颜色
 	<div class="add-text" @tap='preserve'>确认添加</div>
 </fixedBgBtn>
 -->
<template>
	<!-- fixedBgBtn 固定定位的btn按钮，宽度相应100% -->
	<div class="fixedBgBtn-box" :style="{position: isPosiTion, bottom: bbottom, borderColor: bColor, padding: paddingNum, background: bgColor, boxShadow: bShadow,  backgroundImage: bgImage, left: left }">
		 <slot></slot>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		props: ['isPosiTion','bbottom', 'bColor', 'paddingNum', 'left', 'bgColor', 'bShadow', 'bgImage'],
		components: {},
		computed: {
			i18n() {
				return this.$t('navigation');
			}
		},
		watch: {},
		methods: {}
	};
</script>

<style>
	.fixedBgBtn-box{
		position: fixed;
		z-index: 105;
		width: 100%;
	}
</style>
