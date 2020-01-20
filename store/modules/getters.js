/**
 * Created by 菅双��on 2019/07/25.
 */
import gettersCOMMON from "./COMMON/getters.js";
import gettersRHX from "./RHX/getters.js";
import gettersMBBO from "./MBBO/getters.js"
const getters = Object.assign(gettersCOMMON, gettersRHX, gettersMBBO)
export default getters;
