<template>
	<div class="bottomBtnOne-content">
		<!-- 遮罩层 -->
		<div class="mask" v-if="maskShow"></div>
		<!-- 上层btn组件编辑状态 -->
		<div class="btn-edit" :class="disabled ? 'show' : 'hide'">
			<fixedBgBtn isPosiTion="relative" bbottom="0upx" bColor="" paddingNum="" bgColor="" bShadow="0 -1px 0 0 #F5F5F5">
				<div class="businessBtn left">
					<div class="itemsBtn left" @tap="tapStore"><btsBtn colorType="1" name="商家" :imgSrc="ficon"></btsBtn></div>
					<div class="itemsBtn left" @tap="contact"><btsBtn colorType="1" name="联系" :imgSrc="fticon"></btsBtn></div>
					<!-- <div class="itemsBtn left"><btsBtn colorType="1" name="收藏" :imgSrc="ficon"></btsBtn></div> -->
				</div>
				<div class="priceBtn left">
					<!-- 定制模板里的按钮为特殊化 -->
					<div class="madeBtn" v-if="routeParam.instrucCustType === '1'"><div class="made-text">立即定制</div></div>
					<!-- 共有模板按钮 -->
					<div class="commonBtn" v-if="routeParam.instrucCustType !== '1'">
						<!-- 左侧按钮 -->
						<div class="publishBtn left">
							<publishBtnLeft
								:activeAdd="addBtnList.activeAdd"
								bgImage="linear-gradient(135deg, #FAD161 0%, #F77F3B 100%)"
								:btnData="addBtnList.btnLeft"
								:name="addBtnList.btnLeft.name === '' || !addBtnList.btnLeft.name ? '添加按钮' : addBtnList.btnLeft.name"
								:isShowDel="addBtnList.btnLeft.delShow"
								:indexNum="0"
								@tap-AddBtnIndex="tapAddBtnIndex"
								@tap-EditAddBtn="tapEditAddLeftBtn"
								@tap-DeleteBtn="tapDeleteLeftBtn"
							></publishBtnLeft>
						</div>
						<!-- 右侧按钮 -->
						<div class="publishBtn1 left">
							<publishBtnRight
								:activeAdd="addBtnList.activeAdd"
								bgImage="linear-gradient(134deg, #15D49F 0%, #57D6CF 100%)"
								:btnData="addBtnList.btnRight"
								:name="addBtnList.btnRight.name || '添加按钮'"
								:isShowDel="addBtnList.btnRight.delShow"
								:indexNum="1"
								@tap-AddBtnIndex="tapAddBtnIndex"
								@tap-EditAddBtn="tapEditAddRightBtn"
								@tap-DeleteBtn="tapDeleteRightBtn"
							></publishBtnRight>
						</div>
					</div>
				</div>
				<div class="clear"></div>
				<!-- 添加自定义按钮 -->
				<div class="btn-content" v-if="addBtnShow">
					<bottomBtnAdd
						:activeAdd="addBtnList.activeAdd"
						:addBtnList="addBtnList"
						@tap-AddCancelData="tapAddCancelData"
						@tap-UpDataBtnAdd="tapUpDataBtnAdd"
						@tap-BusinessBtnAdd="tapBusinessBtnAdd"
					></bottomBtnAdd>
				</div>
			</fixedBgBtn>
		</div>
		<!-- 上层btn组件预览状态 -->
		<div class="btn-preview" :class="!disabled ? 'show' : 'hide'">
			<fixedBgBtn :bbottom="bbottom" bColor="" paddingNum="" bgColor="" bShadow="0 -1px 0 0 #F5F5F5">
				<div class="businessBtn left" :style="{ width: !addBtnList.addBtnSHow && routeParam.instrucCustType !== '1' ? '100%' : '50%' }">
					<div class="itemsBtnBox">
						<div class="itemsBtn left" @tap="tapStorePreview"><btsBtn colorType="1" name="商家" :imgSrc="ficon"></btsBtn></div>
						<div class="itemsBtn left" @tap="tapContactPreview"><btsBtn colorType="1" name="联系" :imgSrc="fticon"></btsBtn></div>
						<div class="itemsBtn left" @tap="tapCollectPreview"><btsBtn colorType="1" name="收藏" :imgSrc="ftticon"></btsBtn></div>
					</div>
				</div>
				<div class="priceBtn left">
					<!-- 定制模板里的按钮为特殊化 -->
					<div class="madeBtn" v-if="routeParam.instrucCustType === '1'" @tap="clickMadeBtn"><div class="made-text">立即定制</div></div>
					<!-- 共有模板按钮 -->
					<div class="commonBtn" v-if="routeParam.instrucCustType !== '1' && addBtnList.addBtnSHow">
						<!-- 左侧按钮 -->
						<div
							class="publishBtn left"
							v-if="addBtnList.btnLeft.leftBtnShow"
							:style="{ width: !addBtnList.btnRight.rightBtnShow ? '100%' : '50%' }"
							@tap="btnGoToDetile(addBtnList.btnLeft)"
						>
							<publishBtnLeft
								:disabled="disabled"
								:activeAdd="addBtnList.activeAdd"
								bgImage="linear-gradient(135deg, #FAD161 0%, #F77F3B 100%)"
								:btnData="addBtnList.btnLeft"
								:name="addBtnList.btnLeft.name || '添加按钮'"
								:isShowDel="false"
								:indexNum="0"
							></publishBtnLeft>
						</div>
						<!-- 右侧按钮 -->
						<div
							class="publishBtn1 left"
							v-if="addBtnList.btnRight.rightBtnShow"
							:style="{ width: !addBtnList.btnLeft.leftBtnShow ? '100%' : '50%' }"
							@tap="btnGoToDetile(addBtnList.btnRight)"
						>
							<publishBtnRight
								:disabled="disabled"
								:activeAdd="addBtnList.activeAdd"
								bgImage="linear-gradient(134deg, #15D49F 0%, #57D6CF 100%)"
								:btnData="addBtnList.btnRight"
								:name="addBtnList.btnRight.name || '添加按钮'"
								:isShowDel="false"
								:indexNum="1"
							></publishBtnRight>
						</div>
					</div>
				</div>
				<div class="clear"></div>
			</fixedBgBtn>
		</div>
		<!-- 商机信息组件 -->
		<div class="store-content" v-if="storeShow">
			<businessStore 
			:disabled="disabled" 
			:defaultAddImg="defaultAddImg" 
			:businessTemList="businessTemList" 
			@tap-ReferBusiness='tapReferBusiness'
			@tap-BusinessStore="tapBusinessStore"
			></businessStore>
		</div>
		<!-- 添加电话 -->
		<div class="tel-contnet" v-if="telShow">
			<businessTel :disabled="disabled" :defaultAddImg="defaultAddImg" :businessTemList="businessTemList" @tap-BusinessTel="tapBusinessTel"></businessTel>
		</div>
	</div>
