<template>
	<view class="resuleTab-content">
		<view class="resuleTab">
			<view class="resuleTab-box">
				<view class="left RT-box" @tap="clikeResuleTab(items.id)" v-for="(items, index) in tabList" :key='items.id'>
					<view :class="clickItemsIndex === items.id ? 'RT-box-top active-tap' : 'RT-box-top'">{{items.text}}</view>
					<view class="RT-box-bot" v-if='clickItemsIndex === items.id'></view>
				</view>
				<view class="clear"></view>
			</view>
		</view>
		<view class="line"></view>
	</view>
</template>

<script>
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				clickItemsIndex: 1 ,// 默认展示综合
				tabList: [
					{
						text: '投放数据总览',
						id: 1
					},
					{
						text: '买家询价单',
						id: 2
					}
				]
			};
		},
		components: {},
		computed: {
			...mapGetters(['GET_FIND'])
		},
		watch: {
			GET_FIND: {
				handler (a, b) {
					this.clickItemsIndex = a.tabItems; // 切换的tab
				},
				deep: true
			}
		},
		created() {
		},
		mounted() {
		},
		methods: {
			...mapMutations({
				setFindTabItems: 'setFindTabItems'
			}),
			clikeResuleTab (e) {
				console.log(e, '切换搜索结果tab');
				this.clickItemsIndex = e;
				this.$store.commit('setFindTabItems', this.clickItemsIndex); // 更新setFindTabItems
			}
		}
	};
</script>

<style>
	.resuleTab-content{
		position: fixed;
		width: 750upx;
		background: #FFFFFF;
		z-index: 101;
	}
	.resuleTab{
		position: relative;
		width: 100%;
		margin-bottom: 10upx;
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
		line-height: 40upx;
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
