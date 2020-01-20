<template>
	<div class="content">
		<div class="goods-box">
			<div class="goods">
				<div class="goods-img left" align="center" v-for="(items, index) in msgDatas.adveLists" :key="index">
					<div class="img-box-g"><img :src="items.banner01" alt="" class="Middle" /></div>
					<p class="goods-name">{{ items.title }}</p>
					<div class="price">
						<p class="price-text" v-if="items.custType === '1'">
							<span class="">￥{{ items.minMoeny || 0 }}</span>
							-
							<span class="">{{ items.maxMoeny || 0 }}</span>
						</p>
						<p class="price-text" v-if="items.custType === '0'">{{ i18n.price_text }}</p>
					</div>
					<div class="lianxi-box">
						<p class="">{{ i18n.lianxi }}</p>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
		<div class="line"></div>
	</div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
	name: 'banner',
	data() {
		return {
			address:  this.Static+'home/flowInlet/address.png'
		};
	},
	props: {
		msgDatas: {
			type: Object
		}
	},
	computed: {
		i18n() {
			return this.$t('listModules');
		},
		...mapGetters([''])
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
	/* width: 100vw; */
	/* padding: 0vw 4vw; */
	background: #fff;
	margin-bottom: 1.5vw;
}
.goods-box {
	position: relative;
	width: 100%;
	padding: 2vw 0 2vw 0;
}
.goods {
	position: relative;
	width: 100%;
}
.goods-img {
	position: relative;
	width: 33.3333%;
}
.img-box-g {
	position: relative;
	width: 100%;
	height: 20vw;
}
.img-box-g > img {
	position: relative;
	max-width: 80%;
	max-height: 100%;
	display: table-cell;
	vertical-align: middle;
	position: relative;
	margin: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	-webkit-transform: translate(-50%, -50%);
}
.goods-name {
	position: relative;
	width: 100%;
	text-align: center;
	font-family: PingFang-SC-Medium;
	font-size: 3.7vw;
	color: #2e2e30;
	line-height: 5vw;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.price {
	position: relative;
	width: 100%;
	margin-bottom: 1vw;
	height: 6vw;
}
.price > p {
	font-family: PingFang-SC-Bold;
	position: relative;
	width: 100%;
	font-size: 3.2vw;
	line-height: 4vw;
	color: #2e2e30;
}
.lianxi-box {
	position: relative;
	width: 88%;
	border: 1px solid #02c2a2;
	height: 6.9vw;
	/* float: right; */
	border-radius: 1px;
}
.lianxi-box > p {
	position: relative;
	width: 100%;
	text-align: right;
	font-family: PingFang-SC-Medium;
	font-size: 3vw;
	color: #02c2a2;
	text-align: center;
	line-height: 6.5vw;
}
</style>
