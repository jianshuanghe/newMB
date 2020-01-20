<template>
	<view class="Trend-content">
		<view class="title-box">
			<view class="title left"><p class="">{{i18n.kanban_title}}</p></view>
			<view class="screen-date left" @tap="goToDataReport">
				<p class="">
					数据详情
					<span class="right-arrow"><img :src="rightArrow" alt="" class="rightArrow" /></span>
				</p>
			</view>
			<view class="clear"></view>
		</view>
	</view>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
	components: {},
	data() {
		return {
			
			rightArrow: this.Static+'home/extendManageList/rightArrow.png'
			
		};
	},
	computed: {
		i18n () {
		  return this.$t('extendManageList')  
		},
		...mapGetters(['TRENDKANBAN'])
	},
	created() {
		
	},
	mounted() {},
	methods: {
		...mapMutations({
			setTrendKan: 'setTrendKan',
			setLoadingShow: 'setLoadingShow',
			setLoadingText: 'setLoadingText'
		}),
		goToDataReport () {
			console.log('to数据详情');
			uni.navigateTo({
				url: '/modules/aLittle/dataReport/dataReport'
			});
		}
	}
};
</script>

<style>
	
.content {
	position: relative;
	width: 100vw;
	margin-top: 2vw;
}
.data-box {
	position: relative;
}
.kanban-box {
	position: relative;
	padding: 3vw;
	margin: auto;
	padding-top: 2vw;
	margin-bottom: 2vw;
	background: #fff;
}
.title-box {
	position: relative;
	width: 100%;
}
.title {
	position: relative;
}
.title > p {
	position: relative;
	width: 100%;
	font-family: PingFang-SC-Bold;
	font-size: 4.26vw;
	color: #2e2e30;
	line-height: 6vw;
}
.screen-date {
	position: relative;
	width: 70%;
	float: right;
}
.screen-date > p {
	position: relative;
	width: 100%;
	text-align: right;
	ont-family: PingFangSC-Regular;
	font-size: 3.2vw;
	color: #9b9b9b;
	text-align: right;
	line-height: 6vw;
}
.screen-item2 {
	color: #ff4d6a;
	text-decoration: underline;
}
.screen-item1 {
	color: #02c2a2;
	text-decoration: underline;
}
.vs {
	color: #000 !important;
}
.right-arrow {
	position: relative;
	width: 2vw;
	height: 2vw;
}
.tongji-box {
	position: relative;
	width: 100%;
	overflow: hidden;
	padding: 3vw 5px;
}
.rightArrow {
	position: relative;
	width: 2.5vw;
	height: 2.5vw;
}
</style>
