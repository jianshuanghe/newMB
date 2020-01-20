<template name="KeyWords">
	<view class="body">
		<view class="nav" @click="pass">
			<!-- <view>
				<span>跳过</span>
				<span>></span>
			</view> -->
		</view>
		<view class="title">
			定制您的关键词
		</view>
		<view class="subtitle">
			定制后更容易找到自己感兴趣的商机哦
		</view>
		<!-- 推荐关键词 -->
		<view class="tuiJ_key">
			<view class="tuiJ_key-title">
				<image :src="tuijian" mode=""></image>
				<span class="title_tj">推荐关键词</span>
			</view>
			<view class="checkBox">
				<tjCheckBox 
				:disabled='true'
				v-if='true' 
				@event1="change($event)"
				>
				</tjCheckBox>
				<view class="clear"></view>
			</view>
		</view>
		<!-- 供应关键词 -->
		<view class="gongY_key">
			<view class="tuiJ_key-title">
				<image :src="gongying" mode=""></image>
				<span class="title_tj">供应关键词</span>
			</view>
			<view class="gongying">
				<div class="" v-for="(item,index) in instKeys" :key="index">
					<view class="rRadio-items2" v-if="item">
						<span>{{item}}</span>
						<image :src="del" @tap="delet(index)"></image>
					</view>
				</div>
				<view class="rRadio-items2" v-if="hidens === '1'">
					<input type="text" maxlength="5" focus="true" v-model="edits" @blur="subs()"/>
				</view>
				<view class="rRadio-items2 tianjiaa" @tap="adds()">
					<span>+添加</span>
				</view>
			</view>
		</view>
		<!-- 采购关键词 -->
		<view class="caiG_key-all">
			<view class="caiG_key">
				<view class="caiG_key-title">
					<image :src="caigou" mode=""></image>
					<span class="title_tj">采购关键词</span>
				</view>
				<view class="caigou">
					<div class="" v-for="(item,index) in purcKeys" :key="index">
						<view class="rRadio-items2" v-if="item">
							<span>{{item}}</span>
							<image :src="del" @tap="dele(index)"></image>
						</view>
					</div>
					<view class="rRadio-items2" v-if="hiden === '1'">
						<input type="text" maxlength="5" focus="true" v-model="edit" @blur="sub()"/>
					</view>
					<view class="rRadio-items2 tianjia" @tap="add()">
						+添加
					</view>
					
				</view>
			</view>
		</view>
		
		<view class="savesave">
			<view class="save" @tap="buss()">保存</view>
		</view>
	</view>
</template>

