<template>
	<!-- 浏览 -->
	<view class="my-Collection">
		<!-- 导航栏 agents导航栏标题 -->
		<div class="swiper-tab-content">
			<!-- tab切换组件 -->
			<div class="tab-content">
				<scroll-view id="tab-bar" class="scroll-h" :scroll-x="true" :show-scrollbar="false" :scroll-into-view="scrollInto">
					<view v-for="(tab,index) in tabBars" 
					:key="tab.id" 
					class="uni-tab-item" 
					:id="tab.id" 
					:data-current="index" 
					@click="ontabtap">
						<text class="uni-tab-item-title" :class="tabIndex==index ? 'uni-tab-item-title-active' : ''">{{tab.name}}</text>
						<!--  -->
					</view>
				</scroll-view>
			</div>
			<!-- swiper切换组件 -->
			<div class="swiper-content">
				<swiper style="min-height: 100vh;width: 100vw;" :current="tabIndex" class="swiper-box" :duration="300" @change="ontabchange" >
					<swiper-item class="swiper-item" v-for="(tab,index1) in newsList" :key="index1">
						<scroll-view class="scroll-v list" scroll-y='true' @scrolltolower="loadMore(index1)">
							<view class='card' v-for="(item,index) in tab.data" v-if="tab.data.length > 0" :key="index">
								<media-list :options="item" :typeli="adefau" @close="close(tab,index)" @click="goDetail(item,index)"></media-list>
								<view class="jianjian"></view>
							</view>
							<view class="loading-more">
								<text class="loading-more-text">{{tab.loadingText}}</text>
							</view>
						</scroll-view>
					</swiper-item>
				</swiper>
			</div>
			<div class="nihao" v-if="this.datasea=='kong'">
				<image :src="nocon" mode=""></image>
				<span>没有相关内容</span>
			</div>
		</div>
	</view>
</template>