</template>

<script>
import fixedBgBtn from '@/components/common/button/fixedBgBtn.vue';
import btsBtn from '@/components/common/button/btsBtn.vue';
import publishBtn from '@/components/common/button/publishBtn.vue';
import publishBtnLeft from '@/components/common/RHX/bottom/publishBtn/left.vue';
import publishBtnRight from '@/components/common/RHX/bottom/publishBtn/right.vue';
import savePreviewBtn from '@/components/common/button/savePreviewBtn.vue';
import businessStore from '@/components/common/RHX/bottom/businessStore/businessStore';
import businessTel from '@/components/common/RHX/bottom/businessTel/businessTel';
import bottomBtnAdd from '@/components/common/RHX/bottom/bottomBtnAdd/bottomBtnAdd';
import ficon from '@/static/mbcImg/my/ficon.png';
import fticon from '@/static/mbcImg/my/fticon.png';
import love from '@/static/mbcImg/publish/purchase/store.png';
import loved from '@/static/mbcImg/publish/purchase/stored.png';
export default {
	components: {
		fixedBgBtn,
		btsBtn,
		publishBtn,
		publishBtnLeft,
		publishBtnRight,
		savePreviewBtn,
		businessStore,
		businessTel,
		bottomBtnAdd
	},
	props: ['disabled', 'idTemp', 'forcePreview', 'bbottom', 'routeParam', 'defaultAddImg', 'businessTemList', 'moduleDateList', 'moduleTempList'],
	data() {
		return {
			webView: {
				show: false,
				url: ''
			},
			moduleDateLists: this.moduleDateList, // 模板数据
			maskShow: false, // 遮罩层，默认不展示
			isPubishShow: false, // 判断用户是否发布，发布的说明书，用户打开的按钮展示不同；true：发布， false:未发布、编辑中、草稿等
			storeShow: false, // 商家信息
			telShow: false, // 联系电话
			addBtnShow: false, // 添加按钮
			ficon: ficon,
			fticon: fticon,
			ftticon: love,
			loved:loved,
			love:love,
			addBtnList: {
				addBtnSHow: true, // 添加按钮模块是否展示，默认展示
				activeAdd: -1, // 记录用户点击哪个按钮
				btnLeft: {
					add: 0,
					leftBtnShow: true, // 左侧按钮是否展示，默认展示
					delShow: false,
					type: null, // 按钮类型  0 URL  1、立即定制 2、立即购买 3、立即咨询 4、立即询价
					name: '',
					url: '',
					custId: null
				},
				btnRight: {
					add: 1,
					rightBtnShow: true, // 右侧按钮是否展示， 默认展示
					delShow: false,
					type: null, // 按钮类型  0 URL  1、立即定制 2、立即购买 3、立即咨询 4、立即询价
					name: '',
					url: '',
					custId: null
				},
				disabledLater: null
			}
		};
	},
	watch: {
		moduleDateList: {
			handler(a, b) {
				console.log('----------------statusTemp--------------');
				this.moduleDateLists = a;
				console.log(this.moduleDateLists, '----------this.moduleDateLists-----------');
				let userActionBtn = this.moduleDateLists.content.context.tempCon.userActionBtn;
				if (userActionBtn) {
					// 左侧按钮数据赋值
					this.addBtnList.btnLeft.type = userActionBtn.middleBtn.btnType;
					this.addBtnList.btnLeft.name = userActionBtn.middleBtn.btnName;
					this.addBtnList.btnLeft.url = userActionBtn.middleBtn.btnLink;
					this.addBtnList.btnLeft.custId = userActionBtn.middleBtn.custId;
					// 右侧按钮赋值
					this.addBtnList.btnRight.type = userActionBtn.rightBtn.btnType;
					this.addBtnList.btnRight.name = userActionBtn.rightBtn.btnName;
					this.addBtnList.btnRight.url = userActionBtn.rightBtn.btnLink;
					this.addBtnList.btnRight.custId = userActionBtn.rightBtn.custId;
				}
				console.log(this.addBtnList, '------------this.addBtnList------------');
				if (this.forcePreview === true) {
					this.judgeBtnShowType(true);
				}
				if (a.content.isFollow === '1') {
					this.ftticon = this.loved;
				} else {
					this.ftticon = this.love;
				}
			},
			deep: true
		},
		disabled: {
			handler(a, b) {
				console.log('----------------statusTemp--------------');
				this.disabledLater = b;
				this.judgeBtnShowType(b);
			},
			deep: true
		},
	},
	created() {
		console.log(this.idTemp, '----------第一城按钮idTemp-------------');
		console.log(this.moduleDateLists, '-------------this.moduleDateLists.---------------');
		if (this.moduleDateLists) {
			let userActionBtn = this.moduleDateLists.content.context.tempCon.userActionBtn;
			// 左侧按钮数据赋值
			this.addBtnList.btnLeft.type = userActionBtn.middleBtn.btnType;
			this.addBtnList.btnLeft.name = userActionBtn.middleBtn.btnName;
			this.addBtnList.btnLeft.url = userActionBtn.middleBtn.btnLink;
			this.addBtnList.btnLeft.custId = userActionBtn.middleBtn.custId;
			// 右侧按钮赋值
			this.addBtnList.btnRight.type = userActionBtn.rightBtn.btnType;
			this.addBtnList.btnRight.name = userActionBtn.rightBtn.btnName;
			this.addBtnList.btnRight.url = userActionBtn.rightBtn.btnLink;
			this.addBtnList.btnRight.custId = userActionBtn.rightBtn.custId;
		}
	},
	methods: {
		tapReferBusiness(e){
			console.log(e, '是否要更新数据商家');
			this.$emit('tap-RUpDataBusiness', e);
		},
		btnGoToDetile(e) {
			console.log(e, '按钮里的信息');
			if (this.routeParam.sourceTemp === 2 || this.routeParam.sourceTemp === 3) {
				// 先去判断是否来自流量承载页，或者是平台
				let parmas = {
					userId: this.routeParam.lookUserId,
					id: this.routeParam.instrucId,
					type: 6
				};
				this.platformAccount(this.routeParam.isFlow, 6, parmas, this.routeParam);
			}
			if (e.type === 1) {
				console.log('定制');
				uni.navigateTo({
					url: e.url
				});
			} else if (e.type === 0) {
				console.log('链接');
				uni.navigateTo({
					url: '/modules/createBusiness/webView/webView?url=' + e.url
				});
			}
		},
		tapStorePreview() {
			console.log(this.businessTemList, '商机信息');
			uni.navigateTo({
				url: '/modules/myCompany/mybusiness/my-business?id=' + this.routeParam.creatorId
			});
		},
		tapContactPreview() {
			console.log(this.businessTemList, '电话');

			if (this.routeParam.sourceTemp === 2 || this.routeParam.sourceTemp === 3) {
				// 先去判断是否来自流量承载页，或者是平台
				let parmas = {
					userId: this.routeParam.lookUserId,
					id: this.routeParam.instrucId,
					type: 8
				};
				this.platformAccount(this.routeParam.isFlow, 8, parmas, this.routeParam).then(res => {
					console.log(res);
				})
				.catch(err => {
					console.log(err);
				});
			};
			uni.makePhoneCall({
				phoneNumber: this.businessTemList.contactTelphone // 拨打电话
			});
		},
		tapCollectPreview() {
			console.log(this.businessTemList, '收藏');
			let parmas = {
				userId: this.routeParam.lookUserId,
				modelId: this.routeParam.instrucId,
				type: 0
			};
			this.focusStore(parmas).then(res => {
				console.log(res);
				if (res.success === true) {
					this.ftticon = this.loved;
				} else {
					this.ftticon = this.love;
				}
			})
			.catch(err => {
				console.log(err);
			});
		},
		// 根据编辑和预览状态判断上层按钮展示形式
		judgeBtnShowType(e) {
			console.log(e, '根据编辑和预览状态判断上层按钮展示形式');
			if (e === true) {
				// 预览状态
				let LName = this.addBtnList.btnLeft.name; // 左侧按钮name值
				// let LDel = this.addBtnList.btnLeft.delShow; // 左侧按钮删除按钮显示情况
				let RName = this.addBtnList.btnRight.name; // 右侧按钮name值
				// let RDel = this.addBtnList.btnRight.delShow; // 右侧按钮删除按钮显示情况
				if (LName === '' && RName === '') {
					// 左右都不填写
					this.addBtnList.addBtnSHow = false; // 添加按钮组件整体不展示， 商机、电话、收藏铺满
					this.addBtnList.btnLeft.leftBtnShow = false; // 左侧按钮不展示
					this.addBtnList.btnRight.rightBtnShow = false; // 右侧按钮不展示
				} else if (LName !== '' && RName === '') {
					// 左侧不为空， 右侧为空
					this.addBtnList.addBtnSHow = true; // 添加按钮组件整体展示， 商机、电话、收藏50%
					this.addBtnList.btnLeft.leftBtnShow = true; // 左侧按钮展示，左侧按钮铺满按钮组件
					this.addBtnList.btnRight.rightBtnShow = false; // 右侧按钮不展示，左侧按钮铺满按钮组件
				} else if (LName === '' && RName !== '') {
					// 左侧为空， 右侧不为空
					this.addBtnList.addBtnSHow = true; // 添加按钮组件整体展示， 商机、电话、收藏50%
					this.addBtnList.btnLeft.leftBtnShow = false; // 左侧按钮不展示，右侧按钮铺满按钮组件
					this.addBtnList.btnRight.rightBtnShow = true; // 右侧按钮展示，右侧按钮铺满按钮组件
				} else if (LName !== '' && RName !== '') {
					// 左侧不为空， 右侧不为空
					this.addBtnList.addBtnSHow = true; // 添加按钮组件整体展示， 商机、电话、收藏50%
					this.addBtnList.btnLeft.leftBtnShow = true; // 左侧按钮展示，左侧按钮50%按钮组件
					this.addBtnList.btnRight.rightBtnShow = true; // 右侧按钮展示，右侧按钮50%按钮组件
				}
			}
		},
		// 点击商机按钮
		tapStore() {
			console.log('点击商机按钮');
			this.storeShow = true;
			this.maskShow = false; // 不展示遮罩层
			this.addBtnShow = false; // 隐藏添加按钮组件
			this.addBtnList.activeAdd = -1; // 点击项归回原始值
			this.$emit('tap-BottomNum', false);
			this.$emit('tap-BottomBtnOne', this.addBtnList);
		},
		// 用户触发商家信息里的内容
		tapBusinessStore(e) {
			console.log(e, '用户触发商家信息里的内容');
			this.storeShow = false;
			this.$emit('tap-BottomNum', e);
			this.$emit('tap-BottomBtnOne', this.addBtnList);
		},
		// 点击联系按钮
		contact() {
			console.log('点击联系按钮');
			this.telShow = true;
			this.maskShow = false; // 不展示遮罩层
			this.addBtnShow = false; // 隐藏添加按钮组件
			this.addBtnList.activeAdd = -1; // 点击项归回原始值
			this.$emit('tap-BottomNum', false);
			this.$emit('tap-BottomBtnOne', this.addBtnList);
		},
		// 用户触发tel里的内容
		tapBusinessTel(e) {
			console.log(e, '用户触发tel里的内容');
			this.telShow = false;
			this.$emit('tap-BottomNum', e);
			this.$emit('tap-BottomBtnOne', this.addBtnList);
		},
		// 点击取消
		cancel() {
			console.log('用户触发点击遮罩层');
			this.$emit('tap-BottomNum', true);
			this.hiden = false;
			this.phone = '';
		},
		// 点击确定按钮
		confirm() {
			console.log('用户触发点击确定按钮');
			this.$emit('tap-BottomNum', true);
			this.$emit('bottomPhone', this.phone);
			this.hiden = false;
			this.phone = '';
		},
		// 用户触发左边按钮---编辑状态
		tapEditAddLeftBtn(e) {
			console.log(e, '用户触发左边按钮---编辑状态');
			this.addBtnList.activeAdd = e; // 用户点击哪个按钮
			this.maskShow = true; // 展示遮罩层
			this.addBtnShow = true;
			this.$emit('tap-BottomNum', false);
			this.$emit('tap-BottomBtnOne', this.addBtnList);
		},
		// 用户触发左侧按钮----删除状态
		tapDeleteLeftBtn(e) {
			console.log(e, '用户触发左侧按钮----删除状态');
			this.addBtnList.activeAdd = -1; // 归位
			let btnLeft = {
				add: 0,
				leftBtnShow: true, // 左侧按钮是否展示，默认展示
				delShow: false,
				type: null,
				name: '',
				url: '',
				custId: null
			};
			this.addBtnList.btnLeft = btnLeft;
			// this.$emit('tap-BottomBtnOneDate',this.addBtnList);
			this.$emit('tap-BottomBtnOne', this.addBtnList);
		},
		// 用户触发右边按钮---编辑状态
		tapEditAddRightBtn(e) {
			console.log(e, '用户触发右边按钮---编辑状态');
			this.addBtnList.activeAdd = e; // 用户点击哪个按钮
			this.maskShow = true; // 展示遮罩层
			this.addBtnShow = true;
			this.$emit('tap-BottomNum', false);
			this.$emit('tap-BottomBtnOne', this.addBtnList);
		},
		// 用户触发右侧按钮----删除状态
		tapDeleteRightBtn(e) {
			console.log(e, '用户触发右侧按钮----删除状态');
			this.addBtnList.activeAdd = -1; // 归位
			let btnRight = {
				add: 1,
				rightBtnShow: true, // 右侧按钮是否展示， 默认展示
				delShow: false,
				type: null,
				name: '',
				url: '',
				custId: null
			};
			this.addBtnList.btnRight = btnRight;
			// this.$emit('tap-BottomBtnOneDate',this.addBtnList);
			this.$emit('tap-BottomBtnOne', this.addBtnList);
		},
		// 触发添加按钮里内容
		tapBusinessBtnAdd(e) {
			console.log(e, '触发添加按钮里内容');
			this.maskShow = false; // 不展示遮罩层
			this.addBtnShow = false;
			this.$emit('tap-BottomNum', e);
		},
		// 用户点击取消按钮------还原数据
		tapAddCancelData() {
			console.log('用户点击取消按钮------还原数据');
			this.addBtnList = this.addBtnList;
			this.addBtnList.activeAdd = -1; // 点击项归回原始值
			this.$emit('tap-BottomBtnOne', this.addBtnList);
		},
		// 更新添加按钮的数据
		tapUpDataBtnAdd(e) {
			console.log(e, '更新添加按钮的数据');
			this.addBtnList = e;
			this.addBtnList.activeAdd = -1; // 点击项归回原始值
			this.$emit('tap-BottomBtnOne', this.addBtnList);
		},
		// 立即定制
		clickMadeBtn() {
			console.log('立即定制');
			console.log(this.moduleDateLists, '基数据');
			let data = this.moduleDateList.content;
			if (!uni.getStorageSync('landRegist')) {
				this.landRegistra(); // 判断登录状态
			} else if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				if (landRegistLG.user.id === Number(data.userId)) {
					// 本人创建，不可下单
					uni.showToast({
						title: '本人创建，不可下单!',
						icon: 'none',
						duration: 1000
					});
					return;
				} else {
					console.log(this.routeParam, '链接参数');
					let isFlow = this.routeParam.isFlow;
					let orderType = this.routeParam.orderType;
					let modules = data.context.tempCon.modules;
					let custModules = data.context.tempCon.custModules;
					console.log(this.madeParams, '定制传参数');
					this.madeParams.instrucId = data.instrucId;
					this.madeParams.instrucId = data.instrucId;
					this.madeParams.userId = landRegistLG.user.id;
					this.madeParams.orderType = orderType;
					// 渲染使用
					this.madeParams.bannerImg = data.bannerImg;
					this.madeParams.instrucIntro = data.instrucIntro;
					this.madeParams.instrucTitle = data.instrucTitle;
					this.madeParams.compLogo = data.userRetVO.compLogo;
					this.madeParams.companyName = data.userRetVO.companyName;
					custModules.map((items, index) => {
						if (items.type === 'INPUT_TABLE_B') {
							let count = 0;
							items.dataList.map((item, key) => {
								console.log('开始计算总数');
								count += item.count;
								console.log(count, '总数量');
								console.log(count, '总数量');
								this.madeParams.orderSpCount = count;
							});
						}
						if (items.type === 'INPUT_TEXT_A') {
							this.madeParams.orderContent = items.content;
						}
					});
					modules.map((items, index) => {
						console.log(items.type, '------------类型------------');
						if (items.type === 'TEXT_A') {
							console.log('地址');
							this.madeParams.expressAddr = items.dataList[0].cityStr + items.dataList[0].value;
						}
						if (items.type === 'MONEY_A') {
							let count = this.madeParams.orderSpCount;
							console.log(count, '总数判断');
							let dataPrice = [];
							let e = items.dataList;
							for (let i in e) {
								let items = {
									key: '',
									valueMin: 0,
									valueMax: 0
								};
								if (e.length > 1) {
									if (e[i].errorStr === false) {
										e[i].money === '' || e[i].money === 0 ? (items.key = 0) : (items.key = e[i].money);
										items.valueMin = e[i].minCount;
										items.valueMax = e[i].maxCount;
										if (Number(i) === Number(e.length - 1)) {
											items.valueMin = e[i].minCount;
											items.valueMax = 99999999;
										}
										dataPrice.push(items);
									} else {
										console.log('执行特殊情况');
										dataPrice[i - 1].valueMin = e[i - 1].minCount;
										dataPrice[i - 1].valueMax = 99999999;
										dataPrice.push(items);
										break;
									}
								} else if (e.length === 1) {
									if (e[i].errorStr === false) {
										e[i].money === '' || e[i].money === 0 ? (items.key = 0) : (items.key = e[i].money);
										items.valueMin = e[i].minCount;
										items.valueMax = 99999999;
										dataPrice.push(items);
									} else {
										break;
									}
								}
							}
							console.log(dataPrice, '重置价格明细数据');
							dataPrice.map((item, key) => {
								console.log(count, '计算单价、总价');
								if (count >= item.valueMin && count <= item.valueMax) {
									this.madeParams.orderDjMoney = item.key;
									this.madeParams.orderSpMoney = count * item.key;
								}
							});
							this.madeParams.orderUnit = items.unit;
						}
					});
					this.madeParams.context.custModules = custModules;
					if (Number(isFlow) === 0) {
						// 非流量平台
						this.madeParams.isFlow = 0;
					} else {
						// 流量平台
						this.madeParams.isFlow = 1;
					}
					console.log(this.madeParams, '最终数据');
					uni.setStorageSync('madeParams', JSON.stringify(this.urlCrypto(this.madeParams, 0))); // 缓存用户登录信息
					uni.navigateTo({
						url: '/modules/createBusiness/templateFinish/templateFinishMade'
					});
				}
			}
		}
	}
};
</script>

