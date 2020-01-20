<template>
	<view class="information">
		<view v-for="(item, index) in arr" :key="index">
			<view class="information-hea">
				<view class="information-hea-ON">{{ item.title | ellipsis}}</view>
				<view class="information-hea-img" v-if="item.banner01 !== ''"><image :src="item.banner01"></image></view>
				<view class="information-hea-TS">
					<view>{{ item.labelStr }}</view>
					<!-- <view>{{item.userName}}</view> -->
					<view>{{ item.createTimeStr }}</view>
				</view>
			</view>
			<view class="myproduct-list-edit">
				<!-- 看过 -->
				<view class="product-book-BA one" v-if="item.isInfo==0">
					<image :src="look"></image>
					<span>{{item.infoCount}}</span>
				</view>
				<view class="product-book-BA one" v-if="item.isInfo==1">
					<image :src="looks"></image>
					<span>{{item.infoCount}}</span>
				</view>
				<!-- 电话 -->
				<view class="product-book-BA" @tap="playphone(item.userPhone)" v-if="item.isTel==0">
					<image :src="phone"></image>
					<span>{{item.telCount}}</span>
				</view>
				<view class="product-book-BA" @tap="playphone(item.userPhone)" v-if="item.isTel==1">
					<image :src="phones"></image>
					<span>{{item.telCount}}</span>
				</view>
				<!-- 留言 -->
				<view class="product-book-BA" v-if="item.isMsg==0" @tap="liuyan(item.id,item.type)">
					<image :src="liu"></image>
					<span>{{item.msgCount}}</span>
				</view>
				<view class="product-book-BA" v-if="item.isMsg==1" @tap="liuyan(item.id,item.type)">
					<image :src="lius"></image>
					<span>{{item.msgCount}}</span>
				</view>
				<!-- 点赞 -->
				<view class="product-book-BA" v-if="item.isLike==0" @tap="dianzan(item.id,item.type)">
					<image :src="zan"></image>
					<span>{{item.likeCount}}</span>
				</view>
				<view class="product-book-BA" v-if="item.isLike==1">
					<image :src="zanss"></image>
					<span>{{item.likeCount}}</span>
				</view>
				<!-- 收藏 -->
				<view class="product-book-BA shou" v-if="item.isFollow==0" @tap="shoucang(item.id,item.type)">
					<image :src="shou"></image>
					<span>{{item.followCount}}</span>
				</view>
				<view class="product-book-BA shou" v-if="item.isFollow==1" @tap='shoucang()'>
					<image :src="shous"></image>
					<span>{{item.followCount}}</span>
				</view>
				<!-- 分享 -->
				<view class="product-book-BA right shou" v-if="item.isShare==0">
					<image :src="fen"></image>
					<span>{{item.isShare}}</span>
				</view>
				<view class="product-book-BA right shou" v-if="item.isShare==1">
					<image :src="fens"></image>
					<span>{{item.isShare}}</span>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
//看過 電話 聊天 點讚..
import zan from '@/static/mbcImg/my/zan.png';
import look from '@/static/mbcImg/my/look.png';
import phone from '@/static/mbcImg/my/phone.png';
import liu from '@/static/mbcImg/my/liu.png';
import shou from '@/static/mbcImg/my/shou.png';
import fen from '@/static/mbcImg/my/fen.png';
import zanss from '@/static/mbcImg/my/zanss.png';
import looks from '@/static/mbcImg/my/looks.png';
import phones from '@/static/mbcImg/my/phones.png';
import lius from '@/static/mbcImg/my/lius.png';
import shous from '@/static/mbcImg/my/shous.png';
import fens from '@/static/mbcImg/my/fens.png';
//結束
export default {
	data() {
		return {
			zan: zan,
			look: look,
			phone: phone,
			liu: liu,
			shou: shou,
			fen: fen,
			arr: [],
			zanss: zanss,
			looks: looks,
			phones: phones,
			lius: lius,
			shous: shous,
			fens: fens,
		};
	},
	props: {
		msgDatas: {
			type: Object
		}
	},
	computed: {},
	filters: {
		ellipsis: function(value) {
			if (!value) return '';
			if (value.length > 20) {
				return value.slice(0, 20) + '...';
			}
			return value;
		}
	},
	created() {
		this.arr.push(this.msgDatas);
	},
	mounted() {},
	methods: {
		// 电话
		playphone(e) {
			uni.makePhoneCall({
				phoneNumber: e //仅为示例
			});
		}
	}
};
</script>

<style>
.information {
	width: 100%;
	min-height: 160upx;
}
.information-hea {
	position: relative;
	width: 100%;
	min-height: 102upx;
	display: flex;
	justify-content: space-between;
}
.information-hea-ON {
	font-size: 34upx;
	color: #2e2e30;
	line-height: 46upx;
}
.information-hea-img {
	min-width: 226upx;
	height: 166upx;
}
.information-hea-img > image {
	width: 100%;
	height: 100%;
}
.information-hea-TS {
	position: absolute;
	bottom: 0upx;
}
.information-hea-TS > view:nth-of-type(1) {
	width: 52upx;
	height: 28upx;
	text-align: center;
	line-height: 28upx;
	border: 2upx solid #3893ff;
	border-radius: 4upx;
	font-size: 20upx;
	color: #3893ff;
	float: left;
}
.information-hea-TS > view:nth-of-type(2) {
	font-size: 22upx;
	color: #9b9b9b;
	float: left;
	margin-left: 10upx;
	margin-top: -4upx;
}
.information-hea-TS > view:nth-of-type(3) {
	font-size: 22upx;
	color: #9b9b9b;
	float: left;
	margin-left: 30upx;
	margin-top: -4upx;
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
