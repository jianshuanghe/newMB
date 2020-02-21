<template>
	<view class="find-search">
		<!-- 搜索 -->
		<div class="quickBtn-search">
			<div class="quickBtn-Fd left"><quickBtn></quickBtn></div>
			<div class="search-Fd left">
				<view class="search-NI-img left"><image :src="souseach"></image></view>
				<view class="search-NI-text">
					<view class="search-NI-box">
						<input v-model="searchLS" type="text" adjust-position="true" autofocus="autofocus" focus="true" class="inputSearch" placeholder="商机名称" @click="fist()" placeholder-style="color:#BDBDBD" />
					</view>
				</view>
				<view class="search-NI-textp" @tap="searchSS">搜索</view>
			</div>
			<div class="clear"></div>
		</div>
		<div class="tian"></div>
		<view class="find-search-LS" v-if="shousuo==false">
			<view class="find-search-LSP">搜索历史</view>
			<view class="find-search-LSARR">
				<view v-for="(item,index) in arr" :key="index" v-if="arr.length!==0" @tap="searLS(item)">{{item}}</view>
				<view class="find-search-LSTS" v-if="arr.length==0">暂无搜索历史</view>
			</view>
			<view class="find-search-bot" @tap="deleadd()">清除历史记录</view>
		</view>
		<div class="swiper-tab-content" v-if="shousuo==true">
			<div class="tab-content">
				<scroll-view id="tab-bar" class="scroll-h" :scroll-x="true" :show-scrollbar="false" :scroll-into-view="scrollInto" @change="ontabchange">
					<view
						v-for="(tab, index) in tabBars"
						:key="index"
						:class="tabBars.length === index + 1 ? 'uni-tab-itemKong' : 'uni-tab-item'"
						:id="tab.id"
						:data-current="index"
						@click="ontabtap"
					>
						<text class="uni-tab-item-title" :class="String(tabIndex) === String(index) ? 'uni-tab-item-title-active' : ''">{{ tab.name }}</text>
					</view>
					<!-- 增加一项空数据 为了能将最后一项展示出来，不遮挡 -->
					<!-- <view class="uni-tab-item"><text></text></view> -->
				</scroll-view>
				<!-- 频道 -->
				<!-- <div class="pingDao" @tap="cliskShowPingDao">
				<div class="pg-img"><img :src="pinDaoBtn" alt="" class="img-pindao" /></div>
			</div> -->
			</div>
			<div class="swiper-content">
				<swiper style="min-height: 100vh;width: 100vw;" :current="tabIndex" class="swiper-box" :duration="durationTime" @change="ontabchange">
					<swiper-item class="swiper-item" v-for="(tab, index1) in newsList" :key="index1">
						<scroll-view class="scroll-v list" scroll-y="true" @scrolltolower="loadMore(index1)">
							<div class="card-kong"></div>
							<view class="card-list" v-for="(item, index) in tab.data" :key="index">
								<media-list :options="item" :typelist="adefault" :datasea="datasea"></media-list>
								<view class="jianjian"></view>
							</view>
							<view class="loading-more">
								<text class="loading-more-text">{{ tab.loadingText }}</text>
							</view>
						</scroll-view>
					</swiper-item>
				</swiper>
			</div>
			<div class="nihao" v-if="datasea=='kong'">
				<image :src="nocon" mode=""></image>
				<span>没有相关内容</span>
			</div>
		</div>
		<navigation v-if="QUICKNAVCO.show"></navigation>
		<!-- 留言组件 -->
		<message v-if="Leaving == '1'"></message>
	</view>
</template>

