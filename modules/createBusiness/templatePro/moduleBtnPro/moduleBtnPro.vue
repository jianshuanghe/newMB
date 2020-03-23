<template>
	<div class="selectTemplate-content" >
		<bottom
			:bottomloca='bottomLoca'
			:isNewsAShow='isNewsAShow'
			:defaultAddImg='defaultAddImg'
			:disabled='statusPreviewEditor'
			:idTemp='idTemp'
			:statusTemp='newsData.statusTemps'
			:sourceTemp='newsData.sourceTemps'
			:routeParam='routeParam'
			:busiCantAddShows='busiCantAddShow'
			:editShows='editShow'
			:savePrePubShows='savePrePubShow'
			:madeShows='madeShow'
			:businessTemList='businessTemListsContent'
			:moduleDateList='moduleDateList'
			:moduleTempList='moduleTempList'
			@tap-UpDataBusinessData='tapUpDataBusinessData'
			@set-FixedShow='setFixedShow'
			@tap-BottomData='tapBottomData'
			@tap-UseTemp='tapUseTemp'
			@tap-GoEdit='tapGoEdit'
			@tap-Save='tapSave'
			@tap-Preview='tapPreview'
			@tap-Publish='tapPublish'
			@bottomTap='bottomTap'
			@botPhone='botPhone'
			@tap-Consult-Bot='tapConsultBot'
		></bottom>
		<!-- <div class="nijap" @tap="asd()"></div> -->
	</div>
</template>

