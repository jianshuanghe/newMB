<template>
	<div class="deleteMoveTips-content">
		<!-- 遮罩层组件  点击时关闭deleteMove组件 -->
		<div class="deleteMoveTips-mask" :style="{width:dMWidth, height:dMHeight,right:dright}" @tap='clickMask'>
			<!-- deleteMove组件 数组长度大于一-->
			<div class="deleteMoveTips" :style="{width: dMItemWidth}" v-if='dataList.length > 1'>
				<div class="items left" @tap='upMove()' v-if='indexNum > 0'>
					<view class="moveImg">
						<image  style="width: 22.6upx; height: 14.2upx;" :src="topImg" mode=""></image>
					</view>
				</div>
				<div class="items left" @tap='downMove()' v-if='dataList.length > indexNum + 1'>
					<view class="moveImg">
						<image  style="width: 22.6upx; height: 14.2upx;" :src="bottomImg" mode=""></image>
					</view>
				</div>
				<div class="items left" @tap='deleteTip()'>
					<!-- 删除 -->
					<view class="moveImg">
						<image  style="width: 32upx; height: 28upx;" :src="deleteImg" mode=""></image>
					</view>
				</div>
				<div class="clear"></div>
			</div>
			<!-- 数组长度只有一时 -->
			<div class="deleteMoveTips" :style="{width: dMItemWidth}" v-if='dataList.length === 1'>
				<div class="items left" @tap='deleteTip()'>
					<view class="moveImg">
						<image  style="width: 32upx; height: 28upx;" :src="deleteImg" mode=""></image>
					</view>
				</div>
				<div class="clear"></div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import blackBtn from '@/components/common/button/blackBtn.vue';
	export default {
		props: ['dataList', 'itemsData', 'indexNum', 'heightStyle', 'dMWidth', 'dMHeight','dright'],
		data() {
			return {
				dMShow: false,
				dataLists: this.dataList,
				itemsDatas: {},
				deleteImg: this.Static+'common/del.png',
				topImg: this.Static+'common/top.png',
				bottomImg: this.Static+'common/botom.png'
			};
		},
		components: {
			blackBtn
		},
		computed: {
			i18n() {
				return this.$t('navigation');
			},
			dMItemWidth () { // 根据计算属性计算当前数组变化，之后返回需要展示的宽度
				if (this.dataList.length === 1) { // 数组长度唯一时时只有删除组件
					return '20vw'
				} else { // 数组长度大于一，在第一个和最后一个设置宽度（第一个展示替换、下移）（最后一个展示替换、上移）
					if (this.indexNum === 0 || this.dataList.length === (this.indexNum + 1)) {
						return '35vw'
					}
				}
			}
		},
		created () {
			this.itemsDatas = JSON.parse(JSON.stringify(this.itemsData)); // 深拷贝数组第一项，目的时数组会不停变化，深拷贝下来的第一项不变，用来添加数组，当数组为空时还可以添加
		},
		watch: {
			dataList: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听数组删除、上下移动变化---------------------------------------');
					this.dataLists = a;
				},
				deep: true
			}
		},
		methods: {
			deleteTip () {
				console.log('删除');
				this.changeData(this.indexNum, 0);
			},
			upMove () {
				console.log('上移');
				this.changeData(this.indexNum, 2);
			},
			downMove () {
				console.log('下移');
				this.changeData(this.indexNum, 1);
			},
			changeData(e, ev){
				console.log(e,'用户操作数据统一返回值------index');
				console.log(ev,'用户操作数据统一返回值------类型，2：上移, 1:下移； 0：删除');
				for(let i in this.dataLists) {
					if (String(i) === String(e)) {
						if (ev === 0) { // 删除
							console.log(this.dataLists, '删除之前')
							delete this.dataLists.splice(e, 1); // 删除选中的子项
							console.log(this.dataLists, '')
							// if (this.dataLists.length === 0) { // 如果把数组最后一项删除掉，那麽需要往数组中动态添加一项空数据用来添加新的子项
							// 	let items = {};
							// 	console.log(this.itemsDatas, '深拷贝下的第一组数据');
							// 	for (let i in this.itemsDatas) {
							// 		console.log(i);
							// 		items[i] = this.keyText(i);
							// 	};
							// 	items.defaultAdd = true; // 用来标记默认添加的项
							// 	this.dataLists.push(items);
							// 	this.$emit('tap-DeleteMoveTips',[this.dataLists, false]);
							// } else {
							// 	this.$emit('tap-DeleteMoveTips',[this.dataLists, true]);
							// }
							this.$emit('tap-DeleteMoveTips',[this.dataLists, true]);
						} else if (ev === 1) { // 下移
							this.dataLists[this.indexNum] = this.dataLists.splice(this.indexNum + 1, 1, this.dataLists[this.indexNum])[0];
							this.$emit('tap-DeleteMoveTips',[this.dataLists, true]);
						} else if (ev === 2) { // 上移
							this.dataLists[this.indexNum - 1] = this.dataLists.splice(this.indexNum, 1, this.dataLists[this.indexNum - 1])[0];
							this.$emit('tap-DeleteMoveTips',[this.dataLists, true]);
						}
					}
				}
			},
			clickMask () {
				console.log('触发点击遮罩层');
			}
		}
	};
</script>

<style>
	.deleteMoveTips-content{
		width: 100%;
		/* position: relative; */
	}
	.deleteMoveTips-mask{
		position: absolute;
		right: -5.5%;
		top: 0;
		background: rgba(66, 65, 65, 0.29);
		z-index: 102;
		display: flex;
		justify-content: center;
		align-content: center;
	}
	.deleteMoveTips{
		display: flex;
		justify-content: center;
		align-content: center;
	}
	.items{
		display: flex;
		align-items: center;
	}
	.moveImg{
		width: 32upx;
		height: 32upx;
		line-height: 32upx;
		text-align: center;
		margin: 0 15upx;
	}
</style>
