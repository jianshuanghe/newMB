<template>
	<view>
		<view class="search">
			<view class="city">北京</view>
			<view class="cityImg" @click="taptitleImg">
				<view v-if="isDown"><img :src="downImg" alt="" /></view>
				<view v-if="isUp"><img :src="upImg" alt="" /></view>
			</view>
			<view class="searchDiv">
				<image class="searchImg" :src="search"></image>
				<view class="searchInput">
					<input
						type="text"
						placeholder="输入网点名称"
						placeholder-style="font-family: PingFangSC-Regular;font-size: 26upx;color: #BDBDBD;line-height: 26upx;"
						v-model="keyword"
					/>
				</view>
			</view>
		</view>
		<view class="BDmap">
			<baidu-map :center="center" :zoom="zoom" style="height:40%" @click="getClickInfo" >
				<bm-view class="map"></bm-view>
				<bm-local-search 
				:keyword="keyword" 
				:auto-viewport="true" 
				:location="location" 
				:pageCapacity="20" 
				:selectFirstResult="true" 
				:panel="false"
				@searchcomplete="searchcomplete"
				></bm-local-search>
			</baidu-map>
			<view class="mapList">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
					<view class="mapItem" v-for="(item,index) in maplist" :key="index">
						<view class="addressImg">
							<image :src="address"></image>
						</view>
						<view class="itmeContent">
							<view>{{item.title}}</view>
							<view>{{item.address}}</view>
						</view>
					</view>
				 </scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
import downImg from '@/static/mbcImg/images/business/home/aftersale/导航-下拉.png';
import upImg from '@/static/mbcImg/images/business/home/aftersale/导航-收起.png';
import search from '@/static/mbcImg/images/business/home/aftersale/search.png';
import address from '@/static/mbcImg/images/business/home/aftersale/地址-绿2.png';
export default {
	components: {},
	data() {
		return {
			downImg: downImg, //下拉图片
			upImg: upImg, //上拉图片
			search: search,
			address:address,
			isDown: true,
			isUp: false,
			center: {
				lng: 116.403868,
				lat: 39.915097
			},
			zoom: 18,
			keyword: '',
			location: '北京',
			maplist :null,
		};
	},
	methods: {
		//滚动到顶部/左边，会触发 scrolltoupper 事件
		upper: function(e) {
            console.log(e)
        },
		//滚动到底部/右边，会触发 scrolltolower 事件
        lower: function(e) {
            console.log(e)
        },
		//滚动时触发
        scroll: function(e) {
            // console.log(e)
            this.old.scrollTop = e.detail.scrollTop
        },
		taptitleImg() {
			if (this.isDown == true) {
				this.isDown = false;
				this.isUp = true;
			} else {
				this.isDown = true;
				this.isUp = false;
			}
		},
		//点击地图显示经纬度
		getClickInfo(e) {
			console.log(e.point.lng);
			console.log(e.point.lat);
			this.center.lng = e.point.lng;
			this.center.lat = e.point.lat;
		},
		searchcomplete(arr){
			console.log(arr);
			this.maplist = arr.Br;
			console.log(this.maplist,'this.maplist');
		}
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
}
/* 地图 */
.BDmap{
	height: 93.4vh;
}
.map{
	width: 100%;
	height: 100%;
}
.mapList{
	height: 60%;
}
.scroll-Y{
	height: 100%;
}
.mapItem{
	display: flex;
	align-items: center;
	margin-left: 30upx;
	margin-right: 30upx;
	height: 132upx;
	border-bottom: 1upx solid #E2E2E2;
}
.addressImg{
	width: 32upx;
	height: 32upx;
	margin-right: 20upx;
}
.addressImg image{
	width: 100%;
	height: 100%;
}
.itmeContent view:nth-child(1){
	font-family: PingFangSC-Regular;
	font-size: 28upx;
	color: #2E2E30;
	letter-spacing: 0;
	line-height: 28upx;
}
.itmeContent view:nth-child(2){
	font-family: PingFangSC-Regular;
	font-size: 24upx;
	color: #9B9B9B;
	letter-spacing: 0;
	line-height: 28upx;
	margin-top: 16upx;
}
</style>