<script>
	import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
	import homeSearch from '@/components/mbbo/homeSearch/homeSearch.vue';
	import mediaList from '@/modules/myCompany/myCollectiononBrowseonPoints/CollectiononBrowseonPoints/Collection/mediaList.vue';
	 // 缓存每页最多
	const MAX_CACHE_DATA = 100;
	// 缓存页签数量
	const MAX_CACHE_PAGE = 3;
	export default {
	    components: {
			quickBtn,
			homeSearch,
			mediaList
	    },
	    data() {
	        return {
				arr:{},
				nocon: this.Static+'my/nocon.png',
				datasea:'',
	            newsList: [
					{
						data: this.arr,
						refreshText: "",
						loadingText: ''
					},
					{
						data: this.arr,
						refreshText: "",
						loadingText: ''
					},
					{
						data: this.arr,
						refreshText: "",
						loadingText: ''
					},
					{
						data: this.arr,
						refreshText: "",
						loadingText: ''
					},
					{
						data: this.arr,
						refreshText: "",
						loadingText: ''
					},
					{
						data: this.arr,
						refreshText: "",
						loadingText: ''
					},
				],
	            cacheTab: [],
				adefau:'',
	            tabIndex: 0,
	            tabBars: [{
	            	name: '全部',
	            	id: 'guanzhu'
	            }, {
	            	name: '产品',
	            	id: 'tuijian'
	            }, {
	            	name: '采购',
	            	id: 'redian'
	            }, {
	            	name: '资讯',
	            	id: 'caijing'
	            }, {
	            	name: '企业',
	            	id: 'yule'
	            }, {
	            	name: '资本',
	            	id: 'junshi'
	            }],
	            scrollInto: "",
				pages:'1',
				Currentpage:'1',
	            showTips: false,
	            navigateFlag: false,
	            pulling: false,
	            refreshIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg==",
	            loadingIcon: "data:image/gif;base64,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"
	        }
	    },
	    created() {
	        // this.tabBars.forEach((tabBar) => {
	        //     this.newsList.push({
	        //         data: [],
	        //         refreshText: "",
	        //         loadingText: '加载更多...'
	        //     });
	        // });
	        // this.getList();
			this.adefau='push';
			console.log(this.adefau)
			this.Collection();
			this.shareEachPage(); // 分享
	    },
	    methods: {
			//全部数据
			Collection(){
				if(uni.getStorageSync('landRegist')){
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					 // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/follow/myUserBehaviorList?page='+this.pages+'&userId='+landRegistLG.user.id+'&business=0', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							// console.log(response.data.content);
							// this.tabBars=response.data.content.allChannel
							// this.newsList[5].data=response.data.content.compService.list;
							if(response.data.content.list.length==0){
								this.newsList[0].data=response.data.content.list;
								this.datasea='kong';
							}else{
								this.newsList[0].data=response.data.content.list;
								this.datasea='';
							}
							
							
						},
						fail: (error) => {
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
			//产品
			insts(){
				if(uni.getStorageSync('landRegist')){
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					 // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/follow/myUserBehaviorList?page='+this.pages+'&userId='+landRegistLG.user.id+'&business=0&type=0', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							// console.log(response.data.content);
							// this.tabBars=response.data.content.allChannel
							// this.newsList[5].data=response.data.content.compService.list;
							if(response.data.content.list.length==0){
								this.newsList[1].data=response.data.content.list;
								this.datasea='kong';
								// console.log('kong')
							}else{
								this.newsList[1].data=response.data.content.list;
								this.datasea='';
							}
							
						},
						fail: (error) => {
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
			//采购
			purcs(){
				if(uni.getStorageSync('landRegist')){
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					 // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/follow/myUserBehaviorList?page='+this.pages+'&userId='+landRegistLG.user.id+'&business=0&type=1', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							// console.log(response.data.content);
							// this.tabBars=response.data.content.allChannel
							// this.newsList[5].data=response.data.content.compService.list;
							if(response.data.content.list.length==0){
								this.newsList[2].data=response.data.content.list;
								this.datasea='kong';
								console.log('kong')
							}else{
								this.newsList[2].data=response.data.content.list;
								this.datasea='';
							}
							
						},
						fail: (error) => {
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
			//资讯
			newss(){
				if(uni.getStorageSync('landRegist')){
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					 // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/follow/myUserBehaviorList?page='+this.pages+'&userId='+landRegistLG.user.id+'&business=0&type=2', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							// console.log(response.data.content);
							// this.tabBars=response.data.content.allChannel
							// this.newsList[5].data=response.data.content.compService.list;
							if(response.data.content.list.length==0){
								this.newsList[3].data=response.data.content.list;
								this.datasea='kong';
								// console.log('kong')
							}else{
								this.newsList[3].data=response.data.content.list;
								this.datasea='';
							}
							
						},
						fail: (error) => {
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
			//企业
			compServices(){
				if(uni.getStorageSync('landRegist')){
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					 // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/follow/myUserBehaviorList?page='+this.pages+'&userId='+landRegistLG.user.id+'&business=0&type=5', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							// console.log(response.data.content);
							// this.tabBars=response.data.content.allChannel
							// this.newsList[5].data=response.data.content.compService.list;
							if(response.data.content.list.length==0){
								this.newsList[4].data=response.data.content.list;
								this.datasea='kong';
								// console.log('kong')
							}else{
								this.newsList[4].data=response.data.content.list;
								this.datasea='';
							}
							
						},
						fail: (error) => {
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
			//资本
			invest(){
				if(uni.getStorageSync('landRegist')){
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					 // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/follow/myUserBehaviorList?page='+this.pages+'&userId='+landRegistLG.user.id+'&business=0&type=3', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							// console.log(response.data.content);
							// this.tabBars=response.data.content.allChannel
							// this.newsList[5].data=response.data.content.compService.list;
							if(response.data.content.list.length==0){
								this.newsList[5].data=response.data.content.list;
								this.datasea='kong';
								// console.log('kong')
							}else{
								this.newsList[5].data=response.data.content.list;
								this.datasea='';
							}
							
						},
						fail: (error) => {
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
	        getList(index) {
	            let activeTab = this.newsList[index];
	            let list = [];
	            for (let i = 1; i <= 10; i++) {
	                let item = Object.assign({}, newsData['data' + Math.floor(Math.random() * 5)]);
	                item.id = this.newGuid();
	                list.push(item);
	            }
	            activeTab.data = activeTab.data.concat(list);
				console.log(activeTab.data, '----------------activeTab.data----------------')
	        },
	        goDetail(e) {
	            if (this.navigateFlag) {
	                return;
	            }
	            this.navigateFlag = true;
	            uni.navigateTo({
	                url: './detail/detail?title=' + e.title
	            });
	            setTimeout(() => {
	                this.navigateFlag = false;
	            }, 200)
	        },
	        close(index1, index2) {
	            uni.showModal({
	                content: '是否删除本条信息？',
	                success: (res) => {
	                    if (res.confirm) {
	                        this.newsList[index1].data.splice(index2, 1);
	                    }
	                }
	            })
	        },
	        loadMore(e) {
	            
	        },
	        ontabtap(e) {
	            this.pinDaoShow = false; // 关闭频道频道
	            this.editOrFinish = 0;
	            let index = e.target.dataset.current || e.currentTarget.dataset.current;
	            let entry = 2; // 进入swiper方式, 1时动画为0， 2时动画300毫秒
	            this.switchTab(index, entry); //
	        },
	        ontabchange(e) {
	            let index = e.target.current || e.detail.current;
	            let entry = 2; // 进入swiper方式, 1时动画为0， 2时动画300毫秒
	            this.switchTab(index, entry);
				console.log(e)
				this.Currentpage=e.detail.current;
				if(this.Currentpage==0){
					this.adefau='push';
					this.Collection()
				}else if(this.Currentpage==1){
					this.adefau='inst';
					this.insts()
					console.log('chan')
					// this.pushs(this.adefault,this.pages);
				}else if(this.Currentpage==2){
					this.adefau='purc';
					this.purcs()
					// this.pushs(this.adefault,this.pages);
				}else if(this.Currentpage==3){
					this.adefau='news';
					this.newss()
					// this.pushs(this.adefault,this.pages);
				}else if(this.Currentpage==4){
					this.adefau='compService';
					this.compServices()
					// this.pushs(this.adefault,this.pages);
				}else if(this.Currentpage==5){
					this.adefau='invest';
					this.invest()
					// this.pushs(this.adefault,this.pages);
				}
	        },
	        switchTab(index,time) {
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
	            //     let isExist = this.cacheTab.indexOf(this.tabIndex);
	            //     if (isExist < 0) {
	            //         this.cacheTab.push(this.tabIndex);
	            //         //console.log("cache index:: " + this.tabIndex);
	            //     }
	            // }
	
	            this.tabIndex = index;
	            this.scrollInto = this.tabBars[index].id;
	
	            // 释放 tabId
	            if (this.cacheTab.length > MAX_CACHE_PAGE) {
	                let cacheIndex = this.cacheTab[0];
	                this.clearTabData(cacheIndex);
	                this.cacheTab.splice(0, 1);
	                //console.log("remove cache index:: " + cacheIndex);
	            }
	        },
	        clearTabData(e) {
	            this.newsList[e].data.length = 0;
	            this.newsList[e].loadingText = "加载更多...";
	        },
	        refreshData() {},
	        onrefresh(e) {
	            var tab = this.newsList[this.tabIndex];
	            if (!tab.refreshFlag) {
	                return;
	            }
	            tab.refreshing = true;
	            tab.refreshText = "正在刷新...";
	
	            setTimeout(() => {
	                this.refreshData();
	                this.pulling = true;
	                tab.refreshing = false;
	                tab.refreshText = "已刷新";
	                setTimeout(() => { // TODO fix ios和Android 动画时间相反问题
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
	                tab.refreshText = "释放立即刷新";
	            } else {
	                tab.refreshFlag = false;
	                tab.refreshText = "下拉可以刷新";
	            }
	        },
	        newGuid() {
	            let s4 = function() {
	                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
	            }
	            return (s4() + s4() + "-" + s4() + "-4" + s4().substr(0, 3) + "-" + s4() + "-" + s4() + s4() + s4()).toUpperCase();
	        }
	    }
	}
</script>

<style>
	.my-Collection{
		width: 100%;
		height: 100%;
		margin-top: 108upx;
	}
	/* 顶部标题栏 */
	.swiper-tab-content{
		position: fixed;
		width: 100vw;
		top: 12vw;
	}
	.swiper-content{
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
	.jianjian {
		width: 100%;
		height: 16upx;
		background: #f9f9f9;
	}
	.scroll-h {
	    width: 750upx;
		height: 88upx;
		background: #fff;
		margin-bottom: 2vw;
	    flex-direction: row;
	    /* #ifndef APP-PLUS */
	    white-space: nowrap;
	    /* #endif */
	    /* flex-wrap: nowrap; */
	    /* border-color: #cccccc;
		border-bottom-style: solid;
		border-bottom-width: 1px; */
	}
	
	.line-h {
	    height: 1upx;
	    background-color: #cccccc;
	}
	
	.uni-tab-item {
	    /* #ifndef APP-PLUS */
	    display: inline-block;
	    /* #endif */
	    flex-wrap: nowrap;
	    padding-left: 30upx;
	    padding-right: 24upx;
	}
	
	.uni-tab-item-title {
	    color: #9B9B9B;
	    font-size: 24upx;
	    height: 80upx;
	    line-height: 80upx;
		margin-left: 10upx;
	    flex-wrap: nowrap;
	    /* #ifndef APP-PLUS */
	    white-space: nowrap;
	    /* #endif */
	}
	
	.uni-tab-item-title-active {
	    color: #2E2E30;
		padding: 10upx 16upx 10upx 16upx;
		background: #E2E2E2;
		border-radius: 26upx;
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
		height: 86vh;
		/* padding-bottom: 20vh; */
	}
	
	.update-tips {
	    position: absolute;
	    left: 0;
	    top: 41px;
	    right: 0;
	    padding-top: 5px;
	    padding-bottom: 5px;
	    background-color: #FDDD9B;
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
	    transition-duration: .5s;
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
</style>
