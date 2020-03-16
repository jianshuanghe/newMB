<template>
	<view class="tabs">
		<!-- 搜索 -->
		<div class="quickBtn-search">
			<div class="quickBtn-Fd left"><quickBtn></quickBtn></div>
			<div class="search-Fd left" @tap="clickSearch"><homeSearch></homeSearch></div>
			<div class="clear"></div>
		</div>
		<view class="kongjian">
			
		</view>
		<!-- 导航栏 agents导航栏标题 -->
		<div class="swiper-tab-content">
			<!-- tab切换组件 -->
			<div class="tab-content">
				<scroll-view id="tab-bar" class="scroll-h" scroll-x="true" show-scrollbar="false" >
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
			<!-- swiper切换组件 -->
			<div class="swiper-content">
				<swiper style="min-height: 100vh;width: 100vw;" :current="tabIndex" class="swiper-box" :duration="durationTime" @change="ontabchange" @animationfinish="endgo">
					<swiper-item class="swiper-item" v-for="(tab, index1) in newsList" :key="index1">
						<scroll-view 
						class="scroll-v list" 
						scroll-y="true" 
						show-scrollbar="false" 
						:scroll-into-view="scrollInto" 
						lazy-load="true" 
						:scroll-top="scrollTop" 
						@scroll="scroll" 
						@scrolltoupper='scrolltoupper'
						@scrolltolower="loadMore(index1)">
							<div class="card-kong"></div>
							<view class="card-list" v-for="(item, index) in tab.data" :key="index">
								<media-list :options="item" :typelist="adefault"></media-list>
								<view class="jianjian"></view>
							</view>
							<view class="loading-more">
								<text class="loading-more-text" @tap="goTop">{{ tab.loadingText }}</text>
							</view>
						</scroll-view>
					</swiper-item>
				</swiper>
			</div>
		</div>
		<!-- 频道组件 -->
		<div class="channel-content" v-if="pinDaoShow">
			<div class="channel-close">
				<img :src="channelClose" alt="" class="ch-close-img" @tap="cliskClosePingDao" />
				{{ i18n.channel.title }}
			</div>
			<div class="channel-box">
				<div class="channel-items">
					<!-- 我的频道 -->
					<div class="channel-title">
						<div class="pD-text">
							{{ i18n.channel.myPinDao }}
							<text class="pD-ins">{{ i18n.channel.entryPindao }}</text>
							<text class="pD-bianji" @tap="pinDaoEdit" v-if="editOrFinish === 0">{{ i18n.channel.edit }}</text>
							<text class="pD-bianji" @tap="pinDaoFinish" v-else>{{ i18n.channel.finish }}</text>
						</div>
					</div>
					<div class="channel-list">
						<!-- 非编辑模式 -->
						<div class="pD-list" v-if="editOrFinish === 0">
							<div
								class="pD-items left"
								v-for="(items, index) in tabBars"
								:key="index"
								:class="tabIndex === index ? 'uni-tab-item-title-active' : ''"
								:id="items.id"
								:data-current="index"
								@click="ontabtap"
							>
								{{ items.name }}
							</div>
							<div class="clear"></div>
						</div>
						<!-- 编辑模式 -->
						<div class="pD-list" v-if="editOrFinish === 1">
							<div class="pD-items left" v-for="(items, index) in tabBars" :key="index" :class="index < 2 ? 'textColor' : ''">
								{{ items.name }}
								<img :src="chanelDelete" alt="" class="pD-close" @tap="pinDaoDelete(index)" v-if="index > 1" />
							</div>
							<div class="clear"></div>
						</div>
					</div>
				</div>
				<!-- 推荐频道 -->
				<div class="channel-items">
					<div class="channel-title">
						<div class="pD-text">
							{{ i18n.channel.tuiJianPinDao }}
							<text class="pD-ins">{{ i18n.channel.addPinDao }}</text>
						</div>
					</div>
					<div class="channel-list">
						<div class="pD-list">
							<div class="pD-items left" v-for="(items, index) in tabBarsAdd" :key="index" @tap="pinDaoAdd(index)">
								+{{ items.name }}
								<text class="num" v-if="editOrFinish === 1">{{ index + 1 }}</text>
							</div>
							<div class="clear"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 留言组件 -->
		<message v-if="Leaving == '1'"></message>
	</view>
