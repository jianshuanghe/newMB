<template>
	<div class="mesage-box">
		<div class="mesage">
			<div class="title">{{ title }}</div>
			<div class="content">{{ content }}</div>
			<div class="dataList">
				<view class="inputBox">
					<div class="title-items">{{ dataList[0].title }}</div>
					<inputBox
						:value="dataList[0].userName"
						type="text"
						:isPassword="false"
						placeholder="如何称呼您?"
						:adjustPosition="true"
						maxlength=""
						inputTAlign="left"
						inputWidth="90vw"
						inputHeight="9vw"
						inputPadding=""
						inputBoxMargin="0"
						inputLineStyle="background: #EEEEEE"
						@tap-Input="tapUserName"
					></inputBox>
				</view>
				<div class="line"></div>
				<view class="inputBox">
					<div class="title-items">{{ dataList[1].title }}</div>
					<inputBox
						:value="dataList[1].mobile"
						type="number"
						:isPassword="false"
						placeholder="请留下您的联系方式..."
						:adjustPosition="true"
						maxlength="11"
						inputTAlign="left"
						inputWidth="90vw"
						inputHeight="9vw"
						inputPadding=""
						inputBoxMargin="0"
						inputLineStyle="background: #EEEEEE"
						@tap-Input="tapMobile"
					></inputBox>
				</view>
				<div class="line"></div>
				<view class="inputBox">
					<div class="title-items">{{ dataList[2].title }}</div>
					<rTitle
						:disabled="false"
						:isShowOne="false"
						:isShowTwo="true"
						placeholderTwo="请留下您想对我们说的话"
						placeholderStyleTwo='color: #BDBDBD'
						:valueTwo="dataList[2].msgContent"
						tColorTwo="#5D5D5D"
						tFontSizeTwo="3.733vw"
						tTAlignTwo="left"
						tWidthTwo="100%"
						tTMarginTwo="0vw 0"
						tHeightTwo=""
						:tMaxNumShow="false"
						:maxlengthTwo="200"
						:autoHeightTwo="true"
						tPaddingTwo=""
						tLineHeightTwo="5vw"
						tBGTwo=""
						tBorderTwo="1px solid #fff"
						tBStyleTwo="dashed"
						@tap-Title="tapMsgContent"
					></rTitle>
				</view>
				<div class="line"></div>
			</div>
			<div class="btn-box"><div class="btn" @tap='postLeaveMassage'>提交留言</div></div>
		</div>
		<div class="mask" v-if="disabled"></div>
	</div>
</template>

