<template>
	<view class="news-Unread" v-if="this.num == 1 && this.shu.allCount !== 0">
		<view class="news-Unread-weidu">
			您有{{shu.allCount}}条消息未读<image :src="dels" @tap="del"></image>
		</view>
	</view>
</template>

<script>
	import dels from '@/static/mbcImg/my/ti.png';
	import {
		mapMutations,
		mapGetters
	} from 'vuex';
	export default {
		data() {
			return {
				num:1,
				dels:dels,
				shu:[]
			}
		},
		components: {
			
		},
		watch: {
			GET_NEWS: {
				handler(a, b) {
					console.log(a, b)
					this.shu = a.num;
					console.log(this.shu)
				},
				deep: true
			},
		
		},
		
		computed: {
			i18n () {
			  return this.$t('News')  
			},
			...mapGetters(['GET_NEWS'])
		},
		methods: {
			del(){
				this.num = 0;
			},
		}
		
	}
</script>

<style>
	.news-Unread{
		width: 100%;
		height: 60upx;
		background: #FEEEC7;
	}
	.news-Unread-weidu{
		width: 90%;
		height: 100%;
		margin: 0 auto;
		font-size: 24upx;
		color: #FAB100;
		line-height: 60upx;
		position: relative;
	}
	.news-Unread-weidu>image{
		width: 30upx;
		height: 30upx;
		position: absolute;
		right: 0;
		top: 14upx;
	}
</style>
