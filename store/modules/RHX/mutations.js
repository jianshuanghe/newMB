/**
 * Created by 菅双��on 2019/07/25.
 */

const mutations = {
	// ---------------------------选择模版(1/4)------------------------------------------
  setSelectTemplateIndexRHX (state, info) { // tab切换
    console.log(info, 'setSelectTemplateIndexRHX');
    state.selectTemplateRHX.tabItems = info;
  },
  setSTemTotalRHX (state, info) { // 全部
    console.log(info, 'setSTemTotalRHX');
    state.selectTemplateRHX.total = info;
  },
  setSTemProductRHX (state, info) { // 产品
    console.log(info, 'setSTemProductRHX');
    state.selectTemplateRHX.product = info;
  },
  setSTemMadeRHX (state, info) { // 定制
    console.log(info, 'setSTemMadeRHX');
    state.selectTemplateRHX.made = info;
  },
  setSTemInforRHX (state, info) { // 资讯
    console.log(info, 'setSTemInforRHX');
    state.selectTemplateRHX.infor = info;
  },
  //---------------------------售后网点------------------------------
  setServiceOutletCount (state,info){//网点数量
	  console.log(info,'setServiceOutletCount');
	  state.CustomerServiceOutlets.count = info;
  },
  setServiceOutletCity (state,info){//网点列表
	  console.log(info,'setServiceOutletCity');
	  state.CustomerServiceOutlets.cityList = info;
  }
};
export default mutations;
