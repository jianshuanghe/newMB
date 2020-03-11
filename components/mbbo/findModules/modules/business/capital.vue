<template>
	<view class="financeItems-content" >
		<view class="FI-content" @tap="gotocapital(item.id)" v-for="(item,index) in arr" :key="index">
			<view class="FI-box-cont">
				<view class="FI-top">
					<view class="left FI-t-left">
						<image :src="msgDatas.projLogo"></image>
					</view>
					<view class="left FI-t-cont">
						<view class="FI-t-title">
							<view class="title left">{{msgDatas.projName}}</view>
							<view class="titlesa">{{msgDatas.slogan}}</view>
							<view class="clear"></view>
						</view>
						<!-- <view class="FI-t-ins">{{msgDatas.projSlogan}}asd</view> -->
					</view>
					<!-- <view class="right FI-t-right">
						<view class="FI-t-money">
							<text class="money">{{msgDatas.moneyStr }}</text>
						</view>
						<view class="FI-t-ins2">{{msgDatas.financingStr}}</view>
					</view> -->
					<view class="clear"></view>
				</view>
				<view class="FI-modules" v-if="msgDatas.typeNames.length!==0">
					<text class="modules-items-FI left"  v-for="(items,index) in msgDatas.typeNames" :key="index">{{items}}</text>
				</view>
				<view class="FI-cont" v-if="msgDatas.banner01!==''">
					<view class="ImageBox1">
						<image :src="msgDatas.banner01"  mode='center'></image>
					</view>
				</view>
				<!-- <view class="FI-cont-imgMore" v-if="msgDatas.imgs.length > 2" >
					<view class="imageBox left" v-for="(items,index) in msgDatas.imgs" :key="index" v-if="index < 3">
						<image :src="items.imgName" mode='center'></image>
					</view>
					<view class="clear"></view>
				</view> -->
				<view class="FI-BQ">
					<view>{{msgDatas.labelStr}}</view>
					<view>{{msgDatas.createTimeStr}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex';
	export default {
	    data () {
			return {
				arr:[],
			};
	    },
		props: ['msgDatas'],
		computed: {
			i18n () {
			  return this.$t('listModules')  
			},
		},
		watch: {
			USERACTIVE: {
				handler (a, b) {
					this.getClickRecord();
				},
				deep: true
			}
		},
		filters:{
			moneyInt(val) {
				return val.split('.')[0]
			}
		},
		created() {
			this.arr.push(this.msgDatas)
		},
		mounted() {
			
		},
	    methods: {
			gotocapital(e){
				console.log('to陌拜资本详情');
				uni.navigateTo({
					url:'/modules/find/findlist/find-capital?id='+e
				})
			},
	    }
	};
</script>

<style>
	.financeItems-content{
		position: relative;
		width: 690upx;
		margin-top: 30upx;
		background: #fff;
	}
	.FI-content{
		position: relative;
		width: 100%;
	}
	.FI-top{
		position: relative;
		width: 100%;
	}
	.FI-t-left{
		position: relative;
		width: 80upx;
		height: 80upx;
		margin-right: 20upx;
	}
	.FI-t-left>image{
		position: relative;
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
	}
	.FI-t-cont{
		position: relative;
		max-width: 370upx;
	}
	.FI-t-title{
		position: relative;
		width: 100%;
	}
	.title{
		font-family: simhei !important;
		font-size: 32upx;
		color: #2E2E30;
		letter-spacing: 0;
		line-height: 32upx;
		max-width: 252upx;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		font-weight: bold;
	}
	.inst{
		background: #DDFFF9;
		border-radius: 2upx;
		font-family: PingFangSC-Regular;
		font-size: 18upx;
		color: #00AF92;
		letter-spacing: 0;
		line-height: 27upx;
		top: 2upx;
		/* transform: scale(.8); */
	}
	.titlesa{
		font-size: 22upx;
		color: #9B9B9B;
		padding-top: 10upx;
		width: 400upx;
		height: 25upx;
		position: absolute;
		margin-top: 40upx;
		line-height: 25upx;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.FI-t-ins{
		font-family: PingFangSC-Regular;
		font-size: 24upx;
		color: #9B9B9B;
		line-height: 24upx;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		margin-top: 20upx;
	}
	.FI-t-right{
		position: absolute;
		right: 0;
	}
	.FI-t-money{
		position: relative;
		font-family: PingFangSC-Semibold;
		font-size: 18upx;
		color: #FAB100;
		line-height: 24upx;
		text-align: right;
	}
	.money{
		font-family: PingFangSC-Semibold;
		font-size: 40upx;
		color: #FAB100;
		line-height: 36upx;
	}
	.FI-t-ins2{
		font-family: PingFangSC-Regular;
		font-size: 24upx;
		color: #9B9B9B;
		line-height: 48upx;
		text-align: right;
		margin-top: 6upx;
	}
	.FI-cont{
		position: relative;
		width: 100%;
		margin-top: 26upx;
		
	}
	.FI-cont .ImageBox1{
		position: relative;
		width: 100%;
		height: 340upx;
	},
	.ImageBox1{
		background-image: url('../../../../../static/mbcImg/tabBar/background.png');
		background-size: 100% 100%;
	}
	.FI-cont .ImageBox1>image{
		width: 100%;
		height: 100%;
	},
	.FI-cont-imgMore{
		position: relative;
		width: 720upx;
	}
	.FI-cont-imgMore .imageBox{
		position: relative;
		width: 226upx;
		margin-right: 6upx;
		height: 150upx;
	},
	.FI-cont-imgMore .imageBox>image{
		position: relative;
		    max-width: 100%;
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
	},
	.FI-cont-imgMoreTwo{
		position: relative;
		width: 720upx;
	}
	.FI-cont-imgMoreTwo .imageBox{
		position: relative;
		width: 330upx;
		margin-right: 14upx;
		height: 340upx;
	},
	.FI-cont-imgMoreTwo .imageBox>image{
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
	},
	.FI-modules{
		position: relative;
		width: 100%;
		margin: 20upx 0 14upx 0;
		height: 32upx;
		overflow: hidden;
	}
	.modules-items-FI{
		background: #FFF7E5;
		border-radius: 4upx;
		font-family: PingFangSC-Regular;
		font-size: 18upx;
		color: #FE9D08;
		letter-spacing: 0;
		line-height: 24upx;
		padding: 4upx 8upx;
		margin-right: 10upx;
	}
	.FI-insCd{
		position: relative;
		width: 100%;
		margin: 20upx 0 20upx 0;
		height: 72upx;
	}
	.FI-C-text{
		font-family: PingFangSC-Regular;
		font-size: 24upx;
		color: #5D5D5D;
		line-height: 16px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.FI-BQ{
		width: 97%;
		height: 60upx;
		margin: 0 auto;
	}
	.FI-BQ>view:nth-of-type(1){
		font-size: 20upx;
		color: #9B9B9B;
		width: 52upx;
		height: 28upx;
		border: 2upx solid #9B9B9B;
		border-radius: 4upx;
		float: left;
		margin-top: 26upx;
		line-height: 28upx;
		text-align: center;
	}
	.FI-BQ>view:nth-of-type(2){
		float: left;
		font-size: 22upx;
		color: #9B9B9B;
		margin-left: 10upx;
		margin-top: 22upx;
	}
</style>
