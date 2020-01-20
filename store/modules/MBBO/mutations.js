/**
 * Created by 菅双��on 2019/07/25.
 */

const mutations = {
  setEmptyShow (state, info) {
    console.log(info, 'setEmptyShow');
    state.empty.emptyShow = info;
  },
  setAddressBsShow (state, info) {
    console.log(info, 'setAddressBsShow');
    state.addressBs = info;
  },
  setHome (state, info) {
    console.log(info, 'setHome');
    state.home.tabItems = info;
  },
  setmessage (state, info) {
    console.log(info, 'setmessage');
    state.find.message = info;
  },
  setPublishShow (state, info) {
    console.log(info, 'setPublishShow');
    state.home.publishShow = info;
  },
  setLiuLiangOrPutInTitle (state, info) {
    console.log(info, 'setLiuLiangOrPutInTitle');
    state.aLittle.liuLiangOrPutInTitle = info;
  },
  setLiuLiangOrPutInTitle2 (state, info) {
    console.log(info, 'setLiuLiangOrPutInTitle2');
    state.aLittle.liuLiangOrPutInTitle2 = info;
  },
  setPutinname (state, info) {
    console.log(info, 'setPutinname');
    state.aLittle.Putinname = info;
  },
  setCustomTime (state, info) {
    console.log(info, 'setCustomTime');
    state.aLittle.customTime = info;
  },
  setCustomTime2 (state, info) {
    console.log(info, 'setCustomTime2');
    state.aLittle.customTime2 = info;
  },
  setRefresh (state, info) {
    console.log(info, 'setRefresh');
    state.my.Refresh = info;
  },
  setBusinessPutInShow (state, info) {
    console.log(info, 'setBusinessPutInShow');
    state.aLittle.businessPutIn.show = info;
  },
  setPersonTitle (state, info) {
    console.log(info, 'setPersonTitle');
    state.my.PersonTitle = info;
  },
  setputInstate (state, info) {
    console.log(info, 'setputInstate');
    state.aLittle.putInstate = info;
  },
  //我的
  setMy(state, info){
	console.log(info,'setmy');
	state.my.headers=info;
  },
  //消息
  setnews(state, info){
  	console.log(info,'setnews');
  	state.news.Message=info;
  },
   //消息系统通知
  setsystem(state, info){
  	console.log(info,'setsystem');
  	state.news.system=info;
  },
  //消息未读数
  setnum(state, info){
  	console.log(info,'setnum');
  	state.news.num=info;
  },
  //消息 已发留言
  setAlr(state, info){
  	console.log(info,'setAlr');
  	state.news.Alr=info;
  },
  //我的说明书列表 全部
  setproduct(state, info){
  	console.log(info,'setproduct');
  	state.my.product=info;
  },
  //我的说明书列表 产品
  setchan(state, info){
  	console.log(info,'setchan');
  	state.my.chan=info;
  },
  //我的说明书列表 定制
  setding(state, info){
  	console.log(info,'setding');
  	state.my.ding=info;
  },
  //我的说明书列表 资讯
  setzi(state, info){
  	console.log(info,'setzi');
  	state.my.zi=info;
  },
  //我的订单 供应订单
  setSupply(state, info){
  	console.log(info,'setSupply');
  	state.my.Supply=info;
  },
  //我的订单 采购订单
  setPurchase(state, info){
  	console.log(info,'setPurchase');
  	state.my.Purchase=info;
  },
  //我的说明书详情
  setdetailed(state, info){
  	console.log(info,'setdetailed');
  	state.my.detailed=info;
  },
  //我的采购订单 列表 全部
  setPurchaseA(state, info){
  	console.log(info,'setPurchaseA');
  	state.my.PurchaseA=info;
  },
  //我的采购订单 列表 待发布
  setPurchaseB(state, info){
  	console.log(info,'setPurchaseB');
  	state.my.PurchaseB=info;
  },
  //我的采购订单 列表 采购中
  setPurchaseC(state, info){
  	console.log(info,'setPurchaseC');
  	state.my.PurchaseC=info;
  },
  //我的采购订单 列表 已停止
  setPurchaseD(state, info){
  	console.log(info,'setPurchaseD');
  	state.my.PurchaseD=info;
  },
  //我的采购订单 列表 已完成
  setPurchaseE(state, info){
  	console.log(info,'setPurchaseE');
  	state.my.PurchaseE=info;
  },
  //我的采购订单 列表 已下架
  setPurchaseF(state, info){
  	console.log(info,'setPurchaseF');
  	state.my.PurchaseF=info;
  },
  //公司认证 地理位置
  setclickCity(state, info){
  	console.log(info,'setclickCity');
  	state.my.clickCity=info;
  },
  //公司认证 证件有效期
  setEffective(state, info){
  	console.log(info,'setEffective');
  	state.my.Effective=info;
  },
  //公司认证 认证详情
  setAuthen(state, info){
  	console.log(info,'setAuthen');
  	state.my.Authen=info;
  },
  //我的设置 地址管理
  setaddress(state, info){
  	console.log(info,'setaddress');
  	state.my.address=info;
  }, 
  //我的设置 所在地区
  setress(state, info){
  	console.log(info,'setress');
  	state.my.ress=info;
  },
  //首页 投放商机列表
  setputInBusinessData(state, info){
  	console.log(info,'setputInBusinessData');
  	state.aLittle.putInBusinessData=info;
  },
  setTempletType (state, info) { // 采购模板
    console.log(info, 'setTempletType');
    state.publish.publishPurchase.templetType = info;
  },
  setMoreSet (state, info) { // 运费及更多设置 默认不显示
    console.log(info, 'setMoreSet');
    state.publish.publishPurchase.moreSet = info;
  },
  setPreviceCaiGou (state, info) { // 判断预览状态， 默认是编辑状态
    console.log(info, 'setPreviceCaiGou');
    state.publish.publishPurchase.previceCaiGou = info;
  },
  setCaiGouList (state, info) {  // 采购列表数据
    console.log(info, 'setCaiGouList');
    state.publish.publishPurchase.caiGouList = info;
  },
  setImgList (state, info) {  //附件列表
    console.log(info, 'setImgList');
    state.publish.publishPurchase.imgList = info;
  },
};
export default mutations;
