/**
 * Created by 菅双��on 2019/07/25.
 */
import mutationsCOMMON from "./COMMON/mutations.js";
import mutationsRHX from "./RHX/mutations.js";
import mutationsMBBO from "./MBBO/mutations.js"
const mutations = Object.assign(mutationsCOMMON, mutationsRHX, mutationsMBBO)
export default mutations;
