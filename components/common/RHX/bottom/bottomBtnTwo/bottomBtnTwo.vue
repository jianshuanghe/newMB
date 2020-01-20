<template>
	<div class="bottomBtnTwo">
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
</template>

<script>
		import savePreviewPublish from '@/components/common/RHX/savePreviewPublish/savePreviewPublish';
		export default {
			components: {
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
				'statusTemp',
				'sourceTemp',
				'routeParam',
				'moduleDateList',
				'businessTemList',
			],
			data() {
				return {
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
				// 点击bisiness组件里的内容需要将下边的按钮的隐藏
				tapBottomNum(e){
					console.log('点击bisiness组件里的内容需要将下边的按钮的隐藏');
					this.botBtnShow = e;
					this.$emit('set-FixedShow', e);
				},
				// 此方法用来判断按钮的显示情况
				bottomBtnSHow(){
					console.log('此方法用来判断按钮的显示情况');
					if(this.sourceTemps === 0) {
						this.userEditShow = true;
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
			}
		};
	</script>
	
	<style>
		.editBox{
			width: 100%;
			background: #F5F5F5 ;
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
