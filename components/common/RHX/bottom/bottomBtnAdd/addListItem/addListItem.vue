<template>
	<div class="addListItem-content">
		<div class="addListItem">
			<div class="items left" v-for="(items, index) in addListItem" :key="index">
				<div 
				:class="active === items.value ? 'itemsText-img1' : 'itemsText-img'" 
				@tap='clickAddItems(items)'
				:style="!items.allowAdd ? noAllAddStyle : ''"
				>
					{{items.name}}
					<image class="JianTou" :src="active === items.value ? imgSjUp : imgSjDown" v-if='items.allowAdd'></image>
					<image class="JianTou" :src="noClickImg" v-if='!items.allowAdd'></image>
				</div>
			</div>
			<div class="clear"></div>
		</div>
	</div>
</template>

<script>
	export default {
		components: {
		},
		props: [
			'disabled', 
			'activeAdd',
			'addBtnList',
			'businessTemList',
			'defaultAddImg'
		],
		data() {
			return {
				noClickImg:  this.Static+'my/Image4.png', // 不可点击按钮箭头
				imgSjUp:  this.Static+'my/Image3.png', // 朝上箭头
				down: this.Static+'my/Image2.png', // 朝下箭头
				imgSjDown:  this.Static+'my/Image2.png', // 默认朝下箭头
				active: -1, // 用户点击items
				noAllAddStyle: { // 不可添加项展示样式
					color: '#9B9B9B',
					border: '2upx solid #9B9B9B',
					borderStyle: 'dashed'
				},
				addListItem: [ // value: 0 URL  1、立即定制 2、立即购买 3、立即咨询 4、立即询价
					{
						name: '立即咨询',
						value: 3,
						allowAdd: true, // 是否允许添加
					},
					{
						name: '立即定制',
						value: 1,
						allowAdd: true, // 是否允许添加
					},
					{
						name: '添加链接',
						value: 0,
						allowAdd: true, // 是否允许添加
					}
				]
			};
		},
		created() {
			this.isShowAdditems(this.activeAdd);
			this.itemsAllowTap(this.addBtnList);
		},
		watch: {
			addBtnList: {
				handler(a, b) {
					console.log(a, '----------------addBtnList--------------');
					
				},
				deep: true
			},
			activeAdd: {
				handler(a, b) {
					console.log(a, b, '--------------activeAdd------------------');
					this.isShowAdditems(a);
					this.itemsAllowTap(this.addBtnList);
				},
				deep: true
			},
			businessTemList: {
				handler(a, b) {
					console.log('----------------businessTemLists--------------')
					this.businessTemLists = a;
				},
				deep: true
			},
		},
		computed: {
		},
		methods: {
			itemsAllowTap(e) {
				console.log(e, '判断当前哪种按钮可以添加');
				// e.map((item, index)=>{
				// 	console.log(item.type, '筛选出已添加的按钮类型');
				// })
				for (let i in e) {
					console.log(e[i].type, '子项');
					if (e[i].type !== 'undefined') {
						console.log(e[i].type, '筛选出已添加的按钮类型');
						if (this.activeAdd !== e[i].add) { // 不是当前编辑下的按钮
							if (e[i].name !== ''){
								this.addListItem.map((items, index)=>{
									if (items.value === e[i].type) {
										console.log(items, '查看')
										items.allowAdd = false; // 此项不允许添加
									}
								})
							} else {
								this.addListItem.map((items, index)=>{
									if (items.value === e[i].type) {
										items.allowAdd = true; // 此项允许添加
									}
								})
							} 
						} else if (this.activeAdd === e[i].add) {
							this.addListItem.map((items, index)=>{
								if (items.value === e[i].type) {
									items.allowAdd = true; // 此项允许添加
								}
							})
						}
					}
				}
			},
			isShowAdditems(e) {
				console.log('判断用户需要展示哪个按钮类型');
				if (e === 0) { // 用户点击左侧按钮
					if (this.addBtnList.btnLeft) {
						this.active = this.addBtnList.btnLeft.type;
						this.addListItem.map((items, index)=>{
							if(items.value === this.active) {
								this.clickAddItems2(items);
							}
						});
					}
				} else if (e === 1) { // 用户点开的右侧按钮
					if (this.addBtnList.btnRight) {
						this.active = this.addBtnList.btnRight.type;
						this.addListItem.map((items, index)=>{
							if(items.value === this.active) {
								this.clickAddItems2(items);
							}
						});
					}
				}
			},
			clickAddItems2(e) {
				this.active = e.value;
				if(this.addBtnList.activeAdd === 0) { // 左侧按钮
					if (this.addBtnList.btnLeft) {
						this.addBtnList.btnLeft.type = this.active;
					}
				} else if (this.addBtnList.activeAdd === 1) { // 右侧按钮
					if (this.addBtnList.btnRight) {
						this.addBtnList.btnRight.type = this.active;
					}
				}
				this.$emit('tap-UpDataAddLsitItem', this.addBtnList);
				this.$emit('tap-AddListItem', e);
			},
			clickAddItems(e) {
				if (e.allowAdd === false) {
					uni.showToast({
						title: '此项不可添加！',
						icon: 'none',
						duration: 500
					});
					return
				}
				this.active = e.value;
				if(this.addBtnList.activeAdd === 0) { // 左侧按钮
					if (this.addBtnList.btnLeft) {
						this.addBtnList.btnLeft.type = this.active;
					}
					if (this.addBtnList.btnLeft.type === 3) {
						this.addBtnList.btnLeft.name = '立即咨询'
					}
				} else if (this.addBtnList.activeAdd === 1) { // 右侧按钮
					if (this.addBtnList.btnRight) {
						this.addBtnList.btnRight.type = this.active;
					}
					if (this.addBtnList.btnRight.type === 3) {
						this.addBtnList.btnRight.name = '立即咨询'
					}
				}
				console.log(this.active, '---------------this.active---------------');
				console.log(this.activeAdd, '------------------this.activeAdd-----------------');
				console.log(this.addBtnList, '---------------this.addBtnList--------------');
				console.log(e, '用户点击当前添加btn类型');
				this.$emit('tap-UpDataAddLsitItem', this.addBtnList);
				this.$emit('tap-AddListItem', e);
			}
		}
	};
</script>

<style>
	.addListItem-content{
		position: relative;
		width: 100%;
		margin-top: 4vw;
	}
	.addListItem{
		position: relative;
		width: 100%;
	}
	.items{
		position: relative;
		width: 33.333%;
		padding: 0 2vw;
		font-family: PingFangSC-Regular;
		font-size: 32upx;
		color: #02C2A2;
		text-align: center;
		line-height: 80upx;
		margin-bottom: 4vw;
	}
	.itemsText-img{
		position: relative;
		width: 100%;
		padding: 0 2vw;
		font-family: PingFangSC-Regular;
		font-size: 32upx;
		color: #02C2A2;
		text-align: center;
		line-height: 80upx;
		background: #FFFFFF;
		border: 2upx solid #02C2A2;
		border-style: dashed;
	}
	.itemsText-img1{
		position: relative;
		width: 100%;
		padding: 0 2vw;
		font-family: PingFangSC-Regular;
		font-size: 32upx;
		color: #FFFFFF;
		text-align: center;
		line-height: 80upx;
		background: #02C2A2 ;
		border: 2upx solid #02C2A2 ;
		border-style: '';
	}
	.JianTou{
		position: absolute;
		width: 18upx;
		height: 12upx;
		top: 36upx;
		right: 16upx;
	}
</style>
