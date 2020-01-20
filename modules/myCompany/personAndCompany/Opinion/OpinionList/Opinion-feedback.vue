<template>
	<view class="Opinion-feedback">
		<!-- 意见反馈 -->
		<view class="Opinion-feedback-plice">
			<!-- 请给陌拜商机评分 -->
			<span>{{i18n.title27}}</span>
			<Evaluating
				class="pingfeng"
				:headPicShow='false' 
				:headTitleShow='false'
				@scoreChange='send'
			>
			</Evaluating>
		</view>
		<view class="Opinion-feedback-problem">
			<!-- 请描述您遇到的问题 -->
			<view>{{i18n.title28}}</view>
			<view class="Opinion-feedback-box">
				<view v-for="(item,index) in problem" :key="index" @tap="Choices(item)" :class="{'active': item.hiden}">{{item.content}}</view>
			</view>
			<view class="Opinion-feedback-carry">
				<!-- 请描述您的问题 -->
				<textarea :placeholder="i18n.title29" maxlength="200" @input="descInput" v-model="desc" placeholder-style="color:#BDBDBD" />
				<span class="numberV">{{ this.desc.length }}/200</span>
			</view>
			
		</view>
		<view class="Opinion-feedback-img">
			<div class="MI-items">
				<div class="EBI-uploadImg">
					<view class="" v-if="true">
						<imageUploadMore
						 class="imhae"
							v-model="listData.imageData"
							:server-url="listData.serverUrl" 
							limit=5
							@delete="deleteImage" 
							@add="addImage">
						</imageUploadMore>
					</view>
				</div>
			</div>
		</view>
		<!-- 请输入联系方式（选填） -->
		<view class="Opinion-feedback-phone"><input type="text" :placeholder="i18n.title30" placeholder-style="color:#BDBDBD" v-model="phone"/></view>
		<view class="tijiao"></view>
		<!-- 提交 -->
		<view class="Opinion-feedback-del" @tap="sub()"><view>{{i18n.title31}}</view></view>
	</view>
</template>

