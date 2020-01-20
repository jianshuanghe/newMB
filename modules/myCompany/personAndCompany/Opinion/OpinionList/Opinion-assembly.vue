<template>
	<view class="Opinion-assembly">
		<!-- 查看全部组件 -->
		<view class="Opinion-assembly-con">
			<view class="Opinion-assembly-xing">
				<Evaluating 
					class="pingfeng"
					:headPicShow='false' 
					:headTitleShow='false'
					@scoreChange='send'
					:starsDisabled="true"
					:score=feedNum
				>
				</Evaluating>
			</view>
			<view class="Opinion-assembly-zi">{{problem.backTypes}}</view>
			<view class="Opinion-assembly-content">{{problem.context}}</view>
			<!-- 联系方式 -->
			<view class="Opinion-assembly-phone" v-if="problem.phone!==''">{{i18n.title33}}：{{problem.phone}}</view>
			<!-- 吐槽于 -->
			<view class="Opinion-assembly-tu">{{i18n.title34}} {{problem.createTime}}</view>
		</view>
		<view class="Opinion-assembly-image">
			<image :src="item" v-for="(item,index) in arr" :key="index"  @tap="img001(arr,index)"></image>
		</view>
		<view class="Opinion-assembly-bot">
			<!-- 删除 -->
			<view @tap="del"><image :src="deletes"></image><span>{{i18n.title35}}</span></view>
			<!-- 收起 -->
			<view @tap="down"><image :src="up"></image><span>{{i18n.title36}}</span></view>
		</view>
	</view>
</template>

<script>
	import Evaluating from '@/components/common/Evaluating/components/myIssue.vue';
	import up from '@/static/mbcImg/my/up-arrow.png'
	import deletes from '@/static/mbcImg/my/delete.png'
	
	export default {
		props: ['inputName','feedNum'],
		data() {
			return {
				zi:'机扫打飞机扫打飞机扫打飞机公司的附近公飞机扫打飞机扫打飞机扫打飞机公司的附近公飞机扫打飞机扫打飞机扫打飞机公司的附近公飞',
				up:up,
				deletes:deletes,
				problem:[],
				xin:'',
				arr:[],
			};
		},
		components: {
			Evaluating,
		},
		computed:{
			i18n () {
			  return this.$t('Mypersonal')  
			},
		},
		created() {
			this.assemblys();
		},
		filters: {
			formatDate: function(value) {
				let date = new Date(value);
				let y = date.getFullYear();
				let MM = date.getMonth() + 1;
				MM = MM < 10 ? ('0' + MM) : MM;
				let d = date.getDate();
				d = d < 10 ? ('0' + d) : d;
				let h = date.getHours();
				h = h < 10 ? ('0' + h) : h;
				let m = date.getMinutes();
				m = m < 10 ? ('0' + m) : m;
				let s = date.getSeconds();
				s = s < 10 ? ('0' + s) : s;
				return y + '.' + MM + '.' + d ;
			}
		},
		methods: {
			img001(e,key){
				console.log(e)
				uni.previewImage({
					urls: e,
					current: e[key],
					indicator: "number",
					loop: "true",
					longPressActions: {
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			},
			assemblys(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/userFeedBack/'+ this.inputName, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							// console.log(response.data);
							this.problem = response.data.content;
							if(this.problem.img001!==''&&this.problem.img002==''&&this.problem.img003==''&&this.problem.img004==''&&this.problem.img005==''){
								this.arr.push(this.problem.img001)
							}else if(this.problem.img002!==''&&this.problem.img001!==''&&this.problem.img003==''&&this.problem.img004==''&&this.problem.img005==''){
								this.arr.push(this.problem.img001,this.problem.img002)								
							}else if(this.problem.img003!==''&&this.problem.img002!==''&&this.problem.img001!==''&&this.problem.img004==''&&this.problem.img005==''){
								this.arr.push(this.problem.img001,this.problem.img002,this.problem.img003)								
							}else if(this.problem.img004!==''&&this.problem.img003!==''&&this.problem.img002!==''&&this.problem.img001!==''&&this.problem.img005==''){
								this.arr.push(this.problem.img001,this.problem.img002,this.problem.img003,this.problem.img004)	
							}else if(this.problem.img005!==''&&this.problem.img004!==''&&this.problem.img003!==''&&this.problem.img002!==''&&this.problem.img001!==''){
								this.arr.push(this.problem.img001,this.problem.img002,this.problem.img003,this.problem.img004,this.problem.img005)					
							}
							// this.arr.push(this.problem.img001,this.problem.img002,this.problem.img003,this.problem.img004,this.problem.img005)
							// this.$store.commit('setMation', this.List); // 更新vuex
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
			down(){
				var num=0;
				this.$emit('down',num)
			},
			del(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/userFeedBack/'+ this.inputName, //接口地址。
						// data: params,
						method: 'DELETE',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							var num=0;
							this.$emit('down',num)
							// 发出一个事件 触发父组件中的事件
							this.$emit('showInsurInformation')
							// this.problem = response.data.content
							// this.$store.commit('setMation', this.List); // 更新vuex
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
			}
		},
		
	};
</script>

<style>
	.Opinion-assembly{
		width: 100%;
		min-height:93% ;
		background: #FFFFFF;
		position: fixed;
		top: 88upx;
	}
	.Opinion-assembly-con{
		width: 90%;
		min-height: 100%;
		margin: 0 auto;
	}
	.Opinion-assembly-xing{
		width: 100%;
		height: 130upx;
		padding: 1upx;
		position: relative;
	}
	.pingfeng{
		position: absolute;
		top: 76upx;
		left: -22upx;
		float: left;
	}
	.Opinion-assembly-zi{
		width: 100%;
		height: 30upx;
		line-height: 30upx;
		margin: 20upx auto;
		font-size: 24upx;
		color: #9B9B9B;
	}
	.Opinion-assembly-content{
		width: 100%;
		font-size: 26upx;
		color: #2E2E30;
	}
	.Opinion-assembly-phone{
		margin-top:40upx ;
		font-size: 26upx;
		color: #2E2E30;
	}
	.Opinion-assembly-tu{
		margin-top: 60upx;
		font-size: 24upx;
		color: #9B9B9B;
	}
	.Opinion-assembly-bot{
		width: 100%;
		height: 88upx;
		position: fixed;
		bottom: 0;
		background: #FFFFFF;
		border-top: 2upx solid #F5F5F5;
	}
	.Opinion-assembly-bot>view{
		width: 50%;
		height: 100%;
		float: left;
		font-size: 32upx;
		color: #2E2E30;
		line-height: 14upx;
	}
	.Opinion-assembly-bot>view>image{
		width: 30upx;
		height: 35upx;
		margin-top: 5upx;
		/* display: block; */
		float: left;
		margin-left: 40%;
		margin-top: 30upx;
	}
	.Opinion-assembly-bot>view>span{
		display: block;
		float: left;
		margin-top: 40upx;
		margin-left: 10upx;
	}
	.Opinion-assembly-image{
		width: 90%;
		min-height: 500upx;
		margin: 20upx auto auto auto;
		
	}
	.Opinion-assembly-image>image{
		width: 32%;
		height: 180upx;
		float: left;
		margin-left: 8upx;
		margin-top: 26upx;
	}
</style>
