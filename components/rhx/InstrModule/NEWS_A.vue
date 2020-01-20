<template>
	<view>
		<view class="mode-list" :id="dataLists.id">
			<view>
				<!-- icon大标题 -->
				<rTitle
					:disabled="!disabled"
					:isShowOne="true"
					:rPadding="tabYItemsIndex === indexNum ? '70upx 30upx 10upx 30upx' : '70upx 30upx 10upx 30upx'"
					:valueOne="dataLists.iconTitle"
					typeOne="text"
					:maxlengthOne="5"
					:focusOne="false"
					:cursorOne="0"
					rfontFamily="PingFangSC-Semibold"
					adjustPositionOne="adjustPosition"
					tTAlignOne="left"
					tColorOne="#2E2E30"
					tFontSizeOne="36upx"
					tLineHeightOne="56upx"
					tWidthOne="100%"
					tHeightOne=""
					tPaddingOne=""
					rfontWeight="bold"
					rbackground="#FFFFFF"
					tBGOne="rgba(212, 253, 247, 0.21)"
					tBorderOne="1px solid #02C2A2"
					tBStyleOne="dashed"
					:isShowTwo="false"
					@tap-Title="tabIconTitle"
				></rTitle>
			</view>
		</view>
		<view class="content">
			<view class="content-item" v-for="(item, index) in dataLists.dataList" :key="index">
				<view class="ititle">
					<!-- 标题 -->
					<rTitle
						:disabled="!disabled"
						:isShowOne="false"
						:tLineYSHow="true"
						:isShowTwo="true"
						:valueTwo="item.title"
						:indexNum="index"
						placeholderTwo="请输入标题名称"
						rfontFamilyTwo="PingFangSC-Medium"
						keyNameTwo="content"
						tWidthTwo="100%"
						tHeightTwo=""
						maxlengthTwo="-1"
						:autoHeightTwo="true"
						tColorTwo="#02C2A2"
						tPaddingTwo=""
						tFontSizeTwo="36upx"
						tLineHeightTwo="56upx"
						tMinHeightTwo="56upx"
						tBGTwo="rgba(212, 253, 247, 0.21)"
						tBorderTwo="1px solid #02C2A2"
						tBStyleTwo="dashed"
						@tap-index="tapIndex"
						@tap-Title="tabTitle"
					></rTitle>
				</view>
				<view class="icontent">
					<rTitle
						:disabled="!disabled"
						:isShowOne="false"
						:tLineYSHow="true"
						:isShowTwo="true"
						:valueTwo="item.content"
						:indexNum="index"
						placeholderTwo="请输入文字说明"
						rfontFamilyTwo="PingFangSC-Regular"
						keyNameTwo="content"
						tWidthTwo="100%"
						tTMarginTwo="0vw 0"
						tHeightTwo=""
						maxlengthTwo="-1"
						:autoHeightTwo="true"
						tColorTwo="#2E2E30"
						tPaddingTwo=""
						tFontSizeTwo="32upx"
						tLineHeightTwo="56upx"
						tBGTwo="rgba(212, 253, 247, 0.21)"
						tBorderTwo="1px solid #02C2A2"
						tBStyleTwo="dashed"
						@tap-index="tapIndex"
						@tap-Title="tapContent"
					></rTitle>
				</view>
				<!-- 预览模式 -->
				<view v-if="disabled == false">
					<view class="imgUrl" v-if="item.imgUrl != ''">
						<!-- 单张图片组件 -->
						<singlePicture
							:disabled="disabled"
							:dataList="dataLists.dataList"
							:itemsData="dataLists.dataList[0]"
							:indexNum="index"
							:defaultImg="defaultAddImg"
							:imgSrc="item.imgUrl"
							mode="widthFix"
							lazyLoad="true"
							pictureWidth="100%"
							pictureHeight=""
							@tap-index="tapIndex"
							@tap-Picture="tabPicture"
							:deleteMoveShow="deleteMoveTipsShow"
						></singlePicture>
					</view>
				</view>
				<!-- 编辑模式 -->
				<view v-if="disabled == true">
					<view class="imgUrl">
						<!-- 单张图片组件 -->
						<singlePicture
							:disabled="disabled"
							:dataList="dataLists.dataList"
							:itemsData="dataLists.dataList[0]"
							:indexNum="index"
							:defaultImg="defaultAddImg"
							:imgSrc="item.imgUrl"
							mode="widthFix"
							lazyLoad="true"
							pictureWidth="100%"
							pictureHeight=""
							@tap-index="tapIndex"
							@tap-Picture="tabPicture"
							:deleteMoveShow="deleteMoveTipsShow"
						></singlePicture>
					</view>
				</view>
				<!-- 点击链接添加的内容 -->
				<!-- 链接内有内容显示 -->
				<view v-if="item.instBanner != '' || item.instName != ''">
					<view  style="position: relative;">
						<view @click="isshowmask()">
							<view class="instBanner">
								<image :src="item.instBanner" style="width:100%;" mode="widthFix"></image>
							</view>
							<view class="instName">
								<view class="instName_content">{{item.instName}}</view>
							</view>
							<view class="linkbtn" @click="linkbtn(item)" v-if="disabled == false"><view class="link">查看产品</view></view>
							<view class="linkbtn" v-if="disabled == true"><view class="dislink">查看产品</view></view>
							<!-- 遮罩层 -->
							<view class="mask-link" v-if="disabled && isShowMask">
								<view class="mask-link-div">
									<view class="replaceAndDel replace" @click="replaceLink(index)">替换</view>
									<view class="replaceAndDel" @click="deleteLink(index)">删除</view>
									<view class="mask-link-div-dian"></view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view v-else style="display: flex;justify-content: center;margin: 10upx 0;">
					<view style="width: 92%;" v-if="disabled == true">
						<view class="addDefaultLink" style="">
							<image :src="defaultAddLink" mode="" style="width: 100%; height: 100%;"></image>
							<view class="linkImgbtn">
								<view class="linkImgbtn-content" @click="addlink(index)">插入产品</view>
								<view class="linkImgbtn-content-div"></view>
							</view>
						</view>
						<view class="intro">插入我的其他如何秀产品链接</view>
						<view class="linkbtn"><view class="dislink">查看产品</view></view>
					</view>
				</view>
				<!-- 删除、上移、下移 -->
				<deleteMoveTips
				:dataList='dataLists.dataList'
				:itemsData='dataLists.dataList[0]'
				:indexNum='index'
				dMWidth='100vw'
				dMHeight='100%'
				@tap-DeleteMoveTips='tapDeleteMoveTips'
				v-if='deleteMoveTipsShow && disabled'></deleteMoveTips>
			</view>
			
		</view>
		<!-- 管理项目-附加此项 -->
		<manageCopyTips
		v-if='disabled'
		:manageCopyShow='deleteMoveTipsShow'
		:manageType='manageType'
		:dataList='dataLists.dataList'
		:itemsData='dataLists.dataList[0]'
		:isManageShow='true'
		@tap-ManageCopyTips='tapManageCopyTips'
		></manageCopyTips>
		<!-- 弹出框添加产品链接 -->
		<view v-if="isaddLinkShow">
			<view class="picker-box">
				<!-- 遮罩层 -->
				<view class="mask" @click="clickMask"></view>
				<!-- 内容区 -->
				<view class="ani-box">
					<view class="picker_title">添加产品链接</view>
					<!--有自己的创建过的链接-->
					<view class="picker_content" v-if="list.length>=1">
						<scroll-view :scroll-top="scrollToplink" scroll-y="true" class="scroll-Y" @scrolltolower="lower" style="height: 66vh;padding-bottom: 8vh;">
							<radio-group @change="radioChange">
								<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in list" :key="index">
									<view style="display: flex;align-items: center;">
										<radio :value="item.instrucTitle" :checked="index === current" />
										<view class="picker_img"><image :src="item.bannerImg" style="width: 100%;height: 100%;"></image></view>
										<view class="picker_intro">
											<view class="instrucTitle">{{item.instrucTitle}}</view>
											<view class="instrucIntro">{{item.instrucIntro}}</view>
										</view>
									</view>
								</label>
							</radio-group>
						</scroll-view>
					</view>
					<!-- 没有创建的链接 -->
					<view class="picker_content" v-else>
						<view class="picker_content-img">
							<image :src="noContent" style="width: 100%; height: 100%;"></image>
						</view>
						<view class="picker_content-text">
							<view>哎呀！您还没有创建自己的产品说明书哦</view>
							<view>快点击下方按钮去添加吧~</view>
						</view>
					</view>
					<view class="picker-btn" @click="addBtn" v-if="list.length>=1">确认添加</view>
					<view class="picker-btn" @click="navigateToAdd" v-else>创建我的产品说明书</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import rTitle from '@/components/common/RHX/rTitle/rTitle';
