// 左侧模块介绍
var leftText = {
	pinPai: '品牌名称',
	neiRong: '推广内容',
	leiXIng: '主体类型',
	shengFen: '主体身份',
	zhiZhao: '营业执照',
	daiMa: '统一社会信用代码',
	youXiaoQi: '证件有效期',
	zhuCe: '注册地',
	shengFenZ: '法人身份证',
	ziZhi: '行业所需资质',
	buChong: '资质材料补充'
};
// 默认提示
var defaultText = {
	defaul_input: '请输入',
	defaul_picker: '请选择',
	defaul_textArea: '如：计算机升级咨询服务',
	defaul_imgPutIn: '点击上传',
	defaul_zhiZhao: '请上传您企业营业执照，小于2M',
	defaul_shengFenZ: '请上传法人身份证的正反面照，每张小于2M',
	defaul_ziZhi: '请上传行业资质图片，最多5张，每张小于2M',
	defaul_buChong: '请上传其他必要的资质图片，最多3张，每张小于2M'
}
	
var authType = [
  {
    code: '0',
    text: '企业'
  }, {
    code: '1',
    text: '个体工商户'
  }
];
var qualificationType = [
  {
    code: '0',
    text: '品牌商'
  }, 
  {
    code: '1',
    text: '经销商'
  },
  {
    code: '2',
    text: '厂家'
  },
  {
    code: '3',
    text: '其它'
  }
];

export default {
	leftText,
	defaultText,
	authType,
	qualificationType
}