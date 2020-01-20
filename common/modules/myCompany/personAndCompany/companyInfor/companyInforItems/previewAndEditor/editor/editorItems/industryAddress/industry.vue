<template>
	<div class="industry-content">
		<div class="mask-popup" @click="clickCloseMask"></div>
		<div class="insBSP-box">
			<div class="industry-box">
				<div class="tian"></div>
				<div class="BSP-con">
					<!-- <div class="BSP-con-head">健康医疗</div> -->
					<div v-for="(item,index) in arr" @tap="xuanzhong(index)" :class="num==index?'changeColor':''" :key="index" style="color: #2E2E30;font-size: 26upx;padding: 10upx 20upx 10upx 20upx;border: 2upx solid #E2E2E2;float:left;margin-left:20upx;margin-top:10upx;">{{item.typeName}}</div>
				</div>
			</div>
			<div class="BSP-button">
				<div class="btn-I">
					<div class="line"></div>
					<div class="btn-bsp">
						<div class="reset-bsp-I left">
							<div class="reset-box" @click="clickReset"><p class="">取消</p></div>
						</div>
						<div class="confirm-bsp-I right">
							<div class="confirm-box" @click="clickConfirm"><p class="">保存</p></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
	name: 'industry',
	props:['data'],
	data() {
		
		return {
			industryData: {}, // 接口返回所属行业数据
			industryDataCkeck: {}, // 用户勾选的
			clisckItems: '', // 记录点击的行业
			clickItemsIndex: '' ,// 记录子项点击的index
			num:0,
			arr:[],
			name:'',
			id:'',
		};
	},
	computed: {},
	watch: {
		
	},
	created() {
		this.industry();
		
	},
	methods: {
		xuanzhong(e){
			this.num=e;
			this.name=this.arr[e].typeName
			this.id=this.arr[e].id
			console.log(this.name)
		},
		industry(){
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				// let params = {}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/compIndustry/selectList', //接口地址。
					// data: params,
					method: 'GET',
					header: {
						Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
					},
					success: (response) => {
						uni.hideLoading();
						console.log(response.data);
						this.arr=response.data.content
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
		clickCloseMask() {
			this.$emit('CloseMask', '0');
			console.log('触发关闭所属行业');
		},
		clickReset() {
			console.log('出发取消按钮');
			this.clickCloseMask();
		},
		clickConfirm() {
			console.log('触发了保存按钮');
			if(this.name==''){
				this.name=this.arr[0].typeName
				this.id=this.arr[0].id
			}
			this.$emit('clickConfirm',{'name':this.name,'id':this.id})
			this.clickCloseMask();
		}
	}
};
</script>

<style scoped>
.industry-content {
	position: fixed;
	width: 100vw;
	height: 100vh;
	z-index: 108;
	top: 0;
	
}
.tian {
	width: 100%;
	height: 88upx;
}
.mask-popup {
	position: relative;
	height: 100vh;
	width: 100%;
	background: rgba(19, 9, 9, 0.59);
}
.insBSP-box {
	position: absolute;
	top: 0;
	right: 0;
	z-index: 104;
}
.industry-box {
	position: relative;
	width: 86.933vw;
	float: right;
	background: #fff;
	height: 100vh;
	overflow: scroll;
	padding-bottom: 15vw;
	-webkit-overflow-scrolling: touch;
}
.content-I {
	position: relative;
	width: 100%;
	padding: 5vw 1vw 5vw 4vw;
}
.items-I {
	position: relative;
	width: 100%;
	margin-bottom: 5vw;
}
.title-I {
	position: relative;
	width: 100%;
	margin-bottom: 2vw;
}
.title-I > p {
	font-family: PingFang-SC-Medium;
	font-size: 3.733vw;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 9vw;
}
.cont-I {
	position: relative;
	width: 100%;
}
.cont-items-I {
	position: relative;
	width: 33.3333%;
}
.cont-box-I {
	position: relative;
	width: 90%;
	margin-bottom: 2vw;
}
.cont-box-I > p {
	position: relative;
	width: 100%;
	font-family: PingFang-SC-Medium;
	font-size: 3.5vw;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 7vw;
	background: #ffffff;
	border: 1px solid #e2e2e2;
	border-radius: 2px;
	text-align: center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.checkedItems {
	background: #12f3cd40 !important;
	color: #02c2a2 !important;
	border: 1px solid #02c2a2 !important;
}

.BSP-button {
	position: fixed;
	bottom: 0;
	width: 100%;
}
.btn-I {
	position: relative;
	bottom: 0;
	width: 86.933vw;
	background: #fff;
}
.btn-bsp {
	position: relative;
	width: 100%;
	padding: 0 0vw 0 5vw;
}
.reset-bsp-I {
	position: relative;
	width: 50%;
}
.reset-box {
	position: relative;
	width: 100%;
}
.reset-box > p {
	position: relative;
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 10vw;
	text-align: center;
}
.confirm-bsp-I {
	position: relative;
	width: 50%;
}
.confirm-box {
	position: relative;
	width: 100%;
	background: #02c2a2;
}
.confirm-box > p {
	position: relative;
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #fff;
	letter-spacing: 0;
	line-height: 10vw;
	text-align: center;
}
.BSP-con {
	width: 95%;
	margin: 40upx auto;
}
.BSP-con-head{
	font-size: 28upx;
	color: #2E2E30;
	margin-left: 20upx;
}
.changeColor{
	color:#FFFFFF!important;
	background: #02C2A2!important;
}
</style>
