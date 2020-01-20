(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/common/RHX/dragSorts/dragSorts"],{

/***/ 2218:
/*!********************************************************************!*\
  !*** E:/慧聪/代码/hc-mb/components/common/RHX/dragSorts/dragSorts.vue ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dragSorts_vue_vue_type_template_id_a52bdefc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragSorts.vue?vue&type=template&id=a52bdefc&scoped=true& */ 2219);
/* harmony import */ var _dragSorts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dragSorts.vue?vue&type=script&lang=js& */ 2221);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _dragSorts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _dragSorts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _dragSorts_vue_vue_type_style_index_0_id_a52bdefc_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dragSorts.vue?vue&type=style&index=0&id=a52bdefc&lang=less&scoped=true& */ 2223);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _dragSorts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dragSorts_vue_vue_type_template_id_a52bdefc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dragSorts_vue_vue_type_template_id_a52bdefc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a52bdefc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/慧聪/代码/hc-mb/components/common/RHX/dragSorts/dragSorts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 2219:
/*!***************************************************************************************************************!*\
  !*** E:/慧聪/代码/hc-mb/components/common/RHX/dragSorts/dragSorts.vue?vue&type=template&id=a52bdefc&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dragSorts_vue_vue_type_template_id_a52bdefc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./dragSorts.vue?vue&type=template&id=a52bdefc&scoped=true& */ 2220);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dragSorts_vue_vue_type_template_id_a52bdefc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dragSorts_vue_vue_type_template_id_a52bdefc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 2220:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/慧聪/代码/hc-mb/components/common/RHX/dragSorts/dragSorts.vue?vue&type=template&id=a52bdefc&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 2221:
/*!*********************************************************************************************!*\
  !*** E:/慧聪/代码/hc-mb/components/common/RHX/dragSorts/dragSorts.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dragSorts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./dragSorts.vue?vue&type=script&lang=js& */ 2222);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dragSorts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dragSorts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dragSorts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dragSorts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dragSorts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 2222:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/慧聪/代码/hc-mb/components/common/RHX/dragSorts/dragSorts.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





































































