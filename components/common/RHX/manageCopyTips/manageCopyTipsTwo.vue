<!-- 实例
	<manageCopyTips
	:manageCopyShow='deleteMoveTipsShow' // 用来控制当前组件显示的内容
	:manageType='manageType' // 类型
	:dataList='dataList' // 传进入的数组
	:itemsData='dataList[0]' // 用来深拷贝的数组第一项
	@tap-ManageCopyTips='tapManageCopyTips'
	></manageCopyTips>
 -->
<template>
	<div class="manageCopyTips-content">
		<!-- 公有空间 -->
		<div class="common-box" v-if='isManageShow === true'>
			<div class="tips-box" v-if='!TipsShow'>
				<!-- 复制，数组删除到没有时，默认展示一个添加项，此时只可以复制，不可以操作其他功能 -->
				<div class="manageCopyTips">
					<div class="copy-manage-box" @tap='clickCopy'>
						<savePreviewBtn
						backGround= '#2E2E30'
						textColor='#FFFFFF'
						lineY='0'
						name='复加此项'
						padding='0.53vw'
						fontSize='3.733vw'
						lineHeight='6.666vw'
						width='25.333vw'
						widthImg='12px'
						heightImg='13px'
						marginImg='1.333vw'
						:imgSrc='copy'></savePreviewBtn>
					</div>
					<div class="clear"></div>
				</div>
			</div>
			<div class="tips-box" v-if='TipsShow'>
				<!-- 管理、复制 -->
				<div class="manageCopyTips" :class="!manageShowS?'show':'hide'">
					<div class="manage-box left" @tap='clickManage'>
						<savePreviewBtn
						backGround= '#2E2E30'
						textColor='#FFFFFF'
						lineY='0'
						name='管理项目'
						padding='0.53vw'
						fontSize='3.733vw'
						lineHeight='6.666vw'
						width='25.333vw'
						widthImg='12px'
						heightImg='13px'
						marginImg= '1.333vw'
						:imgSrc='manage'></savePreviewBtn>
					</div>
					<div class="copy-box center" @tap='clickCopy'>
						<savePreviewBtn
						backGround= '#2E2E30'
						textColor='#FFFFFF'
						lineY='0'
						name='复加此项'
						padding='0.53vw'
						fontSize='3.733vw'
						lineHeight='6.666vw'
						width='25.333vw'
						widthImg='12px'
						heightImg='13px'
						marginImg='1.333vw'
						:imgSrc='copy'></savePreviewBtn>
					</div>
					<div class="copy-box right" @tap='tapModuleAdd'>
						<savePreviewBtn
						backGround= '#2E2E30'
						textColor='#FFFFFF'
						lineY='0'
						name='新增样式'
						padding='0.53vw'
						fontSize='3.733vw'
						lineHeight='6.666vw'
						width='25.333vw'
						widthImg='12px'
						heightImg='13px'
						marginImg='1.333vw'
						:imgSrc='copy'></savePreviewBtn>
					</div>
					<div class="clear"></div>
				</div>
				<!-- 完成、复制 -->
				<div class="manageCopyTips" :class="manageShowS?'show':'hide'">
					<div class="manage-box left" @tap='clickSuccess'>
						<savePreviewBtn
						backGround= '#FFFFFF'
						borderStyle='1px solid #2E2E30'
						textColor='#2E2E30;'
						lineY='0'
						name='完成'
						padding='0.2666vw'
						fontSize='3.733vw'
						lineHeight='6.666vw'
						width='16vw'
						widthImg='12px'
						heightImg='13px'
						marginImg= '1.333vw'
						:imgSrc='manageSuccess'></savePreviewBtn>
					</div>
					<div class="copy-box center" @tap='clickCopyForbid'>
						<savePreviewBtn
						backGround= '#c0c0c1'
						textColor='#FFFFFF'
						lineY='0'
						name='复加此项'
						padding='0.53vw'
						fontSize='3.733vw'
						lineHeight='6.666vw'
						width='25.333vw'
						widthImg='12px'
						heightImg='13px'
						marginImg='1.333vw'
						:imgSrc='copy'></savePreviewBtn>
					</div>
					<div class="copy-box right" @tap='clickAddForbid'>
						<savePreviewBtn
						backGround= '#c0c0c1'
						textColor='#FFFFFF'
						lineY='0'
						name='新增样式'
						padding='0.53vw'
						fontSize='3.733vw'
						lineHeight='6.666vw'
						width='25.333vw'
						widthImg='12px'
						heightImg='13px'
						marginImg='1.333vw'
						:imgSrc='copy'></savePreviewBtn>
					</div>
					<div class="clear"></div>
				</div>
			</div>
		</div>
		<!-- 私有空间 -->
		<div class="cust-box" v-if='isManageShow === false'>
			<div class="tips-box" >
				<!-- 复制，数组删除到没有时，默认展示一个添加项，此时只可以复制，不可以操作其他功能 -->
				<div class="manageCopyTips">
					<div class="copy-manage-box" @tap='clickCopy'>
						<savePreviewBtn
						backGround= '#2E2E30'
						textColor='#FFFFFF'
						lineY='0'
						name='复加此项'
						padding='0.53vw'
						fontSize='3.733vw'
						lineHeight='6.666vw'
						width='25.333vw'
						widthImg='12px'
						heightImg='13px'
						marginImg='1.333vw'
						:imgSrc='copy'></savePreviewBtn>
					</div>
					<div class="clear"></div>
				</div>
			</div>
		</div>
		<!-- 添加新样式 -->
		<!-- 添加模块区域列表 -->
		<moduleAddList
		leftText='取消'
		centerText='新增样式'
		tips='请勾选其中一项!'
		rightText='保存'
		:dataList='moduleTempList'
		:translateY="this.VwVhToPx(2, 'vh')"
		scrollHeight='90vh'
		:marginBottomShow='true'
		:scrollY='true'
		rightColor='#02C2A2'
		type='1'
		:isAnimate='isAnimateModule'
		@tap-PreserveBotttomFixed='tapPreserveBotttomFixed'
		@tap-Cancel='tapCancel'
		@tap-Preserve='tapPreserve'
		v-if='moduleAddListShow'>
		</moduleAddList>
	</div>
