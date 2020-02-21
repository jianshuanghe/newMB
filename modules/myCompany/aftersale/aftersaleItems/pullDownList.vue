<template>
	<view v-if="this.cityLists.length>1">
		<view class="allCities">
			<view class="title">{{addrName}}<text>({{dataCount}})</text></view>
			<view @click="taptitleImg">
				<view v-if="isDown"><img :src="downImg" alt=""></view>
				<view v-if="isUp"><img :src="upImg" alt=""></view>
			</view>
		</view>
		<view v-if="this.isUp">
			<scroll-view class="scroll-view-H" scroll-x="true" @scroll="scroll" scroll-left="0">
				<view class="cityitem" v-for="(item,index) in cityList" :key="index" @click="changeCity(index)" :class="{active:currentIndex == index}">
					{{item.baiduAddrName}}({{item.dataCount}})
				</view>
			</scroll-view>
		</view>
		<view class="ZW" v-if="isDown">
			
		</view>
	</view>
</template>

<script>
import downImg from '@/static/mbcImg/images/business/home/aftersale/导航-下拉.png';
import upImg from '@/static/mbcImg/images/business/home/aftersale/导航-收起.png';
export default {
	name: 'pullDownList',
	components: {
		
	},
	props:[
		'cityLists'
	],
	data() {
		return {
			downImg: downImg, //下拉图片
			upImg: upImg, //上拉图片
			isDown:true,
			isUp:false,
			cityList:this.cityLists,
			currentIndex : 0,
			addrName:'',
			dataCount:''
		};
	},
	watch:{
		cityLists:function(newVal,oldVal){
			this.cityList = newVal;
			this.addrName = newVal[0].baiduAddrName;
			this.dataCount = newVal[0].dataCount;
		},
	},
	mounted() {
	},
	methods: {
		taptitleImg(){
			if(this.isDown == true){
				this.isDown = false;
				this.isUp = true;
			}else{
				this.isDown = true;
				this.isUp = false;
			}
		},
		// 更改城市
		changeCity(index){
			this.currentIndex = index;
			console.log('我切换了城市',this.cityList[index]);
			this.addrName = this.cityList[index].baiduAddrName;
			this.dataCount = this.cityList[index].dataCount;
			this.$emit('changeCityCode',this.cityList[index].baiduAddrCode)
		}
	},
	created() {
		
	}
};
</script>

<style>
.active{
	background: #02C2A2;
	color: #FFFFFF;
}
.allCities {
	width: 100%;
	height: 72upx;
	background: #FFFFFF;
	box-shadow: 0 1px 0 0 #F5F5F5;
	display: flex;
	align-items: center;
}
.title{
	font-family: PingFangSC-Regular;
	font-size: 28upx;
	color: #02C2A2;
	letter-spacing: 0;
	line-height: 28upx;
	margin-left: 30upx;
	margin-right: 10upx;
}
.title text{
	font-family: PingFangSC-Regular;
	font-size: 28upx;
	color: #000000;
	letter-spacing: 0;
	line-height: 28upx;
}
.allCities img{
	width: 20upx;
}
.scroll-view-H{
	height: 120upx;
	width: 100%;
	white-space: nowrap;
	line-height: 120upx;
	background: #F9F9F9;
	color: #2E2E30;
}
.cityitem{
	width: 152upx;
	height: 60upx;
	border: 1upx solid #E2E2E2;
	border-radius: 40upx;
	font-family: PingFang-SC-Medium;
	font-size: 24upx;
	letter-spacing: 0;
	text-align: center;
	line-height: 60upx;
	margin:0 10upx 0 10upx;
	display: inline-block;
}
.itemAll{
	margin-left: 20upx;
	background: #02C2A2;
	border: 1px solid #02C2A2;
	border-radius: 40upx;
	color: #FFFFFF;
}
.ZW{
	width: 100%;
	height: 20upx;
	background: #F9F9F9;
}
</style>
