<template name="KeyWords">
	<view class="body">
		<view class="nav" @click="pass">
			<view>
				<span>跳过</span>
				<span>></span>
			</view>
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
				:dataList='selectList'
				v-if='true' 
				@event1="change($event)"
				>
				</tjCheckBox>
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
				<view class="rRadio-items2 tianjia" @tap="adds()">
					<span>+添加</span>
				</view>
			</view>
		</view>
		<!-- 采购关键词 -->
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
		<view class="tianjiajian">
			
		</view>
		<view class="save">
			<view class="saveBtn" @click="saveBtn">
				<span>保存</span>
			</view>
		</view>
	</view>
</template>

<script>
	import tjCheckBox from '@/components/common/RHX/tjCheckBox/tjCheckBox';
	import caigou from '@/static/mbcImg/guanjianci/caigou.png';
	import tuijian from '@/static/mbcImg/guanjianci/tuijian.png';
	import gongying from '@/static/mbcImg/guanjianci/gongying.png';
	import searchClose from '@/static/mbcImg/common/searchClose.png';
	import del from '@/static/mbcImg/my/del.png'
	export default {
		name: 'KeyWords',
		data() {
			return {	
				selected:[],
				searchClose:searchClose,
				caigou:caigou,
				gongying:gongying,
				tuijian:tuijian,
				// caigou:caigou,
				"selectList": [
				    "行业1",
				    "行业2",
				    "行业3",
				    "行业4",
				    "行业5",
				    "行业6"
				],
				purcKeys:[],//采购数据
				instKeys:[],//供应数据
				del:del,
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
			//跳过
			pass(){
				console.log("跳过此阶段");
			},
			dele(e){
				console.log(e)
				this.purcKeys.splice(e,1)
				console.log(this.list)
			},
			saveBtn(){
				console.log('向后台发送数据');
				var data = {
					// "selected":this.selected,这个接口还没有写好，写好恢复即可
					"purcKeys":this.purcKeys,
					"instKeys":this.instKeys
				}
				uni.request({
					url: this.api2 + '/rest-rp/user/760', //接口地址。
					data:data,
					method: 'POST',
					success: (response) => {
						// uni.hideLoading();
						console.log(response);
						console.log('发送成功');
					},
					fail: (error) => {
						// uni.hideLoading(); // 隐藏 loading
						uni.showToast({
							title: '网络繁忙，请稍后',
							icon: 'none',
							duration: 1000
						});
						console.log(error, '网络繁忙，请稍后');
					}
				});
			},
			add(){
				this.hiden = '1';
				this.num = '1';
				console.log(this.list)
			},
			sub(){
				if(this.edit === ''){ // 失脚时没有数据
					this.hiden = 2
				}else{ // 失焦时存在数据
					this.hiden = 2;
					console.log('创建新标签');
					
					this.purcKeys.push(this.edit);
					this.edit = '';
				}
			},
			delet(e){
				console.log(e)
				this.instKeys.splice(e,1)
			},
			adds(){
				this.hidens = '1';
				this.nums = '1';
				console.log('创建新标签');
			},
			subs(){
				if(this.edits === ''){ // 失脚时没有数据
					this.hidens = 2
				}else{ // 失焦时存在数据
					this.hidens = 2
					this.instKeys.push(this.edits);
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
