<template>
	<view>
		<view>
			<topBox><p>我的网点</p></topBox>
		</view>
		<scroll-view class="scroll-v" scroll-y="true" :show-scrollbar="false" :scroll-with-animation="true" @scrolltolower="lower">
			<view><pullDownList :cityLists="cityList" @changeCityCode="changeCityCode"></pullDownList></view>
			<view class="list" v-if="this.list.length >= 1">
				<view class="listItem" v-for="(item, index) in list" :key="index">
					<view class="itemTitle">{{ item.aftersaleName }}</view>
					<view class="itemLabel">
						<view v-for="(items, index) in item.aftersaleSerivce" :key="index">{{ items }}</view>
					</view>
					<view class="item itemAddress">
						<view><image :src="address"></image></view>
						<view style="line-height: 32upx;">{{ item.aftersaleAddr }}</view>
					</view>
					<view class="item phoneNumber">
						<image :src="call"></image>
						<view>{{ item.aftersalePhone }}</view>
					</view>
					<view class="item itemAddress">
						<image :src="clock"></image>
						<view>营业时间：{{ item.aftersaleTime }}</view>
					</view>
					<view class="bianji" @click="edit(item)"><image :src="bianji"></image></view>
				</view>
			</view>
			<!-- 没有网点 -->
			<view class="noContent" v-else>
				<view class="noContentImg"><image :src="nocontent"></image></view>
				<view>这还什么都没有哦</view>
			</view>
		</scroll-view>
		<view><createsale></createsale></view>
	</view>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import topBox from '@/components/mbbo/topBox/topBox';
import pullDownList from '@/modules/myCompany/aftersale/aftersaleItems/pullDownList';
import createsale from '@/modules/myCompany/aftersale/aftersaleItems/createSale';
import address from '@/static/mbcImg/images/business/home/aftersale/addresslink.png';
import call from '@/static/mbcImg/images/business/home/aftersale/icon_phone.png';
import clock from '@/static/mbcImg/images/business/home/aftersale/icon_roundreduce.png';
import bianji from '@/static/mbcImg/images/business/home/aftersale/bianji.png';
import nocontent from '@/static/mbcImg/images/business/home/aftersale/nocontent.png';
export default {
	name: 'aftermarket',
	components: {
		topBox,
		pullDownList,
		createsale
	},
	data() {
		return {
			address: address,
			call: call,
			clock: clock,
			nocontent: nocontent,
			bianji: bianji,
			cityList: null, //我的售后网点-城市列表
			list: null, //我的售后网点列表,
			cityCode: '',//城市码
			page:'1'//默认请求第一页10条数据
		};
	},
	computed: {
		...mapGetters(['CUSTOMERSERVICEOUTLETS'])
	},
	methods: {
		...mapMutations({
			setServiceOutletCount: 'setServiceOutletCount',
			setServiceOutletCity: 'setServiceOutletCity'
		}),
		// 我的售后网点-城市列表
		getcitylist() {
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				// console.log(landRegistLG.user.id);
				// let params = {}; // 请求总数居时 参数为空
				uni.request({
					url: this.api2 + '/rest-rp/aftersale/cityList?userId=760', //接口地址。
					// data: params,
					method: 'GET',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						// console.log(response.data.content,'下拉导航');
						this.cityList = response.data.content;
						this.$store.commit('setServiceOutletCount', response.data.content);
						// console.log(this.$store.state.CustomerServiceOutlets,'vuex');
					},
					fail: error => {
						uni.showToast({
							title: '网络繁忙，请稍后',
							icon: 'none',
							duration: 1000
						});
						// console.log(error, '网络繁忙，请稍后');
					}
				});
			}
		},
		// 我的售后网点列表
		aftersaleList() {
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				// console.log(landRegistLG.user.id);
				// let params = {}; // 请求总数居时 参数为空
				uni.request({
					url: this.api2 + '/rest-rp/aftersale/list?userId=760&page='+this.page+'&cityCode=' + this.cityCode, //接口地址。
					// data: params,
					method: 'GET',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						// console.log(response.data.content.list,'我的售后网点列表');
						this.list = response.data.content.list;
						this.$store.commit('setServiceOutletCity', response.data.content.list);
					},
					fail: error => {
						uni.showToast({
							title: '网络繁忙，请稍后',
							icon: 'none',
							duration: 1000
						});
						// console.log(error, '网络繁忙，请稍后');
					}
				});
			}
		},
		//更改城市
		changeCityCode(e) {
			this.cityCode = e;
			this.page= '1';
			// console.log(e,'传输过来的城市码',this.cityCode);
			this.aftersaleList();
		},
		edit(e) {
			console.log(e, '编辑网点传的参数');
			let navData = JSON.stringify(e);
			console.log(navData, '编辑网点传的参数串');
			uni.navigateTo({
				url: './newsale?item=' + encodeURIComponent(navData)
			});
		},
		lower(e) {
			console.log(e,'到底部了');
			this.page++;
			console.log(this.page);
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				// console.log(landRegistLG.user.id);
				// let params = {}; // 请求总数居时 参数为空
				uni.request({
					url: this.api2 + '/rest-rp/aftersale/list?userId=760&page='+this.page+'&cityCode=' + this.cityCode, //接口地址。
					// data: params,
					method: 'GET',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						console.log(response,'触底返回信息');
						let newList = response.data.content.list;
						console.log(newList);
						if(newList.length>0){
							for(var i=0;i<newList.length;i++){
								this.list.push(newList[i])
								console.log(newList[i]);
							}
							console.log(this.list);
							this.$store.commit('setServiceOutletCity', this.list);
						}
						
					},
					fail: error => {
						uni.showToast({
							title: '网络繁忙，请稍后',
							icon: 'none',
							duration: 1000
						});
						// console.log(error, '网络繁忙，请稍后');
					}
				});
			}
		}
	},
	watch: {
		CUSTOMERSERVICEOUTLETS: {
			handler(a, b) {
				// console.log(a, b, 'header----list');
				this.list = a.cityList;
				this.cityList = a.count;
			},
			deep: true
		}
	},
	created() {
		this.aftersaleList(); // 我的售后网点列表
		this.getcitylist(); // 我的售后网点-城市列表
		// console.log(this.$store.state.CustomerServiceOutlets.count,'vuex');
	}
};
</script>

