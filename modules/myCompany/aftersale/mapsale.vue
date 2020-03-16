<template>
	<view>
		<view class="search">
			<view class="city">{{ city }}</view>
			<view class="cityImg" @click="taptitleImg">
				<view v-if="isDown"><img :src="downImg" alt="" /></view>
				<view v-if="isUp"><img :src="upImg" alt="" /></view>
			</view>
			<view class="searchDiv">
				<image class="searchImg" :src="search"></image>
				<view class="searchInput" v-if="showCitySearch">
					<input
						type="text"
						placeholder="输入城市名进行搜索"
						placeholder-style="font-family: PingFangSC-Regular;font-size: 26upx;color: #BDBDBD;line-height: 26upx;"
						v-model="citysearch"
						@input="searchCity"
					/>
				</view>
				<view class="searchInput" v-if="showSearch">
					<input
						type="text"
						placeholder="输入网点名称"
						placeholder-style="font-family: PingFangSC-Regular;font-size: 26upx;color: #BDBDBD;line-height: 26upx;"
						v-model="keyword"
						@focus="focusInput"
						@blur="blurInput"
					/>
				</view>
			</view>
		</view>
		<!-- 城市列表 -->
		<view class="cityList" v-if="showCityList">
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
				<view class="cityPosition">
					<view>当前定位城市</view>
					<view>
						<view>{{ city }}</view>
						<view>
							<image :src="positionImg"></image>
							重新定位
						</view>
					</view>
				</view>
				<view v-for="(item, index) in cityLists" :key="index" class="cityItem" @click="cityItem(item)">
					<view>{{ item.baiduAddrName }}</view>
				</view>
			</scroll-view>
		</view>
		<view class="BDmap" v-show="showmap">
			<baidu-map :center="center" :zoom="zoom" style="height:45%" @click="getClickInfo" @ready="handler">
				<!-- 搜索 -->
				<!-- location表示检索区域，其类型可为空、坐标点或城市名称的字符串
							keyword搜索关键字
							autoViewport检索结束后是否自动调整地图视野。
							pageCapacity设置每页容量
							selectFirstResult是否选择第一个检索结果。
							panel是否选展现检索结果面板。 -->
				<bm-local-search
					:keyword="keyword"
					:auto-viewport="true"
					:location="location"
					:pageCapacity="25"
					:selectFirstResult="false"
					:panel="false"
					@searchcomplete="searchcomplete"
				></bm-local-search>
				<bm-marker :position=this.center :dragging="true" :raiseOnDrag="true" animation="BMAP_ANIMATION_BOUNCE" @dragend= "dragend"></bm-marker>
				 <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
			</baidu-map>
			<view class="mapList">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
					<view class="mapItem" v-for="(item, index) in addressList" :key="index" @click="clickAddress(item)">
						<view class="addressImg"><image :src="address"></image></view>
						<view class="itmeContent">
							<view>{{ item.title }}</view>
							<view>{{ item.address.slice(0, 40) }}</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="mapList">
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
				<view class="mapItem" v-for="(item, index) in maplist" :key="index" @click="clickAddress(item)">
					<view class="addressImg"><image :src="address"></image></view>
					<view class="itmeContent">
						<view>{{ item.title }}</view>
						<view>{{ item.address.slice(0, 40) }}</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import downImg from '@/static/mbcImg/images/business/home/aftersale/导航-下拉.png';
