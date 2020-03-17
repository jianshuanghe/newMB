<template>
	<view>
		<view>
			<topBox><p>新建网点</p></topBox>
		</view>
		<scroll-view class="scroll-v" scroll-y="true" :show-scrollbar="false" :scroll-with-animation="true" @scrolltolower="loadMore">
			<view class="list">
				<view class="list-item">
					<view class="list-item-name">名称</view>
					<view>
						<textarea
							type="text"
							placeholder="请填写网点名称"
							:value = "aftersaleName"
							auto-height
							maxlength="30"
							placeholder-style="font-family: PingFangSC-Regular;font-size: 28upx;color: #BDBDBD;letter-spacing: 0;line-height: 36upx;"
							style="width: 540upx;font-family: PingFangSC-Regular;font-size: 14px;color: #2E2E30;letter-spacing: 0;line-height: 18px;"
							@blur="blurName"
						/>
					</view>
				</view>
				<view class="list-item">
					<view class="list-item-name">地址</view>
					<view style="display: flex; align-items: center;" @click="clickMap">
						<image class="addressImg" :src="addressImg"></image>
						<textarea
							:value="address"
							type="text"
							placeholder="点击选择"
							auto-height
							maxlength="50"
							disabled
							placeholder-style="font-family: PingFangSC-Regular;font-size: 28upx;color: #BDBDBD;letter-spacing: 0;line-height: 36upx;"
							style="width: 500upx;font-family: PingFangSC-Regular;font-size: 14px;color: #2E2E30;letter-spacing: 0;line-height: 18px;"
						/>
						<!-- <view>{{address}}</view> -->
					</view>
				</view>
				<!-- <view class="list-item">
					<view class="list-item-name">详细地址</view>
					<view style="display: flex; align-items: center;">
						<textarea
						type="text" 
						placeholder="请输入详细地址" 
						auto-height 
						maxlength="50"
						placeholder-style="font-family: PingFangSC-Regular;font-size: 28upx;color: #BDBDBD;letter-spacing: 0;line-height: 36upx;"
						style="width: 500upx;font-family: PingFangSC-Regular;font-size: 14px;color: #2E2E30;letter-spacing: 0;line-height: 18px;"
						/>
					</view>
				</view> -->
				<view class="list-item">
					<view class="list-item-name">联系电话</view>
					<view>
						<input
							type="number"
							placeholder-style="font-family: PingFangSC-Regular;font-size: 28upx;color: #BDBDBD;letter-spacing: 0;line-height: 36upx;"
							placeholder="请填写网点电话"
							:value = "aftersalePhone"
							style="width: 540upx;font-family: PingFangSC-Regular;font-size: 14px;color: #2E2E30;letter-spacing: 0;line-height: 18px;"
							@blur="blurPhone"
						/>
					</view>
				</view>
				<view class="list-item">
					<view class="list-item-name">营业时间</view>
					<view>
						<textarea
							type="text"
							placeholder="如周一至周日8:30-20:00"
							auto-height
							placeholder-style="font-family: PingFangSC-Regular;font-size: 28upx;color: #BDBDBD;letter-spacing: 0;line-height: 36upx;"
							maxlength="50"
							:value="aftersaleTime"
							style="width: 540upx;font-family: PingFangSC-Regular;font-size: 14px;color: #2E2E30;letter-spacing: 0;line-height: 18px;"
							@blur="blurTime"
						/>
					</view>
				</view>
			</view>
			<view style="width: 100%; height: 20upx; background: #F9F9F9;"></view>
			<view class="serve">
				<view>支持服务</view>
				<view class="serveKey">
					<view v-for="(item, index) in service" :key="index">
						<view class="ser">{{ item }}</view>
						<image class="deleteImg" :src="deleteImg" @click="deleteSer(index)"></image>
					</view>
					<view>
						<input
							v-model="serValue"
							type="text"
							maxlength="8"
							style="width: 100upx;font-family: PingFangSC-Regular;font-size: 26upx;color: #2e2e30;letter-spacing: 0;line-height: 26upx;"
							placeholder="+ 添加"
							placeholder-style="font-family: PingFangSC-Regular;font-size: 26upx;color: #2E2E30;letter-spacing: 0;line-height: 26upx;"
							@blur="blurSer($event.target.value)"
						/>
					</view>
				</view>
			</view>
		</scroll-view>
		<view>
			<view class="bottomBtn1" v-if= "this.isEdit ==''">
				<view class="savebtn" @click="toNewsale">
					保存
				</view>
			</view>
			<view class="bottomBtn2" v-else>
				<view class="editbtn" @click="deleteBtn">删除</view>
				<view class="savebtn2" @click="toUpdate">保存</view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import topBox from '@/components/mbbo/topBox/topBox';
