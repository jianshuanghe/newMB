<template>
	<div class="editBtn-box">
		<fixedBgBtn
		bbottom='0upx'
		bColor= ''
		paddingNum=''
		bgColor='#2E2E30'
		bShadow=''>
			<div class="editBtn">
				<div class="saveBtn left" @tap="caiGouSavePublish('0')">
					<savePreviewBtn
					textColor='#FFFFFF'
					lineY='1'
					name='保存'
					width='14vw'
					:imgSrc='save'></savePreviewBtn>
				</div>
				<div class="previewBtn left" @tap='caiGouPreview'>
					<savePreviewBtn
					textColor='#FFFFFF'
					lineY='1'
					name='预览'
					width='14vw'
					:imgSrc='preview'></savePreviewBtn>
				</div>
				<div class="publishBtn left" @tap="caiGouSavePublish('1')">
					<savePreviewBtn
					textColor='#02C2A2'
					lineY='0'
					name='发布采购'
					width='23vw'
					:imgSrc='publish'></savePreviewBtn>
				</div>
				<div class="clear"></div>
			</div>
		</fixedBgBtn>
	</div>
</template>

<script>
	import fixedBgBtn from '@/components/common/button/fixedBgBtn.vue';
	import savePreviewBtn from '@/components/common/button/savePreviewBtn.vue';
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				save:  this.Static+'publish/purchase/save.png',
				preview:  this.Static+'publish/purchase/preview.png',
				publish:  this.Static+'publish/purchase/publish.png'
			};
		},
		components: {
			fixedBgBtn,
			savePreviewBtn
		},
		props: [
			'routeParam'
		],
		computed: {
			i18n() {
				return this.$t('navigation');
			},
			...mapGetters(['GET_PUBLISH'])
		},
		watch: {
			GET_PUBLISH: {
				handler(a, b) {
				},
				deep: true
			}
		},
		methods: {
			...mapMutations({
				setPreviceCaiGou: 'setPreviceCaiGou'
			}),
			caiGouSavePublish (e) {
				console.log(this.GET_PUBLISH.publishPurchase, '触发保存发布按钮');
				let params = this.GET_PUBLISH.publishPurchase.caiGouList;
				let listData = this.GET_PUBLISH.publishPurchase.imgList.imageData;
				console.log(listData, '---------------listData------------')
				if (params.purcTitle === '') {
					uni.showToast({
						title: '请填写采购名称！',
						icon: 'none',
						duration: 1000
					});
					return
				}
				if (!uni.getStorageSync('landRegist')) {
					this.landRegistra(); // 判断登录状态
				} else if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					uni.showLoading({
						// 展示loading
						title: '加载中'
					});
					params.purcState = e; // 状态
					if (listData) { // 附件
						console.log(listData, '用户附件')
						listData.map((items, index) => {
							if (items.imgName) {
								params.imgList.push(items.imgName)
							}
						})
					};
					params.userId = landRegistLG.user.id; // id
					params.purcType = String(this.GET_PUBLISH.publishPurchase.templetType);// 简单模板 // 普通模板
					delete params.purcCcodeStr; // 删除地址text字段
					params.day ? delete params.day : console.log('不存在');
					params.hour ? delete params.hour : console.log('不存在');
					params.minute ? delete params.minute : console.log('不存在');
					params.purcReceTime === '0-0-0' ? params.purcReceTime = '' : console.log('时间正确');
					let url = '/rest-rp/purc/add';
					if (this.routeParam.sourceTemp === 4) { // 来源于我的采购列表，用户属于更新数据
						url = '/rest-rp/purc/update';
					};
					if (params.purcType === '0') { // 简单模板需要传这些值
						params.purcEndTime = '';
						params.purcInvo = '0';
						params.purcFrei = '0';
					};
					uni.request({
						url: this.api2 + url, //接口地址。
						data: params,
						method: 'POST',
						header: {
							Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
						},
						success: response => {
							if (response.data.ret === '200') {
								uni.hideLoading(); // 隐藏 loading
								if (e === '0') { // 保存
									uni.showToast({
										title: '保存成功！',
										icon: 'none',
										duration: 1000
									});
									console.log(response.data.content);
									uni.navigateTo({
										url: '/modules/InstructionsPrice/Purchase/Purchase'
									});
								} else if (e === '1') { // 发布
									uni.showToast({
										title: '发布成功！',
										icon: 'none',
										duration: 1000
									});
									console.log(response.data.content);
									uni.navigateTo({
										url: '/modules/publishPurchase/selectTemplate/publishPurchaseFinish/publishPurchaseFinishShare?urlParams=' + this.urlCrypto(response.data.content, 0)
									});
								}
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
			caiGouPreview () {
				console.log('预览采购填写的内容');
				let caiGouList = this.GET_PUBLISH.publishPurchase.caiGouList;
				if (caiGouList.purcTitle === '') {
					uni.showToast({
						title: '请填写采购名称！',
						icon: 'none',
						duration: 1000
					});
					return
				}
				this.$store.commit('setPreviceCaiGou', true); // 更新setPreviceCaiGou
			}
		}
	};
</script>

<style>
	.editBtn-box{
		position: fixed;
		bottom: 0;
		z-index: 105;
		width: 100%;
		background: #2E2E30;
	}
	.editBtn{
		position: relative;
		width: 100%;
	}
	.saveBtn{
		position: relative;
		width: 33.333%;
	}
	.previewBtn{
		position: relative;
		width: 33.333%;
	}
	.publishBtn{
		position: relative;
		width: 33.333%;
	}
</style>
