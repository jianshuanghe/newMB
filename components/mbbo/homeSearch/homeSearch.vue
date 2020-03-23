<template>
	<view class="homeSerach">
		<view class="search_box-No">
			<view class="search-NI-img left"><image :src="souseach"></image></view>
			<view class="search-NI-text left"><input type="text" class="left inputSearch" placeholder="商机名称" placeholder-style="color:#D2D2D2" /></view>
			<view class="clear"></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			value: '商机名称',
			souseach:  this.Static+'my/souseach.png',
		};
	},
	methods: {}
};
</script>

<style>
.homeSerach {
	position: fixed;
	padding: 16upx 0 20upx 0;
	z-index: 100;
	top: 0;
	background: #ffffff;
}
.search_box-No {
	position: relative;
	margin-left: 70upx;
	background: #f6f6f6;
	border-radius: 30upx;
	height: 60upx;
}
.search-NI-img {
	position: relative;
	width: 60upx;
}
.search-NI-img > image {
	width: 30upx;
	height: 30upx;
	margin-top: 16upx;
	margin-left: 20upx;
}
.search-NI-text {
	position: relative;
	width: 500upx;
	margin-left: 10upx;
	height: 60upx;
	line-height: 60upx;
}
.search-NI-text > p {
	position: relative;
	width: 100%;
	ont-family: PingFangSC-Regular;
	font-size: 24upx;
	color: #bdbdbd;
}
.inputSearch {
	line-height: 60upx;
	height: 60upx;
	/* margin-top: 0.8vw; */
	width: 98%;
	border: none;
	outline: none;
}
</style>
