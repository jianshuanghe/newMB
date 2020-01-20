<!-- 实例
 <swiperBanner
 swiperWidth='750upx' // 轮播图宽度
 swiperheight='400upx' // 轮播图高度
 :bannerList='info' // 轮播图数据
 autoplay='true' // 轮播图是否自動播放
 interval='5000' // 轮播图自動播放时间长度
 @click-Banner='tapBanner' // 点击轮播图操作后返回数据方法
 v-if='isrefresh' // 控制组件强制刷新（当触发删除时，所在的current为最后一个时，触发之后小程序页面空白，滑动不了，所以才设置这个
 ></swiperBanner>
 -->
<template>
	<view class="homeBanner" :style="{ width: swiperWidth, height: swiperHeight }" v-if="hackReset">
		<uni-swiper-dot :info="bannerLists" :current="current" field="content" :mode="mode" :dotsStyles="dotsStyles" v-if="swiperShows">
			<swiper class="swiper-box" :style="{ width: swiperWidth, height: swiperHeight }" @change="change" :autoplay="autoplays" :interval="interval">
				<swiper-item :class="translate ? 'transform' : ''" v-for="(item, index) in bannerList" :key="index" @tap="clickBanner(index, item.picUrl)">
					<view class="swiper-item" :style="{ width: swiperWidth, height: swiperHeight }">
						<image :src="item.picUrl" class="bannerImg" :style="{ width: swiperWidth, height: swiperHeight }"></image>
					</view>
					<!-- 替换、删除 -->
					<changeImgTips
						:tipsType="changeTipsNum"
						v-model="bannerLists"
						@delete-Image="deleteImage(index)"
						@change-Image="changeImage"
						@add-Image="addImage"
						@show-Image="showImage"
						v-if="Number(showTips) === Number(index) && !hideTips && disabled"
					></changeImgTips>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<div class="swiper-item" v-else>
			<defaultAdd 
			:imgDefaultSrc="defaultImg" 
			:widthStyle="swiperWidth" 
			:heightStyle="swiperHeight" 
			@add-ImageS="addImageS"
			></defaultAdd>
		</div>
	</view>
</template>

<script>
import { uniSwiperDot } from '@dcloudio/uni-ui';
import changeImgTips from '@/components/common/RHX/changeImgTips/changeImgTips';
import defaultAdd from '@/components/common/RHX/defaultAdd/defaultAdd';
export default {
	components: {
		uniSwiperDot,
		changeImgTips,
		defaultAdd
	},
	props: ['disabled', 'defaultImg', 'swiperWidth', 'swiperHeight', 'bannerList', 'autoplay', 'interval'],
	data() {
		return {
			showTips: -2, // 展示
			changeTipsNum: '3', // 展示更换图片的按钮个数， 默认是3个
			hideTips: false, // 隐藏
			hackReset: true, // 组件强制刷新，在删除数组最后一项时使用
			current: 0,
			mode: 'default',
			autoplays: this.autoplay,
			listData: {
				imageData: [],
				serverUrl: 'https://img01.iambuyer.com/imgup/upLoad/fileUpload' // 图片上传地址
			}, // 附件列表
			dotsStyles: {
				width: 8,
				height: 1,
				backgroundColor: '#6b6969',
				selectedBackgroundColor: ' #FFFFFF',
				selectedBorder: 0,
				border: 0
			},
			bannerLists: this.bannerList,
			translate: false
		};
	},
	created() {},
	watch: {
		bannerList: {
			handler(a, b) {
				this.bannerLists = a;
				if (a.length === 1) {
					this.changeTipsNum = '2.1'
				} else {
					this.changeTipsNum = '3'
				}
			},
			deep: true
		},
	},
	computed:{
		swiperShows () {
			if (this.bannerList.length > 0) {
				return true
			} else {
				return false
			}
		}
	},
	created () {
		if (this.bannerLists.length === 1) {
			this.changeTipsNum = '2.1'
		} else {
			this.changeTipsNum = '3'
		}
	},
	methods: {
		change(e) {
			console.log(e);
			this.current = e.detail.current;
		},
		// 点击空白处隐藏changeImgTips
		showImage() {
			console.log('点击空白处隐藏changeImgTips');
			this.hideTips = true;
			this.autoplays = true; // 自動播放开始
		},
		// 点击替换图片按钮
		changeImage(e) {
			console.log(e, '替换图片');
			this.bannerList[this.showTips].picUrl = e; // 替换图片
			this.$emit('tap-Banner', [this.bannerList, 'change']);
			this.current = Number(this.bannerList.length);
			this.hideTips = true;
			uni.showToast({
				title: '成功！',
				icon: 'none',
				duration: 500
			});
		},
		// 点击删除图片
		deleteImage(e) {
			console.log(e, '删除图片');
			if (e !== this.bannerList.length - 1 || e === 0) {
				console.log('删除的不是数组最后一项（排除数组只有一个时候');
				delete this.bannerList.splice(e, 1); // 删除选中的子项
				this.current = e - 1;
				console.log(this.current, '----------------this.current---------------')
				this.$emit('tap-Banner', [this.bannerList, 'detele']);
				this.hideTips = true;
				uni.showToast({
					title: '成功！',
					icon: 'none',
					duration: 500
				});
				// 删除的图片不是图片数组内的最后一张，这样可以保证当前显示下一张图片
			} else {
				console.log('删除的时数组最后一项')
				delete this.bannerList.splice(e, 1); // 删除选中的子项
				this.current = e - 1;
				console.log(this.current, '----------------this.current---------------')
				this.$emit('tap-Banner', [this.bannerList, 'detele']);
				this.hideTips = true;
				uni.showToast({
					title: '成功！',
					icon: 'none',
					duration: 500
				});
				// // 删除的图片是图片数组内的最后一张，强制刷新组件
				this.hackReset = false;
				this.$nextTick(() => {
					this.hackReset = true;
				})
			}
			
		},
		// 添加图片
		addImage(e) {
			console.log(e, '添加图片');
			let items = {
				picUrl: e,
				linkUrl: ''
			};
			this.bannerList.push(items);
			this.$emit('tap-Banner', [this.bannerList, 'add']);
			this.hideTips = true;
			uni.showToast({
				title: '成功！',
				icon: 'none',
				duration: 500
			});
		},
		// 点击默认图片时添加
		addImageS(e) {
			console.log(e, '添加图片');
			let items = {
				picUrl: e,
				linkUrl: ''
			};
			this.bannerList.push(items);
			this.$emit('tap-Banner', [this.bannerList, 'add']);
			this.hideTips = true;
			uni.showToast({
				title: '成功！',
				icon: 'none',
				duration: 500
			});
		},
		clickBanner(indexNum, e) {
			this.autoplays = false; // 自動播放停止
			console.log(indexNum, e, '-----------------picUrl----------------');
			this.hideTips = false; // 不隐藏
			this.showTips = indexNum; // 展示
		}
	}
};
</script>

<style>
.homeBanner {
	position: relative;
	width: 100%;
}
.uni-swiper-wrapper {
}
.swiper-box {
}
.bannerImg {
	position: relative;
	width: 100%;
}
.uni-swiper-msg {
	padding: 0 !important;
}
.transform{
	width: 100%; 
	height: 100%; 
	transform: translate(0%, 0px) translateZ(0px) !important;
}
</style>
