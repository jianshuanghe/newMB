<template>
	<view class="my">
		<!-- 顶部标题 -->
		<div class="guidPage-cont">
			<div class="title-cont my-title">
				<div class="quickBtn-Fd left">
				  <quickBtn></quickBtn>
				</div>
				<div class="search-Fd left">
				  <div class="logoCont">
					  <img :src="imgLogo" alt="" class="imgLogo">
				  </div>
				</div>
			</div>
			<div class="guidContent">
				<div class="title1 top0">为企业提供基于二维码营销的数字化场景工具</div>
				<div class="title2">可在线轻松制作产品说明书、宣传册、名片、pc官网、短视频等九大应用场景并生成二维码，通过二维码快速拓展私域流量，提升营销、售后等管理效率。</div>
				<div class="box1 teshuM"  @click="goToCreateBusiness(1)">
					<image class="img1" :src='img1'></image>
				</div>
				<div class="title1-1 center-p">仅四步完成创建</div>
				<div class="icon1">
					<image class="img2" :src='img2'></image>
				</div>
				<div class="title1-1 center-p">
					完整的产品生态助力企业发展
					<div class="title2-2">8个平台，9大场景，帮助企业全方位提升销售和管理效率</div>
				</div>
				<div class="box1 teshuM1">
					<image class="img1" :src='img3'></image>
				</div>
				<div class="icon1">
					<image class="img2"  :src='img4'></image>
				</div>
				<div class="icon2_1">
					<image class="img3_1"  :src='img5_1'></image>
				</div>
				<div class="icon2_2">
					<image class="img3_2"  :src='img5_2'></image>
				</div>
				<div class="icon2_3">
					<image class="img3_3"  :src='img5_3'></image>
				</div>
				<div class="title1-1 center-p">
					丰富的应用场景
					<div class="title2-2">通过场景化的运营方式，从各方面精准触达客户</div>
				</div>
				<div class="list-box">
					<div class="items" :class="index%2 === 0 ? 'left' : 'right'" v-for="(items, index) in list" :key="index">
						<img :src="items.img" alt="" class="items_img" @click="goToCreateBusiness(items.id)">
					</div>
					<div class="clear"></div>
				</div>
				<div class="title1-1 center-p">
					数字化营销功能模块
					<div class="title2-2">快速、高效帮企业与客户建立信任关系</div>
				</div>
				<div class="icon1">
					<image class="img4" :src='img6'></image>
				</div>
				<div class="title1-1 center-p">
					使用案例
					<div class="title2-2">我们整理了用户的使用案例，供你参考</div>
				</div>
				<div class="qrcode"  v-for="(items, index) in listQrCode" :key="index" @tap="previewImageS(listQrCode, index)">
					<img :src="items.img" alt="" class="img5">
				</div>
			</div>
		</div>
		<!-- 快捷导航 -->
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</view>
</template>