var _delete = _interopRequireDefault(__webpack_require__(/*! @/static/mbcImg/publish/purchase/delete.png */ 798));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var moduleIconLibrary = function moduleIconLibrary() {return Promise.all(/*! import() | components/common/RHX/moduleIconLibrary/moduleIconLibrary */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/common/RHX/moduleIconLibrary/moduleIconLibrary")]).then(__webpack_require__.bind(null, /*! @/components/common/RHX/moduleIconLibrary/moduleIconLibrary */ 2389));};var moduleItems = function moduleItems() {return Promise.all(/*! import() | components/common/RHX/moduleItems/moduleItems */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/common/RHX/moduleItems/moduleItems")]).then(__webpack_require__.bind(null, /*! @/components/common/RHX/moduleItems/moduleItems */ 2397));};var _default =
{
  name: 'drag-sort',
  mixins: [],
  components: {
    moduleIconLibrary: moduleIconLibrary,
    moduleItems: moduleItems },

  data: function data() {
    return {
      dragSortRefresh: true,
      iconLibrary: -1,
      iconLibraryShow: false, // 判断当前组件是否有icon库展示
      dataLists: this.dataList,
      isSelect: -1, // 用户选择的项
      iconSrc: _delete.default,
      old: { // 用来记录用户上次行为
        tapIndex: -1 },

      disable: this.disabled,
      styleObject: {
        color: 'red',
        fontSize: '13px',
        borderTop: '0.5px solid #E2E2E2' },

      style: {
        background: 'red' },

      direction: 'all',
      windowWidth: 100, //屏幕宽度
      height: 60, // 高度
      currentList: [],
      active: -1, // 当前激活的item
      index: 0, // 当前激活的item的原index
      topY: 0, // 距离顶部的距离
      topX: 0, // 距离左侧偏移位置
      deviationX: 0,
      deviationY: 0 // 偏移量
    };
  },
  computed: {
    boxHeight: function boxHeight() {
      if (this.list.length !== 0) {
        if (this.iconLibraryShow === true) {
          return Math.ceil(Number(this.list.length) / 1) * this.height + 114 + 'px';
        } else {
          return Math.ceil(Number(this.list.length) / 1) * this.height + 'px';
        }
      } else {
        return 0;
      }
    } },

  props: [
  'disabled',
  'selIconList',
  'list',
  'boxStyle',
  'pickerCancel'],
  watch: {
    list: {
      handler: function handler() {
        // debugger;
        this.onUpdateCurrentList();
      },
      deep: true },

    disabled: {
      handler: function handler(a, b) {
        console.log(a, b);
        this.disable = a;
      },
      deep: true },

    pickerCancel: {
      handler: function handler(a, b) {
        console.log(a, b, '-----------pickerCancel--------');
        if (a === false) {
          this.currentList.map(function (item, index) {
            item.isShow = 1;
          });
        }
      },
      deep: true } },


  created: function created() {
    var res = uni.getSystemInfoSync();
    this.windowWidth = res.windowWidth;
    this.onUpdateCurrentList();
  },
  mounted: function mounted() {},
  updated: function updated() {},
  filters: {},
  beforeDestroy: function beforeDestroy() {
    console.log('页面销毁之前清除缓存数据--------------currentList');
    // uni.removeStorageSync('currentList');
  },
  methods: {
    onUpdateCurrentList: function onUpdateCurrentList() {var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.list;
      var arr = [];
      for (var key in list) {
        // console.log(key)
        var height = Math.ceil((Number(key) + 1) / 1) - 1;
        var x = 0;
        // if (key <= 3) {
        // 	x = key * this.windowWidth * 0.24 + this.windowWidth * 0.04 || this.windowWidth * 0.04;
        // } else {
        // 	if ((Number(key) + 1) % 4 === 0) {
        // 		x = 3 * this.windowWidth * 0.24 + this.windowWidth * 0.04 || this.windowWidth * 0.04;
        // 	} else {
        // 		x = (((Number(key) + 1) % 4) - 1) * this.windowWidth * 0.24 + this.windowWidth * 0.04 || this.windowWidth * 0.04;
        // 	}
        // }
        arr.push(_objectSpread({},
        list[key], {
          isShow: 1,
          index: Number(key),
          SortNumber: Number(key),
          y: height * this.height,
          x: x,
          animation: true }));

      }
      this.currentList = arr;
      // 向前台更新数据
      var data = JSON.parse(JSON.stringify(this.currentList));
      data.sort(function (a, b) {return a.SortNumber - b.SortNumber;});
      uni.setStorageSync('currentList', data);
    },
    // 根据排序进行重新计算位置
    moveUpdateCurrentList: function moveUpdateCurrentList(index) {
      for (var i in this.currentList) {
        var key = void 0;
        if (this.currentList[i].SortNumber || this.currentList[i].SortNumber === 0) {
          key = this.currentList[i].SortNumber;
        } else {
          key = Number(i);
        }
        // console.log(key)
        var temobj = _objectSpread({}, this.currentList[i]);
        // debugger
        this.currentList[i].y = (Math.ceil((Number(key) + 1) / 1) - 1) * this.height;
        // if (index == key) {
        // 	continue;
        // } else {
        // 	if (key <= 3) {
        // 		this.currentList[i].x = key * this.windowWidth * 0.24 + this.windowWidth * 0.04 || this.windowWidth * 0.04;
        // 	} else {
        // 		if ((Number(key) + 1) % 4 === 0) {
        // 			this.currentList[i].x = 3 * this.windowWidth * 0.24 + this.windowWidth * 0.04 || this.windowWidth * 0.04;
        // 		} else {
        // 			this.currentList[i].x = (((Number(key) + 1) % 4) - 1) * this.windowWidth * 0.24 + this.windowWidth * 0.04 || this.windowWidth * 0.04;
        // 		}
        // 	}
        // }
      };
    },
    touchstart: function touchstart(e) {var _this = this;
      // 计算 x y 轴点击位置
      var query = uni.createSelectorQuery().in(this);
      query.select('#drag').boundingClientRect();
      query.exec(function (res) {
        _this.topY = res[0].top;
        // this.topX = res[0].left;
        var touchY = e.mp.touches[0].clientY - res[0].top;
        // let touchX = e.mp.touches[0].clientX - res[0].left;
        _this.deviationY = touchY % _this.height;
        // this.deviationX = touchX % (this.windowWidth * 0.2);
        _this.active = Number(e.currentTarget.dataset.index);
        _this.index = Number(e.currentTarget.dataset.index);
      });
    },
    touchmove: function touchmove(e) {var _this2 = this;
      this.iconLibrary = -1;
      this.iconLibraryShow = false; // 判断当前组件是否有icon库展示
      if (this.active < 0) return;
      var temY = e.mp.touches[0].clientY - this.topY;
      // let temX = e.mp.touches[0].clientX - this.topX;
      var touchY = temY - 0;
      // let touchX = temX - this.windowWidth * 0.1;
      this.currentList[this.active].y = touchY;
      // this.currentList[this.active].x = touchX;
      this.currentList[this.active].animation = false;
      this.currentList.every(function (res, index) {
        // let absX = Math.abs(touchX - res.x);
        var absY = Math.abs(touchY - res.y);
        // 设置元素定点距离多少进行重排
        if (absY > 0 && absY <= 10 && _this2.active != index) {
          // debugger
          var temNumber = _this2.currentList[index].SortNumber;
          _this2.currentList.every(function (_res, _index) {
            // 判断从大像小移还是从小向大移
            if (_this2.currentList[_this2.active].SortNumber < _this2.currentList[index].SortNumber) {
              // 移动元素比目标元素所在位置小，之间元素排序--
              if (
              _this2.currentList[_index].SortNumber > _this2.currentList[_this2.active].SortNumber &&
              _this2.currentList[_index].SortNumber <= _this2.currentList[index].SortNumber)
              {
                _res.SortNumber--;
              }
            } else {
              // 反之++
              if (
              _this2.currentList[_index].SortNumber < _this2.currentList[_this2.active].SortNumber &&
              _this2.currentList[_index].SortNumber >= _this2.currentList[index].SortNumber)
              {
                _res.SortNumber++;
              }
            }
            return true;
          }, _this2);
          _this2.currentList[_this2.active].SortNumber = temNumber;
          _this2.moveUpdateCurrentList(temNumber);
          return false;
        } else {
          return true;
        }
      }, this);
    },
    touchend: function touchend(e) {
      if (this.currentList[this.active]) {
        this.currentList[this.active].animation = true;
      }
      this.moveUpdateCurrentList(-1);
      this.active = -1;
      // 向前台更新数据
      var data = JSON.parse(JSON.stringify(this.currentList));
      data.sort(function (a, b) {return a.SortNumber - b.SortNumber;});
      uni.setStorageSync('currentList', data);
    },
    // 触发tapModuleItems
    tapModuleItems: function tapModuleItems(e) {
      console.log(e, '触发tapModuleItems');
      console.log(this.currentList, '---------------this.currentList-------------');
      this.currentList.map(function (items, index) {
        if (items.SortNumber === e[1]) {
          items.iconTitle = e[0];
        }
      });
      // 向前台更新数据
      var data = JSON.parse(JSON.stringify(this.currentList));
      data.sort(function (a, b) {return a.SortNumber - b.SortNumber;});
      uni.setStorageSync('currentList', data);
    },
    // 触发更改icon，展示icon库
    tapModuleItemsIcon: function tapModuleItemsIcon(e) {
      console.log(e, '触发点击子项的index----原始值');
      console.log(this.iconLibraryShow, '-------------------------this.iconLibraryShow-----------------------');
      if (this.iconLibraryShow === false) {
        this.iconLibraryShow = true;
        this.iconLibrary = e;
        this.isSelect = e;
        this.old.tapIndex = e;
        console.log(e, '------------------所在index------------------');
        // this.currentList[e + 1].y = this.currentList[e + 1].y + 114;
        this.currentList.sort(function (a, b) {return a.SortNumber - b.SortNumber;});
        console.log(this.currentList[e], '--------------------修改后的this.currentList-------------------');
        this.currentList.map(function (items, index) {
          if (e === index === 0) {
            items.y = items.y;
          }if (index > e) {
            items.y = items.y + 114;
          }
        });
      } else if (this.iconLibraryShow === true) {
        console.log(e, this.old.tapIndex, '----------------------------e, this.this.old.tapIndex--------------------------');
        if (e === this.old.tapIndex) {
          console.log('关闭上一次打开的');
          this.iconLibraryShow = false;
          this.iconLibrary = -1;
          this.isSelect = -1;
          this.old.tapIndex = -1;
        } else {
          console.log('关闭上一次打开的,并且打开新的');
          this.iconLibraryShow = true;
          this.iconLibrary = e;
          this.isSelect = e;
          this.old.tapIndex = e;
          console.log(e, '------------------所在index------------------');
          // this.currentList[e + 1].y = this.currentList[e + 1].y + 114;
          this.currentList.sort(function (a, b) {return a.SortNumber - b.SortNumber;});
          console.log(this.currentList[e], '--------------------修改后的this.currentList-------------------');
          this.currentList.map(function (items, index) {
            if (e === index === 0) {
              items.y = items.y;
            }if (index > e) {
              items.y = items.y + 114;
            }
          });
        }

      }

    },
    // 删除
    tapModuleItemsDel: function tapModuleItemsDel(e) {var _this3 = this;
      // debugger
      this.iconLibrary = -1;
      this.iconLibraryShow = false; // 判断当前组件是否有icon库展示
      console.log(e, '我是删除的index 的SortNumber');
      this.currentList.sort(function (a, b) {return a.SortNumber - b.SortNumber;});
      console.log(this.currentList[e], '--------------------修改后的this.currentList-------------------');
      console.log(this.currentList[e].SortNumber);
      this.currentList.map(function (items, index) {
        if (items.SortNumber === e) {
          // delete this.currentList.splice(index, 1); // 删除选中的子项
          _this3.dragSortRefresh = false; // 刷新当前页面
          _this3.$nextTick(function () {
            this.dragSortRefresh = true;
          });
        }
      });
      // delete this.currentList.splice(e, 1); // 删除选中的子项
      // this.currentList.forEach((item, i) => {
      // 	if (this.currentList[i].SortNumber > this.currentList[e].SortNumber) {
      // 		item.SortNumber--;
      // 	}
      // });
      this.moveUpdateCurrentList(-1);
      if (this.currentList.length > 0) {
        this.currentList[e].isShow = 0;
      }
      var data = this.currentList;
      console.log(data, '------------------删除后数据--------------------');
      // this.currentList.sort((a,b)=>{return a.SortNumber-b.SortNumber});
      console.log(this.currentList, '重排序');
      // this.$emit('tab-DragSortChange', data);
      // 向前台更新数据
      var datas = JSON.parse(JSON.stringify(this.currentList));
      datas.sort(function (a, b) {return a.SortNumber - b.SortNumber;});
      uni.setStorageSync('currentList', datas);
      uni.showToast({
        title: '成功！',
        icon: 'none',
        duration: 500 });

      // this.onUpdateCurrentList();
    },
    // 更换icon
    tapModuleIconLibrary: function tapModuleIconLibrary(e) {var _this4 = this;
      console.log(e, '用户选择的新icon');
      // 将数据里的icon指定跟新
      this.currentList.map(function (items, index) {
        if (index === _this4.old.tapIndex) {
          items.icon = e;
        }
      });
      // 往前台跟新图库
      var data = this.currentList;
      this.currentList.sort(function (a, b) {return a.SortNumber - b.SortNumber;});
      this.$emit('tab-DragSortChange', data);
      // 关闭图库
      this.iconLibraryShow = false;
      this.iconLibrary = -1;
      this.isSelect = -1;
      this.old.tapIndex = -1;
      uni.showToast({
        title: '替换成功！',
        icon: 'none',
        duration: 500 });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 2223:
/*!******************************************************************************************************************************!*\
  !*** E:/慧聪/代码/hc-mb/components/common/RHX/dragSorts/dragSorts.vue?vue&type=style&index=0&id=a52bdefc&lang=less&scoped=true& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dragSorts_vue_vue_type_style_index_0_id_a52bdefc_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!./node_modules/css-loader??ref--10-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./dragSorts.vue?vue&type=style&index=0&id=a52bdefc&lang=less&scoped=true& */ 2224);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dragSorts_vue_vue_type_style_index_0_id_a52bdefc_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dragSorts_vue_vue_type_style_index_0_id_a52bdefc_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dragSorts_vue_vue_type_style_index_0_id_a52bdefc_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dragSorts_vue_vue_type_style_index_0_id_a52bdefc_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dragSorts_vue_vue_type_style_index_0_id_a52bdefc_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 2224:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!./node_modules/css-loader??ref--10-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/慧聪/代码/hc-mb/components/common/RHX/dragSorts/dragSorts.vue?vue&type=style&index=0&id=a52bdefc&lang=less&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/components/common/RHX/dragSorts/dragSorts.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/RHX/dragSorts/dragSorts-create-component',
    {
        'components/common/RHX/dragSorts/dragSorts-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(2218))
        })
    },
    [['components/common/RHX/dragSorts/dragSorts-create-component']]
]);                
