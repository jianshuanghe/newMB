<template>
	<view class="Opinion-myfeedback">
		<!-- 我的反馈 -->
		<view class="Opinion-myfeedback-con" v-for="(item,index) in problem" :key="index">
			<view class="Opinion-myfeedback-xing">
				<Evaluating 
					class="pingfeng"
					:headPicShow='false' 
					:headTitleShow='false'
					@scoreChange='send'
					:starsDisabled="true"
					:score=item.feedbackNum
				>
				</Evaluating>
				<view class="Opinion-myfeedback-xings">今天 {{item.createTime}}</view>
			</view>
			<view class="Opinion-myfeedback-zi">{{item.backTypes}}</view>
			<view class="Opinion-myfeedback-content">{{item.context|ellipsis}}</view>
			<!-- 查看全文 -->
			<view class="Opinion-myfeedback-cha" @tap="hiden(item)">{{i18n.title32}}<image :src="downArrow"></image></view>
		</view>
		<view class="Opinion-myfeedback-tishi" v-if="problem.length==0">
			<image :src="nocon" ></image>
			<span>这还什么都没有哦</span>
		</view>
		<!-- 查看全部组件 -->
		<assembly v-if="num === '1'" @showInsurInformation="insuranceInformations" @down='down' v-bind:inputName="id" v-bind:feedNum="feed"></assembly>
	</view>
</template>

<script>
	import Evaluating from '@/components/common/Evaluating/components/myIssue.vue';
	import assembly from './Opinion-assembly.vue';
	import downArrow from '@/static/mbcImg/my/downArrow.png';
	import nocon from '@/static/mbcImg/my/nocon.png';
	export default {
		data() {
			return {
				downArrow:downArrow,
				txtVal: 0,
				desc: '',
				remnane: 0,
				nocon:nocon,
				listData: {
					imageData: [],
					serverUrl: 'https://img01.iambuyer.com/imgup/upLoad/fileUpload' // 图片上传地址
				},
				logo:[],
				xing:0,//选中几个星星
				num:'0',//控制组件显示隐藏
				xin:'7',
				problem:[],
				id:'',
				feed:'',
			};
		},
		components: {
			Evaluating,
			assembly
		},
		computed:{
			i18n () {
			  return this.$t('Mypersonal')  
			},
		},
		methods: {
			// 通过子组件触发父组件的事件
			insuranceInformations () {
				this.assembly();
			},
			hiden(e){
				this.num='1';
				this.id = e.id; //反馈id
				this.feed = e.feedbackNum; //选择分数
				// console.log(this.id)
			},
			down(data){
				this.num=data;
			},
			assembly(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/userFeedBack?page=1&userId='+landRegistLG.user.id, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							// console.log(response.data);
							this.problem = response.data.content.list
							console.log(this.problem)
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
		},
		created() {
			this.assembly();
		},
		filters: {
			ellipsis (value) {
			  if (!value) return ''
			  if (value.length > 40) {
				return value.slice(0,40) + '...'
			  }
			  return value
			}
		}
	};
</script>

<style>
	.Opinion-myfeedback{
		width: 100%;
		min-height:93% ;
		background: #FFFFFF;
		position: relative;
	}
	.Opinion-myfeedback-con{
		width: 90%;
		min-height: 266upx;
		margin: 0 auto;
		border-bottom: 2upx solid  #F5F5F5;
	}
	.Opinion-myfeedback-xing{
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
	.Opinion-myfeedback-xings{
		font-size: 24upx;
		color: #9B9B9B;
		/* position: absolute;
		right: 38upx;
		margin-top: 160upx; */
		float: right;
		margin-top: 86upx;
	}
	.Opinion-myfeedback-zi{
		width: 100%;
		height: 30upx;
		line-height: 30upx;
		margin: 20upx auto;
		font-size: 24upx;
		color: #9B9B9B;
	}
	.Opinion-myfeedback-content{
		width: 100%;
		font-size: 26upx;
		color: #2E2E30;
	}
	.Opinion-myfeedback-cha{
		font-size: 26upx;
		color: #02C2A2;
		width: 100%;
		text-align: right;
		
	}
	.Opinion-myfeedback-cha>image{
		width: 20upx;
		height: 20upx;
		margin-left: 8upx;
	}
	.Opinion-myfeedback-tishi{
		width: 280upx;
		height: 300upx;
		margin: 0 auto;
		padding-top: 300upx;
		text-align: center;
	}
	.Opinion-myfeedback-tishi>image{
		display: block;
		width: 280upx;
		height: 280upx;
	}
	.Opinion-myfeedback-tishi>span{
		display: block;
		margin-top: 12upx;
		font-size: 32upx;
		color: #9B9B9B;
	}
</style>
