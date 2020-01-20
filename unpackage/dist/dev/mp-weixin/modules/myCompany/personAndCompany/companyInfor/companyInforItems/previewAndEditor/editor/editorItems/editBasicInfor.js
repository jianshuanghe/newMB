(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/editBasicInfor"],{

/***/ 419:
/*!**************************************************************************************************************************************************************************************************!*\
  !*** E:/慧聪/代码/SVN/慧聪陌拜svn12.13/12.13.晚上/main.js?{"page":"modules%2FmyCompany%2FpersonAndCompany%2FcompanyInfor%2FcompanyInforItems%2FpreviewAndEditor%2Feditor%2FeditorItems%2FeditBasicInfor"} ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _editBasicInfor = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/editBasicInfor.vue */ 420));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_editBasicInfor.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 420:
/*!*******************************************************************************************************************************************************************!*\
  !*** E:/慧聪/代码/SVN/慧聪陌拜svn12.13/12.13.晚上/modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/editBasicInfor.vue ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editBasicInfor_vue_vue_type_template_id_44c11be8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editBasicInfor.vue?vue&type=template&id=44c11be8&scoped=true& */ 421);
/* harmony import */ var _editBasicInfor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editBasicInfor.vue?vue&type=script&lang=js& */ 423);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _editBasicInfor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _editBasicInfor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _editBasicInfor_vue_vue_type_style_index_0_id_44c11be8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editBasicInfor.vue?vue&type=style&index=0&id=44c11be8&scoped=true&lang=css& */ 426);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _editBasicInfor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editBasicInfor_vue_vue_type_template_id_44c11be8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editBasicInfor_vue_vue_type_template_id_44c11be8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "44c11be8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/慧聪/代码/SVN/慧聪陌拜svn12.13/12.13.晚上/modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/editBasicInfor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 421:
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** E:/慧聪/代码/SVN/慧聪陌拜svn12.13/12.13.晚上/modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/editBasicInfor.vue?vue&type=template&id=44c11be8&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editBasicInfor_vue_vue_type_template_id_44c11be8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./editBasicInfor.vue?vue&type=template&id=44c11be8&scoped=true& */ 422);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editBasicInfor_vue_vue_type_template_id_44c11be8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editBasicInfor_vue_vue_type_template_id_44c11be8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 422:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/慧聪/代码/SVN/慧聪陌拜svn12.13/12.13.晚上/modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/editBasicInfor.vue?vue&type=template&id=44c11be8&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 423:
/*!********************************************************************************************************************************************************************************************!*\
  !*** E:/慧聪/代码/SVN/慧聪陌拜svn12.13/12.13.晚上/modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/editBasicInfor.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editBasicInfor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./editBasicInfor.vue?vue&type=script&lang=js& */ 424);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editBasicInfor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editBasicInfor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editBasicInfor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editBasicInfor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editBasicInfor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 424:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/慧聪/代码/SVN/慧聪陌拜svn12.13/12.13.晚上/modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/editBasicInfor.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;







































































































































































































































var _touxiang = _interopRequireDefault(__webpack_require__(/*! @/static/mbcImg/images/business/home/extendManageList/touxiang.png */ 425));
var _lineRightArrow = _interopRequireDefault(__webpack_require__(/*! @/static/mbcImg/images/common/line-right-arrow.png */ 407));
var _xing = _interopRequireDefault(__webpack_require__(/*! @/static/mbcImg/images/common/xing.png */ 416));





