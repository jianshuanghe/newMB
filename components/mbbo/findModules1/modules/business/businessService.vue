<template>
	<div class="content">
		<div class="goods-box">
			<div class="goods-box" v-for="(itme,index) in arr" :key="index"  @tap="gotocloud(itme.id)">
				<div class="describe-text left">
					<div class="title-box">
						<p class="">{{ itme.title }}</p>
					</div>
					<div class="location">
						<div class="loca-text left">{{itme.slogan}}</div>
						<div class="clear"></div>
					</div>
					<div class="price">
						<p class="price-text">¥{{itme.moneyStr}}/{{i18n.month}}</p>
					</div>
					<div class="member-price">
						<p class="member-price-text">会员最低价 ¥{{itme.vipMoneyStr}}/{{i18n.month}}</p>
					</div>
				</div>
				<div class="describe-img left"><img :src="itme.banner01" alt="" class="" /></div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
	name: 'goodsOne',
	data() {
		return {
			arr:[],
		};
	},
	props: {
		msgDatas: {
			type: Object
		}
	},
	computed: {
		i18n () {
		  return this.$t('listModules')  
		},
	},
	created() {
		this.arr.push(this.msgDatas)
	},
	mounted() {},
	methods: {
		...mapMutations({
		}),
		gotocloud(e){
			console.log('to慧聪云详情')
			uni.navigateTo({
				url:'/modules/find/findlist/find-cloud?id='+e
			})
		},
	}
};
</script>

<style scoped>
.content {
	position: relative;
	/* padding: 0vw 4vw; */
	background: #fff;
	margin-bottom: 1.5vw;
	width: 100%;
}
.goods-box {
	position: relative;
	width: 100%;
}
.describe-text {
	width: 67%;
	float: left;
}
.describe-img {
	width: 226upx;
	height: 166upx;
	float: right;
}
.describe-img > img {
	width: 100%;
	height: 100%;
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
	font-weight: blod;
}
.location {
	position: relative;
	width: 90%;
	/* padding: 1.5vw 0 1vw 0; */
	transform: scale(0.9);
	margin-left: -3.5vw;
}
 .icon {
	position: relative;
	width: 4vw;
}
 .icon > img {
	position: relative;
	width: 3vw;
	height: 4.5vw;
	margin-top: 0.8vw;
}
.loca-text {
	font-family: PingFang-SC-Medium;
	width: 103%;
	position: relative;
	font-size: 3.2vw;
	line-height: 5vw;
	margin-left: 5upx;
	color: #9b9b9b;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.price {
	position: relative;
	width: 100%;
}
.price > p {
	font-family: PingFang-SC-Bold;
	position: relative;
	width: 100%;
	font-size: 3.5vw;
	line-height: 5vw;
	color: #2e2e30;
	margin-top: 10upx;
	font-weight: bold;
}
.member-price{
	position: relative;
	width: 100%;
}
.member-price > p {
	font-family: PingFang-SC-Bold;
	position: relative;
	width: 100%;
	font-size: 20upx;
	color: #FAB100;
	line-height: 5vw;
}
</style>
