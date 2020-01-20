/**
 * Created by 菅双鹤 on 2019/07/25.
 */

const state = {
	empty: { // 空状态
		emptyShow: false,
		emptyText: '当前没有数据！',
	},
	addressBs: false, // 地址模块
	home: { // 主页
		tabItems: 2,
		publishShow: false // 判断发布组件是否显示
	},
	find:{
		message:[],
	},
	aLittle: { // 陌拜一下
		liuLiangOrPutInTitle: 1 ,// 默认显示流量数据 
		liuLiangOrPutInTitle2: 1 ,// 默认显示流量数据 
		customTime:{
			show: false, // 默认不显示
			selectTime: false // 默认没有选择时间
		},
		customTime2:{
			show: false, // 默认不显示
			selectTime: false // 默认没有选择时间
		},
		businessPutIn: { // 投放商机组件
			show: false, // 默认不显示
		},
		//首页 投放商机列表
		putInBusinessData:[],
		Putinname:[],
		putInstate:[],
	},
	my:{//我的基本信息
		headers:[],
		personAndCompany: {
			
		},
		Refresh:[],
		//我的说明书列表
		product:[],
		//说明书产品列表
		chan:[],
		//说明书产品定制
		ding:[],
		//说明书产品定制
		zi:[],
		//我的说明书详情
		detailed:[],
		//我的订单 供应订单
		Supply:[],
		//我的订单 采购订单
		Purchase:[],
		// 我的采购列表全部
		PurchaseA:[],
		// 我的采购列表待发布
		PurchaseB:[],
		// 我的采购列表采购中
		PurchaseC:[],
		// 我的采购列表已停止
		PurchaseD:[],
		// 我的采购列表已完成
		PurchaseE:[],
		// 我的采购列表已下架
		PurchaseF:[],
		// 公司认证 地理位置
		clickCity:[],
		// 公司认证 证件有效期
		Effective:[],
		//公司 tetle切换
		PersonTitle:[],
		//公司认证详情
		Authen:[],
		//我的设置 地址管理
		address:[],
		//我的设置 所在地区
		ress:[],
	},
	news:{
		//收到留言列表
		Message:[],
		// 系统通知列表
		system:[],
		//消息未读数
		num:[],
		//发出留言列表
		Alr:[],
	},
	publish: {
		publishPurchase: { // 采购模板
			templetType: 0, // 采购摸吧类型 0代表简单模板，1代表普通模板
			moreSet: false, // 运费及更多设置 默认不显示
			previceCaiGou: false, // 判断预览状态， 默认是编辑状态
			imgList:{
				imageData: [
				],
				serverUrl: 'https://img01.iambuyer.com/imgup/upLoad/fileUpload' // 图片上传地址
			}, // 附件列表
			caiGouList:{ // 采购列表数据
				paraList: [
				],
				requList: [
				],
				imgList: [],
				userId: 760,
				purcTitle: '',
				purcSpec: '',
				purcCount: 1,
				purcUnit: '',
				purcPcode: '',
				purcCcode: '',
				purcCcodeStr: '', // 省市区页面展示
				purcContent: '',
				purcDefault: '0', // 默认模板
				purcInvo: '1', // 默认含税
				purcFrei: '1', // 默认含运费
				purcEndTime: '',
				purcReceTime: '0-0-0',
				purcState: '',
				purcType: '0' // 0简单采购 1参数采购
			}
		}
	},
};
export default state;
