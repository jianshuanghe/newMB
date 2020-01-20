<!-- 实例
 <moduleYitems
 :items='items' // 传入的模块的子项数据
 :indexNum='index' // 当前模块所在数组中的index
 :tapIndex='tapIndex' // 用户点击的子项的index
 @tap-ModuleYitems='tapModuleYitems' // 点击子项所触发的函数
 v-if='true'></moduleYitems>
 -->

<template>
	<div class="content"  >
		<div class="moduleYitems-content" @tap='clickYitems()'>
			<div :class="tapIndex === indexNum ? 'moduleYitemsAC' : 'moduleYitems' ">
				<image class="items-img" :src='items.icon.catalog_white'></image>
			</div>
			<div :class="tapIndex === indexNum ? 'items-textAC' : 'items-text' ">
				{{items.iconTitle}}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		components: {
		},
		props: [
			'items',
			'indexNum',
			'tapIndex'],
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
			// 点击横向模块子项
			clickYitems () {
				console.log(this.indexNum);
				this.$emit('tap-ModuleYitems', [this.items, this.indexNum]);
			}
		}
	};
</script>

<style>
	.content{
		position: relative;
		width: 20vw;
	}
	.moduleYitems-content{
		position: relative;
		width: 150upx;
	}
	.moduleYitems{
		position: relative;
		width: 80upx;
		height: 80upx;
		margin: auto;
		border-radius: 50%;
		background: #BDBDBD;
	}
	.items-img{
		pposition: relative;
		width: 40upx;
		height: 40upx;
		margin: auto;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.items-text{
		font-family: PingFangSC-Regular;
		font-size: 24upx;
		color: #5D5D5D;
		text-align: center;
		margin-top: 16upx;
		overflow:hidden;
		text-overflow:ellipsis;
		-o-text-overflow:ellipsis;
		-webkit-text-overflow:ellipsis;
		-moz-text-overflow:ellipsis;
		white-space:nowrap;
	}
	.moduleYitemsAC{
		position: relative;
		width: 80upx;
		height: 80upx;
		margin: auto;
		border-radius: 50%;
		background-image: linear-gradient(134deg, #15D49F 0%, #57D6CF 100%);
		overflow:hidden;
		text-overflow:ellipsis;
		-o-text-overflow:ellipsis;
		-webkit-text-overflow:ellipsis;
		-moz-text-overflow:ellipsis;
		white-space:nowrap;
	}
	.items-textAC{
		font-family: PingFangSC-Regular;
		font-size: 24upx;
		color: #02C2A2;
		text-align: center;
		margin-top: 16upx;
	}
</style>