import upImg from '@/static/mbcImg/images/business/home/aftersale/导航-收起.png';
import search from '@/static/mbcImg/images/business/home/aftersale/search.png';
import address from '@/static/mbcImg/images/business/home/aftersale/地址-绿2.png';
import positionImg from '@/static/mbcImg/images/business/home/aftersale/404定位.png';
export default {
	components: {},
	data() {
		return {
			downImg: downImg, //下拉图片
			upImg: upImg, //上拉图片
			search: search,
			address: address,
			positionImg: positionImg,
			isDown: true,
			isUp: false,
			showCityList: false,
			showmap: true,
			showCitySearch: false,
			showSearch: true,
			center: {
				lng: '',
				lat: ''
			},
			zoom: 18,
			keyword: '',
			location: '',
			maplist: null, //搜索到的地址信息
			addressList: null, //坐标点附近的地理信息
			citylist: null,
			city: '',
			citysearch: '',
			cityLists: [],
			returnItem: null, //用户点击地址后返回的值
			baiduAddrCode: '' //百度城市码
		};
	},
	computed: {
		// citylist(){
		// 	 var citylist = [];
		// 	   this.citylist.map(function(item) {
		// 	    if (item.baiduAddrName.search(this.citysearch) != -1) {
		// 	     citylist.push(item)
		// 	    }
		// 	   });
		// 	   return citylist;
		// }
	},
	methods: {
		handler({ BMap, map }) {
			if (this.location == '') {
				var that = this;
				if (that.center.lng == '' && that.center.lat == '') {
					//ip定位
					function myFun(result) {
						var cityName = result.name;
						that.baiduAddrCode = result.code;
						map.setCenter(cityName);
						console.log(result, 'ip定位地址');
						console.log(that.baiduAddrCode, 'ip定位城市码');
					}
					var myCity = new BMap.LocalCity();
					myCity.get(myFun);
					//浏览器定位
					var geolocation = new BMap.Geolocation();
					geolocation.getCurrentPosition(function(r) {
						if (this.getStatus() == BMAP_STATUS_SUCCESS) {
							// var mk = new BMap.Marker(r.point);
							// map.addOverlay(mk);
							// map.panTo(r.point);
							console.log('您的位置：' + r.point.lng + ',' + r.point.lat);
							that.center.lng = r.longitude;
							that.center.lat = r.latitude;
							that.city = r.address.city;
							that.location = r.address.city;
							console.log(r, '浏览器定位');
						} else {
							alert('failed' + this.getStatus());
						}
					});
				} else {
					// 创建地理编码实例
					var myGeo = new BMap.Geocoder();
					// 根据坐标得到地址描述
					myGeo.getLocation(new BMap.Point(that.center.lng, that.center.lat), function(result) {
						console.log(result);
						that.city = result.addressComponents.city;
						that.addressList = result.surroundingPois;
					});
				}
			}
		},
		//滚动到顶部/左边，会触发 scrolltoupper 事件
		upper: function(e) {
			// console.log(e)
		},
		//滚动到底部/右边，会触发 scrolltolower 事件
		lower: function(e) {
			// console.log(e)
		},
		//滚动时触发
		scroll: function(e) {
			// console.log(e)
			// this.old.scrollTop = e.detail.scrollTop
		},
		taptitleImg() {
			if (this.isDown == true) {
				this.isDown = false;
				this.isUp = true;
				this.showCityList = true;
				this.showmap = false;
				this.showCitySearch = true;
				this.showSearch = false;
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({
						// 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/aftersale/allCityList', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
						},
						success: response => {
							uni.hideLoading();
							console.log(response.data.content, '城市列表');
							this.citylist = response.data.content;
							this.cityLists = response.data.content;
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
			} else {
				this.isDown = true;
				this.isUp = false;
				this.showCityList = false;
				this.showmap = true;
				this.showCitySearch = false;
				this.showSearch = true;
			}
		},
		//点击地图显示经纬度
		getClickInfo(e) {
			console.log(e.point.lng, e.point.lat, '经纬度');
			// this.center.lng = e.point.lng;
			// this.center.lat = e.point.lat;
		},
		searchcomplete(arr) {
			console.log(arr, '搜索到的信息');
			this.maplist = arr.Br;
			console.log(this.maplist, '-----------------this.maplist搜索到的信息----------------');
		},
		clickAddress(item) {
			console.log(item, '*********点击回传的数据***********');
			this.returnItem = item;
			var pages = getCurrentPages();
			var currPage = pages[pages.length - 1]; //当前页面
			var prevPage = pages[pages.length - 2]; //上一个页面
			console.log(currPage, '当前页面', prevPage, '上一个页面');
			prevPage._data.address = item.address; //地址信息赋值给上一页中的data里的address中
			prevPage._data.baiduAddrCode = this.baiduAddrCode; //百度城市码赋值给上一页中的data里的baiduAddrCode中
			prevPage._data.aftersaleLatitude = item.point.lat; //北纬
			prevPage._data.aftersaleLongitude = item.point.lng; //东经
			uni.navigateBack();
		},
		// dragend(e) {
		// 	console.log(e);
		// },
		cityItem(e) {
			console.log(e, '点击城市');
			this.baiduAddrCode = e.baiduAddrCode;
			this.city = e.baiduAddrName;
			this.location = e.baiduAddrName;
			this.showCityList = false;
			this.isDown = true;
			this.isUp = false;
			this.showmap = true;
			this.showSearch = true;
			this.showCitySearch = false;
		},
		searchCity(e) {
			console.log(e.detail.value);
			this.cityLists = [];
			this.citylist.map((item, index) => {
				if (item.baiduAddrName.search(e.detail.value) != -1) {
					//检索到了
					console.log(item);
					this.cityLists.push(item);
				}
			});
			console.log(this.cityLists);
		},
		//搜索框触焦
		focusInput() {
			this.showmap = false;
			console.log(this.maplist, 'maplist');
		},
		//移動坐标
		dragend(e){
			var that = this;
			console.log(e.point,'移动坐标')
			that.center.lng = e.point.lng;
			that.center.lat = e.point.lat;
			// 创建地理编码实例
			var myGeo = new BMap.Geocoder();
			// 根据坐标得到地址描述
			myGeo.getLocation(new BMap.Point(that.center.lng, that.center.lat), function(result) {
				console.log(result);
				that.city = result.addressComponents.city;
				that.addressList = result.surroundingPois;
			});
		}
	},
	onLoad(options) {
		console.log(options);
		this.center.lng = options.aftersaleLongitude;
		this.center.lat = options.aftersaleLatitude;
		this.baiduAddrCode = options.baiduAddrCode;
	},
	created() {}
};
</script>

<style>
.search {
	width: 100%;
	height: 6.6vh;
	background: #ffffff;
	display: flex;
	align-items: center;
}
.city {
	font-family: PingFangSC-Regular;
	font-size: 28upx;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 36upx;
	margin-left: 30upx;
}
.cityImg {
	margin-left: 10upx;
}
.cityImg img {
	width: 20upx;
	height: 20upx;
}
.searchDiv {
	display: flex;
	width: 574upx;
	height: 60upx;
	background: #f5f5f5;
	border-radius: 30upx;
	margin-left: 30upx;
	display: flex;
	align-items: center;
}
.searchImg {
	width: 26upx;
	height: 26upx;
	margin-left: 22upx;
}
.searchInput {
	margin-left: 10upx;
	width: 500upx;
}
.searchInput input {
	width: 100%;
}
/* 地图 */
.BDmap {
	height: 93.4vh;
}
.map {
	width: 100%;
	height: 100%;
}
.mapList {
	height: 55%;
}
.scroll-Y {
	height: 100%;
}
.mapItem {
	display: flex;
	align-items: center;
	margin-left: 30upx;
	margin-right: 30upx;
	height: 132upx;
	border-bottom: 1upx solid #e2e2e2;
}
.addressImg {
	width: 32upx;
	height: 32upx;
	margin-right: 20upx;
}
.addressImg image {
	width: 100%;
	height: 100%;
}
.itmeContent view:nth-child(1) {
	font-family: PingFangSC-Regular;
	font-size: 28upx;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 28upx;
}
.itmeContent view:nth-child(2) {
	font-family: PingFangSC-Regular;
	font-size: 24upx;
	color: #9b9b9b;
	letter-spacing: 0;
	line-height: 28upx;
	margin-top: 16upx;
}
/* 城市列表 */
.cityList {
	height: 93.4vh;
}
.cityPosition {
	height: 170upx;
	width: 100%;
	border-bottom: 2upx solid #f5f5f5;
}
.cityPosition > view:nth-child(1) {
	font-family: PingFangSC-Regular;
	font-size: 28upx;
	color: #9b9b9b;
	line-height: 28upx;
	padding-top: 40upx;
	margin-left: 30upx;
	margin-right: 30upx;
}
.cityPosition > view:nth-child(2) {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-left: 30upx;
	margin-right: 30upx;
	margin-top: 30upx;
}
.cityPosition > view:nth-child(2) > view:nth-child(1) {
	font-family: PingFangSC-Medium;
	font-size: 34upx;
	color: #2e2e30;
	line-height: 34upx;
}
.cityPosition > view:nth-child(2) > view:nth-child(2) {
	font-family: PingFangSC-Regular;
	font-size: 28upx;
	color: #02c2a2;
	text-align: right;
	line-height: 28upx;
	display: flex;
	align-items: center;
}
.cityPosition > view:nth-child(2) > view:nth-child(2) image {
	width: 34upx;
	height: 34upx;
	margin-right: 16upx;
}
.cityItem {
	height: 100upx;
	margin-left: 30upx;
	margin-right: 30upx;
	display: flex;
	align-items: center;
	border-bottom: 2upx solid #f5f5f5;
}
</style>