<style>
.list {
	background: #ffffff;
}
.listItem {
	margin-left: 30upx;
	margin-right: 30upx;
	padding: 40upx 0 40upx 0;
	border-bottom: 2upx solid #f5f5f5;
	position: relative;
}
.itemTitle {
	width: 584upx;
	font-family: PingFang-SC-Bold;
	font-size: 36upx;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 52upx;
}
.itemLabel {
	display: flex;
	flex-wrap: wrap;
	margin-top: 20upx;
	margin-bottom: 20upx;
}
.itemLabel view {
	min-width: 100upx;
	min-height: 32upx;
	background: #fff7e5;
	border-radius: 4upx;
	font-family: PingFang-SC-Medium;
	font-size: 20upx;
	color: #fe9d08;
	letter-spacing: 0;
	line-height: 20upx;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 10upx;
	margin-bottom: 10upx;
	padding:0 10upx 0 10upx;
}
.item {
	font-family: PingFangSC-Regular;
	display: flex;
	align-items: center;
}
.item view:nth-child(2) {
	font-size: 24upx;
	line-height: 32upx;
}
.itemAddress {
	color: #5d5d5d;
}
.itemAddress image,
.phoneNumber image {
	width: 24upx;
	height: 24upx;
	margin-right: 10upx;
}
.phoneNumber {
	color: #02c2a2;
	margin-top: 20upx;
	margin-bottom: 20upx;
}
.bianji {
	width: 36upx;
	height: 36upx;
	position: absolute;
	top: 40upx;
	right: 30upx;
}
.bianji image {
	width: 100%;
	height: 100%;
}
/* 没有内容 */
.noContent {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.noContentImg {
	width: 280upx;
	height: 280upx;
	margin-top: 120upx;
}
.noContentImg image {
	width: 100%;
	height: 100%;
}
.noContent view:nth-child(2) {
	margin-top: 60upx;
	font-family: PingFangSC-Regular;
	font-size: 32upx;
	color: #9b9b9b;
	letter-spacing: 0;
	text-align: center;
	line-height: 32upx;
}
.scroll-v {
	flex: 1;
	/* #ifndef MP-ALIPAY */
	flex-direction: column;
	/* #endif */
	width: 750upx;
	height: 86vh;
	background: #ffffff;
	/* padding-bottom: 20vh; */
}
</style>
