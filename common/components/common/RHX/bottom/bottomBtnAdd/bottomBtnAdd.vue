<template>
	<div class="bottomBtnAdd-content">
		<div class="bottomBtnAdd">
			<bottomBtnAddPicker
			leftText='取消'
			centerText='添加按钮'
			rightText='保存'
			rightColor='#02C2A2'
			@tap-Cancel='tapCancel'
			@tap-Preserve='tapPreserve'>
				<bottomBtnAddInfor
				:activeAdd= 'activeAdd'
				:addBtnList='addBtnLists'
				@tap-EditAginBtnData='tapEditAginBtnData'
				@tap-AddType='tapAddType'
				@tap-BottomBtnAddInfor='tapBottomBtnAddInfor'>
				</bottomBtnAddInfor>
			</bottomBtnAddPicker>
		</div>
	</div>
</template>

<script>
	import bottomBtnAddPicker from './bottomBtnAddPicker';
	import bottomBtnAddInfor from './bottomBtnAddInfor';
	export default {
		components: {
			bottomBtnAddPicker,
			bottomBtnAddInfor
		},
		props: [
			'activeAdd',
			'addBtnList',
		],
		data() {
			return {
				addBtnLists: JSON.parse(JSON.stringify(this.addBtnList)), // 深拷贝数组
				newsData: null,
				addType: null, // 添加的类型 0 URL  1、立即定制 2、立即购买 3、立即咨询 4、立即询价
			};
		},
		created() {
		},
		watch: {
			addBtnList:  {
				handler(a, b) {
					console.log(a, '----------------addBtnList--------------')
					this.addBtnLists = a;
				},
				deep: true
			},
			activeAdd: {
				handler(a, b) {
					console.log(a, '----------------activeAdd--------------');
					this.activeAdds = a;
				},
				deep: true
			}
		},
		computed: {
		},
		methods: {
			// 点击picker取消
			tapCancel (e) {
				console.log('点击picker取消');
				// console.log(this.businessTemListM, '-------------this.businessTemList-------------');
				// this.businessTemLists = this.businessTemListM;
				this.moduleAddListShow = false; // 取消展示添加模块列表
				this.$emit('tap-BusinessBtnAdd', true);
				this.$emit('tap-AddCancelData');
			},
			// 点击picker确定
			tapPreserve () {
				console.log(this.addBtnLists, '点击picker确定');
				if (this.addBtnLists.activeAdd === 0) { // 左边
					this.addBtnLists.btnLeft = this.newsData;
					if (this.addBtnLists.btnLeft.name === '') {
						uni.showToast({
							title: '按钮名称不能为空！',
							icon: 'none',
							duration: 1000
						});
						return
					};
					let URL = this.addBtnLists.btnLeft.url;
					let url = URL.slice(0,8);
					console.log(url);
					if (String(this.addBtnLists.btnLeft.type) !== '1') {
						if(url.indexOf('https://') != -1 || url.indexOf('http://') != -1){
							console.log('链接填写正确');
							this.addBtnLists.btnLeft.type = this.addType;
						}else{
							if (URL === '') {
								uni.showToast({
									title: '链接不能为空！',
									icon: 'none',
									duration: 1000
								});
								return
							} else {
								uni.showToast({
									title: '链接填写错误！',
									icon: 'none',
									duration: 1000
								});
								return
							}
						};
					}
					
					console.log(this.addBtnLists, '--------------this.addBtnLists----------------');
					
				} else if (this.addBtnLists.activeAdd === 1) { // 右边
					this.addBtnLists.btnRight = this.newsData;
					console.log(this.addBtnLists.btnRight, '-----------this.addBtnLists.btnRight----------')
					this.addBtnLists.btnRight.type = this.addType;
					if (this.addBtnLists.btnRight.name === '') {
						uni.showToast({
							title: '按钮名称不能为空！',
							icon: 'none',
							duration: 1000
						});
						return
					};
					let URL = this.addBtnLists.btnRight.url;
					let url = URL.slice(0,8);
					console.log(url);
					if (String(this.addBtnLists.btnRight.type) !== '1') {
						if(url.indexOf('https://') != -1 || url.indexOf('http://') != -1){
							console.log('链接填写正确');
							this.addBtnLists.btnRight.type = this.addType;
						}else{
							if (URL === '') {
								uni.showToast({
									title: '链接不能为空！',
									icon: 'none',
									duration: 1000
								});
								return
							} else {
								uni.showToast({
									title: '链接填写错误！',
									icon: 'none',
									duration: 1000
								});
								return
							}
						};
					}
					console.log(this.addBtnLists, '--------------this.addBtnLists----------------');
					
				}
				this.$emit('tap-UpDataBtnAdd', this.addBtnLists);
				this.moduleAddListShow = false; // 取消展示添加模块列表
				this.$emit('tap-BusinessBtnAdd', true);
				
			},
			// 用户选择按钮的类型
			tapAddType(e) {
				console.log('用户选择按钮的类型');
				this.addType = e;
			},
			// 用户再次编辑按钮的信息类型
			tapEditAginBtnData(e) {
				console.log(e, '用户再次编辑按钮的信息类型');
				this.addBtnLists = e;
				console.log(this.addBtnLists, '+++++++++++++++++++++++++');
				if (this.addBtnLists.activeAdd === 0) { // 左边
					this.newsData = this.addBtnLists.btnLeft;
				} else if (this.addBtnLists.activeAdd === 1) { // 右边
					this.newsData = this.addBtnLists.btnRight;
				}
			},
			// 更新按钮数据
			tapBottomBtnAddInfor (e) {
				console.log(e, '更新按钮数据');
				let addinfor = e;
				if(addinfor.name !== '') {
					addinfor.delShow = true; // 展示删除按钮
				} else {
					addinfor.delShow = false; // 不展示删除按钮
				};
				if(addinfor.name !== '') {
					addinfor.delShow = true; // 展示删除按钮
				} else {
					addinfor.delShow = false; // 不展示删除按钮
				};
				this.newsData = addinfor;
			},
			// 校验链接地址有效性
			urlValidity (URL) {
				let url = URL.slice(0,8);
				  console.log(url)
				if(url.indexOf('https://') != -1 || url.indexOf('http://') != -1){
				 return URL
				}else{
				  return false;
				}
			}
		}
	};
	</script>
	<style>
		.bottomBtnAdd-content{
			position: relative;
			width: 100%;
		}
		.bottomBtnAdd{
			position: relative;
			width: 100%;
			height: 45vh;
			background: #fff;
		}
		.piacker-box{
			position: fixed;
			width: 100vw;
			z-index: 99999999;
			height: 100vh;
			top: 0;
			left: 0;
		}
		.mask{
			width: 100%;
			height: 100%;
			position: absolute;
			background: rgba(66,65,65,0.29);
			z-index: 1000000000;
		}
		.ani-box{
			position: absolute;
			width: 100vw;
			z-index: 1000000001;
			bottom: 0;
			background: #FFFFFF;
			box-shadow: 0 -2px 10px 0 rgba(46,46,48,0.20);
			border-radius: 20px;
			border-radius: 0px;
			transition: all .3s ease;
		}
		.rPicker-content{
			position: absolute;
			width: 100vw;
		}
		.rPicker{
			position: relative;
			width: 100%;
			background: #fff;
			background: #FFFFFF;
			box-shadow: 0 -2px 10px 0 rgba(46,46,48,0.20);
			border-radius: 20px;
			border-radius: 0px;
		}
		.title-box{
			position: relative;
			width: 100%;
			padding: 0 40upx;
		}
		.title-left{
			position: relative;
			width: 10%;
			text-align: left;
			font-family: PingFangSC-Regular;
			font-size: 32upx;
			color: #9B9B9B;
			letter-spacing: 0;
			line-height: 112upx;
		}
		.title-center{
			position: relative;
			width: 80%;
			text-align: center;
			font-family: PingFangSC-Regular;
			font-size: 32upx;
			color:  #2E2E30;
			letter-spacing: 0;
			line-height: 112upx;
		}
		.title-right{
			position: relative;
			width: 10%;
			text-align: right;
			font-family: PingFangSC-Regular;
			font-size: 32upx;
			color:#02C2A2;
			letter-spacing: 0;
			line-height: 112upx;
		}
		.content-box{
			position: relative;
			/* padding: 0 40upx; */
		}
</style>

