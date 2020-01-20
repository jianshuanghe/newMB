<template>
	<div class="editBasicInfor-content">
		<div class="editBasicInfor">
			<div class="editBasicInfor-box">
				<!--行业 地址 二维码-->
				<div class="MI-box">
					<div class="MI-items">
						<div class="MI-left-EBI left">
							<img :src="xing" alt="" class="img" />
							<p class="">选择地区</p>
						</div>
						<div class="MI-right right">
							<div class="right-Box-MI">
								<provinceCity
								column="3" 
								:value="listData.paramsPC.text" 
								v-on:clickCity="clickCity"
								></provinceCity>
							</div>
						</div>
						<div class="clear"></div>
						<div class="line"></div>
					</div>
					<div class="MI-items">
						<div class="MI-left-EBI left">
							<img :src="xing" alt="" class="img" />
							<p class="">详细地址</p>
						</div>
						<div class="MI-right right">
							<div class="right-Box-MI">
								<div class="img-MI EBI-img-MI left">
									<view class="BI-text-right">
										<wInput
											v-model="GET_MY.headers.addressDetail"
											:placeholder="i18n.defaultText.defaul_input"
										></wInput>
									</view>
									<!-- <input type="text" v-model="info.idaddress" name="lname" class="perInfoItemR" placeholder="点击填写" /> -->
								</div>
								<div class="arrow-img-MI left"></div>
							</div>
						</div>
						<div class="clear"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="BIF-bottom">
			<div class="reset-bsp-I left">
				<div class="reset-box" @click="clickReset"><p class="">取消</p></div>
			</div>
			<div class="confirm-bsp-I right">
				<div class="confirm-box" @click="clickSaveAddress"><p class="">保存</p></div>
			</div>
			<div class="clear"></div>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import wInput from '@/components/common/watch-login/watch-input1.vue';
import provinceCity from '@/components/common/provinceCity/provinceCity.vue';
export default {
	name: 'addressBs',
	components: {
		wInput,
		provinceCity
	},
	data() {
		return {
			text: '',
			lineRightArrow:  this.Static+'images/common/line-right-arrow.png',
			xing:  this.Static+'images/common/xing.png',
			addressDetail: '',
			info: {
				idStringAddress: '', // 用户地址省市区和详细地址拼接
				idString: '', // 地址显示省市区
				addrPcode: '', // 省
				addrCcode: '', // 市
				addrAcode: '', // 区
				idaddress: '' // 详细地址
			},
			province: [], // 全国省
			city: [], // 全国市
			county: [], // 全国县区
			imgData: {},
			arr:[],
			listData: {
				// 省市S
				multiArray: [
				],
				multiIndex: [0, 0],
				areaPorC: {}, // 获取缓存的省市
				province: { // 用户选择的省份
					index: 0, // 记录用户选择省份index
					text: '', // 页面显示字段
					pcode: '' // 传给后台参数
				},
				city: { // 用户选择的城市
					text: '', // 页面显示字段
					ccode: '' // 传给后台参数
				},
				paramsPC: { // 用于接口数据省和市
					ptext: '', // 页面显示字段
					pcode: '' ,// 传给后台参数
					ctext: '', // 页面显示字段
					ccode: '' // 传给后台参数
				},
				// 省市E
				dizhi:''
			}
		};
	},
	created () {
		console.log(this.GET_MY.headers)
		this.dizhi=this.GET_MY.headers.addressDetail;
		this.listData.paramsPC.text=this.GET_MY.headers.addrStr;
	},
	onLoad:function(){
		
	},
	mounted() {
		
	},
	computed: {
		i18n () {
		  return this.$t('qualificatCert')  
		},
		...mapGetters(['PERSONCENTER', 'IMGDATA','GET_MY'])
	},
	methods: {
		...mapMutations({
			setAddressBsShow: 'setAddressBsShow',
		}),
		clickCity:function(clickCity){
			this.arr=clickCity
			console.log(this.arr)
		},
		clickReset() {
			console.log('取消');
			uni.navigateBack({
				
			})
		},
		clickSaveAddress() {
			console.log('触发保存地址按钮');
			if(this.arr==''){
				console.log('1')
				if(this.GET_MY.headers.addrStr==''){
					uni.showToast({
						title: '请选择地区',
						icon: 'none',
						duration: 1000
					});
					return false;
				}
				
			}else if(this.dizhi==''){
				uni.showToast({
					title: '请输入详细地址',
					icon: 'none',
					duration: 1000
				});
				return false;
			}
			if(this.arr!==''){
				let obj={
					idString: this.arr.cityText, // 地址显示省市区
					addrPcode: this.arr.pcode, // 省
					addrCcode: this.arr.ccode, // 市
					addrTcode: this.arr.tcode, // 区
					idaddress: this.GET_MY.headers.addressDetail, // 详细地址
				}
				this.$store.commit('setclickCity', obj); // 更新vuex setAddShow
			}
			
			uni.navigateBack({
				
			})
		}
	}
};
</script>

