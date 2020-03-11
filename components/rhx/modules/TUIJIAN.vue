<template name="TUIJIAN">
	<view v-if='!disabled'>
		<view class="tuijianList">
			<view class="title">
				<span class="title1">{{ title }}</span>
			</view>
			<view>
				<view @click="navigateToN(item)" v-for="(item,index) in list" :key="index">
					<!-- 资讯 -->
					<view v-if="item.instrucCustType=='3'" class="list_zixun">
						<view class="list_zixun_intro">{{item.instrucTitle}}</view>
						<view class="list_zixun_time">
							<view class="" style="width: 40upx; height: 40upx;">
								<image style="width: 100%; height: 100%;" :src="item.compLogo"></image>
							</view>
							<span class="list_zixun_r">
								{{item.compName}}
							</span>
							<span class="list_zixun_n">{{item.updateTime}}</span>
						</view>
					</view>
					<view v-else  class="list_noprice">
						<image class="img1" :src="item.bannerImg" mode="aspectFill"></image>
						<div>
							<view  class="explain">
								{{item.instrucTitle}}
							</view>
							<view class="typeNames">
								<span v-if="item.typeNames[0]">{{item.typeNames[0]}}</span>
								<span v-if="item.typeNames[2]">{{item.typeNames[1]}}</span>
								<span v-if="item.typeNames[3]">...</span>
							</view>
							<view class="price">
								{{item.moneyStr}}
							</view>
						</div>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'TUIJIAN',
	data() {
		return {
			title: '相关推荐',
			list:this.moduleAIDateList ? this.moduleAIDateList.content : null,
			defaultImg: this.Static+'publish/createBusiness/defaultImg.png'
		};
	},
	created() {
	},
	mounted() {
		
	},
	props: [
		'disabled',
		'basicData',
		'scrollTop',
		'dataList',
		'indexNum',
		'tabYItemsIndex',
		'moduleAIDateList',
	],
	watch: {
		moduleAIDateList: {
			handler(a, b) {
				console.log(a, b, '----------moduleAIDateList----++++++++++++++++++++-------');
				this.list = a.content;
			},
			deep: true
		},
		scrollTop: {
			handler(a, b) {
				console.log(a, b, '--------------------------------------监听TUIJIAN变化---------------------------------------');
				this.scrollTitleChange();
			},
			deep: true
		}
	},
	methods: {
		navigateToN(e){
			console.log(e, "跳转页面");
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
				tempType: 0, // 说明书类型
				orderType: 0, // 订单类型
				sourceTemp: 2, // 说明书来源
				aiListTemp: 1, // 是否展示ai
				id: e.tempId, // 模板id
				isMenu: e.isMenu, // 横向导航
				instrucId:  e.instrucId, // 说明书id
				lookUserId: lookUserId, // 浏览者
				instrucCustType:e.instrucCustType, // 模板类型
				creatorId: e.userId, // 说明书创建者
				instrucState: e.instrucState // 说明书状态
			};
			uni.navigateTo({
				url: '/modules/createBusiness/templatePro/templatePro?urlParams=' + this.urlCrypto(urlParams, 0)
			});
		},
	}
};
</script>

<style>
.tuijianList {
	background: #f5f5f5;
}
.title {
	height: 88upx;
	width: 100%;
}
.title .title1 {
	font-family: PingFangSC-Semibold;
	font-size: 28upx;
	color: #02c2a2;
	margin-top: 40upx;
	margin-left: 30upx;
	letter-spacing: 0;
	/* 		text-align: center;
 */
	line-height: 28upx;
	display: inline-block;
}
.list_zixun{
	background: #FFFFFF;
	border-bottom: 1upx solid #F5F5F5;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.list_zixun_intro{
	width: 92%;
	font-family: PingFangSC-Medium;
	font-size: 28upx;
	color: #2E2E30;
	font-weight: bold;
	text-align: justify;
	line-height: 28upx;
	margin-top: 42upx;
	margin-bottom: 34upx;
}
.list_zixun_time{
	width: 92%;
	height: 40upx;
	display: flex;
	margin-bottom: 20upx;
}
.list_zixun_r{
	display: flex;
	align-items: center;
	margin-left: 4upx;
	font-family: PingFangSC-Regular;
	font-size: 24upx;
	color: #9B9B9B;
	letter-spacing: 0;
	line-height: 24upx;
}
.list_zixun_n{
	display: flex;
	align-items: center;
	margin-left: 20upx;
	font-family: PingFangSC-Regular;
	font-size: 24upx;
	color: #9B9B9B;
	letter-spacing: 0;
	line-height: 24upx;
}
.list_noprice {
	width: 100%;
	height: 300upx;
	display: flex;
	flex-wrap: wrap;
	background: #ffffff;
	border-bottom: 1upx solid #F5F5F5;
}
.list_noprice .img1 {
	width: 240upx;
	height: 240upx;
	margin: 30upx 20upx 0 30upx;
}
.explain {
	width: 430upx;
	height: 88upx;
	margin-top: 42upx;
	font-weight: bold;
}
.explain span{
	font-family: PingFangSC-Medium;
	font-size: 28upx;
	color: #2e2e30;
	text-align: justify;
	line-height: 44upx;
}
.typeNames{
	font-family: PingFangSC-Regular;
	font-size: 24upx;
	color: #02C2A2;
	line-height: 24upx;
	margin-top: 28upx;
}
.typeNames span{
	border: 2upx solid #02C2A2;
	border-radius: 4upx;
	border-radius: 4upx;
	padding: 8upx 10upx;
	margin-right: 20upx;
}
.price{
	font-family: PingFangSC-Semibold;
	font-size: 28upx;
	color: #FAB100;
	text-align: justify;
	line-height: 28upx;
	margin-top: 52upx;
}
</style>