<style>
.mask {
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	background: rgba(66, 65, 65, 0.29);
}
.Btn-box {
	width: 100%;
}
.businessBtn {
	position: relative;
	width: 50%;
	background: #F5F5F5;
	height: 100upx;
}
.itemsBtnBox{
	padding: 0 6%;
}
.itemsBtn {
	position: relative;
	width: 33.33%;
}
.priceBtn {
	position: relative;
	width: 50%;
}

.publishBtn {
	width: 50%;
	background-image: linear-gradient(135deg, #FAD161 0%, #F77F3B 100%);
	height: 100upx;
}
.publishBtn1 {
	width: 50%;
	background-image: linear-gradient(134deg, rgb(21, 212, 159) 0%, rgb(87, 214, 207) 100%);
	height: 100upx;
}
.preview-box {
	position: relative;
	width: 100%;
	min-height: 100vh;
	padding-bottom: 10vh;
}
.preview-content {
	position: relative;
	width: 100vw;
	padding-bottom: 15vh;
}
.bottom-box {
	width: 40%;
	height: 100%;
	float: left;
	z-index: 10;
}
.bottom-business {
	width: 50%;
	height: 100%;
	float: left;
}
.bottom-business > image {
	width: 26%;
	height: 40%;
	padding-top: 10%;
	padding-left: 58%;
	display: block;
}
.bottom-business > p {
	font-size: 20upx;
	color: #9b9b9b;
	padding-left: 56%;
}
.bottom-businesss {
	width: 50%;
	height: 100%;
	float: left;
}
.bottom-businesss > image {
	width: 26%;
	height: 40%;
	padding-top: 10%;
	padding-left: 20%;
	display: block;
}
.bottom-businesss > p {
	font-size: 20upx;
	color: #9b9b9b;
	padding-left: 18%;
}
.bottom-Mask {
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	z-index: 10;
}
.bottom-Mask-A {
	width: 100%;
	height: 532upx;
	background: #ffffff;
	position: absolute;
	bottom: 0;
}
.bottom-Mask-B {
	width: 100%;
	height: 112upx;
	border-bottom: 2upx solid #e2e2e2;
	font-size: 32upx;
	color: #2e2e30;
	text-align: center;
	line-height: 112upx;
}
.bottom-Mask-C {
	width: 90%;
	height: 100upx;
	margin: 60upx auto;
	border-bottom: 2upx solid #d2d2d2;
}
.bottom-Mask-C > input {
	width: 100%;
	height: 100%;
}
.bottom-Mask-A > p {
	width: 90%;
	margin: -44upx auto;
	font-size: 24upx;
	color: #fab100;
}
.bottom-Mask-D {
	width: 100%;
	height: 100upx;
	border-top: 2upx solid #f5f5f5;
	position: absolute;
	bottom: 0;
}
.bottom-Mask-D > div:nth-of-type(1) {
	width: 50%;
	height: 100%;
	text-align: center;
	line-height: 100upx;
	font-size: 32upx;
	color: #030303;
	float: left;
}
.bottom-Mask-D > div:nth-of-type(2) {
	width: 50%;
	height: 100%;
	text-align: center;
	line-height: 100upx;
	font-size: 32upx;
	color: #ffffff;
	background-image: linear-gradient(134deg, #15d49f 0%, #57d6cf 100%);
	float: left;
}
.clear {
	clear: both;
}
.madeBtn {
	position: relative;
	width: 100%;
}
.made-text {
	font-family: PingFangSC-Regular;
	font-size: 32upx;
	color: #ffffff;
	letter-spacing: 0;
	text-align: center;
	line-height: 100upx;
	background: #2e2e30;
}
</style>
