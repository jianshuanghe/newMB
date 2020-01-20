<!-- 实例
 <moduleIconLibrary
 :disabled="disabled" // 略
 :dataList="currentList" // 略
 :indexNum="item.SortNumber" // 绑定的组件用户拖动后所在的位置
 :selIconList='selIconList' // icon图库数组
 @tap-ModuleIconLibrary='tapModuleIconLibrary' // 用户点击图库触发行为
 >
 </moduleIconLibrary>
 -->
<template>
	<div class="moduleIconLibrary-content">
		<div class="moduleIconLibrary">
			<div class="changeIcon">
				<div class="title">
					更换图标
				</div>
				<div class="icon-box">
					<image class="icomItems left" :src="avtive === index ? item.selected : item.notSelected" v-for='(item,index) in selIconLists' :key='index' @tap="clickChangeIcon(index)"></image>
					<div class="clear"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import replaceIcon from '@/components/common/RHX/replaceIcon/replaceIcon';
	import inputBox from '@/components/common/RHX/inputBox/inputBox';
	export default {
		components: {
			replaceIcon,
			inputBox
		},
		props: [
			'dataList',
			'itemsData',
			'indexNum',
			'disabled',
			'selIconList'],
		data() {
			return {
				avtive: -1, // 用户点击的icon
				selIconLists: this.selIconList,
				dataLists: this.dataList
			};
		},
		created() {
		},
		watch: {
			dataList: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------dataList---------------------------------------');
					this.dataLists = a;
				},
				deep: true
			}
		},
		methods: {
			clickChangeIcon (e) {
				console.log(e, '删除组件');
				this.avtive = e;
				console.log(this.selIconLists[e], '-----------------------------this.selIconLists[e],用户新选择下来的---------------------------');
				this.$emit('tap-ModuleIconLibrary', this.selIconLists[e]);
			}
		}
	};
</script>

<style>
	.moduleIconLibrary-content{
		width: 100%;
	}
	.moduleIconLibrary{
		position: absolute;
		left:0;
		width: 100vw;
		height: 228upx;
		z-index: 100009;
		top: 86upx;
		background: #F9F9F9;
	}
	.changeIcon{
		position: relative;
		width: 100%;
	}
	.title{
		font-family: PingFangSC-Regular;
		font-size: 24upx;
		color: #9B9B9B;
		letter-spacing: 0;
		line-height: 92upx;
		text-align: left;
		padding-left: 40upx;
	}
	.icon-box{
		position: relative;
		width: 100%;
	}
	.icomItems{
		position: relative;
		width: 32upx;
		margin-left: 40upx;
		height: 32upx;
		margin-bottom: 20upx;
	}
</style>
