<template>
	<view>
		<view class="mode-list" :id="dataLists.id">
			<view>
				<rTitle
					:disabled="!disabled"
					:isShowOne="true"
					:rPadding="tabYItemsIndex === indexNum ? '6vw 20upx 0 20upx' : '6vw 20upx 0 20upx'"
					:valueOne="dataLists.iconTitle"
					typeOne="text"
					:maxlengthOne="5"
					:focusOne="false"
					:cursorOne="0"
					adjustPositionOne="adjustPosition"
					tTAlignOne="center"
					tColorOne="#02C2A2"
					tFontSizeOne="5.333vw"
					tLineHeightOne="8.466vw"
					tWidthOne="100%"
					tHeightOne="8.466vw"
					tPaddingOne=""
					tBGOne="rgba(212, 253, 247, 0.21)"
					tBorderOne="1px solid #02C2A2"
					tBStyleOne="dashed"
					:isShowTwo="false"
					@tap-Title="tabIconTitle"
				></rTitle>
			</view>
		</view>
		<view class="content">
			<view class="content-item" v-for="(item, index) in dataLists.dataList" :key="index" @click="isshowmask()">
				<view class="ititle">
					<view class="videoMo" v-if="item.videoUrl">
						<view class="vtitle">
							<!-- 标题 -->
							{{ item.title }}
						</view>
						<view class="updataTime">
							<!-- 更新时间 -->
							{{ item.content }}
						</view>
						<view class="rvideo">
							<!-- 视频 -->
							<rVideo
								:disabled="disabled"
								:dataList="item"
								:itemsData="dataLists.dataList[0]"
								videoWidth="100%"
								videoHeight="366upx"
								@tap-index="tapIndex"
								@tap-Video="tapVideo"
							></rVideo>
						</view>
					</view>
					<view class="imageMo" v-else-if="item.imgUrl && !item.videoUrl">
						<view class="imgLeft">
							<view class="Imgtitle">
								<!-- 标题 -->
								{{ item.title }}
							</view>
							<view class="imgUpdataTime">
								<!-- 更新时间 -->
								{{ item.content }}
							</view>
						</view>
						<view class="imageRight"><image :src="item.imgUrl" style="width:100%;height: 100%;"></image></view>
					</view>
					<view calss="contextMo" v-else>
						<view class="vtitle">{{ item.title }}</view>
						<view class="updataTime">
							<!-- 更新时间 -->
							{{ item.content }}
						</view>
					</view>
					<!-- 分割线 -->
					<view class="line"></view>
					
				</view>
				<!-- 链接内有内容显示 -->
				<view class="mask-link" v-if="disabled && isShowMask" >
					<!-- 遮罩层 -->
					<view >
						<view class="mask-link-div">
							<view class="replaceAndDel replace" @click="replaceLink(index)">替换</view>
							<view class="replaceAndDel" @click="deleteLink(index)">删除</view>
							<view class="mask-link-div-dian"></view>
						</view>
					</view>
				</view>
				<!-- 删除、上移、下移 -->
				<deleteMoveTips
					:dataList="dataLists.dataList"
					:itemsData="dataLists.dataList[0]"
					:indexNum="index"
					dMWidth="100vw"
					dMHeight="100%"
					@tap-DeleteMoveTips="tapDeleteMoveTips"
					v-if="deleteMoveTipsShow && disabled"
				></deleteMoveTips>
			</view>
		</view>
		<!-- 管理项目-附加此项 -->
		<faqManageTips
			v-if="disabled"
			:manageCopyShow="deleteMoveTipsShow"
			:manageType="manageType"
			:dataList="dataLists.dataList"
			:itemsData="dataLists.dataList[0]"
			:isManageShow="true"
			@tap-ManageCopyTips="tapManageCopyTips"
			@tap-addFaqLink = "tapAddFaqLink"
		></faqManageTips>
		<!-- 弹出框添加产品链接 -->
		<view v-if="isaddLinkShow">
			<view class="picker-box">
				<!-- 遮罩层 -->
				<view class="mask" @click="clickMask"></view>
				<!-- 内容区 -->
				<view class="ani-box">
					<view class="picker_title">添加FAQ</view>
					<!--有自己的创建过的链接-->
					<view class="picker_content" v-if="list.length>=1">
						<scroll-view :scroll-top="scrollToplink" scroll-y="true" class="scroll-Y" @scrolltolower="lower" style="height: 66vh;padding-bottom: 8vh;">
							<checkbox-group @change="checkboxChange">
								<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in list" :key="index">
									<view style="display: flex;align-items: center;">
										<checkbox :value="item" />
										<view class="picker_intro">
											<view class="instrucTitle">{{item.instName}}</view>
											<view class="instrucIntro">{{item.creatTime}}</view>
										</view>
									</view>
								</label>
							</checkbox-group>
						</scroll-view>
					</view>
					<!-- 没有创建的链接 -->
					<view class="picker_content" v-else>
						<view class="picker_content-img">
							<image :src="noContent" style="width: 100%; height: 100%;"></image>
						</view>
						<view class="picker_content-text">
							<view>这还什么都没有哦</view>
							<view>快点击下方按钮去添加吧~</view>
						</view>
					</view>
					<view class="picker-btn" @click="addBtn" v-if="list.length>=1">确认添加</view>
					<view class="picker-btn" @click="navigateToAdd" v-else>新建FAQ</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import rTitle from '@/components/common/RHX/rTitle/rTitle';