<script>
	// import tjCheckBox from '@/components/common/RHX/tjCheckBox/tjCheckBox';
	import tjCheckBox from './tjCheckBox';
	export default {
		name: 'KeyWords',
		data() {
			return {
				selected:[],
				searchClose: this.Static+'common/searchClose.png.png',
				caigou: this.Static+'guanjianci/caigou.png.png',
				gongying: this.Static+'guanjianci/gongying.png',
				tuijian: this.Static+'guanjianci/tuijian.png',
				// caigou:caigou,
				selectList: [],
				purcKeys:[],//采购数据
				instKeys:[],//供应数据
				del: this.Static+'my/del.png',
				hiden:2,
				num:0,
				edit:'',
				blurType: '1', // 代表默认失去焦点事件，2代表点击添加时失去焦点事件	
				hidens:2,
				nums:0,
				edits:'',
				// blurType: '1', // 代表默认失去焦点事件，2代表点击添加时失去焦点事件
			};
		},
		created() {
			this.Keyword();
			this.shareEachPage(); // 分享
		},
		mounted() {
			
		},
		components:{
			tjCheckBox
		},
		methods: {
			// 接受多选组件传来点击的数据
			change(data) {
			    this.selected = data;
				console.log(this.selected);
			},
			Keyword(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/user/'+landRegistLG.user.id, //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.purcKeys = response.data.content.purcKeys;
							this.instKeys = response.data.content.instKeys;
						},
						fail: (error) => {
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
			buss(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					if(this.instKeys.length==0&&this.purcKeys.length==0&&this.selected.length==0){
						var params = {
							//供应
							instKeys:[''],
							//采购
							purcKeys:[''],
							//推荐
							pushKeys:[''],
							userId:String(landRegistLG.user.id),
						};
					}else if(this.instKeys.length==0&&this.purcKeys.length==0){
						var params = {
							//供应
							instKeys:[''],
							//采购
							purcKeys:[''],
							//推荐
							pushKeys:this.selected,
							userId:String(landRegistLG.user.id),
						};
					}else if(this.instKeys.length==0&&this.selected.length==0){
						var params = {
							//供应
							instKeys:[''],
							//采购
							purcKeys:this.purcKeys,
							//推荐
							pushKeys:[''],
							userId:String(landRegistLG.user.id),
						};
					}else if(this.purcKeys.length==0&&this.selected.length==0){
						var params = {
							//供应
							instKeys:this.instKeys,
							//采购
							purcKeys:[''],
							//推荐
							pushKeys:[''],
							userId:String(landRegistLG.user.id),
						};
					}else if(this.instKeys.length==0){
						var params = {
							//供应
							instKeys:[''],
							//采购
							purcKeys:this.purcKeys,
							//推荐
							pushKeys:this.selected,
							userId:String(landRegistLG.user.id),
						};
					}else if(this.purcKeys.length==0){
						var params = {
							//供应
							instKeys:this.instKeys,
							//采购
							purcKeys:[''],
							//推荐
							pushKeys:this.selected,
							userId:String(landRegistLG.user.id),
						};
					}else if(this.selected.length==0){
						var params = {
							//供应
							instKeys:this.instKeys,
							//采购
							purcKeys:this.purcKeys,
							//推荐
							pushKeys:[''],
							userId:String(landRegistLG.user.id),
						};
					}else{
						var params = {
							//供应
							instKeys:this.instKeys,
							//采购
							purcKeys:this.purcKeys,
							//推荐
							pushKeys:this.selected,
							userId:String(landRegistLG.user.id),
						};
						
					}
					 // 请求总数居时 参数为空
					uni.showLoading({
						// 展示loading
						title: '加载中'
					});
					console.log(params);
					uni.request({
						url: this.api2 + '/rest-rp/userKeys/setKeys', //接口地址。
						data: params,
						method: 'POST',
						header: {
							Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
						},
						success: response => {
							uni.hideLoading();
							console.log(response.data);
							// this.lists = response.data.content.instKeys
							this.getmy();
							uni.navigateBack({});
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
			getmy() {
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					let params = {}; // 请求总数居时 参数为空
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/user/'+landRegistLG.user.id, //接口地址。
						// data: this.endParams(params),
						method: 'GET',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							// console.log(response.data);
							this.list = response.data.content
							this.$store.commit('setMy', this.list); // 更新vuex
							// this.$store.commit('setMation', this.List); // 更新vuex
							
						},
						fail: (error) => {
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
			//跳过
			pass(){
				console.log("跳过此阶段");
			},
			dele(e){
				console.log(e)
				this.purcKeys.splice(e,1)
			},
			
			add(){
				if(this.purcKeys.length>9){
					uni.showToast({
						title: '最多添加10个采购关键词',
						icon: 'none',
						duration: 1000
					});
				}else{
					this.hiden = '1';
					this.num = '1';
				}
				
			},
			sub(){
				if(this.edit === ''){ // 失脚时没有数据
					this.hiden = 2
				}else{ // 失焦时存在数据
					this.hiden = 2;
					console.log('创建新标签');
					this.purcKeys.push(this.edit);
					console.log(this.purcKeys)
					this.edit = '';
				}
			},
			delet(e){
				console.log(e)
				this.instKeys.splice(e,1)
			},
			adds(){
				if(this.instKeys.length>9){
					uni.showToast({
						title: '最多添加10个供应关键词',
						icon: 'none',
						duration: 1000
					});
				}else{
					this.hidens = '1';
					this.nums = '1';
					console.log('创建新标签');
				}
				
			},
			subs(){
				if(this.edits === ''){ // 失脚时没有数据
					this.hidens = 2
				}else{ // 失焦时存在数据
					this.hidens = 2
					this.instKeys.push(this.edits);
					console.log(this.instKeys)
					this.edits = '';
				}
			}
		}
	};
</script>

<style>
	.body{
		height: 100%;
		min-height: 100%;
		background: #FFFFFF;
		clear: both;
	}
	.nav{
		font-family: PingFangSC-Medium;
		font-size: 24upx;
		color: #9B9B9B;
		letter-spacing: 0;
		line-height: 24upx;
		margin-left: 650upx;
		padding-top: 30upx;
	}
	.caiG_key-all{
		width: 100%;
		background: #FFFFFF;
	}
	.nav span:nth-child(2){
		padding-left: 10upx;
	}
	.title{
		margin-top: 26upx;
		text-align: center;
		font-family: Helvetica;
		font-size: 36upx;
		color: #2E2E30;
		letter-spacing: 0;
		line-height: 32upx;
	}
	.subtitle{
		margin-top: 24upx;
		text-align: center;
		font-family: PingFangSC-Regular;
		font-size: 24upx;
		color: #9B9B9B;
		letter-spacing: 0;
		text-align: center;
		line-height: 24upx;
	}
	.tuiJ_key{
		width: 93%;
		margin: 56upx auto auto auto;
		min-height: 100upx;
		/* margin-top: 56upx; */
		/* margin-left:50upx; */
	}
	.tuiJ_key-title,.caiG_key-title{
		height:32upx;
		display: flex;
		/* justify-content: center; */
		align-items: center;
	}
	.tuiJ_key-title>image,.caiG_key-title>image{
		width:40upx;
		height:40upx;
	}
	.tuiJ_key-title>span,.caiG_key-title>span{
		font-family: PingFangSC-Semibold;
		font-size: 32upx;
		color: #2E2E30;
		letter-spacing: 0;
		padding-left: 10upx;
		/* line-height: 40upx; */
	}
	.checkBox{
		min-height:200upx;
	}
	.clear{
		clear: both;
	}
	.gongY_key,.caiG_key{
		/* margin-top: 60upx; */
		/* margin-left:50upx ; */
		background: #FFFFFF;
		width: 93%;
		margin: 60upx auto auto auto;
	}
	/* 供应 */
	.gongying,.caigou{
		display: flex;
		flex-wrap: wrap;
	}
	.caigou{
		padding-bottom: 170upx;
		
	}
	.rRadio-items2{
		position: relative;
		width: 204upx;
		height: 70upx;
		margin: 30upx 24upx 0 0;
		font-family: PingFangSC-Regular;
		font-size: 26upx;
		color: #2E2E30;
		letter-spacing: 0;
		/* line-height: 80upx; */
		border: 1px solid #D2D2D2;
		border-radius: 17.5px;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.rRadio-items2 image{
		width: 36upx;
		height:36upx;
		position: absolute;
		top: -18upx;
		right: 0upx;
	}
	.tianjia{
		color: #FAB000;
	}
	.tianjiaa{
		color: #02C2A2;
	}
	/* 保存按钮 */
	.save{
		width: 90%;
		height: 90upx;
		background: #02C2A2;
		text-align: center;
		line-height: 90upx;
		font-size: 32upx;
		color: #FFFFFF;
		position:fixed;
		bottom: 20upx;
		left: 5%;
	}
	.savesave{
		width: 100%;
		height: 120upx;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
	}
</style>