var _vuex = __webpack_require__(/*! vuex */ 17);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var industry = function industry() {return __webpack_require__.e(/*! import() | modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/industryAddress/industry */ "modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/industryAddress/industry").then(__webpack_require__.bind(null, /*! ./industryAddress/industry */ 1061));};var wInput = function wInput() {return __webpack_require__.e(/*! import() | components/common/watch-login/watch-input1 */ "components/common/watch-login/watch-input1").then(__webpack_require__.bind(null, /*! @/components/common/watch-login/watch-input1.vue */ 1054));};var imageUploadOne = function imageUploadOne() {return __webpack_require__.e(/*! import() | components/common/imageUpload/imageUploadOne */ "components/common/imageUpload/imageUploadOne").then(__webpack_require__.bind(null, /*! @/components/common/imageUpload/imageUploadOne.vue */ 988));};var quickBtn = function quickBtn() {return Promise.all(/*! import() | components/mbbo/quickBtn/quickBtn */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/mbbo/quickBtn/quickBtn")]).then(__webpack_require__.bind(null, /*! @/components/mbbo/quickBtn/quickBtn.vue */ 873));};var navigation = function navigation() {return Promise.all(/*! import() | components/mbbo/navigation/navigation */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/mbbo/navigation/navigation")]).then(__webpack_require__.bind(null, /*! @/components/mbbo/navigation/navigation.vue */ 683));};var _default =
{
  name: 'editBasicInfor',
  components: {
    wInput: wInput,
    imageUploadOne: imageUploadOne,
    quickBtn: quickBtn,
    navigation: navigation,
    industry: industry },

  data: function data() {
    return {
      text: '',
      touxiang: '',
      touxiang1: _touxiang.default,
      lineRightArrow: _lineRightArrow.default,
      xing: _xing.default,
      logo: '',
      logos: '',
      logoo: '',
      logoos: '',
      placker: '',
      hangye: 0,
      industryss: '',
      timeOutEvent: 0,
      previewImgShow: false, // 预览组件显示，默认为false
      ImgSrc: '', // 预览图片路径参数
      action: 'http://img01.iambuyer.com/imgup/upLoad/fileUpload',
      files: [],
      files2: [],
      industryShow: false,
      addressDetail: '',
      idStringAddress: '',
      addrPcode: '', // 省
      addrCcode: '', // 市
      addrAcode: '', // 区
      industryDataCkeck: {
        // 所属行业
        compTypePcodeStr: '',
        compTypePcode: 0 },

      listData: {
        imageData: [],
        serverUrl: 'https://img01.iambuyer.com/imgup/upLoad/fileUpload' // 图片上传地址
      },
      UserData: {
        passWord: null,
        compLogo: 'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKB0hUYibokE4jkgia3wClLMz8l20TYbdX0uibziavftrg0ylDne3W9N7mIQI7SRtibpmic5p0KP1WK7ONw/132',
        wechatQrImg: 'https://img04.iambuyer.com/imgup/upload/images/2019/07/15/PM1sECJS2n1G7n5sCDwcQWlB8kNlPrHoEYnQPJ79b4I7LpNNxN0v9Eb46SDBm4fk.jpeg',
        companyName: '菅双鹤',
        nickname: '菅双鹤',
        companyIntro: '',
        addressDetail: '肉丸无语',
        contactTelphone: '13146296160',
        contactEmail: '274088960@qq.com',
        contactMan: '偶遇语音',
        userPhone: '13146296160',
        userEmail: '11@qq.com',
        money: 2718,
        beyondUser: '91.00%',
        wxId: '12555',
        content: '购物与物无忤',
        headImg: 'https://img04.iambuyer.com/imgup/upload/images/2019/06/18/M2Mhcjjc2Bu5b6jatbBmSPsyLgfdTRBTuT88rYVpgQmcsOAOjxlFNfgZ20B5FbyUoXe6nT.jpeg',
        toBCount: 9,
        toCCount: 11,
        companyAccountVo: {
          money: 0,
          frozenMoney: null,
          consMoney: 0,
          putInCount: 0,
          authState: '2',
          toDayRechMoney: null,
          yesterdayConsMoney: null },

        compTypePcode: 120,
        compTypeCode: 0,
        compTypePcodeStr: '计算机服务和软件业',
        compTypeCodeStr: null,
        provinceCode: '110000',
        cityCode: '110100',
        areaCode: '110101',
        provinceCodeStr: '北京',
        cityCodeStr: '北京市',
        areaCodeStr: '东城区',
        vipState: '1',
        cydVipLv: null },

      imgData: {} };

  },
  created: function created() {
  },
  computed: _objectSpread({},
  (0, _vuex.mapGetters)(['PERSONCENTER', 'IMGDATA', 'QUICKNAVCO', 'GET_MY'])),

  watch: {
    PERSONCENTER: {
      handler: function handler(a, b) {
        this.UserData = a.basicInforEdit; // 基本信息
        this.addressDetail = a.info.idStringAddress;
        this.industryShow = a.industry.industryShow;
        this.industryDataCkeck = a.industry.industryCheck; // 所属会员
        this.addrPcode = a.info.addrPcode; // 省
        this.addrCcode = a.info.addrCcode; // 市
        this.addrAcode = a.info.addrAcode; // 区
      },

      deep: true },

    GET_MY: {
      handler: function handler(a, b) {
        console.log(a, b, 'header----list');
        // console.log(a.GET_MY.Effective)
        this.Effec = a.Effective;
        if (a.clickCity.idString !== undefined) {
          this.placker = a.clickCity.idString;
          this.regPcode = a.clickCity.addrPcode;
          this.regCcode = a.clickCity.addrCcode;
          this.regAcode = a.clickCity.addrTcode;
          this.regAddr = a.clickCity.idaddress;
        }

        // this.authQualTypeText=a.clickCity.idString
      },
      deep: true } },


  mounted: function mounted() {},
  methods: _objectSpread({},
  (0, _vuex.mapMutations)({
    setAddShow: 'setAddShow',
    setIdStringAddress: 'setIdStringAddress',
    setIdString: 'setIdString',
    setAddrPcode: 'setAddrPcode',
    setAddrCcode: 'setAddrCcode',
    setAddrAcode: 'setAddrAcode',
    setIdAddress: 'setIdAddress',
    setLoadingShow: 'setLoadingShow',
    setLoadingText: 'setLoadingText',
    setIndustryShow: 'setIndustryShow',
    setIndustryData: 'setIndustryData',
    setIndustryCheck: 'setIndustryCheck',
    setBasicInforEdit: 'setBasicInforEdit',
    setCompLogo: 'setCompLogo',
    setWechatQrImg: 'setWechatQrImg' }), {

    CloseMask: function CloseMask(_CloseMask) {
      this.hangye = _CloseMask;
    },
    clickConfirm: function clickConfirm(_clickConfirm) {
      console.log(_clickConfirm);
      this.industryss = _clickConfirm.name;
      this.id = _clickConfirm.id;
    },
    area: function area() {
      console.log('to地址选择');
      uni.navigateTo({
        url: '/modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/industryAddress/address' });

    },
    clickIndustry: function clickIndustry() {
      console.log('触发所属行业按钮');
      this.hangye = 1;
      console.log(this.hangye);
    },
    clickSaveBasicInfor: function clickSaveBasicInfor() {var _this = this;
      if (this.logo == '' && this.GET_MY.headers.compLogo == '') {
        uni.showToast({
          title: '请选择企业logo',
          icon: 'none',
          duration: 1000 });

        return false;
      } else if (this.GET_MY.headers.companyName == '') {
        uni.showToast({
          title: '请填写企业名称',
          icon: 'none',
          duration: 1000 });

        return false;
      } else if (this.GET_MY.headers.compTypePcodeStr == '' && this.industryss == '') {
        uni.showToast({
          title: '请选择所属行业',
          icon: 'none',
          duration: 1000 });

        return false;
      } else if (this.GET_MY.headers.addrStr == '' && this.placker == '') {
        uni.showToast({
          title: '请选择联系地址',
          icon: 'none',
          duration: 1000 });

        return false;
      } else if (this.GET_MY.headers.contactMan == '') {
        uni.showToast({
          title: '请输入联系人',
          icon: 'none',
          duration: 1000 });

        return false;
      } else if (this.GET_MY.headers.contactTelphone == '') {
        uni.showToast({
          title: '请输入联系电话',
          icon: 'none',
          duration: 1000 });

        return false;
      } else if (this.GET_MY.headers.contactEmail !== '') {
        if (!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(this.GET_MY.headers.contactEmail)) {
          uni.showToast({
            title: '邮箱格式有误',
            icon: 'none',
            duration: 1000 });

          return false;
        }
      }
      if (uni.getStorageSync('landRegist')) {
        var landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
        console.log(landRegistLG.user.id);
        var params = {
          compLogo: this.logo,
          companyName: this.GET_MY.headers.companyName,
          companyIntro: this.GET_MY.headers.companyIntro,
          compTypePcode: this.id,
          provinceCode: this.regPcode,
          cityCode: this.regCcode,
          areaCode: this.regAcode,
          addressDetail: this.regAddr,
          wechatQrImg: this.logoo,
          contactTelphone: this.GET_MY.headers.contactTelphone,
          contactEmail: this.GET_MY.headers.contactEmail,
          contactMan: this.GET_MY.headers.contactMan };
        // 请求总数居时 参数为空
        uni.showLoading({ // 展示loading
          title: '加载中' });

        uni.request({
          url: this.api2 + '/rest-rp/user/' + landRegistLG.user.id, //接口地址。
          data: params,
          method: 'POST',
          header: {
            Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
          },
          success: function success(response) {
            uni.hideLoading();
            console.log(response.data);
            if (_this.logo) {
              _this.GET_MY.headers.compLogo = _this.logos;
              console.log(1);
            } else {
              _this.GET_MY.headers.compLogo = _this.GET_MY.headers.compLogo;
              console.log(2);
            }
            if (_this.industryss !== '') {
              _this.GET_MY.headers.compTypePcodeStr = _this.industryss;
            }
            if (_this.placker !== '') {
              _this.GET_MY.headers.addressDetail = _this.regAddr;
            }
            if (_this.logoo) {
              _this.GET_MY.headers.wechatQrImg = _this.logoos;
            } else {
              _this.GET_MY.headers.wechatQrImg = _this.GET_MY.headers.wechatQrImg;
            }
            _this.$store.commit('setMy', _this.GET_MY.headers);
            uni.navigateBack({});
          },
          fail: function fail(error) {
            uni.hideLoading(); // 隐藏 loading
            uni.showToast({
              title: '网络繁忙，请稍后',
              icon: 'none',
              duration: 1000 });

            console.log(error, '网络繁忙，请稍后');
          } });

      }


    },
    //企业logo
    deleteImage: function deleteImage(e) {
      console.log(e, '删除图片');
      this.logo = ''; // 清空数据
    },
    addImage: function addImage(e) {
      console.log(e, '添加图片');
      if (e.allImages) {// 上传成功
        this.logo = e.allImages[0].imgName;
        this.logos = e.allImages[0].imgUrl;
        console.log(this.logo);
      }
    },
    //二维码
    deleteImages: function deleteImages(e) {
      console.log(e, '删除图片');
      this.logoo = ''; // 清空数据
    },
    addImages: function addImages(e) {
      console.log(e, '添加图片');
      if (e.allImages) {// 上传成功
        this.logoo = e.allImages[0].imgName;
        this.logoos = e.allImages[0].imgUrl;
        console.log(this.logo);
      }
    } }) };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 426:
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** E:/慧聪/代码/SVN/慧聪陌拜svn12.13/12.13.晚上/modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/editBasicInfor.vue?vue&type=style&index=0&id=44c11be8&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editBasicInfor_vue_vue_type_style_index_0_id_44c11be8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./editBasicInfor.vue?vue&type=style&index=0&id=44c11be8&scoped=true&lang=css& */ 427);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editBasicInfor_vue_vue_type_style_index_0_id_44c11be8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editBasicInfor_vue_vue_type_style_index_0_id_44c11be8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editBasicInfor_vue_vue_type_style_index_0_id_44c11be8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editBasicInfor_vue_vue_type_style_index_0_id_44c11be8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editBasicInfor_vue_vue_type_style_index_0_id_44c11be8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 427:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/慧聪/代码/SVN/慧聪陌拜svn12.13/12.13.晚上/modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/editBasicInfor.vue?vue&type=style&index=0&id=44c11be8&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[419,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../../../../../.sourcemap/mp-weixin/modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/editBasicInfor.js.map