import singlePicture from '@/components/common/RHX/singlePicture/singlePicture';
import singlePictureInstbanner from '@/components/common/RHX/singlePicture/singlePictureInstbanner';
import deleteMoveTips from '@/components/common/RHX/deleteMoveTips/deleteMoveTips';
import manageCopyTips from '@/components/common/RHX/manageCopyTips/manageCopyTips';
import noContent from '@/static/mbcImg/publish/createBusiness/noContent.png'
export default {
	components: {
		rTitle,
		singlePicture,
		singlePictureInstbanner,
		deleteMoveTips,
		manageCopyTips
	},
	props: [
		'basicData', //传过来的modules数据
		'dataList',
		'disabled',
		'tabYItemsIndex',
		'indexNum',
		'defaultImg',
		'defaultLink',
		'scrollTop'
	],
	data() {
		return {
			indexs: -1,
			dataLists: this.dataList,
			basicDatas: this.basicData,
			defaultAddImg: this.defaultImg,
			defaultAddLink: this.defaultLink,
			deleteMoveTipsShow: false, // 控制deleteMoveTips组件显示隐藏
			manageType: 0, // 0展示管理 和 复制； 1只展示复制
			isconContentShow: true, //是否展示当前文本框组件
			isaddLinkShow: false, //是否展示添加列表组件
			list: [], //插入链接获取到的数据
			current: 0,
			addId:0,//插入产品位置的id    第一模块的第几个
			page:1,//链接的页数
			noContent:noContent,//图片
			isShowMask:false,//默认不显示替换和删除背景层
			scrollToplink:0,//产品链接默认在顶部
		};
	},
	watch: {
		scrollTop: {
			handler(a, b) {
				console.log(a, b, '--------------------------------------监听IMG_CONTENT_C变化---------------------------------------');
				this.scrollTitleChange(this.dataLists.id, 60, [this.dataLists, this.indexNum]);
			},
			deep: true
		}
	},
	methods: {
		//背景层替换删除的切换
		isshowmask(){
			console.log('点击了背景层',this.isShowMask)
			this.isShowMask=!this.isShowMask;
		},
		//查看链接按钮
		linkbtn(e) {
			console.log('点击了查看产品进行跳转--',e);
			let lookUserId = null;
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				lookUserId = landRegistLG.user.id;
			} else {
				lookUserId = uni.getStorageSync('UUID');
			};
			let urlParams = {
				isFlow: 0, // 平台来源
				orderType: 0, // 订单类型
				sourceTemp: 5, // 说明书来源
				aiListTemp: 0, // 是否展示ai
				id: e.tempId, // 模板id
				isMenu: e.isMenu, // 横向导航
				instrucId:  e.instId, // 说明书id
				lookUserId: lookUserId, // 浏览者
				instrucCustType:e.instrucCustType, // 模板类型
				creatorId: e.creatorId, // 说明书创建者
				instrucState: e.instrucState // 说明书状态
			};
			uni.navigateTo({
				url: '/modules/createBusiness/templatePro/templatePro?urlParams=' + this.urlCrypto(urlParams, 0)
			});
		},
		//链接确定添加
		addBtn(){
			this.isaddLinkShow=false;
			this.$emit('set-FixedShow', true);
			console.log(this.list[this.current],'确认添加');//将要添加的链接内的数据
			console.log(this.dataLists.dataList[this.addId]);//要添加的位置
			this.dataLists.dataList[this.addId].instBanner = this.list[this.current].bannerImg;
			this.dataLists.dataList[this.addId].instName = this.list[this.current].instrucTitle;
			this.dataLists.dataList[this.addId].instId = this.list[this.current].instrucId.toString();
		},	
		//创建我的产品说明书
		navigateToAdd(){
			this.isaddLinkShow=false;
			this.$emit('set-FixedShow', true);
			uni.navigateTo({
				url: '/modules/createBusiness/selectTemplate'
			});
		},
		//替换链接
		replaceLink(indexs){
			this.addlink(indexs);
		},
		//删除链接
		deleteLink(index){
			console.log('点击了删除按钮',index);
			this.dataLists.dataList[index].instBanner = '';
			this.dataLists.dataList[index].instName = '';
			this.dataLists.dataList[index].instId = '';
		},
		//点击蒙版返回上一步
		clickMask(){
			console.log('点击退出上一步');
			this.isaddLinkShow=false;
			this.$emit('set-FixedShow', true);
		},
		//插入产品，弹出链接页面
		addlink(id) {
			this.$emit('set-FixedShow', false);
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG,'----------landRegistLG-------------');
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
						console.log(response.data.content, '请求第一次链接成功');
						this.list = response.data.content.list;
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
			console.log('插入产品',this.dataLists.dataList[id]);//要添加的位置
			this.addId = id;
			this.isaddLinkShow = true;
		},
		//单选按钮
		radioChange: function(evt) {
			for (let i = 0; i < this.list.length; i++) {
				if (this.list[i].instrucTitle === evt.target.value) {
					this.current = i;
					break;
				}
			}
		},
		//链接下滑到底部
		lower: function(e) {
			this.page++;
			console.log(this.page);
		    console.log(e,'触底页面加1，再添加十条数据进去');
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG,'----------landRegistLG-------------');
				// let params = {}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/instruc?userId='+landRegistLG.user.id+'&page='+this.page, //接口地址。
					// data: params,
					method: 'GET',
					success: response => {
						uni.hideLoading();
						console.log(response.data.content.list, '请求之后的链接成功');
						let lists = response.data.content.list;
						for(var i=0; i < lists.length;i++){
							console.log(lists[i],'每一个');
							this.list.push(lists[i]);
						}
						// this.list.push(lists);
						console.log(this.list,'这里应该是增加后的');
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
		tapIndex(e) {
			console.log(e, '用户修改的数据的index');
			this.indexs = e;
		},
		// 标题修改
		tabIconTitle(e) {
			console.log(e, '顶部标题修改');
			this.dataLists.iconTitle = e[0];
			let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
			this.$emit('tap-NEWSA', data);
		},
		//title修改
		tabTitle(e) {
			console.log(e, 'title内容修改');
			this.dataLists.dataList.map((item, index) => {
				if (index === this.indexs) {
					if ((item.title = '')) {
						item.title = '请输入标题名称';
					} else {
						item.title = e[1];
					}
				}
			});
			let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
			this.$emit('tap-NEWSA', data);
		},
		//Content修改
		tapContent(e) {
			console.log(e, 'Content内容修改');
			this.dataLists.dataList.map((item, index) => {
				if (index === this.indexs) {
					if ((item.content = '')) {
						item.content = '请输入文字说明';
					} else {
						item.content = e[1];
					}
				}
			});
			let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
			this.$emit('tap-NEWSA', data);
		},
		//InstName修改
		tapInstName(e) {
			console.log(e, 'InstName内容修改');
			this.dataLists.dataList.map((item, index) => {
				if (index === this.indexs) {
					item.instName = e[1];
				}
			});
			let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
			this.$emit('tap-NEWSA', data);
		},
		// 点击删除、上移、下移
		tapDeleteMoveTips(e) {
			console.log(e[0], e[1], '删除、上移、下移操作后返回的数据，e[0]:返回的dataList， e[1]:返回的布尔值：当触发删除最后数组没有数据时，返回false');
			this.dataLists.dataList = e[0];
			this.deleteMoveTipsShow = e[1];
			e[1] === false ? (this.manageType = 1) : (this.manageType = 0);
			console.log(this.manageType, '------------------this.manageType-------------------');
			let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
			this.$emit('tap-NEWSA', data);
		},
		// 点击管理、复制、完成组件
		tapManageCopyTips(e) {
			console.log(e, '管理、复制、完成:返回两个值 e[0]:当前编辑的数组，e[1]:当前 控制deleteMoveTips组件显示隐藏的值');
			this.dataLists.dataList = e[0];
			this.deleteMoveTipsShow = e[1];
			let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
			this.$emit('tap-NEWSA', data);
		},
		// 点击单张图片
		tabPicture(e) {
			console.log(e, '操作单张图片返回值');
			this.dataLists.dataList = e;
			let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
			this.$emit('tap-NEWSA', data);
		},
		tabPictureInstBanner(e) {
			console.log(e, '操作单张图片返回值22222');
			this.dataLists.dataList.instBanner = e;
			let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
			this.$emit('tap-NEWSA', data);
		}
	}
};
</script>

