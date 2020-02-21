<template>
	<view>
		<view>
			<topBox><p>新建网点</p></topBox>
		</view>
		<scroll-view class="scroll-v" scroll-y="true" :show-scrollbar="false" :scroll-top="scrollTop" :scroll-with-animation="true" @scroll="scroll" @scrolltolower="loadMore()">
			<view class="list">
				<view class="list-item">
					<view class="list-item-name">名称</view>
					<view>
						<textarea  
						type="text" 
						placeholder="请填写网点名称" 
						auto-height 
						maxlength="30"
						placeholder-style="font-family: PingFangSC-Regular;font-size: 28upx;color: #BDBDBD;letter-spacing: 0;line-height: 36upx;"
						style="width: 540upx;font-family: PingFangSC-Regular;font-size: 14px;color: #2E2E30;letter-spacing: 0;line-height: 18px;"
						@blur="blurName"
						/>
						</view>
				</view>
				<view class="list-item">
					<view class="list-item-name">所在地区</view>
					<view style="display: flex; align-items: center;" @click="clickMap">
						<image class="address" :src="address"></image>
						<textarea
						type="text" 
						placeholder="点击选择" 
						auto-height 
						maxlength="50"
						disabled
						placeholder-style="font-family: PingFangSC-Regular;font-size: 28upx;color: #BDBDBD;letter-spacing: 0;line-height: 36upx;"
						style="width: 500upx;font-family: PingFangSC-Regular;font-size: 14px;color: #2E2E30;letter-spacing: 0;line-height: 18px;"
						/>
					</view>
				</view>
				<view class="list-item">
					<view class="list-item-name">详细地址</view>
					<view style="display: flex; align-items: center;" @click="clickMap">
						<!-- <image class="address" :src="address"></image> -->
						<textarea
						type="text" 
						placeholder="请输入详细地址" 
						auto-height 
						maxlength="50"
						disabled
						placeholder-style="font-family: PingFangSC-Regular;font-size: 28upx;color: #BDBDBD;letter-spacing: 0;line-height: 36upx;"
						style="width: 500upx;font-family: PingFangSC-Regular;font-size: 14px;color: #2E2E30;letter-spacing: 0;line-height: 18px;"
						/>
					</view>
				</view>
				<view class="list-item">
					<view class="list-item-name">联系电话</view>
					<view>
						<input 
						type="number" 
						placeholder-style="font-family: PingFangSC-Regular;font-size: 28upx;color: #BDBDBD;letter-spacing: 0;line-height: 36upx;"
						placeholder="请填写网点电话"
						style="width: 540upx;font-family: PingFangSC-Regular;font-size: 14px;color: #2E2E30;letter-spacing: 0;line-height: 18px;"
						@blur="blurPhone"
						/>
					</view>
				</view>
				<view class="list-item">
					<view class="list-item-name">营业时间</view>
					<view>
						<textarea
						type="text" 
						placeholder="如周一至周日8:30-20:00" 
						auto-height 
						placeholder-style="font-family: PingFangSC-Regular;font-size: 28upx;color: #BDBDBD;letter-spacing: 0;line-height: 36upx;"
						maxlength="50"
						style="width: 540upx;font-family: PingFangSC-Regular;font-size: 14px;color: #2E2E30;letter-spacing: 0;line-height: 18px;"
						@blur="blurTime"
						/>
					</view>
				</view>
			</view>
			<view style="width: 100%; height: 20upx; background: #F9F9F9;"></view>
			<view class="serve">
				<view>支持服务</view>
				<view class="serveKey">
					<view v-for="(ser,index) in service" :key="index">
						<view class="ser">{{ser}}</view>
						<image class="deleteImg" :src="deleteImg" @click="deleteSer(index)"></image>
					</view>
					<view>
						<input
						:value="serValue"
						type="text"
						maxlength="8"
						style="width: 100upx;font-family: PingFangSC-Regular;font-size: 26upx;color: #2e2e30;letter-spacing: 0;line-height: 26upx;"
						placeholder="+ 添加"
						placeholder-style="font-family: PingFangSC-Regular;font-size: 26upx;color: #2E2E30;letter-spacing: 0;line-height: 26upx;"
						@blur="blurSer($event.target.value)"
						>
					</view>
				</view>
			</view>
		</scroll-view>
		<view>
			<view class="bottomBtn">
				<view class="btn" @click="toNewsale">
					保存
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import topBox from '@/components/mbbo/topBox/topBox';
import createsale from '@/modules/myCompany/aftersale/aftersaleItems/createSale';
import address from '@/static/mbcImg/images/business/home/aftersale/地址-黑1.png';
// import deleteImg from '@/static/mbcImg/common/pinDao/delete.png';
export default {
	name: 'aftermarket',
	components: {
		topBox,
		createsale
	},
	data() {
		return {
			address: address,
			deleteImg: this.Static+'common/pinDao/delete.png',
			userId:'',//用户ID
			baiduCcode:'',//城市地址
			aftersaleTime:'',//营业时间
			aftersaleSerivce:[],//服务
			aftersalePhone:'',//电话
			aftersaleName:'',//名称
			aftersaleLongitude:'',//东经
			aftersaleLatitude:'',//北纬
			aftersaleAddr:'',//详细地址
			service:['预约维修','资讯体验','系统升级','系统升级'],
			serValue:''
		};
	},
	methods: {
		clickMap(){
			console.log('跳转地图');
			uni.navigateTo({
			    url: './mapsale'
			});
		},
		// 更改名称
		blurName(e){
			this.aftersaleName = e.detail.value;
			console.log(this.aftersaleName,'名称');
		},
		//更改电话
		blurPhone(e){
			this.aftersalePhone = e.detail.value;
			console.log(this.aftersalePhone,'电话');
		},
		//更改营业时间
		blurTime(e){
			this.aftersaleTime = e.detail.value;
			console.log(this.aftersaleTime,'营业时间');
		},
		//删除服务
		deleteSer(index){
			console.log('删除了',index);
			this.service.splice(index,1);
			console.log(this.service);
		},
		//失去焦点添加服务
		blurSer(e){
			console.log(e)
			this.service.push(e);
		}
		
	},
	created() {
		
	}
};
</script>

