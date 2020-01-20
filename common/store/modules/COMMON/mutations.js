/**
 * Created by 菅双��on 2019/07/25.
 */

const mutations = {
  SetEmptyCO (state, info) {
    console.log(info, 'SetEmptyCO');
    state.emptyCO = info;
  },
  setQuickNavCO (state, info) {
    console.log(info, 'setQuickNavCO');
    state.quickNavCO = info;
  },
};
export default mutations;