</template>

<script>
	import copy from '@/static/mbcImg/publish/createBusiness/copy.png';
	import manage from '@/static/mbcImg/publish/createBusiness/manage.png';
	import manageSuccess from '@/static/mbcImg/publish/createBusiness/manageSuccess.png';
	import savePreviewBtn from '@/components/common/button/savePreviewBtn.vue';
	import moduleAddList from '@/components/common/RHX/moduleAddList/moduleAddList';
	export default {
		props: [
			'dataList', 
			'itemsData', 
			'limitNum', 
			'udgeLastEmpty', 
			'isCopyData', 
			'isManageShow', 
			'manageCopyShow', 
			'manageType',
			'moduleTempList'
			],
		data() {
			return {
				copy: copy,
				manage: manage,
				TipsShow: true,
				moduleAddListShow: false, // 是否展示添加模块列表
				manageSuccess: manageSuccess,
				manageShow: this.manageCopyShow,
				manageTypes: this.manageType,
				dataLists: this.dataList,
				itemsDatas: {}
			};
		},
		components: {
			savePreviewBtn,
			moduleAddList
		},
		computed: {
			i18n() {
				return this.$t('navigation');
			},
			manageShowS () {
				if (this.manageShow === true && this.dataList.length !== 0) {
					return true
				} else if (this.manageShow === true && this.dataList.length === 0) {
					return false
				} else if (this.manageShow === false) {
					return false
				}
			}
		},
		watch: {
			dataList: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听数管理变化---------------------------------------');
					this.dataLists = a;
					if (this.dataLists.length === 0) { // 如果把数组最后一项删除掉，那麽需要往数组中动态添加一项空数据用来添加新的子项
						let items = {};
						console.log(this.itemsDatas, '深拷贝下的第一组数据');
						for (let i in this.itemsDatas) {
							console.log(i);
							items[i] = this.keyText(i);
						};
						items.defaultAdd = true; // 用来标记默认添加的项
						this.dataLists.push(items);
						console.log('只展示复制按钮')
						this.TipsShow = false;
						this.$emit('tap-ManageCopyTips',[this.dataLists, false]);
					} else if (this.dataLists.lenght === 1 && this.dataLists[0].defaultAdd === true) {
						console.log('只展示复制按钮')
						this.TipsShow = false;
					} else if (!this.dataLists[0].defaultAdd){
						console.log('展示全部按钮')
						this.TipsShow = true;
					}
				},
				deep: true
			},
			manageCopyShow: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听展示变化---------------------------------------');
					this.manageShow = a;
				},
				deep: true
			},
			manageType: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听变化---------------------------------------');
					this.manageTypes = a;
				},
				deep: true
			}
		},
		created () {
			console.log(this.moduleTempList, '可添加的新样式！');
			this.itemsDatas = JSON.parse(JSON.stringify(this.itemsData)); // 深拷贝数组第一项，目的时数组会不停变化，深拷贝下来的第一项不变，用来添加数组，当数组为空时还可以添加
		},
		methods: {
			clickManage () {
				console.log('触发管理项目按钮');
				this.manageShow = true;
				this.$emit('tap-ManageCopyTips',[this.dataLists, this.manageShow]); // 给模块组件返回当前数组、当前管理状态
			},
			clickCopy () {
				console.log('触发复制按钮');
				this.changeData('copy');
			},
			clickSuccess () {
				console.log('触发完成按钮');
				this.manageShow = false;
				this.$emit('tap-ManageCopyTips',[this.dataLists, this.manageShow]); // 给模块组件返回当前数组、当前管理状态
			},
			clickCopyForbid () {
				console.log('管理状态下不可复制');
				uni.showToast({
					title: '管理状态下不可复制！',
					icon: 'none',
					duration: 500
				});
			},
			clickAddForbid () {
				console.log('管理状态下不可新增样式');
				uni.showToast({
					title: '管理状态下不可新增样式！',
					icon: 'none',
					duration: 500
				});
			},
			// 点击添加模块按钮
			tapModuleAdd (e) {
				console.log(e, '点击添加模块按钮');
				this.moduleAddListShow = true; // 展示添加模块列表
				this.isAnimateModule = false; // 取消模块管理动画
				console.log(this.isAnimateModule, '----------------------isAnimateModule---------------------')
			},
			// 点击picker取消
			tapCancel (e) {
				console.log('点击picker取消');
				this.moduleAddListShow = false; // 取消展示添加模块列表
			},
			// 点击picker确定
			tapPreserve (e) {
				console.log(e, '点击picker确定');
				console.log(this.dataLists)
				// this.$emit('tap-PreserveBotttom', e); // 将选中的值返回给父组件
				this.moduleAddListShow = false; // 取消展示添加模块列表
				this.dataLists = this.dataLists.concat(e.dataList);
				console.log(JSON.parse(JSON.stringify(this.dataLists)), '添加样式后的数组');
				this.$emit('tap-ManageCopyTips',[JSON.parse(JSON.stringify(this.dataLists)), this.manageShow]); // 给模块组件返回当前数组、当前管理状态
			},
			// 跟新dataList数组返回给前台
			upDataList (e) {
				console.log(e, '先添加的模块数据');
				this.dataList.push(e); // 新修改的数据
				this.merge = true; // 合并数据
				this.moduleShow = false; // 不展示模块
				this.$emit('tab-ModuleList', [this.dataList, this.merge, this.moduleShow]);
			},
			// 点击添加模块底部确定-----fixed----按钮
			tapPreserveBotttomFixed () {
				this.$emit('tap-PreserveBotttom');
			},
			changeData(type){
				console.log('用户操作数据统一返回值');
				let items = {};
				console.log(this.itemsDatas, '深拷贝下的第一组数据');
				if (type === 'delete') {
					console.log('删除组件');
				} else if (type === 'copy') {
					console.log('复制组件');
					if (this.dataLists.length === 0) { // 若果在空数组状态下，需要填充默认数据
						console.log('判断当前为空数组状态');
						this.manageShow = true;
					} else if (this.dataLists.length > 0) {
						if (this.limitNum) {
							if (Number(this.dataLists.length) < Number(this.limitNum)) {
								console.log('判断当前为非空数组状态');
								console.log(this.dataLists[this.dataLists.length - 1]);
								
								this.dataLists.map((items, index)=>{
									if (items.defaultAdd) {
										delete items.defaultAdd
									};
								});
								items = JSON.parse(JSON.stringify(this.dataLists[this.dataLists.length - 1])); // 复制最后一项
								if (this.isCopyData === false) {
									for(let key  in items){
										console.log(key, '----------------key--------------')
										if (key === 'minCount' || key === 'maxCount' || key === 'money') {
											items[key] = 0
										}
									}
								}
								if (this.udgeLastEmpty === true) {
									console.log('判断上一项数据最小值不能为空');
									if (this.dataLists[this.dataLists.length - 1].minCount === 0) {
										uni.showToast({
											title: '未填写最小起批量或者填写的最小起批量不符合规则！',
											icon: 'none',
											duration: 1000
										});
										return
									};
								}
								this.dataLists.push(items);
							} else {
								uni.showToast({
									title: '不能添加了！',
									icon: 'none',
									duration: 500
								});
								return
							}
						} else {
							console.log('判断当前为非空数组状态');
							console.log(this.dataLists[this.dataLists.length - 1]);
							this.dataLists.map((items, index)=>{
								if (items.defaultAdd) {
									delete items.defaultAdd
								}
							})
							items = JSON.parse(JSON.stringify(this.dataLists[this.dataLists.length - 1])); // 复制最后一项
							
							this.dataLists.push(items);
						}
					}
					console.log(items, '----------------添加items-------------------')
				}
				this.$emit('tap-ManageCopyTips',[this.dataLists, this.manageShow]); // 给模块组件返回当前数组、当前管理状态
				items = {};
			},
		}
	};
</script>

<style>
	.manageCopyTips-content{
		position: relative;
		width: 100%;
		margin-top: 40upx;
		margin-bottom: 30upx;
	}
	.manageCopyTips{
		position: relative;
		width: 660upx;
		margin: 0 auto;
	}
	.manage-box{
		width: 190upx;
	}
	.copy-box{
		position: relative;
		width: 190upx;
	}
	.copy-manage-box{
		position: relative;
		width: 190upx;
		margin: auto;
	}
	.center{
		position: absolute;
		margin-left: 32vw;
	}
</style>


