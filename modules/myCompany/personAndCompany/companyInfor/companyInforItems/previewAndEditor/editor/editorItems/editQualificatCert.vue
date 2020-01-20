<template>
	<div class="editBasicInfor-content">
		<div class="editBasicInfor">
			<div class="editBasicInfor-box">
				<div class="MI-box M-Bttom">
					<!--品牌名称-->
					<div class="MI-items">
						<div class="MI-left-EBI left">
							<img :src="xing" alt="" class="img" />
							<p class="">{{i18n.leftText.pinPai}}</p>
						</div>
						<!--<p class="error-tips-EBI">未填写</p>-->
						<div class="MI-right right">
							<div class="right-Box-MI">
								<div class="img-MI EBI-img-MI left">
									<!-- <input type="text" name="lname" maxlength="18" v-model="UserData.authBrandName" class="perInfoItemR" placeholder="请输入" /> -->
									<view class="BI-text-right">
										<wInput
											v-model="UserData.authBrandName"
											:placeholder="i18n.defaultText.defaul_input"
										></wInput>
									</view>
								</div>
								<div class="arrow-img-MI left"><!--<img :src="lineRightArrow" alt="" class="right">--></div>
							</div>
						</div>
						<div class="clear"></div>
						<div class="line"></div>
					</div>
					<!--推广内容-->
					<div class="">
						<div class="MI-left-EBI-TextArea">
							<img :src="xing" alt="" class="img" />
							<p class="">{{i18n.leftText.neiRong}}</p>
						</div>
						<div class="textAarea-box">
							<view class="uni-textarea">
								<textarea placeholder-style=""  maxlength="300" :placeholder="i18n.defaultText.defaul_textArea" v-model="UserData.authBrandContent"/>
								<view class="info">{{UserData.authBrandContent.length}}/300</view>
							</view>
							<!-- <textarea class="introduce2" placeholder="请简单描述您的企业" :rows="8" :cols="30"></textarea> -->
						</div>
						<div class="line"></div>
					</div>
					<!--主体类型-->
					<div class="MI-items">
						<div class="MI-left-EBI left">
							<img :src="xing" alt="" class="img" />
							<p class="">{{i18n.leftText.leiXIng}}</p>
						</div>
						<div class="MI-right right">
							<div class="right-Box-MI">
								<picker @change="DataChangeType" :value="index1" :range="i18n.authType" range-key="text">
									<div class="img-MI left">
										<p :class="UserData.authType ? 'intro-MI2' : 'intro-MI'" >{{ authCompTypeText || i18n.defaultText.defaul_picker }}</p>
									</div>
								</picker>
								<div class="arrow-img-MI left"><img :src="lineRightArrow" alt="" class="right" /></div>
							</div>
						</div>
						<div class="clear"></div>
						<div class="line"></div>
					</div>
					<!--主体身份-->
					<div class="MI-items">
						<div class="MI-left-EBI left">
							<img :src="xing" alt="" class="img" />
							<p class="">{{i18n.leftText.shengFen}}</p>
						</div>
						<div class="MI-right right">
							<div class="right-Box-MI">
								<picker @change="DataChangeShengFen" :value="index1" :range="i18n.qualificationType" range-key="text">
									<div class="img-MI left" >
										<p class="intro-MI" v-if="!UserData.qualificationType">{{i18n.defaultText.defaul_picker}}</p>
										<p :class="UserData.qualificationType ? 'intro-MI2' : 'intro-MI'" v-else>{{ authQualTypeText || i18n.defaultText.defaul_picker }}</p>
									</div>
								</picker>
								<div class="arrow-img-MI left"><img :src="lineRightArrow" alt="" class="right" /></div>
							</div>
						</div>
						<div class="clear"></div>
						<div class="line"></div>
					</div>
					
					<!--营业执照-->
					<div class="MI-items">
						<div class="items-box-EQI">
							<div class="MI-left-EBI left">
								<img :src="xing" alt="" class="img" />
								<p class="">{{i18n.leftText.zhiZhao}}</p>
							</div>
							<div class="MI-right right">
								<div class="right-Box-MI">
									<div class="img-MI left">
										<view class="BI-text-right">
											<view class="BI-picker" v-if="logo==''&&this.list.authQualImg==''">{{i18n.defaultText.defaul_imgPutIn}}</view>
											<image class="BI-picker-Img" v-if="logo==''&&this.list.authQualImg!=''" :src="this.list.authQualImg"></image>
											<view class="Img-logo">
												<!-- 图片上传 -->
												<view class="Img-Upload">
													<imageUploadOne
														v-model="listData.imageData"
														:server-url="listData.serverUrl"
														limit="1"
														:images="0"
														@delete="deleteImage"
														@add="addImage"
													></imageUploadOne>
												</view>
											</view>
											<!-- <image :src="rightArrow" class="BI-rightArrow"></image> -->
										</view>
									</div>
									
									<div class="arrow-img-MI left"><img :src="lineRightArrow" alt="" class="right" /></div>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<!-- 附件上传附件大小，数量等提示 -->
						<div class="tips-EQI"><p class="">{{i18n.defaultText.defaul_zhiZhao}}</p></div>
						<div class="line"></div>
					</div>
					<!--统一社会信用代码-->
					<div class="MI-items">
						<div class="MI-left-EBI left">
							<img :src="xing" alt="" class="img" />
							<p class="">{{i18n.leftText.daiMa}}</p>
						</div>
						<div class="MI-right right">
							<div class="right-Box-MI">
								<div class="img-MI EBI-img-MI left">
									<!-- <input type="number" name="lname" v-model="UserData.authQualNum" class="perInfoItemR" placeholder="点击填写" /> -->
									<view class="BI-text-right">
										<wInput
											v-model="UserData.authQualNum"
											:placeholder="i18n.defaultText.defaul_input"
										></wInput>
									</view>
								</div>
								<div class="arrow-img-MI left"><!--<img :src="lineRightArrow" alt="" class="right">--></div>
							</div>
						</div>
						<div class="clear"></div>
						<div class="line"></div>
					</div>
					<!--证件有效期-->
					<div class="MI-items">
						<div class="MI-left-EBI left asdbad">
							<img :src="xing" alt="" class="img" />
							<p class="">{{i18n.leftText.youXiaoQi}}</p>
						</div>
						<div class="MI-hao" @tap="screenDataPopup()">
							<div class="MII-nih" v-if="this.Effec==''&&this.list.qualTime==undefined&&this.times==''">请选择</div>
							<div class="MII-nih" style="color:black;" v-if="this.Effec!=''">{{Effec}}</div>
							<div class="MII-nih" style="color:black;" v-if="this.Effec==''&&this.list.qualTime!=''&&this.times!==''">{{times|formatDate}}</div>
							<div class="MII-image"><image :src="lineRightArrow"></image></div>
						</div>
						<div class="clear"></div>
						<div class="line"></div>
					</div>
					<!--注册地-->
					<div class="MI-items">
						<div class="MI-left-EBI asdbad">
							<img :src="xing" alt="" class="img" />
							<p class="">{{i18n.leftText.zhuCe}}</p>
						</div>
						<div class="MI-hao" @tap="area()">
							<div class="MII-nih" v-if="this.placker==''&&this.list.regAcodeStr==undefined">请选择</div>
							<div class="MII-nih" style="color:black;" v-if="this.placker!=''">{{placker}}</div>
							<div class="MII-nih" style="color:black;" v-if="this.placker==undefined&&this.list.regAcodeStr!=''">{{dili}}</div>
							<div class="MII-image"><image :src="lineRightArrow"></image></div>
						</div>
						<div class="clear"></div>
						<div class="line"></div>
					</div>
					<!--法人身份证-->
					<div class="MI-items">
						<div class="items-box-EQI">
							<div class="MI-left-EBI left">
								<img :src="xing" alt="" class="img" />
								<p class="">{{i18n.leftText.shengFenZ}}</p>
							</div>
							<div class="MI-right right"><div class="right-Box-MI"></div></div>
							<div class="clear"></div>
						</div>
						<div class="EBI-uploadImg">
							<view class="" v-if="isImgShow">
								<imageUploadMore
								 class="imhae"
									v-model="listDatas.imageData"
									:server-url="listData.serverUrl" 
									limit=2
									@delete="deleteImages" 
									@add="addImages">
								</imageUploadMore>
							</view>
						</div>
						<!-- 附件上传附件大小，数量等提示 -->
						<div class="tips-EQI"><p class="">{{i18n.defaultText.defaul_shengFenZ}}</p></div>
						<div class="line"></div>
					</div>
					<!-- 行业所需资质 -->
					<div class="MI-items">
						<div class="items-box-EQI">
							<div class="MI-left-EBI left">
								<img :src="xing" alt="" class="img" />
								<p class="">{{i18n.leftText.ziZhi}}</p>
							</div>
							<div class="MI-right right"><div class="right-Box-MI"></div></div>
							<div class="clear"></div>
						</div>
						<div class="EBI-uploadImg">
							<view class=""  v-if="isImgShows">
								<imageUploadMore
								 class="imhae"
									v-model="listDatass.imageData"
									:server-url="listData.serverUrl" 
									limit=5
									@delete="deleteImagess" 
									@add="addImagess">
								</imageUploadMore>
							</view>
						</div>
						<!-- 附件上传附件大小，数量等提示 -->
						<div class="tips-EQI"><p class="">{{i18n.defaultText.defaul_ziZhi}}</p></div>
						<div class="line"></div>
					</div>
					<!--资质材料补充-->
					<div class="MI-items">
						<div class="items-box-EQI">
							<div class="MI-left-EBI left"><p class="">{{i18n.leftText.buChong}}</p></div>
							<div class="MI-right right"><div class="right-Box-MI"></div></div>
							<div class="clear"></div>
						</div>
						<div class="EBI-uploadImg">
							<view class=""  v-if="isImgShowss">
								<imageUploadMore
								 class="imhae"
									v-model="listData.imageData"
									:server-url="listData.serverUrl" 
									limit=3
									@delete="deleteImagesss" 
									@add="addImagesss">
								</imageUploadMore>
							</view>
						</div>
						<!-- 附件上传附件大小，数量等提示 -->
						<div class="tips-EQI"><p class="">{{i18n.defaultText.defaul_buChong}}</p></div>
						<div class="line"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="BIF-bottom">
			<div class="BIF-btn" @click="clickSaveQualificatCert"><p class="">保存并提交审核</p></div>
		</div>
	</div>
