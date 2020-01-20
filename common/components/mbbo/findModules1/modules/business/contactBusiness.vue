<template>
	<div class="content">
		<div class="contact-box">
			<div class="cont-text left">
				<p class="cont-title">{{ msgDatas.title }}</p>
				<p class="cont-describe">{{ msgDatas.content || '这里是说明书介绍这里是说明书介绍这里是说明书介绍这里是说明书介绍' }}</p>
			</div>
			<div class="cont left">
				<div class="lianxi-box"><p class="">{{i18n.lianxi}}</p></div>
			</div>
			<div class="clear"></div>
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
		...mapMutations({
		})
	}
};
</script>

<style scoped>
.content {
	position: relative;
	/* width: 100vw;
	padding: 4vw 4vw; */
	background: #fff;
	margin-bottom: 1.5vw;
}
.contact-box {
	position: relative;
	width: 100%;
	padding-bottom: 3vw;
}
.cont-text {
	position: relative;
	width: 70%;
}
.cont-title {
	position: relative;
	width: 100%;
	font-size: 4.5vw;
	font-family: PingFang-SC-Medium;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 9vw;
	overflow: hidden;
	-o-text-overflow: ellipsis;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.cont-describe {
	position: relative;
	width: 100%;
	ont-family: PingFang-SC-Medium;
	font-size: 4vw;
	color: #9b9b9b;
	text-align: justify;
	line-height: 4.8vw;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
	max-height: 9.6vw;
}
.cont {
	position: relative;
	width: 30%;
}
.lianxi-box {
	position: relative;
	width: 78%;
	border: 1px solid #02c2a2;
	height: 8vw;
	float: right;
	border-radius: 1vw;
	margin-top: 5vw;
}
.lianxi-box > p {
	position: relative;
	width: 100%;
	text-align: right;
	font-family: PingFang-SC-Medium;
	font-size: 3.75vw;
	color: #02c2a2;
	text-align: center;
	line-height: 8vw;
}
</style>
