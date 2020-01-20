<template>
	<view class="resuleTab-content">
		<topBox>
			<view class="resuleTab">
				<view class="resuleTab-box">
					<view class="left RT-box" @tap="clikeResuleTab(items.id)" v-for="(items, index) in tabList" :key='items.id'>
						<view :class="clickItemsIndex === items.id ? 'RT-box-top active-tap' : 'RT-box-top'">{{items.text}}</view>
						<!-- <view class="RT-box-bot" v-if='clickItemsIndex === items.id'></view> -->
					</view>
					<view class="clear"></view>
				</view>
			</view>
		</topBox>
	</view>
</template>

<script>
	import topBox from '@/components/mbbo/topBox/topBox';
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				clickItemsIndex: 0 ,// 默认展示全部
				tabList: [
					{
						text: '简单发布',
						id: 0
					},
					{
						text: '详细发布',
						id: 1
					}
				],
				caiGouList: null
			};
		},
		components: {
			topBox
		},
		computed: {
			...mapGetters(['GET_PUBLISH'])
		},
		watch: {
			GET_PUBLISH: {
				handler (a, b) {
					console.log(a, '{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}');
					this.caiGouList = a.publishPurchase.caiGouList;
				},
				deep: true
			}
		},
		created() {
			// console.log(this.GET_PUBLISH.publishPurchase.caiGouList, '++++++++++++++');
			this.caiGouList = this.GET_PUBLISH.publishPurchase.caiGouList;
		},
		mounted() {
		},
		methods: {
			...mapMutations({
				setTempletType: 'setTempletType'
			}),
			clikeResuleTab (e) {
				console.log(e, '切换搜索结果tab');
				this.clickItemsIndex = e;
				this.caiGouList.purcType = String(e);
				this.$store.commit('setCaiGouList', this.caiGouList); // 更新setCaiGouList
				this.$store.commit('setTempletType', this.clickItemsIndex); // 更新setSelectTemplateIndexRHX
			}
		}
	};
</script>

<style>
	.resuleTab-content{
		background: #FFFFFF;
		box-shadow: 0 1px 0 0 #F5F5F5;
	}
	.resuleTab{
		position: relative;
		width: 100%;
		margin-bottom: 10upx;
	}
	.resuleTab-box{
		position: relative;
		width: 88%;
		margin-top: 10upx;
		padding-left: 8%;
	}
	.RT-box{
		position: relative;
		width: 30%;
	}
	.active-tap{
		color: #02C2A2 !important;
	}
	.RT-box-top{
		font-family: PingFangSC-Regular;
		font-size: 32upx;
		color: #9B9B9B;
		letter-spacing: 0;
		text-align: center;
		line-height: 40upx;
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
