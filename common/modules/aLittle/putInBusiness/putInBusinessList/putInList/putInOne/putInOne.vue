<template>
	<div class="putIn-content">
		<!-- 已选择1个说明书、创建商机 -->
		<div class="title-items">
			已选择
			<text class="num">{{ putInList.length }}</text>
			个说明书
			<text class="createBusiness" @tap="gotochuang()">+ 创建新商机</text>
		</div>
		<!-- 列表list -->
		<div class="items-list">
			<div class="items-list">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="loadMore" @scroll="scroll">
					<view class="scrollContent">
						<!-- 列表 -->
						<div class="items-content">
							<checkbox-group @change="checkboxChange">
								<label class="uni-list-cell uni-list-cell-pd" @click="labelBtn(items.instrucTitle, index)" v-for="(items, index) in listData" :key="index">
									<view><checkbox :value="items.instrucTitle" :checked="items.checked" v-show="false" /></view>
									<view class="items-cont">
										<div class="check left"><img :src="items.checked ? checked : check" alt="" class="check-img" /></div>
										<div class="img-cont left">
											<img :src="toufang" class="items-img" v-if="items.bannerImg == ''" />
											<img :src="items.bannerImg" class="items-img" v-if="items.bannerImg !== ''" />
										</div>
										<div class="text-cot left">
											<div class="title">
												{{ items.instrucTitle }}
												<text class="type-text" v-if="items.tempName == '定制模板'">定制</text>
											</div>
											<div class="updata">更新于 {{ items.updateTime | formatDate }}</div>
										</div>
										<div class="clear"></div>
									</view>
								</label>
							</checkbox-group>
						</div>
					</view>
					<view class="loading-more"><!-- <text class="loading-more-text">{{loadingText}}</text> --></view>
				</scroll-view>
			</div>
		</div>
		<view class="tian">
			
		</view>
		<!-- 下一步 -->
		<div class="next" @tap="Nextstep()"><p class="next-text">下一步</p></div>
	</div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
	data() {
		return {
			check:  this.Static+'home/extendManageList/check.png',
			checked:  this.Static+'home/extendManageList/checked.png',
			toufang:  this.Static+'my/toufang.png',
			listData: [
				// {
				// 		checked: false,
				// 		createTime: '191956165165165',
				// 		cteateMan: 'as大时代',
				// 		instContent: '驾驶的科技暗红色的',
				// 		instrucId: '1889',
				// 		instrucTitle: '我啥萨达',
				// 		tempName: 'nihao',
				// 		instBanner: ''
				// 	},
				// 	{
				// 		value: 'CHN',
				// 		name: '中国',
				// 		checked: false,
				// 	},
				// 	{
				// 		value: 'BRA',
				// 		name: '巴西',
				// 		checked: false
				// 	},
				// 	{
				// 		value: 'JPN',
				// 		name: '日本',
				// 		checked: false
				// 	},
				// 	{
				// 		value: 'ENG',
				// 		name: '英国',
				// 		checked: false
				// 	},
				// 	{
				// 		value: 'FRA',
				// 		name: '法国',
				// 		checked: false
				// 	}
			],
			putInList: [], // 复选框选中的商机
			scrollTop: 0,
			old: {
				scrollTop: 0
			},
			loadingText: '加载更多...',
			information: {
				// 资讯
				loadingText: '加载更多...',
				search: {
					// 搜索
					pageNum: 0, // 总页数
					searchCondition: {
						// 分页属性
						page: '1'
					}
				},
				listData: '' // 列表数据
			},
			searchCondition: {
				// 分页属性
				page: '1',
				name: ''
			},
			arr:[],
			pageNum: 0, // 数据总页数
			pageList: [], // 后台返回数据
			items: {
				// 记录用户收藏功能 ----投资机构
				id: 0, // id
				love: false // 收藏
			},
			clickRecordsInFor: [] // 记录用户收藏行为 ----资讯
		};
	},
	props: ['msgData','bookid'],
	created() {
		console.log(this.bookid)
		this.getdata();
	},
	
	filters: {
		formatDate: function(value) {
			let date = new Date(value);
			let y = date.getFullYear();
			let MM = date.getMonth() + 1;
			MM = MM < 10 ? '0' + MM : MM;
			let d = date.getDate();
			d = d < 10 ? '0' + d : d;
			let h = date.getHours();
			h = h < 10 ? '0' + h : h;
			let m = date.getMinutes();
			m = m < 10 ? '0' + m : m;
			let s = date.getSeconds();
			s = s < 10 ? '0' + s : s;
			return y + '-' + MM + '-' + d + '  ' + h + ' : ' + m + ' : ' + s;
		}
	},
	methods: {
		gotochuang(){
			console.log('to选择模版(1/4)');
			uni.navigateTo({
				url: '/modules/createBusiness/selectTemplate'
			});
		},
		getdata() {
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				uni.request({
					url: this.api2 + '/rest-rp/putIn/putInInstList?userId='+landRegistLG.user.id, //接口地址。
					// data: params,
					method: 'GET',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						console.log(response.data);
						response.data.content.map((item, index) => {
							if(String(item.instrucId)==String(this.bookid)){//判断转过来的id是否与列表中的id相等 如果相等默认选中
								var obj = {
									checked: true,
									updateTime: item.updateTime,
									cteateMan: item.cteateMan,
									instContent: item.instContent,
									instrucId: item.instrucId,
									instrucTitle: item.instrucTitle,
									tempName: item.tempName,
									bannerImg: item.bannerImg
								};
								this.putInList.push(obj)
							}else{
								var obj = {
									checked: false,
									updateTime: item.updateTime,
									cteateMan: item.cteateMan,
									instContent: item.instContent,
									instrucId: item.instrucId,
									instrucTitle: item.instrucTitle,
									tempName: item.tempName,
									bannerImg: item.bannerImg
								};
							}
							this.listData.push(obj);
						});
						console.log(this.listData);
					},
					fail: error => {
						console.log(error, '网络繁忙，请稍后');
					}
				});
			}
		},
		Nextstep() {
			if (this.putInList.length == 0) {
				uni.showToast({
					title: '请选择投放内容',
					icon: 'none',
					duration: 1000
				});
			} else {
				console.log(this.putInList);
				this.arr=[];//存放数据前先清空
				this.$emit('putInstates', '2');
				this.$emit('putIn', '2');
				for(let i=0;i<this.listData.length;i++){
					if(this.listData[i].checked==true){
						this.arr.push(this.listData[i])
						console.log(this.arr)
					}
				}
				console.log(this.arr)
				this.$store.commit('setputInstate', this.arr);
			}
		},
		upper: function(e) {
			console.log(e);
		},
		loadMore: function() {
			console.log('触发加载更多。。。');
			let pageNum = this.information.search.pageNum;
			let page = Number(this.information.search.searchCondition.page);
			console.log(page, '当前页数1');
			console.log(pageNum, '总页数1');
			console.log(this.information, '头责任的加载更多，原始数据');
			if (page < pageNum) {
				// 当前页数小于总页数时上啦加载数据
				setTimeout(() => {
					this.getMoreList(this.information);
				}, 500);
			} else {
				this.loadingText = '已经没有数据了';
				this.information.loadingText = this.loadingText;
				uni.showToast({
					title: '已经没有数据了！',
					icon: 'none',
					duration: 1000
				});
			}
		},
		scroll: function(e) {
			console.log(e);
			this.old.scrollTop = e.detail.scrollTop;
		},
		goTop: function(e) {
			// 切换title时回到顶部
			// 解决view层不同步的问题
			this.scrollTop = this.old.scrollTop;
			console.log(this.scrollTop - 50);
			this.$nextTick(function() {
				this.scrollTop = 0;
			});
		},
		goScrollTop: function(e) {
			// 解决view层不同步的问题
			this.scrollTop = this.old.scrollTop;
			console.log(this.scrollTop - 50);
			this.$nextTick(function() {
				this.scrollTop = Number(this.scrollTop - 50);
			});
		},
		getList(e) {
			let params = {
				activityTitel: '',
				activityState: '1'
			}; // 请求总数居时 参数为空
			uni.showLoading({
				// 展示loading
				title: '加载中'
			});
			uni.request({
				url: this.api2 + '/activity/list?page=' + this.searchCondition.page, //接口地址。
				data: params,
				method: 'POST',
				header: {},
				success: response => {
					console.log(response.data);
					e.listData = response.data.rows; // 第一页返回的数据
					let pageList = [...response.data.rows];
					if (this.clickRecordsInFor.length < this.pageList.length) {
						// 缓存中的数据小于缓存的
						console.log('缓存中的数据小于缓存的');
						for (let i = 0; i < this.pageList.length; i++) {
							// 用户行为数据
							console.log(this.pageList[i]);
							let items = {
								// 用户缓存用户行为的子项
								id: 0, // id
								love: false // 收藏
							};
							items.id = this.pageList[i].id; // 赋值id
							this.clickRecordsInFor.push(items);
							console.log(this.clickRecordsInFor, '用户行为数据');
						}
						uni.setStorageSync('clickRecordsInFor', JSON.stringify(this.clickRecordsInFor)); // 缓存用户点击行为数组记录
					} else if (this.clickRecordsInFor.length >= this.pageList.length) {
						// 缓存中的数据大于等于接口每次返回的数据
						console.log('缓存中的数据大于等于接口每次返回的数据');
						this.clickRecordsInFor.map((item, index) => {
							console.log(item.id, '打印缓存中的id');
							pageList.map((item1, index) => {
								if (item1) {
									console.log(item1.id, '打印接口中的id');
									if (item1.id === item.id) {
										// 二次校验，如果缓存中的存在该id，则不需要再次缓存，之缓存不存在的
										pageList.splice(index, 1); // 将接口返回的数据去重
									}
								}
							});
							console.log(pageList, '去重后的数据');
						});
						if (pageList.length > 0) {
							console.log('去重后剩余数据');
							pageList.map((item, index) => {
								let items = {
									// 用户缓存用户行为的子项
									id: 0, // id
									love: false // 收藏
								};
								items.id = item.id; // 赋值id
								this.clickRecordsInFor.push(items);
								uni.setStorageSync('clickRecordsInFor', JSON.stringify(this.clickRecordsInFor)); // 缓存用户点击行为数组记录
							});
						}
					}
					e.search.pageNum = this.pageNums(response.data.total); // 总页数
					console.log(response.data.total, e.search.pageNum);
					if (e.search.pageNum === 1) {
						// 总页数为1时，显示没有数据了
						this.loadingText = '已经没有数据了';
						e.loadingText = '已经没有数据了!';
					}
					uni.hideLoading(); // 隐藏 loading
					this.$store.commit('setInformation', e); // 更新setInformation
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
		},
		getMoreList(e) {
			console.log(e, '数显数据函数的参数More');
			e.search.searchCondition.page = String(parseInt(e.search.searchCondition.page) + 1);
			let params = {
				activityTitel: '',
				activityState: '1'
			}; // 请求总数居时 参数为空
			uni.showLoading({
				// 展示loading
				title: '加载中'
			});
			uni.request({
				url: this.api2 + '/activity/list?page=' + e.search.searchCondition.page, //接口地址。
				data: params,
				method: 'POST',
				header: {},
				success: response => {
					console.log(response.data);
					e.listData = e.listData.concat(response.data.rows);
					let pageList = [...response.data.rows];
					console.log('缓存中的数据大于等于接口每次返回的数据');
					this.clickRecordsInFor.map((item, index) => {
						console.log(item.id, '打印缓存中的id');
						pageList.map((item1, index) => {
							if (item1) {
								console.log(item1.instId, '打印接口中的id');
								if (item1.id === item.id) {
									// 二次校验，如果缓存中的存在该id，则不需要再次缓存，之缓存不存在的
									pageList.splice(index, 1); // 将接口返回的数据去重
								}
							}
						});
						console.log(pageList, '去重后的数据');
					});
					if (pageList.length > 0) {
						console.log(pageList, '去重后剩余数据');
						pageList.map((item, index) => {
							let items = {
								// 用户缓存用户行为的子项
								id: 0, // id
								love: false // 收藏
							};
							items.id = item.id; // 赋值id
							this.clickRecordsInFor.push(items);
							uni.setStorageSync('clickRecordsInFor', JSON.stringify(this.clickRecordsInFor)); // 缓存用户点击行为数组记录
						});
					}
					uni.hideLoading(); // 隐藏 loading
					this.$store.commit('setInformation', e); // 更新setInformation
					this.goScrollTop(); // 页面触底之后调取loadMore方法，为了让用户再次调用此方法，需要自動将scroll向上滚动一些位置，这样下次滑动才会触发loadMore方法，详细需要看API
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
		},
		checkboxChange: function(e) {
			this.putInList = e.detail.value; // 获取选中的值
			console.log(this.putInList, 'putInList');
		},
		labelBtn(name, index) {
			console.log(name, index, 'nameindex');
			if (this.putInList.join(',').indexOf(name) > -1) {
				this.putInList.map((items, key) => {
					this.listData[index].checked = true;
				});
			} else {
				this.listData[index].checked = false;
			}
		}
	}
};
</script>

<style>
.putIn-content {
	position: fixed;
	width: 100vw;
	background: #fff;
	margin-top: 1.5vw;
}
.title-items {
	position: relative;
	width: 100%;
	padding: 3vw;
	font-family: PingFangSC-Regular;
	font-size: 28upx;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 46upx;
}
.num {
	color: #02c2a2;
}
.createBusiness {
	color: #02c2a2;
	float: right;
}
.items-list {
	position: relative;
}
.tian{
	width: 100%;
	height: 88upx;
}
.next {
	position: fixed;
	bottom: 0;
	width: 100%;
	background: #fff;
	padding: 2vw 3vw;
}
.next > p {
	font-family: PingFangSC-Regular;
	font-size: 32upx;
	color: #ffffff;
	letter-spacing: 0;
	text-align: center;
	line-height: 90upx;
	background: #02c2a2;
}
.scroll-Y {
	height: 86vh;
	padding-bottom: 0upx;
}

.scroll-view_H {
	white-space: nowrap;
	width: 100%;
}
.uni-scroll-view {
	height: 82vh;
}
.scroll-view-item {
	height: 82vh;
	line-height: 300upx;
	text-align: center;
	font-size: 36upx;
}

.scroll-view-item_H {
	display: inline-block;
	width: 100%;
	height: 300upx;
	line-height: 300upx;
	text-align: center;
	font-size: 36upx;
}
.loading-more {
	align-items: center;
	justify-content: center;
	padding-top: 20upx;
	padding-bottom: 50upx;
	text-align: center;
}
.loading-more-text {
	font-size: 28upx;
	color: #999;
}
.scrollContent {
	padding-bottom: 9vh;
}
.items-cont {
	position: relative;
	width: 100vw;
	padding: 3vw;
	background: #ffffff;
	box-shadow: 0 0 10upx 0 #e2e2e2;
}
.check {
	position: relative;
	width: 6%;
	top: 6vw;
	margin-right: 1%;
}
.check-img {
	position: relative;
	width: 30upx;
	height: 30upx;
}
.img-cont {
	position: relative;
	width: 22%;
	height: 130upx;
}
.items-img {
	position: relative;
	width: 130upx;
	height: 130upx;
}
.text-cot {
	position: relative;
	width: 68%;
	margin-left: 3%;
	height: 130upx;
}
.title {
	position: relative;
	font-family: PingFangSC-Medium;
	font-size: 28upx;
	color: #2e2e30;
	line-height: 44upx;
}
.type-text {
	background: #02c2a2;
	border-radius: 2px;
	padding: 0.5vw 1vw;
	font-family: PingFangSC-Regular;
	font-size: 22upx;
	color: #ffffff;
	margin-left: 1vw;
}
.updata {
	font-family: PingFangSC-Regular;
	font-size: 24upx;
	color: #bdbdbd;
	line-height: 24upx;
	position: absolute;
	bottom: 0;
}
.uni-list-cell-pd {
	padding: 12upx 30upx;
	border: 0;
}
.uni-list-cell::after {
	height: 0 !important;
}
</style>