<style>
.list,
.serve {
	padding-left: 30upx;
	padding-right: 30upx;
	background: #ffffff;
}
.list-item {
	width: 100%;
	height: 116upx;
	display: flex;
	align-items: center;
	border-bottom: 2upx solid #f5f5f5;
}
.list-item-name {
	font-family: PingFangSC-Regular;
	font-size: 28upx;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 36upx;
	width: 112upx;
	height: 36upx;
	margin-right: 30upx;
}
.address {
	width: 32upx;
	height: 32upx;
	margin-right: 10upx;
}
.serve {
	display: flex;
}
.serve > view:nth-child(1) {
	font-family: PingFangSC-Regular;
	font-size: 28upx;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 36upx;
	width: 112upx;
	height: 36upx;
	margin-right: 30upx;
	margin-top: 46upx;
}
.serveKey {
	width: 540upx;
	display: flex;
	flex-wrap: wrap;
	margin-top: 10upx;
}
.serveKey>view {
	/* width: 144upx;
	height: 70upx; */
	background: #ffffff;
	border: 1upx solid #d2d2d2;
	border-radius: 4upx;
	margin-right: 20upx;
	margin-top: 20upx;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	padding: 20upx;
}
.ser{
	font-family: PingFangSC-Regular;
	font-size: 26upx;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 26upx;
}
.deleteImg {
	width: 36upx;
	height: 36upx;
	position: absolute;
	right: -18upx;
	top: -18upx;
}
.bottomBtn{
		width: 100%;
		height: 120upx;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.btn{
		width: 92%;
		height: 90upx;
		background: #02C2A2;
		border-radius: 4upx;
		display: flex;
		justify-content: center;
		align-items: center;
		ont-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #FFFFFF;
		letter-spacing: 0;
	}
.scroll-v {
	flex: 1;
	/* #ifndef MP-ALIPAY */
	flex-direction: column;
	/* #endif */
	width: 750upx;
	height: 86vh;
	background: #FFFFFF;
	/* padding-bottom: 20vh; */
}
</style>
