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
	<div class="replaceIcon-content">
		<image class="replaceIcon" @tap="replaceIcon" :src='isSelect ? iconSrc.selected : iconSrc.notSelected' :style="{width: iconWidth, height: iconHeight, padding: iconPadding}"></image>
	</div>
</template>

<script>
	export default {
		components: {
		},
		props: [
			'isSelect',
			'iconSrc',
			'iconWidth',
			'iconHeight',
			'iconTAlign',
			'iconPadding'
			],
		data() {
			return {
				imgSrc: this.iconSrc.notSelected,
			};
		},
		created() {},
		iconSrc: {
			value: {
				handler(a, b) {
					this.imgSrc = a;
				},
				deep: true
			}
		},
		methods: {
			// 点击替换图片
			replaceIcon() {
				console.log('点击替换图片');
				this.imgSrc = this.iconSrc.selected; // 点击切换样式
				this.$emit('tap-ReplaceIcon');
			},
		}
	};
</script>

<style>
	.replaceIcon-content{
		position: relative;
		width: 100%;
	}
	.replaceIcon{
		position: relative;
		width: 100%;
		float: left;
	}
</style>
