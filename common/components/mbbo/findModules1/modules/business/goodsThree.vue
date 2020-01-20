<template>
	<div class="content">
		<div class="goods-box">
			<div class="">
				<div class="describe-text left">
					<div class="title-box">
						<p class="">{{ msgDatas.title }}</p>
					</div>
					<div class="location" v-if="msgDatas.address !== '未选择省市区地址信息！'">
						<div class="icon left"><img :src="address" alt="" class="" /></div>
						<div class="loca-text left">{{ msgDatas.address }}</div>
						<div class="clear"></div>
					</div>
					<div class="price">
						<p class="price-text" v-if="msgDatas.custType === '1'">
							<span class="">￥{{ msgDatas.minMoeny || 0 }}</span>
							-
							<span class="">{{ msgDatas.maxMoeny || 0 }}</span>
						</p>
						<p class="price-text" v-if="msgDatas.custType === '0'">{{i18n.price_text}}</p>
					</div>
					<div class="norms">
						<div class="ensure">
							<div class="ensure-item left color" v-for="(items, index) in typeNames" :key="index">
								<p class="">{{ items }}</p>
							</div>
							<div class="clear"></div>
						</div>
					</div>
				</div>
				<div class="describe-img left"><img :src="msgDatas.banner01" alt="" class="" /></div>
				<div class="clear"></div>
			</div>
		</div>
		<div class="line"></div>
	</div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
	name: 'goodsOne',
	data() {
		return {
			address:  this.Static+'home/flowInlet/address.png',
			typeNames: ['48小时发货', '材质保障', '买家保障']
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
	created() {},
	mounted() {},
	methods: {
		...mapMutations({})
	}
};
</script>

<style scoped>
.content {
	position: relative;
	/* width: 100vw;
	padding: 2vw 4vw; */
	background: #fff;
	margin-bottom: 1.5vw;
}
.goods-box {
	position: relative;
	width: 100%;
	padding: 2vw 0 2vw 0;
}
.describe-text {
	position: relative;
	width: 70%;
}
.describe-img {
	position: relative;
	width: 30%;
	height: 20vw;
}
.describe-img > img {
	max-width: 100%;
	max-height: 100%;
	display: table-cell;
	vertical-align: middle;
	margin: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	-webkit-transform: translate(-50%, -50%);
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
	/* display: -webkit-box; */
	/* -webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden; */
	overflow: hidden;
	-o-text-overflow: ellipsis;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.location {
	position: relative;
	width: 100%;
	/* padding: 1.5vw 0 1vw 0; */
	transform: scale(0.9);
	margin-left: -3.5vw;
}
.location .icon {
	position: relative;
	width: 4vw;
}
.location .icon > img {
	position: relative;
	width: 3vw;
	height: 4.5vw;
	margin-top: 0.8vw;
}
.loca-text {
	font-family: PingFang-SC-Medium;
	width: 90%;
	position: relative;
	font-size: 3.2vw;
	line-height: 5vw;
	color: #9b9b9b;
}
.norms {
	position: relative;
	width: 100%;
}
.norms-title {
	position: relative;
	width: 14%;
}
.norms-title > p {
	position: relative;
	width: 100%;
	font-size: 2.6vw;
	line-height: 4vw;
	color: #02c2a2;
	border: 1px solid #02c2a2;
	text-align: center;
}
.norms-text {
	position: relative;
	width: 80%;
}
.norms-text > p {
	position: relative;
	width: 100%;
	font-size: 2.8vw;
	line-height: 4vw;
	font-family: PingFang-SC-Medium;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	padding-left: 1vw;
}
.price {
	position: relative;
	width: 100%;
	margin-bottom: 3vw;
	margin-top: 2vw;
}
.price > p {
	font-family: PingFang-SC-Bold;
	position: relative;
	width: 100%;
	font-size: 3.5vw;
	line-height: 7vw;
	color: #2e2e30;
}
.ensure {
	position: relative;
	width: 145%;
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
</style>
