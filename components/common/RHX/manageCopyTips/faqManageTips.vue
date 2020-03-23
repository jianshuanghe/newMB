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
				<!-- 复制，数组删除到没有时，默认展示一个添加项 -->
				<div class="manageCopyTips2">
					<div class="copy-manage-box" @tap='clickAddFaq'>
						<savePreviewBtn
						backGround= '#2E2E30'
						textColor='#FFFFFF'
						lineY='0'
						name='添加FAQ'
						padding='0.53vw'
						fontSize='3.733vw'
						lineHeight='6.666vw'
						width='25.333vw'
						widthImg='12px'
						heightImg='13px'
						marginImg= '1.333vw'
						:imgSrc='copy'></savePreviewBtn>
					</div>
					<div class="clear"></div>
				</div>
			</div>
			<div class="tips-box" v-if='TipsShow'>
				<!-- 管理、FAQ -->
				<div class="manageCopyTips1" :class="!manageShowS?'show':'hide'">
					<div class="manage-box left" @tap='clickManage' v-if="this.dataLists.length !=0">
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
					<div class="copy-box right" @tap='clickAddFaq'>
						<savePreviewBtn
						backGround= '#2E2E30'
						textColor='#FFFFFF'
						lineY='0'
						name='添加FAQ'
						padding='0.53vw'
						fontSize='3.733vw'
						lineHeight='6.666vw'
						width='25.333vw'
						widthImg='12px'
						heightImg='13px'
						marginImg= '1.333vw'
						:imgSrc='copy'></savePreviewBtn>
					</div>
					<div class="clear"></div>
				</div>
				<!-- 完成、FAQ-->
				<div class="manageCopyTips2" :class="manageShowS?'show':'hide'">
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
					<div class="copy-box right" @tap='clickAddFaqForbid'>
						<savePreviewBtn
						backGround= '#c0c0c1'
						textColor='#FFFFFF'
						lineY='0'
						name='添加FAQ'
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
	</div>
</template>

<script>
	import savePreviewBtn from '@/components/common/button/savePreviewBtn.vue';
	export default {
		props: ['dataList', 'itemsData', 'limitNum', 'udgeLastEmpty', 'isCopyData', 'isManageShow', 'manageCopyShow', 'manageType'],
		data() {
			return {
				copy:  this.Static+'publish/createBusiness/copy.png',
				manage:  this.Static+'publish/createBusiness/manage.png',
				TipsShow: true,
				manageSuccess:  this.Static+'publish/createBusiness/manageSuccess.png',
				manageShow: this.manageCopyShow,
				manageTypes: this.manageType,
				dataLists: this.dataList,
				itemsDatas: {}
			};
		},
		components: {
			savePreviewBtn
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
						// this.dataLists.push(items);
						console.log('只展示添加faq按钮')
						this.TipsShow = false;
						this.$emit('tap-ManageCopyTips',[this.dataLists, false]);
					} else if (this.dataLists.lenght === 1 && this.dataLists[0].defaultAdd === true) {
						console.log('只展示添加faq按钮')
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
			this.itemsDatas = JSON.parse(JSON.stringify(this.itemsData)); // 深拷贝数组第一项，目的时数组会不停变化，深拷贝下来的第一项不变，用来添加数组，当数组为空时还可以添加
		},
		methods: {
			clickManage () {
				console.log('触发管理项目按钮');
				this.manageShow = true;
				this.$emit('tap-ManageCopyTips',[this.dataLists, this.manageShow]); // 给模块组件返回当前数组、当前管理状态
			},
			clickAddFaq () {
				console.log('触发添加FAQ按钮');
				this.$emit('tap-addFaqLink',true)
			},
			clickSuccess () {
				console.log('触发完成按钮');
				this.manageShow = false;
				this.$emit('tap-ManageCopyTips',[this.dataLists, this.manageShow]); // 给模块组件返回当前数组、当前管理状态
			},
			clickAddFaqForbid () {
				console.log('管理状态下不可添加');
				uni.showToast({
					title: '管理状态下不可添加！',
					icon: 'none',
					duration: 500
				});
			}
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
	.manageCopyTips1{
		position: relative;
		width: 440upx;
		margin: 0 auto;
	}
	.manageCopyTips2{
		position: relative;
		width: 440upx;
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
</style>


