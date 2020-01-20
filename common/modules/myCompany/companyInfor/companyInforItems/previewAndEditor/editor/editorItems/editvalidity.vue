<template>
	<view class="editvalidity">
		<view class="editvalidity-one">
			<view class="editvalidity-ones">
				<view class="editvalidity-onesA" @tap="image()">
					<image :src="wei" v-if="images==0"></image>
					<image :src="xuan" v-if="images==1"></image>
				</view>
				<view class="editvalidity-onesB">永久</view>
			</view>
			<view class="editvalidity-ones">
				<view class="editvalidity-onesA" @tap="ima()">
					<image :src="wei" v-if="imag==0"></image>
					<image :src="xuan" v-if="imag==1"></image>
				</view>
				<view class="editvalidity-onesB">短期</view>
				<view class="editvalidity-onesC">
					<picker @change="bindDateChange" mode="date" :value="date" :start="startDate" fields="day">
						<view class="zitie">{{date}}</view>
					</picker>
				</view>
				<view class="editvalidity-onesD"><image :src="lineRightArrow"></image></view>
			</view>
		</view>
		<view class="editvalidity-onesE" @tap="baoadd()">
			保存
		</view>
	</view>
</template>

<script>
	import wei from '@/static/mbcImg/my/15.png';
	import xuan from '@/static/mbcImg/my/16.png';
	import lineRightArrow from '@/static/mbcImg/images/common/line-right-arrow.png';
	export default {
		
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				wei:wei,
				xuan:xuan,
				lineRightArrow:lineRightArrow,
				date: currentDate,
				tou:false,
				images:0,
				imag:1,
			}
		},
		mounted() {
			
		},
		created() {
			
		},
		
		created() {
		},
		methods: {
			image(){
				this.images=1;
				this.imag=0;
			},
			ima(){
				this.images=0;
				this.imag=1;
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
			
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			bindDateChange: function(e) {
				// console.log(e)
				this.date = e.target.value
				console.log(this.date)
			},
			baoadd(){
				if(this.images==1){
					console.log('选择永久')
					this.$store.commit('setEffective','永久');
				}else if(this.imag==1){
					console.log('选择短期')
					this.$store.commit('setEffective',this.date);
				}
				uni.navigateBack({})
			},
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
		},
	}
</script>

<style>
	.editvalidity{
		width: 100%;
		height: 100%;
	}
	.editvalidity-one{
		width: 100%;
		height: 260upx;
		background: #FFFFFF;
	}
	.editvalidity-ones{
		width: 90%;
		height: 50%;
		margin: 0 auto;
		border-bottom: 2upx solid #F5F5F5;
		position:relative;
	}
	.editvalidity-onesA{
		width: 40upx;
		height: 100%;
		float:left;
	}
	.editvalidity-onesA>image{
		width: 32upx;
		height: 32upx;
		margin-top:48upx;
	}
	.editvalidity-onesB{
		width:20%;
		height:100%;
		line-height:130upx;
		float:left;
		font-size: 28upx;
		color: #2E2E30;
		margin-left:20upx;
	}
	.editvalidity-onesC{
		width:60%;
		height:100%;
		float:right;
		font-size: 28upx;
		color:black;
		text-align:right;
		line-height:130upx;
		margin-right:40upx;
	}
	.editvalidity-onesD{
		width:20upx;
		height:100%;
		position:absolute;
		right:0;
	}
	.editvalidity-onesD>image{
		width:100%;
		height:20upx;
		margin-top:54upx;
	}
	.zitie{
		margin-top: 42upx;
	}
	.tou{
		color:black;
	}
	.editvalidity-onesE{
		width: 90%;
		height: 90upx;
		background: #02C2A2;
		margin: 80upx auto;
		text-align: center;
		line-height: 90upx;
		font-size: 32upx;
		color: #FFFFFF;
	}
</style>
