<template>
	<div>
		<div class="content-putIn" @click="goToPutInDetails(msgData.instId, msgData.instName)">
			<div class="putIn-box">
				<div class="putIn-top">
					<div class="title-putIn">
						<p class="">{{ msgData.instName }}</p>
					</div>
					<div class="rights">
						<image :src="dais" v-if="msgData.authState==0"></image>
						<image :src="tous" v-if="msgData.authState==1"></image>
						<image :src="weis" v-if="msgData.authState==2" style="width: 140upx;"></image>
						<image :src="zans" v-if="msgData.authState==3"></image>
					</div>
					<div class="xiaohao-putIn">
						<p class="left">
							已消耗 (元):
							<span class="num-putIn one">{{ msgData.consMoneyStr }}</span>
						</p>
						<p class="left">
							单个客户获取成本 (元/个):
							<span class="num-putIn two">{{ msgData.userCostStr }}</span>
						</p>
						<div class="clear"></div>
					</div>

				</div>
				<div class="line"></div>
				<div class="dataNum-putIn">
					<div class="numBox-putIn">
						<div class="numBox-putIn-Box">
							<scroll-view class="scroll-view_H" scroll-x="true" >
								<div class="numPutIn-items left" style="margin-left: 0;">
									<p class="items1-putIn">{{ msgData.chatCount }}</p>
									<p class="items2-putIn">询盘数 (次)</p>
								</div>
								<div class="numPutIn-items left">
									<p class="items1-putIn">{{ msgData.inquCount }}</p>
									<p class="items2-putIn">询价单 (个)</p>
								</div>
								<div class="numPutIn-items left">
									<p class="items1-putIn">{{ msgData.msgCount }}</p>
									<p class="items2-putIn">留言数 (个)</p>
								</div>
								<div class="numPutIn-items left">
									<p class="items1-putIn">{{ msgData.telCount }}</p>
									<p class="items2-putIn">拨打电话...</p>
								</div>
								<div class="numPutIn-items left">
									<p class="items1-putIn">{{ msgData.infoCount }}</p>
									<p class="items2-putIn">访问量 (次)</p>
								</div>
								<div class="numPutIn-items left">
									<p class="items1-putIn">{{ msgData.likeCount }}</p>
									<p class="items2-putIn">点赞量 (次)</p>
								</div>
								<div class="numPutIn-items left">
									<p class="items1-putIn">{{ msgData.followCount }}</p>
									<p class="items2-putIn">收藏量 (次)</p>
								</div>
								<div class="numPutIn-items left">
									<p class="items1-putIn">{{ msgData.shareCount }}</p>
									<p class="items2-putIn">分享量 (次)</p>
								</div>
								<div class="clear"></div>
							</scroll-view>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations } from 'vuex';
import dais from '@/static/mbcImg/my/dais.png';
import tous from '@/static/mbcImg/my/tous.png';
import weis from '@/static/mbcImg/my/weis.png';
import zans from '@/static/mbcImg/my/zans.png';
export default {
	name: 'putBusinessItems',
	data() {
		return {
			color: '1', // 颜色显示
			authStates: '待审核' ,// 渲染数据
			dais:dais,
			tous:tous,
			weis:weis,
			zans:zans,
			
		};
	},
	props: ['msgData'],
	created() {
		this.authState(this.msgData.authState);
	},
	watch: {
		msgData: {
			handler(a, b) {
				this.authState(this.msgData.authState);
			},
			deep: true
		}
	},
	mounted() {},
	filters: {
		ellipsis: function(value) {
			if (!value) return '';
			if (value.length > 4) {
				return value.slice(0, 4) + '...';
			}
			return value;
		},
	},
	methods: {
		...mapMutations({
			setInstName: 'setInstName'
		}),
		authState(e) {
			
		},
		goToPutInDetails(e, evn) {
			console.log(e, evn, '1');
			this.$store.commit('setInstName', evn);
			uni.navigateTo({
				url: '/modules/aLittle/putInBusiness/putInBusinessList/bunesinessDetails/bunesinessDetails?id=' + e
			});
		}
	}
};
</script>

<style scoped>
.content-putIn {
	position: relative;
	width: 100%;
	margin-bottom: 2vw;
}
.putIn-box {
	position: relative;
	width: 100%;
	overflow: hidden;
}
.scroll-view_H {
	width: 195%;
	/* height: 180upx; */
	/* float: left; */
	white-space: nowrap;
}
.putIn-top {
	position: relative;
	width: 100vw;
	padding: 2vw 4vw;
	background: #fff;
}
.title-putIn {
	position: relative;
	height: 50upx;
	float: left;
}
.title-putIn > p {
	position: relative;
	width: 100%;
	font-family: PingFang-SC-Bold;
	font-size: 4.266vw;
	color: #2e2e30;
	line-height: 8vw;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.status-putIn > span {
	position: absolute;
	top: -3vw;
	right: -16vw;
	width: 37.8vw;
	height: 13vw;
	color: #fff;
	-webkit-transform: rotate(45deg);
	transform: rotate(45deg);
	font-family: PingFangSC-Medium;
	font-size: 3.5vw;
	line-height: 18vw;
	text-align: center;
}
.status1 {
	background-image: linear-gradient(-139deg, #ffd137 0%, #fab100 100%);
}
.status2 {
	background-image: linear-gradient(44deg, #15d49f 0%, #57d6cf 100%);
}
.status3 {
	background-image: linear-gradient(-138deg, #ff4d4d 0%, #ff824d 100%);
}
.status4 {
	background: #9b9b9b;
}
.xiaohao-putIn {
	position: relative;
	width: 100%;
	clear: both;
}
.xiaohao-putIn > p:nth-of-type(1) {
	position: relative;
	width: 40%;
	font-family: PingFangSC-Regular;
	font-size: 3.2vw;
	color: #9b9b9b;
	line-height: 7vw;
}
.xiaohao-putIn > p:nth-of-type(2) {
	position: relative;
	width: 60%;
	font-family: PingFangSC-Regular;
	font-size: 3.2vw;
	color: #9b9b9b;
	line-height: 7vw;
}
.num-putIn {
	color: #00c6a1;
	margin-left: 1.5vw;
}
.dataNum-putIn {
	position: relative;
	width: 100vw;
	padding: 2vw 4vw 0;
	background: #fff;
}
.numBox-putIn {
	position: relative;
	/* width: 100%; */
	overflow: auto;
}
.numBox-putIn-Box {
	position: relative;
	width: 100%;
	padding: 2vw 0 0vw 0;
}
.numPutIn-items {
	position: relative;
	width: 11%;
	margin-left: 22upx;
}
.items1-putIn {
	font-family: PingFang-SC-Medium;
	font-size: 3.73vw;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 5vw;
}
.items2-putIn {
	font-family: PingFangSC-Light;
	font-size: 3.2vw;
	color: #9b9b9b;
	letter-spacing: 0;
	line-height: 4vw;
	
}
.rights{
	width: 92upx;
	height: 36upx;
	float: left;
	margin-top: 12upx;
	margin-left: 20upx;
}
.rights>image{
	width: 100%;
	height: 100%;
}
</style>
