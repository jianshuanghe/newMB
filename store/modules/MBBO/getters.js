/**
 * Created by 菅双鹤 on 2019/07/25.
 */
const getters = {
	// 空状态
	EMPTY: state => state.empty,
	// 地址模块
	ADDRESSBS: state => state.addressBs,
	// home 主页数据
	GET_HOME: state => state.home,
	// 陌拜一下
	GET_ALITTLE: state => state.aLittle,
	// 我的
	GET_MY:state=>state.my,
	//发现
	GET_FIND:state=>state.find,
	//消息
	GET_NEWS:state=>state.news,
	// 发布
	GET_PUBLISH: state => state.publish,
	
};
export default getters;
