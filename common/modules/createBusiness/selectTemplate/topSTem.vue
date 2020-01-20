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
				clickItemsIndex: 1 ,// 默认展示全部
				tabList: [
					{
						text: '全部',
						id: 1
					},
					{
						text: '产品',
						id: 2
					},
					{
						text: '定制',
						id: 3
					},
					{
						text: '资讯',
						id: 4
					}
				]
			};
		},
		components: {
			topBox
		},
		computed: {
			...mapGetters(['SELECTTEMPLATERHX'])
		},
		watch: {
			SELECTTEMPLATERHX: {
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
				setSelectTemplateIndexRHX: 'setSelectTemplateIndexRHX'
			}),
			clikeResuleTab (e) {
				console.log(e, '切换搜索结果tab');
				this.clickItemsIndex = e;
				this.$store.commit('setSelectTemplateIndexRHX', this.clickItemsIndex); // 更新setSelectTemplateIndexRHX
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
		width: 100%;
		margin-top: 10upx;
		padding-left: 3%;
	}
	.RT-box{
		position: relative;
		width: 20%;
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
