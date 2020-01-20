<template>
	<div class="detailsPutIn-box">
		<div class="detailsPutIn">
			<div class="topDetail-Putin">
				
				<div class="top-details-item">
					<div class="item-detail-pi left">
						<div class="pi-text">
							<p class="">{{ getDetailsPutInTop.instName }}</p>
						</div>
					</div>
					<div class="item-detail-ut left">
						<div class="ut-text" v-if="putInShow">
							{{ isPutIn ? '投放中' : '暂停' }}
							<!-- 投放中 -->
							<switch :checked="true" @change="changPutIn()" color="#02C2A2" v-if="this.getDetailsPutInTop.authState==1"/>
							<!-- 暂停 -->
							<switch :checked="false" @change="changPutIns()" color="#02C2A2" v-if="this.getDetailsPutInTop.authState==3"/>
							<!-- <mt-switch v-model="isPutIn" @change="changPutIn(isPutIn)"></mt-switch> -->
						</div>
						<div class="ut-text" v-else>
							<p class="">{{ stateDp }}</p>
						</div>
					</div>
					<div class="clear"></div>
					<div class="line"></div>
				</div>
				<div class="top-details-item">
					<div class="item-detail-pi left">
						<div class="pi-text"><p class="">投放商机ID</p></div>
					</div>
					<div class="item-detail-ut left">
						<div class="ut-text">
							<p class="">{{ getDetailsPutInTop.id }}</p>
						</div>
					</div>
					<div class="clear"></div>
					<div class="line"></div>
				</div>
				<div class="top-details-item">
					<div class="item-detail-pi left">
						<div class="pi-text"><p class="" @tap="guan">关联投放链接</p></div>
					</div>
					<div class="item-detail-ut left">
						<div class="ut-text">
							<p class="">{{ getDetailsPutInTop.linkName }}</p>
						</div>
					</div>
					<div class="clear"></div>
					<div class="line"></div>
				</div>
				<div class="top-details-item come">
					<div class="item-detail-pi left">
						<div class="pi-text"><p class="">投放位置</p></div>
					</div>
					<div class="item-detail-ut left">
						<div class="ut-text">
							<p class="">{{ getDetailsPutInTop.isBanner === '0' ? '不限位置' : 'banner' }}</p>
						</div>
					</div>
					<div class="clear"></div>
				</div>
				<div class="top-details-item">
					<div class="item-detail-pi left">
						<div class="pi-text"><p class="">流量来源</p></div>
					</div>
					<div class="item-detail-ut left">
						<div class="ut-text">
							<p class="">{{ getDetailsPutInTop.advePlatform || '暂无' }}</p>
						</div>
					</div>
					<div class="clear"></div>
				</div>
			</div>
			<div class="bottomDetail-Putin">
				<div class="putin-data-de">
					<div class="data-pi-text" v-if="more">
						<p class="" v-if="this.getDetailsPutInTop.createTime!==''">
							申请时间
							<span class="data-ut right">{{ getDetailsPutInTop.createTime }}</span>
						</p>
						<p class="" v-if="this.getDetailsPutInTop.authTime!==''">
							审核时间
							<span class="data-ut right">{{ getDetailsPutInTop.authTime }}</span>
						</p>
						<p class="" v-if="this.getDetailsPutInTop.putInTime!==''">
							投放时间
							<span class="data-ut right">{{ getDetailsPutInTop.putInTime }}</span>
						</p>
						<p class="" v-if="this.getDetailsPutInTop.suspTime!==''">
							暂停时间
							<span class="data-ut right">{{ getDetailsPutInTop.suspTime }}</span>
						</p>
					</div>
					<div class="isMoreShow" v-if="!isMoreShow">
						<div class="line"></div>
						<div class="isMore-box" @click="isShowMoreClick">
							<p class="">{{ more ? '收起' : '展开' }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="detailsPutIn-footer">
			<div class="detailsPutIn-footer-one">
				<div>数据概况</div>
				<div @tap="gotodataReport()">数据详情 ></div>
			</div>
			<div class="detailsPutIn-footer-two">
				<div>
					<span>{{getDetailsPutInTop.sumMoney}}</span>
					<span>已消耗（元）</span>
				</div>
				<div>
					<span>{{getDetailsPutInTop.userCost}}</span>
					<span>单个客户...</span>
				</div>
				<div>
					<span>{{getDetailsPutInTop.converCount}}</span>
					<span>转化数（次）</span>
				</div>
				<div>
					<span>{{getDetailsPutInTop.clikeCount}}</span>
					<span>点击数（个）</span>
				</div>
			</div>
			<div class="detailsPutIn-footer-two">
				<div>
					<span>{{getDetailsPutInTop.chatCount}}</span>
					<span>询盘数（次）</span>
				</div>
				<div>
					<span>{{getDetailsPutInTop.inquCount}}</span>
					<span>询价单（个）</span>
				</div>
				<div>
					<span>{{getDetailsPutInTop.msgCount}}</span>
					<span>留言数（次）</span>
				</div>
				<div>
					<span>{{getDetailsPutInTop.telCount}}</span>
					<span>拨打电话...</span>
				</div>
			</div>
		</div>
		<div class="etailsPutIn-buton">
			<div class="etailsPutIn-butonleft" @tap="changPutIn()" v-if="this.getDetailsPutInTop.authState==1">暂停</div>
			<div class="etailsPutIn-butonleft" @tap="changPutIns()" v-if="this.getDetailsPutInTop.authState==3">投放</div>
			<div class="etailsPutIn-butonleft" v-if="this.getDetailsPutInTop.authState==0">待审核</div>
			
			<div class="etailsPutIn-butonright" @tap="goToTemplatePro()">查看说明书</div>
		</div>
	</div>
</template>

<script>
// import { Loading } from 'vux';
// import axios from 'axios';
// import { Toast } from 'mint-ui';
import { mapMutations } from 'vuex';
export default {
	name: 'detailsPutIn',

	data() {
		return {
			loadingShow: false, // loading
			isPutIn: true, // 是否投放中
			putInShow: false, // true投放状态,false审核状态
			stateDp: '审核中',
			isMoreShow: false, // 是否显示加载更多组件
			more: false, // 显示更多
			getDetailsPutInTop: {} // 顶部信息
		};
	},
	components: {
		// Loading
	},
	props: ['itmes'],
	created() {
		// this.getDetailsPutIn();
		this.details();
	},
	mounted() {},

	methods: {
		goToTemplatePro(e) {
			console.log(this.dataList, 'to投放商机');
			let lookUserId = null;
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				lookUserId = landRegistLG.user.id;
			} else {
				lookUserId = uni.getStorageSync('UUID');
			};
			let urlParams = {
				isFlow: 0, // 平台来源
				orderType: 0, // 订单类型
				sourceTemp: 4, // 说明书来源
				aiListTemp: 0, // 是否展示ai
				id: this.getDetailsPutInTop.tempId, // 模板id
				instrucCustType: this.getDetailsPutInTop.instCustType, // 模板类型
				isMenu: this.getDetailsPutInTop.isMenu, // 横向导航
				instrucId:  this.getDetailsPutInTop.instId, // 说明书id
				lookUserId: lookUserId, // 浏览者
				creatorId: this.getDetailsPutInTop.instUserId, // 说明书创建者
				instrucState:this.getDetailsPutInTop.instState // 说明书状态
			};
			console.log(urlParams)
			uni.navigateTo({
				url: '/modules/createBusiness/templatePro/templatePro?urlParams=' + this.urlCrypto(urlParams, 0)
			});
		},
		...mapMutations({
			setLoadingShow: 'setLoadingShow',
			setLoadingText: 'setLoadingText'
		}),
		guan() {
			console.log(this.itmes);
		},
		isShowMoreClick() {
			this.more = !this.more; // 是否显示更多
		},
		gotodataReport(){
			console.log('to数据看表')
			uni.navigateTo({
				url:'/modules/InstructionsPrice/myproduct/product-book/dataReport/dataReport?id='+this.getDetailsPutInTop.instId
			})
		},
		details() {
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				console.log(this.itmes);
				uni.request({
					url: this.api2 + '/rest-rp/putIn/selectInstInfo?instId=' + this.itmes, //接口地址。
					// data: params,
					method: 'GET',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						console.log(response.data);
						this.getDetailsPutInTop = response.data.content;
						if (this.getDetailsPutInTop.authState === '1' || this.getDetailsPutInTop.authState === '3') {
							// 投放中状态
							this.putInShow = true;
							this.isPutIn = true;
							if (this.getDetailsPutInTop.authState === '3') {
								// 暂停状态
								this.isPutIn = false;
							}
						} else {
							this.putInShow = false;
							this.isPutIn = false;
							if (this.getDetailsPutInTop.authState === '0') {
								this.stateDp = '待审核';
							}
							if (this.getDetailsPutInTop.authState === '2') {
								this.stateDp = '未通过';
							}
						}
					},
					fail: error => {
						console.log(error, '网络繁忙，请稍后');
					}
				});
			}
		},
		//投放变暂停
		changPutIn() {
			// 关闭投放 e=3代表关闭，0代表投放
			if (uni.getStorageSync('landRegist')) {
				console.log('投放变暂停');
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				let params = {
					id: this.getDetailsPutInTop.id,
					authState: '3'
				};
				uni.request({
					url: this.api2 + '/rest-rp/putIn/putInUpdateStopDO', //接口地址。
					data: params,
					method: 'POST',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						console.log(response.data);
						if(response.data.ret==200){
							this.details();
						}
					},
					fail: error => {
						console.log(error, '网络繁忙，请稍后');
					}
				});
			}
		},
		//暂停变投放
		changPutIns(){
			if (uni.getStorageSync('landRegist')) {
				console.log('暂停变投放');
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				let params = {
					id: this.getDetailsPutInTop.id,
					authState: '0'
				};
				uni.request({
					url: this.api2 + '/rest-rp/putIn/putInUpdateStopDO', //接口地址。
					data: params,
					method: 'POST',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						console.log(response.data);
						if(response.data.ret==200){
							this.details();
						}
					},
					fail: error => {
						console.log(error, '网络繁忙，请稍后');
					}
				});
			}
		},
		dataEmpty(evn) {
			console.log(evn, '判断数据中空数据的个数');
			let dataE = [];
			dataE.push(evn.authTime);
			dataE.push(evn.createTime);
			dataE.push(evn.putInTime);
			dataE.push(evn.suspTime);
			console.log(dataE);
			let num = 0;
			dataE.map((items, index) => {
				if (items) {
					num++;
				}
			});
			console.log(num, '非空数据个数');
			if (num > 2) {
				this.isMoreShow = true; // 如果非空数据大于2，则小时加载更多
				if (this.getDetailsPutInTop.authState === '0') {
					// 待审核状态，不展示更多
					this.isMoreShow = false; // 如果非空数据大于2，则小时加载更多
				}
			} else {
				this.isMoreShow = false; // 如果非空数据大于2，则小时加载更多
			}
		}
	}
};
</script>

