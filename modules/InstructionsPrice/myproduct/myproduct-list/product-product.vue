<template>
	<!-- 我的说明书列表 产品-->
	<view>
		<view class="myproduct-titleall" @tap="hides">
			<span :class="coloe==='1'?'colors':''">{{ message }}</span><image :src="you"></image>
			<!-- 弹出框 -->
			<view class="myproduct-titleall-T" v-if="hiden === 1">
				<view v-for="(items,index) in titles" :key="index" :class="nums==index?'change':''" @tap="change(index)">{{items}}</view>
			</view>
		</view>
		<view class="myproduct-list" @tap="gotomyproducts(pro.instrucId)" v-for="(pro,index) in shu" :key="index">
			<view class="myproduct-list-name">{{pro.instrucTitle}}</view>
			<view class="myproduct-list-time">更新于 {{pro.updateTime}}</view>
			<view class="myproduct-list-img">
				<image :src="pro.bannerImg"></image>
				<!-- 未上线 -->
				<image :src="yi" class="tishis" v-if="pro.instrucState === '0'"></image>
				<!-- 已上线 -->
				<image :src="shag" class="tishis" v-if="pro.instrucState === '1'"></image>
				<!-- 已下架 -->
				<image :src="xia" class="tishis" v-if="pro.instrucState === '2'"></image>
			</view>
			<view class="myproduct-list-edit">
				<!-- 看过 -->
				<view class="product-book-BA one">
					<image :src="look"></image>
					<span>{{pro.pv}}</span>
				</view>
				<!-- 电话 -->
				<view class="product-book-BA" @tap="playphone(pro.tel)">
					<image :src="phone"></image>
					<span>{{pro.telCount}}</span>
				</view>
				<!-- 留言 -->
				<view class="product-book-BA">
					<image :src="liu"></image>
					<span>{{pro.msgCnt}}</span>
				</view>
				<!-- 点赞 -->
				<view class="product-book-BA">
					<image :src="zan"></image>
					<span>{{pro.likeCn}}</span>
				</view>
				<!-- 收藏 -->
				<view class="product-book-BA shou">
					<image :src="shou"></image>
					<span>{{pro.followCount}}</span>
				</view>
				<!-- 分享 -->
				<view class="product-book-BA right shou">
					<image :src="fen"></image>
					<span>{{pro.shareCnt}}</span>
				</view>
			</view>
		</view>
		<view class="meirenkanwo" v-if="shu.length === 0">
			<image :src="kong" mode=""></image>
			您还没有产品说明书！
		</view>
	</view>
</template>

<script>
	import c from '@/static/mbcImg/my/c.png';
	import yi from '@/static/mbcImg/my/yi.png';
	import shag from '@/static/mbcImg/my/shag.png';
	import xia from '@/static/mbcImg/my/xia.png';
	import you from '@/static/mbcImg/my/xiajiao.png';
	import kong from '@/static/mbcImg/my/kong.png';
	//看過 電話 聊天 點讚..
	import zan from '@/static/mbcImg/my/zan.png';
	import look from '@/static/mbcImg/my/look.png';
	import phone from '@/static/mbcImg/my/phone.png';
	import liu from '@/static/mbcImg/my/liu.png';
	import shou from '@/static/mbcImg/my/shou.png';
	import fen from '@/static/mbcImg/my/fen.png';
	//結束
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				c:c,
				yi:yi,
				shag:shag,
				xia:xia,
				zan:zan,
				look:look,
				phone:phone,
				liu:liu,
				shou:shou,
				fen:fen,
				kong:kong,
				titles:['全部','已发布','待发布','已下架'],
				nums:0, //0为全部 1为已发布 2为待发布 3为已下架
				hiden:0, //0为隐藏 1为显示
				you:you,
				tap:0, //控制事件重复触发
				message:'全部',
				coloe:'0',
				filterProducts:[],
				filte:[],
				filter:[],
				list:[],
				list2:[],
				list3:[],
				list4:[],
				shu:[],
				chan:[],
				chan2:[],
			};
		},
		components: {
			
		},
		computed: {
			
		  ...mapGetters(['GET_HOME', 'QUICKNAVCO','GET_MY'])
		},
		created() {
			
			this.product();
		},
		watch: {
			GET_MY: {
				handler(a, b) {
					console.log(a, b)
					this.shu = a.chan;
					console.log(this.shu)
				},
				deep: true
			},
		
		},
		mounted(){
			
			console.log(this.list2)
		},
		methods: {
			gotomyproducts(e){
				console.log('to说明书详情')
				uni.navigateTo({
					url: '/modules/InstructionsPrice/myproduct/product-book/product-books?id='+e,
				});
			},
			product(){//产品
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/instruc?userId='+landRegistLG.user.id+'&page=1&instrucCustType=0', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.chan = response.data.content.list
							this.$store.commit('setchan', this.chan);
							this.list=response.data.content.list
							this.list2=response.data.content.list
							this.list3=response.data.content.list
							this.list4=response.data.content.list
							// this.lists = response.data.content.instKeys
						},
						fail: (error) => {
							uni.hideLoading(); // 隐藏 loading
							uni.showToast({
								title: '网络繁忙，请稍后',
								icon: 'none',
								duration: 1000
							});
							console.log(error, '网络繁忙，请稍后');
						}
					});
				}
			},
			change(index){
				this.nums = index;
				if(index === 0){
					this.message = '全部';
					this.coloe='1';
					this.hiden = 0;
					console.log(this.chan)
					this.$store.commit('setchan', this.chan);
				}else if (index === 1){
					this.message = '已发布';
					this.coloe='1';
					this.hiden = 0;
					for(let i = 0;i<this.list2.length;i++){
						if(this.list2[i].instrucState == 1){
							this.filterProducts.push(this.list2[i]);
						}
					}
					this.$store.commit('setchan', this.filterProducts);
				}else if (index === 2){
					this.message = '待发布';
					this.coloe='1';
					this.hiden = 0;
					for(let a = 0;a<this.list3.length;a++){
						if(this.list3[a].instrucState == 0){
							this.filte.push(this.list3[a]);
						}
					}
					this.$store.commit('setchan', this.filte);
					console.log(this.filte)
				}else if (index === 3){
					this.message = '已下架';
					this.coloe='1';
					this.hiden = 0;
					for(let i = 0;i<this.list4.length;i++){
						if(this.list4[i].instrucState == 2){
							this.filter.push(this.list4[i]);
						}
					}
					this.$store.commit('setchan', this.filter);
				}
				
			},
			hides(){
				if(this.tap === 0){
					this.hiden = 1;
					this.tap = 1;
				}else if(this.tap === 1){
					this.hiden = 0;
					this.tap = 0;
				}
				
			}
		}
	};
