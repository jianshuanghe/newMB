(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["modules/InstructionsPrice/Order/Order-list/Purchase-order"],{

/***/ 907:
/*!************************************************************************************!*\
  !*** E:/慧聪/代码/hc-mb/modules/InstructionsPrice/Order/Order-list/Purchase-order.vue ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Purchase_order_vue_vue_type_template_id_0b18a7b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Purchase-order.vue?vue&type=template&id=0b18a7b2& */ 908);
/* harmony import */ var _Purchase_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Purchase-order.vue?vue&type=script&lang=js& */ 910);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Purchase_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Purchase_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Purchase_order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Purchase-order.vue?vue&type=style&index=0&lang=css& */ 912);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Purchase_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Purchase_order_vue_vue_type_template_id_0b18a7b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Purchase_order_vue_vue_type_template_id_0b18a7b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/慧聪/代码/hc-mb/modules/InstructionsPrice/Order/Order-list/Purchase-order.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 908:
/*!*******************************************************************************************************************!*\
  !*** E:/慧聪/代码/hc-mb/modules/InstructionsPrice/Order/Order-list/Purchase-order.vue?vue&type=template&id=0b18a7b2& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Purchase_order_vue_vue_type_template_id_0b18a7b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./Purchase-order.vue?vue&type=template&id=0b18a7b2& */ 909);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Purchase_order_vue_vue_type_template_id_0b18a7b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Purchase_order_vue_vue_type_template_id_0b18a7b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 909:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/慧聪/代码/hc-mb/modules/InstructionsPrice/Order/Order-list/Purchase-order.vue?vue&type=template&id=0b18a7b2& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 910:
/*!*************************************************************************************************************!*\
  !*** E:/慧聪/代码/hc-mb/modules/InstructionsPrice/Order/Order-list/Purchase-order.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Purchase_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./Purchase-order.vue?vue&type=script&lang=js& */ 911);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Purchase_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Purchase_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Purchase_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Purchase_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Purchase_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 911:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/慧聪/代码/hc-mb/modules/InstructionsPrice/Order/Order-list/Purchase-order.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

















































