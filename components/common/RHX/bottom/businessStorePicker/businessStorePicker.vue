<!-- 实例
 <moduleAddList
 leftText='取消' // picker左侧文字
 centerText='添加新模块' // picker 右侧文字
 tips='请勾选其中一项!' // 点击picker保存，没有勾选时的提示文字
 rightText // picker右侧文字
 rightColor='#02C2A2' // picker 右侧文字颜色
 :translateY="this.VwVhToPx(90, 'vh')" // picker 打开时动画变化高度
 :dataList='moduleTempList' // 单选总数组
 scrollHeight='77vh' // 滚动区域高度
 :marginBottomShow='true' // 是否展示底部
 :scrollY='true' // 是否允许纵向滚动
 type='1' // type类型  （以后可扩展属性）
 @tap-Cancel='tapCancel' // picker 取消方法
 @tap-Preserve='tapPreserve' // picker 保存方法
 v-if='moduleAddListShow'>
 </moduleAddList>
 -->
<template>
	<div class="moduleAddList-content">
		<!-- rPicker -->
		<rPicker
		:leftText='leftText'
		:centerText='centerText'
		:rightText='rightText'
		:pickerTop='pickerTop'
		:translateY='translateY'
		:rightColor='rightColor'
		:type='type'
		:isAnimate='isAnimate'
		@tap-PickerCancel='tapPickerCancel'
		@tap-PickerPreserve='preserve'
		>	
			<!-- 滚动区域 -->
			<div class="scroll-box">
				 <scroll-view class="scroll-H" :scroll-y="scrollY" :style="{height: scrollHeight}">
					<!-- 单选框 -->
					<businessInfor
					:disabled='disabled'
					:defaultAddImg='defaultAddImg'
					:businessTemList='businessTemLists'
					@tap-BusinessInfor='tapBusinessInfor'>
					</businessInfor>
				 </scroll-view>
			</div>
			<!-- 确认框 -->
			<fixedBgBtn
			v-if='false'
			:bbottom="0"
			bColor= ''
			paddingNum='2vw 3.33vw'
			left='0'
			bgColor='#FFF'
			bShadow=''
			bgImage=''>
				<div class="add-text" @tap='preserve'>保存</div>
			</fixedBgBtn>
		</rPicker>
	</div>
</template>

<script>
	import businessInfor from '@/components/common/RHX/bottom/businessInfor/businessInfor';
	import rPicker from '@/components/common/RHX/rPicker/rPicker';
	import fixedBgBtn from '@/components/common/button/fixedBgBtn.vue';
	export default {
		components: {
			businessInfor,
			rPicker,
			fixedBgBtn
		},
		props: [
			'disabled',
			'defaultAddImg',
			'businessTemList',
			'leftText',
			'centerText',
			'rightText',
			'tips',
			'pickerTop',
			'translateY',
			'rightColor',
			'type',
			'scrollHeight',
			'scrollY',
			'dataList',
			'marginBottomShow',
			'isAnimate'
		],
		data() {
			return {
				businessTemLists: JSON.parse(JSON.stringify(this.businessTemList)), // 用户主动更改商家信息内容
			};
		},
		watch: {
			businessTemList: {
				handler(a, b) {
					console.log('----------------businessTemLists--------------')
					this.businessTemLists = a;
				},
				deep: true
			},
		},
		created() {},
		methods: {
			// 用户主动更改商家信息内容
			tapBusinessInfor(e) {
				console.log(e, '用户主动更改商家信息内容');
				this.businessTemLists = e;
			},
			//点击确认添加
			preserve () {
				console.log('点击保存绿色按钮');
				this.changeBusinessData();
			},
			changeBusinessData() {
				console.log('跟新商家信息');
				let params = this.businessTemLists;
				console.log(this.businessTemLists, '------------this.businessTemLists-----------');
				delete params.proCityAreaStr;
				delete params.userId;
				if (!uni.getStorageSync('landRegist')) {
					this.landRegistra(); // 判断登录状态
				} else if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					if (!/^1[345789]\d{9}$/.test(params.contactTelphone)) {
						// 联系电话不能为空
						uni.showToast({
							title: '联系电话格式有误',
							icon: 'none',
							duration: 1000
						});
						return false;
					};
					uni.showLoading({
						// 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/user/' + landRegistLG.user.id, //接口地址。
						data: params,
						method: 'POST',
						header: {
							Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
						},
						success: response => {
							if (response.data.ret === '200') {
								uni.hideLoading(); // 隐藏 loading
								this.$emit('tap-Preserve');
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
				}
			},
			// 点击picker取消按钮
			tapPickerCancel (e) {
				console.log(e, '点击picker取消按钮');
				this.$emit('tap-Cancel');
			}
		}
	};
</script>

<style>
	.moduleAddList-content{
		position: relative;
		width: 100%;
	}
	.scroll-H{
		padding-bottom: 20vh;
	}
	.add-text{
		font-family: PingFangSC-Regular;
		font-size: 32upx;
		color: #FFFFFF;
		letter-spacing: 0;
		text-align: center;
		line-height: 88upx;
		background: #02C2A2;
		box-shadow: 0 1px 6px 0 rgba(2,194,162,0.30);
	}
</style>
