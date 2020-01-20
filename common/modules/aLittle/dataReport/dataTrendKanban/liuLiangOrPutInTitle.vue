<template>
	<view class="resuleTab-content1">
		<view class="resuleTab">
			<view class="resuleTab-box">
				<view class="left RT-box" @tap="clikeResuleTab(items.id)" v-for="(items, index) in i18n.tabList" :key='index'>
					<view :class="clickItemsIndex === items.id ? 'RT-box-top active-tap' : 'RT-box-top'">{{items.text}}</view>
					<view class="RT-box-bot" v-if='clickItemsIndex === items.id'></view>
				</view>
				<view class="clear"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				clickItemsIndex: ''// 默认展示综合
			};
		},
		components: {},
		computed: {
			i18n () {
			  return this.$t('extendManageList')  
			},
			...mapGetters(['GET_ALITTLE'])
		},
		watch: {
			GET_ALITTLE: {
				handler (a, b) {
					this.clickItemsIndex = a.liuLiangOrPutInTitle2; // 切换的tab
				},
				deep: true
			}
		},
		created() {
			this.clickItemsIndex=this.GET_ALITTLE.liuLiangOrPutInTitle2
		},
		mounted() {
		},
		methods: {
			...mapMutations({
				setLiuLiangOrPutInTitle: 'setLiuLiangOrPutInTitle'
			}),
			clikeResuleTab (e) {
				console.log(e, '切换setLiuLiangOrPutInTitle');
				this.clickItemsIndex = e;
				this.$store.commit('setLiuLiangOrPutInTitle2', this.clickItemsIndex); // 更新setLiuLiangOrPutInTitle
			}
		}
	};
</script>

<style>
	.resuleTab-content1{
		width: 750upx;
		background: #FFFFFF;
		z-index: 101;
	}
	.resuleTab{
		position: relative;
		width: 100%;
		padding-bottom: 10upx;
	}
	.resuleTab-box{
		position: relative;
		width: 70%;
		margin-top: 10upx;
		margin: auto;
	}
	.RT-box{
		position: relative;
		width: 50%;
	}
	.active-tap{
		font-size: 34upx !important;
		color: #2E2E30 !important;
		font-weight: bold;
	}
	.RT-box-top{
		font-family: PingFang-SC-Bold;
		font-size: 32upx;
		color: #5D5D5D;
		letter-spacing: 0;
		text-align: center;
		line-height: 54upx;
		margin: 6upx 0;
		
	}
	.RT-box-bot{
		margin-top: 10upx;
		background: #02C2A2;
		border-radius: 100px;
		position: relative;
		width: 40upx;
		height: 4upx;
		margin: auto;
	}
</style>