var _biao = _interopRequireDefault(__webpack_require__(/*! @/static/mbcImg/my/biao.png */ 220));
var _ding = _interopRequireDefault(__webpack_require__(/*! @/static/mbcImg/my/ding.png */ 221));
var _kong = _interopRequireDefault(__webpack_require__(/*! @/static/mbcImg/my/kong.png */ 904));
var _vuex = __webpack_require__(/*! vuex */ 17);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =
{
  data: function data() {
    return {
      List: ['全部', '待确认', '待发货', '待收货', '已完成', '已关闭'],
      numa: 0,
      biao: _biao.default,
      ding: _ding.default,
      kong: _kong.default,
      shu: [],
      pages: '1' };

  },
  onLoad: function onLoad() {

  },
  watch: {
    GET_MY: {
      handler: function handler(a, b) {
        // console.log(a,b,'asdasdasd')
        this.shu = a.Purchase;
      },
      deep: true } },



  created: function created() {

    this.Purchase();
  },
  mounted: function mounted() {
  },
  methods: {
    loadMore: function loadMore() {var _this = this;
      if (this.numa == 0) {
        if (uni.getStorageSync('landRegist')) {
          var landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
          console.log(landRegistLG.user.id);
          // let params = {}; // 请求总数居时 参数为空
          uni.showLoading({ // 展示loading
            title: '加载中' });

          uni.request({
            url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId=' + landRegistLG.user.id + '&page=' + this.pages, //接口地址。
            // data: params,
            method: 'GET',
            header: {
              Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
            },
            success: function success(response) {
              uni.hideLoading();
              console.log(response.data);

              _this.pages++;
              if (response.data.content.list.length == 0) {
                uni.showToast({
                  title: '没有数据啦',
                  icon: 'none',
                  duration: 1000 });

                return false;
              } else {
                response.data.content.list.map(function (item, index) {
                  console.log(item);
                  _this.shu.push(item);
                });
                console.log(_this.shu);
              }
              // this.lists = response.data.content.instKeys
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
      } else if (this.numa == 1) {
        if (uni.getStorageSync('landRegist')) {
          var _landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
          console.log(_landRegistLG.user.id);
          // let params = {}; // 请求总数居时 参数为空
          uni.showLoading({ // 展示loading
            title: '加载中' });

          uni.request({
            url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId=' + _landRegistLG.user.id + '&page=' + this.pages + '&state=0', //接口地址。
            // data: params,
            method: 'GET',
            header: {
              Authorization: "Bearer " + _landRegistLG.token //将token放到请求头中
            },
            success: function success(response) {
              uni.hideLoading();
              console.log(response.data);
              _this.pages++;
              if (response.data.content.list.length == 0) {
                uni.showToast({
                  title: '没有数据啦',
                  icon: 'none',
                  duration: 1000 });

                return false;
              } else {
                response.data.content.list.map(function (item, index) {
                  console.log(item);
                  _this.shu.push(item);
                });
                console.log(_this.shu);
              }
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
      } else if (this.numa == 2) {
        if (uni.getStorageSync('landRegist')) {
          var _landRegistLG2 = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
          console.log(_landRegistLG2.user.id);
          // let params = {}; // 请求总数居时 参数为空
          uni.showLoading({ // 展示loading
            title: '加载中' });

          uni.request({
            url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId=' + _landRegistLG2.user.id + '&page=' + this.pages + '&state=1', //接口地址。
            // data: params,
            method: 'GET',
            header: {
              Authorization: "Bearer " + _landRegistLG2.token //将token放到请求头中
            },
            success: function success(response) {
              uni.hideLoading();
              console.log(response.data);
              _this.pages++;
              if (response.data.content.list.length == 0) {
                uni.showToast({
                  title: '没有数据啦',
                  icon: 'none',
                  duration: 1000 });

                return false;
              } else {
                response.data.content.list.map(function (item, index) {
                  console.log(item);
                  _this.shu.push(item);
                });
                console.log(_this.shu);
              }
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
      } else if (this.numa == 3) {
        if (uni.getStorageSync('landRegist')) {
          var _landRegistLG3 = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
          console.log(_landRegistLG3.user.id);
          // let params = {}; // 请求总数居时 参数为空
          uni.showLoading({ // 展示loading
            title: '加载中' });

          uni.request({
            url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId=' + _landRegistLG3.user.id + '&page=' + this.pages + '&state=2', //接口地址。
            // data: params,
            method: 'GET',
            header: {
              Authorization: "Bearer " + _landRegistLG3.token //将token放到请求头中
            },
            success: function success(response) {
              uni.hideLoading();
              console.log(response.data);
              _this.pages++;
              if (response.data.content.list.length == 0) {
                uni.showToast({
                  title: '没有数据啦',
                  icon: 'none',
                  duration: 1000 });

                return false;
              } else {
                response.data.content.list.map(function (item, index) {
                  console.log(item);
                  _this.shu.push(item);
                });
                console.log(_this.shu);
              }
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
      } else if (this.numa == 4) {
        if (uni.getStorageSync('landRegist')) {
          var _landRegistLG4 = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
          console.log(_landRegistLG4.user.id);
          // let params = {}; // 请求总数居时 参数为空
          uni.showLoading({ // 展示loading
            title: '加载中' });

          uni.request({
            url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId=' + _landRegistLG4.user.id + '&page=' + this.pages + '&state=3', //接口地址。
            // data: params,
            method: 'GET',
            header: {
              Authorization: "Bearer " + _landRegistLG4.token //将token放到请求头中
            },
            success: function success(response) {
              uni.hideLoading();
              console.log(response.data);
              _this.pages++;
              if (response.data.content.list.length == 0) {
                uni.showToast({
                  title: '没有数据啦',
                  icon: 'none',
                  duration: 1000 });

                return false;
              } else {
                response.data.content.list.map(function (item, index) {
                  console.log(item);
                  _this.shu.push(item);
                });
                console.log(_this.shu);
              }
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
      } else if (this.numa == 5) {
        if (uni.getStorageSync('landRegist')) {
          var _landRegistLG5 = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
          console.log(_landRegistLG5.user.id);
          // let params = {}; // 请求总数居时 参数为空
          uni.showLoading({ // 展示loading
            title: '加载中' });

          uni.request({
            url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId=' + _landRegistLG5.user.id + '&page=' + this.pages + '&state=4', //接口地址。
            // data: params,
            method: 'GET',
            header: {
              Authorization: "Bearer " + _landRegistLG5.token //将token放到请求头中
            },
            success: function success(response) {
              uni.hideLoading();
              console.log(response.data);
              _this.pages++;
              if (response.data.content.list.length == 0) {
                uni.showToast({
                  title: '没有数据啦',
                  icon: 'none',
                  duration: 1000 });

                return false;
              } else {
                response.data.content.list.map(function (item, index) {
                  console.log(item);
                  _this.shu.push(item);
                });
                console.log(_this.shu);
              }
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
      }
    },
    gotoGood: function gotoGood(index) {var _this2 = this;
      this.numa = index;
      if (index == 0) {//全部
        this.pages = 1;
        // this.$store.commit('setPurchase', this.arr);
        if (uni.getStorageSync('landRegist')) {
          var landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
          console.log(landRegistLG.user.id);
          // let params = {}; // 请求总数居时 参数为空
          uni.showLoading({ // 展示loading
            title: '加载中' });

          uni.request({
            url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId=' + landRegistLG.user.id + '&page=' + this.pages, //接口地址。
            // data: params,
            method: 'GET',
            header: {
              Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
            },
            success: function success(response) {
              uni.hideLoading();
              console.log(response.data);
              _this2.shu = response.data.content.list;
              _this2.pages++;
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
      } else if (index == 1) {//待发货
        console.log(this.arr1);
        this.pages = 1;
        if (uni.getStorageSync('landRegist')) {
          var _landRegistLG6 = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
          console.log(_landRegistLG6.user.id);
          // let params = {}; // 请求总数居时 参数为空
          uni.showLoading({ // 展示loading
            title: '加载中' });

          uni.request({
            url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId=' + _landRegistLG6.user.id + '&page=' + this.pages + '&state=0', //接口地址。
            // data: params,
            method: 'GET',
            header: {
              Authorization: "Bearer " + _landRegistLG6.token //将token放到请求头中
            },
            success: function success(response) {
              uni.hideLoading();
              console.log(response.data);
              _this2.shu = response.data.content.list;
              _this2.pages++;
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
      } else if (index == 2) {//待收货
        this.pages = 1;
        if (uni.getStorageSync('landRegist')) {
          var _landRegistLG7 = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
          console.log(_landRegistLG7.user.id);
          // let params = {}; // 请求总数居时 参数为空
          uni.showLoading({ // 展示loading
            title: '加载中' });

          uni.request({
            url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId=760&page=' + this.pages + '&state=1', //接口地址。
            // data: params,
            method: 'GET',
            header: {
              Authorization: "Bearer " + _landRegistLG7.token //将token放到请求头中
            },
            success: function success(response) {
              uni.hideLoading();
              console.log(response.data);
              _this2.shu = response.data.content.list;
              _this2.pages++;
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
      } else if (index == 3) {//已完成
        this.pages = 1;
        if (uni.getStorageSync('landRegist')) {
          var _landRegistLG8 = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
          console.log(_landRegistLG8.user.id);
          // let params = {}; // 请求总数居时 参数为空
          uni.showLoading({ // 展示loading
            title: '加载中' });

          uni.request({
            url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId=' + _landRegistLG8.user.id + '&page=' + this.pages + '&state=2', //接口地址。
            // data: params,
            method: 'GET',
            header: {
              Authorization: "Bearer " + _landRegistLG8.token //将token放到请求头中
            },
            success: function success(response) {
              uni.hideLoading();
              console.log(response.data);
              _this2.shu = response.data.content.list;
              _this2.pages++;
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
      } else if (index == 4) {//已关闭
        this.pages = 1;
        if (uni.getStorageSync('landRegist')) {
          var _landRegistLG9 = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
          console.log(_landRegistLG9.user.id);
          // let params = {}; // 请求总数居时 参数为空
          uni.showLoading({ // 展示loading
            title: '加载中' });

          uni.request({
            url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId=' + _landRegistLG9.user.id + '&page=' + this.pages + '&state=3', //接口地址。
            // data: params,
            method: 'GET',
            header: {
              Authorization: "Bearer " + _landRegistLG9.token //将token放到请求头中
            },
            success: function success(response) {
              uni.hideLoading();
              console.log(response.data);
              _this2.shu = response.data.content.list;
              _this2.pages++;
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
      } else if (this.numa == 5) {//已关闭
        this.pages = 1;
        if (uni.getStorageSync('landRegist')) {
          var _landRegistLG10 = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
          console.log(_landRegistLG10.user.id);
          // let params = {}; // 请求总数居时 参数为空
          uni.showLoading({ // 展示loading
            title: '加载中' });

          uni.request({
            url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId=' + _landRegistLG10.user.id + '&page=' + this.pages + '&state=4', //接口地址。
            // data: params,
            method: 'GET',
            header: {
              Authorization: "Bearer " + _landRegistLG10.token //将token放到请求头中
            },
            success: function success(response) {
              uni.hideLoading();
              console.log(response.data);
              _this2.shu = response.data.content.list;
              _this2.pages++;
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
      }
    },
    gotodetails: function gotodetails(e) {
      console.log('订单详情');
      uni.navigateTo({
        url: '/modules/InstructionsPrice/Order/Order-list/Order-details/Order-details?id=' + e });

    },
    Purchase: function Purchase() {var _this3 = this; //采购订单
      if (uni.getStorageSync('landRegist')) {
        var landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
        console.log(landRegistLG.user.id);
        // let params = {}; // 请求总数居时 参数为空
        uni.showLoading({ // 展示loading
          title: '加载中' });

        uni.request({
          url: this.api2 + '/rest-rp/order/selectMyToCOrder?userId=' + landRegistLG.user.id + '&page=' + this.pages, //接口地址。
          // data: params,
          method: 'GET',
          header: {
            Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
          },
          success: function success(response) {
            uni.hideLoading();
            console.log(response.data);
            _this3.shu = response.data.content.list;
            _this3.pages++;
            // this.lists = response.data.content.instKeys
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
    } },

  computed: _objectSpread({},
  (0, _vuex.mapGetters)(['GET_HOME', 'QUICKNAVCO', 'GET_MY'])) };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 912:
/*!*********************************************************************************************************************!*\
  !*** E:/慧聪/代码/hc-mb/modules/InstructionsPrice/Order/Order-list/Purchase-order.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Purchase_order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./Purchase-order.vue?vue&type=style&index=0&lang=css& */ 913);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Purchase_order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Purchase_order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Purchase_order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Purchase_order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Purchase_order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 913:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/慧聪/代码/hc-mb/modules/InstructionsPrice/Order/Order-list/Purchase-order.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/modules/InstructionsPrice/Order/Order-list/Purchase-order.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'modules/InstructionsPrice/Order/Order-list/Purchase-order-create-component',
    {
        'modules/InstructionsPrice/Order/Order-list/Purchase-order-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(907))
        })
    },
    [['modules/InstructionsPrice/Order/Order-list/Purchase-order-create-component']]
]);                
