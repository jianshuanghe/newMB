<template>
	<div class="rSelect-content">
		<div class="rSelect">
			<div class="listContentTop" @tap='closeSelect' v-if='selectShow'></div>
			<div class="title-select" @tap='clickSelect' :style="{lineHeight:lineHeight}">
				{{titleText}}
				<image class="upDown" :src='upDownImg'></image>
			</div>
			<div class="listContent" @tap='closeSelect' v-if='selectShow'></div>
			<div class="list-box" v-if='selectShow'>
				<!-- 列表 -->
				<div class="list-select" :style="{borderRadius: manngeShow && disabled ? '' : '0 0 4px 4px'}">
					<div class="listA" v-if='dataLists.length <=7'>
						<div class="items-select" v-for="(item, index) in dataLists" v-if="item.iconTitle !=''"
						:key="index" @tap='clickSelectItems(item, index)'>
							<div class="item-icon left">
								<image class="icon-img" :src="item.icon.catalog_white"></image>
							</div>
							<div class="item-text left">
								<text class="text">{{item.iconTitle}}</text>
							</div>
							<div class="clear"></div>
							<div class="line" v-if='index !== dataLists.length - 1' :animation="animationData"></div>
						</div>
					</div>
					<div class="listA" v-if='dataLists.length >7'>
						<scroll-view scroll-y="true" class="scroll-Y">
							<div class="items-select" v-for="(item, index) in dataLists" v-if="item.iconTitle !=''"
							:key="index" @tap='clickSelectItems(item, index)'>
								<div class="item-icon left">
									<image class="icon-img" :src="item.icon.catalog_white"></image>
								</div>
								<div class="item-text left">
									<text class="text">{{item.iconTitle}}</text>
								</div>
								<div class="clear"></div>
								<div class="line" v-if='index !== dataLists.length - 1' :animation="animationData"></div>
							</div>
						</scroll-view>
					</div>
				</div>
				<!-- 管理模块 -->
				<div class="mannge-box" v-if='manngeShow && disabled' @tap='clickMange'>
					管理模块
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import downSJ from '@/static/mbcImg/publish/createBusiness/upSJ.png';
	import upSJ from '@/static/mbcImg/publish/createBusiness/downSJ.png';
	export default {
		components: {
		},
		props: [
			'disabled', 
			'titleText', 
			'manngeShow', 
			'dataList',
			'lineHeight',
			'isModuleListShow',
			'isModuleListShows'],
		data() {
			return {
				animationData:{},
				upSJ: upSJ,
				downSJ: downSJ,
				upDownImg: upSJ,
				selectShow: false, // 是否展示select
				dataLists: this.dataList
			};
		},
		created() {
		},
		watch: {
			isModuleListShow: {
				handler(a, b) {
					if (a === false) {
						this.upDownImg = this.upSJ;
						this.selectShow = a;
					}
					console.log(a, b, '--------------------------------------监听valueOne变化---------------------------------------');
				},
				deep: true
			},
			isModuleListShows: {
				handler(a, b) {
					if (a === false) {
						this.upDownImg = this.upSJ;
						this.selectShow = a;
					}
					console.log(a, b, '--------------------------------------监听valueOne变化---------------------------------------');
				},
				deep: true
			}
		},
		methods: {
			// 点击下拉title
			clickSelect (e) {
				console.log('点击触发下拉框');
				if (this.selectShow === false) {
					this.selectShow = true;
					this.upDownImg = this.downSJ;
					this.$emit('tap-ModuleListShow', true);
				} else if (this.selectShow === true) {
					this.selectShow = false;
					this.upDownImg = this.upSJ;
					this.$emit('tap-ModuleListShow', false);
				}
			},
			// 点击select子项
			clickSelectItems (e,key) {
				console.log(e, key, '点击select子项');
				this.$emit('tap-ModuleItems', [e, key]);
			},
			// 关闭select
			closeSelect(){
				this.clickSelect();
			},
			// 管理模块
			clickMange () {
				console.log('触发管理模块');
				
				this.$emit('tap-ManageModule');
			},
			// 点击完成按钮时触发
			onConfirm(e) {
				console.log(e, 'input返回值');
				this.valueText = e.detail.value;
				this.$emit('tap-Input',this.valueText);
				this.inputBGs = '';
				this.inputBorders = '';
				this.inputBStyles = '';
			},
		}
	};
</script>

<style>
	.scroll-Y{
		position: relative;
		width: 100%;
		height: 60vh;
	}
	
	.rSelect-content{
		position: relative;
		width: 100%;
	}
	.rSelect{
		position: relative;
		width: 100%;
	}
	.title-select{
		position: relative;
		width: 100%;
		font-family: PingFangSC-Medium;
		font-size: 32upx;
		color: #2E2E30;
		letter-spacing: 0;
		text-align: right
	}
	.upDown{
		position: relative;
		width: 20upx;
		height: 18upx;
		margin-left: 1.5vw;
	}
	.listContentTop{
		position: fixed;
		top: 0upx;
		width: 20vw;
		height: 88upx;
		left: -10vw;
		z-index: 999999999999;
	}
	.listContent{
		position: fixed;
		top: 88upx;
		left: 0;
		width: 100vw;
		height: 100vh;
	}
	.list-box{
		position: relative;
		width: 400upx;
		/* margin: auto; */
		float: right;
		opacity: 0.98;
		border-radius: 4px 4px 0 0;
		border-radius: 4px 4px 0px 0px;
	}
	.list-select{
		position: relative;
		width: 100%;
		height: 100%;
		background: #2E2E30;
	}
	
	.items-select{
		position: relative;
		width: 400upx;
		padding-left: 36upx;
		padding-right: 40upx;
	}
	.item-icon{
		position: relative;
		width: 20%;
	}
	.icon-img{
		position: relative;
		width: 32upx;
		height: 32upx;
		top: 38upx;
		left: 18upx;
	}
	.item-text{
		position: relative;
		width: 75%;
	}
	.text{
		position: relative;
		width: 100%;
		font-family: PingFangSC-Regular;
		font-size: 32upx;
		color: #FFFFFF;
		letter-spacing: 0;
		line-height: 108upx;
	}
	.mannge-box{
		position: relative;
		width: 100%;
		background: #02C2A2;
		border-radius: 0 0 4px 4px;
		font-family: PingFangSC-Medium;
		font-size: 32upx;
		color: #FFFFFF;
		letter-spacing: 0;
		text-align: center;
		line-height: 108upx;
	}
	.line{
		transform: scaleY(0.2);
	}
</style>
