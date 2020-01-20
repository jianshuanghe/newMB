<!-- 实例

 <moduleYlist
 id='moduleYlist'
 :titleH='titleH'
 :disabled='true'
 :scrollInto='scrollInto' // 滚动定位id
 :tabYItemsIndex='tabYItemsIndex' // 当前置顶的模块index,用来点亮横向列表对应子项和横向列表swiper滑动情况
 :dataList="content.context.tempCon.modules"
 :scrollX='true'// 是否横向滚动
 :column='5'// 一屏显示几列
 :scrollFixedShow='!scrollFixedShow' // 在页面有一个虚拟置顶模块，当这个置顶后，页面中的模块消失，
 :fixedScroll='fixedScroll' // 滚动置顶滚定定位对象，里面两个值比较，判断当前位置
 @tap-ScrollFixedShow='tapScrollFixedShow' // 是否需要展示置顶固定定位
 @top-Fixed='topFixed'// 置顶后返回的数据函数
 @tap-ModuleYList='tapModuleYList'>// 点击此模块的函数
 </moduleYlist>
 -->
<template>
	<div class="content">
		<!-- <div class="moduleYlist-content1" v-if='isFixedShow'></div> -->
		<div class='moduleYlist-content' :style="isFixedShow === true ? moduleYlistContentFED : ''" v-if='scrollFixedShows'>
			<!-- <div class="kong"></div> -->
			<div class="moduleYlist" id='yListModule'>
				<!-- 以下采用swiper实现横向滑动， 因为上面 scroll-view 无法动画和竖向联动-->
				<swiper class="swiper" 
				:indicator-dots="false" 
				:autoplay="false" 
				:current="tapIndex2"
				:next-margin='nextMargin'
				@transition='transitionSwiper'>
					<swiper-item v-for="(items, index) in dataLists" 
						:key="index"
						class='swiperItem'>
						<!-- 横向列表子项 -->
						<moduleYitems
						:items='items'
						:indexNum='index'
						:tapIndex='tapIndex'
						@tap-ModuleYitems='tapModuleYitems'
						v-if='true'></moduleYitems>
					</swiper-item>
				</swiper>
			</div>
		</div>
	</div>
</template>

<script>
	import moduleYitems from '@/components/common/RHX/moduleYitems/moduleYitems';
	export default {
		components: {
			moduleYitems
		},
		props: [
			'dataList',
			'scrollW',
			'column',
			'fixedScroll',
			'titleH',
			'scrollInto',
			'tabYItemsIndex',
			'scrollFixedShow'
			],
		data() {
			return {
				isFixedShow: false, // 是否固定定位
				scrollFixedShows: true,
				nextMargin: "290px",
				scrollWidth: '100vw', // 横向滚动宽度
				dataLists: this.dataList,
				tapIndex: 0, // 记录用户点击的子项
				scrollIntos: this.scrollInto,
				moduleYlistContentFED: { // 固定定位数据
					position: 'fixed',
					top: this.titleH + 'px',
					zIndex: '105',
					width: '100%',
				}
			};
		},
		created() {
			let num = Math.ceil(this.dataLists.length + 1);
			let itemsWidth = 100 / this.column; // 每列宽度， 单位是vw
			let scWidth = num * itemsWidth; // 计算出的宽度；
			if (scWidth > 100) { // 如果计算出的宽度大于100vw,则需要重新赋值
				this.scrollWidth = scWidth + 'vw'; 
			} else {
				this.scrollWidth = 100 + 'vw'; 
			};
			console.log(this.titleH, '-----------------------this.titleH-----------------------');
			this.getNextMargin(); // 获取轮播子项向后偏移量
		},
		mounted() {
			this.yListModule()
		},
		watch: {
			titleH: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听titleH变化---------------------------------------');
					this.moduleYlistContentFED.top = a + 'px'
				},
				deep: true
			},
			fixedScroll: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听fixedScroll变化---------------------------------------');
					console.log(a.scrollTop + this.titleH, 'a.scrollTop + this.titleH');
					if (a.scrollTop + this.titleH >= a.topFixedNum && a.scrollTop !== 0 ) {
						console.log('1更改哦');
						this.isFixedShow = true;
						this.$emit('tap-ScrollFixedShow', true);
					} else {
						console.log('2更改哦');
						this.isFixedShow = false;
						this.$emit('tap-ScrollFixedShow', false);
					}
				},
				deep: true
			},
			scrollInto: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听scrollInto变化---------------------------------------');
					this.scrollIntos = a;
				},
				deep: true
			},
			tabYItemsIndex: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听tabYItemsIndex变化---------------------------------------');
					this.tapIndex = a;
					let num = Math.ceil(this.dataLists.length);
					console.log(num, this.tapIndex,'------------+++++++++------------')
					if (num - this.tapIndex >= 4) {
						this.tapIndex2 = a;
					} else {
						this.tapIndex2 = num - 4;
					}
				},
				deep: true
			},
			scrollFixedShow: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听scrollFixedShow变化---------------------------------------');
					this.scrollFixedShows = a;
				},
				deep: true
			},
		},
		methods: {
			getNextMargin(){
				console.log('横向列表动画');
				let screenWidth = uni.getStorageSync('getSystemInfo').screenWidth; // 当前设备的屏幕宽度
				console.log(screenWidth);
				this.nextMargin = screenWidth/this.column* (this.column - 1) + 'px'
			},
			yListModule () {
				console.log('判断当前很想模块所在位置');
				// 计算 x y 轴点击位置
				var query = uni.createSelectorQuery().in(this);
				query.select('#yListModule').boundingClientRect();
				query.exec(res => {
					console.log(res, '-------------res-------------')
					let topY = res[0].top;
					console.log(topY, '---------------------topY------------------');
					this.$emit('top-Fixed', topY);
				});
			},
			// 点击横向列表子项
			tapModuleYitems(e){
				console.log(e, '点击横向列表子项');
				
				this.tapIndex = e[1];
				this.$emit('tap-ModuleYList', e);
			},
		}
	};
</script>

<style>
	.uni-swiper-slide-frame{
		width: 20vw !important;
	}
	.moduleYlist-content1{
		position: relative;
		width: 100%;
		height: 192upx;
	}
	.moduleYlist-content{
		position: relative;
		width: 100%;
	}
	.moduleYlist{
		position: relative;
		width: 100%;
		overflow: auto;
		background: #fff;
		padding: 4vw 0 0;
	}
	.scroll-W{
		white-space: nowrap;
		max-height: 100%;
	}
	.cont{
		position:relative;
		height:3vw;
	}
	.kong{
		position: relative;
		width: 100%;
		height: 4vw;
		background: #fff;
	}
	.swiperItem{
		position: relative;
		height: 160upx !important;
	}
	.swiper{
		height: 160upx !important;
	}
	uni-swiper{
		position: relative;
		height: 160upx !important;
	}
</style>
