<template>
	<div class="content">
		<div class="contMMBO" @tap="dianji">
			<div class="">
				<div class="title-box">
					<p class="">{{ msgDatas.title }}</p>
				</div>
				<div class="ensure">
					<div class="ensure-item left color" v-for="(items, index) in typeNames" :key="index">
						<p class="">{{ items }}</p>
					</div>
					<div class="clear"></div>
				</div>
				<div class="location" v-if="msgDatas.address !== '未选择省市区地址信息！'">
					<div class="icon left"><img :src="address" alt="" class="" /></div>
					<div class="loca-text left">{{ msgDatas.address }}</div>
					<div class="clear"></div>
				</div>
				<div class="banner-box"><img :src="msgDatas.banner01" alt="" class="" /></div>
				<div class="banner-bottom">
					<div class="banner-bottom-one">供应</div>
					<div class="banner-bottom-two">2019-12-12 18:00</div>
				</div>
			</div>
			<view class="myproduct-list-edit">
				<!-- 看过 -->
				<view class="product-book-BA one">
					<image :src="look"></image>
					<span>88</span>
				</view>
				<!-- 电话 -->
				<view class="product-book-BA" @tap="playphone(pro.tel)">
					<image :src="phone"></image>
					<span>99</span>
				</view>
				<!-- 留言 -->
				<view class="product-book-BA">
					<image :src="liu"></image>
					<span>32</span>
				</view>
				<!-- 点赞 -->
				<view class="product-book-BA">
					<image :src="zan"></image>
					<span>23</span>
				</view>
				<!-- 收藏 -->
				<view class="product-book-BA shou">
					<image :src="shou"></image>
					<span>23</span>
				</view>
				<!-- 分享 -->
				<view class="product-book-BA right shou">
					<image :src="fen"></image>
					<span>43</span>
				</view>
			</view>
		</div>
	</div>
</template>

<script>
import address from '@/static/mbcImg/home/flowInlet/address.png';
import { mapMutations, mapGetters } from 'vuex';
//看過 電話 聊天 點讚..
import zan from '@/static/mbcImg/my/zan.png';
import look from '@/static/mbcImg/my/look.png';
import phone from '@/static/mbcImg/my/phone.png';
import liu from '@/static/mbcImg/my/liu.png';
import shou from '@/static/mbcImg/my/shou.png';
import fen from '@/static/mbcImg/my/fen.png';
//結束
export default {
	name: 'banner',
	data() {
		return {
			address: address,
			typeNames: ['48小时发货', '材质保障', '买家保障'],
			zan:zan,
			look:look,
			phone:phone,
			liu:liu,
			shou:shou,
			fen:fen,
		};
	},
	props: ['msgDatas'],
	computed: {
		...mapGetters([''])
	},
	created() {
		
	},
	mounted() {},
	methods: {
		// 电话
		playphone(e){
			uni.makePhoneCall({
				phoneNumber: e //仅为示例
			});
		},
		dianji(){
		}
	}
};
</script>

<style scoped>
.content {
	position: relative;
	padding: 2vw 0vw;
	background: #fff;
	min-height: 630upx;
	margin-bottom: 1.5vw;
}
.title-box {
	position: relative;
	width: 100%;
}
.title-box > p {
	position: relative;
	width: 100%;
	font-size: 4.5vw;
	line-height: 6.5vw;
	color: #2e2e30;
	font-family: PingFang-SC-Medium;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.location {
	position: relative;
	width: 100%;
	/* padding: 1.5vw 0 1vw 0; */
	transform: scale(0.9);
	margin-left: -4.5vw;
}
.location .icon {
	position: relative;
	width: 4vw;
}
.location .icon > img {
	position: relative;
	width: 3vw;
	height: 3.5vw;
	margin-top: 0vw;
}
.loca-text {
	font-family: PingFang-SC-Medium;
	width: 90%;
	position: relative;
	font-size: 3.2vw;
	line-height: 5vw;
	color: #9b9b9b;
}
.ensure {
	position: relative;
	width: 100%;
	margin-top: 1vw;
}
.ensure .ensure-item {
	position: relative;
	margin-bottom: 1vw;
	margin-right: 1.6vw;
}
.ensure .ensure-item > p {
	position: relative;
	/* width: 93%; */
	font-size: 3.2vw;
	line-height: 4.2vw;
	text-align: center;
	padding: 0.2vw 0.5vw 0.2vw 0.5vw;
	/* margin-right: 1.5vw; */
	-webkit-transform: scale(0.8);
	transform: scale(0.8);
}

.color {
	background: #fff7e5;
	font-size: 20upx;
	color: #fe9d08;
}

.banner-box {
	position: relative;
	width: 100%;
	height: 45vw;
	margin-top: 2vw;
	margin-bottom: 2vw;
}
.banner-box > img {
	width: 100%;
	height: 100%;
	/* display: table-cell;
	vertical-align: middle;
	margin: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	-webkit-transform: translate(-50%, -50%); */
}
.banner-bottom {
	width: 100%;
	height: 40upx;
}
.banner-bottom-one {
	height: 40upx;
	width: 60upx;
	text-align: center;
	line-height: 40upx;
	border: 2upx solid #02c2a2;
	font-size: 20upx;
	color: #02c2a2;
	float: left;
	border-radius: 4upx;
}
.banner-bottom-two {
	font-size: 22upx;
	color: #9b9b9b;
	float: left;
	line-height: 40upx;
	margin-left: 20upx;
}
.product-book-BA {
	width: 13.5%;
	height: 26upx;
	margin-top: 20upx;
	line-height: 26upx;
	font-size: 24upx;
	color: #9b9b9b;
	border-right: 2upx solid #e2e2e2;
	float: left;
	margin-left: 22upx;
}
.right {
	border: 0;
}
.one {
	margin-left: 0;
}
.shou > image {
	width: 24upx !important;
	height: 24upx !important;
	margin-top: 0upx !important;
}
.product-book-BA > image {
	width: 24upx;
	height: 20upx;
	margin-top: 2upx;
	display: block;
	float: left;
	margin-left: 10upx;
}
.product-book-BA > span {
	margin-left: 20upx;
	display: block;
	float: left;
}
</style>
