var screenData = [
  {
    code: 1,
    text: '昨天'
  }, {
    code: 7,
    text: '近七日'
  }, {
    code: 30,
    text: '近30日'
  }, {
    code: '001',
    text: '自定义时间'
  }
];
var leftScreenData = [
  {
    code: '0',
    text: '访问量'
  }, {
    code: '1',
    text: '点赞数'
  }, {
    code: '2',
    text: '收藏数'
  }, {
    code: '3',
    text: '分享数'
  }, {
    code: '4',
    text: '拨打电话数'
  }, {
    code: '5',
    text: '询盘数'
  }, {
    code: '6',
    text: '询单价'
  }, {
    code: '7',
    text: '订单数'
  }
];
var Generaldatachart = [
	{
		code:'0',
		text:'总消耗'
	},{
		code:'1',
		text:'展示数'
	},{
		code:'2',
		text:'点击数'
	},{
		code:'3',
		text:'点击率'
	},{
		code:'4',
		text:'转化数'
	},{
		code:'5',
		text:'转化率'
	},{
		code:'6',
		text:'提交表单数'
	},{
		code:'7',
		text:'拨打电话数'
	},{
		code:'8',
		text:'进入关注我们页面'
	},{
		code:'9',
		text:'点击自定义oa按钮数'
	},{
		code:'10',
		text:'询价数'
	},{
		code:'11',
		text:'聊天数'
	},{
		code:'12',
		text:'订单数'
	},
]
var rightScreenData = [
  {
    code: '0',
    text: '总消耗'
  }, {
    code: '1',
    text: '展示数'
  }, {
    code: '2',
    text: '点击数'
  }, {
    code: '3',
    text: '点击率'
  }, {
    code: '4',
    text: '转化数'
  }, {
    code: '5',
    text: '转化率'
  }, {
    code: '6',
    text: '提交表单数'
  }, {
    code: '7',
    text: '拨打电话数'
  }, {
    code: '8',
    text: '进入关注我们页面'
  }, {
    code: '9',
    text: '点击自定义按钮数'
  }
];
var itemList = [
	{
	  code: '0',
	  text: '已消耗'
	}, {
	  code: '1',
	  text: '日均消耗'
	}, {
	  code: '2',
	  text: '单个客户获取成本'
	}, {
	  code: '3',
	  text: '展示数'
	}, {
	  code: '4',
	  text: '点击数'
	}, {
	  code: '5',
	  text: '点击率'
	}, {
	  code: '6',
	  text: '转化数'
	}, {
	  code: '7',
	  text: '转化率'
	}, {
	  code: '8',
	  text: '留言数(原提交表单数)'
	}, {
	  code: '9',
	  text: '拨打电话数'
	}, {
	  code: '10',
	  text: '访问商家主页数'
	}, {
	  code: '11',
	  text: '询盘数'
	}, {
	  code: '12',
	  text: '询价单'
	}, {
	  code: '13',
	  text: '订单数'
	}
];
var itemList2 = [
	{
	  code: '0',
	  text: '已消耗'
	}, {
	  code: '1',
	  text: '日均消耗'
	},{
	  code: '2',
	  text: '单个客户获取成本'
	}, {
	  code: '3',
	  text: '展示数'
	}, {
	  code: '4',
	  text: '点击数'
	}, {
	  code: '5',
	  text: '点击率'
	}, {
	  code: '6',
	  text: '转化数'
	}, {
	  code: '7',
	  text: '转化率'
	}, {
	  code: '8',
	  text: '留言数(原提交表单数)'
	}, {
	  code: '9',
	  text: '拨打电话数(次)'
	}, {
	  code: '10',
	  text: '访问商家主页数(次)'
	}, {
	  code: '11',
	  text: '询盘数'
	}, {
	  code: '12',
	  text: '询价单'
	}, {
	  code: '13',
	  text: '订单数'
	}
];
var flowList = [
	{
	  code: '0',
	  text: '访问量'
	}, {
	  code: '0',
	  text: '点赞量'
	}, {
	  code: '0',
	  text: '收藏量'
	}, {
	  code: '0',
	  text: '分享量'
	}, {
	  code: '0',
	  text: '留言量'
	}, {
	  code: '0',
	  text: '拨打电话数'
	}, {
	  code: '0',
	  text: '询盘数'
	}, {
	  code: '0',
	  text: '询价单'
	}, {
	  code: '0',
	  text: '订单数'
	}
];
var flowList2 = [
	{
	  code: '0',
	  text: '访问量'
	}, {
	  code: '0',
	  text: '点赞量'
	}, {
	  code: '0',
	  text: '收藏量'
	}, {
	  code: '0',
	  text: '分享量'
	}, {
	  code: '0',
	  text: '留言量'
	}, {
	  code: '0',
	  text: '拨打电话数'
	}, {
	  code: '0',
	  text: '询盘数'
	}, {
	  code: '0',
	  text: '询价单'
	}, {
	  code: '0',
	  text: '订单数'
	}
];
// 表头切换
var tabList = [
		{
			text: '流量数据',
			id: 1
		},
		{
			text: '投放数据',
			id: 2
		}
	]
// 自定义时间
var customTime = {
	title: '自定义时间',
	start: '开始时间',
	zhi: '至',
	end: '结束时间',
	submit: '保存'
}
export default {
	// account
	accout_title: '账户余额 (元)',
	unit: '元',
	account_can: '可用余额',
	
	// gadget
	gadget_title: '小工具',
	title1: '投放管理',
	title2: '我的采购',
	title3: '数据报表',
	
	// Statistics
	text1: '累计投放商机',
	text2: '待审核商机',
	text3: '投放中商机',
	
	// dataTrendKanban
	kanban_title: '数据看板',
	zongLan_title: '数据总览',
	trend_title: '数据趋势',
	
	// 数据看板
	itemList: itemList,
	itemList2: itemList2,
	flowList: flowList,
	flowList2: flowList2,
	screenData: screenData,
	leftScreenData:leftScreenData, 
	rightScreenData:rightScreenData,
	//通用数据看板
	Generaldatachart:Generaldatachart,
	// 数据表头切换
	tabList: tabList,
	// 自定义时间
	customTime: customTime
}