import rVideo from '@/components/common/RHX/rVideo/rVideo';
import deleteMoveTips from '@/components/common/RHX/deleteMoveTips/deleteMoveTips';
import faqManageTips from '@/components/common/RHX/manageCopyTips/faqManageTips.vue';
export default {
	components: {
		rTitle,
		rVideo,
		deleteMoveTips,
		faqManageTips
	},
	props: [
		'basicData', //传过来的modules数据
		'dataList',
		'disabled',
		'tabYItemsIndex',
		'indexNum',
		'defaultImg',
		'scrollTop'
	],
	data() {
		return {
			indexs: -1,
			dataLists: this.dataList,
			basicDatas: this.basicData,
			deleteMoveTipsShow: false, // 控制deleteMoveTips组件显示隐藏
			manageType: 0, // 0展示管理 和 复制； 1只展示复制
			isaddLinkShow: false, //是否展示添加列表组件
			list: [], //插入链接获取到的数据
			checkboxList:[],//多选添加faq
			scrollToplink:0,//产品链接默认在顶部
			isShowMask:false,//默认不显示替换和删除背景层
			noContent: this.Static+'publish/createBusiness/noContent.png',//图片
		};
	},
	watch: {
		scrollTop: {
			handler(a, b) {
				console.log(a, b, '--------------------------------------监听LIST_FS_A变化---------------------------------------');
				this.scrollTitleChange(this.dataLists.id, 60, [this.dataLists, this.indexNum]);
			},
			deep: true
		}
	},
	methods: {
		tapIndex(e) {
			console.log(e, '用户修改的数据的index');
			this.indexs = e;
		},
		// 标题修改
		tabIconTitle(e) {
			console.log(e, '顶部标题修改');
			this.dataLists.iconTitle = e[0];
			let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
			this.$emit('tap-LISTFSA', data);
		},
		// 点击删除、上移、下移
		tapDeleteMoveTips(e) {
			console.log(e[0], e[1], '删除、上移、下移操作后返回的数据，e[0]:返回的dataList， e[1]:返回的布尔值：当触发删除最后数组没有数据时，返回false');
			this.dataLists.dataList = e[0];
			this.deleteMoveTipsShow = e[1];
			e[1] === false ? (this.manageType = 1) : (this.manageType = 0);
			console.log(this.manageType, '------------------this.manageType-------------------');
			let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
			this.$emit('tap-LISTFSA', data);
		},
		// 点击管理、复制、完成组件
		tapManageCopyTips(e) {
			console.log(e, '管理、复制、完成:返回两个值 e[0]:当前编辑的数组，e[1]:当前 控制deleteMoveTips组件显示隐藏的值');
			this.dataLists.dataList = e[0];
			this.deleteMoveTipsShow = e[1];
			let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists, this.indexNum); // 合并数据
			this.$emit('tap-LISTFSA', data);
		},
		//点击添加faq
		tapAddFaqLink(e){
			this.isaddLinkShow = true;
			this.addlink();
			console.log(e,'点击了添加链接')
		},
		//点击蒙版返回上一步
		clickMask(){
			console.log('点击退出上一步');
			this.isaddLinkShow=false;
		},
		//插入产品，弹出链接页面
		addlink() {
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG,'----------landRegistLG-------------');
				// let params = {}; // 请求总数居时 参数为空
				uni.showLoading({
					// 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/instruc/faqList?userId=760', //接口地址。
					// data: params,
					method: 'GET',
					header: {
						Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
					},
					success: response => {
						uni.hideLoading();
						console.log(response.data, '请求第一次链接成功');
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
			this.isaddLinkShow = true;
		},
		//链接确定添加
		addBtn(){
			this.isaddLinkShow=false;
			this.$emit('set-FixedShow', true);
			console.log(this.dataLists.dataList,'要添加的位置');//要添加的位置
			for(var i=0;i<this.checkboxList.length;i++){
				this.dataLists.dataList.push({
					title:this.checkboxList[i].instName,
					content:this.checkboxList[i].creatTime,
					videoUrl:this.checkboxList[i].videoUrl,
					videoImgUrl:this.checkboxList[i].videoImg,
					imgUrl:this.checkboxList[i].instImg,
					infoCount:this.checkboxList[i].lookCount
				})
			}
			
		},	
		//多选按钮
		checkboxChange(evt) {
			
			console.log(evt.detail.value,'选中的faq');//选中的faq数组
			this.checkboxList = evt.detail.value;
			console.log(this.checkboxList,'传进data的faq')
			
		},
		navigateToAdd(){
			console.log('点击可继续添加按钮');
		},
		//背景层替换删除的切换
		isshowmask(e){
			console.log('点击了背景层',e,this.isShowMask)
			this.isShowMask=!this.isShowMask;
		},
		//替换链接
		replaceLink(indexs){
			this.addlink(indexs);
		},
	}
};
</script>

<style>

.content-item {
	position: relative;
	padding-top: 40upx;
}
.vtitle {
	width: 92%;
	margin-left: 4%;
	font-family: PingFangSC-Medium;
	font-size: 32upx;
	color: #2e2e30;
	letter-spacing: 0;
	text-align: justify;
	line-height: 48upx;
}
.updataTime {
	width: 92%;
	margin-left: 4%;
	font-family: PingFangSC-Regular;
	font-size: 24upx;
	color: #9b9b9b;
	letter-spacing: 0;
	line-height: 24upx;
	margin-top: 40upx;
}
.rvideo {
	width: 92%;
	margin-left: 4%;
	margin-top: 30upx;
}
.line {
	width: 92%;
	margin-left: 4%;
	height: 1px;
	background: #f5f5f5;
	margin-top: 40upx;
}
.imageMo {
	display: flex;
	height: 166upx;
}
.imgLeft {
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	margin-left: 4%;
	width: 58%;
	margin-right: 4%;
}
.imgLeft .Imgtitle {
	font-family: PingFangSC-Medium;
	font-size: 32upx;
	color: #2e2e30;
	letter-spacing: 0;
	text-align: justify;
	line-height: 48upx;
}
.imgUpdataTime {
	font-family: PingFangSC-Regular;
	font-size: 24upx;
	color: #9b9b9b;
	letter-spacing: 0;
	line-height: 24upx;
}
.imageRight {
	width: 30%;
	height: 100%;
}
/* 弹出框 */
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
	height:80vh;
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
	height: 154upx;
}
.picker_intro{
	margin-left: 20upx;
	height: 120upx;
}
.instrucTitle{
	font-family: PingFangSC-Medium;
	font-size: 30upx;
	color: #2E2E30;
	line-height: 30upx;
	margin-top: 18upx;
}
.instrucIntro{
	font-family: PingFangSC-Regular;
	font-size: 24upx;
	color: #BDBDBD;
	line-height: 24upx;
	margin-top: 20upx;
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

/* 遮罩层  替换删除*/
.mask-link{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	background: rgba(66, 65, 65, 0.29);
	/* background: #007AFF; */
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
</style>
