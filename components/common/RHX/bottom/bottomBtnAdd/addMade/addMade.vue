<template>
	<div class="addMade-content">
		<div class="addMade">
			<!-- 我的定制说明书列表 -->
			<madeList
			@tap-MadeList='tapMadeList'
			></madeList>
			<!-- + 添加新的定制模版 -->
			<div class="addMade-box">
				<div class="addMade-btn" @tap='goToTemplatePro'>+ 添加新的定制模版</div>
			</div>
		</div>
	</div>
</template>

<script>
	import madeList from './madeList/madeList';
	export default {
		components: {
			madeList
		},
		data() {
			return {
				itemsData:{ // 按钮数据
					btnShow: true, // 按钮是否展示，默认展示
					delShow: false,
					type: null,
					name: '',
					url: '',
					custId: null
				},
			};
		},
		props: [
			'disabled',
			'addBtnList',
		],
		watch: {
			addBtnList: {
				handler(a, b) {
					console.log(a, b, '-------------------addBtnList-----------------')
					this.showTypeAdd(a);
				},
				deep: true
			},
		},
		created() {
			this.showTypeAdd(this.addBtnList);
		},
		watch: {
			addBtnList:  {
				handler(a, b) {
					console.log(a, '----------------addBtnList--------------')
				},
				deep: true
			}
		},
		computed: {
		},
		methods: {
			goToTemplatePro () {
				console.log('to选择模版(1/4)');
				if (!uni.getStorageSync('landRegist')) {
					this.landRegistra(); // 判断登录状态
				} else if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let urlParams = {
						isFlow: 0, // 平台来源
						orderType: 0, // 订单类型
						sourceTemp: 0, // 说明书来源
						aiListTemp: 0, // 是否展示ai
						id: 1, // 模板id
						isMenu: '0', // 横向导航
						instrucId:  null, // 说明书id
						lookUserId: null, // 浏览者
						instrucCustType: '1',
						creatorId: landRegistLG.user.id, // 说明书创建者
						instrucState: null // 说明书状态
					};
					uni.navigateTo({
						url: '/modules/createBusiness/templatePro/templatePro?urlParams=' + this.urlCrypto(urlParams, 0)
					});
				}
			},
			// 自动带入显示类型
			showTypeAdd(e) {
				console.log(e, '--------------e--------------');
				if (e.activeAdd === 0) { // 左边
					this.addType = e.btnLeft.type;
					this.itemsData = e.btnLeft;
				} else if (e.activeAdd === 1) { // 右边
					this.addType = e.btnRight.type;
					this.itemsData = e.btnRight;
				}
			},
			// 用户选择的立即定制
			tapMadeList(e) {
				console.log(e, '用户选择的立即定制');
				this.itemsData.name = e.instrucTitle;
				let lookUserId = null;
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					lookUserId = landRegistLG.user.id;
				} else {
					lookUserId = uni.getStorageSync('UUID');
				};
				let urlParams = {
					isFlow: 0, // 平台来源
					orderType: 0, // 订单类型
					sourceTemp: 5, // 说明书来源 公共模式
					aiListTemp: 0, // 是否展示ai
					id: e.tempId, // 模板id
					isMenu: e.isMenu, // 横向导航
					instrucId:  e.instrucId, // 说明书id
					lookUserId: lookUserId, // 浏览者
					creatorId: e.userId, // 说明书创建者
					instrucCustType: e.instrucCustType, // 模板类型
					instrucState: e.instrucState // 说明书状态
				};
				console.log(urlParams, 'urlParams');
				let tempUrl = '/modules/createBusiness/templatePro/templatePro?urlParams=' +  this.urlCrypto(urlParams, 0);
				this.itemsData.url = tempUrl; // 测试地址，正式需要根据id,说明书类型，路径，配置url
				this.itemsData.custId = String(e.instrucId);
				this.$emit('tap-AddMade', this.itemsData);
			}
		}
	};
</script>

<style>
	.addMade-box{
		position: relative;
		bottom: 0;
		padding: 2upx 0 32upx 0;
	}
	.addMade-btn{
		position: relative;
		width: 294upx;
		height: 66upx;
		background: #2E2E30;
		margin: 0 auto;
		font-family: PingFangSC-Regular;
		font-size: 26upx;
		color: #FFFFFF;
		text-align: center;
		line-height: 66upx;
	}
</style>