<script>
import imageUploadMore from '@/components/common/imageUpload/imageUploadMore.vue';
import Evaluating from '@/components/common/Evaluating/components/myIssue.vue';
export default {
	data() {
		return {
			txtVal: 0,
			desc: '',
			remnane: 0,
			phone:'',
			listData: {
				imageData: [],
				serverUrl: 'https://img01.iambuyer.com/imgup/upLoad/fileUpload', // 图片上传地址
			},
			logo1:'',
			logo2:'',
			logo3:'',
			logo4:'',
			logo5:'',
			xing:0,//选中几个星星
			problem:[],//遇到的问题
			ind: "",
			selectedItem:[],
			nums:1,
		};
	},
	components: {
		imageUploadMore,
		Evaluating
	},
	computed:{
		i18n () {
		  return this.$t('Mypersonal')  
		},
	},
	created() {
		this.getproblem();
	},
	methods: {
		sub(){
			if(this.xing === 0){
				uni.showToast({
					title: '请至少选择一课星',
					icon: 'none',
					duration: 1000
				});
				return false;
			}else if(this.selectedItem.length === 0){
				uni.showToast({
					title: '请至少选择一个标签',
					icon: 'none',
					duration: 1000
				});
				return false;
			}else if(this.desc === ''){
				uni.showToast({
					title: '请描述您的问题',
					icon: 'none',
					duration: 1000
				});
				return false;
			}else if (this.phone) {
				if(!/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.phone)){
					uni.showToast({
						title: '电话格式有误，请重填',
						icon: 'none',
						duration: 1000
					});
					return false;
				}
			}
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				let params = {
					"userId":landRegistLG.user.id,
					"img001":this.logo1,
					"img002":this.logo2,
					"img003":this.logo3,
					"img004":this.logo4,
					"img005":this.logo5,
					"phone":this.phone,
					"feedbackNum":this.xing,
					"context":this.desc,
					"backTypes":this.selectedItem,
				}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/userFeedBack', //接口地址。
					data: params,
					method: 'POST',
					header: {
						Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
					},
					success: (response) => {
						uni.hideLoading();
						console.log(response.data);
						// this.list = response.data.content.list
						// console.log(this.list)
						// this.$store.commit('setMation', this.List); // 更新vuex
						this.$emit('nums',this.nums)
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
		getproblem(){
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/userFeedBack/types', //接口地址。
					// data: params,
					method: 'GET',
					header: {
						Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
					},
					success: (response) => {
						uni.hideLoading();
						// console.log(response.data);
						this.problem = response.data.content
						console.log(this.problem)
						// this.$store.commit('setMation', this.List); // 更新vuex
						this.problem.forEach(item => {
							this.$set(item, 'hiden', false)
						})
						console.log(this.problem)
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
		Choices(item){
			// console.log(item)
			
			if (item.hiden) {//不选中状态时点击
				item.hiden = false//变为选中状态
				const i = this.selectedItem.indexOf(item.id)//找到当前点击项
				this.selectedItem.splice(i, 1)//移除一个不选中项
				console.log(this.selectedItem)
			} else if (!item.hiden && this.selectedItem.length < 5) {//选中状态时点击
				item.hiden = true//变为不选中状态
				this.selectedItem.push(item.id)//更新数组（不选中项）
				console.log(this.selectedItem)
			}
		},
		send(data){
			this.xing=data
			console.log(this.xing, '分数')
		},
		descInput() {
			var txtVal = this.desc.length;
			this.remnane = 1 + txtVal;
		},
		addImage: function(e) {
			console.log(e, '添加图片')
			if (e.allImages) { // 上传成功
				this.logo1=e.allImages[0].imgName;
				this.logo2=e.allImages[1].imgName;
				this.logo3=e.allImages[2].imgName;
				this.logo4=e.allImages[3].imgName;
				this.logo5=e.allImages[4].imgName;
				console.log(this.logo1)
				console.log(this.logo2)
				console.log(this.logo3)
				console.log(this.logo4)
				console.log(this.logo5)
			}
		},
		deleteImage:function(e,index){
			console.log(e,'删除图片')
			console.log(this.logo,'删除后的数组')
		}
	}
};
</script>

<style>
.active{
	background: #02c2a2;
	color: #FFFFFF!important;
}
.Opinion-feedback {
	width: 100%;
	min-height: 100%;
	background: #ffffff;
}
.Opinion-feedback-plice {
	width: 90%;
	height: 200upx;
	line-height: 200upx;
	margin: 0 auto;
	font-size: 32upx;
	color: #2e2e30;
}
.pingfeng{
	position: absolute;
	top: 160upx;
	right: 100upx;
}
.Opinion-feedback-problem {
	width: 90%;
	min-height: 740upx;
	margin: 0 auto;
}
.Opinion-feedback-problem > view:nth-of-type(1) {
	font-size: 32upx;
	color: #2e2e30;

}
.Opinion-feedback-box > view {
	padding: 10upx 50upx 10upx 50upx;
	border: 2upx solid #e2e2e2;
	font-size: 26upx;
	color: #2e2e30;
	display: block;
	float: left;
	margin-left: 20upx;
	margin-top: 40upx;
}
.Opinion-feedback-carry {
	width: 100%;
	height: 370upx;
	margin: 30upx auto auto auto;
	position: relative;
	margin-top: 270upx;
	border-bottom: 2upx solid #f5f5f5;
}
.Opinion-feedback-carry > textarea {
	width: 100%;
	height: 95%;
	padding-bottom: 20upx;
}
.numberV {
	font-size: 28upx;
	color: #d2d2d2;
	position: absolute;
	bottom: 0;
	right: 40upx;
}
.Opinion-feedback-phone {
	width: 90%;
	height: 100upx;
	margin: 0 auto;
	border-bottom: 2upx solid #f5f5f5;
}
.Opinion-feedback-phone > input {
	width: 100%;
	height: 100%;
}
.Opinion-feedback-del {
	width: 100%;
	height: 120upx;
	background: #ffffff;
	position: fixed;
	bottom: 0;
}
.Opinion-feedback-del > view {
	width: 90%;
	height: 90upx;
	background: #02c2a2;
	border-radius: 4upx;
	margin: 20upx auto;
	text-align: center;
	line-height: 90upx;
	font-size: 28upx;
	color: #ffffff;
}
.Opinion-feedback-img{
	/* padding-bottom: 200upx; */
	width: 90%;
	margin: 0 auto;
}
.tijiao{
	width: 100%;
	height: 200upx;
}
</style>
