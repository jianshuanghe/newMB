<template>
	<div class="nav-box">
		<view class="navTabBox">
			<!-- 标题数量小于5 -->
			<view class="shortTab" v-if="tabBars.length<=7">
				<!-- 导航栏 -->
				<view class='navTab'>
					<view v-for="(item,index) in tabBars" :key="index" class='navTabItem' :class="index===tabClick?'click':''" @click='navClick(index)'>{{item.name}}</view>
				</view>
				<!-- 下划线 -->
				<view class="underlineBox" :style='"transform:translateX("+isLeft+"px);width:"+isWidth+"px"'>
					<view class="underline"></view>
				</view>
			</view>
			<!-- 标题数量大于5 开启长导航栏模式 -->
			<view class="longTab" v-if="tabBars.length>7">
				<scroll-view scroll-x="true" style="white-space: nowrap; display: flex" scroll-with-animation :scroll-into-view="toView">
					<view class="longItem" :data-index="index" :class="index===tabClick?'click':''" v-for="(item,index) in tabBars"
					 :key="index" :id="'id'+index" @click="longClick(index)">{{item.name}}</view>
					<view class="underlineBox" :style='"transform:translateX("+isLeft+"px);"'>
						<view class="underline"></view>
					</view>
				</scroll-view>

			</view>
			<!--  -->
		</view>
		<div class="channel-box">
			<div class="line-Y"></div>
			<image class="img" :src="channel"></image>
		</div>
	</div>
</template>

<script>
	import channel from '@/static/mbcImg/images/common/quickBtn.png';
	export default {
		name: 'navTab',
		props: {
			tabBars: {
				type: Array,
				default: []
			}

		},
		data() {
			return {
				channel: channel,
				tabClick: 0, //导航栏被点击
				isLeft: 0, //导航栏下划线位置
				isWidth: 0, //每个导航栏占位
				toView: '',
				isLongWidth: 0
			};
		},
		created() {
			var that = this
			// 获取设备宽度
			uni.getSystemInfo({
				success(e) {
					that.isWidth = e.windowWidth / that.tabBars.length; //宽度除以导航标题个数=一个导航所占宽度
					console.log(that.isWidth, '一个导航所占宽度');
					that.isLongWidth = e.windowWidth / 8;
					
				}
			})
			this.toView = 'id0'
		},
		methods: {
			// 导航栏点击
			navClick(index) {
				this.$parent.currentTab = index //设置swiper的第几页
				this.tabClick = index //设置导航点击了哪一个
				this.isLeft = index * this.isWidth //设置下划线位置
			},
			longClick(index) {
				var tempIndex = index - 2
				tempIndex = tempIndex <= 0 ? 0 : tempIndex
				this.toView = `id${tempIndex}` //动画滚动,滚动至中心位置
				console.log(index);
				this.tabClick = index //设置导航点击了哪一个
				this.isLeft = index * this.isLongWidth //设置下划线位置
				this.$parent.currentTab = index //设置swiper的第几页
			}
		}
	}
</script>

<style lang="scss">
	.channel-box{
		width: 12.5vw;
		height: 70upx;
		position: fixed;
		z-index: 1000;
		background: #FFFFFF;
		float: right;
		right: 0;
	}
	.line-Y{
		position: absolute;
		left: 0;
		width: 1upx;
		height: 60upx;
		margin-top: 5upx;
		background: #CCCCCC;
		opacity: 0.5;
		top: -1vw;
	}
	.channel-box .img{
		width: 7vw;
		height: 5vw;
		margin: auto;
		margin-top: 8upx;
		margin-left: 18upx
	}
	.navTabBox {
		width: 87.5vw;
		color: #2E2E30;
		position: fixed;
		z-index: 1000;

		.click {
			color: #00AF92;
		}

		.longTab {
			width: 100%;
			background-color: #FFFFFF;
			height: 70upx;

			.longItem {
				width: 14.28%;
				height: 42rpx;
				display: inline-block;
				line-height: 30rpx;
				text-align: center;
				font-size: 28rpx;
			}

			.underlineBox {
				height: 3px;
				width: 14.28%;
				display: flex;
				align-content: center;
				justify-content: center;
				transition: .5s;
				margin-bottom: 10upx;

				.underline {
					width: 50upx;
					height: 8upx;
					background-color: #00AF92;
					border-radius: 5upx;
				}
			}
		}

		.shortTab {
			width: 100%;

			.navTab {
				display: flex;
				width: 100%;
				height: 90upx;
				position: relative;

				.navTabItem {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 100%;
					font-size: 28upx;
				}
			}

			.underlineBox {
				height: 3px;
				display: flex;
				align-content: center;
				justify-content: center;
				transition: .5s;

				.underline {
					width: 84upx;
					height: 3px;
					background-color: white;
				}
			}
		}
	}
</style>