<style scoped>
.detailsPutIn-box {
	position: relative;
	width: 100%;
}
.detailsPutIn {
	position: relative;
	width: 100%;
}
.topDetail-Putin {
	position: relative;
	width: 100vw;
	padding: 2vw 4vw;
	background: #fff;
	margin-bottom: 1.5vw;
}
.top-details-item {
	position: relative;
	width: 100%;
	height: 100upx;
}
.item-detail-pi {
	position: relative;
	width: 50%;
}
.pi-text {
	position: relative;
	width: 100%;
}
.pi-text > p {
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #2e2e30;
	line-height: 11vw;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.come{
	border-bottom: 2upx solid #F5F5F5;
}
.item-detail-ut {
	position: relative;
	width: 50%;
}
.ut-text {
	position: relative;
	width: 100%;
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #5d5d5d;
	text-align: right;
	line-height: 9vw;
}
.ut-text > p {
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #5d5d5d;
	text-align: right;
	line-height: 11vw;
}
.ut-text > span {
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #5d5d5d;
	text-align: right;
	line-height: 11vw;
}
.bottomDetail-Putin {
	position: relative;
	width: 100vw;
	/* padding: 2vw 4vw 0 4vw; */
	background: #fff;
	margin-bottom: 1.5vw;
}
.putin-data-de {
	position: relative;
	width: 90%;
	margin: 0 auto;
}
.data-pi-text {
	position: relative;
	width: 100%;
	margin: 0 auto;
}
.data-pi-text > p {
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #2e2e30;
	line-height: 8vw;
}
.isMore-box {
	position: relative;
	width: 90%;
	margin: 0 auto;
}
.isMore-box > p {
	font-family: PingFang-SC-Medium;
	font-size: 3.5vw;
	color: #9b9b9b;
	line-height: 9vw;
	text-align: center;
}
.detailsPutIn-footer{
	width: 100%;
	height: 330upx;
	margin-top: 20upx;
	background: #FFFFFF;
}
.detailsPutIn-footer-one{
	width: 95%;
	height: 100upx;
	margin: 0 auto;
	line-height: 100upx;
}
.detailsPutIn-footer-one>div:nth-of-type(1){
	font-size: 32upx;
	color: #2E2E30;
	float: left;
}
.detailsPutIn-footer-one>div:nth-of-type(2){
	font-size: 26upx;
	color: #9B9B9B;
	float: right;
}
.detailsPutIn-footer-two{
	width: 95%;
	height: 120upx;
	margin: 0 auto;
	overflow: hidden;
	display: flex;
	justify-content: space-between;
	border-bottom: 2upx solid #F5F5F5;
}
.detailsPutIn-footer-two>div{
	width: 22%;
	height: 55%;
	border-right:2upx solid #E2E2E2;
	margin-top: 20upx;
}
.detailsPutIn-footer-two>div:nth-of-type(4){
	width: 22%;
	height: 55%;
	border-right:0;
	margin-top: 20upx;
}
.detailsPutIn-footer-two>div>span:nth-of-type(1){
	font-size: 28upx;
	color: #2E2E30;
	display: block;
}
.detailsPutIn-footer-two>div>span:nth-of-type(2){
	font-size: 24upx;
	color: #9B9B9B;
	display: block;
	margin-top: -10upx;
}
.etailsPutIn-buton{
	width: 100%;
	height: 100upx;
	background: #FFFFFF;
	position: fixed;
	bottom: 0;
}
.etailsPutIn-butonleft{
	font-size: 32upx;
	color: #030303;
	width: 50%;
	height: 100%;
	line-height: 100upx;
	text-align: center;
	float: left;
}
.etailsPutIn-butonright{
	font-size: 32upx;
	color: #FFFFFF;
	width: 50%;
	height: 100%;
	line-height: 100upx;
	text-align: center;
	float: left;
	background-image: linear-gradient(-134deg, #15D49F 0%, #57D6CF 100%);
}
</style>
