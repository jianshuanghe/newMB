<template>
	<!-- 说明书详情 完善说明书 -->
	<view class="QRcodelist-edit">
		<view class="product-book-title">
			<div class="quickBtn-Fd left"><quickBtn></quickBtn></div>
			<div class="search-Fd left">{{ i18n.product3 }}</div>
		</view>
		<!-- 顶部填充 -->
		<view class="tian"></view>
		<view class="QRcodelist-edit-ti">完善基本信息，有利于帮您更快匹配到采购者哦</view>
		<view class="QRcodelist-edit-header">
			<view>个性名称(必填)</view>
			<view><input type="text" maxlength="19" @input="descInput" v-model="desc" placeholder="为您的说明书起个名字吧" placeholder-style="color:#BDBDBD" /></view>
			<view>{{ remnane }}/20</view>
		</view>
		<view class="QRcodelist-edit-Middle">
			<view>简短介绍(必填)</view>
			<view><input type="text" maxlength="49" @input="descIn" v-model="des" placeholder="快用一句话介绍一下您的说明书吧..." placeholder-style="color:#BDBDBD" /></view>
			<view>{{ rem }}/50</view>
		</view>
		<view class="QRcodelist-edit-look">
			<view>
				<image :src="look"></image>
				<span>查看示例</span>
			</view>
			<view><view>美峪黑尚莓莓果酒，以黑莓果为原料，经冷冻储存，榨汁、低温发酵、蒸馏、陈酿等工艺生产的自然水果蒸馏酒。酒体呈现琥珀光泽，香气宜人。欢迎您品鉴。</view></view>
		</view>
		<view class="QRcodelist-edit-lei" @tap="editpin()">
			<view>所属品类</view>
			<view v-if="this.editlei == ''">请选择</view>
			<view v-if="this.editlei != ''" style="color: black;">{{ editleis }}</view>
			<view><image :src="right"></image></view>
		</view>
		<view class="myheader-Keyword-box">
			<view class="myheader-Keyword-Tips">关键词</view>
			<view class="myheader-Keyword-industry">
				<div class="key-box" v-for="(item, index) in list" :key="index">
					<view class="myheader-Keyword-Label" v-if="item">
						{{ item }}
						<image :src="del" @tap="dele(index)"></image>
					</view>
				</div>
				<view class="myheader-Keyword-Labela" v-if="hiden === '1'"><input type="text" maxlength="8" focus="true" v-model="edit" @blur="sub()" /></view>
				<view class="myheader-Keyword-Labels" @tap="add()">+&nbsp;添加关键词</view>
			</view>
		</view>
		<view class="clear"></view>
		<view class="QRcodelist-edit-bao" @tap="editbao()">保存</view>
		<navigation v-if="QUICKNAVCO.show"></navigation>
		<!-- 所属品类 -->
		<view class="QRcodelist-edit-category" v-if="iscategory">
			<view class="QRcodelist-edit-greak">
				<view class="QRcodelist-edit-greak-one">
					<view @tap="quxiao()">取消</view>
					<view>选择说明书所属品类</view>
				</view>
				<view class="QRcodelist-edit-greak-two">
					<view v-for="(item, index) in arrs" :class="nums == index ? 'hidens' : ''" @tap="hidens(item, index)">{{ item.typeName }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
import navigation from '@/components/mbbo/navigation/navigation.vue';
import { mapMutations, mapGetters } from 'vuex';
export default {
	data() {
		return {
			remnane: 0,
			rem: 0,
			desc: '',
			des: '',
			look:  this.Static+'my/look.png',
			hiden: 2,
			num: 0,
			nums: 9999999999,
			edit: '',
			del:  this.Static+'my/del.png',
			list: [],
			id: '',
			editleiid:'',
			arr: [],
			editlei: '请选择',
			editleis: '',
			right:  this.Static+'my/right.png',
			iscategory: false,
			arrs: [
				{
					name: '机械及行业设备',
					hiden: false
				},
				{
					name: '五金、工具',
					hiden: false
				},
				{
					name: '照明工业',
					hiden: false
				}
			]
		};
	},
	components: {
		quickBtn,
		navigation
	},
	onLoad(opsin) {
		uni.setNavigationBarTitle({
			title: this.i18n.product3
		});
		this.id = opsin.id;
	},
	created() {
		this.edits();
		this.Varieties();
	},
	methods: {
		Varieties(){
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				// let params = {}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/instruc/getTypes', //接口地址。
					// data: params,
					method: 'GET',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						uni.hideLoading();
						console.log(response.data);
						this.arrs=response.data.content;
						// this.lists = response.data.content.instKeys
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
		edits() {
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				// let params = {}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/instruc/' + this.id, //接口地址。
					// data: params,
					method: 'GET',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						uni.hideLoading();
						console.log(response.data);
						this.arr = response.data.content;
						this.desc = response.data.content.instrucTitle;
						this.des = response.data.content.instrucIntro;
						this.list = response.data.content.keys;
						this.remnane = this.desc.length;
						this.rem = this.des.length;
						this.editleis = response.data.content.instrucCategoryStr;
						this.editlei =  response.data.content.instrucCategoryStr;
						console.log(this.arr);
						// this.lists = response.data.content.instKeys
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
		hidens(item, e) {
			// console.log(item)
			// if(item.hiden){
			// 	item.hiden=false;
			// }else{
			// 	item.hiden=true;
			// }
			// if(item.hiden){
			// 	for(var i=0;i<=this.arrs.length;i++){
			// 		this.arrs[i].hiden=false;
			// 	}
			// 	console.log(this.arrs)
			// }else{
			// 	for(var a=0;a<=this.arrs.length;a++){
			// 		this.arrs[a].hiden=false;
			// 		item.hiden=true;
			// 	}
			// 	this.arrs[e].hiden=true;
			// }
			this.nums = e;
			this.editleis = item.typeName;
			this.editlei = item.typeName;
			this.editleiid= item.id;
			// setTimeout((this.iscategory = !this.iscategory), 50000);
			// this.iscategory=!this.iscategory;
			this.iscategory = !this.iscategory
		},
		editpin() {
			this.iscategory = true;
			this.arrs.map((items,index)=>{
				if(this.editleis===items.typeName){
					this.nums = index
				}
			})
		},
		quxiao() {
			this.iscategory = false;
		},
		dele(e) {
			this.list.splice(e, 1);
			console.log(this.list);
		},
		descInput() {
			var txtVal = this.desc.length;
			this.remnane = 1 + txtVal;
		},
		descIn() {
			var txtVa = this.des.length;
			this.rem = 1 + txtVa;
		},
		add() {
			this.hiden = '1';
			this.num = '1';
			console.log(this.list);
		},
		sub() {
			if (this.edit === '') {
				// 失脚时没有数据
				this.hiden = 2;
			} else {
				// 失焦时存在数据
				this.hiden = 2;
				console.log('创建新标签');
				if (this.list.length > 14) {
					this.edit = '';
					uni.showToast({
						title: '最多只能添加15个标签',
						icon: 'none',
						duration: 1000
					});
					return false;
				} else {
					this.list.push(this.edit);
					this.edit = '';
				}
			}
		},
		editbao() {
			if (this.desc === '') {
				uni.showToast({
					title: '请填写名称',
					icon: 'none',
					duration: 1000
				});
				return false;
			} else if (this.des === '') {
				uni.showToast({
					title: '请填写介绍',
					icon: 'none',
					duration: 1000
				});
				return false;
			} else {
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					if (this.list.length == 0) {
						var params = {
							instrucTitle: this.desc,
							instrucIntro: this.des,
							instrucCategory: this.editleiid,
							keyList: ['']
						};
					} else {
						var params = {
							instrucTitle: this.desc,
							instrucIntro: this.des,
							instrucCategory: this.editleiid,
							keyList: this.list
						};
					}
					// 请求总数居时 参数为空
					uni.showLoading({
						// 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/instruc/' + this.id, //接口地址。
						data: params,
						method: 'POST',
						header: {
							Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
						},
						success: response => {
							uni.hideLoading();
							console.log(response.data);
							this.book();
							this.myproduct();
							this.product();
							this.Cus();
							this.inf();
							uni.navigateBack({});
							// this.lists = response.data.content
							// this.$store.commit('setproduct', this.list);
							// this.lists = response.data.content.instKeys
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
			}
		},
		book() {
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				// let params = {}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/instruc/' + this.id, //接口地址。
					// data: params,
					method: 'GET',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						uni.hideLoading();
						console.log(response.data);
						this.lists = response.data.content;
						this.$store.commit('setdetailed', this.lists);
						// this.lists = response.data.content.instKeys
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
		myproduct() {
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				// let params = {}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/instruc?userId='+landRegistLG.user.id+'&page=1', //接口地址。
					// data: params,
					method: 'GET',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						uni.hideLoading();
						console.log(response.data);
						this.list = response.data.content.list;
						this.$store.commit('setproduct', this.list);
						// this.lists = response.data.content.instKeys
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
		product() {
			//产品
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				// let params = {}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/instruc?userId='+landRegistLG.user.id+'&page=1&instrucCustType=0', //接口地址。
					// data: params,
					method: 'GET',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						uni.hideLoading();
						console.log(response.data);
						this.chan = response.data.content.list;
						this.$store.commit('setchan', this.chan);

						// this.lists = response.data.content.instKeys
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
		Cus() {
			//定制
			console.log(123);
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				// let params = {}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/instruc?userId='+landRegistLG.user.id+'&page=1&instrucCustType=1', //接口地址。
					// data: params,
					method: 'GET',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						uni.hideLoading();
						console.log(response.data);
						this.ding = response.data.content.list;
						this.$store.commit('setding', this.ding);

						// this.lists = response.data.content.instKeys
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
		inf() {
			//资讯
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				// let params = {}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/instruc?userId='+landRegistLG.user.id+'&page=1&instrucCustType=2', //接口地址。
					// data: params,
					method: 'GET',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						uni.hideLoading();
						console.log(response.data);
						this.zi = response.data.content.list;
						this.$store.commit('setzi', this.zi);
						// this.lists = response.data.content.instKeys
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
		}
	},
	computed: {
		i18n() {
			return this.$t('Howtoshow');
		},
		...mapGetters(['GET_NEWS', 'GET_HOME', 'QUICKNAVCO'])
	}
};
</script>

<style>
.QRcodelist-edit {
	width: 100%;
	min-height: 100%;
	background: #ffffff;
}
.clear {
	clear: both;
	width: 100%;
	height: 120upx;
}
.product-book-title {
	width: 100%;
	height: 88upx;
	background: #ffffff;
	border-bottom: 2upx solid #f5f5f5;
	position: fixed;
	top: 0;
	z-index: 999;
}
.quickBtn-Fd {
	width: 5%;
	margin-left: 38upx;
}
.search-Fd {
	position: relative;
	width: 30%;
	margin-left: 36%;
	text-align: center;
	line-height: 88upx;
	font-size: 28upx;
	color: #2e2e30;
	float: left;
}
.tian {
	width: 100%;
	height: 88upx;
}
.QRcodelist-edit-ti {
	width: 90%;
	font-size: 32upx;
	color: #02c2a2;
	margin: 0 auto;
	padding-top: 54upx;
}
.QRcodelist-edit-header {
	width: 90%;
	height: 200upx;
	margin: 0 auto;
	border-bottom: 2upx solid #f5f5f5;
	position: relative;
}
.QRcodelist-edit-header > view:nth-of-type(1) {
	font-size: 32upx;
	color: #2e2e30;
	padding-top: 40upx;
	font-weight: bold;
}
.QRcodelist-edit-header > view:nth-of-type(2) {
	width: 100%;
	height: 30upx;
	padding-top: 20upx;
}
.QRcodelist-edit-header > view:nth-of-type(2) > input {
	width: 100%;
	height: 100%;
}
.QRcodelist-edit-header > view:nth-of-type(3) {
	font-size: 28upx;
	color: #d2d2d2;
	position: absolute;
	right: 0;
	bottom: 0;
}
.QRcodelist-edit-Middle {
	width: 90%;
	height: 240upx;
	margin: 0 auto;
	border-bottom: 2upx solid #f5f5f5;
	position: relative;
}
.QRcodelist-edit-Middle > view:nth-of-type(1) {
	font-size: 32upx;
	color: #2e2e30;
	padding-top: 80upx;
	font-weight: bold;
}
.QRcodelist-edit-Middle > view:nth-of-type(2) {
	width: 100%;
	height: 30upx;
	padding-top: 20upx;
}
.QRcodelist-edit-Middle > view:nth-of-type(2) > input {
	width: 100%;
	height: 100%;
}
.QRcodelist-edit-Middle > view:nth-of-type(3) {
	font-size: 28upx;
	color: #d2d2d2;
	position: absolute;
	right: 0;
	bottom: 0;
}
.QRcodelist-edit-look {
	width: 90%;
	height: 232upx;
	margin: 0 auto;
}
.QRcodelist-edit-look > view:nth-of-type(1) {
	width: 100%;
	height: 30upx;
	font-size: 28upx;
	color: #2e2e30;
	line-height: 30upx;
	padding-top: 20upx;
}
.QRcodelist-edit-look > view:nth-of-type(1) > image {
	width: 28upx;
	height: 24upx;
	display: block;
	float: left;
	margin-top: 2upx;
}
.QRcodelist-edit-look > view:nth-of-type(1) > span {
	margin-left: 10upx;
	display: block;
	float: left;
}
.QRcodelist-edit-look > view:nth-of-type(2) {
	width: 100%;
	height: 150upx;
	background: #f9f9f9;
	margin-top: 20upx;
	border-radius: 4upx;
	overflow: hidden;
}
.QRcodelist-edit-look > view:nth-of-type(2) > view {
	width: 95%;
	margin: 20upx auto auto auto;
	font-size: 24upx;
	color: #2e2e30;
}
.myheader-Keyword-industry {
	width: 95%;
	min-height: 100upx;
	margin: 20upx auto;
}
.myheader-Keyword-Tips {
	width: 90%;
	height: 40upx;
	margin: 80upx auto auto auto;
	font-size: 28upx;
	color: #2e2e30;
}
.myheader-Keyword-Label {
	padding: 10upx 30upx 10upx 30upx;
	border: 2upx solid #e2e2e2;
	border-radius: 8upx;
	display: block;
	float: left;
	margin-left: 20upx;
	margin-top: 20upx;
	font-size: 26upx;
	position: relative;
}
.myheader-Keyword-Label > image {
	width: 36upx;
	height: 36upx;
	top: -15upx;
	right: -12upx;
	position: absolute;
}
.myheader-Keyword-Labels {
	padding: 10upx 30upx 10upx 30upx;
	border: 2upx solid #02c2a2;
	border-radius: 8upx;
	display: block;
	float: left;
	margin-left: 20upx;
	margin-top: 20upx;
	font-size: 28upx;

	color: #02c2a2;
}
.myheader-Keyword-Labela {
	padding: 10upx 30upx 10upx 30upx;
	border: 2upx solid #e2e2e2;
	border-radius: 8upx;
	display: block;
	float: left;
	margin-left: 20upx;
	margin-top: 20upx;
	font-size: 26upx;
	color: #02c2a2;
	width: 130upx;
	height: 45upx;
	line-height: 45upx;
	position: relative;
}
.myheader-Keyword-Labela > input {
	width: 100%;
	height: 100%;
}
.myheader-btn {
	width: 90%;
	height: 90upx;
	background: #02c2a2;
	text-align: center;
	line-height: 90upx;
	font-size: 32upx;
	color: #ffffff;
	position: fixed;
	bottom: 20upx;
	left: 5%;
}
.myheader-Keyword-box {
	/* padding-bottom: 300upx; */
}
.topsss {
	width: 84%;
	height: 40upx;
	/* margin: 40upx auto auto!important; */
	/* margin-top: 100upx; */
	margin: 0upx auto auto auto;
	padding-top: 80upx;
	font-size: 28upx;
	color: #2e2e30;
	clear: both;
}
.myheader-Keyword-Labelss {
	padding: 10upx 50upx 10upx 50upx;
	border: 2upx solid #e2e2e2;
	border-radius: 35upx;
	display: block;
	float: left;
	margin-left: 20upx;
	margin-top: 20upx;
	font-size: 26upx;
	color: #fab000;
}
.QRcodelist-edit-bao {
	width: 100%;
	height: 100upx;
	background-image: linear-gradient(134deg, #15d49f 0%, #57d6cf 100%);
	position: fixed;
	bottom: 0;
	text-align: center;
	line-height: 100upx;
	font-size: 32upx;
	color: #ffffff;
}
.QRcodelist-edit-lei {
	width: 90%;
	height: 100upx;
	border-bottom: 2upx solid #f5f5f5;
	margin: 20upx auto;
}
.QRcodelist-edit-lei > view:nth-of-type(1) {
	line-height: 100upx;
	font-size: 32upx;
	color: #2e2e30;
	float: left;
}
.QRcodelist-edit-lei > view:nth-of-type(2) {
	line-height: 100upx;
	font-size: 28upx;
	color: #bdbdbd;
	float: left;
	margin-left: 20upx;
}
.QRcodelist-edit-lei > view:nth-of-type(3) {
	line-height: 100upx;
	width: 20upx;
	height: 100%;
	float: right;
}
.QRcodelist-edit-lei > view:nth-of-type(3) > image {
	width: 100%;
	height: 20upx;
}
.QRcodelist-edit-category {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	background: rgba(0, 0, 0, 0.3);
}
.QRcodelist-edit-greak {
	width: 100%;
	height: 900upx;
	position: absolute;
	bottom: 0;
	background: #ffffff;
}
.QRcodelist-edit-greak-one {
	width: 100%;
	height: 114upx;
	border-bottom: 2upx solid #f5f5f5;
}
.QRcodelist-edit-greak-one > view:nth-of-type(1) {
	font-size: 32upx;
	color: #9b9b9b;
	line-height: 114upx;
	padding-left: 40upx;
	float: left;
}
.QRcodelist-edit-greak-one > view:nth-of-type(2) {
	width: 50%;
	height: 100%;
	padding-left: 76upx;
	text-align: center;
	line-height: 114upx;
	font-size: 32upx;
	color: #2e2e30;
	float: left;
}
.QRcodelist-edit-greak-two {
	width: 90%;
	margin: 10upx auto;
	height: 753upx;
	overflow: auto;
}
.QRcodelist-edit-greak-two > view {
	width: 204upx;
	height: 70upx;
	border-radius: 35upx;
	border: 2upx solid #e2e2e2;
	text-align: center;
	line-height: 70upx;
	font-size: 26upx;
	color: #2e2e30;
	float: left;
	margin-top: 30upx;
	margin-left: 16upx;
}
.hidens {
	background: #02c2a2 !important;
	color: #ffffff !important;
}
</style>