<script>
	import myTitle from "./my/my-list/my-title.vue";
	import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
	import navigation from '@/components/mbbo/navigation/navigation.vue';
	import img1 from '@/static/mbcImg/jiegou/img1.jpg';
	import img2 from '@/static/mbcImg/jiegou/img2.jpg';
	import img3 from '@/static/mbcImg/jiegou/img3.jpg';
	import img4 from '@/static/mbcImg/jiegou/img4.jpg';
	import img5_1 from '@/static/mbcImg/jiegou/img5.1.jpg';
	import img5_2 from '@/static/mbcImg/jiegou/img5.2.jpg';
	import img5_3 from '@/static/mbcImg/jiegou/img5.3.jpg';
	import img6 from '@/static/mbcImg/jiegou/img6.jpg';
	import img7 from '@/static/mbcImg/jiegou/img7.jpg';
	import img8 from '@/static/mbcImg/jiegou/img8.jpg';
	import img1_1 from '@/static/mbcImg/jiegou/img1.1.jpg';
	import img1_2 from '@/static/mbcImg/jiegou/img1.2.jpg';
	import img1_3 from '@/static/mbcImg/jiegou/img1.3.jpg';
	import img1_4 from '@/static/mbcImg/jiegou/img1.4.jpg';
	import img1_5 from '@/static/mbcImg/jiegou/img1.5.jpg';
	import img1_6 from '@/static/mbcImg/jiegou/img1.6.jpg';
	import imgLogo from '@/static/mbcImg/jiegou/imgLogo.jpg';
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				list:[
					{
						id: 1,
						img: img1_1
					},
					{
						id: 2,
						img: img1_2
					},
					{
						id: 3,
						img: img1_3
					},
					{
						id: 4,
						img: img1_4
					},
					{
						id: 5,
						img: img1_5
					},
					{
						id: 6,
						img: img1_6
					}
				],
				listQrCode: [
					{
						id: 1,
						img: img7
					},
					{
						id: 1,
						img: img8
					}
				],
				img1: img1,
				img2: img2,
				img3: img3,
				img4: img4,
				img5_1: img5_1,
				img5_2: img5_2,
				img5_3: img5_3,
				img6: img6,
				img7: img7,
				imgLogo: imgLogo
			}
		},
		components: {
			myTitle,
			quickBtn,
			navigation
		},
		computed: {
			i18n () {
			  return this.$t('Home_title')  
			},
			...mapGetters(['QUICKNAVCO'])
		},
		created() {
		},
		methods:{
			goToCreateBusiness (e) {
				console.log('to选择模版(1/4)');
				if (e < 4){
					uni.navigateTo({
						url: '/modules/createBusiness/selectTemplate'
					});
				}
			},
			previewImageS (e, key) {
				console.log(e, '附件地址');
				let imgList = [];
				e.map((items, index) => {
					imgList.push(items.img)
				});
				uni.previewImage({
					current: imgList[key],
					indicator: "number",
					loop: "true",
					urls:imgList,
					longPressActions: {
						itemList: ['保存图片'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				})
			},
		}
		
	}
</script>

<style>
	.teshuM{
		margin: 104px auto 160px !important;
	}
	.logoCont{
		position: relative;
		width: 123px;
		height: 28px;
		margin: 8px 70px;
	}
	.imgLogo{
		position: relative;
		width: 123px;
		height: 24px;
	}
	.list-box{
		position: relative;
		width: 100%;
	}
	.items{
		background: #FFFFFF;
		box-shadow: 0 2px 12px 0 rgba(46,46,48,0.10);
		height: 123px;
		width: 165px;
		margin-bottom: 12px;
	}
	.items_img{
		height: 123px;
		width: 165px;
	}
	.guidPage-cont{
		background: #FFFFFF;
	}
	.my-title{
		width: 100%;
		height: 88upx;
		background: #FFFFFF;
		border-bottom: 2upx solid #F5F5F5;
		position: fixed;
		top: 0;
		z-index: 999;
	}
	.quickBtn-Fd{
		width: 5%;
		margin-left: 38upx;
	}
	.search-Fd{
		position: relative;
		width: 100%;
		text-align: center;
		line-height: 88upx;
		font-size: 28upx;
		color: #2E2E30;
	}
	.guidContent{
		padding: 50px 0 60px 0;
		width: 690upx;
		margin: auto;
	}
	.title1{
		font-family: PingFangSC-Semibold;
		font-size: 17px;
		color: #2E2E30;
		letter-spacing: 0;
		line-height: 24px;
		position: relative;
		widows: 100%;
		padding: 18px 0;
		font-weight: bold;
	}
	.title1-1{
		font-family: PingFangSC-Semibold;
		font-size: 18px;
		color: #2E2E30;
		letter-spacing: 0;
		line-height: 24px;
		position: relative;
		margin: 46px 0 26px 0;
		font-weight: bold;
	}
	.title2{
		font-family: PingFangSC-Light;
		font-size: 14px;
		color: #2E2E30;
		letter-spacing: 0;
		text-align: justify;
		line-height: 22px;
		position: relative;
		widows: 100%;
		padding: 0px 0;
	}
	.title2-2{
		font-family: PingFangSC-Light;
		font-size: 12px;
		color: #2E2E30;
		letter-spacing: 0;
		text-align: justify;
		line-height: 22px;
		position: relative;
		widows: 100%;
		padding: 8px 0;
		font-weight: 100;
		text-align: center;
	}
	.box1{
		position: relative;
		width: 100%;
		width: 308upx;
		height: 308upx;
		margin: 30px auto;
	}
	.teshuM1{
		position: relative;
		width: 360upx !important;
	}
	.teshuM1 .img1{
		width: 360upx !important;
	}
	.img1{
		position: relative;
		width: 308upx;
		height: 308upx;
		margin: auto;
	}
	.center-p{
		text-align: center;
	}
	.icon1{
		position: relative;
		width: 100%;
		background: #FFFFFF;
		box-shadow: 0 2px 12px 0 rgba(46,46,48,0.10);
	}
	.img2{
		position: relative;
		width: 100%;
		height: 156upx;
	}
	.icon2{
		position: relative;
		width: 100%;
		margin: 45px 0 0 0;
	}
	.img3{
		position: relative;
		width: 100%;
		height: 435px;
	}
	.icon2_1{
		position: relative;
		width: 100%;
		margin: 45px 0 0 0;
	}
	.img3_1{
		position: relative;
		width: 100%;
		height: 370px;
	}
	.icon2_2{
		position: relative;
		width: 100%;
		margin: 45px 0 0 0;
	}
	.img3_2{
		position: relative;
		width: 100%;
		height: 480px;
	}
	.icon2_3{
		position: relative;
		width: 100%;
		margin: 45px 0 0 0;
	}
	.img3_3{
		position: relative;
		width: 100%;
		height: 290px;
	}
	.img4{
		position: relative;
		width: 100%;
		height: 312upx;
	}
	.qrcode{
		position: relative;
		width: 257px;
		height: 358px;
		margin: 24px auto;
	}
	.img5{
		position: relative;
		width: 257px;
		height: 358px;
	}
</style>
