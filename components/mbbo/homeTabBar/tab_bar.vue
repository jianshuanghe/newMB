<template>
	<view class="tabBar-content">
		<view class="tabBarBox">
			<view class="tb-content">
				<view class="left tb-box" @tap="tabBarItems(1)">
					<view class="tb-img"><image :src="home"></image></view>
					<view class="tb-text">
						<text :class="clickItems === 1 ? 'class-a' : ''">{{ i18n.home }}</text>
					</view>
				</view>
				<view class="left tb-box" @tap="tabBarItems(2)">
					<view class="tb-img"><image :src="find"></image></view>
					<view class="tb-text">
						<text :class="clickItems === 2 ? 'class-a' : ''">{{ i18n.find }}</text>
					</view>
				</view>
				<view class="left tb-box" @tap="tabBarItems(5)">
					<view class="tb-img-pub"><image :src="published"></image></view>
				</view>
				<view class="left tb-box" @tap="tabBarItems(3)">
					<view class="tb-img"><image :src="news"></image></view>
					<view class="tb-text">
						<text :class="clickItems === 3 ? 'class-a' : ''">{{ i18n.news }}</text>
					</view>
					<view class="noticeCount" v-if="Number(List.noticeCount) !== 0 && List.noticeCount">{{ List.noticeCount }}</view>
				</view>
				<view class="left tb-box" @tap="tabBarItems(4)">
					<view class="tb-img"><image :src="my"></image></view>
					<view class="tb-text">
						<text :class="clickItems === 4 ? 'class-a' : ''">{{ i18n.my }}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import home from '@/static/mbcImg/tabBar/home.png';
import find from '@/static/mbcImg/tabBar/find.png';
import published from '@/static/mbcImg/tabBar/published.png';
import news from '@/static/mbcImg/tabBar/news.png';
import my from '@/static/mbcImg/tabBar/my.png';
import homed from '@/static/mbcImg/tabBar/homed.png';
import finded from '@/static/mbcImg/tabBar/finded.png';
import newsed from '@/static/mbcImg/tabBar/newsed.png';
import myed from '@/static/mbcImg/tabBar/myed.png';
export default {
	data() {
		return {
			clickItems: 2, // 用户初次进来默认用户为首页
			tabbarItems: 2, // 记录用户切换的按钮
			home: home, // 首页
			find: finded, // 发现
			published: published, // 发布
			news: news, // 消息
			my: my, // 我的
			List: []
		};
	},
	components: {},

	computed: {
		i18n() {
			return this.$t('tab_bar');
		},
		...mapGetters(['GET_HOME', 'GET_MY'])
	},
	watch: {
		GET_HOME: {
			handler(a, b) {
				this.clickItems = a.tabItems; // 切换tabbar
				this.tabBarItems(this.clickItems);
			},
			deep: true
		},
		// GET_MY: {
		// 	handler(a, b) {
		// 		console.log(a, b);
		// 		this.List = a.MyList.header;
		// 		console.log(this.List);
		// 	},
		// 	deep: true
		// }
	},
	created() {
		this.Static = '@/static/'
		if (uni.getStorageSync('clickItems')) {
			this.clickItems = uni.getStorageSync('clickItems'); // 取缓存中tabbar数据
			this.tabBarItems(this.clickItems);
		} else {
			this.tabBarItems(this.clickItems);
		}
		console.log(this._i18n, '---------------------语言----------------------');
	},
	mounted() {
		// this.getHeader();
	},
	methods: {
		...mapMutations({
			setHome: 'setHome',
			setPublishShow: 'setPublishShow'
		}),
		tabBarItems(e) {
			console.log(e, '触发tabbar按钮');
			if (e === 1) {
				if (!uni.getStorageSync('landRegist')) {
					this.landRegistra(); // 判断登录状态
				}
				if (uni.getStorageSync('landRegist')) {
					this.home = homed;
					this.find = find;
					this.news = news;
					this.my = my;
					this.clickItems = e;
					this.$store.commit('setHome', this.clickItems);
					uni.setStorageSync('clickItems', e);					
				}
			} else if (e === 2) {
				this.home = home;
				this.find = finded;
				this.news = news;
				this.my = my;
				this.clickItems = e;
				this.$store.commit('setHome', this.clickItems);
				uni.setStorageSync('clickItems', e);
			} else if (e === 3) {
				if (!uni.getStorageSync('landRegist')) {
					this.landRegistra(); // 判断登录状态
				}
				if (uni.getStorageSync('landRegist')) {
					this.home = home;
					this.find = find;
					this.news = newsed;
					this.my = my;
					this.clickItems = e;
					this.$store.commit('setHome', this.clickItems);
					uni.setStorageSync('clickItems', e);					
				}
			} else if (e === 4) {
				if (!uni.getStorageSync('landRegist')) {
					this.landRegistra(); // 判断登录状态
				}
				if (uni.getStorageSync('landRegist')) {
					this.home = home;
					this.find = find;
					this.news = news;
					this.my = myed;
					this.clickItems = e;
					this.$store.commit('setHome', this.clickItems);
					uni.setStorageSync('clickItems', e);				
				}
			} else if (e === 5) {
				console.log('触发发布按钮');
				if (!uni.getStorageSync('landRegist')) {
					this.landRegistra(); // 判断登录状态
				}
				if (uni.getStorageSync('landRegist')) {
					this.$store.commit('setPublishShow', true); // 展示发布组件			
				}
			}
		},
		getHeader() {
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				// let params = {}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/user/' + landRegistLG.user.id, //接口地址。
					// data: this.endParams(params),
					method: 'GET',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						console.log(response.data);
						this.Listdata = response.data.content;
						this.$store.commit('setheader', this.Listdata);
					},
					fail: error => {
						uni.hideLoading(); // 隐藏 loading
						uni.showToast({
							title: '网络繁忙，请稍后',
							icon: 'none',
							duration: 1000
						});
						console.log(error, '网络繁忙，请稍后');
					}
				});
			}
		}
	}
};
</script>

<style>
.tabBar-content {
	position: fixed;
	bottom: 0;
	width: 750upx;
	height: 100upx;
	background: #ffffff;
	box-shadow: 0 -2upx 0 0 #f5f5f5;
}
.tabBarBox {
	position: relative;
	width: 750upx;
	height: 100upx;
	padding: 5upx 5upx 5upx 5upx;
}
.tb-content {
	position: relative;
	width: 740upx;
	height: 100upx;
}
.tb-box {
	position: relative;
	width: 20%;
}
.tb-img {
	position: relative;
	width: 100%;
	text-align: center;
}
.tb-img > image {
	position: relative;
	width: 44upx;
	height: 44upx;
	margin: auto;
	top: 8upx;
}
.tb-img-pub {
	position: relative;
	width: 100%;
	text-align: center;
}
.tb-img-pub > image {
	position: relative;
	width: 74upx;
	height: 74upx;
	margin: auto;
	top: 8upx;
}
.tb-text {
	position: relative;
	width: 100%;
	line-height: 20upx;
	text-align: center;
}
.tb-text > text {
	position: relative;
	width: 100%;
	font-family: PingFangSC-Regular;
	font-size: 24upx;
	color: #9B9B9B;
}
.class-a {
	color: #02c2a2 !important;
}
.noticeCount {
	position: absolute;
	top: 1upx;
	right: 29upx;
	width: 36upx;
	height: 36upx;
	background: #ff3a2e;
	font-size: 20upx;
	color: #ffffff;
	border-radius: 50%;
	text-align: center;
	line-height: 36upx;
}
</style>