</template>
<script>
import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
import homeSearch from '@/components/mbbo/homeSearch/homeSearch.vue';
import mediaList from './fimdList/mediaList.vue';
import message from './fimdList/message';
import { mapMutations, mapGetters } from 'vuex';
// 缓存每页最多
const MAX_CACHE_DATA = 100;
// 缓存页签数量
const MAX_CACHE_PAGE = 3;
var array=[];
var listData = [

];

export default {
	components: {
		quickBtn,
		homeSearch,
		mediaList,
		message,
	},
	data() {
		return {
			//滚动条位置
			scrollTop:0, //
			old: {
				scrollTop: 0
			},
			durationTime: 300, // swiper动画时间
			channelClose: this.Static+'common/pinDao/close.png', // 关闭频道按钮
			chanelDelete: this.Static+'common/pinDao/delete.png', // 编辑删除频道子项
			pinDaoBtn: this.Static+'common/pinDao/pinDaoBtn.png', // 频道按钮
			pinDaoShow: false, // 展示频道组件，默认不显示
			editOrFinish: 0, // 0频道未编辑模式，1代表进入频道编辑模式
			Refr:'1',
			array:{},
			Leaving:'0',
			newsList: [
				{
					data: this.array,
					refreshText: '',
					loadingText: '加载更多...'
				},
				{
					data: this.array,
					refreshText: '',
					loadingText: '加载更多...'
				},
				{
					data: this.array,
					refreshText: '',
					loadingText: '加载更多...'
				},
				{
					data: this.array,
					refreshText: '',
					loadingText: '加载更多...'
				},
				{
					data: this.array,
					refreshText: '',
					loadingText: '加载更多...'
				},
				{
					data: this.array,
					refreshText: '',
					loadingText: '加载更多...'
				},
				{
					data: this.array,
					refreshText: '',
					loadingText: '加载更多...'
				},
			],
			cacheTab: [],
			tabIndex: 1,
			adefault:'',
			tabBars: [],
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
			scrollInto: null,
			Currentpage:'1',
			showTips: false,
			navigateFlag: false,
			pulling: false,
			pages:'1',
			refreshIcon:
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg==',
			loadingIcon:
				'data:image/gif;base64,R0lGODlhIAAgALMAAP///7Ozs/v7+9bW1uHh4fLy8rq6uoGBgTQ0NAEBARsbG8TExJeXl/39/VRUVAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQAAACwAAAAAIAAgAAAE5xDISSlLrOrNp0pKNRCdFhxVolJLEJQUoSgOpSYT4RowNSsvyW1icA16k8MMMRkCBjskBTFDAZyuAEkqCfxIQ2hgQRFvAQEEIjNxVDW6XNE4YagRjuBCwe60smQUDnd4Rz1ZAQZnFAGDd0hihh12CEE9kjAEVlycXIg7BAsMB6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YEvpJivxNaGmLHT0VnOgGYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHQjYKhKP1oZmADdEAAAh+QQFBQAAACwAAAAAGAAXAAAEchDISasKNeuJFKoHs4mUYlJIkmjIV54Soypsa0wmLSnqoTEtBw52mG0AjhYpBxioEqRNy8V0qFzNw+GGwlJki4lBqx1IBgjMkRIghwjrzcDti2/Gh7D9qN774wQGAYOEfwCChIV/gYmDho+QkZKTR3p7EQAh+QQFBQAAACwBAAAAHQAOAAAEchDISWdANesNHHJZwE2DUSEo5SjKKB2HOKGYFLD1CB/DnEoIlkti2PlyuKGEATMBaAACSyGbEDYD4zN1YIEmh0SCQQgYehNmTNNaKsQJXmBuuEYPi9ECAU/UFnNzeUp9VBQEBoFOLmFxWHNoQw6RWEocEQAh+QQFBQAAACwHAAAAGQARAAAEaRDICdZZNOvNDsvfBhBDdpwZgohBgE3nQaki0AYEjEqOGmqDlkEnAzBUjhrA0CoBYhLVSkm4SaAAWkahCFAWTU0A4RxzFWJnzXFWJJWb9pTihRu5dvghl+/7NQmBggo/fYKHCX8AiAmEEQAh+QQFBQAAACwOAAAAEgAYAAAEZXCwAaq9ODAMDOUAI17McYDhWA3mCYpb1RooXBktmsbt944BU6zCQCBQiwPB4jAihiCK86irTB20qvWp7Xq/FYV4TNWNz4oqWoEIgL0HX/eQSLi69boCikTkE2VVDAp5d1p0CW4RACH5BAUFAAAALA4AAAASAB4AAASAkBgCqr3YBIMXvkEIMsxXhcFFpiZqBaTXisBClibgAnd+ijYGq2I4HAamwXBgNHJ8BEbzgPNNjz7LwpnFDLvgLGJMdnw/5DRCrHaE3xbKm6FQwOt1xDnpwCvcJgcJMgEIeCYOCQlrF4YmBIoJVV2CCXZvCooHbwGRcAiKcmFUJhEAIfkEBQUAAAAsDwABABEAHwAABHsQyAkGoRivELInnOFlBjeM1BCiFBdcbMUtKQdTN0CUJru5NJQrYMh5VIFTTKJcOj2HqJQRhEqvqGuU+uw6AwgEwxkOO55lxIihoDjKY8pBoThPxmpAYi+hKzoeewkTdHkZghMIdCOIhIuHfBMOjxiNLR4KCW1ODAlxSxEAIfkEBQUAAAAsCAAOABgAEgAABGwQyEkrCDgbYvvMoOF5ILaNaIoGKroch9hacD3MFMHUBzMHiBtgwJMBFolDB4GoGGBCACKRcAAUWAmzOWJQExysQsJgWj0KqvKalTiYPhp1LBFTtp10Is6mT5gdVFx1bRN8FTsVCAqDOB9+KhEAIfkEBQUAAAAsAgASAB0ADgAABHgQyEmrBePS4bQdQZBdR5IcHmWEgUFQgWKaKbWwwSIhc4LonsXhBSCsQoOSScGQDJiWwOHQnAxWBIYJNXEoFCiEWDI9jCzESey7GwMM5doEwW4jJoypQQ743u1WcTV0CgFzbhJ5XClfHYd/EwZnHoYVDgiOfHKQNREAIfkEBQUAAAAsAAAPABkAEQAABGeQqUQruDjrW3vaYCZ5X2ie6EkcKaooTAsi7ytnTq046BBsNcTvItz4AotMwKZBIC6H6CVAJaCcT0CUBTgaTg5nTCu9GKiDEMPJg5YBBOpwlnVzLwtqyKnZagZWahoMB2M3GgsHSRsRACH5BAUFAAAALAEACAARABgAAARcMKR0gL34npkUyyCAcAmyhBijkGi2UW02VHFt33iu7yiDIDaD4/erEYGDlu/nuBAOJ9Dvc2EcDgFAYIuaXS3bbOh6MIC5IAP5Eh5fk2exC4tpgwZyiyFgvhEMBBEAIfkEBQUAAAAsAAACAA4AHQAABHMQyAnYoViSlFDGXBJ808Ep5KRwV8qEg+pRCOeoioKMwJK0Ekcu54h9AoghKgXIMZgAApQZcCCu2Ax2O6NUud2pmJcyHA4L0uDM/ljYDCnGfGakJQE5YH0wUBYBAUYfBIFkHwaBgxkDgX5lgXpHAXcpBIsRADs='
		};
	},
	props:['Refrss'],
	created() {
		this.adefault='push';
		this.pages='1';
		this.finddata(this.adefault,this.pages);
		this.shareEachPage(); // 分享
	},
	mounted() {
		
	},
	computed: {
		i18n() {
			return this.$t('find');
		},
		...mapGetters(['GET_FIND','GET_MY'])
	},
	watch: {
		GET_FIND: {
			handler (a, b) {
				//console.log(a,b)
				this.Leaving = a.message.Leaving; // 切换的tab
				
			},
			deep: true
		},
		GET_MY:{
			handler (a, b) {
				
			},
			deep: true
		}
	},
	methods: {
		finddata(de,pa){
			if(uni.getStorageSync('landRegist')){
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				//console.log(landRegistLG.user.id);
				let params = {
					page:pa,
					userId:landRegistLG.user.id,
					type:de
				}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					success: (response) => {
						uni.hideLoading();
						//console.log(response.data);
						console.log(response.data.content.push.list);
						// this.tabBars=response.data.content.allChannel
						// this.newsList[5].data=response.data.content.compService.list;
						this.newsList[1].data=response.data.content.push.list;
						this.goTop();
						response.data.content.allChannel.map((item,index)=>{
							let obj={
								name:item.typeName,
								id:item.type,
							}
							this.tabBars.push(obj);
						})
					},
					
					fail: (error) => {
						uni.hideLoading(); // 隐藏 loading
						uni.showToast({
							title: '网络繁忙，请稍后',
							icon: 'none',
							duration: 1000
						});
						//console.log(error, '网络繁忙，请稍后');
					}
				});
			}else if (uni.getStorageSync('UUID')) {
				let UUID = uni.getStorageSync('UUID'); // 读取缓存的用户信息
				//console.log(UUID);
				let params = {
					page:pa,
					userId:UUID,
					type:de
				}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					success: (response) => {
						uni.hideLoading();
						//console.log(response.data);
						this.goTop();
						this.newsList[1].data=response.data.content.push.list;
						response.data.content.allChannel.map((item,index)=>{
							let obj={
								name:item.typeName,
								id:item.type,
							}
							this.tabBars.push(obj);
						})
					},
					fail: (error) => {
						uni.hideLoading(); // 隐藏 loading
						uni.showToast({
							title: '网络繁忙，请稍后',
							icon: 'none',
							duration: 1000
						});
						//console.log(error, '网络繁忙，请稍后');
					}
				});
			}
		},
		compService(de,pa){//企业服务分页
			if(uni.getStorageSync('landRegist')){
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				//console.log(landRegistLG.user.id);
				let params = {
					page:pa,
					userId:landRegistLG.user.id,
					type:de
				}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					success: (response) => {
						uni.hideLoading();
						//console.log(response.data);
						if(response.data.content.compService.list.length==0){
							uni.showToast({
								title: '已经没有啦',
								icon: 'none',
								duration: 1000
							});
						}else if(response.data.content.compService.length!==0){
							response.data.content.compService.list.map((item,index)=>{
								this.newsList[5].data.push(item)
							})
						}
					},
					fail: (error) => {
						uni.hideLoading(); // 隐藏 loading
						uni.showToast({
							title: '网络繁忙，请稍后',
							icon: 'none',
							duration: 1000
						});
						//console.log(error, '网络繁忙，请稍后');
					}
				});
			}else if (uni.getStorageSync('UUID')) {
				let UUID = uni.getStorageSync('UUID'); // 读取缓存的用户信息
				//console.log(UUID);
				let params = {
					page:pa,
					userId:UUID,
					type:de
				}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					success: (response) => {
						uni.hideLoading();
						if(response.data.content.compService.list.length==0){
							uni.showToast({
								title: '已经没有啦',
								icon: 'none',
								duration: 1000
							});
						}else if(response.data.content.compService.length!==0){
							response.data.content.compService.list.map((item,index)=>{
								this.newsList[5].data.push(item)
							})
						}
					},
					fail: (error) => {
						uni.hideLoading(); // 隐藏 loading
						uni.showToast({
							title: '网络繁忙，请稍后',
							icon: 'none',
							duration: 1000
						});
						//console.log(error, '网络繁忙，请稍后');
					}
				});
			}
		},
		invest(de,pa){//资本分页
			if(uni.getStorageSync('landRegist')){
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				//console.log(landRegistLG.user.id);
				let params = {
					page:pa,
					userId:landRegistLG.user.id,
					type:de
				}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					success: (response) => {
						uni.hideLoading();
						//console.log(response.data);
						if(response.data.content.invest.list.length==0){
							uni.showToast({
								title: '已经没有啦',
								icon: 'none',
								duration: 2000,
							});
						}else if(response.data.content.invest.length!==0){
							response.data.content.invest.list.map((item,index)=>{
								this.newsList[6].data.push(item)
							})
						}
					},
					fail: (error) => {
						uni.hideLoading(); // 隐藏 loading
						uni.showToast({
							title: '网络繁忙，请稍后',
							icon: 'none',
							duration: 1000
						});
						//console.log(error, '网络繁忙，请稍后');
					}
				});
			}else if (uni.getStorageSync('UUID')) {
				let UUID = uni.getStorageSync('UUID'); // 读取缓存的用户信息
				//console.log(UUID);
				let params = {
					page:pa,
					userId:UUID,
					type:de
				}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					success: (response) => {
						uni.hideLoading();
						if(response.data.content.invest.list.length==0){
							uni.showToast({
								title: '已经没有啦',
								icon: 'none',
								duration: 2000,
							});
						}else if(response.data.content.invest.length!==0){
							response.data.content.invest.list.map((item,index)=>{
								this.newsList[6].data.push(item)
							})
						}
					},
					fail: (error) => {
						uni.hideLoading(); // 隐藏 loading
						uni.showToast({
							title: '网络繁忙，请稍后',
							icon: 'none',
							duration: 1000
						});
						//console.log(error, '网络繁忙，请稍后');
					}
				});
			}
		},
		purc(de,pa){//采购分页
			if(uni.getStorageSync('landRegist')){
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				//console.log(landRegistLG.user.id);
				let params = {
					page:pa,
					userId:landRegistLG.user.id,
					type:de
				}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					success: (response) => {
						uni.hideLoading();
						//console.log(response.data);
						if(response.data.content.purc.list.length==0){
							uni.showToast({
								title: '已经没有啦',
								icon: 'none',
								duration: 2000,
							});
						}else if(response.data.content.purc.length!==0){
							response.data.content.purc.list.map((item,index)=>{
								this.newsList[3].data.push(item)
							})
						}
					},
					fail: (error) => {
						uni.hideLoading(); // 隐藏 loading
						uni.showToast({
							title: '网络繁忙，请稍后',
							icon: 'none',
							duration: 1000
						});
						//console.log(error, '网络繁忙，请稍后');
					}
				});
			}else if (uni.getStorageSync('UUID')) {
				let UUID = uni.getStorageSync('UUID'); // 读取缓存的用户信息
				//console.log(UUID);
				let params = {
					page:pa,
					userId:UUID,
					type:de
				}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					success: (response) => {
						uni.hideLoading();
						if(response.data.content.purc.list.length==0){
							uni.showToast({
								title: '已经没有啦',
								icon: 'none',
								duration: 2000,
							});
						}else if(response.data.content.purc.length!==0){
							response.data.content.purc.list.map((item,index)=>{
								this.newsList[3].data.push(item)
							})
						}
					},
					fail: (error) => {
						uni.hideLoading(); // 隐藏 loading
						uni.showToast({
							title: '网络繁忙，请稍后',
							icon: 'none',
							duration: 1000
						});
						//console.log(error, '网络繁忙，请稍后');
					}
				});
			}
		},
		inst(de,pa){//供应分页
			if(uni.getStorageSync('landRegist')){
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				//console.log(landRegistLG.user.id);
				let params = {
					page:pa,
					userId:landRegistLG.user.id,
					type:de
				}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					success: (response) => {
						uni.hideLoading();
						//console.log(response.data);
						if(response.data.content.inst.list.length==0){
							uni.showToast({
								title: '已经没有啦',
								icon: 'none',
								duration: 2000,
							});
						}else if(response.data.content.inst.length!==0){
							response.data.content.inst.list.map((item,index)=>{
								this.newsList[2].data.push(item)
							})
						}
					},
					fail: (error) => {
						uni.hideLoading(); // 隐藏 loading
						uni.showToast({
							title: '网络繁忙，请稍后',
							icon: 'none',
							duration: 1000
						});
						//console.log(error, '网络繁忙，请稍后');
					}
				});
			}else if (uni.getStorageSync('UUID')) {
				let UUID = uni.getStorageSync('UUID'); // 读取缓存的用户信息
				//console.log(UUID);
				let params = {
					page:pa,
					userId:UUID,
					type:de
				}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					success: (response) => {
						uni.hideLoading();
						if(response.data.content.inst.list.length==0){
							uni.showToast({
								title: '已经没有啦',
								icon: 'none',
								duration: 2000,
							});
						}else if(response.data.content.inst.length!==0){
							response.data.content.inst.list.map((item,index)=>{
								this.newsList[2].data.push(item)
							})
						}
					},
					fail: (error) => {
						uni.hideLoading(); // 隐藏 loading
						uni.showToast({
							title: '网络繁忙，请稍后',
							icon: 'none',
							duration: 1000
						});
						//console.log(error, '网络繁忙，请稍后');
					}
				});
			}
		},
		news(de,pa){//资讯分页
			if(uni.getStorageSync('landRegist')){
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				//console.log(landRegistLG.user.id);
				let params = {
					page:pa,
					userId:landRegistLG.user.id,
					type:de
				}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					success: (response) => {
						uni.hideLoading();
						//console.log(response.data);
						if(response.data.content.news.list.length==0){
							uni.showToast({
								title: '已经没有啦',
								icon: 'none',
								duration: 2000,
							});
						}else if(response.data.content.news.length!==0){
							response.data.content.news.list.map((item,index)=>{
								this.newsList[4].data.push(item)
							})
						}
					},
					fail: (error) => {
						uni.hideLoading(); // 隐藏 loading
						uni.showToast({
							title: '网络繁忙，请稍后',
							icon: 'none',
							duration: 1000
						});
						//console.log(error, '网络繁忙，请稍后');
					}
				});
			}else if (uni.getStorageSync('UUID')) {
				let UUID = uni.getStorageSync('UUID'); // 读取缓存的用户信息
				//console.log(UUID);
				let params = {
					page:pa,
					userId:UUID,
					type:de
				}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					success: (response) => {
						uni.hideLoading();
						if(response.data.content.news.list.length==0){
							uni.showToast({
								title: '已经没有啦',
								icon: 'none',
								duration: 2000,
							});
						}else if(response.data.content.news.length!==0){
							response.data.content.news.list.map((item,index)=>{
								this.newsList[4].data.push(item)
							})
						}
					},
					fail: (error) => {
						uni.hideLoading(); // 隐藏 loading
						uni.showToast({
							title: '网络繁忙，请稍后',
							icon: 'none',
							duration: 1000
						});
						//console.log(error, '网络繁忙，请稍后');
					}
				});
			}
		},
		pushs(de,pa){//推荐分页
			if(uni.getStorageSync('landRegist')){
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				//console.log(landRegistLG.user.id);
				let params = {
					page:pa,
					userId:landRegistLG.user.id,
					type:de
				}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					success: (response) => {
						uni.hideLoading();
						//console.log(response.data);
						if(response.data.content.push.list.length==0){
							uni.showToast({
								title: '已经没有啦',
								icon: 'none',
								duration: 2000,
							});
						}else if(response.data.content.push.length!==0){
							response.data.content.push.list.map((item,index)=>{
								this.newsList[1].data.push(item)
							})
						}
					},
					fail: (error) => {
						uni.hideLoading(); // 隐藏 loading
						uni.showToast({
							title: '网络繁忙，请稍后',
							icon: 'none',
							duration: 1000
						});
						//console.log(error, '网络繁忙，请稍后');
					}
				});
			}else if (uni.getStorageSync('UUID')) {
				let UUID = uni.getStorageSync('UUID'); // 读取缓存的用户信息
				//console.log(UUID);
				let params = {
					page:pa,
					userId:UUID,
					type:de
				}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					success: (response) => {
						uni.hideLoading();
						if(response.data.content.push.list.length==0){
							uni.showToast({
								title: '已经没有啦',
								icon: 'none',
								duration: 2000,
							});
						}else if(response.data.content.push.length!==0){
							response.data.content.push.list.map((item,index)=>{
								this.newsList[1].data.push(item)
							})
						}
					},
					fail: (error) => {
						uni.hideLoading(); // 隐藏 loading
						uni.showToast({
							title: '网络繁忙，请稍后',
							icon: 'none',
							duration: 1000
						});
						//console.log(error, '网络繁忙，请稍后');
					}
				});
			}
		},
		follow(de,pa){//关注分页
			if(uni.getStorageSync('landRegist')){
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				//console.log(landRegistLG.user.id);
				let params = {
					page:pa,
					userId:landRegistLG.user.id,
					type:de
				}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					success: (response) => {
						uni.hideLoading();
						//console.log(response.data);
						if(response.data.content.follow.list.length==0){
							uni.showToast({
								title: '已经没有啦',
								icon: 'none',
								duration: 2000,
							});
						}else if(response.data.content.follow.length!==0){
							response.data.content.follow.list.map((item,index)=>{
								this.newsList[0].data.push(item)
							})
						}
					},
					fail: (error) => {
						uni.hideLoading(); // 隐藏 loading
						uni.showToast({
							title: '网络繁忙，请稍后',
							icon: 'none',
							duration: 1000
						});
						//console.log(error, '网络繁忙，请稍后');
					}
				});
			}else if (uni.getStorageSync('UUID')) {
				let UUID = uni.getStorageSync('UUID'); // 读取缓存的用户信息
				//console.log(UUID);
				let params = {
					page:pa,
					userId:UUID,
					type:de
				}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					success: (response) => {
						uni.hideLoading();
						if(response.data.content.follow.list.length==0){
							uni.showToast({
								title: '已经没有啦',
								icon: 'none',
								duration: 2000,
							});
						}else if(response.data.content.follow.length!==0){
							response.data.content.follow.list.map((item,index)=>{
								this.newsList[0].data.push(item)
							})
						}
					},
					fail: (error) => {
						uni.hideLoading(); // 隐藏 loading
						uni.showToast({
							title: '网络繁忙，请稍后',
							icon: 'none',
							duration: 1000
						});
						//console.log(error, '网络繁忙，请稍后');
					}
				});
			}
		},
		finddatass(de,pa){
			if(uni.getStorageSync('landRegist')){
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				//console.log(landRegistLG.user.id);
				let params = {
					page:pa,
					userId:landRegistLG.user.id,
					type:de
				}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					success: (response) => {
						uni.hideLoading();
						//console.log(response.data);
						//console.log(de)
						this.goTop();
						if(de=='invest'){//资本
							this.newsList[6].data=response.data.content.invest.list;
							//console.log(this.newsList)
						}else if(de=='compService'){//企业服务
							this.newsList[5].data=response.data.content.compService.list;
							//console.log(this.newsList)
						}else if(de=='push'){
							this.newsList[1].data=response.data.content.push.list;
						}else if(de=='news'){
							this.newsList[4].data=response.data.content.news.list;
						}else if(de=='purc'){
							this.newsList[3].data=response.data.content.purc.list;
						}else if(de=='inst'){
							this.newsList[2].data=response.data.content.inst.list;
						}else if(de=='follow'){
							this.newsList[0].data=response.data.content.follow.list;
						}
					},
					fail: (error) => {
						uni.hideLoading(); // 隐藏 loading
						uni.showToast({
							title: '网络繁忙，请稍后',
							icon: 'none',
							duration: 1000
						});
						//console.log(error, '网络繁忙，请稍后');
					}
				});
			}else if (uni.getStorageSync('UUID')) {
				let UUID = uni.getStorageSync('UUID'); // 读取缓存的用户信息
				//console.log(UUID);
				let params = {
					page:pa,
					userId:UUID,
					type:de
				}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/adve/findList', //接口地址。
					data: params,
					method: 'POST',
					success: (response) => {
						uni.hideLoading();
						this.goTop();
						//console.log(response.data);
						if(de=='invest'){//资本
							this.newsList[6].data=response.data.content.invest.list;
							//console.log(this.newsList)
						}else if(de=='compService'){//企业服务
							this.newsList[5].data=response.data.content.compService.list;
							//console.log(this.newsList)
						}else if(de=='push'){
							this.newsList[1].data=response.data.content.push.list;
						}else if(de=='news'){
							this.newsList[4].data=response.data.content.news.list;
						}else if(de=='purc'){
							this.newsList[3].data=response.data.content.purc.list;
						}else if(de=='inst'){
							this.newsList[2].data=response.data.content.inst.list;
						}else if(de=='follow'){
							this.newsList[0].data=response.data.content.follow.list;
						}
					},
					fail: (error) => {
						uni.hideLoading(); // 隐藏 loading
						uni.showToast({
							title: '网络繁忙，请稍后',
							icon: 'none',
							duration: 1000
						});
						//console.log(error, '网络繁忙，请稍后');
					}
				});
			}
		},
		clickSearch() {
			//console.log('点击触发搜索组件');
			uni.navigateTo({
				url: '/modules/find/findlist/find-search'
			});
		},
		cliskShowPingDao() {
			//console.log('触发展示频道组件');
			this.pinDaoShow = !this.pinDaoShow; // 展示频道
		},
		cliskClosePingDao() {
			//console.log('触发关闭频道组件');
			this.pinDaoShow = !this.pinDaoShow; // 关闭频道频道
			this.editOrFinish = 0;
		},
		pinDaoEdit() {
			//console.log('触发编辑按钮');
			this.editOrFinish = 1;
		},
		pinDaoFinish() {
			//console.log('触发完成按钮');
			this.editOrFinish = 0;
		},
		pinDaoDelete(e) {
			//console.log(e, '触发删除频道子项X按钮');
			this.tabBarsAdd.unshift(this.tabBars[e]); // 向添加频道添存储我的的频道已删除的子项
			delete this.tabBars.splice(e, 1); // 删除我的频道选中的子项
			//console.log(this.tabBars, '--------------this.tabBars----------------');
		},
		pinDaoAdd(e) {
			//console.log('触发频道添加子项');
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
			//console.log(activeTab.data, '----------------activeTab.data----------------');
		},
		loadMore(e) {
			// setTimeout(() => {
			// 	this.getList(this.tabIndex);
			// }, 500);
			//console.log(this.Currentpage)
			if(this.Currentpage==5){
				this.adefault='compService';
				this.pages++;
				this.compService(this.adefault,this.pages);
			}else if(this.Currentpage==6){
				this.adefault='invest';
				this.pages++;
				this.invest(this.adefault,this.pages);
			}else if(this.Currentpage==3){
				this.adefault='purc';
				this.pages++;
				this.purc(this.adefault,this.pages);
			}else if(this.Currentpage==2){
				this.adefault='inst';
				this.pages++;
				this.inst(this.adefault,this.pages);
			}else if(this.Currentpage==4){
				this.adefault='news';
				this.pages++;
				this.news(this.adefault,this.pages);
			}else if(this.Currentpage==1){
				this.adefault='push';
				this.pages++;
				this.pushs(this.adefault,this.pages);
			}else if(this.Currentpage==0){
				this.adefault='follow';
				this.pages++;
				this.follow(this.adefault,this.pages);
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
		//记录滚动条位置
		scroll: function(e) {
			this.old.scrollTop = e.detail.scrollTop
		},
		goTop() {
			this.scrollTop = this.old.scrollTop;
			// console.log('123')
			//在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进Vue.nextTick()的回调函数中。
			this.$nextTick(function() {
				this.scrollTop = 10
			});
		},
		scrolltoupper(){
			
			this.scrollTop=10;
		},
		ontabchange(e) {
			let index = e.target.current || e.detail.current;
			let entry = 2; // 进入swiper方式, 1时动画为0， 2时动画300毫秒
			this.switchTab(index, entry);

			this.Currentpage=e.detail.current;
			//console.log(this.Currentpage)
			if(e.detail.current==0){
				this.adefault='follow';
				this.pages='1';
				this.finddatass(this.adefault,this.pages);
			}else if(e.detail.current==1){
				this.adefault='push';
				this.pages='1';
				this.finddatass(this.adefault,this.pages);
			}else if(e.detail.current==2){
				this.adefault='inst';
				this.pages='1';
				this.finddatass(this.adefault,this.pages);
			}else if(e.detail.current==3){
				this.adefault='purc';
				this.pages='1';
				this.finddatass(this.adefault,this.pages);
			}else if(e.detail.current==4){
				this.adefault='news';
				this.pages='1';
				this.finddatass(this.adefault,this.pages);
			}else if(e.detail.current==5){
				this.adefault='compService';
				this.pages='1';
				this.finddatass(this.adefault,this.pages);
			}else if(e.detail.current==6){
				this.adefault='invest';
				this.pages='1';
				this.finddatass(this.adefault,this.pages);
			}
		},
		//动画结束后执行
		endgo(e){
			
		},
		switchTab(index, time) {
			if (time === 1) {
				// 进入swiper方式, 1时动画为0， 2时动画300毫秒
				this.durationTime = 0; // swiper动画时间
			} else {
				this.durationTime = 300; // swiper动画时间
			}

			if (this.tabIndex === index) {
				return;
			}

			// 缓存 tabId
			// if (this.newsList[this.tabIndex].data.length > MAX_CACHE_DATA) {
			// 	let isExist = this.cacheTab.indexOf(this.tabIndex);
			// 	if (isExist < 0) {
			// 		this.cacheTab.push(this.tabIndex);
			// 		////console.log("cache index:: " + this.tabIndex);
			// 	}
			// }
			this.tabIndex = index;
			this.scrollInto = this.tabBars[index].id;

			// 释放 tabId
			if (this.cacheTab.length > MAX_CACHE_PAGE) {
				let cacheIndex = this.cacheTab[0];
				this.clearTabData(cacheIndex);
				this.cacheTab.splice(0, 1);
				////console.log("remove cache index:: " + cacheIndex);
			}
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
		}
	}
};
</script>

<style>
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
	position: fixed;
	top: 0;
	width: 100%;
	height: 11vw;
	background: #fff;
}
.kongjian{
	width: 100%;
	height: 11vw;
}
.quickBtn-Fd {
	position: relative;
	width: 5%;
	margin-left: 20upx;
}
.search-Fd {
	position: relative;
	margin-left: 20upx;
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
	overflow-x:hidden;
	overflow-x: auto;
	flex-direction: row;
	white-space: nowrap;
	/* #ifndef APP-PLUS */
	white-space: nowrap;
	/* #endif */
	/* flex-wrap: nowrap; */
	/* border-color: #cccccc;
	border-bottom-style: solid;
	border-bottom-width: 1px; */
	padding-right: 5vw;
}
.scroll-h::-webkit-scrollbar {
	/* 隐藏滚动条，但依旧具备可以滚动的功能 */
	display: none
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
	font-size: 32upx;
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
	height: 80vh;
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