<script>
	import bottom from '@/components/common/RHX/bottom/bottom';
	import { mapMutations , mapGetters } from 'vuex';
	export default {
		data() {
			return {
				
				defaultAddImg:  this.Static+'publish/createBusiness/defaultAdd.png',
				businessTemListsContent: null,
				statusPreviewEditor: this.isEditTemp, // 模板状态 默认true编辑状态， false预览状态
				busiCantAddShow: false, // 默认不展示，编辑状态展示此模块-----------商家、联系、添加按钮
				editShow: false, // 默认不展示， 用户点击预览之后展示此模块，预览模块消失。用户再次点击去编辑，此模块消失，展示预览模块
				savePrePubShow: false, // // 默认不展示， 用户点击编辑之后展示此模块，编辑模块消失。用户再次点击去预览，此模块消失，展示编辑模块
				madeShow: false, // 立即定制按钮，默认不显示，规则：{同一id下展示不可点击，不同id下展示可点击）
				newsData:{
					setFixedShow: true, // 从父原则处理横向导航栏遮挡问题
					statusTemps: 1, // 当前模板的状态；0代表：编辑，1代表：预览，2代表，3代表：.....
					sourceTemps: this.routeParam ? this.routeParam.sourceTemp : null, // 从哪里进来的：0代表：模板列表，1代表：，2代表，3代表：.....
					routeParams: {}, // 路由参数
				},
				moduleDateLists: null, // 模板数据， 用于更新接口使用
				dateLists: { // 传给接口的数据
					userId : null, //说明书所属人ID
					instrucTitle : "",//资讯标题
					tempId : this.routeParam ? this.routeParam.id : null,//模板ID
					instrucIntro : "",//说明
					instrucState:1,//0未发布 1已上架 2已下架
					instrucCategory: '',
					keyList: [''],
					context : ""//说明书JSON串
				},
			};
		},
		props: [
			"bottomLoca",
			'isEditTemp',
			'disabled',
			'idTemp',
			'statusTemp',
			'sourceTemp',
			'routeParam',
			'businessTemList',
			'moduleDateList',
			'moduleTempList',
			'isNewsAShow'
		],
		components: {
			bottom,
		},
		computed: {
			i18n() {
				return this.$t('navigation');
			},
			...mapGetters(['GET_PUBLISH'])
		},
		created() {
			
		},
		watch: {
			statusTemp: {
				handler(a, b) {
					// console.log('---------------statusTemp----------------')
					this.newsData.statusTemps = a;
					this.previewOrEditor(a);
					this.statusTempFn(this.newsData.statusTemps)
				},
				deep: true
			},
			sourceTemp: {
				handler(a, b) {
					console.log(a, b, '------------sourceTemp----------');
					this.newsData.sourceTemps = a;
				},
				deep: true
			},
			routeParam: {
				handler(a, b) {
					this.newsData.routeParams = b;
					this.dateLists.tempId = a.id
					console.log(a, b, '-------routeParam++++++++++++++++-------')
				},
				deep: true
			},
			businessTemList: {
				handler(a, b) {
					this.businessTemListsContent = a.content;
				},
				deep: true
			},
			moduleDateList: {
				handler(a, b) {
					// console.log(a, '--------------+++++++++++++moduleDateList1+++++++++++++++---------------')
					this.dateLists.context = a.content.context;
					this.typeConversion(this.dateLists.context);
				},
				deep: true
			},
		},
		mounted() {
			// console.log(this.newsData.routeParams, '||||||||||++++++++++++')
			// console.log(this.moduleDateList, '--------------+++++++++++++moduleDateList2+++++++++++++++---------------')
		},
		beforeDestroy() {},
		methods: {
			// 跟新商家信息主页
			tapUpDataBusinessData(e) {
				this.$emit('tap-UpDataBusiness', e);
			},
			// 按钮中的type类型转换
			typeConversion (e) {
				let userActionBtn = e.tempCon.userActionBtn;
				for (let i in userActionBtn) {
					// console.log(userActionBtn[i].btnType, '++++++++++userActionBtn[i].btnType+++++++++++')
					if (userActionBtn[i].btnType !== '') {
						userActionBtn[i].btnType = Number(userActionBtn[i].btnType);
					};
				};
				this.dateLists.context = e;
			},
			// 判断当前模板是否编辑还是预览状态
			previewOrEditor(e) {
				// console.log(e, '判断当前模板是否编辑还是预览状态');
				if(e === 0) { // 编辑状态
					this.statusPreviewEditor = true
				} else if (e === 1) { // 预览状态
					this.statusPreviewEditor = false
				};
				// console.log(this.statusPreviewEditor, '--------------statusPreviewEditor------------')
			},
			// 监听fixed定位，处理从父原则
			setFixedShow(e) {
				// console.log(e, '监听fixed定位，处理从父原则');
				this.newsData.setFixedShow = e;
				this.$emit('tap-ModuleBtnPro', this.newsData);
			},
			// 侦听模板的状态
			statusTempFn(e) {
				// console.log(e, '侦听模板的状态');
				if(e === 1) { // 编辑
					this.busiCantAddShow = true; // 商家、联系、添加按钮
					this.editShow = true; // 编辑按钮
					this.savePrePubShow = false; // 预览编辑按钮
					this.madeShow = false; // 立即定制按钮
				} else if (e === 0) { // 预览
					this.busiCantAddShow = true; // 商家、联系、添加按钮
					this.editShow = false; // 编辑按钮
					this.savePrePubShow = true; // 预览编辑按钮
					this.madeShow = false; // 立即定制按钮
				}
			},
			asd(){
				// console.log('to我的采购-详情')
				uni.navigateTo({
					url: '/pages/project/MBBO/home',
				});
			},
			...mapMutations({
				setMoreSet: 'setMoreSet'
			}),
			bottomTap:function(value){
				// console.log(value)
			},
			botPhone:function(val){
				// console.log(val)
			},
			// 用户操作完顶部按钮数据
			tapBottomData(e) {
				// console.log(e, '用户操作完顶部按钮数据');
				this.moduleDateLists = e;
			},
			// 用户触发了使用此模板
			tapUseTemp() {
				console.log('用户触发了使用此模板');
				this.newsData.statusTemp = 0; // 切换成编辑状态
				this.newsData.sourceTemp = -1; // 切换来源
				this.$emit('tap-ModuleBtnPro', this.newsData);
			},
			// 用户触发去编辑
			tapGoEdit() {
				console.log('用户触发去编辑');
				this.newsData.statusTemp = 0; // 切换成预状态
				this.newsData.sourceTemp = -1; // 切换来源
				this.$emit('tap-ModuleBtnPro', this.newsData);
			},
			// 用户触发保存按钮
			tapSave () {
				console.log('用户触发保存按钮');
				this.submitData('0');
			},
			// 用户触发预览按钮
			tapPreview () {
				console.log('用户触发预览按钮');
				this.newsData.statusTemp = 1; // 切换成预状态
				this.newsData.sourceTemp = -1; // 切换来源
				this.$emit('tap-ModuleBtnPro', this.newsData);
			},
			// 用户触发发布按钮
			tapPublish () {
				// console.log('用户触发发布按钮');
				this.submitData('1');
			},
			// 用户触发立即咨询按钮
			tapConsultBot(e){
				this.$emit('tap-Consult', e);
			},
			// 提交说明书
			submitData (type) {
				let params = this.dateLists; // 请求总数居时 参数为空
				// console.log(params, '-------------------params----------------');
				// console.log(this.moduleDateList, '------------this.moduleDateLists--------------');
				// return
				let userActionBtn = params.context.tempCon.userActionBtn;
				for (let i in userActionBtn) {
					// console.log(userActionBtn[i].btnType, '++++++++++userActionBtn[i].btnType+++++++++++')
					userActionBtn[i].btnType = String(userActionBtn[i].btnType);
				};
				params.instrucState = type;
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					// console.log(landRegistLG.user.id);
					params.userId = landRegistLG.user.id;
				};
				let paramsUrl=[params, 0]; // 0发布， 1跟新
				// console.log(this.routeParam, '-----------this.routeParam----------------')
				if (this.routeParam.sourceTemp !== 0 || this.routeParam.instrucState === '0') {
					// console.log('跟新')
					params.instrucTitle = this.moduleDateList.content.instrucTitle;
					params.instrucIntro = this.moduleDateList.content.instrucIntro;
					params.instrucCategory = this.moduleDateList.content.instrucCategory;
					params.instrucCategoryStr = this.moduleDateList.content.instrucCategoryStr;
					params.keyList = this.moduleDateList.content.keys;
					paramsUrl=[params, 1]; // 0发布， 1跟新
				};
				uni.setStorageSync('urlParamsTemp', JSON.stringify(this.urlCrypto(paramsUrl, 0))); // 缓存用户登录信息
				if (this.routeParam.isPC && this.routeParam.isPC === 1) {
					window.parent.postMessage(JSON.stringify(this.urlCrypto(paramsUrl, 0)),'http://localhost:8080/');
				} else {
					uni.navigateTo({
						url: '/modules/createBusiness/templateFinish/templateFinish?'
					});
				}
			},
		}
	};
</script>

<style>
	.selectTemplate-content{
		width: 100%;
		height: 100%;
	}
	.nijap{
		width: 500upx;
		height: 100upx;
		background: red;
	}
</style>