<style>
.ititle {
	margin: 10upx 30upx;
}
.icontent {
	margin: 40upx 30upx;
}
.content-item{
	position: relative;
}
.mask-link{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	background: rgba(66, 65, 65, 0.29);
	z-index: 102;
	display: flex;
	align-items: center;
	justify-content: center;
}
.mask-link-div{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 26.666vw;
	height: 60upx;
	background: #2E2E30;
	font-family: PingFangSC-Light;
	color: #FFFFFF;
	letter-spacing: 0;
	line-height: 26upx;
	position: relative;
}
.mask-link-div view{
	/* margin-left: 10upx;
	margin-right: 10upx; */
}
.replaceAndDel{
	font-size: 24upx;
	height: 40upx;
	width: 50%;
	display: flex;
	justify-content: center;
}
.replace{
	border-right: 1upx solid #FFF;
}
.mask-link-div-dian{
	width: 18upx; 
	height: 18upx;
	background: #2E2E30;
	position: absolute;
	transform: rotate(45deg);
	bottom: -10upx;
}
.imgUrl,
.instBanner {
	margin: 20upx 4%;
}
.instName {
	margin: 0 30upx;
}
.instName_content{
	font-family: PingFangSC-Regular;
	font-size: 32upx;
	color: #2E2E30;
	letter-spacing: 0;
	text-align: justify;
	line-height: 56upx;
}
.linkbtn {
	display: flex;
	justify-content: center;
	margin-top: 40upx;
	margin-bottom: 40upx;
}
.link {
	width: 200upx;
	height: 68upx;
	background: #2e2e30;
	font-family: PingFangSC-Medium;
	font-size: 28upx;
	color: #ffffff;
	letter-spacing: 0;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
}
.dislink{
	width: 200upx;
	height: 68upx;
	opacity: 0.2;
	background: #2E2E30;
	font-family: PingFangSC-Medium;
	font-size: 28upx;
	color: #FFFFFF;
	letter-spacing: 0;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
}
.addDefaultLink {
	width: 100%;
	height: 340upx;
	position: relative;
}
.intro{
	font-family: PingFangSC-Medium;
	font-size: 28upx;
	color: #2E2E30;
	letter-spacing: 0;
	text-align: center;
	line-height: 40upx;
	margin-top: 10upx;
}
.linkImgbtn {
	position: absolute;
	top: 80upx;
	left: 274upx;
}
.linkImgbtn-content {
	width: 144upx;
	height: 65upx;
	background: #2e2e30;
	font-family: PingFangSC-Light;
	font-size: 26upx;
	color: #ffffff;
	letter-spacing: 0;
	line-height: 26upx;
	display: flex;
	justify-content: center;
	align-items: center;
}
.linkImgbtn-content-div {
	position: absolute;
	width: 18upx;
	height: 18upx;
	transform: rotate(45deg);
	background: #2e2e30;
	bottom: -10upx;
	left: 60upx;
}
.picker-box {
	position: fixed;
	width: 100vw;
	z-index: 100000000;
	height: 100vh;
	top: 0;
	left: 0;
}
.mask {
	width: 100%;
	height: 100%;
	position: absolute;
	background: rgba(66, 65, 65, 0.29);
	z-index: 10000000000;
}
.ani-box {
	position: absolute;
	width: 100vw;
	z-index: 10000000001;
	bottom: 0;
	background: #ffffff;
	box-shadow: 0 -2px 10px 0 rgba(46, 46, 48, 0.2);
	border-radius: 20px;
	border-radius: 0px;
	display: flex;
	flex-direction: column;
}
.picker_title {
	top: 266upx;
	width: 100%;
	height: 112upx;
	border-bottom: 1upx solid #e2e2e2;
	font-family: PingFangSC-Regular;
	font-size: 32upx;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 32upx;
	display: flex;
	justify-content: center;
	align-items: center;
}
.picker_content{
	width:100%;
}
.picker_content-img{
	width: 280upx;
	height:280upx;
	margin: 0 auto;
	margin-top: 213upx;
}
.picker_content-text{
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: PingFangSC-Regular;
	font-size: 32px;
	color: #9B9B9B;
	letter-spacing: 0;
	text-align: center;
	line-height: 48px;
	margin-top: 52upx;
}
.uni-list-cell{
	height: 140upx;
}
.picker_img{
	width: 120upx;
	height: 120upx;
	margin-left: 24upx;
}
.picker_intro{
	margin-left: 20upx;
	height: 120upx;
}
.instrucTitle{
	font-family: PingFangSC-Regular;
	font-size: 26upx;
	color: #2E2E30;
	line-height: 26upx;
}
.instrucIntro{
	font-family: PingFangSC-Regular;
	font-size: 26upx;
	color: #9B9B9B;
	text-align: justify;
	line-height: 40upx;
	margin-top: 7upx;
}
.picker-btn {
	width: 100%;
	height: 100upx;
	background-image: linear-gradient(134deg, #15d49f 0%, #57d6cf 100%);
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: PingFangSC-Regular;
	font-size: 32upx;
	color: #ffffff;
	letter-spacing: 0;
	text-align: center;
	line-height: 32upx;
	position: fixed;
	bottom: 0;
}
</style>
