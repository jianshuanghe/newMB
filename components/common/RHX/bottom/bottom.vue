<template>
	<div class="btn-box">
		<!-- 使用此模块 -->
		<div class="editBox" :style='{bottom: 0}' v-if='userEditShow' @tap='clickUseTemp'>
			<div class="btnEdit">使用此模版</div>
		</div>
		<!-- 非使用此模版 -->
		<div class="btn-box-content"  v-if='!userEditShow'>
			<!-- 上边按钮层-----------------商家、联系、添加按钮等 -->
			<div :class="bottomlocas !== '0px' ? 'bottom-con' : 'bottom-con'" :style="{bottom: bottomlocas}" v-if='busiCantAddShow && isNewsAShow'>
				<bottomBtnOne
				:disabled='disabled'
				:idTemp='idTemp'
				:moduleDateList='moduleDateList'
				:moduleTempList='moduleTempList'
				:defaultAddImg='defaultAddImg'
				:businessTemList='businessTemList'
				:bbottom='bbottom'
				:routeParam='routeParam'
				:forcePreview='forcePreview'
				@tap-Consult-Btn='tapConsultBtn'
				@tap-RUpDataBusiness='tapRUpDataBusiness'
				@tap-BottomBtnOne='tapBottomBtnOne'
				@tap-BottomNum='tapBottomNum'
				></bottomBtnOne>
			</div>
			<!-- 下边按钮层 -->
			<div class="bot-btn-box" v-if='botBtnShow && isNewsAShow'>
				<!-- 去编辑编辑 -->
				<div class="editBox" :style='{bottom: 0}' v-if='editShow' @tap='clickEdit'>
					<div class="btnEdit">去编辑</div>
				</div>
				<!-- 保存、预览、发布 -->
				<div class="savePreviewPublish" v-if='savePrePubShow'>
					<savePreviewPublish
					@tap-Save='clickSave'
					@tap-Preview='clickPreview'
					@tap-Publish='clickPublish'></savePreviewPublish>
				</div>
				<!-- 立即定制 -->
				<div class="editBox" :style='{bottom: 0}' v-if='madeShow'>
					<div class="btnEdit">立即定制</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import bottomBtnOne from '@/components/common/RHX/bottom/bottomBtnOne/bottomBtnOne';
	import savePreviewPublish from '@/components/common/RHX/savePreviewPublish/savePreviewPublish';
	export default {
		components: {
			bottomBtnOne,
			savePreviewPublish
		},
		props: [
			'disabled',
			'defaultAddImg',
			'busiCantAddShows',
			'editShows',
			'savePrePubShows',
			'madeShows',
			'bottomloca',
			'isNewsAShow',
			'statusTemp',
			'sourceTemp',
			'idTemp',
			'routeParam',
			'moduleDateList',
			'moduleTempList',
			'businessTemList',
		],
		data() {
			return {
				add:false,
				dels: this.Static+'my/dels.png',
				addtos:'',
				bottomlocas: this.bottomloca,
				bbottom: '98upx',
				forcePreview: false, // 是否强制预览
				botBtnShow: true, // 是否展示下边按钮层组件
				userEditShow: true, // 默认展示使用此模板，也就是默认是从模板列表进来的---------使用此模块
				busiCantAddShow: false, // 默认不展示，编辑状态展示此模块-----------商家、联系、添加按钮
				editShow: false, // 默认不展示， 用户点击预览之后展示此模块，预览模块消失。用户再次点击去编辑，此模块消失，展示预览模块
				savePrePubShow: false, // // 默认不展示， 用户点击编辑之后展示此模块，编辑模块消失。用户再次点击去预览，此模块消失，展示编辑模块
				madeShow: false, // 立即定制按钮，默认不显示，规则：{同一id下展示不可点击，不同id下展示可点击）
				statusTemps: this.statusTemp,
				sourceTemps: this.sourceTemp,
				routeParams: this.routeParam,
				moduleDateLists: this.moduleDateList,
			};
		},
		watch: {
			statusTemp: {
				handler(a, b) {
					console.log('----------------statusTemp--------------')
					this.statusTemps = a;
				},
				deep: true
			},
			bottomloca: {
				handler(a, b) {
					console.log('----------------bottomloca--------------')
					this.bottomlocas = a;
				},
				deep: true
			},
			sourceTemp: {
				handler(a, b) {
					console.log('-----------------sourceTemp-------------')
					this.sourceTemps = a;
					this.bottomBtnSHow();
				},
				deep: true
			},
			routeParam: {
				handler(a, b) {
					console.log('-----------------routeParam-------------')
					this.routeParams = a;
				},
				deep: true
			},
			busiCantAddShows: {
				handler(a, b) {
					console.log('----------------busiCantAddShow--------------')
					this.busiCantAddShow = a;
				},
				deep: true
			},
			editShows: {
				handler(a, b) {
					console.log('----------------editShow--------------')
					this.editShow = a;
				},
				deep: true
			},
			savePrePubShows: {
				handler(a, b) {
					console.log('----------------savePrePubShow--------------')
					this.savePrePubShow = a;
				},
				deep: true
			},
			madeShows: {
				handler(a, b) {
					console.log('---------------madeShow---------------')
					this.madeShow = a;
				},
				deep: true
			},
		},
		created() {
			this.bottomBtnSHow();
		},
		methods: {
			// 判断是否要更新商家信息
			tapRUpDataBusiness(e) {
				console.log(e, '判断是否要更新商家信息');
				this.$emit('tap-UpDataBusinessData', e);
			},
			// 点击bisiness组件里的内容需要将下边的按钮的隐藏
			tapBottomNum(e){
				console.log('点击bisiness组件里的内容需要将下边的按钮的隐藏');
				this.botBtnShow = e;
				this.$emit('tapUpDataBusinessData', e);
				this.$emit('set-FixedShow', e);
			},
			// 此方法用来判断按钮的显示情况
			bottomBtnSHow(){
				console.log(this.routeParams, '此方法用来判断按钮的显示情况');
				console.log(this.routeParams.sourceTemp, '链接上的参数');
				console.log(this.sourceTemps, '------------sourceTemps');
				if (this.routeParams.sourceTemp === this.sourceTemps) {
					if(Number(this.routeParams.sourceTemp) === 0) {
						this.userEditShow = true;
						console.log('模板列表进来的')
					} else if (Number(this.routeParams.sourceTemp) === -1) {
						this.userEditShow = false;
					} else {
						this.userEditShow = false;
						if (this.routeParams.creatorId === this.routeParams.lookUserId) {
							// 一致
							console.log('一致');
							if (Number(this.routeParams.instrucState) === 1) {
								// z状态 发布
								if (this.routeParams.isPut === 0) {
									// 进入预览状态 可编辑
									console.log('进入预览状态 可编辑');
									this.botBtnShow = true;
									this.busiCantAddShow = true;
									this.bottomlocas = '13vw';
									this.editShow = true;
									this.bbottom = '100upx';
									this.forcePreview = false;
								} else {
									// 进入预览状态 不可编辑
									console.log('进入预览状态 不可编辑');
									this.botBtnShow = false;
									this.botBtnShow = false;
									this.busiCantAddShow = true;
									this.bottomlocas = '0vw';
									this.disableds = false;
									this.bbottom = '0upx';
									this.forcePreview = true;
								}
							} else if (Number(this.routeParams.instrucState) === 0) {
								// 进入预览状态 可编辑
								console.log('进入预览状态 可编辑');
								this.botBtnShow = true;
								this.busiCantAddShow = true;
								this.bottomlocas = '13vw';
								this.editShow = true;
								this.bbottom = '100upx';
								this.forcePreview = false;
							} else if (Number(this.routeParams.instrucState) === 2) {
								// 进入预览状态 可编辑
								console.log('进入预览状态 已下架可编辑');
								this.botBtnShow = true;
								this.busiCantAddShow = true;
								this.bottomlocas = '13vw';
								this.editShow = true;
								this.bbottom = '100upx';
								this.forcePreview = false;
							}
						} else {
							// 不一致
							// 进入预览状态 不可编辑
							console.log('不一致');
							this.botBtnShow = false;
							this.busiCantAddShow = true;
							this.bottomlocas = '0vw';
							this.disableds = false;
							this.bbottom = '0upx';
							this.forcePreview = true;
						}
						
					}
				} else {
					this.userEditShow = false;
				}
				
			},
			// 触发使用此模板
			clickUseTemp () {
				console.log('触发使用此模板');
				this.$emit('tap-UseTemp');
			},
			// 触发去编辑
			clickEdit () {
				console.log('触发去编辑');
				this.$emit('tap-GoEdit');
			},
			// 触发保存
			clickSave () {
				console.log('触发保存');
				this.$emit('tap-Save');
			},
			// 触发预览
			clickPreview () {
				console.log('触发预览');
				this.$emit('tap-Preview');
			},
			// 触发发布
			clickPublish () {
				console.log('触发发布');
				this.$emit('tap-Publish');
			},
			addtoTap:function(value){
				this.$emit('bottomTap',value)
			},
			bottomPhone:function(asd){
				this.$emit('botPhone',asd)
			},
			// 立即咨询组件
			tapConsultBtn (e) {
				this.$emit('tap-Consult-Bot',e)
			},
			// 用户操作完上层按钮返回的数据
			tapBottomBtnOne(e) {
				console.log(this.moduleDateList, '++++++++++++++++++模板数据++++++++++++++++++');
				console.log(e, '用户操作完上层按钮返回的数据');
				let moduleDateLists = this.moduleDateList;
				let userActionBtn = moduleDateLists.content.context.tempCon.userActionBtn;
				// 左侧按钮数据赋值
				userActionBtn.middleBtn.btnType = e.btnLeft.type;
				userActionBtn.middleBtn.btnName = e.btnLeft.name;
				userActionBtn.middleBtn.btnLink = e.btnLeft.url;
				userActionBtn.middleBtn.custId = e.btnLeft.custId;
				// 右侧按钮赋值
				userActionBtn.rightBtn.btnType = e.btnRight.type;
				userActionBtn.rightBtn.btnName = e.btnRight.name;
				userActionBtn.rightBtn.btnLink = e.btnRight.url;
				userActionBtn.rightBtn.custId = e.btnRight.custId;
				moduleDateLists.content.context.tempCon.userActionBtn = userActionBtn
				this.$emit('tap-BottomData',moduleDateLists);
			},
		}
	};
</script>

<style>
	.bottom-con{
		width: 100%;
		/* background: #F5F5F5 ; */
		/* height: 100upx; */
		position: fixed;
		z-index: 108;
	}
	.bottom-con1{
		width: 100%;
		background: #F5F5F5 ;
		z-index: 108;
	}
	.clear{
		clear: both;
	}
	.Choice{
		width: 100%;
		height: 160upx;
		background: red;
		clear: both;
	}
	.editBox{
		width: 100%;
		/* background: #F5F5F5 ; */
		height: 100upx;
		position: fixed;
	}
	.btnEdit{
		font-family: PingFangSC-Regular;
		font-size: 16px;
		background: #2E2E30;
		text-align: center;
		letter-spacing: 0;
		line-height: 100upx;
		color: #FFFFFF;
		opacity: 0.9;
	}
	.btnMade{
		font-family: PingFangSC-Regular;
		font-size: 16px;
		background: #2E2E30;
		text-align: center;
		letter-spacing: 0;
		line-height: 100upx;
		color: #FFFFFF;
	}
</style>