<script>
import inputBox from '@/components/common/RHX/inputBox/inputBox';
import rTitle from '@/components/common/RHX/rTitle/rTitle';
export default {
	components: {
		inputBox,
		rTitle
	},
	props: ['disabled', 'basicData', 'routeParam', 'scrollTop', 'defaultImg', 'dataLists', 'indexNum', 'tabYItemsIndex'],
	data() {
		return {
			icon: {
				notSelected: 'https://style.iambuyer.com/img/icon/fenzu_0.png',
				selected: 'https://style.iambuyer.com/img/icon/fenzu_1.png',
				catalog_white: 'https://style.iambuyer.com/img/icon/fenzu_2.png'
			},
			iconTitle: '留言板',
			moduleImg: 'http://style.iambuyer.com/img/temp-xiaomi-imgs/temp-xiaomi-public-module/temp-xiaomi-public-module-01.jpg',
			type: 'MES_A',
			title: '直接留言',
			content: '如您有任何疑问或者想咨询业务相关，请在下方留言，我们会尽快给您反馈哦～',
			dataList: [
				{
					title: '姓名',
					userName: ''
				},
				{
					title: '电话',
					mobile: ''
				},
				{
					title: '留言',
					msgContent: ''
				}
			]
		};
	},
	created() {},
	watch: {
		scrollTop: {
			handler(a, b) {
				console.log(a, b, '--------------------------------------监听MES_A变化---------------------------------------');
				this.scrollTitleChange();
			},
			deep: true
		}
	},
	mounted() {
		console.log(this.routeParam, '留言模块基数据链接参数');
		if (this.routeParam.sourceTemp !== 0) {
			if (uni.getStorageSync('landRegist')) {
				if (uni.getStorageSync('UserData')) {
					let UserData = JSON.parse(uni.getStorageSync('UserData'));
					console.log(UserData, '444444444444444444444444UserData')
					this.dataList[1].mobile = UserData.userPhone;
					this.dataList[1].userName = UserData.nickname;
				}
			}
		}
	},
	methods: {
		tapUserName(e) {
			console.log(e);
			this.dataList[0].userName = e;
		},
		tapMobile(e) {
			console.log(e);
			this.dataList[1].mobile = e;
		},
		tapMsgContent(e) {
			console.log(e);
			this.dataList[2].msgContent = e[1];
		},
		postMassage() {
			if (this.dataList[0].userName === '') {
				uni.showToast({
					title: '姓名不能为空！',
					icon: 'none',
					duration: 1000
				});
				return;
			}
			if (this.dataList[1].mobile === '') {
				uni.showToast({
					title: '联系电话不能为空！',
					icon: 'none',
					duration: 1000
				});
				return;
			}
			if (!/^1[345789]\d{9}$/.test(this.dataList[1].mobile)) {
				// 联系电话不能为空
				uni.showToast({
					title: '联系电话格式有误',
					icon: 'none',
					duration: 1000
				});
				return false;
			}
			if (this.dataList[2].msgContent === '') {
				uni.showToast({
					title: '留言内容不能为空！',
					icon: 'none',
					duration: 1000
				});
				return;
			}
			let params = {
				instrucId: this.routeParam.instrucId, // id
				mobile: this.dataList[1].mobile, // 电话
				userName: this.dataList[0].userName, // 姓名
				msgContent: this.dataList[2].msgContent, // 留言内容
				userId: this.routeParam.lookUserId
			};
			uni.showLoading({
				// 展示loading
				title: '加载中'
			});
			uni.request({
				url: this.api2 + '/rest-rp/msg/add', //接口地址。
				data: params,
				method: 'POST',
				header: {
					'content-type': 'application/x-www-form-urlencoded',
					Authorization: 'Bearer ' //将token放到请求头中
				},
				success: response => {
					console.log(response.data, '---------------response.data--------------');
					if (response.data === 'success') {
						uni.hideLoading(); // 隐藏 loading
						uni.showToast({
							title: '留言成功！',
							icon: 'none',
							duration: 1000
						});
					} else {
						uni.hideLoading(); // 隐藏 loading
						uni.showToast({
							title: '网络开小差了，请稍后重试',
							icon: 'none',
							duration: 1000
						});
					}
				},
				fail: error => {
					uni.hideLoading(); // 隐藏 loading
					uni.showToast({
						title: '网络繁忙，请稍后',
						icon: 'none',
						duration: 1000
					});
					console.log(error, '网络繁忙，请稍后');
				}
			});
		},
		postLeaveMassage() {
			if (this.routeParam.sourceTemp === 0) {
				uni.showToast({
					title: '模板不支持直接留言哦，快去创建您的产品说明书吧',
					icon: 'none',
					duration: 1000
				});
				return;
			} else {
				if (this.routeParam.creatorId === this.routeParam.lookUserId) {
					uni.showToast({
						title: '本人创建，不能留言！',
						icon: 'none',
						duration: 1000
					});
					return;
				} else {
					if (this.routeParam.instrucState !== '1') {
						uni.showToast({
							title: '当前说明书未发布，不能留言！',
							icon: 'none',
							duration: 1000
						});
						return;
					} else {
						this.postMassage();
					}
				}
			}
		}
	}
};
</script>

<style>
.mesage-box {
	position: relative;
	width: 100%;
}
.mask {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	background: rgba(255, 255, 255, 0.6);
}
.mesage {
	position: relative;
	width: 100%;
	height: 100%;
	padding: 40upx;
}
.title {
	font-family: PingFangSC-Medium;
	font-size: 40upx;
	color: #2e2e30;
	line-height: 80upx;
}
.content {
	ont-family: PingFangSC-Regular;
	font-size: 13px;
	color: #9b9b9b;
	letter-spacing: 0;
	text-align: justify;
	line-height: 18px;
}
.dataList {
	position: relative;
	width: 100%;
}
.inputBox {
	position: relative;
	width: 100%;
	margin: 20upx 0;
}
.title-items {
	position: relative;
	width: 100%;
	font-family: PingFangSC-Regular;
	font-size: 28upx;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 70upx;
}
.input-items {
	width: 90vw !important;
}
.btn-box {
	margin: 60upx 0 0vh 0;
}
.btn {
	font-family: PingFangSC-Regular;
	font-size: 28upx;
	color: #ffffff;
	letter-spacing: 0;
	text-align: center;
	line-height: 90upx;
	margin: 20upx 0;
	width: 280upx;
	background: #2e2e30;
	margin: 0 auto;
}
</style>
