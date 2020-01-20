<template>
	<div class="content-690">
		<div class="businessFollow">
			<view class="FI-top">
				<view class="left FI-t-left">
					<image :src="list.banner01"></image>
				</view>
				<view class="left FI-t-cont">
					<view class="FI-t-title">
						<view class="title left">{{list.title}}</view>
						<view class="inst left">{{list.fieldCode}}</view>
						<view class="clear"></view>
					</view>
					<view class="FI-t-ins">厂家</view>
				</view>
				<view class="right FI-t-right">
					<view class="FI-t-ins3"> <text class="jiahao">+</text>关注</view>
				</view>
				<view class="clear"></view>
			</view>
		</div>
	</div>
</template>

<script>
	import teled from '@/static/mbcImg/common/userBehavior/teled.png';
	export default {
		name: 'businessFollow',
		props:{
			// 列表菜单
			list:{
				type: Object,
				default: function(e) {
					return {
						aCode: null,
						address: "河南焦作市沁阳市",
						adveLists: null,
						fieldCode: '企业服务',
						banner01: "http://img03.iambuyer.com/imgup/upload/images/2019/08/22/Z4frghcjjc2BByuJS0dBVCTaWD1ttPQYXIOC2w61Gh3xcG8Zhcjjc2B9iWQFZvR9yiM49t97EzF6.jpeg",
						banner02: "http://img04.iambuyer.com/imgup/upload/images/2019/08/22/X3K7ivknlVIqwm0aZIXLOLSSx7ll0hcjjc2ByZhmI2j4EtMBjgYQKHhcjjc2Bt1ZzI4VxjPmKVvw.jpeg",
						banner03: "http://img08.iambuyer.com/imgup/upload/images/2019/08/22/VIArGxiT0MMwsdrOCKVcKZXrGnNZX5ZDFat2E8l3nBcf7uIOOpWvWdYI8l9hShcjjc2Ftu.jpeg",
						cCode: null,
						contactTelphone: "13838324646",
						content: "",
						custType: "0",
						infoCount: 44,
						instId: 1203,
						likeCount: 1,
						maxMoeny: null,
						minMoeny: null,
						msgCount: 2,
						num: "2",
						pCode: null,
						shareCount: 0,
						telCount: 2,
						title: "多款式电动钢筋剪手提式液压钢筋剪切断器",
						type: "1",
						typeNames: null,
						userId: null
					}
				}
			}
		},
		data() {
			return {
				teled: teled,
				activeIndex:"0"
			};
		},
		methods:{
			getActive(index){
				this.activeIndex=index;
				this.$emit("changes",this.activeIndex);
			}
		}
	};
</script>

<style>
	.businessFollow{
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
		max-width: 472upx;
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
		max-width: 320upx;
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
		padding: 4upx 8upx 6upx 6upx;
		margin-left: 10upx;
		top: 2upx;
		/* transform: scale(.8); */
	}
	.FI-t-ins{
		font-family: PingFangSC-Regular;
		font-size: 24upx;
		color: #9B9B9B;
		line-height: 24upx;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		margin-top: 15upx;
	}
	.FI-t-right{
		position: absolute;
		right: 0;
	}
	.jiahao{
		color: #02C2A2;
		font-size: 28upx;
	}
	.FI-t-ins3{
		font-family: PingFang-SC-Medium;
		font-size: 28upx;
		color: #2E2E30;
		letter-spacing: 0;
	}
</style>
