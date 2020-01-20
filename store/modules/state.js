/**
 * Created by 菅双�on 2019/07/25.
 */
import stateCOMMON from "./COMMON/state.js"
import stateRHX from "./RHX/state.js";
import stateMBBO from "./MBBO/state.js"
console.log(stateRHX, stateMBBO)
const state = Object.assign(stateCOMMON, stateRHX, stateMBBO)
export default state;