</template>

<script>
import touXiang from '@/static/mbcImg/images/business/home/extendManageList/touxiang.png';
import lineRightArrow from '@/static/mbcImg/images/common/line-right-arrow.png';
import xing from '@/static/mbcImg/images/common/xing.png';
import wInput from '@/components/common/watch-login/watch-input1.vue';
import imageUploadOne from '@/components/common/imageUpload/imageUploadOne.vue';
import imageUploadMore from '@/components/common/imageUpload/imageUploadMore.vue';
import { mapMutations, mapGetters } from 'vuex';
export default {
	name: 'editQualificatCert',
	components: {
		wInput,
		imageUploadOne,
		imageUploadMore
	},
	data() {
		return {
			touxiang: '',
			touxiang1: touXiang,
			lineRightArrow: lineRightArrow,
			xing: xing,
			text: '',
			timeOutEvent: 0, // 定时器
			previewImgShow: false, // 预览组件显示，默认为false
			ImgSrc: '', // 预览图片路径参数
			num: '', // 记录上传图片张数
			authCompTypeText: '', // 验证类别显示
			authQualTypeTexta: '', // 资质类型显示
			authQualTypeText:'',
			index1:0,
			placker:'',
			Effec:'',
			Type:'',
			isQualTime:'',//有效期 0长期 1选择
			time:'',
			logos0:'',
			logos1:'',
			logoss0:'',
			logoss1:'',
			logoss2:'',
			logoss3:'',
			logoss4:'',
			logosss0:'',
			logosss1:'',
			logosss2:'',
			isImgShow: false,
			isImgShows: false,
			isImgShowss: false,
			listData: {//资质材料补充
				imageData: [],
				serverUrl: 'https://img01.iambuyer.com/imgup/upLoad/fileUpload' // 图片上传地址
			},
			listDatas: {//法人身份证
				imageData: [],
				serverUrl: 'https://img01.iambuyer.com/imgup/upLoad/fileUpload' // 图片上传地址
			},
			listDatass: {//行业所需资质
				imageData: [],
				serverUrl: 'https://img01.iambuyer.com/imgup/upLoad/fileUpload' // 图片上传地址
			},
			UserData: {
				"id": 17,
				"ssoUserId": 1000001126,
				"authBrandName": "",
				"authBrandContent": "",
				"authCompType": "0",
				"authQualType": "0",
				"authQualNum": "",
				"qualificationType":'',
			},
			imgData: {},
			logo:'',
			list:[],
			dili:'',
			dili1:'',
			dili2:'',
			dili3:'',
			dili4:'',
			times:'',
		};
	},
	props:['listid'],
	created() {
		
		if(this.listid==1){
			this.isImgShow = true;
			this.isImgShows = true;
			this.isImgShowss = true;
			console.log(this.placker)
			console.log(this.list.regAcodeStr)
		}else{
			this.Effec=this.GET_MY.Effective;
			this.getmy();
		}
		
	},
	computed: {
		i18n () {
		  return this.$t('qualificatCert')  
		},
		...mapGetters(['GET_MY'])
	},
	mounted() {
		
	},
	watch: {
		GET_MY: {
			handler(a, b) {
				console.log(a, b, 'header----list');
				// console.log(a.GET_MY.Effective)
				this.Effec=a.Effective
				this.placker=a.clickCity.idString
				this.regPcode=a.clickCity.addrPcode
				this.regCcode=a.clickCity.addrCcode
				this.regAcode=a.clickCity.addrTcode
				this.regAddr=a.clickCity.idaddress
				// this.authQualTypeText=a.clickCity.idString
			},
			deep: true
		},
		
	},
	filters: {
		formatDate: function(value) {
			let date = new Date(value);
			let y = date.getFullYear();
			let MM = date.getMonth() + 1;
			MM = MM < 10 ? ('0' + MM) : MM;
			let d = date.getDate();
			d = d < 10 ? ('0' + d) : d;
			let h = date.getHours();
			h = h < 10 ? ('0' + h) : h;
			let m = date.getMinutes();
			m = m < 10 ? ('0' + m) : m;
			let s = date.getSeconds();
			s = s < 10 ? ('0' + s) : s;
			return y + '-' + MM + '-' + d ;
		}
	},
	methods: {
		...mapMutations({
			setAddressBsShow: 'setAddressBsShow',
			setclickCity:'setclickCity',
			setEffective:'setEffective',
		}),
		
		getmy() {
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				let params = {}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/compAuth/'+landRegistLG.user.id, //接口地址。
					// data: this.endParams(params),
					method: 'GET',
					header: {
						Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
					},
					success: (response) => {
						uni.hideLoading();
						console.log(response.data);
						this.list = response.data.content
						this.$store.commit('setAuthen', this.list); // 更新vuex
						this.UserData.authBrandName=this.list.authBrandName;
						this.UserData.authBrandContent=this.list.authBrandContent;
						if(this.list.authCompType==0){
							this.UserData.authType='个体工商户'
							this.authCompTypeText='个体工商户'
						}else if(this.list.authCompType==1){
							this.UserData.authType='企业'
							this.authCompTypeText='企业'
						}
						if(this.list.userType==0){
							this.UserData.qualificationType = '0'
							this.authQualTypeText='品牌商'
						}else if(this.list.userType==1){
							this.UserData.qualificationType = '1'
							this.authQualTypeText='经销商'
						}else if(this.list.userType==2){
							this.UserData.qualificationType = '2'
							this.authQualTypeText='厂家'
						}else if(this.list.userType==3){
							this.UserData.qualificationType = '3'
							this.authQualTypeText='其他'
						}
						this.UserData.authQualNum=this.list.authQualNum;
						if(this.list.isQualTime==0){
							this.times='永久'
						}else if(this.list.isQualTime==1){
							this.times=this.list.qualTime;
						}
						this.dili=this.list.regPcodeStr+'-'+this.list.regCcodeStr+'-'+this.list.regAcodeStr
						this.dili1=this.list.regPcode
						this.dili2=this.list.regCcode
						this.dili3=this.list.regAcode
						this.dili4=this.list.regAddr
						//身份证正反面
						let img=[];
						img.push(this.list.authLegalNum)
						img.push(this.list.authLegalNum01)
						let imgList = [];
						img.map((items, index) => {
							if (items) {
								// let imgName = items.split('/');
								let imgObj = {
									imgUrl: items,
									imgName: items
								};
								imgList.push(imgObj);
							}
						})
						this.listDatas.imageData=imgList;
						this.isImgShow = true;
						//行业所需资质
						let imgs=[];
						imgs.push(this.list.authInduImg01)
						imgs.push(this.list.authInduImg02)
						imgs.push(this.list.authInduImg03)
						imgs.push(this.list.authInduImg04)
						imgs.push(this.list.authInduImg05)
						let imgLists = [];
						imgs.map((items, index) => {
							if (items) {
								// let imgName = items.split('/');
								let imgObj = {
									imgUrl: items,
									imgName: items
								};
								imgLists.push(imgObj);
							}
						})
						this.listDatass.imageData=imgLists;
						this.isImgShows = true;
						//资质材料补充
						let imgss=[];
						imgss.push(this.list.authEnclosureImg01)
						imgss.push(this.list.authEnclosureImg02)
						imgss.push(this.list.authEnclosureImg03)
						let imgListss = [];
						imgss.map((items, index) => {
							if (items) {
								// let imgName = items.split('/');
								let imgObj = {
									imgUrl: items,
									imgName: items
								};
								imgListss.push(imgObj);
							}
						})
						this.listData.imageData=imgListss;
						this.isImgShowss = true;
						
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
		getmymy() {
			if (uni.getStorageSync('landRegist')) {
				let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
				console.log(landRegistLG.user.id);
				let params = {}; // 请求总数居时 参数为空
				uni.showLoading({ // 展示loading
					title: '加载中'
				});
				uni.request({
					url: this.api2 + '/rest-rp/compAuth/'+landRegistLG.user.id, //接口地址。
					// data: this.endParams(params),
					method: 'GET',
					header: {
						Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
					},
					success: (response) => {
						uni.hideLoading();
						console.log(response.data);
						this.list = response.data.content
						this.$store.commit('setAuthen', this.list); // 更新vuex
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
		area () {
			this.$store.commit('setAddressBsShow', true); // 更新vuex loading
			uni.navigateTo({
				url: '/modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/industryAddress/address',
			});
		},
		screenDataPopup(){
			console.log('证件有效期');
			uni.navigateTo({
				url: '/modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/editvalidity',
			});
		},
		// 主体类型
		DataChangeType: function(e) {
			console.log('picker发送选择改变，携带值为', e.target.value);
			this.i18n.authType.map((items, index) => {
				if (String(index) === String(e.target.value)) {
					console.log(items, '左侧选择数据');
					this.UserData.authType = items.code; // code
					this.authCompTypeText = items.text; // text
					if(items.code==0){
						this.Type=1
					}else if(items.code==1){
						this.Type=0
					} // code
				}
			});
		},
		// 主体身份
		DataChangeShengFen: function(e) {
			// console.log('picker发送选择改变，携带值为', e.target);
			this.i18n.qualificationType.map((items, index) => {
				if (String(index) === String(e.target.value)) {
					console.log(items, '左侧选择数据');
					this.UserData.qualificationType = items.code; // code
					this.authQualTypeText = items.text; // text
				}
			});
		},
		addImage: function(e) {
			console.log(e, '添加图片')
			if (e.allImages) { // 上传成功
				this.logo = (e.allImages[0].imgName);
				console.log(this.logo)
			}
		},
		deleteImage: function(e) {
			console.log(e, '删除图片')
			this.logo = ''; // 清空数据
		},
		//资质材料补充
		addImagesss: function(e) {
			console.log(e, '添加图片')
			if (e.allImages) { // 上传成功
				if(e.allImages.length==1){
						this.logosss0 = (this.iamges[0].imgName);
						console.log(this.logoss0)
					}else if(e.allImages.length==2){
						this.logosss0 = (this.iamges[0].imgName);
						this.logosss1 = (this.iamges[1].imgName);
					}else if(e.allImages.length==3){
						this.logosss0 = (this.iamges[0].imgName);
						this.logosss1 = (this.iamges[1].imgName);
						this.logosss2 = (this.iamges[2].imgName);
					}
				}
			},
			deleteImagesss: function(e) {
				console.log(e, '删除图片')
			},
			//法人身份证
			addImages: function(e) {
				console.log(e, '添加图片')
				if (e.allImages) { // 上传成功
					if(e.allImages.length==1){
						this.logos0 = (e.allImages[0].imgName);
					}else{
						this.logos0 = (e.allImages[0].imgName);
						this.logos1 = (e.allImages[1].imgName);
					}
					
					
					console.log(this.logos0)
					console.log(this.logos1)
				}
			},
			deleteImages: function(e) {
				console.log(e, '删除图片')
			},
			//行业所需资质
			addImagess: function(e) {
				console.log(e, '添加图片')
				if (e.allImages) { // 上传成功
					this.iamges=(e.allImages)
					
					console.log(this.iamges)
					if(this.iamges.length==1){
						this.logoss0 = (this.iamges[0].imgName);
						console.log(this.logoss0)
					}else if(this.iamges.length==2){
						this.logoss0 = (this.iamges[0].imgName);
						this.logoss1 = (this.iamges[1].imgName);
					}else if(this.iamges.length==3){
						this.logoss0 = (this.iamges[0].imgName);
						this.logoss1 = (this.iamges[1].imgName);
						this.logoss2 = (this.iamges[2].imgName);
					}else if(this.iamges.length==4){
						this.logoss0 = (this.iamges[0].imgName);
						this.logoss1 = (this.iamges[1].imgName);
						this.logoss2 = (this.iamges[2].imgName);
						this.logoss3 = (this.iamges[3].imgName);
					}else if(this.iamges.length==5){
						this.logoss0 = (this.iamges[0].imgName);
						this.logoss1 = (this.iamges[1].imgName);
						this.logoss2 = (this.iamges[2].imgName);
						this.logoss3 = (this.iamges[3].imgName);
						this.logoss4 = (this.iamges[4].imgName);
					}
				}
			},
			deleteImagess: function(e) {
				console.log(e, '删除图片')
			},
			clickSaveQualificatCert() {
				console.log('触发保存认证信息按钮');
				if(this.UserData.authBrandName==''){
					uni.showToast({
						title: '请输入品牌名称',
						icon: 'none',
						duration: 1000
					});
					return false;
				}else if(this.UserData.authBrandContent==''){
					uni.showToast({
						title: '请输入推广内容',
						icon: 'none',
						duration: 1000
					});
					return false;
				}else if(this.authCompTypeText==''){
					uni.showToast({
						title: '请输入主体类型',
						icon: 'none',
						duration: 1000
					});
					return false;
				}else if(this.authQualTypeText==''){
					uni.showToast({
						title: '请选择主体身份',
						icon: 'none',
						duration: 1000
					});
					return false;
				}else if(this.logo==''&&this.list.authQualImg==''){
					uni.showToast({
						title: '请选择营业执照',
						icon: 'none',
						duration: 1000
					});
					return false;
				}else if(this.UserData.authQualNum==''){
					uni.showToast({
						title: '请输入统一信用社代码',
						icon: 'none',
						duration: 1000
					});
					return false;
				}else if(this.Effec==''&&this.times==''){
					uni.showToast({
						title: '请选择证件有效期',
						icon: 'none',
						duration: 1000
					});
					return false;
				}else if(this.placker==undefined&&this.dili==''){
					uni.showToast({
						title: '请选择注册地',
						icon: 'none',
						duration: 1000
					});
					return false;
				}else if(this.logos0==''&&this.listDatas.imageData==''){
					uni.showToast({
						title: '请选择法人身份证正反照',
						icon: 'none',
						duration: 1000
					});
					return false;
				}else if(this.logos1==''&&this.listDatas.imageData==''){
					uni.showToast({
						title: '请选择法人身份证正反照',
						icon: 'none',
						duration: 1000
					});
					return false;
				}else if(this.logoss0==''&&this.listDatass.imageData==''){
					uni.showToast({
						title: '请选择行业所需资质',
						icon: 'none',
						duration: 1000
					});
					return false;
				}
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					if(this.Effec==''){
						if(this.times=='永久'){
							this.isQualTime=0
						}else{
							this.isQualTime=1;
							this.time=this.times;
						}
					}else{
						if(this.Effec=='永久'){
							this.isQualTime=0
						}else{
							this.isQualTime=1;
							this.time=this.Effec;
						}
					}
					if(this.placker==undefined){
						this.regPcode=this.dili1
						this.regCcode=this.dili2
						this.regAcode=this.dili3
						this.regAddr=this.dili4
					}
					
					let params = {
						"ssoUserId":landRegistLG.user.id,
						//品牌名称
						"authBrandName":this.UserData.authBrandName,
						//推广内容
						"authBrandContent":this.UserData.authBrandContent,
						//0个体 1企业
						"authCompType":this.Type,
						//主体身份
						"userType":this.UserData.qualificationType,
						//营业执照
						"authQualImg":this.logo,
						//营业执照号
						"authQualNum":this.UserData.authQualNum,
						//0长期 1选择
						"isQualTime":this.isQualTime,
						//有效期
						"qualTime":this.time,
						//注册地址
						"regPcode":this.regPcode,
						"regCcode":this.regCcode,
						"regAcode":this.regAcode,
						"regAddr":this.regAddr,
						//身份证正面
						"authLegalNum":this.logos0,
						//反面
						"authLegalNum01":this.logos1,
						//5个照片 资质照片
						"authInduImg01":this.logoss0,
						"authInduImg02":this.logoss1,
						"authInduImg03":this.logoss2,
						"authInduImg04":this.logoss3,
						"authInduImg05":this.logoss4,
						//3个照片 附加资料
						"authEnclosureImg01":this.logosss0,
						"authEnclosureImg02":this.logosss1,
						"authEnclosureImg03":this.logosss2,
					}; // 请求总数居时 参数为空
					console.log(params)
					uni.showLoading({ // 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/compAuth/submitAuth', //接口地址。
						data: params,
						method: 'POST',
						header: {
							Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
						},
						success: (response) => {
							uni.hideLoading();
							console.log(response.data);
							this.getmymy();
							this.all();
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
			all(){
				var that=this
				uni.showModal({
					title: '提示',
					content: '您的认证信息已提交，审核需要1-2个工作日，请耐心等待~',
					confirmColor:' #02C2A2',
					showCancel:false,
					confirmText:'知道了',
					success: function (res) {
						uni.navigateBack({})
					}
				});
			},
		},
		
};
</script>

<style scoped>
	.uni-textarea >textarea{
			margin-left: 4%;
		}
		.info{
			position: absolute;
			bottom: 0;right: 0;font-size:24upx;
			color: #d2d2d2;
		}
	.BI-text-right {
		position: relative;
		width: 100%;
		    margin-top: 36upx;
		margin-bottom: 44upx;
	}
	.BI-picker {
		position: relative;
		font-family: PingFang-SC-Medium;
		font-size: 28upx;
		color: #d2d2d2;
		overflow: hidden;
		text-overflow: clip;
		white-space: pre;
		word-break: keep-all;
		letter-spacing: 0;
		padding: 0px;
		    margin-top: 36upx;
		margin-bottom: 44upx;
		line-height: 36upx;
		margin-left: 24upx;
		text-align: right;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		text-align: right;
		margin-left: 0px;
	}
	.BI-pickered {
		color: #2e2e30 !important;
	}
	.MI-left-EBI-TextArea{
		position: relative;
		width: 100%;
		min-height: 8vw;
	}
	.MI-left-EBI-TextArea>p{
		position: relative !important;
		line-height: 0 !important;
		font-family: PingFangSC-Light;
		font-size: 3.733vw;
		color: #2e2e30;
		padding-top: 7vw;
		margin-left: 4vw;
		margin-bottom: 1VW;
	}
	.MI-left-EBI-TextArea > img {
		position: relative;
		width: 2vw;
		height: 2vw;
		float: left;
		top: 5.5vw;
		margin-right: 1vw;
		left: 0;
		display: inline-block;
	}
	.MI-left-EBI-TextArea > p {
		position: absolute;
		font-family: PingFangSC-Light;
		font-size: 3.733vw;
		color: #2e2e30;
		line-height: 15vw;
		margin-left: 4vw;
	}
	.Img-Upload {
		width: 120upx;
		height: 80upx;
		position: absolute;
		right: 28upx;
		top: -20upx;
	}
	.BI-picker-Img {
		width: 80upx;
		height: 80upx;
		position: absolute;
		right: 28upx;
		top: -20upx;
	}
	.asdbad{
		width:30%!important;
		float:left;
	}
.editBasicInfor-content {
	position: relative;
	width: 100%;
	background: #f9f9f9;
}
.editBasicInfor {
	position: relative;
	width: 100%;
	background: #f9f9f9;
	padding-bottom: 5vh;
	-webkit-overflow-scrolling: touch;
}
.editBasicInfor-box {
	position: relative;
	width: 100%;
	margin-bottom: 35vw;
}
.topTips {
	position: relative;
	width: 100%;
	background: #f9f9f9;
	padding: 0 4vw 0 4vw;
}
.topTips > p {
	position: relative;
	width: 100%;
	font-family: PingFangSC-Light;
	font-size: 3.2vw;
	color: #9b9b9b;
	line-height: 8vw;
	text-align: center;
}
.EBI-textArea {
	position: relative;
	width: 100%;
	background: #fff;
	padding: 0 4vw 0 4vw;
}
.textAarea-box {
	position: relative;
	width: 100%;
	margin-top: 1vw;
}
.introduce2 {
	position: relative;
	width: 96%;
}
.MI-box {
	position: relative;
	width: 100%;
	padding: 0vw 4vw 0 4vw;
	background: #fff;
}
.MI-items {
	position: relative;
	width: 100%;
}
.MI-left-EBI {
	position: relative;
	width: 50%;
	height: 11vw;
}
.MI-left-EBI > img {
	position: relative;
	width: 2vw;
	height: 2vw;
	float: left;
	top: 5.5vw;
	margin-right: 1vw;
	left: 0;
	display: inline-block;
}
.MI-left-EBI > p {
	position: absolute;
	font-family: PingFangSC-Light;
	font-size: 3.733vw;
	color: #2e2e30;
	line-height: 15vw;
	margin-left: 4vw;
}
.MI-right {
	position: relative;
	width: 50%;
}
.right-Box-MI {
	position: relative;
	width: 100%;
}
.img-MI {
	position: relative;
	width: 90%;
}
.EBI-img-MI {
	width: 100% !important;
}
.img-MI .touxiang {
	position: relative;
	width: 100%;
	float: right;
}
.imgTouXiang {
	position: relative;
	width: 10.66vw;
	height: 10.66vw;
	margin-top: 2.1vw;
}
.imgKongText {
	position: relative;
	width: 100%;
	font-family: PingFang-SC-Medium;
	font-size: 3.733vw;
	color: #d2d2d2;
	letter-spacing: 0;
	text-align: right;
	line-height: 15vw;
}
.arrow-img-MI {
	position: relative;
	width: 10%;
}
.arrow-img-MI > img {
	position: relative;
	width: 2vw;
	height: 2vw;
	margin-top: 6.5vw;
	float: right;
}
.perInfoItemR {
	width: 100%;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #3c3c3f;
	letter-spacing: 0;
	/* height: 15vw; */
	padding: 5vw 0;
	/* margin: 5vw 0; */
	line-height: 5vw;
	text-align: right;
	margin-right: 1vw;
	float: left;
}
.intro-MI {
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #d2d2d2;
	letter-spacing: 0;
	text-align: right;
	line-height: 15vw;
}

.intro-MI2 {
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #3c3c3f;
	letter-spacing: 0;
	text-align: right;
	line-height: 15vw;
}
.BIF-bottom {
	position: fixed;
	width: 100%;
	padding: 1.5vw 4vw 1.5vw 4vw;
	bottom: 0;
	z-index: 105;
	background: #fff;
}
.BIF-btn {
	position: relative;
	width: 100%;
	background: #02c2a2;
	border-radius: 2px;
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #ffffff;
	text-align: center;
	letter-spacing: 0;
	line-height: 12vw;
}
.error-tips-EBI {
	position: absolute;
	top: 10vw;
	left: 4vw;
	font-family: PingFangSC-Light;
	font-size: 3.2vw;
	color: #ff4d6a;
	line-height: 4vw;
}
.tips-EQI {
	position: relative;
	width: 100%;
	padding-left: 4vw;
	height: 9vw;
}
.tips-EQI > p {
	font-family: PingFangSC-Light;
	font-size: 3.7vw;
	color: #9b9b9b;
	line-height: 8vw;
}
.EBI-uploadImg {
	position: relative;
	width: 100%;
	padding-left: 4vw;
	height: 100%;
}
.MI-hao{
	width:70%;
	height:106upx;
	/* background:red; */
	float:left;
	text-align:right;
	line-height:106upx;

}
.MII-image{
	width:14upx;
	height:100%;
	position:absolute;
	right:0;
	top:0;
}
.MII-image>image{
	width:100%;
	height:14upx;
}
.MII-nih{
	margin-right:34upx;
	color: #d2d2d2;
}
</style>