</script>

<style>
	.myproduct-list{
		width: 90%;
		height: 660upx;
		margin: 0 auto;
		border-bottom: 2upx solid #F5F5F5;
	}
	.myproduct-list-name{
		font-size: 40upx;
		color: #2E2E30;
		line-height: 64upx;
		padding-top: 40upx;
		width: 100%;
		min-height: 56upx;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.myproduct-list-time{
		font-size: 28upx;
		color: #9B9B9B;
		padding-top: 14upx;
	}
	.myproduct-list-img{
		width: 100%;
		height: 368upx;
		margin-top: 20upx;
		position: relative;
	}
	.myproduct-list-img>image:nth-of-type(1){
		width: 100%;
		height: 100%;
	}
	.tishis{
		width: 100upx;
		height: 100upx;
		position: absolute;
		top: 0;
		right: 0;
	}
	.myproduct-list-edit{
		width: 100%;
		height: 40upx;
		margin-top: 30upx;
	}
	.product-book-BA{
		width: 13.5%;
		height: 26upx;
		margin-top: 20upx;
		line-height: 26upx;
		font-size: 24upx;
		color: #9B9B9B;
		border-right: 2upx solid #E2E2E2;
		float: left;
		margin-left: 22upx;
	}
	.right{
		border: 0;
	}
	.one{
		margin-left: 0;
	}
	.shou>image{
		width: 24upx!important;
		height: 24upx!important;
		margin-top: 0upx !important;
	}
	.product-book-BA>image{
		width: 24upx;
		height: 20upx;
		margin-top: 2upx;
		display: block;
		float: left;
		margin-left: 10upx;
	}
	.product-book-BA>span{
		margin-left: 20upx;
		display: block;
		float: left;
	}
	
	.myproduct-titleall{
		width: 20%;
		height: 50upx;
		font-size: 28upx;
		color: #2E2E30;
		float: right;
		line-height: 88upx;
		text-align: center;
		z-index: 1000;
		position: relative;
		position: fixed;
		top: 0upx;
		right: 0;
	}
	.colors{
		color: #02C2A2!important;
	}
	.myproduct-titleall>image{
		width: 14upx;
		height: 14upx;
		margin-left: 5upx;
	}
	.myproduct-titleall-T{
		width: 300upx;
		height: 438upx;
		background: #2E2E30;
		background:rgba(46,46,48,0.98);
		border-radius: 8upx;
		position: absolute;
		top: 88upx;
		right: 30upx;
	}
	.myproduct-titleall-T>view{
		width: 80%;
		height: 108upx;
		border-bottom: 2upx solid  #444444;
		margin: 0 auto;
		text-align: center;
		line-height: 108upx;
		font-size: 28upx;
		color: #FFFFFF;
	}
	.myproduct-titleall-T>view:last-child{
		border: 0;
	}
	.change{
		color: #02C2A2!important;
	}
	.meirenkanwo{
		width: 330upx;
		height: 280upx;
		display: block;
		margin: 120upx auto auto auto;
		font-size: 28upx;
		text-align: center;
		color: #9B9B9B;
		clear: both;
	}
	.meirenkanwo>image {
		width: 92%;
		height: 80%;
	}
</style>