<script>
import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
import homeSearch from '@/components/mbbo/homeSearch/homeSearch.vue';
import mediaList from './fimdList/mediaList.vue';
import message from './fimdList/message';
import navigation from '@/components/mbbo/navigation/navigation.vue';
import { mapMutations, mapGetters } from 'vuex';
export default {
	data() {
		return {
			souseach: this.Static+'my/souseach.png',
			searchLS: '',
			arr: [],
			list: [],
			durationTime: 300, // swiper动画时间
			channelClose:  this.Static+'common/pinDao/close.png', // 关闭频道按钮
			chanelDelete:  this.Static+'common/pinDao/delete.png', // 编辑删除频道子项
			pinDaoBtn:  this.Static+'common/pinDao/pinDaoBtn.png', // 频道按钮
			pinDaoShow: false, // 展示频道组件，默认不显示
			editOrFinish: 0, // 0频道未编辑模式，1代表进入频道编辑模式
			array: {},
			Leaving: '0',
			shousuo:false,
			nocon: this.Static+'my/nocon.png',
			newsList: [
				{
					data: this.array,
					refreshText: '',
					loadingText: ''
				},
				{
					data: this.array,
					refreshText: '',
					loadingText: ''
				},
				{
					data: this.array,
					refreshText: '',
					loadingText: ''
				},
				{
					data: this.array,
					refreshText: '',
					loadingText: ''
				},
				{
					data: this.array,
					refreshText: '',
					loadingText: ''
				}
			],
			cacheTab: [],
			tabIndex: 0,
			adefault: '',
			datasea:'',
			tabBars: [
				{
					name:'供应',
					id:'inst',
				},
				{
					name:'采购',
					id:'purc',
				},
				{
					name:'资讯',
					id:'news',
				},
				{
					name:'企业服务',
					id:'compService',
				},
				{
					name:'资本',
					id:'invest',
				},
			],
			tabBarsAdd: [
				{
					// 添加频道
					name: '行业',
					id: 'hangye1'
				},
				{
					name: '行业',
					id: 'hangye2'
				},
				{
					name: '行业',
					id: 'hangye3'
				},
				{
					name: '行业',
					id: 'hangye4'
				},
				{
					name: '行业',
					id: 'hangye5'
				},
				{
					name: '行业',
					id: 'hangye6'
				},
				{
					name: '行业',
					id: 'hangye7'
				},
				{
					name: '行业',
					id: 'hangye8'
				},
				{
					name: '行业',
					id: 'hangye9'
				},
				{
					name: '行业',
					id: 'hangye10'
				},
				{
					name: '行业',
					id: 'hangye11'
				},
				{
					name: '行业',
					id: 'hangye12'
				},
				{
					name: '行业',
					id: 'hangye13'
				}
			],
			scrollInto: '',
			Currentpage: '1',
			showTips: false,
			navigateFlag: false,
			pulling: false,
			pages: '1',
			Currentpage:'0',
			refreshIcon:
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg==',
			loadingIcon:
				'data:image/gif;base64,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'
		};
	},
	components: {
		quickBtn,
		homeSearch,
		mediaList,
		message,
		navigation
	},
	computed:{
		...mapGetters(['GET_FIND','QUICKNAVCO'])
	}, 
	watch: {
		GET_FIND: {
			handler (a, b) {
				console.log(a,b)
				this.Leaving = a.message.Leaving; // 切换的tab
				
			},
			deep: true
		},
	},
	methods: {
		huojiao(){
			console.log('123')
		},
		//触发搜索按钮
		searchSS() {
			if (this.searchLS == '') {
				uni.showToast({
					title: '请输入商机名称',
					icon: 'none',
					duration: 1000
				});
				return false;
			} else {
				this.list.unshift(this.searchLS);
				this.arr = [...new Set(this.list)];
				console.log(this.arr);
				if (this.arr.length > 10) {
					this.arr.splice(10, 1);
					this.arr.length = 10;
				}
				console.log(this.arr);
				var _this = this;
				uni.setStorage({
					key: 'storage_search',
					data: _this.arr,
					success: function() {
						console.log('success');
					}
				});
				this.typaes='inst';
				this.request(this.searchLS,this.typaes);
			}
		},
		searLS(e) {
			this.typaes='inst';
			this.request(e,this.typaes);
			this.searchLS = e;
		},
		request(e,c) {//供应
			if(uni.getStorageSync('landRegist')){
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				let params = {
					page: '1',
					userId: landRegistLG.user.id,
					name: e,
					type: c
				}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					// header: {
					// 	Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
					// },
					success: response => {
						uni.hideLoading();
						console.log(response.data);
						if(response.data.ret==200){
							this.shousuo=true;
							if(response.data.content.inst.list.length==0){
								this.newsList[0].data=response.data.content.inst.list;
								this.datasea='kong';
								console.log(this.newsList[0].data)
							}else{
								this.newsList[0].data=response.data.content.inst.list;
								this.adefault='inst';
								this.datasea='';
							}
						}
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
			}else{
				let UUID = uni.getStorageSync('UUID'); // 读取缓存的用户信息
				console.log(UUID);
				let params = {
					page: '1',
					userId: UUID,
					name: e,
					type: c
				}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					// header: {
					// 	Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
					// },
					success: response => {
						uni.hideLoading();
						console.log(response.data);
						
						if(response.data.ret==200){
							this.shousuo=true;
							if(response.data.content.inst.list.length==0){
								this.newsList[0].data=response.data.content.inst.list;
								this.datasea='kong';
								console.log(this.newsList[0].data)
							}else{
								this.newsList[0].data=response.data.content.inst.list;
								this.adefault='inst';
								this.datasea='';
							}
						}
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
			
		},
		requests(e,c) {//采购
			if(uni.getStorageSync('landRegist')){
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				let params = {
					page: '1',
					userId: landRegistLG.user.id,
					name: e,
					type: c
				}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					// header: {
					// 	Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
					// },
					success: response => {
						uni.hideLoading();
						console.log(response.data);
						if(response.data.ret==200){
							this.shousuo=true;
							if(response.data.content.purc.list.length==0){
								this.newsList[1].data=response.data.content.purc.list;
								this.datasea='kong';
								console.log(this.newsList[0].data)
							}else{
								this.newsList[1].data=response.data.content.purc.list;
								this.adefault='purc';
								this.datasea='';
							}
						}
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
			}else{
				let UUID = uni.getStorageSync('UUID'); // 读取缓存的用户信息
				console.log(UUID);
				let params = {
					page: '1',
					userId: UUID,
					name: e,
					type: c
				}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					// header: {
					// 	Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
					// },
					success: response => {
						uni.hideLoading();
						console.log(response.data);
						if(response.data.ret==200){
							this.shousuo=true;
							if(response.data.content.purc.list.length==0){
								this.newsList[1].data=response.data.content.purc.list;
								this.datasea='kong';
							}else{
								this.newsList[1].data=response.data.content.purc.list;
								this.adefault='purc';
								this.datasea='';
							}
						}
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
			
		},
		requestss(e,c) {//资讯
			if(uni.getStorageSync('landRegist')){
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				let params = {
					page: '1',
					userId: landRegistLG.user.id,
					name: e,
					type: c
				}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					// header: {
					// 	Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
					// },
					success: response => {
						uni.hideLoading();
						console.log(response.data);
						if(response.data.ret==200){
							this.shousuo=true;
							if(response.data.content.news.list.length==0){
								this.newsList[2].data=response.data.content.news.list;
								this.datasea='kong';
							}else{
								this.newsList[2].data=response.data.content.news.list;
								this.adefault='news';
								this.datasea='';
							}
						}
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
			}else{
				let UUID = uni.getStorageSync('UUID'); // 读取缓存的用户信息
				console.log(UUID);
				let params = {
					page: '1',
					userId: UUID,
					name: e,
					type: c
				}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					// header: {
					// 	Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
					// },
					success: response => {
						uni.hideLoading();
						console.log(response.data);
						if(response.data.ret==200){
							this.shousuo=true;
							if(response.data.content.news.list.length==0){
								this.newsList[2].data=response.data.content.news.list;
								this.datasea='kong';
							}else{
								this.newsList[2].data=response.data.content.news.list;
								this.adefault='news';
								this.datasea='';
							}
						}
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
			
		},
		requestsss(e,c) {//企业服务
			if(uni.getStorageSync('landRegist')){
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				let params = {
					page: '1',
					userId: landRegistLG.user.id,
					name: e,
					type: c
				}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					// header: {
					// 	Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
					// },
					success: response => {
						uni.hideLoading();
						console.log(response.data);
						if(response.data.ret==200){
							this.shousuo=true;
							if(response.data.content.compService.list.length==0){
								this.newsList[3].data=response.data.content.compService.list;
								this.datasea='kong';
							}else{
								this.newsList[3].data=response.data.content.compService.list;
								this.adefault='compService';
								this.datasea='';
							}
						}
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
			}else{
				let UUID = uni.getStorageSync('UUID'); // 读取缓存的用户信息
				console.log(UUID);
				let params = {
					page: '1',
					userId: UUID,
					name: e,
					type: c
				}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					// header: {
					// 	Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
					// },
					success: response => {
						uni.hideLoading();
						console.log(response.data);
						if(response.data.ret==200){
							this.shousuo=true;
							if(response.data.content.compService.list.length==0){
								this.newsList[3].data=response.data.content.compService.list;
								this.datasea='kong';
							}else{
								this.newsList[3].data=response.data.content.compService.list;
								this.adefault='compService';
								this.datasea='';
							}
						}
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
			
		},
		requestssss(e,c) {//资本
			if(uni.getStorageSync('landRegist')){
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				let params = {
					page: '1',
					userId: landRegistLG.user.id,
					name: e,
					type: c
				}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					// header: {
					// 	Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
					// },
					success: response => {
						uni.hideLoading();
						console.log(response.data);
						if(response.data.ret==200){
							this.shousuo=true;
							if(response.data.content.invest.list.length==0){
								this.newsList[4].data=response.data.content.invest.list;
								this.datasea='kong';
							}else{
								this.newsList[4].data=response.data.content.invest.list;
								this.adefault='invest';
								this.datasea='';
							}
						}
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
			}else{
				let UUID = uni.getStorageSync('UUID'); // 读取缓存的用户信息
				console.log(UUID);
				let params = {
					page: '1',
					userId: UUID,
					name: e,
					type: c
				}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					// header: {
					// 	Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
					// },
					success: response => {
						uni.hideLoading();
						console.log(response.data);
						
						if(response.data.ret==200){
							this.shousuo=true;
							if(response.data.content.invest.list.length==0){
								this.newsList[4].data=response.data.content.invest.list;
								this.datasea='kong';
							}else{
								this.newsList[4].data=response.data.content.invest.list;
								this.adefault='invest';
								this.datasea='';
							}
						}
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
			
		},
		fist() {
			var _this = this;
			uni.getStorage({
				key: 'storage_search',
				success: function(res) {
					_this.list = [...new Set(res.data)];
					_this.arr = _this.list;
				}
			});
		},
		deleadd() {
			this.arr = [];
			this.list = [];
			var _this = this;
			uni.setStorage({
				key: 'storage_search',
				data: _this.arr,
				success: function() {
					console.log('success');
				}
			});
			console.log(this.arr);
		},
		clickSearch() {
			console.log('点击触发搜索组件');
			uni.navigateTo({
				url: '/modules/find/findlist/find-search'
			});
		},
		cliskShowPingDao() {
			console.log('触发展示频道组件');
			this.pinDaoShow = !this.pinDaoShow; // 展示频道
		},
		cliskClosePingDao() {
			console.log('触发关闭频道组件');
			this.pinDaoShow = !this.pinDaoShow; // 关闭频道频道
			this.editOrFinish = 0;
		},
		pinDaoEdit() {
			console.log('触发编辑按钮');
			this.editOrFinish = 1;
		},
		pinDaoFinish() {
			console.log('触发完成按钮');
			this.editOrFinish = 0;
		},
		pinDaoDelete(e) {
			console.log(e, '触发删除频道子项X按钮');
			this.tabBarsAdd.unshift(this.tabBars[e]); // 向添加频道添存储我的的频道已删除的子项
			delete this.tabBars.splice(e, 1); // 删除我的频道选中的子项
			console.log(this.tabBars, '--------------this.tabBars----------------');
		},
		pinDaoAdd(e) {
			console.log('触发频道添加子项');
			this.tabBars.push(this.tabBarsAdd[e]); // 向我的频道添加新增加的频道子项
			delete this.tabBarsAdd.splice(e, 1); // 删除添加频道中被选中的子项
		},
		getList(index) {
			let activeTab = this.newsList[index];
			let list = [];
			for (let i = 1; i <= 10; i++) {
				let item = Object.assign({}, newsData['data' + Math.floor(Math.random() * 5)]);
				item.id = this.newGuid();
				list.push(item);
			}
			activeTab.data = activeTab.data.concat(list);
			console.log(activeTab.data, '----------------activeTab.data----------------');
		},
		// close(index1, index2) {
		// 	uni.showModal({
		// 		content: '是否删除本条信息？',
		// 		success: res => {
		// 			if (res.confirm) {
		// 				this.newsList[index1].data.splice(index2, 1);
		// 			}
		// 		}
		// 	});
		// },
		loadMore(e) {
			console.log(this.Currentpage);
			if(this.Currentpage==0){//供应分页
				this.typaes='inst';
				this.pages++;
				if(uni.getStorageSync('landRegist')){
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {
						page: this.pages,
						userId: landRegistLG.user.id,
						name: this.searchLS,
						type: this.typaes,
					}; // 请求总数居时 参数为空
					uni.showLoading({
						// 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/adve/findList', //接口地址。
						data: params,
						method: 'POST',
						// header: {
						// 	Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						// },
						success: response => {
							uni.hideLoading();
							console.log(response.data);
							if(response.data.ret==200){
								this.shousuo=true;
								if(response.data.content.inst.list.length==0){
									uni.showToast({
										title: '已经没有啦',
										icon: 'none',
										duration: 1000
									});
								}else if(response.data.content.inst.length!==0){
									response.data.content.inst.list.map((item,index)=>{
										this.newsList[0].data.push(item)
									})
								}
							}
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
				}else{
					let UUID = uni.getStorageSync('UUID'); // 读取缓存的用户信息
					console.log(UUID);
					let params = {
						page: this.pages,
						userId: UUID,
						name: this.searchLS,
						type: this.typaes,
					}; // 请求总数居时 参数为空
					uni.showLoading({
						// 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/adve/findList', //接口地址。
						data: params,
						method: 'POST',
						// header: {
						// 	Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						// },
						success: response => {
							uni.hideLoading();
							console.log(response.data);
							
							if(response.data.ret==200){
								this.shousuo=true;
								if(response.data.content.inst.list.length==0){
									uni.showToast({
										title: '已经没有啦',
										icon: 'none',
										duration: 1000
									});
								}else if(response.data.content.inst.length!==0){
									response.data.content.inst.list.map((item,index)=>{
										this.newsList[0].data.push(item)
									})
								}
							}
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
					
			}else if(this.Currentpage==1){//采购分页
				this.typaes='purc';
				this.pages++;
				if(uni.getStorageSync('landRegist')){
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {
						page: this.pages,
						userId: landRegistLG.user.id,
						name: this.searchLS,
						type: this.typaes,
					}; // 请求总数居时 参数为空
					uni.showLoading({
						// 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/adve/findList', //接口地址。
						data: params,
						method: 'POST',
						// header: {
						// 	Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						// },
						success: response => {
							uni.hideLoading();
							console.log(response.data);
							if(response.data.ret==200){
								this.shousuo=true;
								if(response.data.content.purc.list.length==0){
									uni.showToast({
										title: '已经没有啦',
										icon: 'none',
										duration: 1000
									});
								}else if(response.data.content.purc.length!==0){
									response.data.content.purc.list.map((item,index)=>{
										
										this.newsList[1].data.push(item)
									})
									console.log('--------')
								}
							}
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
				}else{
					let UUID = uni.getStorageSync('UUID'); // 读取缓存的用户信息
					console.log(UUID);
					let params = {
						page: this.pages,
						userId: UUID,
						name: this.searchLS,
						type: this.typaes,
					}; // 请求总数居时 参数为空
					uni.showLoading({
						// 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/adve/findList', //接口地址。
						data: params,
						method: 'POST',
						// header: {
						// 	Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						// },
						success: response => {
							uni.hideLoading();
							console.log(response.data);
							
							if(response.data.ret==200){
								this.shousuo=true;
								if(response.data.content.purc.list.length==0){
									uni.showToast({
										title: '已经没有啦',
										icon: 'none',
										duration: 1000
									});
								}else if(response.data.content.purc.length!==0){
									response.data.content.purc.list.map((item,index)=>{
										this.newsList[1].data.push(item)
									})
								}
							}
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
			}else if(this.Currentpage==2){//资讯分页
				this.typaes='news';
				this.pages++;
				if(uni.getStorageSync('landRegist')){
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {
						page: this.pages,
						userId: landRegistLG.user.id,
						name: this.searchLS,
						type: this.typaes,
					}; // 请求总数居时 参数为空
					uni.showLoading({
						// 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/adve/findList', //接口地址。
						data: params,
						method: 'POST',
						// header: {
						// 	Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						// },
						success: response => {
							uni.hideLoading();
							console.log(response.data);
							if(response.data.ret==200){
								this.shousuo=true;
								if(response.data.content.news.list.length==0){
									uni.showToast({
										title: '已经没有啦',
										icon: 'none',
										duration: 1000
									});
								}else if(response.data.content.news.length!==0){
									response.data.content.news.list.map((item,index)=>{
										this.newsList[2].data.push(item)
									})
								}
							}
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
				}else{
					let UUID = uni.getStorageSync('UUID'); // 读取缓存的用户信息
					console.log(UUID);
					let params = {
						page: this.pages,
						userId: UUID,
						name: this.searchLS,
						type: this.typaes,
					}; // 请求总数居时 参数为空
					uni.showLoading({
						// 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/adve/findList', //接口地址。
						data: params,
						method: 'POST',
						// header: {
						// 	Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						// },
						success: response => {
							uni.hideLoading();
							console.log(response.data);
							
							if(response.data.ret==200){
								this.shousuo=true;
								if(response.data.content.news.list.length==0){
									uni.showToast({
										title: '已经没有啦',
										icon: 'none',
										duration: 1000
									});
								}else if(response.data.content.news.length!==0){
									response.data.content.news.list.map((item,index)=>{
										this.newsList[2].data.push(item)
									})
								}
							}
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
			}else if(this.Currentpage==3){//企业服务
				this.typaes='compService';
				this.pages++;
				if(uni.getStorageSync('landRegist')){
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {
						page: this.pages,
						userId: landRegistLG.user.id,
						name: this.searchLS,
						type: this.typaes,
					}; // 请求总数居时 参数为空
					uni.showLoading({
						// 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/adve/findList', //接口地址。
						data: params,
						method: 'POST',
						// header: {
						// 	Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						// },
						success: response => {
							uni.hideLoading();
							console.log(response.data);
							if(response.data.ret==200){
								this.shousuo=true;
								if(response.data.content.compService.list.length==0){
									uni.showToast({
										title: '已经没有啦',
										icon: 'none',
										duration: 1000
									});
								}else if(response.data.content.compService.length!==0){
									response.data.content.compService.list.map((item,index)=>{
										this.newsList[3].data.push(item)
									})
								}
							}
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
				}else{
					let UUID = uni.getStorageSync('UUID'); // 读取缓存的用户信息
					console.log(UUID);
					let params = {
						page: this.pages,
						userId: UUID,
						name: this.searchLS,
						type: this.typaes,
					}; // 请求总数居时 参数为空
					uni.showLoading({
						// 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/adve/findList', //接口地址。
						data: params,
						method: 'POST',
						// header: {
						// 	Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						// },
						success: response => {
							uni.hideLoading();
							console.log(response.data);
							
							if(response.data.ret==200){
								this.shousuo=true;
								if(response.data.content.compService.list.length==0){
									uni.showToast({
										title: '已经没有啦',
										icon: 'none',
										duration: 1000
									});
								}else if(response.data.content.compService.length!==0){
									response.data.content.compService.list.map((item,index)=>{
										this.newsList[3].data.push(item)
									})
								}
							}
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
			}else if(this.Currentpage==4){//资本
				this.typaes='invest';
				this.pages++;
				if(uni.getStorageSync('landRegist')){
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {
						page: this.pages,
						userId: landRegistLG.user.id,
						name: this.searchLS,
						type: this.typaes,
					}; // 请求总数居时 参数为空
					uni.showLoading({
						// 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/adve/findList', //接口地址。
						data: params,
						method: 'POST',
						// header: {
						// 	Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						// },
						success: response => {
							uni.hideLoading();
							console.log(response.data);
							if(response.data.ret==200){
								this.shousuo=true;
								if(response.data.content.invest.list.length==0){
									uni.showToast({
										title: '已经没有啦',
										icon: 'none',
										duration: 1000
									});
								}else if(response.data.content.invest.length!==0){
									response.data.content.invest.list.map((item,index)=>{
										this.newsList[4].data.push(item)
									})
								}
							}
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
				}else{
					let UUID = uni.getStorageSync('UUID'); // 读取缓存的用户信息
					console.log(UUID);
					let params = {
						page: this.pages,
						userId: UUID,
						name: this.searchLS,
						type: this.typaes,
					}; // 请求总数居时 参数为空
					uni.showLoading({
						// 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/adve/findList', //接口地址。
						data: params,
						method: 'POST',
						// header: {
						// 	Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						// },
						success: response => {
							uni.hideLoading();
							console.log(response.data);
							
							if(response.data.ret==200){
								this.shousuo=true;
								if(response.data.content.invest.list.length==0){
									uni.showToast({
										title: '已经没有啦',
										icon: 'none',
										duration: 1000
									});
								}else if(response.data.content.invest.length!==0){
									response.data.content.invest.list.map((item,index)=>{
										this.newsList[4].data.push(item)
									})
								}
							}
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
			
			
		},
		ontabtap(e) {
			this.pinDaoShow = false; // 关闭频道频道
			this.editOrFinish = 0;
			let index = e.target.dataset.current || e.currentTarget.dataset.current;
			let entry = 2; // 进入swiper方式, 1时动画为0， 2时动画300毫秒
			this.switchTab(index, entry); //
		},
		ontabtapItems(e) {
			this.pinDaoShow = false; // 关闭频道频道
			this.editOrFinish = 0;
			let index = e.target.dataset.current || e.currentTarget.dataset.current;
			let entry = 1; // 进入swiper方式, 1时动画为0， 2时动画300毫秒
			this.switchTab(index, entry); // entry = 1; // 进入swiper方式, 1时动画为0， 2时动画300毫秒
		},
		ontabchange(e) {
			let index = e.target.current || e.detail.current;
			let entry = 2; // 进入swiper方式, 1时动画为0， 2时动画300毫秒
			this.switchTab(index, entry);

			this.Currentpage = e.detail.current;
			console.log(this.Currentpage);
			if(this.Currentpage==0){
				this.typaes='inst';
				this.pages='1';
				this.request(this.searchLS,this.typaes);
			}else if(this.Currentpage==1){
				this.typaes='purc';
				this.pages='1';
				this.requests(this.searchLS,this.typaes);
			}else if(this.Currentpage==2){
				this.typaes='news';
				this.pages='1';
				this.requestss(this.searchLS,this.typaes);
			}else if(this.Currentpage==3){
				this.typaes='compService';
				this.pages='1';
				this.requestsss(this.searchLS,this.typaes);
			}else if(this.Currentpage==4){
				this.typaes='invest';
				this.pages='1';
				this.requestssss(this.searchLS,this.typaes);
			}
			
		},
		switchTab(index, time) {
			if (time === 1) {
				// 进入swiper方式, 1时动画为0， 2时动画300毫秒
				this.durationTime = 0; // swiper动画时间
			} else {
				this.durationTime = 300; // swiper动画时间
			}
			// if (this.newsList[index].data.length === 0) {
			// 	// this.getList(index);
			// }

			if (this.tabIndex === index) {
				return;
			}

			// 缓存 tabId
			// if (this.newsList[this.tabIndex].data.length > MAX_CACHE_DATA) {
			// 	let isExist = this.cacheTab.indexOf(this.tabIndex);
			// 	if (isExist < 0) {
			// 		this.cacheTab.push(this.tabIndex);
			// 		//console.log("cache index:: " + this.tabIndex);
			// 	}
			// }
			this.tabIndex = index;
			this.scrollInto = this.tabBars[index].id;

			// 释放 tabId
			// if (this.cacheTab.length > MAX_CACHE_PAGE) {
			// 	let cacheIndex = this.cacheTab[0];
			// 	this.clearTabData(cacheIndex);
			// 	this.cacheTab.splice(0, 1);
			// 	//console.log("remove cache index:: " + cacheIndex);
			// }
		},
		clearTabData(e) {
			this.newsList[e].data.length = 0;
			this.newsList[e].loadingText = '加载更多...';
		},
		refreshData() {},
		onrefresh(e) {
			var tab = this.newsList[this.tabIndex];
			if (!tab.refreshFlag) {
				return;
			}
			tab.refreshing = true;
			tab.refreshText = '正在刷新...';

			setTimeout(() => {
				this.refreshData();
				this.pulling = true;
				tab.refreshing = false;
				tab.refreshText = '已刷新';
				setTimeout(() => {
					// TODO fix ios和Android 动画时间相反问题
					this.pulling = false;
				}, 500);
			}, 2000);
		},
		onpullingdown(e) {
			var tab = this.newsList[this.tabIndex];
			if (tab.refreshing || this.pulling) {
				return;
			}
			if (Math.abs(e.pullingDistance) > Math.abs(e.viewHeight)) {
				tab.refreshFlag = true;
				tab.refreshText = '释放立即刷新';
			} else {
				tab.refreshFlag = false;
				tab.refreshText = '下拉可以刷新';
			}
		},
		newGuid() {
			let s4 = function() {
				return ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
			};
			return (s4() + s4() + '-' + s4() + '-4' + s4().substr(0, 3) + '-' + s4() + '-' + s4() + s4() + s4()).toUpperCase();
		},
	},
	created() {
		this.fist();
		this.shareEachPage(); // 分享
	}
};
</script>

<style>
.find-search {
	width: 100%;
	min-height: 100%;
}
.quickBtn-search {
	position: fixed;
	top: 0;
	width: 100%;
	height: 11vw;
	background: #fff;
	border-bottom: 2upx solid #f5f5f5;
}
.tian{
	width: 100%;
	height: 11vw;
}
.nihao{
	position: fixed;
	top: 33%;
	left: 30%;
	font-size: 32upx;
	color: #9B9B9B;
	text-align: center;
}
.nihao>image{
	display: block;
	width: 280upx;
	height: 280upx;
}
.nihao>span{
	display: block;
	margin-top: 12upx;
	
}
.quickBtn-Fd {
	position: relative;
	width: 5%;
}
.search-Fd {
	position: relative;
}
.search-NI-img {
	position: relative;
	width: 60upx;
	z-index: 999;
}
.search-NI-img > image {
	width: 30upx;
	height: 30upx;
	margin-top: 26upx;
	margin-left: 100upx;
	z-index: 100;
	
}
.search-NI-text {
	position: relative;
	width: 440upx;
	margin-left: 22upx;
	margin-top: 10upx;
	height: 62upx;
	line-height: 60upx;
	background: #f6f6f6;
	border-radius: 30upx;
	padding-left: 68upx;
	float: left;
}
.search-NI-box{
	width: 100%;
	height: 65%;
	position: relative;
    top: 50%; /*偏移*/
    transform: translateY(-50%);
}
.search-NI-box>input{
	width: 100%;
	height: 100%;
	line-height: 30upx;
	/* #ifdef MP-WEIXIN */
	margin-top: -5upx;
	/* #endif */	
}
.inputSearch {
	line-height: 60upx;
	height: 60upx;
	width: 98%;
	border: none;
	outline: none;
}
.search-NI-textp {
	position: relative;
	float: left;
	margin-top: 14upx;
	font-size: 32upx;
	color: #02c2a2;
	margin-left: 36upx;
}
.find-search-LS {
	width: 100%;
	height: 93.5vh;
	background: #ffffff;
}
.find-search-LSP {
	font-size: 28upx;
	color: #2e2e30;
	padding-left: 30upx;
	padding-top: 48upx;
}
.find-search-LSARR {
	width: 97%;
	min-height: 100upx;
	margin: 0upx auto;
}
.find-search-LSARR > view {
	padding: 10upx 20upx 10upx 20upx;
	background: #f5f5f5;
	float: left;
	font-size: 26upx;
	color: #5d5d5d;
	margin-left: 20upx;
	margin-top: 20upx;
}
.clear {
	clear: both;
}
.find-search-bot {
	text-align: center;
	font-size: 24upx;
	color: #5d5d5d;
	clear: both;
	position: fixed;
	bottom: 10upx;
	width: 100%;
}
.channel-content {
	position: absolute;
	z-index: 999999;
	top: 0;
	min-height: 100vh;
	background: #fff;
}
.textColor {
	color: #9b9b9b !important;
}
.jianjian {
	width: 100%;
	height: 16upx;
	background: #f9f9f9;
}
.channel-close {
	position: relative;
	width: 100%;
	height: 15vw;
	padding-top: 5vw;
	font-family: PingFangSC-Medium;
	font-size: 36upx;
	color: #2e2e30;
	letter-spacing: 0;
	text-align: center;
	line-height: 36upx;
	background: #fff;
}
.ch-close-img {
	position: absolute;
	width: 4vw;
	height: 4vw;
	left: 5vw;
	top: 5vw;
}
.channel-box {
	position: relative;
	width: 100vw;
	padding: 30upx;
	background: #fff;
}
.channel-items {
	position: relative;
	margin-bottom: 10vw;
}
.channel-title {
	position: relative;
	width: 100%;
	margin-bottom: 4vw;
}
.pD-text {
	font-family: PingFang-SC-Bold;
	font-size: 32upx;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 32upx;
	font-weight: bold;
}
.pD-ins {
	font-family: PingFang-SC-Medium;
	font-size: 22upx;
	color: #9b9b9b;
	line-height: 22upx;
	margin-left: 3vw;
	font-weight: 100;
}
.pD-bianji {
	position: relative;
	/* text-align: right; */
	float: right;
	font-family: PingFang-SC-Medium;
	font-size: 28upx;
	color: #02c2a2;
	letter-spacing: 0;
	line-height: 28upx;
	font-weight: 400;
}
.channel-list {
	position: relative;
	width: 720upx;
}
.pD-list {
	width: 100%;
	margin-top: 2vw;
}
.pD-items {
	width: 158upx;
	margin-right: 20upx;
	background: #f5f5f5;
	border-radius: 4upx;
	font-family: PingFang-SC-Medium;
	font-size: 26upx;
	color: #2e2e30;
	letter-spacing: 0;
	text-align: center;
	line-height: 70upx;
	margin-top: 20upx;
}
.pD-close {
	position: absolute;
	margin-top: -16upx;
	margin-left: 32upx;
	width: 36upx;
	height: 36upx;
}
.quickBtn-search {
	width: 100vw;
	height: 11vw;
	padding: 0vw 3vw 0 3vw;
	background: #fff;
}
.quickBtn-Fd {
	position: relative;
	width: 5%;
}
.search-Fd {
	position: relative;
}
/* 顶部标题栏 */
.swiper-tab-content {
	position: fixed;
	width: 100vw;
	top: 11vw;
}
.pingDao {
	position: absolute;
	right: 0;
	width: 92upx;
	height: 11vw;
	background: rgba(255, 255, 255, 0.77);
	top: 0;
}
.pg-img {
	position: relative;
	width: 5vw;
	height: 5vw;
	float: right;
	margin-right: 2.8vw;
	top: 2.5vw;
	background: #fff;
}
.img-pindao {
	position: relative;
	width: 34upx;
	height: 34upx;
	float: right;
}
.swiper-content {
	background: #fff;
}
.tabs {
	flex: 1;
	flex-direction: column;
	overflow: hidden;
	background-color: #ffffff;
	/* #ifdef MP-ALIPAY || MP-BAIDU */
	height: 100vh;
	padding-top: 8vh;
	/* #endif */
}

.scroll-h {
	width: 750upx;
	height: 88upx;
	background: #fff;
	flex-direction: row;
	/* #ifndef APP-PLUS */
	white-space: nowrap;
	/* #endif */
	/* flex-wrap: nowrap; */
	/* border-color: #cccccc;
		border-bottom-style: solid;
		border-bottom-width: 1px; */
	padding-right: 5vw;
}

.line-h {
	height: 1upx;
	background-color: #cccccc;
}
.uni-tab-itemKong {
	/* #ifndef APP-PLUS */
	display: inline-block;
	/* #endif */
	flex-wrap: nowrap;
	padding-left: 24upx;
	padding-right: 24upx;
	margin-right: 5vw;
}
.uni-tab-item {
	/* #ifndef APP-PLUS */
	display: inline-block;
	/* #endif */
	flex-wrap: nowrap;
	padding-left: 24upx;
	padding-right: 24upx;
}

.uni-tab-item-title {
	color: #555;
	font-size: 30upx;
	height: 80upx;
	line-height: 80upx;
	font-weight: bold;
	flex-wrap: nowrap;
	/* #ifndef APP-PLUS */
	white-space: nowrap;
	/* #endif */
}

.uni-tab-item-title-active {
	color: #02c2a2;
}

.swiper-box {
	flex: 1;
}

.swiper-item {
	flex: 1;
}

.scroll-v {
	flex: 1;
	/* #ifndef MP-ALIPAY */
	flex-direction: column;
	/* #endif */
	width: 750upx;
	height: 90vh;
	padding-bottom: 20vh;
}
.card-kong {
	height: 2vw;
	background: #f9f9f9;
}
.update-tips {
	position: absolute;
	left: 0;
	top: 41px;
	right: 0;
	padding-top: 5px;
	padding-bottom: 5px;
	background-color: #fddd9b;
	align-items: center;
	justify-content: center;
	text-align: center;
}

.update-tips-text {
	font-size: 14px;
	color: #ffffff;
}

.refresh {
	width: 750upx;
	height: 64px;
	justify-content: center;
}

.refresh-view {
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: center;
}

.refresh-icon {
	width: 32px;
	height: 32px;
	transition-duration: 0.5s;
	transition-property: transform;
	transform: rotate(0deg);
	transform-origin: 16px 16px;
}

.refresh-icon-active {
	transform: rotate(180deg);
}

.loading-icon {
	width: 20px;
	height: 20px;
	margin-right: 5px;
}

.loading-icon-active {
	transform: rotate(21600deg);
}

.loading-text {
	margin-left: 2px;
	font-size: 16px;
	color: #999999;
}

.loading-more {
	align-items: center;
	justify-content: center;
	padding-top: 10px;
	padding-bottom: 10px;
	text-align: center;
}

.loading-more-text {
	font-size: 28upx;
	color: #999;
}
</style>