<style scoped>
.editBasicInfor-content {
	position: relative;
	width: 100%;
	background: #f9f9f9;
}
.editBasicInfor {
	position: relative;
	width: 100%;
	background: #f9f9f9;
	padding-bottom: 5vh;
}
.editBasicInfor-box {
	position: relative;
	width: 100%;
	margin-bottom: 20vh;
}
.topTips {
	position: relative;
	width: 100%;
	background: #f9f9f9;
	padding: 0 4vw 0 4vw;
}
.topTips > p {
	position: relative;
	width: 100%;
	font-family: PingFangSC-Light;
	font-size: 3.2vw;
	color: #9b9b9b;
	line-height: 8vw;
	text-align: center;
}
.EBI-textArea {
	position: relative;
	width: 100%;
	background: #fff;
	padding: 0 4vw 0 4vw;
}
.textAarea-box {
	position: relative;
	width: 100%;
}
.introduce2 {
	position: relative;
	width: 96%;
	margin-left: 4%;
}
.MI-box {
	position: relative;
	width: 100%;
	padding: 0vw 4vw 0 4vw;
	background: #fff;
}
.MI-items {
	position: relative;
	width: 100%;
}
.MI-left-EBI {
	position: relative;
	width: 21%;
	height: 15vw;
}
.MI-left-EBI > img {
	position: relative;
	width: 2vw;
	height: 2vw;
	float: left;
	top: 5.5vw;
	margin-right: 1vw;
	left: 0;
	display: inline-block;
}
.MI-left-EBI > p {
	position: absolute;
	font-family: PingFangSC-Light;
	font-size: 3.733vw;
	color: #2e2e30;
	line-height: 15vw;
	margin-left: 4vw;
}
.MI-right {
	position: relative;
	width: 79%;
	height: 100%;
	overflow: hidden;
	text-overflow:ellipsis;
	text-align: left;
}
.right-Box-MI {
	position: relative;
	width: 100%;
	margin-top:24upx;
}
.img-MI {
	position: relative;
	width: 90%;
}
.EBI-img-MI {
	width: 100% !important;
}
.arrow-img-MI {
	position: relative;
	width: 10%;
}
.arrow-img-MI > img {
	position: relative;
	width: 2vw;
	height: 2vw;
	margin-top: 6.5vw;
	float: right;
}
.perInfoItemR {
	width: 100%;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #3c3c3f;
	letter-spacing: 0;
	/* height: 15vw; */
	padding: 5vw 0;
	/* margin: 5vw 0; */
	line-height: 5vw;
	text-align: right;
	margin-right: 1vw;
	float: left;
}
.intro-MI {
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #d2d2d2;
	letter-spacing: 0;
	text-align: right;
	line-height: 15vw;
}
.intro-MI2 {
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #3c3c3f;
	letter-spacing: 0;
	text-align: right;
	line-height: 15vw;
}
.BIF-bottom {
	position: fixed;
	width: 100%;
	/* padding: 0vw 4vw 0vw 4vw; */
	bottom: 0;
	z-index: 105;
	background: rgba(255, 255, 255, 0.9);
	box-shadow: 0 -1px 0 0 #f5f5f5;
	background: #fff;
}
.BIF-btn {
	position: relative;
	width: 100%;
	background: #02c2a2;
	border-radius: 2px;
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #ffffff;
	text-align: center;
	letter-spacing: 0;
	line-height: 12vw;
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
	line-height: 12vw;
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
	line-height: 12vw;
	text-align: center;
}
</style>
