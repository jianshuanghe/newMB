<template>
	<view class="content-items">
		<view class="items-box" @tap='goToTemplatePro(msgData)' v-if="msgData.instrucCustType === '3'">
			<div class="items-text">
				<p class="text">{{msgData.tempName}}</p>
			</div>
			<div class="chaKanOrUser marginStyle">
				{{msgData.updateMan}} 发布
				<text class="user-text">{{msgData.updateTime | dateTime2}}</text>
			</div>
			<div class="chaKanOrUser">
				查看{{msgData.pvCnt}}
				<text class="user-text">使用{{msgData.useCnt}}</text>
			</div>
		</view>
	</view>
</template>

<script>
	import date from '@/static/mbcJs/dateTime.js';
	export default {
	    data () {
			return {
				product:  this.Static+'publish/createBusiness/rhx.png'
			};
	    },
		props: ['msgData'],
		created() {
		},
		filters: {
          /* 格式化时间戳 */
          dateTime (val) {
            return date.dateTime('.', val);
          },
		  dateTime2 (val) {
		    return date.dateTime('-', val);
		  },
        },
	    methods: {
			goToTemplatePro(e) {
				console.log('to投放商机');
				if (!uni.getStorageSync('landRegist')) {
					this.landRegistra(); // 判断登录状态
				} else if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let urlParams = {
						isFlow: 0, // 平台来源
						orderType: 0, // 订单类型
						sourceTemp: 0, // 说明书来源
						aiListTemp: 0, // 是否展示ai
						id: e.id, // 模板id
						instrucCustType: e.instrucCustType, // 模板类型
						isMenu: e.isMenu, // 横向导航
						instrucId:  null, // 说明书id
						lookUserId: null, // 浏览者
						creatorId: landRegistLG.user.id, // 说明书创建者
						instrucState: null // 说明书状态
					};
					uni.navigateTo({
						url: '/modules/createBusiness/templatePro/templatePro?urlParams=' + this.urlCrypto(urlParams, 0)
					});
				}
			},
	    }
	};
</script>

<style>
	.content-items{
		position: relative;
		width: 690upx;
		margin: 46upx 30upx;
	}
	.items-box{
		position: relative;
		width: 100%;
	}
	.items-img{
		position: relative;
		width: 690upx;
		height: 368upx;
	}
	.items-text{
		position: relative;
		width: 100%;
		padding: 6upx 0 0upx 0;
	}
	.items-text>p{
		ont-family: PingFangSC-Medium;
		font-size: 40upx;
		color: #2E2E30;
		line-height: 60upx;
	}
	.chaKanOrUser{
		position: relative;
		width: 100%;
		font-family: PingFangSC-Regular;
		font-size: 26upx;
		color: #9B9B9B;
		line-height: 70upx;
	}
	.user-text{
		position: relative;
		margin-left: 38upx;
	}
	.marginStyle{
		margin-bottom: 2vw;
	}
</style>