import createsale from '@/modules/myCompany/aftersale/aftersaleItems/createSale';
import addressImg from '@/static/mbcImg/images/business/home/aftersale/address-black.png';
import deleteImg from '@/static/mbcImg/images/business/home/aftersale/delete.png';
export default {
	name: 'aftermarket',
	components: {
		topBox,
		createsale
	},
	data() {
		return {
			addressImg: addressImg,
			deleteImg: deleteImg,
			address: '', //地址
			userId: '', //用户ID
			baiduAddrCode: '', //百度城市码
			aftersaleTime: '', //营业时间
			aftersalePhone: '', //电话
			aftersaleName: '', //名称
			aftersaleLongitude: '', //东经
			aftersaleLatitude: '', //北纬
			aftersaleAddr: '', //详细地址
			service: ['预约维修', '资讯体验', '系统升级', '系统升级'],
			serValue: '',
			isEdit:''//判断是修改还是新增   //售后网点ID
		};
	},
	methods: {
		...mapMutations({
			setServiceOutletCount: 'setServiceOutletCount',
			setServiceOutletCity: 'setServiceOutletCity'
		}),
		clickMap() {
			console.log('跳转地图');
			uni.navigateTo({
				url: './mapsale?address=' + this.address +'&aftersaleName='+this.aftersaleName+'&aftersaleLongitude='+this.aftersaleLongitude+'&aftersaleLatitude='+this.aftersaleLatitude+'&baiduAddrCode='+this.baiduAddrCode
			});
		},
		// 更改名称
		blurName(e) {
			this.aftersaleName = e.detail.value;
			console.log(this.aftersaleName, '名称');
		},
		//更改电话
		blurPhone(e) {
			this.aftersalePhone = e.detail.value;
			console.log(this.aftersalePhone, '电话');
		},
		//更改营业时间
		blurTime(e) {
			this.aftersaleTime = e.detail.value;
			console.log(this.aftersaleTime, '营业时间');
		},
		//删除服务
		deleteSer(index) {
			console.log('删除了', index);
			this.service.splice(index, 1);
			console.log(this.service);
		},
		//失去焦点添加服务
		blurSer(e) {
			console.log(e);
			if(e ==''){
				console.log('什么都没输')
			}else{
				this.service.push(e);
				this.serValue = '';
			}
		},
		//保存按钮
		toNewsale() {
			// console.log('点击了保存按钮', this.address);
			let params = {
				aftersaleAddr: this.address,
				aftersaleLatitude: this.aftersaleLatitude,
				aftersaleLongitude: this.aftersaleLongitude,
				aftersaleName: this.aftersaleName,
				aftersalePhone: this.aftersalePhone,
				aftersaleSerivce: this.service,
				aftersaleTime: this.aftersaleTime,
				baiduCcode: this.baiduAddrCode,
				userId: '760'
			}; // 请求总数居时 参数为空
			if (!uni.getStorageSync('landRegist')) {
				this.landRegistra(); // 判断登录状态
			} else if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				uni.request({
					url: this.api2 + '/rest-rp/aftersale/add', //接口地址。
					data: params,
					method: 'POST',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: res => {
						console.log(res);
						this.aftersaleList();
						this.getcitylist();
						uni.navigateBack();
					},
					fail: error => {
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
		//更新按钮
		toUpdate(){
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				let params = {
					aftersaleAddr: this.address,
					aftersaleLatitude: this.aftersaleLatitude,
					aftersaleLongitude: this.aftersaleLongitude,
					aftersaleName: this.aftersaleName,
					aftersalePhone: this.aftersalePhone,
					aftersaleSerivce: this.service,
					aftersaleTime: this.aftersaleTime,
					baiduCcode: this.baiduAddrCode,
					userId: '760',
					id:this.isEdit
				}; // 请求总数居时 参数为空
				uni.request({
					url: this.api2 + '/rest-rp/aftersale/update', //接口地址。
					data: params,
					method: 'POST',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						console.log(response.data, '更新');
						this.aftersaleList();
						this.getcitylist();
						uni.navigateBack();
					},
					fail: error => {
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
		//删除按钮
		deleteBtn(){
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				// let params = {}; // 请求总数居时 参数为空
				uni.request({
					url: this.api2 + '/rest-rp/aftersale/del?ids='+this.isEdit, //接口地址。
					// data: params,
					method: 'GET',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						console.log(response.data, '删除');
						this.aftersaleList();
						this.getcitylist();
						uni.navigateBack();
					},
					fail: error => {
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
		// 我的售后网点-城市列表
		getcitylist() {
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				// let params = {}; // 请求总数居时 参数为空
				uni.request({
					url: this.api2 + '/rest-rp/aftersale/cityList?userId=760', //接口地址。
					// data: params,
					method: 'GET',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						console.log(response.data.content, '下拉导航');
						// this.cityList = response.data.content;
						this.$store.commit('setServiceOutletCount', response.data.content);
						console.log(this.$store.state.CustomerServiceOutlets, 'vuex');
					},
					fail: error => {
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
		// 我的售后网点列表
		aftersaleList() {
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				// let params = {}; // 请求总数居时 参数为空
				uni.request({
					url: this.api2 + '/rest-rp/aftersale/list?userId=760&page=1', //接口地址。
					// data: params,
					method: 'GET',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						console.log(response.data.content.list, '我的售后网点列表');
						var list = response.data.content.list;
						this.$store.commit('setServiceOutletCity', list);
					},
					fail: error => {
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
		//滚动条滑到底部
		loadMore(){
			console.log('滚到底部了')
		}	
	},
	onShow() {
		console.log('页面显示了');
		let pages = getCurrentPages();
		console.log(pages, '返回的页面的数据');
	},
	onLoad(options) {
		let navData = JSON.parse(options.item);
		console.log(navData,'接收到的参数')
		this.isEdit = navData.id;
		this.address = navData.aftersaleAddr;
		this.baiduAddrCode = navData.baiduCcode;
		this.aftersaleName = navData.aftersaleName;
		this.aftersaleTime = navData.aftersaleTime;
		this.aftersalePhone = navData.aftersalePhone;
		this.aftersaleLongitude = navData.aftersaleLongitude;
		this.aftersaleLatitude =navData.aftersaleLatitude;
		this.service = navData.aftersaleSerivce;
	},
	created() {}
};
</script>

<style>
.list,
.serve {
	padding-left: 30upx;
	padding-right: 30upx;
	background: #ffffff;
}
.list-item {
	width: 100%;
	height: 116upx;
	display: flex;
	align-items: center;
	border-bottom: 2upx solid #f5f5f5;
}
.list-item-name {
	font-family: PingFangSC-Regular;
	font-size: 28upx;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 36upx;
	width: 112upx;
	height: 36upx;
	margin-right: 30upx;
}
.addressImg {
	width: 32upx;
	height: 32upx;
	margin-right: 10upx;
}
.serve {
	display: flex;
}
.serve > view:nth-child(1) {
	font-family: PingFangSC-Regular;
	font-size: 28upx;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 36upx;
	width: 112upx;
	height: 36upx;
	margin-right: 30upx;
	margin-top: 46upx;
}
.serveKey {
	width: 540upx;
	display: flex;
	flex-wrap: wrap;
	margin-top: 10upx;
}
.serveKey > view {
	/* width: 144upx;
	height: 70upx; */
	background: #ffffff;
	border: 1upx solid #d2d2d2;
	border-radius: 4upx;
	margin-right: 20upx;
	margin-top: 20upx;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	padding: 20upx;
}
.ser {
	font-family: PingFangSC-Regular;
	font-size: 26upx;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 26upx;
}
.deleteImg {
	width: 36upx;
	height: 36upx;
	position: absolute;
	right: -18upx;
	top: -18upx;
}
.bottomBtn1 {
	width: 100%;
	height: 120upx;
	background: #ffffff;
	position: fixed;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
}
.savebtn {
	width: 92%;
	height: 90upx;
	background: #02c2a2;
	border-radius: 4upx;
	display: flex;
	justify-content: center;
	align-items: center;
	ont-family: PingFangSC-Regular;
	font-size: 28upx;
	color: #ffffff;
	letter-spacing: 0;
}
.bottomBtn2 {
	width: 100%;
	height: 120upx;
	position: fixed;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
}
.savebtn2,.editbtn{
	width: 50%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: PingFangSC-Regular;
	font-size: 32upx;
}
.savebtn2{
	background-image: linear-gradient(-134deg, #15D49F 0%, #57D6CF 100%);
	color: #FFFFFF;
}
.editbtn{
	background: rgba(255,255,255,0.90);
	box-shadow: 0 -1px 0 0 #F5F5F5;
	color: #030303;
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
