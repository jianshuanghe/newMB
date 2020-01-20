<template>
	<div class="custTitleXList-content">
		<div class="custTitleXList">
			<view class="resuleTab">
				<view class="resuleTab-box" v-if= 'swiperRefresh'>
					<!-- 以下采用swiper实现横向滑动， 因为上面 scroll-view 无法动画和竖向联动-->
					<swiper class="swiper" 
					:indicator-dots="false" 
					:autoplay="false" 
					:current="tapIndex2"
					:next-margin='nextMargin'>
						<swiper-item v-for="(items, index) in dataLists" 
							:key="index"
							@tap="clikeCustModuleTab(index)"
							class='RT-box'>
							<!-- 横向列表子项 -->
							<view
							:class="tapIndex === index ? 'RT-box-top active-tap' : 'RT-box-top'"
							>{{ items.iconTitle }}</view>
						</swiper-item>
					</swiper>
				</view>
				<div class="addbtn-content">
					<custTitleAdd
					@tap-CustTitleAdd='tapCustTitleAdd'
					></custTitleAdd>
				</div>
			</view>
		</div>
	</div>
</template>

<script>
import custTitleAdd from './../custTitleAdd/custTitleAdd';
export default {
	components: {
		custTitleAdd
	},
	props: [
		'dataList',
		'column',
		'custIndex'
	],
	data() {
		return {
			dataLists: this.dataList,
			swiperRefresh: true,
			nextMargin: "300px",
			scrollWidth: '100vw', // 横向滚动宽度
			tapIndex: 0,
		};
	},
	created() {
		this.getNextMargin(); // 获取轮播子项向后偏移量
	},
	mounted() {},
	watch: {
		scrollFixedShow: {
			handler(a, b) {
				console.log(a, b, '-----------监听scrollFixedShow变化------------');
				this.scrollFixedShows = a;
			},
			deep: true
		},
		custIndex: {
			handler(a, b) {
				console.log(a, b, '--------custIndex------');
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
		dataList: {
			handler(a, b) {
				console.log(a, b, '------------dataList-------');
				this.dataLists = a;
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
		clikeCustModuleTab(e) {
			console.log(e, '-----------------------');
			this.tapIndex = e;
			this.dataLists.map((items, index)=>{
				if(index === e) {
					this.$emit('tap-CustTitleXList', [items, index]);
				}
			})
			
		},
		tapCustTitleAdd() {
			this.$emit('tap-AddModule');
		}
	}
};
</script>

<style>
.resuleTab-content {
	background: #ffffff;
	box-shadow: 0 1px 0 0 #f5f5f5;
}
.resuleTab {
	position: relative;
	width: 100%;
	margin-bottom: 10upx;
}
.resuleTab-box {
	position: relative;
	width: 100%;
	background: #FFFFFF;
	box-shadow: 0 1px 0 0 #F5F5F5;
}
.RT-box {
	position: relative;
	width: 20vw;
}
.active-tap {
	color: #2E2E30 !important;
}
.RT-box-top {
	font-family: PingFangSC-Regular;
	font-size: 24upx;
	color: #9B9B9B;
	letter-spacing: 0;
	text-align: center;
	line-height: 72upx;
}
.swiperItem{
	position: relative;
	height: 70upx !important;
}
uni-swiper{
	position: relative;
	height: 70upx !important;
}
.addbtn-content{
	position: absolute;
	right: 0;
	top: 0;
}
</style>
