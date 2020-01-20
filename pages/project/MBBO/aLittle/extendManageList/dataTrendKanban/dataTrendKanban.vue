<template>
	<view class="content">
		<view class="data-box">
			<view class="kanban-box">
				<!-- 数据title -->
				<trendTitle></trendTitle>
				<!-- title -->
			</view>
			<!-- tab切换 -->
			<liuLiangOrPutInTitle></liuLiangOrPutInTitle>
			<!-- 数据表 -->
			<div class="Data-box">
				<!-- 流量数据 -->
				<dataTrendLiuLiang v-if='GET_ALITTLE.liuLiangOrPutInTitle === 1'></dataTrendLiuLiang>
				<!-- 投放数据 -->
				<dataTrendPutIn v-if='GET_ALITTLE.liuLiangOrPutInTitle === 2'></dataTrendPutIn>
			</div>
		</view>
	</view>
</template>

<script>
import trendTitle from './trendTitle';
import liuLiangOrPutInTitle from './liuLiangOrPutInTitle';
import dataTrendLiuLiang from './liuLiang/dataTrend';
import dataTrendPutIn from './putIn/dataTrend';
import { mapMutations, mapGetters } from 'vuex';
export default {
	components: {
		trendTitle,
		liuLiangOrPutInTitle,
		dataTrendLiuLiang,
		dataTrendPutIn
	},
	data() {
		return {
			
		};
	},
	computed: {
		...mapGetters(['GET_ALITTLE'])
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
		// 选择时间
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
	/* float: right; */
}
.screen-date > p {
	position: relative;
	width: 100%;
	ont-family: PingFangSC-Regular;
	font-size: 3.2vw;
	color: #9b9b9b;
	text-align: center;
	line-height: 6vw;
}

</style>
