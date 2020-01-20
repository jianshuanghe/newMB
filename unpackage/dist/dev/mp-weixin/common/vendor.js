(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 0:
/*!****************************!*\
  !*** E:/MB/mb-yun/main.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createApp) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 5));
var _vueI18n = _interopRequireDefault(__webpack_require__(/*! vue-i18n */ 11));
var _store = _interopRequireDefault(__webpack_require__(/*! ./store */ 12));
var _lang = _interopRequireDefault(__webpack_require__(/*! ./common/lang.js */ 27));

var _api = __webpack_require__(/*! ./static/mbcJs/api */ 45);
var _endParams = __webpack_require__(/*! ./static/mbcJs/endParams */ 46);
var _browserType = __webpack_require__(/*! ./static/mbcJs/browserType */ 52);
var _pageNums = __webpack_require__(/*! ./static/mbcJs/pageNums */ 53);
var _dateTime = __webpack_require__(/*! ./static/mbcJs/dateTime */ 54);
var _static = __webpack_require__(/*! ./static/mbcJs/static */ 55);
var _landRegistra = __webpack_require__(/*! ./static/mbcJs/landRegistra */ 56);
var _getDate = __webpack_require__(/*! ./static/mbcJs/getDate */ 57);
var _returnDateNum = __webpack_require__(/*! ./static/mbcJs/returnDateNum */ 58);
var _uuid = __webpack_require__(/*! ./static/mbcJs/uuid */ 59);

var _keyText = __webpack_require__(/*! ./static/mbcJs/dataJson/keyText */ 60);
var _getSystemInfo = __webpack_require__(/*! ./static/mbcJs/getSystemInfo */ 61);
var _VwVhToPx = __webpack_require__(/*! ./static/mbcJs/VwVhToPx */ 62);
var _newGuid = __webpack_require__(/*! ./static/mbcJs/newGuid */ 63);
var _scrollTitleChange = __webpack_require__(/*! ./static/mbcJs/scrollTitleChange */ 64);
var _mergeBasicData = __webpack_require__(/*! ./static/mbcJs/mergeBasicData */ 65);
var _urlCrypto = __webpack_require__(/*! ./static/mbcJs/urlCrypto */ 66);
var _madeParams = __webpack_require__(/*! ./static/mbcJs/madeParams */ 67);
var _platformAccount = __webpack_require__(/*! ./static/mbcJs/platformAccount */ 68);
var _focusStore = __webpack_require__(/*! ./static/mbcJs/focusStore */ 72);
var _shareEachPage = __webpack_require__(/*! ./static/mbcJs/shareEachPage/shareEachPage */ 73);
var _resetURL = __webpack_require__(/*! ./static/mbcJs/resetURL */ 77);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}






_vue.default.use(_vueI18n.default);

_vue.default.config.productionTip = false;

_vue.default.prototype.$store = _store.default;

_vue.default.prototype.api1 = _api.api1;
_vue.default.prototype.api2 = _api.api2;
_vue.default.prototype.api3 = _api.api3;

_vue.default.prototype.endParams = _endParams.endParams;

_vue.default.prototype.isWeiXin = _browserType.isWeiXin;

_vue.default.prototype.pageNums = _pageNums.pageNums;

_vue.default.prototype.dateTime = _dateTime.dateTime;

_vue.default.prototype.Static = _static.Static;

_vue.default.prototype.dImg = _static.dImg;

_vue.default.prototype.origin = _static.origin;

_vue.default.prototype.landRegistra = _landRegistra.landRegistra;

_vue.default.prototype.getDate = _getDate.getDate;

_vue.default.prototype.returnDateNum = _returnDateNum.returnDateNum;

_vue.default.prototype.generateUUID = _uuid.generateUUID;

_vue.default.prototype.keyText = _keyText.keyText;

_vue.default.prototype.getSystemInfo = _getSystemInfo.getSystemInfo;

_vue.default.prototype.VwVhToPx = _VwVhToPx.VwVhToPx;

_vue.default.prototype.newGuid = _newGuid.newGuid;

_vue.default.prototype.scrollTitleChange = _scrollTitleChange.scrollTitleChange;

_vue.default.prototype.mergeBasicData = _mergeBasicData.mergeBasicData;

_vue.default.prototype.urlCrypto = _urlCrypto.urlCrypto;

_vue.default.prototype.madeParams = _madeParams.madeParams;

_vue.default.prototype.platformAccount = _platformAccount.platformAccount;

_vue.default.prototype.focusStore = _focusStore.focusStore;

_vue.default.prototype.shareEachPage = _shareEachPage.shareEachPage;

_vue.default.prototype.resetURL = _resetURL.resetURL;






_vue.default.prototype.$backgroundAudioData = {
  playing: false,
  playTime: 0,
  formatedPlayTime: '00:00:00' };


_App.default.mpType = 'app';

var i18n = new _vueI18n.default({
  locale: 'zh_CN', // 英文：en_US，中文： zh_CN
  messages: _lang.default });


_vue.default.prototype._i18n = i18n;

var app = new _vue.default(_objectSpread({
  i18n: i18n,
  store: _store.default },
_App.default));

createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createApp"]))

/***/ }),

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createPage = createPage;exports.createComponent = createComponent;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.then(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

var CALLBACK_API_RE = /^on/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name);
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name);
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name);
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
      /* eslint-disable no-extend-native */
      if (!Promise.prototype.finally) {
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(
          function (value) {return promise.resolve(callback()).then(function () {return value;});},
          function (reason) {return promise.resolve(callback()).then(function () {
              throw reason;
            });});

        };
      }
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };




var baseApi = /*#__PURE__*/Object.freeze({
  upx2px: upx2px,
  interceptors: interceptors,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor });


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var protocols = {
  previewImage: previewImage };

var todos = [];
var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  getProvider: getProvider });


var getEmitter = function () {
  if (typeof getUniEmitter === 'function') {
    /* eslint-disable no-undef */
    return getUniEmitter;
  }
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}



var eventApi = /*#__PURE__*/Object.freeze({
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });




var api = /*#__PURE__*/Object.freeze({});



var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue$$1, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
    vueOptions = VueComponent.extendOptions;
  } else {
    VueComponent = Vue$$1.extend(vueOptions);
  }
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions['behaviors'];
  var vueExtends = vueOptions['extends'];
  var vueMixins = vueOptions['mixins'];

  var vueProps = vueOptions['props'];

  if (!vueProps) {
    vueOptions['props'] = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps['name'] = {
            type: String,
            default: '' };

          vueProps['value'] = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts['default'];
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type, value, file);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts, null, file);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                                  *[
                                                  *    ['data.items', 'data.id', item.data.id],
                                                  *    ['metas', 'id', meta.id]
                                                  *],
                                                  *[
                                                  *    ['data.items', 'data.id', item.data.id],
                                                  *    ['metas', 'id', meta.id]
                                                  *],
                                                  *'test'
                                                  */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (
          handlerCtx.$options.generic &&
          handlerCtx.$parent &&
          handlerCtx.$parent.$parent)
          {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = handlerCtx.$parent.$parent;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          handler.apply(handlerCtx, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName));

        }
      });
    }
  });
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属
  var parentVm = $children.find(function (childVm) {return childVm.$scope._$vueId === vuePid;});
  if (parentVm) {
    return parentVm;
  }
  // 反向递归查找
  for (var i = $children.length - 1; i >= 0; i--) {
    parentVm = findVmByVueId($children[i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage$$1 = _ref5.isPage,initRelation$$1 = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var componentOptions = {
    options: {
      multipleSlots: true,
      addGlobalClass: true },

    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage$$1.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation$$1.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };



  if (isPage$$1) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });


  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 10:
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 100:
/*!*************************************************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FaLittle%2FputInBusiness%2FputInBusinessList%2FbunesinessDetails%2FbunesinessDetails"} ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _bunesinessDetails = _interopRequireDefault(__webpack_require__(/*! ./modules/aLittle/putInBusiness/putInBusinessList/bunesinessDetails/bunesinessDetails.vue */ 101));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_bunesinessDetails.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 108:
/*!*********************************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FaLittle%2FputInBusiness%2FputInBusinessList%2FputInList%2FputInList"} ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _putInList = _interopRequireDefault(__webpack_require__(/*! ./modules/aLittle/putInBusiness/putInBusinessList/putInList/putInList.vue */ 109));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_putInList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 11:
/*!***************************************************************!*\
  !*** E:/MB/mb-yun/node_modules/vue-i18n/dist/vue-i18n.esm.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*!
                                                                                                      * vue-i18n v8.14.1 
                                                                                                      * (c) 2019 kazuya kawaguchi
                                                                                                      * Released under the MIT License.
                                                                                                      */
/*  */

/**
        * constants
        */

var numberFormatKeys = [
'style',
'currency',
'currencyDisplay',
'useGrouping',
'minimumIntegerDigits',
'minimumFractionDigits',
'maximumFractionDigits',
'minimumSignificantDigits',
'maximumSignificantDigits',
'localeMatcher',
'formatMatcher'];


/**
                   * utilities
                   */

function warn(msg, err) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-i18n] ' + msg);
    /* istanbul ignore if */
    if (err) {
      console.warn(err.stack);
    }
  }
}

function error(msg, err) {
  if (typeof console !== 'undefined') {
    console.error('[vue-i18n] ' + msg);
    /* istanbul ignore if */
    if (err) {
      console.error(err.stack);
    }
  }
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject(obj) {
  return toString.call(obj) === OBJECT_STRING;
}

function isNull(val) {
  return val === null || val === undefined;
}

function parseArgs() {
  var args = [],len = arguments.length;
  while (len--) {args[len] = arguments[len];}

  var locale = null;
  var params = null;
  if (args.length === 1) {
    if (isObject(args[0]) || Array.isArray(args[0])) {
      params = args[0];
    } else if (typeof args[0] === 'string') {
      locale = args[0];
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string') {
      locale = args[0];
    }
    /* istanbul ignore if */
    if (isObject(args[1]) || Array.isArray(args[1])) {
      params = args[1];
    }
  }

  return { locale: locale, params: params };
}

function looseClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function merge(target) {
  var arguments$1 = arguments;

  var output = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments$1[i];
    if (source !== undefined && source !== null) {
      var key = void 0;
      for (key in source) {
        if (hasOwn(source, key)) {
          if (isObject(source[key])) {
            output[key] = merge(output[key], source[key]);
          } else {
            output[key] = source[key];
          }
        }
      }
    }
  }
  return output;
}

function looseEqual(a, b) {
  if (a === b) {return true;}
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i]);
        });
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key]);
        });
      } else {
        /* istanbul ignore next */
        return false;
      }
    } catch (e) {
      /* istanbul ignore next */
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}

/*  */

function extend(Vue) {
  if (!Vue.prototype.hasOwnProperty('$i18n')) {
    // $FlowFixMe
    Object.defineProperty(Vue.prototype, '$i18n', {
      get: function get() {return this._i18n;} });

  }

  Vue.prototype.$t = function (key) {
    var values = [],len = arguments.length - 1;
    while (len-- > 0) {values[len] = arguments[len + 1];}

    var i18n = this.$i18n;
    return i18n._t.apply(i18n, [key, i18n.locale, i18n._getMessages(), this].concat(values));
  };

  Vue.prototype.$tc = function (key, choice) {
    var values = [],len = arguments.length - 2;
    while (len-- > 0) {values[len] = arguments[len + 2];}

    var i18n = this.$i18n;
    return i18n._tc.apply(i18n, [key, i18n.locale, i18n._getMessages(), this, choice].concat(values));
  };

  Vue.prototype.$te = function (key, locale) {
    var i18n = this.$i18n;
    return i18n._te(key, i18n.locale, i18n._getMessages(), locale);
  };

  Vue.prototype.$d = function (value) {
    var ref;

    var args = [],len = arguments.length - 1;
    while (len-- > 0) {args[len] = arguments[len + 1];}
    return (ref = this.$i18n).d.apply(ref, [value].concat(args));
  };

  Vue.prototype.$n = function (value) {
    var ref;

    var args = [],len = arguments.length - 1;
    while (len-- > 0) {args[len] = arguments[len + 1];}
    return (ref = this.$i18n).n.apply(ref, [value].concat(args));
  };
}

/*  */

var mixin = {
  beforeCreate: function beforeCreate() {
    var options = this.$options;
    options.i18n = options.i18n || (options.__i18n ? {} : null);

    if (options.i18n) {
      if (options.i18n instanceof VueI18n) {
        // init locale messages via custom blocks
        if (options.__i18n) {
          try {
            var localeMessages = {};
            options.__i18n.forEach(function (resource) {
              localeMessages = merge(localeMessages, JSON.parse(resource));
            });
            Object.keys(localeMessages).forEach(function (locale) {
              options.i18n.mergeLocaleMessage(locale, localeMessages[locale]);
            });
          } catch (e) {
            if (true) {
              warn("Cannot parse locale messages via custom blocks.", e);
            }
          }
        }
        this._i18n = options.i18n;
        this._i18nWatcher = this._i18n.watchI18nData();
      } else if (isPlainObject(options.i18n)) {
        // component local i18n
        if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
          options.i18n.root = this.$root;
          options.i18n.formatter = this.$root.$i18n.formatter;
          options.i18n.fallbackLocale = this.$root.$i18n.fallbackLocale;
          options.i18n.formatFallbackMessages = this.$root.$i18n.formatFallbackMessages;
          options.i18n.silentTranslationWarn = this.$root.$i18n.silentTranslationWarn;
          options.i18n.silentFallbackWarn = this.$root.$i18n.silentFallbackWarn;
          options.i18n.pluralizationRules = this.$root.$i18n.pluralizationRules;
          options.i18n.preserveDirectiveContent = this.$root.$i18n.preserveDirectiveContent;
        }

        // init locale messages via custom blocks
        if (options.__i18n) {
          try {
            var localeMessages$1 = {};
            options.__i18n.forEach(function (resource) {
              localeMessages$1 = merge(localeMessages$1, JSON.parse(resource));
            });
            options.i18n.messages = localeMessages$1;
          } catch (e) {
            if (true) {
              warn("Cannot parse locale messages via custom blocks.", e);
            }
          }
        }

        var ref = options.i18n;
        var sharedMessages = ref.sharedMessages;
        if (sharedMessages && isPlainObject(sharedMessages)) {
          options.i18n.messages = merge(options.i18n.messages, sharedMessages);
        }

        this._i18n = new VueI18n(options.i18n);
        this._i18nWatcher = this._i18n.watchI18nData();

        if (options.i18n.sync === undefined || !!options.i18n.sync) {
          this._localeWatcher = this.$i18n.watchLocale();
        }
      } else {
        if (true) {
          warn("Cannot be interpreted 'i18n' option.");
        }
      }
    } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
      // root i18n
      this._i18n = this.$root.$i18n;
    } else if (options.parent && options.parent.$i18n && options.parent.$i18n instanceof VueI18n) {
      // parent i18n
      this._i18n = options.parent.$i18n;
    }
  },

  beforeMount: function beforeMount() {
    var options = this.$options;
    options.i18n = options.i18n || (options.__i18n ? {} : null);

    if (options.i18n) {
      if (options.i18n instanceof VueI18n) {
        // init locale messages via custom blocks
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
      } else if (isPlainObject(options.i18n)) {
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
      } else {
        if (true) {
          warn("Cannot be interpreted 'i18n' option.");
        }
      }
    } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
      this._i18n.subscribeDataChanging(this);
      this._subscribing = true;
    } else if (options.parent && options.parent.$i18n && options.parent.$i18n instanceof VueI18n) {
      this._i18n.subscribeDataChanging(this);
      this._subscribing = true;
    }
  },

  beforeDestroy: function beforeDestroy() {
    if (!this._i18n) {return;}

    var self = this;
    this.$nextTick(function () {
      if (self._subscribing) {
        self._i18n.unsubscribeDataChanging(self);
        delete self._subscribing;
      }

      if (self._i18nWatcher) {
        self._i18nWatcher();
        self._i18n.destroyVM();
        delete self._i18nWatcher;
      }

      if (self._localeWatcher) {
        self._localeWatcher();
        delete self._localeWatcher;
      }

      self._i18n = null;
    });
  } };


/*  */

var interpolationComponent = {
  name: 'i18n',
  functional: true,
  props: {
    tag: {
      type: String },

    path: {
      type: String,
      required: true },

    locale: {
      type: String },

    places: {
      type: [Array, Object] } },


  render: function render(h, ref) {
    var data = ref.data;
    var parent = ref.parent;
    var props = ref.props;
    var slots = ref.slots;

    var $i18n = parent.$i18n;
    if (!$i18n) {
      if (true) {
        warn('Cannot find VueI18n instance!');
      }
      return;
    }

    var path = props.path;
    var locale = props.locale;
    var places = props.places;
    var params = slots();
    var children = $i18n.i(
    path,
    locale,
    onlyHasDefaultPlace(params) || places ?
    useLegacyPlaces(params.default, places) :
    params);


    var tag = props.tag || 'span';
    return tag ? h(tag, data, children) : children;
  } };


function onlyHasDefaultPlace(params) {
  var prop;
  for (prop in params) {
    if (prop !== 'default') {return false;}
  }
  return Boolean(prop);
}

function useLegacyPlaces(children, places) {
  var params = places ? createParamsFromPlaces(places) : {};

  if (!children) {return params;}

  // Filter empty text nodes
  children = children.filter(function (child) {
    return child.tag || child.text.trim() !== '';
  });

  var everyPlace = children.every(vnodeHasPlaceAttribute);
  if ( true && everyPlace) {
    warn('`place` attribute is deprecated in next major version. Please switch to Vue slots.');
  }

  return children.reduce(
  everyPlace ? assignChildPlace : assignChildIndex,
  params);

}

function createParamsFromPlaces(places) {
  if (true) {
    warn('`places` prop is deprecated in next major version. Please switch to Vue slots.');
  }

  return Array.isArray(places) ?
  places.reduce(assignChildIndex, {}) :
  Object.assign({}, places);
}

function assignChildPlace(params, child) {
  if (child.data && child.data.attrs && child.data.attrs.place) {
    params[child.data.attrs.place] = child;
  }
  return params;
}

function assignChildIndex(params, child, index) {
  params[index] = child;
  return params;
}

function vnodeHasPlaceAttribute(vnode) {
  return Boolean(vnode.data && vnode.data.attrs && vnode.data.attrs.place);
}

/*  */

var numberComponent = {
  name: 'i18n-n',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'span' },

    value: {
      type: Number,
      required: true },

    format: {
      type: [String, Object] },

    locale: {
      type: String } },


  render: function render(h, ref) {
    var props = ref.props;
    var parent = ref.parent;
    var data = ref.data;

    var i18n = parent.$i18n;

    if (!i18n) {
      if (true) {
        warn('Cannot find VueI18n instance!');
      }
      return null;
    }

    var key = null;
    var options = null;

    if (typeof props.format === 'string') {
      key = props.format;
    } else if (isObject(props.format)) {
      if (props.format.key) {
        key = props.format.key;
      }

      // Filter out number format options only
      options = Object.keys(props.format).reduce(function (acc, prop) {
        var obj;

        if (numberFormatKeys.includes(prop)) {
          return Object.assign({}, acc, (obj = {}, obj[prop] = props.format[prop], obj));
        }
        return acc;
      }, null);
    }

    var locale = props.locale || i18n.locale;
    var parts = i18n._ntp(props.value, locale, key, options);

    var values = parts.map(function (part, index) {
      var obj;

      var slot = data.scopedSlots && data.scopedSlots[part.type];
      return slot ? slot((obj = {}, obj[part.type] = part.value, obj.index = index, obj.parts = parts, obj)) : part.value;
    });

    return h(props.tag, {
      attrs: data.attrs,
      'class': data['class'],
      staticClass: data.staticClass },
    values);
  } };


/*  */

function bind(el, binding, vnode) {
  if (!assert(el, vnode)) {return;}

  t(el, binding, vnode);
}

function update(el, binding, vnode, oldVNode) {
  if (!assert(el, vnode)) {return;}

  var i18n = vnode.context.$i18n;
  if (localeEqual(el, vnode) &&
  looseEqual(binding.value, binding.oldValue) &&
  looseEqual(el._localeMessage, i18n.getLocaleMessage(i18n.locale))) {return;}

  t(el, binding, vnode);
}

function unbind(el, binding, vnode, oldVNode) {
  var vm = vnode.context;
  if (!vm) {
    warn('Vue instance does not exists in VNode context');
    return;
  }

  var i18n = vnode.context.$i18n || {};
  if (!binding.modifiers.preserve && !i18n.preserveDirectiveContent) {
    el.textContent = '';
  }
  el._vt = undefined;
  delete el['_vt'];
  el._locale = undefined;
  delete el['_locale'];
  el._localeMessage = undefined;
  delete el['_localeMessage'];
}

function assert(el, vnode) {
  var vm = vnode.context;
  if (!vm) {
    warn('Vue instance does not exists in VNode context');
    return false;
  }

  if (!vm.$i18n) {
    warn('VueI18n instance does not exists in Vue instance');
    return false;
  }

  return true;
}

function localeEqual(el, vnode) {
  var vm = vnode.context;
  return el._locale === vm.$i18n.locale;
}

function t(el, binding, vnode) {
  var ref$1, ref$2;

  var value = binding.value;

  var ref = parseValue(value);
  var path = ref.path;
  var locale = ref.locale;
  var args = ref.args;
  var choice = ref.choice;
  if (!path && !locale && !args) {
    warn('value type not supported');
    return;
  }

  if (!path) {
    warn('`path` is required in v-t directive');
    return;
  }

  var vm = vnode.context;
  if (choice) {
    el._vt = el.textContent = (ref$1 = vm.$i18n).tc.apply(ref$1, [path, choice].concat(makeParams(locale, args)));
  } else {
    el._vt = el.textContent = (ref$2 = vm.$i18n).t.apply(ref$2, [path].concat(makeParams(locale, args)));
  }
  el._locale = vm.$i18n.locale;
  el._localeMessage = vm.$i18n.getLocaleMessage(vm.$i18n.locale);
}

function parseValue(value) {
  var path;
  var locale;
  var args;
  var choice;

  if (typeof value === 'string') {
    path = value;
  } else if (isPlainObject(value)) {
    path = value.path;
    locale = value.locale;
    args = value.args;
    choice = value.choice;
  }

  return { path: path, locale: locale, args: args, choice: choice };
}

function makeParams(locale, args) {
  var params = [];

  locale && params.push(locale);
  if (args && (Array.isArray(args) || isPlainObject(args))) {
    params.push(args);
  }

  return params;
}

var Vue;

function install(_Vue) {
  /* istanbul ignore if */
  if ( true && install.installed && _Vue === Vue) {
    warn('already installed.');
    return;
  }
  install.installed = true;

  Vue = _Vue;

  var version = Vue.version && Number(Vue.version.split('.')[0]) || -1;
  /* istanbul ignore if */
  if ( true && version < 2) {
    warn("vue-i18n (" + install.version + ") need to use Vue 2.0 or later (Vue: " + Vue.version + ").");
    return;
  }

  extend(Vue);
  Vue.mixin(mixin);
  Vue.directive('t', { bind: bind, update: update, unbind: unbind });
  Vue.component(interpolationComponent.name, interpolationComponent);
  Vue.component(numberComponent.name, numberComponent);

  // use simple mergeStrategies to prevent i18n instance lose '__proto__'
  var strats = Vue.config.optionMergeStrategies;
  strats.i18n = function (parentVal, childVal) {
    return childVal === undefined ?
    parentVal :
    childVal;
  };
}

/*  */

var BaseFormatter = function BaseFormatter() {
  this._caches = Object.create(null);
};

BaseFormatter.prototype.interpolate = function interpolate(message, values) {
  if (!values) {
    return [message];
  }
  var tokens = this._caches[message];
  if (!tokens) {
    tokens = parse(message);
    this._caches[message] = tokens;
  }
  return compile(tokens, values);
};



var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;

function parse(format) {
  var tokens = [];
  var position = 0;

  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === '{') {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }

      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== '}') {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === '}';

      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    } else if (char === '%') {
      // when found rails i18n syntax, skip text capture
      if (format[position] !== '{') {
        text += char;
      }
    } else {
      text += char;
    }
  }

  text && tokens.push({ type: 'text', value: text });

  return tokens;
}

function compile(tokens, values) {
  var compiled = [];
  var index = 0;

  var mode = Array.isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {return compiled;}

  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else {
          if (true) {
            warn("Type of token '" + token.type + "' and format of value '" + mode + "' don't match!");
          }
        }
        break;
      case 'unknown':
        if (true) {
          warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }

  return compiled;
}

/*  */

/**
        *  Path parser
        *  - Inspired:
        *    Vue.js Path parser
        */

// actions
var APPEND = 0;
var PUSH = 1;
var INC_SUB_PATH_DEPTH = 2;
var PUSH_SUB_PATH = 3;

// states
var BEFORE_PATH = 0;
var IN_PATH = 1;
var BEFORE_IDENT = 2;
var IN_IDENT = 3;
var IN_SUB_PATH = 4;
var IN_SINGLE_QUOTE = 5;
var IN_DOUBLE_QUOTE = 6;
var AFTER_PATH = 7;
var ERROR = 8;

var pathStateMachine = [];

pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH] };


pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH] };


pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND] };


pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [IN_SUB_PATH, PUSH],
  'eof': [AFTER_PATH, PUSH] };


pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  ']': [IN_PATH, PUSH_SUB_PATH],
  'eof': ERROR,
  'else': [IN_SUB_PATH, APPEND] };


pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND] };


pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND] };


/**
                                        * Check if an expression is a literal value.
                                        */

var literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
  return literalValueRE.test(exp);
}

/**
   * Strip quotes from a string
   */

function stripQuotes(str) {
  var a = str.charCodeAt(0);
  var b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27) ?
  str.slice(1, -1) :
  str;
}

/**
   * Determine the type of a character in a keypath.
   */

function getPathCharType(ch) {
  if (ch === undefined || ch === null) {return 'eof';}

  var code = ch.charCodeAt(0);

  switch (code) {
    case 0x5B: // [
    case 0x5D: // ]
    case 0x2E: // .
    case 0x22: // "
    case 0x27: // '
      return ch;

    case 0x5F: // _
    case 0x24: // $
    case 0x2D: // -
      return 'ident';

    case 0x09: // Tab
    case 0x0A: // Newline
    case 0x0D: // Return
    case 0xA0: // No-break space
    case 0xFEFF: // Byte Order Mark
    case 0x2028: // Line Separator
    case 0x2029: // Paragraph Separator
      return 'ws';}


  return 'ident';
}

/**
   * Format a subPath, return its plain form if it is
   * a literal string or number. Otherwise prepend the
   * dynamic indicator (*).
   */

function formatSubPath(path) {
  var trimmed = path.trim();
  // invalid leading 0
  if (path.charAt(0) === '0' && isNaN(path)) {return false;}

  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
}

/**
   * Parse a string path into an array of segments
   */

function parse$1(path) {
  var keys = [];
  var index = -1;
  var mode = BEFORE_PATH;
  var subPathDepth = 0;
  var c;
  var key;
  var newChar;
  var type;
  var transition;
  var action;
  var typeMap;
  var actions = [];

  actions[PUSH] = function () {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };

  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };

  actions[INC_SUB_PATH_DEPTH] = function () {
    actions[APPEND]();
    subPathDepth++;
  };

  actions[PUSH_SUB_PATH] = function () {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = IN_SUB_PATH;
      actions[APPEND]();
    } else {
      subPathDepth = 0;
      if (key === undefined) {return false;}
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[PUSH]();
      }
    }
  };

  function maybeUnescapeQuote() {
    var nextChar = path[index + 1];
    if (mode === IN_SINGLE_QUOTE && nextChar === "'" ||
    mode === IN_DOUBLE_QUOTE && nextChar === '"') {
      index++;
      newChar = '\\' + nextChar;
      actions[APPEND]();
      return true;
    }
  }

  while (mode !== null) {
    index++;
    c = path[index];

    if (c === '\\' && maybeUnescapeQuote()) {
      continue;
    }

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || ERROR;

    if (transition === ERROR) {
      return; // parse error
    }

    mode = transition[0];
    action = actions[transition[1]];
    if (action) {
      newChar = transition[2];
      newChar = newChar === undefined ?
      c :
      newChar;
      if (action() === false) {
        return;
      }
    }

    if (mode === AFTER_PATH) {
      return keys;
    }
  }
}





var I18nPath = function I18nPath() {
  this._cache = Object.create(null);
};

/**
    * External parse that check for a cache hit first
    */
I18nPath.prototype.parsePath = function parsePath(path) {
  var hit = this._cache[path];
  if (!hit) {
    hit = parse$1(path);
    if (hit) {
      this._cache[path] = hit;
    }
  }
  return hit || [];
};

/**
    * Get path value from path string
    */
I18nPath.prototype.getPathValue = function getPathValue(obj, path) {
  if (!isObject(obj)) {return null;}

  var paths = this.parsePath(path);
  if (paths.length === 0) {
    return null;
  } else {
    var length = paths.length;
    var last = obj;
    var i = 0;
    while (i < length) {
      var value = last[paths[i]];
      if (value === undefined) {
        return null;
      }
      last = value;
      i++;
    }

    return last;
  }
};

/*  */



var htmlTagMatcher = /<\/?[\w\s="/.':;#-\/]+>/;
var linkKeyMatcher = /(?:@(?:\.[a-z]+)?:(?:[\w\-_|.]+|\([\w\-_|.]+\)))/g;
var linkKeyPrefixMatcher = /^@(?:\.([a-z]+))?:/;
var bracketsMatcher = /[()]/g;
var formatters = {
  'upper': function upper(str) {return str.toLocaleUpperCase();},
  'lower': function lower(str) {return str.toLocaleLowerCase();} };


var defaultFormatter = new BaseFormatter();

var VueI18n = function VueI18n(options) {
  var this$1 = this;
  if (options === void 0) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #290
  /* istanbul ignore if */
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  var locale = options.locale || 'en-US';
  var fallbackLocale = options.fallbackLocale || 'en-US';
  var messages = options.messages || {};
  var dateTimeFormats = options.dateTimeFormats || {};
  var numberFormats = options.numberFormats || {};

  this._vm = null;
  this._formatter = options.formatter || defaultFormatter;
  this._missing = options.missing || null;
  this._root = options.root || null;
  this._sync = options.sync === undefined ? true : !!options.sync;
  this._fallbackRoot = options.fallbackRoot === undefined ?
  true :
  !!options.fallbackRoot;
  this._formatFallbackMessages = options.formatFallbackMessages === undefined ?
  false :
  !!options.formatFallbackMessages;
  this._silentTranslationWarn = options.silentTranslationWarn === undefined ?
  false :
  options.silentTranslationWarn;
  this._silentFallbackWarn = options.silentFallbackWarn === undefined ?
  false :
  !!options.silentFallbackWarn;
  this._dateTimeFormatters = {};
  this._numberFormatters = {};
  this._path = new I18nPath();
  this._dataListeners = [];
  this._preserveDirectiveContent = options.preserveDirectiveContent === undefined ?
  false :
  !!options.preserveDirectiveContent;
  this.pluralizationRules = options.pluralizationRules || {};
  this._warnHtmlInMessage = options.warnHtmlInMessage || 'off';

  this._exist = function (message, key) {
    if (!message || !key) {return false;}
    if (!isNull(this$1._path.getPathValue(message, key))) {return true;}
    // fallback for flat key
    if (message[key]) {return true;}
    return false;
  };

  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    Object.keys(messages).forEach(function (locale) {
      this$1._checkLocaleMessage(locale, this$1._warnHtmlInMessage, messages[locale]);
    });
  }

  this._initVM({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    dateTimeFormats: dateTimeFormats,
    numberFormats: numberFormats });

};

var prototypeAccessors = { vm: { configurable: true }, messages: { configurable: true }, dateTimeFormats: { configurable: true }, numberFormats: { configurable: true }, availableLocales: { configurable: true }, locale: { configurable: true }, fallbackLocale: { configurable: true }, formatFallbackMessages: { configurable: true }, missing: { configurable: true }, formatter: { configurable: true }, silentTranslationWarn: { configurable: true }, silentFallbackWarn: { configurable: true }, preserveDirectiveContent: { configurable: true }, warnHtmlInMessage: { configurable: true } };

VueI18n.prototype._checkLocaleMessage = function _checkLocaleMessage(locale, level, message) {
  var paths = [];

  var fn = function fn(level, locale, message, paths) {
    if (isPlainObject(message)) {
      Object.keys(message).forEach(function (key) {
        var val = message[key];
        if (isPlainObject(val)) {
          paths.push(key);
          paths.push('.');
          fn(level, locale, val, paths);
          paths.pop();
          paths.pop();
        } else {
          paths.push(key);
          fn(level, locale, val, paths);
          paths.pop();
        }
      });
    } else if (Array.isArray(message)) {
      message.forEach(function (item, index) {
        if (isPlainObject(item)) {
          paths.push("[" + index + "]");
          paths.push('.');
          fn(level, locale, item, paths);
          paths.pop();
          paths.pop();
        } else {
          paths.push("[" + index + "]");
          fn(level, locale, item, paths);
          paths.pop();
        }
      });
    } else if (typeof message === 'string') {
      var ret = htmlTagMatcher.test(message);
      if (ret) {
        var msg = "Detected HTML in message '" + message + "' of keypath '" + paths.join('') + "' at '" + locale + "'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";
        if (level === 'warn') {
          warn(msg);
        } else if (level === 'error') {
          error(msg);
        }
      }
    }
  };

  fn(level, locale, message, paths);
};

VueI18n.prototype._initVM = function _initVM(data) {
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  this._vm = new Vue({ data: data });
  Vue.config.silent = silent;
};

VueI18n.prototype.destroyVM = function destroyVM() {
  this._vm.$destroy();
};

VueI18n.prototype.subscribeDataChanging = function subscribeDataChanging(vm) {
  this._dataListeners.push(vm);
};

VueI18n.prototype.unsubscribeDataChanging = function unsubscribeDataChanging(vm) {
  remove(this._dataListeners, vm);
};

VueI18n.prototype.watchI18nData = function watchI18nData() {
  var self = this;
  return this._vm.$watch('$data', function () {
    var i = self._dataListeners.length;
    while (i--) {
      Vue.nextTick(function () {
        self._dataListeners[i] && self._dataListeners[i].$forceUpdate();
      });
    }
  }, { deep: true });
};

VueI18n.prototype.watchLocale = function watchLocale() {
  /* istanbul ignore if */
  if (!this._sync || !this._root) {return null;}
  var target = this._vm;
  return this._root.$i18n.vm.$watch('locale', function (val) {
    target.$set(target, 'locale', val);
    target.$forceUpdate();
  }, { immediate: true });
};

prototypeAccessors.vm.get = function () {return this._vm;};

prototypeAccessors.messages.get = function () {return looseClone(this._getMessages());};
prototypeAccessors.dateTimeFormats.get = function () {return looseClone(this._getDateTimeFormats());};
prototypeAccessors.numberFormats.get = function () {return looseClone(this._getNumberFormats());};
prototypeAccessors.availableLocales.get = function () {return Object.keys(this.messages).sort();};

prototypeAccessors.locale.get = function () {return this._vm.locale;};
prototypeAccessors.locale.set = function (locale) {
  this._vm.$set(this._vm, 'locale', locale);
};

prototypeAccessors.fallbackLocale.get = function () {return this._vm.fallbackLocale;};
prototypeAccessors.fallbackLocale.set = function (locale) {
  this._vm.$set(this._vm, 'fallbackLocale', locale);
};

prototypeAccessors.formatFallbackMessages.get = function () {return this._formatFallbackMessages;};
prototypeAccessors.formatFallbackMessages.set = function (fallback) {this._formatFallbackMessages = fallback;};

prototypeAccessors.missing.get = function () {return this._missing;};
prototypeAccessors.missing.set = function (handler) {this._missing = handler;};

prototypeAccessors.formatter.get = function () {return this._formatter;};
prototypeAccessors.formatter.set = function (formatter) {this._formatter = formatter;};

prototypeAccessors.silentTranslationWarn.get = function () {return this._silentTranslationWarn;};
prototypeAccessors.silentTranslationWarn.set = function (silent) {this._silentTranslationWarn = silent;};

prototypeAccessors.silentFallbackWarn.get = function () {return this._silentFallbackWarn;};
prototypeAccessors.silentFallbackWarn.set = function (silent) {this._silentFallbackWarn = silent;};

prototypeAccessors.preserveDirectiveContent.get = function () {return this._preserveDirectiveContent;};
prototypeAccessors.preserveDirectiveContent.set = function (preserve) {this._preserveDirectiveContent = preserve;};

prototypeAccessors.warnHtmlInMessage.get = function () {return this._warnHtmlInMessage;};
prototypeAccessors.warnHtmlInMessage.set = function (level) {
  var this$1 = this;

  var orgLevel = this._warnHtmlInMessage;
  this._warnHtmlInMessage = level;
  if (orgLevel !== level && (level === 'warn' || level === 'error')) {
    var messages = this._getMessages();
    Object.keys(messages).forEach(function (locale) {
      this$1._checkLocaleMessage(locale, this$1._warnHtmlInMessage, messages[locale]);
    });
  }
};

VueI18n.prototype._getMessages = function _getMessages() {return this._vm.messages;};
VueI18n.prototype._getDateTimeFormats = function _getDateTimeFormats() {return this._vm.dateTimeFormats;};
VueI18n.prototype._getNumberFormats = function _getNumberFormats() {return this._vm.numberFormats;};

VueI18n.prototype._warnDefault = function _warnDefault(locale, key, result, vm, values) {
  if (!isNull(result)) {return result;}
  if (this._missing) {
    var missingRet = this._missing.apply(null, [locale, key, vm, values]);
    if (typeof missingRet === 'string') {
      return missingRet;
    }
  } else {
    if ( true && !this._isSilentTranslationWarn(key)) {
      warn(
      "Cannot translate the value of keypath '" + key + "'. " +
      'Use the value of keypath as default.');

    }
  }

  if (this._formatFallbackMessages) {
    var parsedArgs = parseArgs.apply(void 0, values);
    return this._render(key, 'string', parsedArgs.params, key);
  } else {
    return key;
  }
};

VueI18n.prototype._isFallbackRoot = function _isFallbackRoot(val) {
  return !val && !isNull(this._root) && this._fallbackRoot;
};

VueI18n.prototype._isSilentFallbackWarn = function _isSilentFallbackWarn(key) {
  return this._silentFallbackWarn instanceof RegExp ?
  this._silentFallbackWarn.test(key) :
  this._silentFallbackWarn;
};

VueI18n.prototype._isSilentFallback = function _isSilentFallback(locale, key) {
  return this._isSilentFallbackWarn(key) && (this._isFallbackRoot() || locale !== this.fallbackLocale);
};

VueI18n.prototype._isSilentTranslationWarn = function _isSilentTranslationWarn(key) {
  return this._silentTranslationWarn instanceof RegExp ?
  this._silentTranslationWarn.test(key) :
  this._silentTranslationWarn;
};

VueI18n.prototype._interpolate = function _interpolate(
locale,
message,
key,
host,
interpolateMode,
values,
visitedLinkStack)
{
  if (!message) {return null;}

  var pathRet = this._path.getPathValue(message, key);
  if (Array.isArray(pathRet) || isPlainObject(pathRet)) {return pathRet;}

  var ret;
  if (isNull(pathRet)) {
    /* istanbul ignore else */
    if (isPlainObject(message)) {
      ret = message[key];
      if (typeof ret !== 'string') {
        if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallback(locale, key)) {
          warn("Value of key '" + key + "' is not a string!");
        }
        return null;
      }
    } else {
      return null;
    }
  } else {
    /* istanbul ignore else */
    if (typeof pathRet === 'string') {
      ret = pathRet;
    } else {
      if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallback(locale, key)) {
        warn("Value of key '" + key + "' is not a string!");
      }
      return null;
    }
  }

  // Check for the existence of links within the translated string
  if (ret.indexOf('@:') >= 0 || ret.indexOf('@.') >= 0) {
    ret = this._link(locale, message, ret, host, 'raw', values, visitedLinkStack);
  }

  return this._render(ret, interpolateMode, values, key);
};

VueI18n.prototype._link = function _link(
locale,
message,
str,
host,
interpolateMode,
values,
visitedLinkStack)
{
  var ret = str;

  // Match all the links within the local
  // We are going to replace each of
  // them with its translation
  var matches = ret.match(linkKeyMatcher);
  for (var idx in matches) {
    // ie compatible: filter custom array
    // prototype method
    if (!matches.hasOwnProperty(idx)) {
      continue;
    }
    var link = matches[idx];
    var linkKeyPrefixMatches = link.match(linkKeyPrefixMatcher);
    var linkPrefix = linkKeyPrefixMatches[0];
    var formatterName = linkKeyPrefixMatches[1];

    // Remove the leading @:, @.case: and the brackets
    var linkPlaceholder = link.replace(linkPrefix, '').replace(bracketsMatcher, '');

    if (visitedLinkStack.includes(linkPlaceholder)) {
      if (true) {
        warn("Circular reference found. \"" + link + "\" is already visited in the chain of " + visitedLinkStack.reverse().join(' <- '));
      }
      return ret;
    }
    visitedLinkStack.push(linkPlaceholder);

    // Translate the link
    var translated = this._interpolate(
    locale, message, linkPlaceholder, host,
    interpolateMode === 'raw' ? 'string' : interpolateMode,
    interpolateMode === 'raw' ? undefined : values,
    visitedLinkStack);


    if (this._isFallbackRoot(translated)) {
      if ( true && !this._isSilentTranslationWarn(linkPlaceholder)) {
        warn("Fall back to translate the link placeholder '" + linkPlaceholder + "' with root locale.");
      }
      /* istanbul ignore if */
      if (!this._root) {throw Error('unexpected error');}
      var root = this._root.$i18n;
      translated = root._translate(
      root._getMessages(), root.locale, root.fallbackLocale,
      linkPlaceholder, host, interpolateMode, values);

    }
    translated = this._warnDefault(
    locale, linkPlaceholder, translated, host,
    Array.isArray(values) ? values : [values]);

    if (formatters.hasOwnProperty(formatterName)) {
      translated = formatters[formatterName](translated);
    }

    visitedLinkStack.pop();

    // Replace the link with the translated
    ret = !translated ? ret : ret.replace(link, translated);
  }

  return ret;
};

VueI18n.prototype._render = function _render(message, interpolateMode, values, path) {
  var ret = this._formatter.interpolate(message, values, path);

  // If the custom formatter refuses to work - apply the default one
  if (!ret) {
    ret = defaultFormatter.interpolate(message, values, path);
  }

  // if interpolateMode is **not** 'string' ('row'),
  // return the compiled data (e.g. ['foo', VNode, 'bar']) with formatter
  return interpolateMode === 'string' ? ret.join('') : ret;
};

VueI18n.prototype._translate = function _translate(
messages,
locale,
fallback,
key,
host,
interpolateMode,
args)
{
  var res =
  this._interpolate(locale, messages[locale], key, host, interpolateMode, args, [key]);
  if (!isNull(res)) {return res;}

  res = this._interpolate(fallback, messages[fallback], key, host, interpolateMode, args, [key]);
  if (!isNull(res)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn("Fall back to translate the keypath '" + key + "' with '" + fallback + "' locale.");
    }
    return res;
  } else {
    return null;
  }
};

VueI18n.prototype._t = function _t(key, _locale, messages, host) {
  var ref;

  var values = [],len = arguments.length - 4;
  while (len-- > 0) {values[len] = arguments[len + 4];}
  if (!key) {return '';}

  var parsedArgs = parseArgs.apply(void 0, values);
  var locale = parsedArgs.locale || _locale;

  var ret = this._translate(
  messages, locale, this.fallbackLocale, key,
  host, 'string', parsedArgs.params);

  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn("Fall back to translate the keypath '" + key + "' with root locale.");
    }
    /* istanbul ignore if */
    if (!this._root) {throw Error('unexpected error');}
    return (ref = this._root).$t.apply(ref, [key].concat(values));
  } else {
    return this._warnDefault(locale, key, ret, host, values);
  }
};

VueI18n.prototype.t = function t(key) {
  var ref;

  var values = [],len = arguments.length - 1;
  while (len-- > 0) {values[len] = arguments[len + 1];}
  return (ref = this)._t.apply(ref, [key, this.locale, this._getMessages(), null].concat(values));
};

VueI18n.prototype._i = function _i(key, locale, messages, host, values) {
  var ret =
  this._translate(messages, locale, this.fallbackLocale, key, host, 'raw', values);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key)) {
      warn("Fall back to interpolate the keypath '" + key + "' with root locale.");
    }
    if (!this._root) {throw Error('unexpected error');}
    return this._root.$i18n.i(key, locale, values);
  } else {
    return this._warnDefault(locale, key, ret, host, [values]);
  }
};

VueI18n.prototype.i = function i(key, locale, values) {
  /* istanbul ignore if */
  if (!key) {return '';}

  if (typeof locale !== 'string') {
    locale = this.locale;
  }

  return this._i(key, locale, this._getMessages(), null, values);
};

VueI18n.prototype._tc = function _tc(
key,
_locale,
messages,
host,
choice)
{
  var ref;

  var values = [],len = arguments.length - 5;
  while (len-- > 0) {values[len] = arguments[len + 5];}
  if (!key) {return '';}
  if (choice === undefined) {
    choice = 1;
  }

  var predefined = { 'count': choice, 'n': choice };
  var parsedArgs = parseArgs.apply(void 0, values);
  parsedArgs.params = Object.assign(predefined, parsedArgs.params);
  values = parsedArgs.locale === null ? [parsedArgs.params] : [parsedArgs.locale, parsedArgs.params];
  return this.fetchChoice((ref = this)._t.apply(ref, [key, _locale, messages, host].concat(values)), choice);
};

VueI18n.prototype.fetchChoice = function fetchChoice(message, choice) {
  /* istanbul ignore if */
  if (!message && typeof message !== 'string') {return null;}
  var choices = message.split('|');

  choice = this.getChoiceIndex(choice, choices.length);
  if (!choices[choice]) {return message;}
  return choices[choice].trim();
};

/**
    * @param choice {number} a choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
    * @param choicesLength {number} an overall amount of available choices
    * @returns a final choice index
   */
VueI18n.prototype.getChoiceIndex = function getChoiceIndex(choice, choicesLength) {
  // Default (old) getChoiceIndex implementation - english-compatible
  var defaultImpl = function defaultImpl(_choice, _choicesLength) {
    _choice = Math.abs(_choice);

    if (_choicesLength === 2) {
      return _choice ?
      _choice > 1 ?
      1 :
      0 :
      1;
    }

    return _choice ? Math.min(_choice, 2) : 0;
  };

  if (this.locale in this.pluralizationRules) {
    return this.pluralizationRules[this.locale].apply(this, [choice, choicesLength]);
  } else {
    return defaultImpl(choice, choicesLength);
  }
};

VueI18n.prototype.tc = function tc(key, choice) {
  var ref;

  var values = [],len = arguments.length - 2;
  while (len-- > 0) {values[len] = arguments[len + 2];}
  return (ref = this)._tc.apply(ref, [key, this.locale, this._getMessages(), null, choice].concat(values));
};

VueI18n.prototype._te = function _te(key, locale, messages) {
  var args = [],len = arguments.length - 3;
  while (len-- > 0) {args[len] = arguments[len + 3];}

  var _locale = parseArgs.apply(void 0, args).locale || locale;
  return this._exist(messages[_locale], key);
};

VueI18n.prototype.te = function te(key, locale) {
  return this._te(key, this.locale, this._getMessages(), locale);
};

VueI18n.prototype.getLocaleMessage = function getLocaleMessage(locale) {
  return looseClone(this._vm.messages[locale] || {});
};

VueI18n.prototype.setLocaleMessage = function setLocaleMessage(locale, message) {
  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    this._checkLocaleMessage(locale, this._warnHtmlInMessage, message);
    if (this._warnHtmlInMessage === 'error') {return;}
  }
  this._vm.$set(this._vm.messages, locale, message);
};

VueI18n.prototype.mergeLocaleMessage = function mergeLocaleMessage(locale, message) {
  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    this._checkLocaleMessage(locale, this._warnHtmlInMessage, message);
    if (this._warnHtmlInMessage === 'error') {return;}
  }
  this._vm.$set(this._vm.messages, locale, merge(this._vm.messages[locale] || {}, message));
};

VueI18n.prototype.getDateTimeFormat = function getDateTimeFormat(locale) {
  return looseClone(this._vm.dateTimeFormats[locale] || {});
};

VueI18n.prototype.setDateTimeFormat = function setDateTimeFormat(locale, format) {
  this._vm.$set(this._vm.dateTimeFormats, locale, format);
};

VueI18n.prototype.mergeDateTimeFormat = function mergeDateTimeFormat(locale, format) {
  this._vm.$set(this._vm.dateTimeFormats, locale, merge(this._vm.dateTimeFormats[locale] || {}, format));
};

VueI18n.prototype._localizeDateTime = function _localizeDateTime(
value,
locale,
fallback,
dateTimeFormats,
key)
{
  var _locale = locale;
  var formats = dateTimeFormats[_locale];

  // fallback locale
  if (isNull(formats) || isNull(formats[key])) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn("Fall back to '" + fallback + "' datetime formats from '" + locale + "' datetime formats.");
    }
    _locale = fallback;
    formats = dateTimeFormats[_locale];
  }

  if (isNull(formats) || isNull(formats[key])) {
    return null;
  } else {
    var format = formats[key];
    var id = _locale + "__" + key;
    var formatter = this._dateTimeFormatters[id];
    if (!formatter) {
      formatter = this._dateTimeFormatters[id] = new Intl.DateTimeFormat(_locale, format);
    }
    return formatter.format(value);
  }
};

VueI18n.prototype._d = function _d(value, locale, key) {
  /* istanbul ignore if */
  if ( true && !VueI18n.availabilities.dateTimeFormat) {
    warn('Cannot format a Date value due to not supported Intl.DateTimeFormat.');
    return '';
  }

  if (!key) {
    return new Intl.DateTimeFormat(locale).format(value);
  }

  var ret =
  this._localizeDateTime(value, locale, this.fallbackLocale, this._getDateTimeFormats(), key);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn("Fall back to datetime localization of root: key '" + key + "'.");
    }
    /* istanbul ignore if */
    if (!this._root) {throw Error('unexpected error');}
    return this._root.$i18n.d(value, key, locale);
  } else {
    return ret || '';
  }
};

VueI18n.prototype.d = function d(value) {
  var args = [],len = arguments.length - 1;
  while (len-- > 0) {args[len] = arguments[len + 1];}

  var locale = this.locale;
  var key = null;

  if (args.length === 1) {
    if (typeof args[0] === 'string') {
      key = args[0];
    } else if (isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }
      if (args[0].key) {
        key = args[0].key;
      }
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string') {
      key = args[0];
    }
    if (typeof args[1] === 'string') {
      locale = args[1];
    }
  }

  return this._d(value, locale, key);
};

VueI18n.prototype.getNumberFormat = function getNumberFormat(locale) {
  return looseClone(this._vm.numberFormats[locale] || {});
};

VueI18n.prototype.setNumberFormat = function setNumberFormat(locale, format) {
  this._vm.$set(this._vm.numberFormats, locale, format);
};

VueI18n.prototype.mergeNumberFormat = function mergeNumberFormat(locale, format) {
  this._vm.$set(this._vm.numberFormats, locale, merge(this._vm.numberFormats[locale] || {}, format));
};

VueI18n.prototype._getNumberFormatter = function _getNumberFormatter(
value,
locale,
fallback,
numberFormats,
key,
options)
{
  var _locale = locale;
  var formats = numberFormats[_locale];

  // fallback locale
  if (isNull(formats) || isNull(formats[key])) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn("Fall back to '" + fallback + "' number formats from '" + locale + "' number formats.");
    }
    _locale = fallback;
    formats = numberFormats[_locale];
  }

  if (isNull(formats) || isNull(formats[key])) {
    return null;
  } else {
    var format = formats[key];

    var formatter;
    if (options) {
      // If options specified - create one time number formatter
      formatter = new Intl.NumberFormat(_locale, Object.assign({}, format, options));
    } else {
      var id = _locale + "__" + key;
      formatter = this._numberFormatters[id];
      if (!formatter) {
        formatter = this._numberFormatters[id] = new Intl.NumberFormat(_locale, format);
      }
    }
    return formatter;
  }
};

VueI18n.prototype._n = function _n(value, locale, key, options) {
  /* istanbul ignore if */
  if (!VueI18n.availabilities.numberFormat) {
    if (true) {
      warn('Cannot format a Number value due to not supported Intl.NumberFormat.');
    }
    return '';
  }

  if (!key) {
    var nf = !options ? new Intl.NumberFormat(locale) : new Intl.NumberFormat(locale, options);
    return nf.format(value);
  }

  var formatter = this._getNumberFormatter(value, locale, this.fallbackLocale, this._getNumberFormats(), key, options);
  var ret = formatter && formatter.format(value);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn("Fall back to number localization of root: key '" + key + "'.");
    }
    /* istanbul ignore if */
    if (!this._root) {throw Error('unexpected error');}
    return this._root.$i18n.n(value, Object.assign({}, { key: key, locale: locale }, options));
  } else {
    return ret || '';
  }
};

VueI18n.prototype.n = function n(value) {
  var args = [],len = arguments.length - 1;
  while (len-- > 0) {args[len] = arguments[len + 1];}

  var locale = this.locale;
  var key = null;
  var options = null;

  if (args.length === 1) {
    if (typeof args[0] === 'string') {
      key = args[0];
    } else if (isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }
      if (args[0].key) {
        key = args[0].key;
      }

      // Filter out number format options only
      options = Object.keys(args[0]).reduce(function (acc, key) {
        var obj;

        if (numberFormatKeys.includes(key)) {
          return Object.assign({}, acc, (obj = {}, obj[key] = args[0][key], obj));
        }
        return acc;
      }, null);
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string') {
      key = args[0];
    }
    if (typeof args[1] === 'string') {
      locale = args[1];
    }
  }

  return this._n(value, locale, key, options);
};

VueI18n.prototype._ntp = function _ntp(value, locale, key, options) {
  /* istanbul ignore if */
  if (!VueI18n.availabilities.numberFormat) {
    if (true) {
      warn('Cannot format to parts a Number value due to not supported Intl.NumberFormat.');
    }
    return [];
  }

  if (!key) {
    var nf = !options ? new Intl.NumberFormat(locale) : new Intl.NumberFormat(locale, options);
    return nf.formatToParts(value);
  }

  var formatter = this._getNumberFormatter(value, locale, this.fallbackLocale, this._getNumberFormats(), key, options);
  var ret = formatter && formatter.formatToParts(value);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key)) {
      warn("Fall back to format number to parts of root: key '" + key + "' .");
    }
    /* istanbul ignore if */
    if (!this._root) {throw Error('unexpected error');}
    return this._root.$i18n._ntp(value, locale, key, options);
  } else {
    return ret || [];
  }
};

Object.defineProperties(VueI18n.prototype, prototypeAccessors);

var availabilities;
// $FlowFixMe
Object.defineProperty(VueI18n, 'availabilities', {
  get: function get() {
    if (!availabilities) {
      var intlDefined = typeof Intl !== 'undefined';
      availabilities = {
        dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== 'undefined',
        numberFormat: intlDefined && typeof Intl.NumberFormat !== 'undefined' };

    }

    return availabilities;
  } });


VueI18n.install = install;
VueI18n.version = '8.14.1';var _default =

VueI18n;exports.default = _default;

/***/ }),

/***/ 116:
/*!***********************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FaLittle%2FdataReport%2FdataReport"} ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _dataReport = _interopRequireDefault(__webpack_require__(/*! ./modules/aLittle/dataReport/dataReport.vue */ 117));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_dataReport.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 12:
/*!***********************************!*\
  !*** E:/MB/mb-yun/store/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 13));
var _state = _interopRequireDefault(__webpack_require__(/*! ./modules/state.js */ 14));
var _mutations = _interopRequireDefault(__webpack_require__(/*! ./modules/mutations.js */ 18));
var _actions = _interopRequireDefault(__webpack_require__(/*! ./modules/actions.js */ 22));
var _getters = _interopRequireDefault(__webpack_require__(/*! ./modules/getters.js */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
_vue.default.use(_vuex.default);

var store = new _vuex.default.Store({
  actions: _actions.default,
  getters: _getters.default,
  state: _state.default,
  mutations: _mutations.default });var _default =


store;exports.default = _default;

/***/ }),

/***/ 124:
/*!***********************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FpublishPurchase%2FpublishPurchase"} ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _publishPurchase = _interopRequireDefault(__webpack_require__(/*! ./modules/publishPurchase/publishPurchase.vue */ 125));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_publishPurchase.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 13:
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
     true &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ( true && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/***/ }),

/***/ 130:
/*!***************************************************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FpublishPurchase%2FselectTemplate%2FpublishPurchaseFinish%2FpublishPurchaseFinishShare"} ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _publishPurchaseFinishShare = _interopRequireDefault(__webpack_require__(/*! ./modules/publishPurchase/selectTemplate/publishPurchaseFinish/publishPurchaseFinishShare.vue */ 131));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_publishPurchaseFinishShare.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 138:
/*!*********************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FcreateBusiness%2FselectTemplate"} ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _selectTemplate = _interopRequireDefault(__webpack_require__(/*! ./modules/createBusiness/selectTemplate.vue */ 139));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_selectTemplate.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 14:
/*!*******************************************!*\
  !*** E:/MB/mb-yun/store/modules/state.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;


var _state = _interopRequireDefault(__webpack_require__(/*! ./COMMON/state.js */ 15));
var _state2 = _interopRequireDefault(__webpack_require__(/*! ./RHX/state.js */ 16));
var _state3 = _interopRequireDefault(__webpack_require__(/*! ./MBBO/state.js */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                                * Created by 菅双�on 2019/07/25.
                                                                                                                                                                */console.log(_state2.default, _state3.default);var state = Object.assign(_state.default, _state2.default, _state3.default);var _default =
state;exports.default = _default;

/***/ }),

/***/ 144:
/*!********************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FcreateBusiness%2FtemplatePro%2FtemplatePro"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _templatePro = _interopRequireDefault(__webpack_require__(/*! ./modules/createBusiness/templatePro/templatePro.vue */ 145));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_templatePro.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 15:
/*!**************************************************!*\
  !*** E:/MB/mb-yun/store/modules/COMMON/state.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * Created by 菅双鹤 on 2019/07/25.
                                                                                                      */
// ----CO公共组件
var state = {
  emptyCO: { // 空状态
    show: false,
    text: '当前没有数据！' },

  quickNavCO: {
    show: false } };var _default =


state;exports.default = _default;

/***/ }),

/***/ 152:
/*!**************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FcreateBusiness%2FtemplateFinish%2FtemplateFinish"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _templateFinish = _interopRequireDefault(__webpack_require__(/*! ./modules/createBusiness/templateFinish/templateFinish.vue */ 153));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_templateFinish.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 16:
/*!***********************************************!*\
  !*** E:/MB/mb-yun/store/modules/RHX/state.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * Created by 菅双鹤 on 2019/07/25.
                                                                                                      */
// RHX代表如何秀特有组件
var state = {
  selectTemplateRHX: { // 选择模版(1/4)
    tabItems: 1, // 顶部tab切换  
    total: { // 全部
      loadingText: '加载更多...',
      search: { // 搜索
        pageNum: 0, // 总页数
        searchCondition: { // 分页属性
          page: '1' } },


      listData: '' // 列表数据
    },
    product: { // 产品
      loadingText: '加载更多...',
      search: { // 搜索
        pageNum: 0, // 总页数
        searchCondition: { // 分页属性
          page: '1' } },


      listData: '' // 列表数据
    },
    made: { // 定制
      loadingText: '加载更多...',
      search: { // 搜索
        pageNum: 0, // 总页数
        searchCondition: { // 分页属性
          page: '1' } },


      listData: '' // 列表数据
    },
    infor: { // 资讯
      loadingText: '加载更多...',
      search: { // 搜索
        pageNum: 0, // 总页数
        searchCondition: { // 分页属性
          page: '1' } },


      listData: '' // 列表数据
    } } };var _default =


state;exports.default = _default;

/***/ }),

/***/ 160:
/*!*******************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FcreateBusiness%2FtemplateFinish%2FtemplateFinishShare"} ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _templateFinishShare = _interopRequireDefault(__webpack_require__(/*! ./modules/createBusiness/templateFinish/templateFinishShare.vue */ 161));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_templateFinishShare.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 168:
/*!******************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FcreateBusiness%2FtemplateFinish%2FtemplateFinishMade"} ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _templateFinishMade = _interopRequireDefault(__webpack_require__(/*! ./modules/createBusiness/templateFinish/templateFinishMade.vue */ 169));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_templateFinishMade.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 17:
/*!************************************************!*\
  !*** E:/MB/mb-yun/store/modules/MBBO/state.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * Created by 菅双鹤 on 2019/07/25.
                                                                                                      */

var state = {
  empty: { // 空状态
    emptyShow: false,
    emptyText: '当前没有数据！' },

  addressBs: false, // 地址模块
  home: { // 主页
    tabItems: 2,
    publishShow: false // 判断发布组件是否显示
  },
  find: {
    message: [] },

  aLittle: { // 陌拜一下
    liuLiangOrPutInTitle: 1, // 默认显示流量数据 
    liuLiangOrPutInTitle2: 1, // 默认显示流量数据 
    customTime: {
      show: false, // 默认不显示
      selectTime: false // 默认没有选择时间
    },
    customTime2: {
      show: false, // 默认不显示
      selectTime: false // 默认没有选择时间
    },
    businessPutIn: { // 投放商机组件
      show: false // 默认不显示
    },
    //首页 投放商机列表
    putInBusinessData: [],
    Putinname: [],
    putInstate: [] },

  my: { //我的基本信息
    headers: [],
    personAndCompany: {},


    Refresh: [],
    //我的说明书列表
    product: [],
    //说明书产品列表
    chan: [],
    //说明书产品定制
    ding: [],
    //说明书产品定制
    zi: [],
    //我的说明书详情
    detailed: [],
    //我的订单 供应订单
    Supply: [],
    //我的订单 采购订单
    Purchase: [],
    // 我的采购列表全部
    PurchaseA: [],
    // 我的采购列表待发布
    PurchaseB: [],
    // 我的采购列表采购中
    PurchaseC: [],
    // 我的采购列表已停止
    PurchaseD: [],
    // 我的采购列表已完成
    PurchaseE: [],
    // 我的采购列表已下架
    PurchaseF: [],
    // 公司认证 地理位置
    clickCity: [],
    // 公司认证 证件有效期
    Effective: [],
    //公司 tetle切换
    PersonTitle: [],
    //公司认证详情
    Authen: [],
    //我的设置 地址管理
    address: [],
    //我的设置 所在地区
    ress: [] },

  news: {
    //收到留言列表
    Message: [],
    // 系统通知列表
    system: [],
    //消息未读数
    num: [],
    //发出留言列表
    Alr: [] },

  publish: {
    publishPurchase: { // 采购模板
      templetType: 0, // 采购摸吧类型 0代表简单模板，1代表普通模板
      moreSet: false, // 运费及更多设置 默认不显示
      previceCaiGou: false, // 判断预览状态， 默认是编辑状态
      imgList: {
        imageData: [],

        serverUrl: 'https://img01.iambuyer.com/imgup/upLoad/fileUpload' // 图片上传地址
      }, // 附件列表
      caiGouList: { // 采购列表数据
        paraList: [],

        requList: [],

        imgList: [],
        userId: 760,
        purcTitle: '',
        purcSpec: '',
        purcCount: 1,
        purcUnit: '',
        purcPcode: '',
        purcCcode: '',
        purcCcodeStr: '', // 省市区页面展示
        purcContent: '',
        purcDefault: '0', // 默认模板
        purcInvo: '1', // 默认含税
        purcFrei: '1', // 默认含运费
        purcEndTime: '',
        purcReceTime: '0-0-0',
        purcState: '',
        purcType: '0' // 0简单采购 1参数采购
      } } } };var _default =



state;exports.default = _default;

/***/ }),

/***/ 176:
/*!************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FcreateBusiness%2FwebView%2FwebView"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _webView = _interopRequireDefault(__webpack_require__(/*! ./modules/createBusiness/webView/webView.vue */ 177));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_webView.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 18:
/*!***********************************************!*\
  !*** E:/MB/mb-yun/store/modules/mutations.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;


var _mutations = _interopRequireDefault(__webpack_require__(/*! ./COMMON/mutations.js */ 19));
var _mutations2 = _interopRequireDefault(__webpack_require__(/*! ./RHX/mutations.js */ 20));
var _mutations3 = _interopRequireDefault(__webpack_require__(/*! ./MBBO/mutations.js */ 21));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                                        * Created by 菅双��on 2019/07/25.
                                                                                                                                                                        */var mutations = Object.assign(_mutations.default, _mutations2.default, _mutations3.default);var _default = mutations;exports.default = _default;

/***/ }),

/***/ 182:
/*!****************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2Fnews%2FnewsList%2FnewsList"} ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _newsList = _interopRequireDefault(__webpack_require__(/*! ./modules/news/newsList/newsList.vue */ 183));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_newsList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 188:
/*!***********************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FInstructionsPrice%2Fmyproduct%2Fmyproduct-shu"} ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _myproductShu = _interopRequireDefault(__webpack_require__(/*! ./modules/InstructionsPrice/myproduct/myproduct-shu.vue */ 189));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_myproductShu.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 1880:
/*!************************************************************************!*\
  !*** E:/MB/mb-yun/components/common/Evaluating/static/imgs/st_pic.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAK0klEQVR4XrVciVIbOxCUOXOQVAry/1/2PgFTSTgSY7BftXCb9ngOrQFXucBerUZq9fSMjvVsvV7/11r72Vp7bq2t2we9VqtVs+/ZbNbW63V/2xeu4Y3X8fFxOzo66m/9/gOaCoPHrbXr2Xq9vm2tXby3EXaYYDw/P4cgjNgmIPgLoPD+QJDuAMy8tXY50riRMgAEIOBNUPAdR9+rQxmTlcO9LEtgTk5OOkh4VfeOtH9T5gbAXLfWribc5BZFgwHE09NTB4Ud4N8RYFAW7qIvC6oHIhn0jiyavxkYArJcLjsofCkQVkN4zQMtKmtHw9MlgHp2drZ1szcM9uHAsGEEBGzRjmbAeA22YGkZj20KjLUL5gCgN2jQYcBQRwAKAMlelhWeK3juYsHQMlEdWgbsgf6cnp4eoj3TgYFxAIL3yCvSCGVIBoIKLgU2AsYL+WSP1a6i7dOAQYMeHx93tIQNH9GUqREpE+4pugVQzs/Pp7jWGDCZwI4KaOZSkeZ4zGBZe03r91hKcJgkvgtjEH7BFCuwI9oSiWjUadupyEYEtOeWrANuBc1hWE/aXzMGYKj7RPlIxYgssmSdGbVXAajgIGIVzMmBUU3J8osRMZySlWYuZF0py4lU/3Tg1K0CQGNgUBESNrCF9M7or4mdBZHRpIpinhtxolnd6wUBDxjWg1BOQXbq9oFBA6Eri8ViJ2nT0YoarN/b//V+zqX4l6DgHuYgVguqKDXidloH9CbIc3xgoCsABY1WJlhkI2bYDihAyH9YN5PDiCkUSwpmJswZaLDDLNiW+/Tp03YSKv3bBwY3agKXGYxCp0d7uOW/f/963SMRRUEHQKC9Ut+G52wAtT12MAOX2gdGXWhKSPUAxCihPgDCcK96482PvO/IFACEESb9rfZFrkut8QYM9yBKASBxxV1gYAidQGdGRC+LNLgGltzf3+8sQ1hKE6iImdp5lvny5UsHyDJhRPd0YFgfNA31ybRhFxjSHTegUETXirYKCuq0AFYhNstJCBTA4Qy60j7PnnUpuCmYuHm9AoOCEEV0hMDYKBR9tg2D2N3d3W3nVAqMl8yNNFyZRXC+fv3awfGi5WjeRICM1rwCw5yFkcLzdQVADVs3gPsA5ExPMjAyN+Y1Dt7FxcU2xR+JWpbtuIf3CWtegFmv11dM+z1fV4PRdRiE+6EesMVrpNfh6Lsokmh5DCIYA3DU9SsJ8HQG3wlrXoGhG1X6QYWPqApQuFZjO12xUBs8AoyyBp3KolQl8rS3yWtegHl6eroi9aPoEAmcAgRAAIzt4AjFI6Cz9vAaXODz58/bJmb6oqLryQEYeHZ29gLM4+NjdyWvQqvetjJlwcPDQ9cWhuRMrD2wbKMr28puuBNYUwUIr079DnV0YJ6fn68Xi8WVrt1mjY5CLXIfsIU5kDba06jIZSPbatfTJTBGc5uK+RYgtmez0zCfLZfLzpiooHUhHRF1GTAO0ciC4O0TRVqi+hV1zOoI7sGgwp0QvkdzpKi/uL8zZrFYXC+Xy+2GGydcdsS9MKcd/Pv3b8+aR8VbxTAL/V6EseXRZkwXvn371v964FXiq3aOj4/3gVFG6Oh7iZmyCWyhTk0Rvyo9IIvUlgWG0YkJHz5XWuINNOudzWbz2f39fc9jsqhj/d4TybcCo+zzIkfl6ugUpwkRmJXu8L6jo6MYmEhbrFEKIYDR/KXSJs9VvTxnJPfhwOkUQd0piqSqaSaazWd3d3c7m/qZKFnhta4UAeNFJY0smeuNCDJ1ESEbE0FrzxPkCLhNn/aBGWmIQbd/pCupS3juWWlVleh59QMYRD8Co6lHFOajrDwFxnOXzLVwDREJkcmKmseyiiH2Ho9dOuIAAokZotKUYySJO78yxguLUSctSGi4Th6rtZwpwDDiWOFUl8f/cCEwJmJkpFWBm+0DU4HhKTsqR8Z7e3vbky0vMx0FY0S0o8wXSR5dzeYylYua67saMxrOosYzyYMRbyT0vhFbnkZZjaG+MLmrdE13DDyX3WpMlMdYnak0RlmTZZ6eftk8KbPl1Q2mIIepgIzyI4dN89nDw8P1arUKE7yokR41YRgzbOiN94ryFC+BzKiPazxggCmAhumIlR4oOkhqr2e+ETCVr0cNxxIpZtkMmdEk0hPwqKFeW9BR2MCMGmyxYVndpAjNXvUvcyXMrivRjRrnAQStYejmdS3nRUB7PRNrgqITx8rVLVBZ+T6J5LKDXQSPgFDVt0KoxrloxTJVVNC6Is3B9wQVTMQUQLY8uvkR0CNbtHt6evq6UGUXmLSTGe29DlMDuP5r/DcUSQXdy0cqUBSYUVf1pg/n5+fz2Wq16q6UzXPUCP21yksYpeBSepTEE2Bbvyeg+I7rLtAURKJoXpcBlEkG6tvsk7+s+WKhyu4DZT7IBhHtDCR0BqDr1m+V41jbzD3gNhBbXdu1IEbRspIA9mlnMRzhGg33zuxmhhT9KGXn/TwswM19W29kh6OINV09y+JpidUOC0bFFrQBTDw5OfH3lTS8VcBEodDSnGEbs3BMHfCZB4O8PIaRB4BCZL9//773fMKoC3p649nkaYqex/AhCx7oiUQr8vsqDOsoAQww8/fv39s5lQ3n6qa8FwkcwGFUyiKcHSjLkijRQzk5YbW7qQ+aV6twlgkjYqrRBDbAGE8gvTCN+iG2eI8ep806b0M6P/Nw0obZ/jEQ9VXeWAHg6Y2tB3VweSITd14jUNAXvJUxUUTKXDuTBYiuaNguMBgRinAUObIGaYcsUKjPA8bTMwJCWx4wHuOyaGeDA+/H9zw4xAfCWmv7J6p4NMxDPqNo5GLWx5Ux0ehagAmMB0YG0Ah4aDePfwij/MOJqjVZSB4RZJbhU2+omzlTJvQKNCiOxvM098jE1HN9L1AYbWGT4uOs1qUiEKyOKEUx0+ajgPo4oHWfKAdi3aotDPP2uQDrfnpvFJn4RJyTMMYHoBGdppyAYGcBBI/DahRR98j2szMtsB2Ezc3phP6X27NZ8qfXJh+A5qjzoHIV/tBAe47XdtBGBDvCo3rDcja08/kAewzetp2fDzoyz5EZOSGOhoIhPLaqoxolYlZbPOArMbeuzfJ66sGLoIxCKCdRyDZp7LEcnUdpZwkKV+zstShXidxFdaFikAcu60VOgkxZt3HoBdSV4pmlGhhUqA9y0QAabg8LjTJE64jY4+U3EdCqXxYcrWcQFFQ3BgyMKTg0BqZAoAcfp3P75UUTLehpk1eRhmeCwxPkdJ8Jz2SPAaOaw2OvcC8sX46A4rmOjrIXWr00ILvHAoiB1B2EQlOma4xHdYBzc3PTEzX+UkeUi1iXsBtekd5McUsrxPiMKIm2XV5e9nmWTREKt5zGGB0xsAXLB4hIZI2XWVbAjOhGNJ+yrGIiyCVQrOHwcHRlx1w/DBiKJ0bl169f260Sb1Sy/MVjhc1PvHyH9tUFCQr+wm1+/PiRPdpX4XQ4MKo7yGH+/Pmz90TcRPr2Ki0wUQ/oggoI7GEPO9rHrtCQ628Hhp2B2GFHAC7G33wgMFVnp+iJnirVLBZ5C6LQwDPVI/h0YN71h3W4bMENN3u6iXoxkgzazJXsoAthrgNAIK7RzsEICk6Z/sM6H/JTTACE8yf7LKQnmlF4JhgAkpNGaAgfARxJFw4Ap/8U04f/eBc6p5NM/XmVaB2XQOAvmIHkbLO1MTX0TsFl++Nd/wNHS0ymp12lCQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 1881:
/*!*************************************************************************!*\
  !*** E:/MB/mb-yun/components/common/Evaluating/static/imgs/st_star.png ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAA8hJREFUWAntmEtrU0EUx/MyCnYXQSm4CCVam4eoKIqCoH4AP4ErRayCdaFVsAq2i1oXWvCJ7ty49FsoFS3mUUqDZOHGjeiiDVrTxN+JSZgk986d29yrEXphmJkzZ/7zy7lnpnMbCPjwZLPZ41J8kA5E/BBF81ZD96TX+iGvBQuFwjE0T0jJ5/NHvdb3HLharTajG6jVare9Bg56KbiwsHC4Uqm8UTUjkciRkZGRt6qtl7anEQa2K6JWtl6APYsw+XqQdJizggmFQodSqdQ7qzG3Ns8iTL62crcTQjfW6evU9yTC5O5+Xv173WLk8gFy+YPOx2TMkwgDaxvdJoSJT9NXV/ccYXJ3L698nqLVCgaDNco+cvmjDshprOcIS346wQqE+FAmnICcxrVRcZpM7qbW1tayJsCiJVEOh8MZcjnvpG03bgRcLBY3r66uDiGS4OjaBWCCxRP007RjduJWduZ9xZ5jXpF2kSNviX4xGo1+SiQSP63mqLYWMAKbFhcX42yOOgx9FWwn/Z7TR124sw18Fdvn5g+hvyRtTpfi8PBwif4vmVMH5ip4nfYUJSzGPnwqME1kMpnpOjC/JMhuf0R9oQ9hJfefcLpcpP7zmqWRTqdHqWf7DViYGmw1YWvLSwbGsM30EfRMg6mF1AYsVvJknEry+V8/Uw2WNo7WKdFmpcNGlEP+Tqf9L/VvATtptZYtsDizEa9x7t61muiXjXN5nA1mm5Za4Ab0GND3/QJUdYG9AuwD1dbZdgSWCUR6lCPvoRx/nQJe9OWUolwC9rGTnjEA0GcBfkbp2qhOi+jGAa1SzgP7QufXHDNeXAQRdoxAU9i0Fk1TWNE0BhZnortNai8f9oery5Nb4KSXsA2tlBtNY2CiG+H17XYjbuIrmqJt4is+xsBc1uW6GTUVNvUTTdE29TcGJtdcvTpTAPFzo20MzKvzDdiNtjEwr843YDfaxsC8OSNgojXHh+YpKdI2TA0jbdEy+ktXKpW2LC8vrxAJ3Q8soHeTW9ZrFZJb32n6cl21PRL5YdWBgYGt8Xj8hzrXqq0DaPmXy+U9Glj5QDzDRRvWdlgREJuMiQ/dUktUaYi2rKGYbJtG55/VLgbgC2UymUw+p65/0dqtwrh8Eb8E7BX/oT9HPUHZofo31phXbVZtowgjrubYN4RuxGKxIbldOcGqi4qvzJG5okERrfrTsUbT3FUbRZiFUgiuUM+Sa/fIte9dSi4Mg4ODZdyn2RtP2RtX0b4sa7iQ0LvKl0cul9uu91r/qGjLGutX2Ji5EYH/JwK/AUPigdFNE4sdAAAAAElFTkSuQmCC"

/***/ }),

/***/ 1882:
/*!********************************************************************************!*\
  !*** E:/MB/mb-yun/components/common/Evaluating/static/imgs/st_star_active.png ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAABChJREFUWAntmUlME2EUx7/3TesGB7dETZRIsBoiahA0GlrU6MnERM+2nEyMSyIe3BJBoxxQD0rimniiDVc9eSWBIgRF4naxGoy4cFE4gFs73+d7I4XSzvINnSomTtLM8Jb/++XNzPtmBsYKsPk62rbRrwDSzFcIUcn0xnHdnV7rg9eCvnhbUIhUJ+lyxoOp2nCXlzW4l2KkJeVEd5kEec5rfU877I/HtuhCdGdCapxvTQbDPZm2fI497bCQuR01s+UD7FmH/V2xTboues1gNI1vTtaEH5n53No867AQIj0ZchjsfDnBDgZPOuzvjm7Uk7LPrpbmh6rk1sgTuxgVnycdFklp2d00hEpMOtZun3eH/Z3RDTpj/TjP7LUApMZYZTIUeWoH5OTLu8OCYXedYIkCY4RkDU5ATn77rjhkz+pqrUgJeKYETFrYZR+X63/W1L1wkLZ0KwGvSjyY/e7TlzJdg4CUYjVIGcDqeCzXofIiS3Vzx2cAeI4tT0iABAB/pekyUbJs4ZvXgd0/zFMmrRPAVY8f+198e12a4kkEgQAwuRo7F5AIhuIrmMRHg0JuwAQ2YRDrJvBMJLDuKzwhCZ/wJyrmrhroq65OUnkDmMdjp5mQTQiG98VM3CDFODSIYLjZAMZTC76u2A0p5KEZicvhVqomfAQvJWmcZjrQg5HDHKBlpgETE7ERI7FNuS5ToUg9B355pkATCzFl8kwBJkcqFD6FgXg9/92NGIglm2JiSmQ7eDzagDfihWz7H/mbQ6MIRi6a1bIEpmDe0XoSd5fMEgtoOyVq6ywvS1tggsKRV8+EuFpAwElpzo/j6Lo2acg9cgSmFN4ZO4wz+rryEpxbx95iTAA4KkLhm/aB4wuHUxD5tXj0AM7rO56veLjC4cg6iKPrrgpHzpSwSiJBkODYAat8KztpqsKShjKwURDYYqvC07aDu4cnV8BSsrXTBrNIRM0KC5epWRl4u2z34aPSGlOVfIyoaWgraigDP+z8QI+bsxR11cNQ09BWzFAG1rl0deoU6xthbrSVgUG4u9bcALvRVgbGd+KCddiNtjqw4t2MS2cvfmbdRT86Vum0m0mhtDSvHGif8+794JjtKgfsJS4CZ/XayP1MSK0juhc/uzZhrvVIxNWuZPmKorelO75n5podK3X4w6ehcmtYGADQ6hqDkfXZsFSQbOSjGHwSGDCDIG2jhqlzqlEJWOjC7PodYsCPVM4rX6OH9kfPA946Fhv5KIZiKQfDhrJDLWpkh6ktzfjqPQkMMMw4P7N03oIyerpKv37nKJsYKJZyKJc08HV+OB02pUbaaLJX+qcMfjxBYBjjnLUUFxVfGancN/LRREzV9LF6z1eMbZ7ff+/26NjoCSHYsd81VBUc4ujNo6inbYlD2LTdpD3+djNtjf+J/zvwr3TgF/SHbpKGGVhPAAAAAElFTkSuQmCC"

/***/ }),

/***/ 19:
/*!******************************************************!*\
  !*** E:/MB/mb-yun/store/modules/COMMON/mutations.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * Created by 菅双��on 2019/07/25.
                                                                                                      */

var mutations = {
  SetEmptyCO: function SetEmptyCO(state, info) {
    console.log(info, 'SetEmptyCO');
    state.emptyCO = info;
  },
  setQuickNavCO: function setQuickNavCO(state, info) {
    console.log(info, 'setQuickNavCO');
    state.quickNavCO = info;
  } };var _default =

mutations;exports.default = _default;

/***/ }),

/***/ 196:
/*!**************************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FInstructionsPrice%2Fmyproduct%2Fproduct-book%2Fproduct-books"} ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _productBooks = _interopRequireDefault(__webpack_require__(/*! ./modules/InstructionsPrice/myproduct/product-book/product-books.vue */ 197));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_productBooks.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    {
      if(vm.$scope && vm.$scope.is){
        return vm.$scope.is
      }
    }
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    vm.mpHost !== 'mp-toutiao' && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    vm.mpHost !== 'mp-toutiao' && initProvide(vm); // resolve provide after data/props
    vm.mpHost !== 'mp-toutiao' && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  vm.mpHost !== 'mp-toutiao' && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err) {
    console.error(err);
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope) {
        return this.$scope[method](args)
      }
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string,number
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onError',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!***************************************************!*\
  !*** E:/MB/mb-yun/store/modules/RHX/mutations.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * Created by 菅双��on 2019/07/25.
                                                                                                      */

var mutations = {
  // ---------------------------选择模版(1/4)------------------------------------------
  setSelectTemplateIndexRHX: function setSelectTemplateIndexRHX(state, info) {// tab切换
    console.log(info, 'setSelectTemplateIndexRHX');
    state.selectTemplateRHX.tabItems = info;
  },
  setSTemTotalRHX: function setSTemTotalRHX(state, info) {// 全部
    console.log(info, 'setSTemTotalRHX');
    state.selectTemplateRHX.total = info;
  },
  setSTemProductRHX: function setSTemProductRHX(state, info) {// 产品
    console.log(info, 'setSTemProductRHX');
    state.selectTemplateRHX.product = info;
  },
  setSTemMadeRHX: function setSTemMadeRHX(state, info) {// 定制
    console.log(info, 'setSTemMadeRHX');
    state.selectTemplateRHX.made = info;
  },
  setSTemInforRHX: function setSTemInforRHX(state, info) {// 资讯
    console.log(info, 'setSTemInforRHX');
    state.selectTemplateRHX.infor = info;
  } };var _default =


mutations;exports.default = _default;

/***/ }),

/***/ 204:
/*!************************************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FInstructionsPrice%2Fmyproduct%2Fproduct-book%2FdataReport%2FdataReport"} ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _dataReport = _interopRequireDefault(__webpack_require__(/*! ./modules/InstructionsPrice/myproduct/product-book/dataReport/dataReport.vue */ 205));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_dataReport.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 21:
/*!****************************************************!*\
  !*** E:/MB/mb-yun/store/modules/MBBO/mutations.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * Created by 菅双��on 2019/07/25.
                                                                                                      */

var mutations = {
  setEmptyShow: function setEmptyShow(state, info) {
    console.log(info, 'setEmptyShow');
    state.empty.emptyShow = info;
  },
  setAddressBsShow: function setAddressBsShow(state, info) {
    console.log(info, 'setAddressBsShow');
    state.addressBs = info;
  },
  setHome: function setHome(state, info) {
    console.log(info, 'setHome');
    state.home.tabItems = info;
  },
  setmessage: function setmessage(state, info) {
    console.log(info, 'setmessage');
    state.find.message = info;
  },
  setPublishShow: function setPublishShow(state, info) {
    console.log(info, 'setPublishShow');
    state.home.publishShow = info;
  },
  setLiuLiangOrPutInTitle: function setLiuLiangOrPutInTitle(state, info) {
    console.log(info, 'setLiuLiangOrPutInTitle');
    state.aLittle.liuLiangOrPutInTitle = info;
  },
  setLiuLiangOrPutInTitle2: function setLiuLiangOrPutInTitle2(state, info) {
    console.log(info, 'setLiuLiangOrPutInTitle2');
    state.aLittle.liuLiangOrPutInTitle2 = info;
  },
  setPutinname: function setPutinname(state, info) {
    console.log(info, 'setPutinname');
    state.aLittle.Putinname = info;
  },
  setCustomTime: function setCustomTime(state, info) {
    console.log(info, 'setCustomTime');
    state.aLittle.customTime = info;
  },
  setCustomTime2: function setCustomTime2(state, info) {
    console.log(info, 'setCustomTime2');
    state.aLittle.customTime2 = info;
  },
  setRefresh: function setRefresh(state, info) {
    console.log(info, 'setRefresh');
    state.my.Refresh = info;
  },
  setBusinessPutInShow: function setBusinessPutInShow(state, info) {
    console.log(info, 'setBusinessPutInShow');
    state.aLittle.businessPutIn.show = info;
  },
  setPersonTitle: function setPersonTitle(state, info) {
    console.log(info, 'setPersonTitle');
    state.my.PersonTitle = info;
  },
  setputInstate: function setputInstate(state, info) {
    console.log(info, 'setputInstate');
    state.aLittle.putInstate = info;
  },
  //我的
  setMy: function setMy(state, info) {
    console.log(info, 'setmy');
    state.my.headers = info;
  },
  //消息
  setnews: function setnews(state, info) {
    console.log(info, 'setnews');
    state.news.Message = info;
  },
  //消息系统通知
  setsystem: function setsystem(state, info) {
    console.log(info, 'setsystem');
    state.news.system = info;
  },
  //消息未读数
  setnum: function setnum(state, info) {
    console.log(info, 'setnum');
    state.news.num = info;
  },
  //消息 已发留言
  setAlr: function setAlr(state, info) {
    console.log(info, 'setAlr');
    state.news.Alr = info;
  },
  //我的说明书列表 全部
  setproduct: function setproduct(state, info) {
    console.log(info, 'setproduct');
    state.my.product = info;
  },
  //我的说明书列表 产品
  setchan: function setchan(state, info) {
    console.log(info, 'setchan');
    state.my.chan = info;
  },
  //我的说明书列表 定制
  setding: function setding(state, info) {
    console.log(info, 'setding');
    state.my.ding = info;
  },
  //我的说明书列表 资讯
  setzi: function setzi(state, info) {
    console.log(info, 'setzi');
    state.my.zi = info;
  },
  //我的订单 供应订单
  setSupply: function setSupply(state, info) {
    console.log(info, 'setSupply');
    state.my.Supply = info;
  },
  //我的订单 采购订单
  setPurchase: function setPurchase(state, info) {
    console.log(info, 'setPurchase');
    state.my.Purchase = info;
  },
  //我的说明书详情
  setdetailed: function setdetailed(state, info) {
    console.log(info, 'setdetailed');
    state.my.detailed = info;
  },
  //我的采购订单 列表 全部
  setPurchaseA: function setPurchaseA(state, info) {
    console.log(info, 'setPurchaseA');
    state.my.PurchaseA = info;
  },
  //我的采购订单 列表 待发布
  setPurchaseB: function setPurchaseB(state, info) {
    console.log(info, 'setPurchaseB');
    state.my.PurchaseB = info;
  },
  //我的采购订单 列表 采购中
  setPurchaseC: function setPurchaseC(state, info) {
    console.log(info, 'setPurchaseC');
    state.my.PurchaseC = info;
  },
  //我的采购订单 列表 已停止
  setPurchaseD: function setPurchaseD(state, info) {
    console.log(info, 'setPurchaseD');
    state.my.PurchaseD = info;
  },
  //我的采购订单 列表 已完成
  setPurchaseE: function setPurchaseE(state, info) {
    console.log(info, 'setPurchaseE');
    state.my.PurchaseE = info;
  },
  //我的采购订单 列表 已下架
  setPurchaseF: function setPurchaseF(state, info) {
    console.log(info, 'setPurchaseF');
    state.my.PurchaseF = info;
  },
  //公司认证 地理位置
  setclickCity: function setclickCity(state, info) {
    console.log(info, 'setclickCity');
    state.my.clickCity = info;
  },
  //公司认证 证件有效期
  setEffective: function setEffective(state, info) {
    console.log(info, 'setEffective');
    state.my.Effective = info;
  },
  //公司认证 认证详情
  setAuthen: function setAuthen(state, info) {
    console.log(info, 'setAuthen');
    state.my.Authen = info;
  },
  //我的设置 地址管理
  setaddress: function setaddress(state, info) {
    console.log(info, 'setaddress');
    state.my.address = info;
  },
  //我的设置 所在地区
  setress: function setress(state, info) {
    console.log(info, 'setress');
    state.my.ress = info;
  },
  //首页 投放商机列表
  setputInBusinessData: function setputInBusinessData(state, info) {
    console.log(info, 'setputInBusinessData');
    state.aLittle.putInBusinessData = info;
  },
  setTempletType: function setTempletType(state, info) {// 采购模板
    console.log(info, 'setTempletType');
    state.publish.publishPurchase.templetType = info;
  },
  setMoreSet: function setMoreSet(state, info) {// 运费及更多设置 默认不显示
    console.log(info, 'setMoreSet');
    state.publish.publishPurchase.moreSet = info;
  },
  setPreviceCaiGou: function setPreviceCaiGou(state, info) {// 判断预览状态， 默认是编辑状态
    console.log(info, 'setPreviceCaiGou');
    state.publish.publishPurchase.previceCaiGou = info;
  },
  setCaiGouList: function setCaiGouList(state, info) {// 采购列表数据
    console.log(info, 'setCaiGouList');
    state.publish.publishPurchase.caiGouList = info;
  },
  setImgList: function setImgList(state, info) {//附件列表
    console.log(info, 'setImgList');
    state.publish.publishPurchase.imgList = info;
  } };var _default =

mutations;exports.default = _default;

/***/ }),

/***/ 212:
/*!*************************************************************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FInstructionsPrice%2Fmyproduct%2Fproduct-book%2FQRcodeandinquiry%2FQRcode-list%2FQRcodelist-edit"} ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _QRcodelistEdit = _interopRequireDefault(__webpack_require__(/*! ./modules/InstructionsPrice/myproduct/product-book/QRcodeandinquiry/QRcode-list/QRcodelist-edit.vue */ 213));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_QRcodelistEdit.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 22:
/*!*********************************************!*\
  !*** E:/MB/mb-yun/store/modules/actions.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by 菅双鹤 on 2019/07/25.
 */

/***/ }),

/***/ 220:
/*!***********************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FInstructionsPrice%2FOrder%2FOrder"} ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _Order = _interopRequireDefault(__webpack_require__(/*! ./modules/InstructionsPrice/Order/Order.vue */ 221));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_Order.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 228:
/*!************************************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FInstructionsPrice%2FOrder%2FOrder-list%2FOrder-details%2FOrder-details"} ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _OrderDetails = _interopRequireDefault(__webpack_require__(/*! ./modules/InstructionsPrice/Order/Order-list/Order-details/Order-details.vue */ 229));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_OrderDetails.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 23:
/*!*********************************************!*\
  !*** E:/MB/mb-yun/store/modules/getters.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;


var _getters = _interopRequireDefault(__webpack_require__(/*! ./COMMON/getters.js */ 24));
var _getters2 = _interopRequireDefault(__webpack_require__(/*! ./RHX/getters.js */ 25));
var _getters3 = _interopRequireDefault(__webpack_require__(/*! ./MBBO/getters.js */ 26));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                                    * Created by 菅双��on 2019/07/25.
                                                                                                                                                                    */var getters = Object.assign(_getters.default, _getters2.default, _getters3.default);var _default = getters;exports.default = _default;

/***/ }),

/***/ 236:
/*!*************************************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FInstructionsPrice%2FOrder%2FOrder-list%2FOrder-details%2FOrder-detailsh"} ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _OrderDetailsh = _interopRequireDefault(__webpack_require__(/*! ./modules/InstructionsPrice/Order/Order-list/Order-details/Order-detailsh.vue */ 237));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_OrderDetailsh.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 24:
/*!****************************************************!*\
  !*** E:/MB/mb-yun/store/modules/COMMON/getters.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * Created by 菅双鹤 on 2019/07/25.
                                                                                                      */
var getters = {
  // 空状态
  EMPTYCO: function EMPTYCO(state) {return state.emptyCo;},
  // 快捷导航
  QUICKNAVCO: function QUICKNAVCO(state) {return state.quickNavCO;} };var _default =

getters;exports.default = _default;

/***/ }),

/***/ 244:
/*!************************************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FInstructionsPrice%2FOrder%2FOrder-list%2FOrder-details%2FOrder-confirm"} ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _OrderConfirm = _interopRequireDefault(__webpack_require__(/*! ./modules/InstructionsPrice/Order/Order-list/Order-details/Order-confirm.vue */ 245));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_OrderConfirm.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 25:
/*!*************************************************!*\
  !*** E:/MB/mb-yun/store/modules/RHX/getters.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * Created by 菅双鹤 on 2019/07/25.
                                                                                                      */
var getters = {
  // --------------------------------选择模版(1/4)------------------------------
  SELECTTEMPLATERHX: function SELECTTEMPLATERHX(state) {return state.selectTemplateRHX;} };var _default =

getters;exports.default = _default;

/***/ }),

/***/ 252:
/*!*************************************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FInstructionsPrice%2FOrder%2FOrder-list%2FOrder-details%2FOrder-details2"} ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _OrderDetails = _interopRequireDefault(__webpack_require__(/*! ./modules/InstructionsPrice/Order/Order-list/Order-details/Order-details2.vue */ 253));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_OrderDetails.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 26:
/*!**************************************************!*\
  !*** E:/MB/mb-yun/store/modules/MBBO/getters.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * Created by 菅双鹤 on 2019/07/25.
                                                                                                      */
var getters = {
  // 空状态
  EMPTY: function EMPTY(state) {return state.empty;},
  // 地址模块
  ADDRESSBS: function ADDRESSBS(state) {return state.addressBs;},
  // home 主页数据
  GET_HOME: function GET_HOME(state) {return state.home;},
  // 陌拜一下
  GET_ALITTLE: function GET_ALITTLE(state) {return state.aLittle;},
  // 我的
  GET_MY: function GET_MY(state) {return state.my;},
  //发现
  GET_FIND: function GET_FIND(state) {return state.find;},
  //消息
  GET_NEWS: function GET_NEWS(state) {return state.news;},
  // 发布
  GET_PUBLISH: function GET_PUBLISH(state) {return state.publish;} };var _default =


getters;exports.default = _default;

/***/ }),

/***/ 260:
/*!***********************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FInstructionsPrice%2FEdit-instructions%2FEdit-instructions"} ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _EditInstructions = _interopRequireDefault(__webpack_require__(/*! ./modules/InstructionsPrice/Edit-instructions/Edit-instructions.vue */ 261));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_EditInstructions.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 268:
/*!*****************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FInstructionsPrice%2FPurchase%2FPurchase"} ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _Purchase = _interopRequireDefault(__webpack_require__(/*! ./modules/InstructionsPrice/Purchase/Purchase.vue */ 269));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_Purchase.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 27:
/*!***********************************!*\
  !*** E:/MB/mb-yun/common/lang.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _zhCN = _interopRequireDefault(__webpack_require__(/*! ./language/zh-CN/zh-CN.js */ 28));
var _enUS = _interopRequireDefault(__webpack_require__(/*! ./language/en-US/en-US.js */ 43));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  en_US: _enUS.default,
  zh_CN: _zhCN.default };exports.default = _default;

/***/ }),

/***/ 276:
/*!********************************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FInstructionsPrice%2FPurchase%2FPurchase-details%2FPurchase-details"} ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _PurchaseDetails = _interopRequireDefault(__webpack_require__(/*! ./modules/InstructionsPrice/Purchase/Purchase-details/Purchase-details.vue */ 277));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_PurchaseDetails.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 28:
/*!***************************************************!*\
  !*** E:/MB/mb-yun/common/language/zh-CN/zh-CN.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _tab_bar = _interopRequireDefault(__webpack_require__(/*! ./common/tab_bar.js */ 29));
var _title = _interopRequireDefault(__webpack_require__(/*! ./common/title.js */ 30));
var _navigation = _interopRequireDefault(__webpack_require__(/*! ./common/navigation.js */ 31));
var _extendManageList = _interopRequireDefault(__webpack_require__(/*! ./aLittle/extendManageList/extendManageList.js */ 32));
var _publish = _interopRequireDefault(__webpack_require__(/*! ./publishPurchase/publish/publish.js */ 33));
var _listModules = _interopRequireDefault(__webpack_require__(/*! ./find/findModules/listModules.js */ 34));

var _find = _interopRequireDefault(__webpack_require__(/*! ./find/find.js */ 35));
var _FirstPage = _interopRequireDefault(__webpack_require__(/*! ./myCompany/First-page.js */ 36));
var _newsPage = _interopRequireDefault(__webpack_require__(/*! ./news/news-page.js */ 37));

var _myPersonal = _interopRequireDefault(__webpack_require__(/*! ./myCompany/my-personal.js */ 38));

var _myFunctions = _interopRequireDefault(__webpack_require__(/*! ./myCompany/my-functions.js */ 39));

var _basicInfor = _interopRequireDefault(__webpack_require__(/*! ./myCompany/basicInfor.js */ 40));

var _qualificatCert = _interopRequireDefault(__webpack_require__(/*! ./myCompany/qualificatCert.js */ 41));

var _Howtoshow = _interopRequireDefault(__webpack_require__(/*! ./InstructionsPrice/Howtoshow.js */ 42));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // 发现
//个人资料
//头部下方功能
// 基本信息
// 认证信息
// 如何秀模块
var _default = { tab_bar: _tab_bar.default, Home_title: _title.default, navigation: _navigation.default, extendManageList: _extendManageList.default,
  publish: _publish.default,
  listModules: _listModules.default,
  find: _find.default,
  My: _FirstPage.default,
  News: _newsPage.default,
  Mypersonal: _myPersonal.default,
  Myfunctions: _myFunctions.default,
  companyInfor: _basicInfor.default,
  qualificatCert: _qualificatCert.default,
  Howtoshow: _Howtoshow.default };exports.default = _default;

/***/ }),

/***/ 284:
/*!***************************************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FInstructionsPrice%2FPurchase%2FPurchase-details%2FdataReport%2FdataReport"} ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _dataReport = _interopRequireDefault(__webpack_require__(/*! ./modules/InstructionsPrice/Purchase/Purchase-details/dataReport/dataReport.vue */ 285));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_dataReport.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 29:
/*!************************************************************!*\
  !*** E:/MB/mb-yun/common/language/zh-CN/common/tab_bar.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =
{
  home: '陌拜',
  find: '发现',
  news: '消息',
  my: '我的' };exports.default = _default;

/***/ }),

/***/ 292:
/*!*******************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2Ffind%2Ffindlist%2Ffind-search"} ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _findSearch = _interopRequireDefault(__webpack_require__(/*! ./modules/find/findlist/find-search.vue */ 293));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_findSearch.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 30:
/*!**********************************************************!*\
  !*** E:/MB/mb-yun/common/language/zh-CN/common/title.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  title1: '陌拜一下',
  title2: '发现',
  title3: '消息',
  title4: '个人中心',
  title5: '快捷发布' };exports.default = _default;

/***/ }),

/***/ 300:
/*!******************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2Ffind%2Ffindlist%2Ffind-cloud"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _findCloud = _interopRequireDefault(__webpack_require__(/*! ./modules/find/findlist/find-cloud.vue */ 301));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_findCloud.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 308:
/*!********************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2Ffind%2Ffindlist%2Ffind-capital"} ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _findCapital = _interopRequireDefault(__webpack_require__(/*! ./modules/find/findlist/find-capital.vue */ 309));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_findCapital.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 31:
/*!***************************************************************!*\
  !*** E:/MB/mb-yun/common/language/zh-CN/common/navigation.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  companyName: '未填写公司信息',
  quickNav1: '陌拜',
  quickNav2: '发现',
  quickNav3: '发布',
  quickNav4: '消息',
  quickNav5: '我的',
  quickBack: '退出登录' };exports.default = _default;

/***/ }),

/***/ 316:
/*!*******************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FmyList%2Fmyheader"} ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _myheader = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/myList/myheader.vue */ 317));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_myheader.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 32:
/*!***************************************************************************************!*\
  !*** E:/MB/mb-yun/common/language/zh-CN/aLittle/extendManageList/extendManageList.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var screenData = [
{
  code: 1,
  text: '昨天' },
{
  code: 7,
  text: '近七日' },
{
  code: 30,
  text: '近30日' },
{
  code: '001',
  text: '自定义时间' }];


var leftScreenData = [
{
  code: '0',
  text: '访问量' },
{
  code: '1',
  text: '点赞数' },
{
  code: '2',
  text: '收藏数' },
{
  code: '3',
  text: '分享数' },
{
  code: '4',
  text: '拨打电话数' },
{
  code: '5',
  text: '询盘数' },
{
  code: '6',
  text: '询单价' },
{
  code: '7',
  text: '订单数' }];


var Generaldatachart = [
{
  code: '0',
  text: '总消耗' },
{
  code: '1',
  text: '展示数' },
{
  code: '2',
  text: '点击数' },
{
  code: '3',
  text: '点击率' },
{
  code: '4',
  text: '转化数' },
{
  code: '5',
  text: '转化率' },
{
  code: '6',
  text: '提交表单数' },
{
  code: '7',
  text: '拨打电话数' },
{
  code: '8',
  text: '进入关注我们页面' },
{
  code: '9',
  text: '点击自定义oa按钮数' },
{
  code: '10',
  text: '询价数' },
{
  code: '11',
  text: '聊天数' },
{
  code: '12',
  text: '订单数' }];


var rightScreenData = [
{
  code: '0',
  text: '总消耗' },
{
  code: '1',
  text: '展示数' },
{
  code: '2',
  text: '点击数' },
{
  code: '3',
  text: '点击率' },
{
  code: '4',
  text: '转化数' },
{
  code: '5',
  text: '转化率' },
{
  code: '6',
  text: '提交表单数' },
{
  code: '7',
  text: '拨打电话数' },
{
  code: '8',
  text: '进入关注我们页面' },
{
  code: '9',
  text: '点击自定义按钮数' }];


var itemList = [
{
  code: '0',
  text: '已消耗' },
{
  code: '1',
  text: '日均消耗' },
{
  code: '2',
  text: '单个客户获取成本' },
{
  code: '3',
  text: '展示数' },
{
  code: '4',
  text: '点击数' },
{
  code: '5',
  text: '点击率' },
{
  code: '6',
  text: '转化数' },
{
  code: '7',
  text: '转化率' },
{
  code: '8',
  text: '留言数(原提交表单数)' },
{
  code: '9',
  text: '拨打电话数' },
{
  code: '10',
  text: '访问商家主页数' },
{
  code: '11',
  text: '询盘数' },
{
  code: '12',
  text: '询价单' },
{
  code: '13',
  text: '订单数' }];


var itemList2 = [
{
  code: '0',
  text: '已消耗' },
{
  code: '1',
  text: '日均消耗' },
{
  code: '2',
  text: '单个客户获取成本' },
{
  code: '3',
  text: '展示数' },
{
  code: '4',
  text: '点击数' },
{
  code: '5',
  text: '点击率' },
{
  code: '6',
  text: '转化数' },
{
  code: '7',
  text: '转化率' },
{
  code: '8',
  text: '留言数(原提交表单数)' },
{
  code: '9',
  text: '拨打电话数(次)' },
{
  code: '10',
  text: '访问商家主页数(次)' },
{
  code: '11',
  text: '询盘数' },
{
  code: '12',
  text: '询价单' },
{
  code: '13',
  text: '订单数' }];


var flowList = [
{
  code: '0',
  text: '访问量' },
{
  code: '0',
  text: '点赞量' },
{
  code: '0',
  text: '收藏量' },
{
  code: '0',
  text: '分享量' },
{
  code: '0',
  text: '留言量' },
{
  code: '0',
  text: '拨打电话数' },
{
  code: '0',
  text: '询盘数' },
{
  code: '0',
  text: '询价单' },
{
  code: '0',
  text: '订单数' }];


var flowList2 = [
{
  code: '0',
  text: '访问量' },
{
  code: '0',
  text: '点赞量' },
{
  code: '0',
  text: '收藏量' },
{
  code: '0',
  text: '分享量' },
{
  code: '0',
  text: '留言量' },
{
  code: '0',
  text: '拨打电话数' },
{
  code: '0',
  text: '询盘数' },
{
  code: '0',
  text: '询价单' },
{
  code: '0',
  text: '订单数' }];


// 表头切换
var tabList = [
{
  text: '流量数据',
  id: 1 },

{
  text: '投放数据',
  id: 2 }];


// 自定义时间
var customTime = {
  title: '自定义时间',
  start: '开始时间',
  zhi: '至',
  end: '结束时间',
  submit: '保存' };var _default =

{
  // account
  accout_title: '账户余额 (元)',
  unit: '元',
  account_can: '可用余额',

  // gadget
  gadget_title: '小工具',
  title1: '投放管理',
  title2: '我的采购',
  title3: '数据报表',

  // Statistics
  text1: '累计投放商机',
  text2: '待审核商机',
  text3: '投放中商机',

  // dataTrendKanban
  kanban_title: '数据看板',
  zongLan_title: '数据总览',
  trend_title: '数据趋势',

  // 数据看板
  itemList: itemList,
  itemList2: itemList2,
  flowList: flowList,
  flowList2: flowList2,
  screenData: screenData,
  leftScreenData: leftScreenData,
  rightScreenData: rightScreenData,
  //通用数据看板
  Generaldatachart: Generaldatachart,
  // 数据表头切换
  tabList: tabList,
  // 自定义时间
  customTime: customTime };exports.default = _default;

/***/ }),

/***/ 324:
/*!**************************************************************************************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FpersonAndCompany%2FcompanyInfor%2FcompanyInforItems%2FpreviewAndEditor%2Feditor%2FeditorItems%2Feditvalidity"} ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _editvalidity = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/editvalidity.vue */ 325));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_editvalidity.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 33:
/*!*****************************************************************************!*\
  !*** E:/MB/mb-yun/common/language/zh-CN/publishPurchase/publish/publish.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  // publish
  publish_caigou: '发采购',
  publish_shangji: '发供应' };exports.default = _default;

/***/ }),

/***/ 332:
/*!***************************************************************************************************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FpersonAndCompany%2FcompanyInfor%2FcompanyInforItems%2FpreviewAndEditor%2Feditor%2FeditorItems%2FindustryAddress%2Faddress"} ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _address = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/industryAddress/address.vue */ 333));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_address.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 34:
/*!**************************************************************************!*\
  !*** E:/MB/mb-yun/common/language/zh-CN/find/findModules/listModules.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  // publish
  lianxi: '立即联系',
  price_text: '价格面议',
  rotation: '投资伦茨',
  month: '月',
  unit: '万' };exports.default = _default;

/***/ }),

/***/ 340:
/*!****************************************************************************************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FpersonAndCompany%2FcompanyInfor%2FcompanyInforItems%2FpreviewAndEditor%2Feditor%2FeditorItems%2FeditBasicInfor"} ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _editBasicInfor = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/personAndCompany/companyInfor/companyInforItems/previewAndEditor/editor/editorItems/editBasicInfor.vue */ 341));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_editBasicInfor.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 348:
/*!********************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FmyList%2Fmyheader-list%2Fmyheader-Personal"} ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _myheaderPersonal = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/myList/myheader-list/myheader-Personal.vue */ 349));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_myheaderPersonal.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 35:
/*!*******************************************************!*\
  !*** E:/MB/mb-yun/common/language/zh-CN/find/find.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 频道
var channel = {
  title: '所有频道',
  myPinDao: '我的频道',
  tuiJianPinDao: '频道推荐',
  entryPindao: '点击进入频道',
  addPindao: '点击添加频道',
  edit: '编辑',
  finish: '完成' };var _default =

{
  // 频道
  channel: channel };exports.default = _default;

/***/ }),

/***/ 356:
/*!**********************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FmyList%2Fmyheader-list%2Fmyheader-interested"} ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _myheaderInterested = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/myList/myheader-list/myheader-interested.vue */ 357));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_myheaderInterested.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 36:
/*!******************************************************************!*\
  !*** E:/MB/mb-yun/common/language/zh-CN/myCompany/First-page.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  //页面顶部
  title1: '个人中心',

  //已关注 已收藏 粉丝数 浏览数 获赞数
  guanzhu: '已关注',
  shou: '已收藏',
  fen: '粉丝数',
  liulan: '浏览数',
  huo: '获赞数',

  //卖在陌拜
  mobai: '卖在陌拜',
  mobai1: '买家留言',
  mobai2: '供应订单',
  mobai3: '我的产品',
  mobai4: '我的资讯',
  mobai5: '供应订单',

  //买在陌拜
  mobais: '买在陌拜',
  mobai6: '已发留言',
  mobai7: '采购订单',
  mobai8: '我的采购',
  mobai9: '采购订单',
  mobai10: '我的订单',

  //陌拜工具
  tool: '陌拜工具',
  tool1: '商机投放',
  tool2: '发布采购',
  tool3: '制作说明书',
  tool4: '卖家询盘',

  //公司信息 会员中心 账户中心 设置 关于膜拜商机 意见反馈
  company1: '公司信息',
  company2: '会员中心',
  company3: '账户中心',
  company4: '设置',
  company5: '关于陌拜商机',
  company6: '意见反馈' };exports.default = _default;

/***/ }),

/***/ 364:
/*!*******************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FmyList%2Fmyheader-list%2Fmyheader-Keyword"} ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _myheaderKeyword = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/myList/myheader-list/myheader-Keyword.vue */ 365));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_myheaderKeyword.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 37:
/*!************************************************************!*\
  !*** E:/MB/mb-yun/common/language/zh-CN/news/news-page.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  //页面顶部
  title1: '消息',
  title2: '已获赞',
  title3: '被收藏',
  title4: '系统通知',
  title5: '消息详情',
  title6: '全部已读' };exports.default = _default;

/***/ }),

/***/ 372:
/*!********************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FmyList%2Fmyheader-list%2Fmyheader-Purchase"} ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _myheaderPurchase = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/myList/myheader-list/myheader-Purchase.vue */ 373));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_myheaderPurchase.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 38:
/*!*******************************************************************!*\
  !*** E:/MB/mb-yun/common/language/zh-CN/myCompany/my-personal.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //个人资料
var _default = {
  title1: '个人中心',
  title2: '个人资料',
  title3: '简单介绍',
  title4: '请填写',
  title5: '关于你，我们想多了解一点～～',
  title6: '头像',
  title7: '姓名',
  title8: '个人简介',
  title9: '感兴趣的行业',
  title10: '添加供应关键词',
  title10s: '添加采购关键词',
  title11: '保存',
  title12: '设置',
  title13: '地址管理',
  title14: '联系电话',
  title15: '联系邮箱',
  title16: '微信号',
  title17: '修改密码',
  title18: '退出登录',
  title19: '绑定邮箱',
  title20: '更换手机号',
  title21: '绑定微信',
  title22: '退出登录',
  title23: '地址管理',
  title24: '添加地址',
  title25: '意见反馈',
  title26: '我的反馈',
  title27: '请给陌拜商机评分',
  title28: '请描述您遇到的问题',
  title29: '请描述您的问题',
  title30: '请输入联系方式(选填)',
  title31: '提交',
  title32: '查看全文',
  title33: '联系方式',
  title34: '吐槽于',
  title35: '删除',
  title36: '收起',
  title37: '关于陌拜商机',
  title38: '关于我们',
  title39: '公司介绍',
  title40: '陌拜商机，一家专注于企业级流量共享推广的平台，公司总部设立于中国北京。',
  title41: '我们是一家针对B端中小企业客户，专门做企业级商机推广，帮助企业从各大流量平台低价获客的平台，包含建站、投放、推广获客一系列服务。与此同时，我们与谷歌合作，帮助跨境企业扩大推广平台，获取大量海外客户资源，让企业花更少的钱获取更多的企业客户。',
  title42: '我们相信，流量共享模式将是中小企业推广的福音，帮助中小企业拓宽流量获取渠道、降低推广成本，依据数据分析，精准撮合企业间合作是我们奋斗的目标。我们不仅让企业低价获客，还将协助企业获取上游合作商机以及政府的政策支持。',
  title43: '加入我们',
  title44: '成为陌拜商机代理商，您可获得：',
  title45: '1.引入企业的成为会员后可分得佣金；',
  title46: '2.引入企业投放每次消耗都可分的佣金；',
  title47: '3.每季度/年度优质代理商奖励；',
  title48: '招募人',
  title49: '王女士',
  title50: '招募电话',
  title51: '申请邮箱',
  title52: '联系我们',
  title53: '服务热线',
  title54: '公司地址',
  title55: '北京市昌平区回龙观慧聪网总部',
  title56: '工作时间',
  title57: '周一至周五8:30-18:00',
  title58: '修改',
  title59: '删除',
  title60: '新建收货地址',
  title61: '默认发货地址',
  title62: '收货人',
  title63: '名字',
  title64: '手机或固定电话',
  title65: '所在地区',
  title66: '详细地址',
  title67: '如街道,楼层,门牌号等信息',
  title68: '保存地址',
  title69: '请选择',
  //留言模块
  message1: '留言',
  message2: '买家留言',
  message3: '已发留言',
  message4: '我的留言详情' };exports.default = _default;

/***/ }),

/***/ 380:
/*!***********************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FmyList%2Fmyheader-list%2FKeyWords"} ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _KeyWords = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/myList/myheader-list/KeyWords.vue */ 381));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_KeyWords.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 388:
/*!********************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FmyFocusonfans%2Fmy-Focusonfans"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _myFocusonfans = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/myFocusonfans/my-Focusonfans.vue */ 389));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_myFocusonfans.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 39:
/*!********************************************************************!*\
  !*** E:/MB/mb-yun/common/language/zh-CN/myCompany/my-functions.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //头部下方功能
var _default = {
  title1: '关注',
  title2: '粉丝',
  title3: '收藏',
  title4: '浏览',
  title5: '点赞',
  title6: '商家详情',
  title7: '企业主页',
  title8: '公司信息' };exports.default = _default;

/***/ }),

/***/ 396:
/*!************************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FpersonAndCompany%2FcompanyInfor%2FcompanyInfor"} ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _companyInfor = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/personAndCompany/companyInfor/companyInfor.vue */ 397));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_companyInfor.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** E:/MB/mb-yun/pages.json ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 40:
/*!******************************************************************!*\
  !*** E:/MB/mb-yun/common/language/zh-CN/myCompany/basicInfor.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var authType = [
{
  code: '0',
  text: '企业' },
{
  code: '1',
  text: '个体工商户' }];


var qualificationType = [
{
  code: '0',
  text: '企业营业执照' },
{
  code: '1',
  text: '个体工商户营业执照' }];var _default =



{
  authType: authType,
  qualificationType: qualificationType };exports.default = _default;

/***/ }),

/***/ 404:
/*!**************************************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FmyCollectiononBrowseonPoints%2Fmy-CollectiononBrowseonPoints"} ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _myCollectiononBrowseonPoints = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/myCollectiononBrowseonPoints/my-CollectiononBrowseonPoints.vue */ 405));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_myCollectiononBrowseonPoints.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 41:
/*!**********************************************************************!*\
  !*** E:/MB/mb-yun/common/language/zh-CN/myCompany/qualificatCert.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 左侧模块介绍
var leftText = {
  pinPai: '品牌名称',
  neiRong: '推广内容',
  leiXIng: '主体类型',
  shengFen: '主体身份',
  zhiZhao: '营业执照',
  daiMa: '统一社会信用代码',
  youXiaoQi: '证件有效期',
  zhuCe: '注册地',
  shengFenZ: '法人身份证',
  ziZhi: '行业所需资质',
  buChong: '资质材料补充' };

// 默认提示
var defaultText = {
  defaul_input: '请输入',
  defaul_picker: '请选择',
  defaul_textArea: '如：计算机升级咨询服务',
  defaul_imgPutIn: '点击上传',
  defaul_zhiZhao: '请上传您企业营业执照，小于2M',
  defaul_shengFenZ: '请上传法人身份证的正反面照，每张小于2M',
  defaul_ziZhi: '请上传行业资质图片，最多5张，每张小于2M',
  defaul_buChong: '请上传其他必要的资质图片，最多3张，每张小于2M' };


var authType = [
{
  code: '0',
  text: '企业' },
{
  code: '1',
  text: '个体工商户' }];


var qualificationType = [
{
  code: '0',
  text: '品牌商' },

{
  code: '1',
  text: '经销商' },

{
  code: '2',
  text: '厂家' },

{
  code: '3',
  text: '其它' }];var _default =



{
  leftText: leftText,
  defaultText: defaultText,
  authType: authType,
  qualificationType: qualificationType };exports.default = _default;

/***/ }),

/***/ 412:
/*!****************************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FpersonAndCompany%2FcompanyInfor%2FcompanyInforEdit"} ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _companyInforEdit = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/personAndCompany/companyInfor/companyInforEdit.vue */ 413));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_companyInforEdit.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 42:
/*!*************************************************************************!*\
  !*** E:/MB/mb-yun/common/language/zh-CN/InstructionsPrice/Howtoshow.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //个人资料
var _default = {
  // 我的产品
  product1: '我的说明书',
  product2: '我的说明书详情',
  product3: '介绍说明',
  //我的订单
  product4: '我的订单',
  product5: '供应订单',
  product6: '采购订单',
  product7: '订单详情',
  product8: '确认定制信息',
  product9: '编辑说明书',
  product10: '我的采购',
  product11: '我的采购详情' };exports.default = _default;

/***/ }),

/***/ 420:
/*!**************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2Fmybusiness%2Fmy-business"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _myBusiness = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/mybusiness/my-business.vue */ 421));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_myBusiness.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 428:
/*!************************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FpersonAndCompany%2FmemberCenter%2FmemberCenter"} ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _memberCenter = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/personAndCompany/memberCenter/memberCenter.vue */ 429));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_memberCenter.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 43:
/*!***************************************************!*\
  !*** E:/MB/mb-yun/common/language/en-US/en-US.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _tab_bar = _interopRequireDefault(__webpack_require__(/*! ./common/tab_bar.js */ 44));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  tab_bar: _tab_bar.default };exports.default = _default;

/***/ }),

/***/ 436:
/*!*****************************************************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FpersonAndCompany%2FmemberCenter%2FmemberCenterItems%2FbuyMember%2FbuyMember"} ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _buyMember = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/personAndCompany/memberCenter/memberCenterItems/buyMember/buyMember.vue */ 437));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_buyMember.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 44:
/*!************************************************************!*\
  !*** E:/MB/mb-yun/common/language/en-US/common/tab_bar.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =
{
  home: 'home',
  find: 'find',
  news: 'news',
  my: 'my' };exports.default = _default;

/***/ }),

/***/ 444:
/*!********************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FmySetup%2Fmy-Setup"} ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _mySetup = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/mySetup/my-Setup.vue */ 445));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_mySetup.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 45:
/*!****************************************!*\
  !*** E:/MB/mb-yun/static/mbcJs/api.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.api3 = exports.api2 = exports.api1 = void 0;
var api1 = ''; // 短信
exports.api1 = api1;var api2 = ''; // 业务
exports.api2 = api2;var api3 = ''; // 图片
// uEnvDev
exports.api3 = api3;if (true) {
  // api1 = 'http://10.158.41.45:8090'; // 短信
  exports.api1 = api1 = 'http://192.168.131.204:8090'; // 短信
  exports.api2 = api2 = 'http://192.168.131.166:8080'; // 业务
  exports.api3 = api3 = 'https://img01.iambuyer.com'; // 图片
  // api1 = 'https://api.iambuyer.com';
  // api2 = 'https://open.iambuyer.com/invest-rest';
  // api3 = 'https://img01.iambuyer.com';
}
// uEnvProd
if (false) {}

/***/ }),

/***/ 452:
/*!**************************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FpersonAndCompany%2FaccountCenter%2FaccountCenter"} ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _accountCenter = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/personAndCompany/accountCenter/accountCenter.vue */ 453));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_accountCenter.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 46:
/*!**********************************************!*\
  !*** E:/MB/mb-yun/static/mbcJs/endParams.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.endParams = endParams;var md5 = __webpack_require__(/*! md5 */ 47);var Base64 = __webpack_require__(/*! js-base64 */ 51).Base64;function endParams(str) {if (uni.getStorageSync('landRegist')) {var landRegistLG = JSON.parse(uni.getStorageSync('landRegist'));var paramStr = JSON.stringify(str);var base64Str = Base64.encode(paramStr);console.log(base64Str, '加密之后的数据Base64');console.log(Base64.decode(base64Str), '解密之后的数据Base64');var signStr = md5(base64Str + landRegistLG.randomKey);var endData = { "object": base64Str, "sign": signStr };return JSON.stringify(endData);}}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 460:
/*!************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FmySetup%2FmySetups%2FmySetup-phone"} ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _mySetupPhone = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/mySetup/mySetups/mySetup-phone.vue */ 461));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_mySetupPhone.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 468:
/*!***********************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FmySetup%2FmySetups%2FmySetup-pass"} ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _mySetupPass = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/mySetup/mySetups/mySetup-pass.vue */ 469));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_mySetupPass.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 47:
/*!********************************************!*\
  !*** E:/MB/mb-yun/node_modules/md5/md5.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
(function () {
  var crypt = __webpack_require__(/*! crypt */ 48),
  utf8 = __webpack_require__(/*! charenc */ 49).utf8,
  isBuffer = __webpack_require__(/*! is-buffer */ 50),
  bin = __webpack_require__(/*! charenc */ 49).bin,

  // The core
  md5 = function md5(message, options) {
    // Convert to byte array
    if (message.constructor == String) {
      if (options && options.encoding === 'binary')
      message = bin.stringToBytes(message);else

      message = utf8.stringToBytes(message);} else
    if (isBuffer(message))
    message = Array.prototype.slice.call(message, 0);else
    if (!Array.isArray(message))
    message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
    l = message.length * 8,
    a = 1732584193,
    b = -271733879,
    c = -1732584194,
    d = 271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = (m[i] << 8 | m[i] >>> 24) & 0x00FF00FF |
      (m[i] << 24 | m[i] >>> 8) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << l % 32;
    m[(l + 64 >>> 9 << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
    GG = md5._gg,
    HH = md5._hh,
    II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
      bb = b,
      cc = c,
      dd = d;

      a = FF(a, b, c, d, m[i + 0], 7, -680876936);
      d = FF(d, a, b, c, m[i + 1], 12, -389564586);
      c = FF(c, d, a, b, m[i + 2], 17, 606105819);
      b = FF(b, c, d, a, m[i + 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i + 4], 7, -176418897);
      d = FF(d, a, b, c, m[i + 5], 12, 1200080426);
      c = FF(c, d, a, b, m[i + 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i + 7], 22, -45705983);
      a = FF(a, b, c, d, m[i + 8], 7, 1770035416);
      d = FF(d, a, b, c, m[i + 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i + 10], 17, -42063);
      b = FF(b, c, d, a, m[i + 11], 22, -1990404162);
      a = FF(a, b, c, d, m[i + 12], 7, 1804603682);
      d = FF(d, a, b, c, m[i + 13], 12, -40341101);
      c = FF(c, d, a, b, m[i + 14], 17, -1502002290);
      b = FF(b, c, d, a, m[i + 15], 22, 1236535329);

      a = GG(a, b, c, d, m[i + 1], 5, -165796510);
      d = GG(d, a, b, c, m[i + 6], 9, -1069501632);
      c = GG(c, d, a, b, m[i + 11], 14, 643717713);
      b = GG(b, c, d, a, m[i + 0], 20, -373897302);
      a = GG(a, b, c, d, m[i + 5], 5, -701558691);
      d = GG(d, a, b, c, m[i + 10], 9, 38016083);
      c = GG(c, d, a, b, m[i + 15], 14, -660478335);
      b = GG(b, c, d, a, m[i + 4], 20, -405537848);
      a = GG(a, b, c, d, m[i + 9], 5, 568446438);
      d = GG(d, a, b, c, m[i + 14], 9, -1019803690);
      c = GG(c, d, a, b, m[i + 3], 14, -187363961);
      b = GG(b, c, d, a, m[i + 8], 20, 1163531501);
      a = GG(a, b, c, d, m[i + 13], 5, -1444681467);
      d = GG(d, a, b, c, m[i + 2], 9, -51403784);
      c = GG(c, d, a, b, m[i + 7], 14, 1735328473);
      b = GG(b, c, d, a, m[i + 12], 20, -1926607734);

      a = HH(a, b, c, d, m[i + 5], 4, -378558);
      d = HH(d, a, b, c, m[i + 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i + 11], 16, 1839030562);
      b = HH(b, c, d, a, m[i + 14], 23, -35309556);
      a = HH(a, b, c, d, m[i + 1], 4, -1530992060);
      d = HH(d, a, b, c, m[i + 4], 11, 1272893353);
      c = HH(c, d, a, b, m[i + 7], 16, -155497632);
      b = HH(b, c, d, a, m[i + 10], 23, -1094730640);
      a = HH(a, b, c, d, m[i + 13], 4, 681279174);
      d = HH(d, a, b, c, m[i + 0], 11, -358537222);
      c = HH(c, d, a, b, m[i + 3], 16, -722521979);
      b = HH(b, c, d, a, m[i + 6], 23, 76029189);
      a = HH(a, b, c, d, m[i + 9], 4, -640364487);
      d = HH(d, a, b, c, m[i + 12], 11, -421815835);
      c = HH(c, d, a, b, m[i + 15], 16, 530742520);
      b = HH(b, c, d, a, m[i + 2], 23, -995338651);

      a = II(a, b, c, d, m[i + 0], 6, -198630844);
      d = II(d, a, b, c, m[i + 7], 10, 1126891415);
      c = II(c, d, a, b, m[i + 14], 15, -1416354905);
      b = II(b, c, d, a, m[i + 5], 21, -57434055);
      a = II(a, b, c, d, m[i + 12], 6, 1700485571);
      d = II(d, a, b, c, m[i + 3], 10, -1894986606);
      c = II(c, d, a, b, m[i + 10], 15, -1051523);
      b = II(b, c, d, a, m[i + 1], 21, -2054922799);
      a = II(a, b, c, d, m[i + 8], 6, 1873313359);
      d = II(d, a, b, c, m[i + 15], 10, -30611744);
      c = II(c, d, a, b, m[i + 6], 15, -1560198380);
      b = II(b, c, d, a, m[i + 13], 21, 1309151649);
      a = II(a, b, c, d, m[i + 4], 6, -145523070);
      d = II(d, a, b, c, m[i + 11], 10, -1120210379);
      c = II(c, d, a, b, m[i + 2], 15, 718787259);
      b = II(b, c, d, a, m[i + 9], 21, -343485551);

      a = a + aa >>> 0;
      b = b + bb >>> 0;
      c = c + cc >>> 0;
      d = d + dd >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  };
  md5._gg = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  };
  md5._hh = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  };
  md5._ii = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
    throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
    options && options.asString ? bin.bytesToString(digestbytes) :
    crypt.bytesToHex(digestbytes);
  };

})();

/***/ }),

/***/ 476:
/*!**************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FpersonAndCompany%2FaboutUs%2FaboutUs"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _aboutUs = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/personAndCompany/aboutUs/aboutUs.vue */ 477));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_aboutUs.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 48:
/*!************************************************!*\
  !*** E:/MB/mb-yun/node_modules/crypt/crypt.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
(function () {
  var base64map =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function rotl(n, b) {
      return n << b | n >>> 32 - b;
    },

    // Bit-wise rotation right
    rotr: function rotr(n, b) {
      return n << 32 - b | n >>> b;
    },

    // Swap big-endian to little-endian and vice versa
    endian: function endian(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++) {
        n[i] = crypt.endian(n[i]);}
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function randomBytes(n) {
      for (var bytes = []; n > 0; n--) {
        bytes.push(Math.floor(Math.random() * 256));}
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function bytesToWords(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8) {
        words[b >>> 5] |= bytes[i] << 24 - b % 32;}
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function wordsToBytes(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8) {
        bytes.push(words[b >>> 5] >>> 24 - b % 32 & 0xFF);}
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function bytesToHex(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function hexToBytes(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2) {
        bytes.push(parseInt(hex.substr(c, 2), 16));}
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function bytesToBase64(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
        for (var j = 0; j < 4; j++) {
          if (i * 8 + j * 6 <= bytes.length * 8)
          base64.push(base64map.charAt(triplet >>> 6 * (3 - j) & 0x3F));else

          base64.push('=');}
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function base64ToBytes(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
      imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push((base64map.indexOf(base64.charAt(i - 1)) &
        Math.pow(2, -2 * imod4 + 8) - 1) << imod4 * 2 |
        base64map.indexOf(base64.charAt(i)) >>> 6 - imod4 * 2);
      }
      return bytes;
    } };


  module.exports = crypt;
})();

/***/ }),

/***/ 484:
/*!**************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FpersonAndCompany%2FOpinion%2FOpinion"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _Opinion = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/personAndCompany/Opinion/Opinion.vue */ 485));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_Opinion.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 49:
/*!****************************************************!*\
  !*** E:/MB/mb-yun/node_modules/charenc/charenc.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function stringToBytes(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function bytesToString(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    } },


  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function stringToBytes(str) {
      for (var bytes = [], i = 0; i < str.length; i++) {
        bytes.push(str.charCodeAt(i) & 0xFF);}
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function bytesToString(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++) {
        str.push(String.fromCharCode(bytes[i]));}
      return str.join('');
    } } };



module.exports = charenc;

/***/ }),

/***/ 492:
/*!**************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FmySetup%2FmySetups%2FmySetup-mailbox"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _mySetupMailbox = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/mySetup/mySetups/mySetup-mailbox.vue */ 493));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_mySetupMailbox.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 50:
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ 500:
/*!*********************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FmySetup%2FmySetups%2FmySetup-WX"} ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _mySetupWX = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/mySetup/mySetups/mySetup-WX.vue */ 501));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_mySetupWX.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 508:
/*!**************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FmySetup%2FmySetups%2FmySetup-address"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _mySetupAddress = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/mySetup/mySetups/mySetup-address.vue */ 509));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_mySetupAddress.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 51:
/*!*****************************************************!*\
  !*** E:/MB/mb-yun/node_modules/js-base64/base64.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*
               *  base64.js
               *
               *  Licensed under the BSD 3-Clause License.
               *    http://opensource.org/licenses/BSD-3-Clause
               *
               *  References:
               *    http://en.wikipedia.org/wiki/Base64
               */
;(function (global, factory) {
   true ?
  module.exports = factory(global) :
  undefined;
})(
typeof self !== 'undefined' ? self :
typeof window !== 'undefined' ? window :
typeof global !== 'undefined' ? global : void 0,

function (global) {
  'use strict';
  // existing version for noConflict()
  global = global || {};
  var _Base64 = global.Base64;
  var version = "2.5.1";
  // if node.js and NOT React Native, we use Buffer
  var buffer;
  if ( true && module.exports) {
    try {
      buffer = eval("require('buffer').Buffer");
    } catch (err) {
      buffer = undefined;
    }
  }
  // constants
  var b64chars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  var b64tab = function (bin) {
    var t = {};
    for (var i = 0, l = bin.length; i < l; i++) {t[bin.charAt(i)] = i;}
    return t;
  }(b64chars);
  var fromCharCode = String.fromCharCode;
  // encoder stuff
  var cb_utob = function cb_utob(c) {
    if (c.length < 2) {
      var cc = c.charCodeAt(0);
      return cc < 0x80 ? c :
      cc < 0x800 ? fromCharCode(0xc0 | cc >>> 6) +
      fromCharCode(0x80 | cc & 0x3f) :
      fromCharCode(0xe0 | cc >>> 12 & 0x0f) +
      fromCharCode(0x80 | cc >>> 6 & 0x3f) +
      fromCharCode(0x80 | cc & 0x3f);
    } else {
      var cc = 0x10000 +
      (c.charCodeAt(0) - 0xD800) * 0x400 + (
      c.charCodeAt(1) - 0xDC00);
      return fromCharCode(0xf0 | cc >>> 18 & 0x07) +
      fromCharCode(0x80 | cc >>> 12 & 0x3f) +
      fromCharCode(0x80 | cc >>> 6 & 0x3f) +
      fromCharCode(0x80 | cc & 0x3f);
    }
  };
  var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
  var utob = function utob(u) {
    return u.replace(re_utob, cb_utob);
  };
  var cb_encode = function cb_encode(ccc) {
    var padlen = [0, 2, 1][ccc.length % 3],
    ord = ccc.charCodeAt(0) << 16 |
    (ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8 | (
    ccc.length > 2 ? ccc.charCodeAt(2) : 0),
    chars = [
    b64chars.charAt(ord >>> 18),
    b64chars.charAt(ord >>> 12 & 63),
    padlen >= 2 ? '=' : b64chars.charAt(ord >>> 6 & 63),
    padlen >= 1 ? '=' : b64chars.charAt(ord & 63)];

    return chars.join('');
  };
  var btoa = global.btoa ? function (b) {
    return global.btoa(b);
  } : function (b) {
    return b.replace(/[\s\S]{1,3}/g, cb_encode);
  };
  var _encode = buffer ?
  buffer.from && Uint8Array && buffer.from !== Uint8Array.from ?
  function (u) {
    return (u.constructor === buffer.constructor ? u : buffer.from(u)).
    toString('base64');
  } :
  function (u) {
    return (u.constructor === buffer.constructor ? u : new buffer(u)).
    toString('base64');
  } :
  function (u) {return btoa(utob(u));};

  var encode = function encode(u, urisafe) {
    return !urisafe ?
    _encode(String(u)) :
    _encode(String(u)).replace(/[+\/]/g, function (m0) {
      return m0 == '+' ? '-' : '_';
    }).replace(/=/g, '');
  };
  var encodeURI = function encodeURI(u) {return encode(u, true);};
  // decoder stuff
  var re_btou = new RegExp([
  '[\xC0-\xDF][\x80-\xBF]',
  '[\xE0-\xEF][\x80-\xBF]{2}',
  '[\xF0-\xF7][\x80-\xBF]{3}'].
  join('|'), 'g');
  var cb_btou = function cb_btou(cccc) {
    switch (cccc.length) {
      case 4:
        var cp = (0x07 & cccc.charCodeAt(0)) << 18 |
        (0x3f & cccc.charCodeAt(1)) << 12 |
        (0x3f & cccc.charCodeAt(2)) << 6 |
        0x3f & cccc.charCodeAt(3),
        offset = cp - 0x10000;
        return fromCharCode((offset >>> 10) + 0xD800) +
        fromCharCode((offset & 0x3FF) + 0xDC00);
      case 3:
        return fromCharCode(
        (0x0f & cccc.charCodeAt(0)) << 12 |
        (0x3f & cccc.charCodeAt(1)) << 6 |
        0x3f & cccc.charCodeAt(2));

      default:
        return fromCharCode(
        (0x1f & cccc.charCodeAt(0)) << 6 |
        0x3f & cccc.charCodeAt(1));}


  };
  var btou = function btou(b) {
    return b.replace(re_btou, cb_btou);
  };
  var cb_decode = function cb_decode(cccc) {
    var len = cccc.length,
    padlen = len % 4,
    n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0) | (
    len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0) | (
    len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0) | (
    len > 3 ? b64tab[cccc.charAt(3)] : 0),
    chars = [
    fromCharCode(n >>> 16),
    fromCharCode(n >>> 8 & 0xff),
    fromCharCode(n & 0xff)];

    chars.length -= [0, 0, 2, 1][padlen];
    return chars.join('');
  };
  var _atob = global.atob ? function (a) {
    return global.atob(a);
  } : function (a) {
    return a.replace(/\S{1,4}/g, cb_decode);
  };
  var atob = function atob(a) {
    return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g, ''));
  };
  var _decode = buffer ?
  buffer.from && Uint8Array && buffer.from !== Uint8Array.from ?
  function (a) {
    return (a.constructor === buffer.constructor ?
    a : buffer.from(a, 'base64')).toString();
  } :
  function (a) {
    return (a.constructor === buffer.constructor ?
    a : new buffer(a, 'base64')).toString();
  } :
  function (a) {return btou(_atob(a));};
  var decode = function decode(a) {
    return _decode(
    String(a).replace(/[-_]/g, function (m0) {return m0 == '-' ? '+' : '/';}).
    replace(/[^A-Za-z0-9\+\/]/g, ''));

  };
  var noConflict = function noConflict() {
    var Base64 = global.Base64;
    global.Base64 = _Base64;
    return Base64;
  };
  // export Base64
  global.Base64 = {
    VERSION: version,
    atob: atob,
    btoa: btoa,
    fromBase64: decode,
    toBase64: encode,
    utob: utob,
    encode: encode,
    encodeURI: encodeURI,
    btou: btou,
    decode: decode,
    noConflict: noConflict,
    __buffer__: buffer };

  // if ES5 is available, make Base64.extendString() available
  if (typeof Object.defineProperty === 'function') {
    var noEnum = function noEnum(v) {
      return { value: v, enumerable: false, writable: true, configurable: true };
    };
    global.Base64.extendString = function () {
      Object.defineProperty(
      String.prototype, 'fromBase64', noEnum(function () {
        return decode(this);
      }));
      Object.defineProperty(
      String.prototype, 'toBase64', noEnum(function (urisafe) {
        return encode(this, urisafe);
      }));
      Object.defineProperty(
      String.prototype, 'toBase64URI', noEnum(function () {
        return encode(this, true);
      }));
    };
  }
  //
  // export Base64 to the namespace
  //
  if (global['Meteor']) {// Meteor.js
    Base64 = global.Base64;
  }
  // module.exports and AMD are mutually exclusive.
  // module.exports has precedence.
  if ( true && module.exports) {
    module.exports.Base64 = global.Base64;
  } else
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {return global.Base64;}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // that's it!
  return { Base64: global.Base64 };
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! (webpack)/buildin/global.js */ 3)))

/***/ }),

/***/ 516:
/*!******************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FmySetup%2FmySetups%2FmySetup-address-new"} ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _mySetupAddressNew = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/mySetup/mySetups/mySetup-address-new.vue */ 517));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_mySetupAddressNew.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 52:
/*!************************************************!*\
  !*** E:/MB/mb-yun/static/mbcJs/browserType.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.isWeiXin = isWeiXin;var isWeiXinFn = function isWeiXinFn() {
  return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1;
};

function isWeiXin() {
  if (isWeiXinFn()) {
    exports.isWeiXin = isWeiXin = true;
    uni.setStorageSync('browserType', 'WX');
  } else {
    exports.isWeiXin = isWeiXin = false;
    uni.setStorageSync('browserType', 'FWX');
  };
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 524:
/*!*******************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FmySetup%2FmySetups%2FmySetup-address-new2"} ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _mySetupAddressNew = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/mySetup/mySetups/mySetup-address-new2.vue */ 525));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_mySetupAddressNew.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 53:
/*!*********************************************!*\
  !*** E:/MB/mb-yun/static/mbcJs/pageNums.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.pageNums = pageNums;function pageNums(str) {
  return Math.ceil(str / 8);
}

/***/ }),

/***/ 532:
/*!**************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FmyBuyeronAlready%2Fmy-BuyeronAlready"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _myBuyeronAlready = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/myBuyeronAlready/my-BuyeronAlready.vue */ 533));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_myBuyeronAlready.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 54:
/*!*********************************************!*\
  !*** E:/MB/mb-yun/static/mbcJs/dateTime.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { dateTime: function dateTime(type, str) {var date = new Date(str);var y = date.getFullYear();var m = date.getMonth() + 1;m = m < 10 ? '0' + m : m;var d = date.getDate();d = d < 10 ? '0' + d : d;var h = date.getHours();h = h < 10 ? '0' + h : h;var minute = date.getMinutes();var second = date.getSeconds();minute = minute < 10 ? '0' + minute : minute;second = second < 10 ? '0' + second : second;if (type === '-') {return y + '-' + m + '-' + d;} else if (type === '.') {return y + '.' + m + '.' + d;} else if (type === '/') {return y + '/' + m + '/' + d;} else if (type === 'm/d h minute') {return m + '/' + d + ' ' + h + ':' + minute;} else if (type === 'my') {return { 'm': m, 'y': y };} else if (type === 'y.m') {return y + '.' + m;} else if (type === 'y-m') {return y + '-' + m;} else if (type === 'y') {return y;} else if (type === 'm') {return m;} else if (type === 'y.m.d h minute') {return y + '.' + m + '.' + d + ' ' + h + ':' + minute;} else {return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;};} };exports.default = _default;

/***/ }),

/***/ 540:
/*!**************************************************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FmyBuyeronAlready%2Fmy-BuyeronAlready%2FMessage-details%2FAlready-details"} ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _AlreadyDetails = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/myBuyeronAlready/my-BuyeronAlready/Message-details/Already-details.vue */ 541));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_AlreadyDetails.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 548:
/*!************************************************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FmyCompany%2FmyBuyeronAlready%2Fmy-BuyeronAlready%2FMessage-details%2FBuyer-details"} ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _BuyerDetails = _interopRequireDefault(__webpack_require__(/*! ./modules/myCompany/myBuyeronAlready/my-BuyeronAlready/Message-details/Buyer-details.vue */ 549));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_BuyerDetails.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 55:
/*!*******************************************!*\
  !*** E:/MB/mb-yun/static/mbcJs/static.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.origin = exports.dImg = exports.Static = void 0;
var Static = 'http://style.iambuyer.com/mbc/'; // 静态资源地址
exports.Static = Static;var dImg = 'https://style.iambuyer.com/imbc/mbcImg/common/MBC.png'; // 默认图片地址
exports.dImg = dImg;var origin = 'https://so.iambuyer.com';exports.origin = origin;

/***/ }),

/***/ 556:
/*!*************************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2Fnews%2FnewsPraisedAndCollection%2Fnews-PraisedAndCollection"} ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _newsPraisedAndCollection = _interopRequireDefault(__webpack_require__(/*! ./modules/news/newsPraisedAndCollection/news-PraisedAndCollection.vue */ 557));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_newsPraisedAndCollection.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 56:
/*!*************************************************!*\
  !*** E:/MB/mb-yun/static/mbcJs/landRegistra.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.landRegistra = landRegistra;
function landRegistra() {










































  console.log('---------------------小程序---------------------');

  console.log('微信小程序');










  if (!uni.getStorageSync('landRegist')) {// 用户没有登录 跳转去登陆 每次应用打开都要取判断
    uni.navigateTo({
      url: '/pages/landRegistration/mp/landRegistration' });

    return false;
  } else if (uni.getStorageSync('landRegist')) {// 登录过 ，需要校验token是否过期
    var landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
    var params = {}; // 请求总数居时 参数为空
    uni.showLoading({ // 展示loading
      title: '加载中' });

    uni.request({
      url: this.api2 + '/server/list', //接口地址。
      header: {
        Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
      },
      success: function success(response) {
        console.log(response.data.code);
        if (String(response.data.code) === '700') {
          uni.navigateTo({
            url: '/pages/landRegistration/mp/landRegistration' });

          return false;
        }
        uni.hideLoading(); // 隐藏 loading
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

};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 564:
/*!*************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2Fnews%2Fnewssystem%2Fnews-systemlist"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _newsSystemlist = _interopRequireDefault(__webpack_require__(/*! ./modules/news/newssystem/news-systemlist.vue */ 565));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_newsSystemlist.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 57:
/*!********************************************!*\
  !*** E:/MB/mb-yun/static/mbcJs/getDate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.getDate = getDate;function getDate(e, time) {
  var day = new Date();
  if (time === 'later') {// 时间往后推算
    day.setTime(day.getTime() + e * 24 * 60 * 60 * 1000);
  } else {// 时间往前推算
    day.setTime(day.getTime() - e * 24 * 60 * 60 * 1000);
  };
  var getMonth = '';
  if (Number(day.getMonth() + 1) < 10) {
    getMonth = '0' + String(day.getMonth() + 1);
  } else {
    getMonth = String(day.getMonth() + 1);
  }
  var getDate = '';
  if (Number(day.getDate()) < 10) {
    getDate = '0' + String(day.getDate());
  } else {
    getDate = String(day.getDate());
  }
  return day.getFullYear() + '-' + getMonth + '-' + getDate;
}

/***/ }),

/***/ 572:
/*!***************************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2Fnews%2Fnewssystem%2Fsystem-feeling%2Fnews-feeling"} ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _newsFeeling = _interopRequireDefault(__webpack_require__(/*! ./modules/news/newssystem/system-feeling/news-feeling.vue */ 573));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_newsFeeling.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 58:
/*!**************************************************!*\
  !*** E:/MB/mb-yun/static/mbcJs/returnDateNum.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.returnDateNum = returnDateNum;function returnDateNum(start, end) {
  console.log(start, end);
  start = new Date(start.replace(/-/g, "/"));
  end = new Date(end.replace(/-/g, "/"));
  var days = end.getTime() - start.getTime();
  var time = parseInt(days / (1000 * 60 * 60 * 24));
  return time;
}

/***/ }),

/***/ 59:
/*!*****************************************!*\
  !*** E:/MB/mb-yun/static/mbcJs/uuid.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.generateUUID = generateUUID;function generateUUID() {// 生成用户唯一ID
  if (!uni.getStorageSync('UUID')) {// 如果缓存中不存在uuid，则生成唯一uuid，且缓存下来
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
    uni.setStorageSync('UUID', uuid);
  } else {
    console.log('存在UUID');
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 60:
/*!*****************************************************!*\
  !*** E:/MB/mb-yun/static/mbcJs/dataJson/keyText.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.keyText = keyText;
function keyText(e) {// 遍历keyText数据，监听到有输入框的，将输入框默认文字修改
  console.log(e, typeof e, '属性名称');
  if (e === 'title') {
    return '此处点击可输入标题';
  } else if (e === 'content' || e === 'content1' || e === 'content2') {
    return '此处点击可输入内容';
  } else if (e === 'content3') {
    return '可输入关于图片的具体描述信息，限50位';
  } else if (e === 'key' || e === 'key1' || e === 'key2') {
    return '可输入';
  } else if (e === 'value' || e === 'value1' || e === 'value2' || e === 'value3') {
    return '可输入';
  } else if (e === 'addres') {
    return '此处点击可输入地址';
  } else if (e === 'tel1' || e === 'tel2') {
    return '可输入联系方式';
  } else {
    return '';
  }
}

/***/ }),

/***/ 61:
/*!**************************************************!*\
  !*** E:/MB/mb-yun/static/mbcJs/getSystemInfo.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.getSystemInfo = getSystemInfo; // 获取用户手机相关信息
function getSystemInfo() {
  uni.getSystemInfo({
    success: function success(res) {
      uni.setStorageSync('getSystemInfo', res); // 缓存用户getSystemInfo

      // let shareConfigUrl =  window.location.href.split('#')[0];
      // uni.setStorageSync('shareConfigUrl',shareConfigUrl);
    } });

}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 618:
/*!**************************************************!*\
  !*** E:/MB/mb-yun/static/mbcImg/tabBar/home.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAyCAYAAAAayliMAAAAAXNSR0IArs4c6QAACQZJREFUaAXtmglsVUUUhvugdIFSgoqUokKhmqCJIpYorlTcwFSw2kYFWVpqookoKiZGE0ANJO77kgIllIi2irKmcWvcNVYwJsYNUBNDW0XRgtK9fv/NPTf3vXffUopbZJLJmTlzzpn/zJxZ7ryXknI4HR6B//cIhA6F+z09PaHVq1ef3tXVdSn2xpBz4eWKhkIhij2N0N3UlXf1799/y9y5cz9SG/U+pT45sGrVqgsAXQKQywCZ0xsk6DShsxFnasvKyl7vja5f9qAcqKqqOqOzs/M+DJ0TZiwUagHUdsA1wt9NWSOeQt2ZDeojKJ8KzfbrUX4nNTX19nnz5n0YwU9Y7ZUDjPiY7u7u+wFQbJYBJKAayVeysrLqS0tL260tiNbU1KTt37+/kJmbga5mTs45ifr6fv36LWJGdhkvEU3aATdcajA4VEbprJnOl+bn51cWFhZ2JuooqL2+vj51x44dFdhajK3hrsxeBqM02bBKyoGVK1feSAcPk/vTSRujtHzw4MEPMtr7g4D1lsesZO3bt+9WZvcOdNNxqIu8sLy8/PFEthI6sGLFikcAfpMMYbSJXIzhDxIZPph2BmoSfb1MdmaDvh6dP3/+zfFsxXVAI8+oPOYa2JaZmTl91qxZP8Qz2Ne2tWvXHnPgwIEN2JkgW8z2gngzEdMBxTzg69yw2Zaenn7u7Nmzf+8rwGT016xZM6itre1tZCcwC104cUmsNRHogHYbdokGDAxV2GRkZEz8q0c+0jHNRGtra4MbTlrYBUG7U2qkouraKiHabdoU85HgMRqqra0dJFlLJSUlfyDbbfW+UvVJCF9OX/XYGupiuiLSbtQMuIeUs0iZuiXE31K/EkZvxuhycoafD/hW6s+x6MrFZ/FXQaaonGzCZlNaWtrUOXPm/Gw69LcY8EtU57CbFHnY9TNBo4SORt/Z57VVGt8oxu5wwX8Jb5sy4D8Tj1zG1DunLOU88rG9ydgZTahkWl+iwgC/WWXDprKlsBlwD6vX3MYbKioqnjZBo5WVlc4FLCcnZ1BRUdEf4jPaUwCq+8w2dE4zWR1UVjbKwfU55RMGDBiQP2rUqO+NLzp58mTt/1EXPPq8nuanJIODF/oXdFgHjG6phDCye+zYsZUqx0oY6vK1LVGZkFvm46UEndCAcURwuCuo3a9vZZ32O3fuvAudXGahBL53+fNCiEbNRpGrtCFZ45o1dM9G71NGZr2rf0iJi0VngwZX9ycvcjwHdJ+nwbkSM5KOcDIoGJGlkkNncdD0J2MjGRnDJIzCajqeAwDRx4g8bNGt0gTiUUb/YtrPJH/CbrUxnmxf24RJ2GTHsKrsXwNjxMDD7YmuxJJTwpAWlxZW1G4lviV3a14AgImss9FQ6Taw+N+ivBbnXzbZWFSYWD/baT+P7GCVrN8Bu5c7HyFqTJToPAeH5bRdhcNUAHgEjHV8/FykBuQ60PmJ3E75WFjF0GLkPmIQrmKP/05ycZJhM6wpXghhyGFiXF9TSSXi8gHkUe1ZrlH2K3GfyaP+IW0XIfM95TIOoqPZZnM57EYPHDjwKEBfA/9bZPQ93cAIj/PbiCwbNuSjHUDYYdJoXkbqR9XZdV7EqLa3DAA8z70+U0LUQ+3t7dXQ46luzs7OPgXgVYzwr2Zk5syZe9Ffh1MnwnsR2SOxtXnTpk0DTSaSImPYoh1AOeoAiTQQVCd+l6H7HsZHtbS0OHd3QqKC+lnwv+AWexXx+1uQrng41Tpy5MhZFDVbY5qamm6NJWt8P1Z/CDmhQ6PnnSkkQe91Za516TxRQuz2ZK7g06ZNayOc7nR157s0ihg2HPXC3HOARmd6aBwRpZmAwamtk/EAuuOqq6v18jCR+t68vLy6BKpeM+H0povhONaTQi8oOYNrWCXgOUA5Kr6CLATxdFJi1Pk+7ujoGIcj+nb+wU5zFucT5LrIuxE3zVsIN92NLDmvEWy1xxjDT32Da1jDHHCUAXKqnj78ikHl5ubmE/QxrjYOtOkYH4ZuO4v52wB5TfnFXOSeYXc6mhHOAHgZQPVE4y1sZJxvDOxErRlhEjbXtvfs4s0AMbhFjRjM1ruNKxiTsLd/xqL9lZH9CdCvuIJVLNofKbeRTwKkzoGUIUOG6Ir+JrmcT8VGdH+hn5UA+pH7v7NemI3BtJ8Mr2fYsGG6qoclYRI2MQ2ryp4D7ltlk5iMzHTReImOBPorqJ5BvqK8jO1yoRYtdV0rZHsOOUWnKE5Mhb+Iql7fJP8kV+oCPl6+pqw+rwagQu99u6aLb4lBmqEyNpqE1fjeSUxDD6Opjq8jTydeF1gMm7CfDh8+fGZQR67Ms9AS8j2Ey2a2ym/c68kD8JTDEjOVD3jnOgKOu8MaqWjtcJ3WLVQRslFYTcabATGYmlpRhHL1YqbywSRO2jfo5CHsDCJc3gXgWbHssH7Op+01chY6L3CuvBopKyzCJL5hNJmQFYwyC29TPgdjzYREPiMX9vpGu+O9/4vMdP1Uo0bH6+Bd6Y5YHedCNfVdhEMnZV3sptB2BeAgoS3jx4+/vKCgoMNvRxsFa20HMrpvvcOJfq6/PWwG1KBXYlEp6LlP5YjUrfqePXscGtHmVRV+dKand42eXq2nAvw5stZAA+D1uXoleS8yN3KWzIgEL2PC4IL3sIlvKWoG1MCUv4RSMUW9gxYyrR+YAm26OqTBu814iejWrVvTGxsbp2FTWXeeLOjX0HcJiTr/Hclvi51pEo7Ww9NGsZ7QTPysIgPE5b/lYetjHNVXYsyHragQkgMc6/oZqBSvu2RAb5V67lPb35HUl/pU38IgLMIU1HegAxJE4XWUF7pKE/RWqee+ICOHkqc+7F1UdoVBWGL1EbgG/MLE/N/9vL7eDRuB79vzujnCYvrv/sBhTrCw9Yvkf/MnJp8TgT/y0b6B7XZDb37kY3vUfUu3WOeEVR+EzF/3I586sKQPeGZDV+GzjScKAOdnVoq7KTfS7tzbKeuH7xHw9cN31M+s8HQeLOI80CHXq5RwEcezprBiJPWeWgRA7ddJJ0Dr5ruJmauJt8skMtgnB8w44GP+1cCV0YxoNpQP6V8NDMNh+k+NwJ+t9O1tHOu+rwAAAABJRU5ErkJggg=="

/***/ }),

/***/ 619:
/*!**************************************************!*\
  !*** E:/MB/mb-yun/static/mbcImg/tabBar/find.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAyCAYAAAAayliMAAAAAXNSR0IArs4c6QAABktJREFUaAXtmGloXUUUx7PHl9ikbqAvtNSmVcS60aaiFGlBEBLBGCRqSLNH2w9VEBHFfjCixSBqpbS12RON2ucWGpu2IMalqDX90A8VwQYRS5IXFzCbMctL/J377sT7Xu99d17eC24ZmHvOzJz5n2XOzJ17ExKWy3IEliOwHIG/MwKJ8VI+Pz+f2NbWtml2drYQzI1Ub2JioheaSfVTh5D5ISkp6XhKSsrR8vLyX+mLucTsQEdHR+bU1NRjGLsDA8Vg14JsAKGPceaZqqqqL1wnRBBYtAMS8aamplqMqYO/MkzHLG0/Y4OMjUNl3Au/MkxOmh8w/kRNTU2/zZhr16Ic6O7uzvD7/e2g32fRIIb6aHdlZWV9VFxcPGkZM1gcXgdTiCPF0DzL+AhzH8CJ45Y+LTZqB5qbmyWSH1JvMTXMQBvS09OfLSsr+0lLK0ItLS13BwKBF2Cvlzk4EKA+Xl1dvVfauiUqByTyw8PDJ5XxKBxMTk4urKys7NNVaJXr7e1N6e/vf5m+XaofzDJW4nXVdqPaDmC05LykiEqbM2zCAiI26KZExjs7Oy+ZnJzMIb3Ok14j1jngPkz7oOiATnFKbSUoX1llnHhtBxobGx8C5JAASeSpebrGky5rSZezTPUwbx76NbUBZ9pxRk6kBPCfhjwnPOVHnLgWJ/4INp2fSc5Df43IUYniOrNnRtJG13hzjpxCHuElytRbqc0jIyOncG6V9NfW1j4PeVd4ymocfiTIRn5qOSDnPArFCCkN0ea8edYXMPc1AnGaakSd9kYM/VIOBgEmJR+F/C485SlJuyDr/HR1QCJG2WFCjMtp4wznPEKEe6g72aB5rOBtYH5rSueg47Dw5qoapxB9K9kzDzojBkdcHZDrAWBGhFDqi+aodFIuK0j+bwbve5EBfwt7oEh4VmE//bJPpNwTJM5PVwfMu41C6FJMrJTNO46xVQoHo8uFN1fBOJZxbJvP58tWMnbU1QGAN5kTZ+UNawey2D72xqfgq2N4m8LB8GMmnzoxMXGj6rejrg4AdpVMRNGQ3fXADjTKvtMij54VbOYVwrMyRmoJPzc3Z+gX3q64OoDh6oY5ZAcQax/Gvi0Y6DlL+owJj9FWXUq/DF1QXB0gMlnmLHW8XQASSwdp9BanUq7X61WpKs4s6LLot1WTYtsb2imv/cupq0O749fCiYWUEVRWRV5kSkHItUN1Kuq6AggOizCRWEXVkVfYi6ak0BrLZEO/pR3C6hh0xpyR2trauiZk9hI1SKH1Cpr0UvpVVwh1dYDlPKlmEJn7Fb9UtKenJ52VNl5gOPJzRUXFd5F06Tggp4TxdQVwNVX7BhtJsdMYX3pF6LhUxqFtODHnJCv9rg7w2v8NEPkOkJLL3f3OILs0T1bZuHehc54rdaObFlcHBIA0alBAAB/g9X6xaseT8iKTFb7DxPyE4J1zw9dyQK7DGH5EwFCwbnR09FU34GjHOSDWg23goitA0HbrYGg5IEAZGRnVABv3FhRVcXvcqaNAR4aPmiu4NPrAzRR5aJ0ETWeutgMlJSW/AFhGVZvqAPuhHmUxbWoCcR0vrVPg3mwa/Hl2dvYek3clUSsnT3ex0faCbDjPqrzPNaAkPz9/ylVbmADGb6Wri6quzN+kpaXdxW/HgTBRx6b2CigELlz7yM97MXxC+liBooGBgf1qXJfynX01sj1UZfwJj8dzezTGi66oHZBJOHGEN+QWnPBLG7qdTXiR8LqF7+xSZD0iz/xDpE1BaWnpqO58JbcoB2QyR5y84t8QnlVIo94kfBRls5IlGE+q3yuqT5fq3EYdsYhcH4Yb42zE99jU2hFk3lqZCMY5eVk6KnEZiMmB1NTUo9PT036MkV8u8nchx0Wf3XCTXaduX9SnUDiwHINEcQ/G38BYNCkp9/zD/GapZ776CxEO/99vx7wCEqL29vbLZmZmXoK9RidkrNY0UW8g+m/qyEeSiWkPKGD2QTG88V9H9WnQDcj8Mxzg2nuMu0wfUV34korkgKwA4/siyfxvxuKyByRafCMk87v8FVYhVyN69eT/ZxpyriJxc0A0yUc/L7R3SJGFfzxWC3BONu9uriIvWvtj4ePqgBgiKzE2NrYdJ+SuswEqP8bOU09QD/KLXf1Wp7lc/v0R+BNAoFg8D0Y+1wAAAABJRU5ErkJggg=="

/***/ }),

/***/ 62:
/*!*********************************************!*\
  !*** E:/MB/mb-yun/static/mbcJs/VwVhToPx.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.VwVhToPx = VwVhToPx;function VwVhToPx(num, type) {
  var wWidth = uni.getStorageSync('getSystemInfo').windowWidth;
  var wHeight = uni.getStorageSync('getSystemInfo').windowHeight;
  if (type === 'vh') {
    return num * wHeight * 0.01;
  } else if (type === 'vw') {
    return num * wWidth * 0.01;
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 620:
/*!*******************************************************!*\
  !*** E:/MB/mb-yun/static/mbcImg/tabBar/published.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAYAAAAc0MJxAAAAAXNSR0IArs4c6QAAB2RJREFUeAHtXN1rFFcUv/fubtZ8KQlKW5CaQusnaKR5aDWRWig+qQVBgjGiLaX/QOnHQyl9ai0+9qVIa5u4VgQfbKHgiy3ZaPMQqZZaG/tgFGkpikFjopvdndvzm80sk92Z2Zm5s5PNOAPLzN5zz7nn/ObeM3fOvWc4C/l4eXw8dTV3o0fK4iausXWS04/JNUyy5aRKO+O8XVdJymk6TzPOHnLGb3HJJqRgE4LxPzYvW3/5ck9PPkzVeRiNpbOn1+Z5fi8Z+7qUrI8x2arWLp/hnGUJ5AspmTqX6+u/oSavNnfdgFqRzXRMS62fDDokpXyltir+a3DOx+gGDLVzcfpB38CUf0n2nIED1TI+/NzcY/aeJtm76j3HXnFrCp8RnH3V1MyOzfYM/mtdx19pYEAtv3Smc6aQ+5T8zTukStqfOoFx5civHW9Npj95uG3//SCkKgNFw4onRzNH6HyUetDKIJQKTga/R8Pyg0LvwAk6SxW5SkAtu5hZk9eKJ8k/9KooUW9e8pOjKZE4+GT7wC2/bfkGKjE6vIcA+pZJ2eG38VD5OJ8iwA4Xewd/8NOu8MqkD7XsyaNSk+eWDEgwkm4odE5Cd3IXXu32xIDJ4pXZ6yfIYQ94baiR6pOjz3S3bDjiZdLqGqhnrg613nvAzpJH3NVIRvvVhQw/v3IF2/fflkMzbmS4GnroSVECCcDghsMm2BYIUBjPpeEWjZ5kBgVg6ba58Fk1e1RqNPP5UvdJZnAqr2EbbKwsr/zv6KP0KQCebk/BwQXf6zR1sAUKk8k5TfttSU0BVG4ozbOahNhqNym1HHrwS5hxhw4SZ7fp0f0lfhSHuq1it2demmeV3jKs51iWPSqRPfmWlNrXnhtTYKB3sV86O9O7727a/whiVl0703b/fu5HummvKYj1zMq5eLvYd/CbSsYqoBAFeFTITYT9gptMNW2ce7X/ulnBpl9Pbyjk5/40l9X/mt9rS6bXVUYdqoYeQiVhg0TDbLoSJACilxGt/uCYW5ArSxiYyxhbABSCbvPxpIW16v/viUMTTjQHNv8kYAAszBIWAIXIJBEXO+hm1m+xrtPzWJTbLwOFGHcpfFumPdUXwAKYGCCUgcJCAPkmxdURQ2wUzrK1hEnJljJQWC2JgnlB2mDGRAcK6240X6nrklKQBoQlC5ikxzIvoT0dqLycezOsxpdaO/mCpmOjA0Wz4p1LzYCw9MXqNtoSCFzRIgEtc8eHFQLABhgJbJiIn3ZWEBllshUYCewqMYriszUCwEhg6401OS41EABGAvuTjIL4bI0AMEqSs+qyJnsrpWDbJZ4QH7W1tPyeFtOeNnkl8h3yH5vmnm3u6CqmpqrCQTbV9eKc1p56NDu7WRa1z+gFd5tTXTc0YMTFyNBNqtzlhsG2DucTz69e3T35ws7Q3/RtdSJC182fl92+c+cKRWpVR80k5lGlrYBOLdaicfldo4EElXWdSLda6rugt9OWyPk9ky5q21fhIQfX7DWppgSgG2Gkz8yrhXsrodnrHm8c4dUOSjdB41e5N9DL4xvJ7NCxF//+qWGCftAFOkE35dtCGAXjzA1NOH9MwP9FT8CCUeTyPFXcMbjLqm5iZPg8lZcDaFZ1KsvoSZckl7KedGmupPn8P5lkDGOYVuGDOEqKbSVFvUnj7K4dg+RyK4lbZUe3LadnemAH7XUXFJyaDExgRAXRCLklyNnRGl58OCEAjATSJpwqxTRyTEgt4TxxLQbDGQHk34gt6bXj5NBdbc9zFhdVKp9BkpLAhk9y6NmomqlqF7ABRvrMnMIIF1QFRpXfwEYHCqlcUTVU1S4DGx0o5LvRSsyYqtCo8QMTIxew/FJME9mhqBmqao8ZkzJQSAqMn35maPlMCZNSWRkoZE4iKdBcNcTrhENbTjQHNjUSsDBnk5aBglhkTtIpp9aED27JOttGzlS9+OplRPMhUZUlN49FWc4CoJBeSi+Ax8vUEC8eiycfVzZnVVZZpx7/gUFlqm3V6sZibXaFwaTgWSbEKd14TTtA4Zp99QDCWab1ZtcqoCBkMbZPOysfHtX19mmoROFTyhMeHqHHY0OnwAYNH72ujBZ6B3fQ/Kkq6rfARxkNoyJycCmcWpdvCBjtNNSZbIXNViBBT0ugQEBOCBfiCK6fhoN602G7PBjYbwsUiMXtA+cEF1/gOsoHbHTKrILtls7cDMq8v0LK/gFzeVSuqSedIr9kO+QMOx17FCphzHY3bzxMiJ43mKJyhk26bRbOu9LGmkCBAYErJCpHCSzYApvcZqq7AgpgIZu7u2XjbnRV/F/KB2yALW4z1GErAevtgM9CDq4mtfe9cTZGbTjufO/Ah3bTADstPQNlCEpczOyVmnaCZqeelrsN/tDPip8c8Q0UDI0/YuPhdpemD/FnkVxDFn9oyzVUpYrxp9s8AqbHtYpz/ZzJQRqedc3coifYmGR8mL5N+b05fOtRZcfqSs7cUbKJGH9e0gSG20sk4FR9sFTf6y6xO7nmB0uxqQT7JdzOqN3qVave/3+e6FlrwqaOAAAAAElFTkSuQmCC"

/***/ }),

/***/ 621:
/*!**************************************************!*\
  !*** E:/MB/mb-yun/static/mbcImg/tabBar/news.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAyCAYAAAAayliMAAAAAXNSR0IArs4c6QAABAxJREFUaAXtmE1IVFEUx+ersaZBg8isXdCHrRpC7AMqKKRauIhqFg6Wn0WLPhbtishqU7QKFPKTQBIlKIJAMpiyTYSVtShbqEFBaEEqY6KNTr8zvCfP995MvjFHi3fhzjn3nnPu+Z9z73v3zHM47GZnwM6AnYGFzIAzmfOmpqbA5OTkNqfTmZlMbz5kUzS32/3R7/c/DwaDw4l8mAbQ1ta2bHh4uA6jUCLDNM5/xVdRZWXlUzOfLrPJkZGRy8wvBvACbw0n4F5jY+MqGeibRz8RDoc9vb29Z5T5QYyr6F/0emkYuzlFxfg5FIvFVsIfh7+p92sIoL+/fyMGS0UR4NUVFRU1eqN0jTnKHRzl7/jLoG8x82s4QoBerlEc0PBpZ3l4I+AZVRz7zQAYAjBTWsxzdgALvTv2Dtg7MMcM/PNHyHCRzTYhXHbOhoaGXdAh6pR3ejsuIW8kEtnNfF9ZWVmfXt7c3Jw5MTGxg2KxG/uU75uUdwDwtYB/BrC3dXV1J7QAmXdRT3UAroMS4EN9ff0+rVzAj42NdSNv56LqQb5eK7fCpxRAV1fXEkCWaBzNCIAyPBe5ZN8B9UJKhFfb+Ph4Afw6GSNfQRBBVWaVphRAXl7eLxx9Vp0BYMYRycjIkBJ4TJVDZ8gBnXSssfsjawiAbTX9j6BfiT8bRwDeznwLgM9q5aFQ6Aeyo/Qwvcbr9d7QyikQ3zA+iawTWlVeXt6qlWt5gk2Kx/AQAywWjUa1a5jyPJivERw0FTIJyEcQ6aaNB7cWgXQHvKmOTBIkMcQSyg07kFBzkQrsABZ6Y+wdsHdgjhn4/44Qtcv0S5f374IHCAa3bFKiy8AA0OPx9Ku7yiVSKHWPOk435WPWXnxmiV+XyzWj/FCxmF7TVJevUNgqSgTxjegHpw2czijjLsYXkpXBVKtr0buKXh40nkV1jVlSN743YRvHSAD7KTke620NpYQoYHgKwzCsDyqf9KTHG2Oh8pEpAJ+P7lRcoPmhGt1OTXUfeY5m2jKr+BI8d83Ay4KmOyACKYkBcQU2n4W0X6flK5lPdDhum0tLS3uEVxuZP8ZzJDWO6InzUewnVPlsKXaSqY/0VsDfUsYG84QBGDSVCQXgHRmy6B6Ktk7hAelCdh16XsZKa8vJySktLCz8qU78bWp6hKw64e9jFuBbAB+vTpVsXSK4a1bXsqo/5wA4ahv4APsQx7mK8wi0GPAPrIJJRd/wGrW4SAHPyUts4uDJ/Ceei53pAi9Y57QDHJmLasCA7/T5fIeLiorkc3jaWioBDOnRAf52IBA4rfxX1ovndWw5gOzs7CcDNLK/GmRRLphzvOaq5xVlksUtv0ZlLd44csseAPwL/hu/T7K+LbIzYGfAzkDyDPwG8TCB1IUs/P8AAAAASUVORK5CYII="

/***/ }),

/***/ 622:
/*!************************************************!*\
  !*** E:/MB/mb-yun/static/mbcImg/tabBar/my.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAyCAYAAAAayliMAAAAAXNSR0IArs4c6QAABS5JREFUaAXtmV1oXEUUx7sfZLd1kwerrqQUIURJVYKVgoIPZkUtrKwKtQFl850IVg34ga1YhCJafRB8UBHynfTBBCTB0JW2YB5EFMVC/a7FmIIhJhZxozFuspv4O8tMuO7e3b337toE3AuTc3bmzDn//5m5c2cm27aVn3IGyhkoZ6Ccgf9zBlylJN/f33/r+vr6QcpdlN0ul2sncokY8+ifut3uk4FAYLyxsTFVqrglITAwMHBtMpl8B1APFAIGkfMQOdTe3v5hIVsr7UUTAHxdKpU6LRnXAQH5O7+/R15AXkP9HvTd6DpekrpHu7q6BnQfp1I7dNR/bGwsEI/HP6dznTiQ7FIe6+jomMp0ODQ0tGtlZeUN6h9SbUlsGzo7Oz/OtLXz223HONN2cXHxaeo0+Imqqqp6M/DSr6WlZZaMH2T6dCo/XuTbhlFR1faEYwJTU1MCoFuFi/t8vkO8nCuFwkOwj8x/IHaAr+/t7b27UJ987Y4JzMzM7APATnEOoDebmprm8gUyttHviOF32KDbVh0TYNXZq6NB4EutW5G1tbXf0ic9Wsh9VvrksnFMgMDp7CvH53MFMKsPhUJJRuGCarvazMZqnWMCBNihg3i93ktatyHnxRYiARt9skyLIZDlbDMqygQ2I+vGmI5HgLkrm7T0s7a2dqXWrUoWgavEFvmn1T5mdo4J4OxX7ZAl9XqtW5GQd1HSfZC/WOmTy8YxAVaeT7RTshjRuhXZ19e3H7vtynZz9kJtbW1fAfw7AUEWm9kS3KwA5RUq+8e1EXujMa07kY5HQIIB5pgK6kbvUfujvDg49DyFwS1iRAIm2Budy9uhQGNRBNhdjgLipIpx+/T09Av54gH+Rl74V5RN3O/3P5nP3kpbUQQkAJnvQCwo/cjw8LAcYEwfwL9Mg081PhGNRn82NbRRWTQBRmGeeSznAiHjTyQS7WbxeXGrab9f2hi1M/Q7YWZnt65oAhKwpqZGppI+C9TnACEveToetiUBL3FKQmB5edmTA7RpNVPJlr2pE1VZEgKzs7OPMD0qlM9vcgT82lAfxb4ksYs61MdiMd/c3Fw3GX0JcD6mRgpgtzG/vzCA3VD5VpylPX0QwvZ9Gro51F/cMHCg2CbATcR2biJCAJAXUi6xjPugFwEvZEwfuYJh2yHk0mcJIYx+ivKex+OJ8XG0va2wRECuT7iBOECgRgCHkHobgJpeVeRwcpiP0jCg1tOVOf4MDg7etLq6+hbNdxpNpB/PWerG0U9YHZm8BFjTryDYszh+hlKZGZDfso8Z5TplhBuJuLG9kM50ug8beXdkJP91KlNJGGW/dbS1tfXHfL5yEuAi6gbATxBgj8FBAuenKTGcT8pdj6HNkTo5ObljYWFhP3HCOIggg9oRcZYo7Yxszv2SKQH56PBifoajXeIMJxcRx8n0u3YzLf2tPkxVD1P1HuwPQ6RB9Vsj/gGm1ISZH1MCDO8pHNwrHeh8JhgMPhiJRP4yc/Bf1YFBSLyqMPxRUVFR29zcvJAZL2st7unpadDgMf6ouroa7JcXvIAk468hjooOnkq2KM+LnvlkEcAgqo3I/rFwOJzQvy+35D17nZiXJC5YHoZIFl6vCag7VIffkJVsgQve+Zv4KEkVgMWPfDfkJQ+OjIxch/6TVOoniwBMf8C4jiIfqHHu/rXtpkpwLXF+2DiHazBZQ4LhcxRZdbbMA56/AfM4K2DWDYbpKsQn388yupeOVVuAhUyBc/xLKiv7WwBbGUI5A+UMFJuBfwDWKeUh3qg/1gAAAABJRU5ErkJggg=="

/***/ }),

/***/ 623:
/*!***************************************************!*\
  !*** E:/MB/mb-yun/static/mbcImg/tabBar/homed.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAyCAYAAAAayliMAAAAAXNSR0IArs4c6QAAB9RJREFUaAXtWXtQVGUUP3eXNwusLAii+UJUJFREhilAJyktHZ9ZM04wZo5Tf+T0cMZmysoxHzOZ/tFjesw0PXykTQX4aBgtywDTAtQgREwU5CXrLiwgLLC7t3O+5S537967D0LKyTNz9373+853vt/5Huec7yzAPbo3A//vGeCGQ33t+Txt5+2uJcBDFsqLo4fn8c2BDusMHAdNWNcEPN8IKq44LFRzvD1lZftwjD1kBaKKC8KM0LGW42EFgp0PwPt5D4izoFKneQ7yIyH8i1uZyzu97+vM6bMCqaWl/ufNl57F2XwDZzfaWdwQvjjQA8dtSwlK/Lhs7tx+XyX4pIC65MBy3mbdg8DjfR3IIz8HVzmVepM146kCj7wiBpWorFjkeZ7zK963g7da8+8IeBoZJ4Xks3FwPEUwkgaPjNF/fq0xGsz7eYDlkr537BNBFUTqgnL0SU92eRrErQIE3mAw/4JCUjwJGv52rlynC5zvSQnFLUTbhmb+3wFP08HPYSvvYTspKuBfsn/7SG4buRWk8QmHXJtQJ7uFmLWhA/sfIU6tXqFknVxWgOw8M5UewIeq/ED8yM6EBxneNhMewiXH7+I97U5K2c6/EDcddk6aA0EqtZM8s80KB1uvwYYrv7L6T6c+ANnaMU48nj5a+npgceWPYLT0ObOiiWW4AN53bgCMVkTEwgPedNWdh21OXw2jA4KhutsE3TYL6+0HKpipGcXK2jOHoNPaD6eSF8J8bYxIuueivs8MqeePQ2NftyszeuxILiJeGnY4rQDFNu7Ak1QCTzQXB+rBWSdaoI2Fk8mPQHmXgYFndRUnQO08P4y3MnUZTA0Jh4Tf8qCu9zarE36sOLgiYdhi5BCfZBWczgAFZooCJA1WjOAEenP8LFbcVV8pVLE3AZI+AoO03i34gU5y+BwKUEhsjyqFIbx7Z+PsZ0aMhgtdRvjOUO9dpyFyET7CKe7uUIDF8z6FxHYxWyfYZ39r3UWx3DtU5v3sOAfFOxTA1abLiE+0EK3Mg+GjoazTAEeNDT71HTKzBKf4ENNNyid6Lm4a49/bWOW2X3pYFGxE85sWpoOJQRrG+3vKEjhtugkHWmsh33DDbX9JoxPOf6RArH8Qkx0z8JYMBKP8AuDg9CxYOMo+Zr/NBvp+M/Th+77AUFgVNZ495zr0sKa6yMUqSeUNfMsrgAfEqUGhs1P1Hpz5w2HzmGM723kLzuEj0MRADRQmZ0NCcDjUmbtgW/0fkHerHkzoI4i0qNyjqNj2ibMhPTwaaEXmXSyE6p4OQYTsW4pz8AzQBdxH+hYBvV53gXnlr3Cmxd75y2kZDPwxQwPMLj8Gn9+86gBPw7Sjtz2kvw5JpUfgG30d6PwD4WjSAgiWeHgXSBKcgwpg9sCF2YuKXTcqocTUChNwb78Yl8h6bIhNgAw0rZfQW9PW6BiYdTlxvbwNci8Xw1ncRpODw2DT2BlybIN1EpwOBQZSH4OMPpR23Khg3Dkxk9n76Rj7lfmVa2WOcMOduD5UYsv1C4xlPSrvjqQ4HQpgJ8rdDIl+aGuGHqsFEkMiINY/mFmbtv5eKDR6L/InUws09XbD+KBQmBIU5g6Hk9BhUYDCgC5UgCgR4xw1p4IGDMiE8ODd+DT4/v5sl9jopbGJUDFnqQNsLR52onGBIY46lwIlx0Q0qAAHRaJ6j8WpaF3oPkC0LHIcRAcEoXm0wjWzc4BG7RQmL0KL82FCOkSjyQ1EBdfhNnt7Uiq0W/uIhVGo2i7PZHGTHsLMnsBPb4cfoHRfR2cXTqN3GbaLqUvBinu3Da1J1IAf+AwtTSva+V5UJClEy/wAte9uqIKHMGai/b0uZgprD0awpNgzNWcYHg1+zwzVYr6MR1NqEmMUlTkLS0uKahwrQLlKSveJ2twW89GEXu7uwNlU49sEO+sr4OXaUnZoj6DpVKGwtQOHuR8VXVx5CjbXlsHZTj1cRlv/QVM1pGFIfqXHnlVcEz2Jbb0zaI2EMF0KgPBJc6qOFSBmylXids6WdpT7zkHTpzTQJy018ET0BNiGgR75gb/MnUBKkOOjR0rxeGjfmZzKqt9Ch6dEDJ+k0bECVE+JVryD6CU8Pn+eam+BvbhtQtX+UDRrEQZ8yinUhyJi4UTyw6BB3sPo2E62N8uPRzcywichpysltamK9z0PNv49CZ/j05qVy8qakoOKK0AMdBujOGg1rgTt68K2JtiPgRtZGguuRppGhze5MfA4xkMc7o3jGM2uqvoZ2wYvSo5BqaDiNtoyc93fiYmPZZ97qi7hVrJ7I6oUUX9mDtvfIcUHgLyoJ1qPh3Y3bo8IjH3kyIj+gu4SHzXXOMyuCx8mflOCZyTKZa9dVoA6u8sLUfAVgAd3M3pZbykAzebiyLHwGD46v0DcLn5Qgwe5BA9sobHRKUaSk+kuLySrAAmhLLHNxr8qJ3Ak61QqbqclM/c1pTEVFWAp9aJ9ebgjRywrLQWJ4AosWbkr8YwoHAw8GtJOwjd1ohQ3po7KhbqRfXPlNL478IRHUQFqpNQ2pbhpJuh7pIjG8ya1TngUt5AYLG0nyhKPxJmgPd+fkbPF08wL+LxSQGC+a/8jExSgFDfZY3Iqw+GxmVzy/CiP5Cql0IXx5d4+rYBYwF37P7FYCaHs9T/1dOvDe8dw/lMvYLj3vjcDQ5yBvwHouiFpknHt8wAAAABJRU5ErkJggg=="

/***/ }),

/***/ 624:
/*!****************************************************!*\
  !*** E:/MB/mb-yun/static/mbcImg/tabBar/finded.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAyCAYAAAAayliMAAAAAXNSR0IArs4c6QAABR9JREFUaAXtWWtoHFUUPmdmsnm2S6upJhFsSw3EKlVbNdlkIwFbFMR/hjbprk/0h1j0ryBIURHBX/pL0Uq2pbpKNS2iYmlKsglGWytCaLXYh0nUVpPUNGn2NXM8V13Z3czOvTszQQq5IZl7z+M7j/u+AVguyxlYzsByBv7PDKBfxleOxFfPm6kHGO9+/l1HRI38XQOIfwLRJCJMEmhHA4AfJ8O9Z/yy6zmAiqHYJgvoJSK8D4AMRcdOIOBuszPyiaJ8STHXAdQNxusXIP0aoRUFTm1JCw4M7pWEplfsyoR2nHAQc2S5CiAw3HdL1oRDjLzWEV2FibiAiI+aHTs/UBEvlik7c0YitjVrwQgDrS0Gc9Umqub5sl8bjD3vRr+sHggM7r05i9ZXPGRWuDEm0+GeeNgMR/pkcvl85QCCQ/tWXSbra56oG/IBlOqIF5DoKK9I1xHBnYxRW0IvqRv6PZlQL9tRK8pDaA6sV106T4EAtZmd0e2c3a5Go7IeUY9yMOdtXKwys+Z7D1Fct+HZkpQCqBx6v5kz95gtgozI66uZ1YM5sYlQ94IZ7o2txpW38lL6aY6e9205MJx8JK/tWFUaQvpQbD9PtO2OSM7MFDv7BQGMGpren+7oGRPim48dq/juysnDBNRZqI4Tt9e0rD++ZUumkL64JQ2gfixeNzWV/INVKxeru6AgZIDwRasz8orQrh6JN6XM1Gneravz0TQNt2U7Il/m0+zq0iE0PZPZxor+OC88IKjgPy/rib7HRXMh1D2pAb4t6vmFLHgwv12qLg0AyBLnG98LWfj6tYn+f5Zj1D4sNsDDSsmuPACgm4rB/WlT8JI1f4fAWlO14ttFmIg3bhyLBxbRiwjSAAhQnCqXpFhotgrg5s11aV5W0wVGePU6MwPXF9BsGiqnxwYbPb9ITxpDsdFEYvxenhuLsp2lpLD9s5MxlQCc9L3xiNZbAANeQKRDiMFnvBjwoqshXpLpSwNAIN9uTzJnCvmYbWi6we64USAmDQAQXF82CiyV20A4dW5dV1KmJg2Ab02er30yJ+z4vLkp2ZUGkAlFBrgXfrIzsmQ0RDIC1rsq+NIA+JLBWwG8owLmlwwf0A4n746eVcGTBiBAqgNVewBwTgXQHxl6QxVHKYD5u7p/47mwSxXUixxquNcMR8WDgVJRCkAg8W1qDw+nj5RQ3QudCxr4dDnqygEI0Fq98ik+syzNvsDPK5qBvdOtO2eXLIDZUPd0jUZt3BOj5RiRyiJe1IG6sqHIiFS2SKCsHhC6c+3Riw16ZRfPiQNFWG6bJ/nS35oJR10lRXqlLOUV35FRT8TG+RTZVEpGhW4YRks61HNKRdZOpuweyIGI/YF/jufarr6Is6m2HT+40v1XyXUAf+trdNCLcd4iD4lEeMHwFMAL7by0Ar7JO7X0+aPASdF7gEdqavRnC+guGq7nQL4tcXc9PwX/PV7l8+zqtcHklQubovN2vHJpvtzITk+lN1gaPUFW4duOrTMa0sJlTey0n9nyyyT60gP8cjfIq1K4DNup+iBc40cveJoDOYf53fRzPuxlc23ZlyfugB/OCzu+9IAAWnt2oGpucpZf3ZwLrkrR7xu7fTvZ+jIHhMu/jP/abIL1nLP7zJ0RvQWu/p1kh+1bAOnOnu+1RN+PYOFufvu0xRXHjwat6uCEnScuab4NoZz9iuF9t1mW+QzPi608QhsBaZq3qm9A198y23v7c3JXxVecl64KR5ed9JCBvwCnrnoDjuRVwgAAAABJRU5ErkJggg=="

/***/ }),

/***/ 625:
/*!****************************************************!*\
  !*** E:/MB/mb-yun/static/mbcImg/tabBar/newsed.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAyCAYAAAAayliMAAAAAXNSR0IArs4c6QAAA5JJREFUaAXtWE1oE1EQntndJG1NtD9W8KiIVgWx1EOrjdAexB+w6kH6k3rXg1Dw4sGexKvQg2dtixXx4K1gsYe2akHUQxHBinioB7G1qbX2J8k+57UhvN23m/3B/EB3ITBv5pvZ75t5Sd4uQHAFHQg6EHQg6MB27gBaia+dHt65lIJ7DNg5YGy/FaZoPsSvCDhag7Hb860dy+b7SgLqPz6NLvxaewcMDprBJV0jfK6rrWj6efTqH5GHIi64vbiw3l925DkxaugmN24LlyRAR7ggxMvK1JGdNxOSBJDSQ2ZQ2awZNpi5yAKAqWZQ+axlbhYCyoeuGyaBADddKiQmmEAhu+umdjABN10qJMbHBHAWUbmiacoxQOUWIK5aEUTEJ4qGp/iH21YYQPjLa/BavCYAzlri8ji1PDE5hLAcCWH7anNiLrMVnVGnhucZYw9FMBEezcR7uwTfa3VyqJpwZwUf8cfrmXhicGPLOVM5Pfx2fQM+0cEnKuLy2Z4mgAzGOXmxYENNeISmkOWQjSA+EjGbNmNGH+Ucrzw8IuJ4bQT2UvQ52Z4E0IjT5oL1R+p1emZgBr8O2QGJXsWYy5gea1o25nE4WuWKdYy2JwEMoT36anCPWGJy8vslWkdEH22BTuOaVqiLW4qHK7K5OSivTa1ozzlcGNIDjTIxKHfFWOiDAlpfSNO+bGTWz9AN7xPhXUYI8UV8oCEMcH+awU0a0g0zhtZJVKEvjBVjqXT6gA5pqgWNFricSz99zcDZsOAoFwJyxUphmAV42kKlIOx0z0CAU4cKHQ8mUOgOO9UPJuDUoULH5Qkg6IW+qe/6FtxkAT6OtL4JeU6Uj9uSADpxjnmuW6QERPbCfCtJQBSVfjrJGI7M5qTSrHEutiNG3IyXJGAp3rNYpbKmzacoxEUjvAQr4kBcRjinZOPlpJmBdJgTAXSCxOqpx9VMDeVwK5m1Z3QCbRNx9jbOK6h0Vamh9/YY+whmUizZ2p0kAbYn5LyPlNlEwxTUiaEUf9ftfOFMOKRdXGvp+vbbGWyLQOixjfGAtIXyol0GSfjzurrISU7eZYpvWN4J+KlKW+ZuqrWnP9/Y/dS1y/l/E6DXK6gonel44k6xyHNR3ifA/w2lrwDOqRp0pFoSvr6sdt114/c8AeI+LRamn6c3lWH1RKqlt+jkOQ/PAqpY5AG9kBqnP7sl2u8D+/bubltp7v4higrs7dSBfwjJ6suzuS/8AAAAAElFTkSuQmCC"

/***/ }),

/***/ 626:
/*!**************************************************!*\
  !*** E:/MB/mb-yun/static/mbcImg/tabBar/myed.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA99JREFUaAXtWFtIFFEYPv/MrKOmYmaXhYKoXjKEAilaVxN6im4UIeW6gT1H5FNQEUVF9VRk9V5eii6EUtFDILiWvkhUREFEZZJBW17TdWfnnP7BlqDdPXPmzGhFOy9n9/yX7/v+f+bMOUNI9spWIFuBbAWyFfifKwBeiy/pbSn6TtmCRIIcYoSFCZA4YWQAFPJIIUqbEazv9RLTEwE53W2rTGYeYYRsJIwt4BEEAlcLQGkcqQoN8fxEba4FKF3NhxHsBCFMcwDaszq/bENfRYUhGpPJT8lkEJnXItfOIPHTTshbebFT65/FXp0TwbDzke6A1t0WpDQRsQPg2KfySe6S8eraLxwfW5N0Bxg1D9pm5zvoEyTWwHext0oJYIwBrjA19un5HgCwhe9hb5USoEdaV2Lqefbp+R5YiLUr3jzQ+V58q5QAqjDX5H/S0vujo8v4FPlWKQG4jMzhpxW3UtNYLO6d6iklgBJSlppKboYyUi4XOR3leBktfnq3eHRsPIqrueoG+FcsmEWFBaXDa3YM/5oT/+W4A2Aa+B7yirxF1F0uxwKGKmpHcIPWL14jG0+AT7LVtzI7FmAFAYMOa/TiAsLuu8kjJUDV1MvYBdcbMSyFqTLt0qwLiAfqXhOmnHIDbMUqwM7Gq+ueu8kj1QEL0KwKncS9/R1ZcNxG3D0aDB+TjU/GSQtAAsyv6WEc+5LJREcrxq/qoeMA+Epxdzl+D/wOl9tzfWk8YbzEt3P+77a0/4FM5ChqWawy9CGt3eGkdAeSOLH1e94rABeS/+1GBDzvFXkLy7UAK4lP0a9Yo8iVAz5hX5F8rm+hJIjSdQ23F3ZbbIjS6vD8ZIwXoycdKO1uL8Q1vViA0Nz5L28WCPgJu3giYIiNWYd7gc0dU799nUJf7y5Xt1BupHWZweh5PF5uc0IJQdt9OmmMrdv7zklcOl/HAhY/uZk3mIhvxoqH8WS8BZdPyS6Cifuge0SFZj/oDwYCtZPpCNrNCQmoYZ1apPvjJrzP6xgjW5G8ZyeyaYIwju/FDtxbtO0M6A9vQa1pRzxp5wqwvnMOG/QAEt+PnwwXJoNmePyMeE0lSlFTNLh9zA4rowCtq6WSEnobEyyySzIzdhhUNLIrEQg/4eVPe/+qkdYwBdr558hblJmfmqRT7Wqp5wlI6YD++MZygxov8JbJ4wXOmg1g0qf4yqcqd79Nh5nSgQQ1mv4a8hZjLGTCjF9MR96aSxGAa3owk/OfmmdAqjJhpwjAj57chyZTopmcx4PT40z5UwTo+dCAAR145p3IFDRr88gBH9J2PY/smzXMLFC2Av9YBX4AasENk4Vu4R0AAAAASUVORK5CYII="

/***/ }),

/***/ 63:
/*!********************************************!*\
  !*** E:/MB/mb-yun/static/mbcJs/newGuid.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.newGuid = newGuid;function newGuid() {
  var s4 = function s4() {
    return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
  };
  return (s4() + s4() + "-" + s4() + "-4" + s4().substr(0, 3) + "-" + s4() + "-" + s4() + s4() + s4()).toUpperCase();
}

/***/ }),

/***/ 64:
/*!******************************************************!*\
  !*** E:/MB/mb-yun/static/mbcJs/scrollTitleChange.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.scrollTitleChange = scrollTitleChange;function scrollTitleChange(e, num, datas) {var _this = this;
  console.log('-----------------------根据当前滚动位置判断当前title和横向列表切换-------------------');
  console.log(e, num, datas, '---------e:当前节点---------num：距离顶部多少切换----------------------datas:当前数据和当前index---------------');
  var view = uni.createSelectorQuery().in(this).select('#' + e);
  view.fields({
    size: true,
    scrollOffset: true },
  function (data) {}).exec();

  view.boundingClientRect(function (data) {
    console.log(data, '节点离页面顶部的距离为data');
    console.log(data, "节点离页面顶部的距离为" + data.top);
    var top = Number(data.top);
    if (top <= num) {// 当前组件滚动到顶部了
      _this.$emit('tap-ChangeTitle', datas);
    }
  }).exec();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 65:
/*!***************************************************!*\
  !*** E:/MB/mb-yun/static/mbcJs/mergeBasicData.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.mergeBasicData = mergeBasicData; // 功能模块数据返回合并到原始数据上
function mergeBasicData(data, type, newsItems, indexNum) {
  console.log(data, '---------------接口返回的最原始数据------------------');
  console.log(type, '------------------当前模块的type------------------');
  console.log(newsItems, '-------------------更改后的模块数据---------------');
  console.log(indexNum, '当前需要更改的数据所处的位置');
  data.map(function (items, index) {
    if (items.type === type && index === indexNum) {
      // items = null;
      // items = newsItems;
      data.splice(index, 1, newsItems);
    }
  });
  return data;
}

/***/ }),

/***/ 66:
/*!**********************************************!*\
  !*** E:/MB/mb-yun/static/mbcJs/urlCrypto.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.urlCrypto = urlCrypto;var md5 = __webpack_require__(/*! md5 */ 47);
var Base64 = __webpack_require__(/*! js-base64 */ 51).Base64;

function urlCrypto(params, type) {
  if (type === 0) {
    var paramStr = JSON.stringify(params);
    var base64Str = Base64.encode(paramStr, "UTF-8");
    var signStr = md5(base64Str + 'bjhcyxdsjyxgs0506');
    var endData = {
      "object": base64Str,
      "sign": signStr };

    console.log(JSON.stringify(endData));
    var endString = Base64.encode(JSON.stringify(endData), "UTF-8");
    console.log(endString, '再次加密的数据');
    return endString;
  };
  if (type === 1) {
    var paramsData = Base64.decode(params, "UTF-8");
    var _paramStr = JSON.parse(paramsData);
    var object = _paramStr.object;
    var _endData = Base64.decode(object, "UTF-8");
    return JSON.parse(_endData);
  }
}

/***/ }),

/***/ 664:
/*!*****************************************!*\
  !*** E:/MB/mb-yun/static/mbcJs/code.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.runWaterData = exports.qualificationType = exports.authType = exports.screenTermData3 = exports.screenTermData2 = exports.screenTermData1 = exports.rightScreenData = exports.leftScreenData = exports.screenData = void 0;var screenData = [
{
  code: 1,
  text: '昨天' },
{
  code: 7,
  text: '近七日' },
{
  code: 30,
  text: '近30日' },
{
  code: '001',
  text: '自定义时间' }];exports.screenData = screenData;


var leftScreenData = [
{
  code: '2',
  text: '点击数' },
{
  code: '0',
  text: '总消耗' },
{
  code: '1',
  text: '展示数' },
{
  code: '3',
  text: '点击率' },
{
  code: '4',
  text: '转化数' },
{
  code: '5',
  text: '转化率' },
{
  code: '6',
  text: '提交表单数' },
{
  code: '7',
  text: '拨打电话数' },
{
  code: '8',
  text: '进入关注我们页面' },
{
  code: '9',
  text: '点击自定义按钮数' }];exports.leftScreenData = leftScreenData;


var rightScreenData = [
{
  code: '0',
  text: '总消耗' },
{
  code: '1',
  text: '展示数' },
{
  code: '2',
  text: '点击数' },
{
  code: '3',
  text: '点击率' },
{
  code: '4',
  text: '转化数' },
{
  code: '5',
  text: '转化率' },
{
  code: '6',
  text: '提交表单数' },
{
  code: '7',
  text: '拨打电话数' },
{
  code: '8',
  text: '进入关注我们页面' },
{
  code: '9',
  text: '点击自定义按钮数' }];


// 投放商机筛选条件
exports.rightScreenData = rightScreenData;var screenTermData1 = [
{
  'code': 'createTime desc',
  'vulue': '默认排序' },

{
  'code': 'consMoney asc',
  'vulue': '按照已消耗排序' },

{
  'code': 'converCount asc',
  'vulue': '按照转化数排序' },

{
  'code': 'clikeCount asc',
  'vulue': '按照点击数排序' },

{
  'code': 'infoCount asc',
  'vulue': '按照展示数排序' },

{
  'code': 'createTime desc',
  'vulue': '按照申请时间排序' }];exports.screenTermData1 = screenTermData1;


var screenTermData2 = [
{
  'code': '',
  'vulue': '全部' },

{
  'code': '1',
  'vulue': 'banner' },

{
  'code': '0',
  'vulue': '其它位置' }];exports.screenTermData2 = screenTermData2;


var screenTermData3 = [
{
  'code': '',
  'vulue': '全部' },

{
  'code': '0',
  'vulue': '待审核' },

{
  'code': '1',
  'vulue': '投放中' },

{
  'code': '2',
  'vulue': '审核未通过' },

{
  'code': '3',
  'vulue': '已暂停' }];exports.screenTermData3 = screenTermData3;



var authType = [
{
  code: '0',
  text: '企业' },
{
  code: '1',
  text: '个体工商户' }];exports.authType = authType;


var qualificationType = [
{
  code: '0',
  text: '企业营业执照' },
{
  code: '1',
  text: '个体工商户营业执照' }];exports.qualificationType = qualificationType;


var runWaterData = [
{
  code: 1,
  text: '昨天' },
{
  code: 7,
  text: '近七日' },
{
  code: 30,
  text: '近30日' },
{
  code: '001',
  text: '全部' }];exports.runWaterData = runWaterData;

/***/ }),

/***/ 67:
/*!***********************************************!*\
  !*** E:/MB/mb-yun/static/mbcJs/madeParams.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.madeParams = void 0;var madeParams = {
  "instrucId": null,
  "userId": null,
  "orderSpMoney": 0, // 商品价格
  "orderYfMoney": 0, // 运费
  "orderDjMoney": 0, // 单价
  "orderSpCount": 0, // 数量
  "receivPcode": "",
  "receivCcode": "",
  "receivAcode": "",
  "receivName": "",
  "receivUser": "",
  "receivPhone": "",
  "expressPcode": "",
  "expressCcode": "",
  "expressAddr": "",
  "orderUnit": "",
  "orderType": "",
  "orderContent": "",
  "isFlow": "",
  "advertPlatform": "",
  "isBanner": "",
  "context": {
    "custModules": [] } };exports.madeParams = madeParams;

/***/ }),

/***/ 68:
/*!****************************************************!*\
  !*** E:/MB/mb-yun/static/mbcJs/platformAccount.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.platformAccount = platformAccount;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 69));var _api = __webpack_require__(/*! @/static/mbcJs/api */ 45);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}




console.log(_api.api1, _api.api2, _api.api3);
var api2Url = _api.api2;
var returnValue = {
  success: false, // 接口返回状态
  data: null, // 接口返回值
  type: null // 调取的类型
};
var sorce = null; // 来源，0 非流量平台 1 流量平台  2 采购
var countType = null; // 计费类型，
// -------------------------------非流量平台参数解读-------------------
// 浏览：0
// 分享：1
// 自定义按钮：6
// 拨打电话：8
// -------------------------------流量平台参数解读-------------------
// type 0 '点击次数'
// type 1 ''拨打电话次数''
// type 2 ''转化数''
// type 3 ''提交表单数''
// type 4 '进入关注我们页面'
// type 5 ''点击自定义按钮''
// type 6 ''停留时长''
// type 7 ‘询价’
// type 8 ‘订单’
// type 9 ‘聊天’
// type 10 ‘分享’
var params = null; // 接口参数
var routeParam = null; // 路由参数
function calculateCost(way, paramsUrl, paramsJSH, classify) {
  // way:方法，get post
  // paramsUrl: 接口地址
  // paramsJSH： 参数
  console.log(way, paramsUrl, paramsJSH);
  return new Promise(function (resolve) {
    uni.showLoading({
      // 展示loading
      title: '加载中' });

    uni.request({
      url: api2Url + paramsUrl, //接口地址。
      data: paramsJSH,
      method: way,
      header: {
        Authorization: 'Bearer ' //将token放到请求头中
      },
      success: function success(response) {
        console.log(response.data, '---------------response.data--------------');
        uni.hideLoading(); // 隐藏 loading
        returnValue.success = true;
        returnValue.data = response.data;
        returnValue.type = paramsJSH.type;
        console.log(returnValue, '成功数据返回');
        resolve(returnValue);
      },
      fail: function fail(error) {
        uni.hideLoading(); // 隐藏 loading
        uni.showToast({
          title: '网络繁忙，请稍后',
          icon: 'none',
          duration: 1000 });

        console.log(error, '网络繁忙，请稍后');
        returnValue.success = false;
        returnValue.data = 0;
        returnValue.type = paramsJSH.type;
        resolve(returnValue);
      } });

  });
}function

platformAccount(_x, _x2, _x3, _x4) {return _platformAccount.apply(this, arguments);}function _platformAccount() {_platformAccount = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(CYDsorce, CYDcountType, CYDparams, CYDrouteParam) {var tempType;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
            sorce = CYDsorce; // 来源，0 流量平台 1 非流量平台  2 采购
            countType = CYDcountType; // 计费类型
            params = CYDparams; // 接口参数
            routeParam = CYDrouteParam; // 路由参数
            tempType = 0; // 模板类型 0说明书模板， 1采购模板
            if (!(routeParam.tempType && routeParam.tempType === 1)) {_context.next = 11;break;}_context.next = 8;return (
              calculateCost('GET', '/rest-rp/purc/setPurcDate', params));case 8:return _context.abrupt("return", _context.sent);case 11:if (!(

            sorce === 0)) {_context.next = 17;break;}_context.next = 14;return (
              calculateCost('GET', '/rest-rp/instruc/instrucDate', params));case 14:return _context.abrupt("return", _context.sent);case 17:if (!(
            sorce === 1)) {_context.next = 24;break;}_context.next = 20;return (
              calculateCost('GET', '/rest-rp/instruc/instrucDate', params));case 20:return _context.abrupt("return", _context.sent);case 23:return _context.abrupt("return", _context.sent);case 24:case "end":return _context.stop();}}}, _callee, this);}));return _platformAccount.apply(this, arguments);}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 69:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 70);


/***/ }),

/***/ 693:
/*!***********************************************************!*\
  !*** E:/MB/mb-yun/components/common/u-charts/u-charts.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {/*
 * uCharts v1.9.3.20190922
 * uni-app平台高性能跨全端图表，支持H5、APP、小程序（微信/支付宝/百度/头条/QQ/360）
 * Copyright (c) 2019 QIUN秋云 https://www.ucharts.cn All rights reserved.
 * Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
 * 
 * uCharts官方网站
 * https://www.uCharts.cn
 * 
 * 开源地址:
 * https://gitee.com/uCharts/uCharts
 * 
 * uni-app插件市场地址：
 * http://ext.dcloud.net.cn/plugin?id=271
 * 
 */



var config = {
  yAxisWidth: 15,
  yAxisSplit: 5,
  xAxisHeight: 15,
  xAxisLineHeight: 15,
  legendHeight: 15,
  yAxisTitleWidth: 15,
  padding: [10, 10, 10, 10],
  pixelRatio: 1,
  rotate: false,
  columePadding: 3,
  fontSize: 13,
  //dataPointShape: ['diamond', 'circle', 'triangle', 'rect'],
  dataPointShape: ['circle', 'circle', 'circle', 'circle'],
  colors: ['#1890ff', '#2fc25b', '#facc14', '#f04864', '#8543e0', '#90ed7d'],
  pieChartLinePadding: 15,
  pieChartTextPadding: 5,
  xAxisTextPadding: 3,
  titleColor: '#333333',
  titleFontSize: 20,
  subtitleColor: '#999999',
  subtitleFontSize: 15,
  toolTipPadding: 3,
  toolTipBackground: '#000000',
  toolTipOpacity: 0.7,
  toolTipLineHeight: 20,
  radarLabelTextMargin: 15,
  gaugeLabelTextMargin: 15 };


var assign = function assign(target) {for (var _len2 = arguments.length, varArgs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {varArgs[_key2 - 1] = arguments[_key2];}
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  if (!varArgs || varArgs.length <= 0) {
    return target;
  }
  // 深度合并对象
  function deepAssign(obj1, obj2) {
    for (var key in obj2) {
      obj1[key] = obj1[key] && obj1[key].toString() === "[object Object]" ?
      deepAssign(obj1[key], obj2[key]) : obj1[key] = obj2[key];
    }
    return obj1;
  }

  varArgs.forEach(function (val) {
    target = deepAssign(target, val);
  });
  return target;
};

var util = {
  toFixed: function toFixed(num, limit) {
    limit = limit || 2;
    if (this.isFloat(num)) {
      num = num.toFixed(limit);
    }
    return num;
  },
  isFloat: function isFloat(num) {
    return num % 1 !== 0;
  },
  approximatelyEqual: function approximatelyEqual(num1, num2) {
    return Math.abs(num1 - num2) < 1e-10;
  },
  isSameSign: function isSameSign(num1, num2) {
    return Math.abs(num1) === num1 && Math.abs(num2) === num2 || Math.abs(num1) !== num1 && Math.abs(num2) !== num2;
  },
  isSameXCoordinateArea: function isSameXCoordinateArea(p1, p2) {
    return this.isSameSign(p1.x, p2.x);
  },
  isCollision: function isCollision(obj1, obj2) {
    obj1.end = {};
    obj1.end.x = obj1.start.x + obj1.width;
    obj1.end.y = obj1.start.y - obj1.height;
    obj2.end = {};
    obj2.end.x = obj2.start.x + obj2.width;
    obj2.end.y = obj2.start.y - obj2.height;
    var flag = obj2.start.x > obj1.end.x || obj2.end.x < obj1.start.x || obj2.end.y > obj1.start.y || obj2.start.y < obj1.end.y;
    return !flag;
  } };


//兼容H5点击事件
function getH5Offset(e) {
  e.mp = {
    changedTouches: [] };

  e.mp.changedTouches.push({
    x: e.offsetX,
    y: e.offsetY });

  return e;
}

// hex 转 rgba
function hexToRgb(hexValue, opc) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + opc + ')';
}

function findRange(num, type, limit) {
  if (isNaN(num)) {
    throw new Error('[uCharts] unvalid series data!');
  }
  limit = limit || 10;
  type = type ? type : 'upper';
  var multiple = 1;
  while (limit < 1) {
    limit *= 10;
    multiple *= 10;
  }
  if (type === 'upper') {
    num = Math.ceil(num * multiple);
  } else {
    num = Math.floor(num * multiple);
  }
  while (num % limit !== 0) {
    if (type === 'upper') {
      num++;
    } else {
      num--;
    }
  }
  return num / multiple;
}

function calCandleMA(dayArr, nameArr, colorArr, kdata) {
  var seriesTemp = [];
  for (var k = 0; k < dayArr.length; k++) {
    var seriesItem = {
      data: [],
      name: nameArr[k],
      color: colorArr[k] };

    for (var i = 0, len = kdata.length; i < len; i++) {
      if (i < dayArr[k]) {
        seriesItem.data.push(null);
        continue;
      }
      var sum = 0;
      for (var j = 0; j < dayArr[k]; j++) {
        sum += kdata[i - j][1];
      }
      seriesItem.data.push(+(sum / dayArr[k]).toFixed(3));
    }
    seriesTemp.push(seriesItem);
  }
  return seriesTemp;
}

function calValidDistance(self, distance, chartData, config, opts) {
  var dataChartAreaWidth = opts.width - opts.area[1] - opts.area[3];
  var dataChartWidth = chartData.eachSpacing * (opts.chartData.xAxisData.xAxisPoints.length - 1);
  var validDistance = distance;
  if (distance >= 0) {
    validDistance = 0;
    self.event.trigger('scrollLeft');
  } else if (Math.abs(distance) >= dataChartWidth - dataChartAreaWidth) {
    validDistance = dataChartAreaWidth - dataChartWidth;
    self.event.trigger('scrollRight');
  }
  return validDistance;
}

function isInAngleRange(angle, startAngle, endAngle) {
  function adjust(angle) {
    while (angle < 0) {
      angle += 2 * Math.PI;
    }
    while (angle > 2 * Math.PI) {
      angle -= 2 * Math.PI;
    }
    return angle;
  }
  angle = adjust(angle);
  startAngle = adjust(startAngle);
  endAngle = adjust(endAngle);
  if (startAngle > endAngle) {
    endAngle += 2 * Math.PI;
    if (angle < startAngle) {
      angle += 2 * Math.PI;
    }
  }
  return angle >= startAngle && angle <= endAngle;
}

function calRotateTranslate(x, y, h) {
  var xv = x;
  var yv = h - y;
  var transX = xv + (h - yv - xv) / Math.sqrt(2);
  transX *= -1;
  var transY = (h - yv) * (Math.sqrt(2) - 1) - (h - yv - xv) / Math.sqrt(2);
  return {
    transX: transX,
    transY: transY };

}

function createCurveControlPoints(points, i) {

  function isNotMiddlePoint(points, i) {
    if (points[i - 1] && points[i + 1]) {
      return points[i].y >= Math.max(points[i - 1].y, points[i + 1].y) || points[i].y <= Math.min(points[i - 1].y,
      points[
      i + 1].y);
    } else {
      return false;
    }
  }
  var a = 0.2;
  var b = 0.2;
  var pAx = null;
  var pAy = null;
  var pBx = null;
  var pBy = null;
  if (i < 1) {
    pAx = points[0].x + (points[1].x - points[0].x) * a;
    pAy = points[0].y + (points[1].y - points[0].y) * a;
  } else {
    pAx = points[i].x + (points[i + 1].x - points[i - 1].x) * a;
    pAy = points[i].y + (points[i + 1].y - points[i - 1].y) * a;
  }

  if (i > points.length - 3) {
    var last = points.length - 1;
    pBx = points[last].x - (points[last].x - points[last - 1].x) * b;
    pBy = points[last].y - (points[last].y - points[last - 1].y) * b;
  } else {
    pBx = points[i + 1].x - (points[i + 2].x - points[i].x) * b;
    pBy = points[i + 1].y - (points[i + 2].y - points[i].y) * b;
  }
  if (isNotMiddlePoint(points, i + 1)) {
    pBy = points[i + 1].y;
  }
  if (isNotMiddlePoint(points, i)) {
    pAy = points[i].y;
  }
  if (pAy >= Math.max(points[i].y, points[i + 1].y) || pAy <= Math.min(points[i].y, points[i + 1].y)) {
    pAy = points[i].y;
  }
  if (pBy >= Math.max(points[i].y, points[i + 1].y) || pBy <= Math.min(points[i].y, points[i + 1].y)) {
    pBy = points[i + 1].y;
  }
  return {
    ctrA: {
      x: pAx,
      y: pAy },

    ctrB: {
      x: pBx,
      y: pBy } };


}

function convertCoordinateOrigin(x, y, center) {
  return {
    x: center.x + x,
    y: center.y - y };

}

function avoidCollision(obj, target) {
  if (target) {
    // is collision test
    while (util.isCollision(obj, target)) {
      if (obj.start.x > 0) {
        obj.start.y--;
      } else if (obj.start.x < 0) {
        obj.start.y++;
      } else {
        if (obj.start.y > 0) {
          obj.start.y++;
        } else {
          obj.start.y--;
        }
      }
    }
  }
  return obj;
}

function fillSeries(series, opts, config) {
  var index = 0;
  return series.map(function (item) {
    if (!item.color) {
      item.color = config.colors[index];
      index = (index + 1) % config.colors.length;
    }
    if (!item.index) {
      item.index = 0;
    }
    if (!item.type) {
      item.type = opts.type;
    }
    if (typeof item.show == "undefined") {
      item.show = true;
    }
    if (!item.type) {
      item.type = opts.type;
    }
    if (!item.pointShape) {
      item.pointShape = "circle";
    }
    if (!item.legendShape) {
      switch (item.type) {
        case 'line':
          item.legendShape = "line";
          break;
        case 'column':
          item.legendShape = "rect";
          break;
        case 'area':
          item.legendShape = "triangle";
          break;
        default:
          item.legendShape = "circle";}

    }
    return item;
  });
}

function getDataRange(minData, maxData) {
  var limit = 0;
  var range = maxData - minData;
  if (range >= 10000) {
    limit = 1000;
  } else if (range >= 1000) {
    limit = 100;
  } else if (range >= 100) {
    limit = 10;
  } else if (range >= 10) {
    limit = 5;
  } else if (range >= 1) {
    limit = 1;
  } else if (range >= 0.1) {
    limit = 0.1;
  } else if (range >= 0.01) {
    limit = 0.01;
  } else if (range >= 0.001) {
    limit = 0.001;
  } else if (range >= 0.0001) {
    limit = 0.0001;
  } else if (range >= 0.00001) {
    limit = 0.00001;
  } else {
    limit = 0.000001;
  }
  return {
    minRange: findRange(minData, 'lower', limit),
    maxRange: findRange(maxData, 'upper', limit) };

}

function measureText(text) {
  var fontSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : config.fontSize;
  text = String(text);
  var text = text.split('');
  var width = 0;
  for (var i = 0; i < text.length; i++) {
    var item = text[i];
    if (/[a-zA-Z]/.test(item)) {
      width += 7;
    } else if (/[0-9]/.test(item)) {
      width += 5.5;
    } else if (/\./.test(item)) {
      width += 2.7;
    } else if (/-/.test(item)) {
      width += 3.25;
    } else if (/[\u4e00-\u9fa5]/.test(item)) {
      width += 10;
    } else if (/\(|\)/.test(item)) {
      width += 3.73;
    } else if (/\s/.test(item)) {
      width += 2.5;
    } else if (/%/.test(item)) {
      width += 8;
    } else {
      width += 10;
    }
  }
  return width * fontSize / 10;
}

function dataCombine(series) {
  return series.reduce(function (a, b) {
    return (a.data ? a.data : a).concat(b.data);
  }, []);
}

function dataCombineStack(series, len) {
  var sum = new Array(len);
  for (var j = 0; j < sum.length; j++) {
    sum[j] = 0;
  }
  for (var i = 0; i < series.length; i++) {
    for (var j = 0; j < sum.length; j++) {
      sum[j] += series[i].data[j];
    }
  }
  return series.reduce(function (a, b) {
    return (a.data ? a.data : a).concat(b.data).concat(sum);
  }, []);
}

function getTouches(touches, opts, e) {
  var x, y;
  if (touches.clientX) {
    if (opts.rotate) {
      y = opts.height - touches.clientX * opts.pixelRatio;
      x = (touches.pageY - e.currentTarget.offsetTop - opts.height / opts.pixelRatio / 2 * (opts.pixelRatio - 1)) *
      opts.pixelRatio;
    } else {
      x = touches.clientX * opts.pixelRatio;
      y = (touches.pageY - e.currentTarget.offsetTop - opts.height / opts.pixelRatio / 2 * (opts.pixelRatio - 1)) *
      opts.pixelRatio;
    }
  } else {
    if (opts.rotate) {
      y = opts.height - touches.x * opts.pixelRatio;
      x = touches.y * opts.pixelRatio;
    } else {
      x = touches.x * opts.pixelRatio;
      y = touches.y * opts.pixelRatio;
    }
  }
  return {
    x: x,
    y: y };

}

function getSeriesDataItem(series, index) {
  var data = [];
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    if (item.data[index] !== null && typeof item.data[index] !== 'undefined' && item.show) {
      var seriesItem = {};
      seriesItem.color = item.color;
      seriesItem.type = item.type;
      seriesItem.style = item.style;
      seriesItem.pointShape = item.pointShape;
      seriesItem.disableLegend = item.disableLegend;
      seriesItem.name = item.name;
      seriesItem.show = item.show;
      seriesItem.data = item.format ? item.format(item.data[index]) : item.data[index];
      data.push(seriesItem);
    }
  }
  return data;
}

function getMaxTextListLength(list) {
  var lengthList = list.map(function (item) {
    return measureText(item);
  });
  return Math.max.apply(null, lengthList);
}

function getRadarCoordinateSeries(length) {
  var eachAngle = 2 * Math.PI / length;
  var CoordinateSeries = [];
  for (var i = 0; i < length; i++) {
    CoordinateSeries.push(eachAngle * i);
  }

  return CoordinateSeries.map(function (item) {
    return -1 * item + Math.PI / 2;
  });
}

function getToolTipData(seriesData, calPoints, index, categories) {
  var option = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var textList = seriesData.map(function (item) {
    var titleText = [];
    if (categories) {
      titleText = categories;
    } else {
      titleText = item.data;
    }
    return {
      text: option.format ? option.format(item, titleText[index]) : item.name + ': ' + item.data,
      color: item.color };

  });
  var validCalPoints = [];
  var offset = {
    x: 0,
    y: 0 };

  for (var i = 0; i < calPoints.length; i++) {
    var points = calPoints[i];
    if (typeof points[index] !== 'undefined' && points[index] !== null) {
      validCalPoints.push(points[index]);
    }
  }
  for (var _i = 0; _i < validCalPoints.length; _i++) {
    var item = validCalPoints[_i];
    offset.x = Math.round(item.x);
    offset.y += item.y;
  }
  offset.y /= validCalPoints.length;
  return {
    textList: textList,
    offset: offset };

}

function getMixToolTipData(seriesData, calPoints, index, categories) {
  var option = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var textList = seriesData.map(function (item) {
    return {
      text: option.format ? option.format(item, categories[index]) : item.name + ': ' + item.data,
      color: item.color,
      disableLegend: item.disableLegend ? true : false };

  });
  textList = textList.filter(function (item) {
    if (item.disableLegend !== true) {
      return item;
    }
  });
  var validCalPoints = [];
  var offset = {
    x: 0,
    y: 0 };

  for (var i = 0; i < calPoints.length; i++) {
    var points = calPoints[i];
    if (typeof points[index] !== 'undefined' && points[index] !== null) {
      validCalPoints.push(points[index]);
    }
  }
  for (var _i2 = 0; _i2 < validCalPoints.length; _i2++) {
    var item = validCalPoints[_i2];
    offset.x = Math.round(item.x);
    offset.y += item.y;
  }
  offset.y /= validCalPoints.length;
  return {
    textList: textList,
    offset: offset };

}

function getCandleToolTipData(series, seriesData, calPoints, index, categories, extra) {
  var option = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
  var upColor = extra.color.upFill;
  var downColor = extra.color.downFill;
  //颜色顺序为开盘，收盘，最低，最高
  var color = [upColor, upColor, downColor, upColor];
  var textList = [];
  var text0 = {
    text: categories[index],
    color: null };

  textList.push(text0);
  seriesData.map(function (item) {
    if (index == 0 && item.data[1] - item.data[0] < 0) {
      color[1] = downColor;
    } else {
      if (item.data[0] < series[index - 1][1]) {
        color[0] = downColor;
      }
      if (item.data[1] < item.data[0]) {
        color[1] = downColor;
      }
      if (item.data[2] > series[index - 1][1]) {
        color[2] = upColor;
      }
      if (item.data[3] < series[index - 1][1]) {
        color[3] = downColor;
      }
    }
    var text1 = {
      text: '开盘：' + item.data[0],
      color: color[0] };

    var text2 = {
      text: '收盘：' + item.data[1],
      color: color[1] };

    var text3 = {
      text: '最低：' + item.data[2],
      color: color[2] };

    var text4 = {
      text: '最高：' + item.data[3],
      color: color[3] };

    textList.push(text1, text2, text3, text4);
  });
  var validCalPoints = [];
  var offset = {
    x: 0,
    y: 0 };

  for (var i = 0; i < calPoints.length; i++) {
    var points = calPoints[i];
    if (typeof points[index] !== 'undefined' && points[index] !== null) {
      validCalPoints.push(points[index]);
    }
  }
  offset.x = Math.round(validCalPoints[0][0].x);
  return {
    textList: textList,
    offset: offset };

}

function filterSeries(series) {
  var tempSeries = [];
  for (var i = 0; i < series.length; i++) {
    if (series[i].show == true) {
      tempSeries.push(series[i]);
    }
  }
  return tempSeries;
}

function findCurrentIndex(currentPoints, calPoints, opts, config) {
  var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var currentIndex = -1;
  var spacing = 0;
  var xAxisPoints = [];
  for (var i = 0; i < calPoints[0].length; i++) {
    xAxisPoints.push(calPoints[0][i].x);
  }
  if ((opts.type == 'line' || opts.type == 'area') && opts.xAxis.boundaryGap == 'justify') {
    spacing = opts.chartData.eachSpacing / 2;
  }
  if (!opts.categories) {
    spacing = 0;
  }
  if (isInExactChartArea(currentPoints, opts, config)) {
    xAxisPoints.forEach(function (item, index) {
      if (currentPoints.x + offset + spacing > item) {
        currentIndex = index;
      }
    });
  }
  return currentIndex;
}

function findLegendIndex(currentPoints, legendData, opts) {
  var currentIndex = -1;
  if (isInExactLegendArea(currentPoints, legendData.area)) {
    var points = legendData.points;
    var index = -1;
    for (var i = 0, len = points.length; i < len; i++) {
      var item = points[i];
      for (var j = 0; j < item.length; j++) {
        index += 1;
        var area = item[j]['area'];
        if (currentPoints.x > area[0] && currentPoints.x < area[2] && currentPoints.y > area[1] && currentPoints.y < area[3]) {
          currentIndex = index;
          break;
        }
      }
    }
    return currentIndex;
  }
  return currentIndex;
}

function isInExactLegendArea(currentPoints, area) {
  return currentPoints.x > area.start.x && currentPoints.x < area.end.x && currentPoints.y > area.start.y &&
  currentPoints.y < area.end.y;
}

function isInExactChartArea(currentPoints, opts, config) {
  return currentPoints.x <= opts.width - opts.area[1] + 10 && currentPoints.x >= opts.area[3] - 10 && currentPoints.y >= opts.area[0] && currentPoints.y <= opts.height - opts.area[2];
}

function findRadarChartCurrentIndex(currentPoints, radarData, count) {
  var eachAngleArea = 2 * Math.PI / count;
  var currentIndex = -1;
  if (isInExactPieChartArea(currentPoints, radarData.center, radarData.radius)) {
    var fixAngle = function fixAngle(angle) {
      if (angle < 0) {
        angle += 2 * Math.PI;
      }
      if (angle > 2 * Math.PI) {
        angle -= 2 * Math.PI;
      }
      return angle;
    };

    var angle = Math.atan2(radarData.center.y - currentPoints.y, currentPoints.x - radarData.center.x);
    angle = -1 * angle;
    if (angle < 0) {
      angle += 2 * Math.PI;
    }

    var angleList = radarData.angleList.map(function (item) {
      item = fixAngle(-1 * item);

      return item;
    });

    angleList.forEach(function (item, index) {
      var rangeStart = fixAngle(item - eachAngleArea / 2);
      var rangeEnd = fixAngle(item + eachAngleArea / 2);
      if (rangeEnd < rangeStart) {
        rangeEnd += 2 * Math.PI;
      }
      if (angle >= rangeStart && angle <= rangeEnd || angle + 2 * Math.PI >= rangeStart && angle + 2 * Math.PI <=
      rangeEnd) {
        currentIndex = index;
      }
    });
  }

  return currentIndex;
}

function findFunnelChartCurrentIndex(currentPoints, funnelData) {
  var currentIndex = -1;
  for (var i = 0, len = funnelData.series.length; i < len; i++) {
    var item = funnelData.series[i];
    if (currentPoints.x > item.funnelArea[0] && currentPoints.x < item.funnelArea[2] && currentPoints.y > item.funnelArea[1] && currentPoints.y < item.funnelArea[3]) {
      currentIndex = i;
      break;
    }
  }
  return currentIndex;
}

function findWordChartCurrentIndex(currentPoints, wordData) {
  var currentIndex = -1;
  for (var i = 0, len = wordData.length; i < len; i++) {
    var item = wordData[i];
    if (currentPoints.x > item.area[0] && currentPoints.x < item.area[2] && currentPoints.y > item.area[1] && currentPoints.y < item.area[3]) {
      currentIndex = i;
      break;
    }
  }
  return currentIndex;
}

function findMapChartCurrentIndex(currentPoints, opts) {
  var currentIndex = -1;
  var cData = opts.chartData.mapData;
  var data = opts.series;
  var tmp = pointToCoordinate(currentPoints.y, currentPoints.x, cData.bounds, cData.scale, cData.xoffset, cData.yoffset);
  var poi = [tmp.x, tmp.y];
  for (var i = 0, len = data.length; i < len; i++) {
    var item = data[i].geometry.coordinates;
    if (isPoiWithinPoly(poi, item)) {
      currentIndex = i;
      break;
    }
  }
  return currentIndex;
}

function findPieChartCurrentIndex(currentPoints, pieData) {
  var currentIndex = -1;
  if (isInExactPieChartArea(currentPoints, pieData.center, pieData.radius)) {
    var angle = Math.atan2(pieData.center.y - currentPoints.y, currentPoints.x - pieData.center.x);
    angle = -angle;
    for (var i = 0, len = pieData.series.length; i < len; i++) {
      var item = pieData.series[i];
      if (isInAngleRange(angle, item._start_, item._start_ + item._proportion_ * 2 * Math.PI)) {
        currentIndex = i;
        break;
      }
    }
  }

  return currentIndex;
}

function isInExactPieChartArea(currentPoints, center, radius) {
  return Math.pow(currentPoints.x - center.x, 2) + Math.pow(currentPoints.y - center.y, 2) <= Math.pow(radius, 2);
}

function splitPoints(points) {
  var newPoints = [];
  var items = [];
  points.forEach(function (item, index) {
    if (item !== null) {
      items.push(item);
    } else {
      if (items.length) {
        newPoints.push(items);
      }
      items = [];
    }
  });
  if (items.length) {
    newPoints.push(items);
  }

  return newPoints;
}

function calLegendData(series, opts, config, chartData) {
  var legendData = {
    area: {
      start: {
        x: 0,
        y: 0 },

      end: {
        x: 0,
        y: 0 },

      width: 0,
      height: 0,
      wholeWidth: 0,
      wholeHeight: 0 },

    points: [],
    widthArr: [],
    heightArr: [] };

  if (opts.legend.show === false) {
    chartData.legendData = legendData;
    return legendData;
  }

  var padding = opts.legend.padding;
  var margin = opts.legend.margin;
  var fontSize = opts.legend.fontSize;
  var shapeWidth = 15 * opts.pixelRatio;
  var shapeRight = 5 * opts.pixelRatio;
  var lineHeight = Math.max(opts.legend.lineHeight * opts.pixelRatio, fontSize);
  if (opts.legend.position == 'top' || opts.legend.position == 'bottom') {
    var legendList = [];
    var widthCount = 0;
    var widthCountArr = [];
    var currentRow = [];
    for (var i = 0; i < series.length; i++) {
      var item = series[i];
      var itemWidth = shapeWidth + shapeRight + measureText(item.name || 'undefined', fontSize) + opts.legend.itemGap;
      if (widthCount + itemWidth > opts.width - opts.padding[1] - opts.padding[3]) {
        legendList.push(currentRow);
        widthCountArr.push(widthCount - opts.legend.itemGap);
        widthCount = itemWidth;
        currentRow = [item];
      } else {
        widthCount += itemWidth;
        currentRow.push(item);
      }
    }
    if (currentRow.length) {
      legendList.push(currentRow);
      widthCountArr.push(widthCount - opts.legend.itemGap);
      legendData.widthArr = widthCountArr;
      var legendWidth = Math.max.apply(null, widthCountArr);
      switch (opts.legend.float) {
        case 'left':
          legendData.area.start.x = opts.padding[3];
          legendData.area.end.x = opts.padding[3] + 2 * padding;
          break;
        case 'right':
          legendData.area.start.x = opts.width - opts.padding[1] - legendWidth - 2 * padding;
          legendData.area.end.x = opts.width - opts.padding[1];
          break;
        default:
          legendData.area.start.x = (opts.width - legendWidth) / 2 - padding;
          legendData.area.end.x = (opts.width + legendWidth) / 2 + padding;}

      legendData.area.width = legendWidth + 2 * padding;
      legendData.area.wholeWidth = legendWidth + 2 * padding;
      legendData.area.height = legendList.length * lineHeight + 2 * padding;
      legendData.area.wholeHeight = legendList.length * lineHeight + 2 * padding + 2 * margin;
      legendData.points = legendList;
    }
  } else {
    var len = series.length;
    var maxHeight = opts.height - opts.padding[0] - opts.padding[2] - 2 * margin - 2 * padding;
    var maxLength = Math.min(Math.floor(maxHeight / lineHeight), len);
    legendData.area.height = maxLength * lineHeight + padding * 2;
    legendData.area.wholeHeight = maxLength * lineHeight + padding * 2;
    switch (opts.legend.float) {
      case 'top':
        legendData.area.start.y = opts.padding[0] + margin;
        legendData.area.end.y = opts.padding[0] + margin + legendData.area.height;
        break;
      case 'bottom':
        legendData.area.start.y = opts.height - opts.padding[2] - margin - legendData.area.height;
        legendData.area.end.y = opts.height - opts.padding[2] - margin;
        break;
      default:
        legendData.area.start.y = (opts.height - legendData.area.height) / 2;
        legendData.area.end.y = (opts.height + legendData.area.height) / 2;}

    var lineNum = len % maxLength === 0 ? len / maxLength : Math.floor(len / maxLength + 1);
    var _currentRow = [];
    for (var _i3 = 0; _i3 < lineNum; _i3++) {
      var temp = series.slice(_i3 * maxLength, _i3 * maxLength + maxLength);
      _currentRow.push(temp);
    }

    legendData.points = _currentRow;

    if (_currentRow.length) {
      for (var _i4 = 0; _i4 < _currentRow.length; _i4++) {
        var _item = _currentRow[_i4];
        var maxWidth = 0;
        for (var j = 0; j < _item.length; j++) {
          var _itemWidth = shapeWidth + shapeRight + measureText(_item[j].name || 'undefined', fontSize) + opts.legend.itemGap;
          if (_itemWidth > maxWidth) {
            maxWidth = _itemWidth;
          }
        }
        legendData.widthArr.push(maxWidth);
        legendData.heightArr.push(_item.length * lineHeight + padding * 2);
      }
      var _legendWidth = 0;
      for (var _i5 = 0; _i5 < legendData.widthArr.length; _i5++) {
        _legendWidth += legendData.widthArr[_i5];
      }
      legendData.area.width = _legendWidth - opts.legend.itemGap + 2 * padding;
      legendData.area.wholeWidth = legendData.area.width + padding;
    }
  }

  switch (opts.legend.position) {
    case 'top':
      legendData.area.start.y = opts.padding[0] + margin;
      legendData.area.end.y = opts.padding[0] + margin + legendData.area.height;
      break;
    case 'bottom':
      legendData.area.start.y = opts.height - opts.padding[2] - legendData.area.height - margin;
      legendData.area.end.y = opts.height - opts.padding[2] - margin;
      break;
    case 'left':
      legendData.area.start.x = opts.padding[3];
      legendData.area.end.x = opts.padding[3] + legendData.area.width;
      break;
    case 'right':
      legendData.area.start.x = opts.width - opts.padding[1] - legendData.area.width;
      legendData.area.end.x = opts.width - opts.padding[1];
      break;}

  chartData.legendData = legendData;
  return legendData;
}

function calCategoriesData(categories, opts, config, eachSpacing) {
  var result = {
    angle: 0,
    xAxisHeight: config.xAxisHeight };

  var categoriesTextLenth = categories.map(function (item) {
    return measureText(item, opts.xAxis.fontSize || config.fontSize);
  });
  var maxTextLength = Math.max.apply(this, categoriesTextLenth);

  if (opts.xAxis.rotateLabel == true && maxTextLength + 2 * config.xAxisTextPadding > eachSpacing) {
    result.angle = 45 * Math.PI / 180;
    result.xAxisHeight = 2 * config.xAxisTextPadding + maxTextLength * Math.sin(result.angle);
  }
  return result;
}

function getXAxisTextList(series, opts, config) {
  var index = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
  var data = dataCombine(series);
  var sorted = [];
  // remove null from data
  data = data.filter(function (item) {
    //return item !== null;
    if (typeof item === 'object' && item !== null) {
      if (item.constructor == Array) {
        return item !== null;
      } else {
        return item.value !== null;
      }
    } else {
      return item !== null;
    }
  });
  data.map(function (item) {
    if (typeof item === 'object') {
      if (item.constructor == Array) {
        if (opts.type == 'candle') {
          item.map(function (subitem) {
            sorted.push(subitem);
          });
        } else {
          sorted.push(item[0]);
        }
      } else {
        sorted.push(item.value);
      }
    } else {
      sorted.push(item);
    }
  });

  var minData = 0;
  var maxData = 0;
  if (sorted.length > 0) {
    minData = Math.min.apply(this, sorted);
    maxData = Math.max.apply(this, sorted);
  }
  //为了兼容v1.9.0之前的项目
  if (index > -1) {
    if (typeof opts.xAxis.data[index].min === 'number') {
      minData = Math.min(opts.xAxis.data[index].min, minData);
    }
    if (typeof opts.xAxis.data[index].max === 'number') {
      maxData = Math.max(opts.xAxis.data[index].max, maxData);
    }
  } else {
    if (typeof opts.xAxis.min === 'number') {
      minData = Math.min(opts.xAxis.min, minData);
    }
    if (typeof opts.xAxis.max === 'number') {
      maxData = Math.max(opts.xAxis.max, maxData);
    }
  }


  if (minData === maxData) {
    var rangeSpan = maxData || 10;
    maxData += rangeSpan;
  }

  var dataRange = getDataRange(minData, maxData);
  var minRange = dataRange.minRange;
  var maxRange = dataRange.maxRange;

  var range = [];
  var eachRange = (maxRange - minRange) / opts.xAxis.splitNumber;

  for (var i = 0; i <= opts.xAxis.splitNumber; i++) {
    range.push(minRange + eachRange * i);
  }
  return range;
}

function calXAxisData(series, opts, config) {
  var result = {
    angle: 0,
    xAxisHeight: config.xAxisHeight };


  result.ranges = getXAxisTextList(series, opts, config);
  result.rangesFormat = result.ranges.map(function (item) {
    item = opts.xAxis.format ? opts.xAxis.format(item) : util.toFixed(item, 2);
    return item;
  });
  var xAxisScaleValues = result.ranges.map(function (item) {
    // 如果刻度值是浮点数,则保留两位小数
    item = util.toFixed(item, 2);
    // 若有自定义格式则调用自定义的格式化函数
    item = opts.xAxis.format ? opts.xAxis.format(Number(item)) : item;
    return item;
  });

  result = Object.assign(result, getXAxisPoints(xAxisScaleValues, opts, config));
  // 计算X轴刻度的属性譬如每个刻度的间隔,刻度的起始点\结束点以及总长
  var eachSpacing = result.eachSpacing;

  var textLength = xAxisScaleValues.map(function (item) {
    return measureText(item);
  });

  // get max length of categories text
  var maxTextLength = Math.max.apply(this, textLength);

  // 如果刻度值文本内容过长,则将其逆时针旋转45°
  if (maxTextLength + 2 * config.xAxisTextPadding > eachSpacing) {
    result.angle = 45 * Math.PI / 180;
    result.xAxisHeight = 2 * config.xAxisTextPadding + maxTextLength * Math.sin(result.angle);
  }

  if (opts.xAxis.disabled === true) {
    result.xAxisHeight = 0;
  }

  return result;
}

function getRadarDataPoints(angleList, center, radius, series, opts) {
  var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;

  var radarOption = opts.extra.radar || {};
  radarOption.max = radarOption.max || 0;
  var maxData = Math.max(radarOption.max, Math.max.apply(null, dataCombine(series)));

  var data = [];var _loop2 = function _loop2(
  i) {
    var each = series[i];
    var listItem = {};
    listItem.color = each.color;
    listItem.legendShape = each.legendShape;
    listItem.pointShape = each.pointShape;
    listItem.data = [];
    each.data.forEach(function (item, index) {
      var tmp = {};
      tmp.angle = angleList[index];

      tmp.proportion = item / maxData;
      tmp.position = convertCoordinateOrigin(radius * tmp.proportion * process * Math.cos(tmp.angle), radius * tmp.proportion *
      process * Math.sin(tmp.angle), center);
      listItem.data.push(tmp);
    });

    data.push(listItem);};for (var i = 0; i < series.length; i++) {_loop2(i);
  }

  return data;
}

function getPieDataPoints(series, radius) {
  var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var count = 0;
  var _start_ = 0;
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    count += item.data;
  }
  for (var _i6 = 0; _i6 < series.length; _i6++) {
    var _item2 = series[_i6];
    _item2.data = _item2.data === null ? 0 : _item2.data;
    if (count === 0) {
      _item2._proportion_ = 1 / series.length * process;
    } else {
      _item2._proportion_ = _item2.data / count * process;
    }
    _item2._radius_ = radius;
  }
  for (var _i7 = 0; _i7 < series.length; _i7++) {
    var _item3 = series[_i7];
    _item3._start_ = _start_;
    _start_ += 2 * _item3._proportion_ * Math.PI;
  }

  return series;
}

function getFunnelDataPoints(series, radius) {
  var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  series = series.sort(function (a, b) {return parseInt(b.data) - parseInt(a.data);});
  for (var i = 0; i < series.length; i++) {
    series[i].radius = series[i].data / series[0].data * radius * process;
    series[i]._proportion_ = series[i].data / series[0].data;
  }
  return series.reverse();
}

function getRoseDataPoints(series, type, minRadius, radius) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var count = 0;
  var _start_ = 0;

  var dataArr = [];
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    count += item.data;
    dataArr.push(item.data);
  }

  var minData = Math.min.apply(null, dataArr);
  var maxData = Math.max.apply(null, dataArr);
  var radiusLength = radius - minRadius;

  for (var _i8 = 0; _i8 < series.length; _i8++) {
    var _item4 = series[_i8];
    _item4.data = _item4.data === null ? 0 : _item4.data;
    if (count === 0 || type == 'area') {
      _item4._proportion_ = _item4.data / count * process;
      _item4._rose_proportion_ = 1 / series.length * process;
    } else {
      _item4._proportion_ = _item4.data / count * process;
      _item4._rose_proportion_ = _item4.data / count * process;
    }
    _item4._radius_ = minRadius + radiusLength * ((_item4.data - minData) / (maxData - minData));
  }
  for (var _i9 = 0; _i9 < series.length; _i9++) {
    var _item5 = series[_i9];
    _item5._start_ = _start_;
    _start_ += 2 * _item5._rose_proportion_ * Math.PI;
  }

  return series;
}

function getArcbarDataPoints(series, arcbarOption) {
  var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  if (process == 1) {
    process = 0.999999;
  }
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    var totalAngle = void 0;
    if (arcbarOption.type == 'circle') {
      totalAngle = 2;
    } else {
      if (arcbarOption.endAngle < arcbarOption.startAngle) {
        totalAngle = 2 + arcbarOption.endAngle - arcbarOption.startAngle;
      } else {
        totalAngle = arcbarOption.startAngle - arcbarOption.endAngle;
      }
    }
    item._proportion_ = totalAngle * item.data * process + arcbarOption.startAngle;
    if (item._proportion_ >= 2) {
      item._proportion_ = item._proportion_ % 2;
    }
  }
  return series;
}

function getGaugeAxisPoints(categories, startAngle, endAngle) {
  var totalAngle = startAngle - endAngle + 1;
  var tempStartAngle = startAngle;
  for (var i = 0; i < categories.length; i++) {
    categories[i].value = categories[i].value === null ? 0 : categories[i].value;
    categories[i]._startAngle_ = tempStartAngle;
    categories[i]._endAngle_ = totalAngle * categories[i].value + startAngle;
    if (categories[i]._endAngle_ >= 2) {
      categories[i]._endAngle_ = categories[i]._endAngle_ % 2;
    }
    tempStartAngle = categories[i]._endAngle_;
  }
  return categories;
}

function getGaugeDataPoints(series, categories, gaugeOption) {
  var process = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    if (gaugeOption.pointer.color == 'auto') {
      for (var _i10 = 0; _i10 < categories.length; _i10++) {
        if (item.data <= categories[_i10].value) {
          item.color = categories[_i10].color;
          break;
        }
      }
    } else {
      item.color = gaugeOption.pointer.color;
    }
    var totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
    item._endAngle_ = totalAngle * item.data + gaugeOption.startAngle;
    item._oldAngle_ = gaugeOption.oldAngle;
    if (gaugeOption.oldAngle < gaugeOption.endAngle) {
      item._oldAngle_ += 2;
    }
    if (item.data >= gaugeOption.oldData) {
      item._proportion_ = (item._endAngle_ - item._oldAngle_) * process + gaugeOption.oldAngle;
    } else {
      item._proportion_ = item._oldAngle_ - (item._oldAngle_ - item._endAngle_) * process;
    }
    if (item._proportion_ >= 2) {
      item._proportion_ = item._proportion_ % 2;
    }
  }
  return series;
}

function getPieTextMaxLength(series) {
  series = getPieDataPoints(series);
  var maxLength = 0;
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    var text = item.format ? item.format(+item._proportion_.toFixed(2)) : util.toFixed(item._proportion_ * 100) + '%';
    maxLength = Math.max(maxLength, measureText(text));
  }

  return maxLength;
}

function fixColumeData(points, eachSpacing, columnLen, index, config, opts) {
  return points.map(function (item) {
    if (item === null) {
      return null;
    }
    item.width = Math.ceil((eachSpacing - 2 * config.columePadding) / columnLen);

    if (opts.extra.column && opts.extra.column.width && +opts.extra.column.width > 0) {
      item.width = Math.min(item.width, +opts.extra.column.width);
    }
    if (item.width <= 0) {
      item.width = 1;
    }
    item.x += (index + 0.5 - columnLen / 2) * item.width;
    return item;
  });
}

function fixColumeMeterData(points, eachSpacing, columnLen, index, config, opts, border) {
  return points.map(function (item) {
    if (item === null) {
      return null;
    }
    item.width = Math.ceil((eachSpacing - 2 * config.columePadding) / 2);

    if (opts.extra.column && opts.extra.column.width && +opts.extra.column.width > 0) {
      item.width = Math.min(item.width, +opts.extra.column.width);
    }

    if (index > 0) {
      item.width -= 2 * border;
    }
    return item;
  });
}

function fixColumeStackData(points, eachSpacing, columnLen, index, config, opts, series) {

  return points.map(function (item, indexn) {

    if (item === null) {
      return null;
    }
    item.width = Math.ceil((eachSpacing - 2 * config.columePadding) / 2);

    if (opts.extra.column && opts.extra.column.width && +opts.extra.column.width > 0) {
      item.width = Math.min(item.width, +opts.extra.column.width);
    }
    return item;
  });
}

function getXAxisPoints(categories, opts, config) {
  var spacingValid = opts.width - opts.area[1] - opts.area[3];
  var dataCount = opts.enableScroll ? Math.min(opts.xAxis.itemCount, categories.length) : categories.length;
  if ((opts.type == 'line' || opts.type == 'area') && dataCount > 1 && opts.xAxis.boundaryGap == 'justify') {
    dataCount -= 1;
  }
  var eachSpacing = spacingValid / dataCount;

  var xAxisPoints = [];
  var startX = opts.area[3];
  var endX = opts.width - opts.area[1];
  categories.forEach(function (item, index) {
    xAxisPoints.push(startX + index * eachSpacing);
  });
  if (opts.xAxis.boundaryGap !== 'justify') {
    if (opts.enableScroll === true) {
      xAxisPoints.push(startX + categories.length * eachSpacing);
    } else {
      xAxisPoints.push(endX);
    }
  }
  return {
    xAxisPoints: xAxisPoints,
    startX: startX,
    endX: endX,
    eachSpacing: eachSpacing };

}

function getCandleDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config) {
  var process = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
  var points = [];
  var validHeight = opts.height - opts.area[0] - opts.area[2];
  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var cPoints = [];
      item.forEach(function (items, indexs) {
        var point = {};
        point.x = xAxisPoints[index] + Math.round(eachSpacing / 2);
        var value = items.value || items;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        height *= process;
        point.y = opts.height - Math.round(height) - opts.area[2];
        cPoints.push(point);
      });
      points.push(cPoints);
    }
  });

  return points;
}

function getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config) {
  var process = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
  var boundaryGap = 'center';
  if (opts.type == 'line' || opts.type == 'area') {
    boundaryGap = opts.xAxis.boundaryGap;
  }
  var points = [];
  var validHeight = opts.height - opts.area[0] - opts.area[2];
  var validWidth = opts.width - opts.area[1] - opts.area[3];
  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var point = {};
      point.color = item.color;
      point.x = xAxisPoints[index];
      var value = item;
      if (typeof item === 'object' && item !== null) {
        if (item.constructor == Array) {
          var xranges, xminRange, xmaxRange;
          xranges = [].concat(opts.chartData.xAxisData.ranges);

          xminRange = xranges.shift();
          xmaxRange = xranges.pop();
          value = item[1];
          point.x = opts.area[3] + validWidth * (item[0] - xminRange) / (xmaxRange - xminRange);
        } else {
          value = item.value;
        }
      }
      if (boundaryGap == 'center') {
        point.x += Math.round(eachSpacing / 2);
      }
      var height = validHeight * (value - minRange) / (maxRange - minRange);
      height *= process;
      point.y = opts.height - Math.round(height) - opts.area[2];
      points.push(point);
    }
  });

  return points;
}

function getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, stackSeries) {
  var process = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 1;
  var points = [];
  var validHeight = opts.height - opts.area[0] - opts.area[2];

  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var point = {};
      point.color = item.color;
      point.x = xAxisPoints[index] + Math.round(eachSpacing / 2);

      if (seriesIndex > 0) {
        var value = 0;
        for (var i = 0; i <= seriesIndex; i++) {
          value += stackSeries[i].data[index];
        }
        var value0 = value - item;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        var height0 = validHeight * (value0 - minRange) / (maxRange - minRange);
      } else {
        var value = item;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        var height0 = 0;
      }
      var heightc = height0;
      height *= process;
      heightc *= process;
      point.y = opts.height - Math.round(height) - opts.area[2];
      point.y0 = opts.height - Math.round(heightc) - opts.area[2];
      points.push(point);
    }
  });

  return points;
}

function getYAxisTextList(series, opts, config, stack) {
  var index = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
  var data;
  if (stack == 'stack') {
    data = dataCombineStack(series, opts.categories.length);
  } else {
    data = dataCombine(series);
  }
  var sorted = [];
  // remove null from data
  data = data.filter(function (item) {
    //return item !== null;
    if (typeof item === 'object' && item !== null) {
      if (item.constructor == Array) {
        return item !== null;
      } else {
        return item.value !== null;
      }
    } else {
      return item !== null;
    }
  });
  data.map(function (item) {
    if (typeof item === 'object') {
      if (item.constructor == Array) {
        if (opts.type == 'candle') {
          item.map(function (subitem) {
            sorted.push(subitem);
          });
        } else {
          sorted.push(item[1]);
        }
      } else {
        sorted.push(item.value);
      }
    } else {
      sorted.push(item);
    }
  });

  var minData = 0;
  var maxData = 0;
  if (sorted.length > 0) {
    minData = Math.min.apply(this, sorted);
    maxData = Math.max.apply(this, sorted);
  }
  //为了兼容v1.9.0之前的项目
  if (index > -1) {
    if (typeof opts.yAxis.data[index].min === 'number') {
      minData = Math.min(opts.yAxis.data[index].min, minData);
    }
    if (typeof opts.yAxis.data[index].max === 'number') {
      maxData = Math.max(opts.yAxis.data[index].max, maxData);
    }
  } else {
    if (typeof opts.yAxis.min === 'number') {
      minData = Math.min(opts.yAxis.min, minData);
    }
    if (typeof opts.yAxis.max === 'number') {
      maxData = Math.max(opts.yAxis.max, maxData);
    }
  }


  if (minData === maxData) {
    var rangeSpan = maxData || 10;
    maxData += rangeSpan;
  }

  var dataRange = getDataRange(minData, maxData);
  var minRange = dataRange.minRange;
  var maxRange = dataRange.maxRange;

  var range = [];
  var eachRange = (maxRange - minRange) / opts.yAxis.splitNumber;

  for (var i = 0; i <= opts.yAxis.splitNumber; i++) {
    range.push(minRange + eachRange * i);
  }
  return range.reverse();
}

function calYAxisData(series, opts, config) {
  //堆叠图重算Y轴
  var columnstyle = assign({}, {
    type: "" },
  opts.extra.column);
  //如果是多Y轴，重新计算
  var YLength = opts.yAxis.data.length;
  var newSeries = new Array(YLength);
  if (YLength > 0) {
    for (var i = 0; i < YLength; i++) {
      newSeries[i] = [];
      for (var j = 0; j < series.length; j++) {
        if (series[j].index == i) {
          newSeries[i].push(series[j]);
        }
      }
    }
    var rangesArr = new Array(YLength);
    var rangesFormatArr = new Array(YLength);
    var yAxisWidthArr = new Array(YLength);var _loop3 = function _loop3(

    _i11) {
      var yData = opts.yAxis.data[_i11];
      //如果总开关不显示，强制每个Y轴为不显示
      if (opts.yAxis.disabled == true) {
        yData.disabled = true;
      }
      rangesArr[_i11] = getYAxisTextList(newSeries[_i11], opts, config, columnstyle.type, _i11);
      var yAxisFontSizes = yData.fontSize || config.fontSize;
      yAxisWidthArr[_i11] = { position: yData.position ? yData.position : 'left', width: 0 };
      rangesFormatArr[_i11] = rangesArr[_i11].map(function (items) {
        items = util.toFixed(items, 6);
        items = yData.format ? yData.format(Number(items)) : items;
        yAxisWidthArr[_i11].width = Math.max(yAxisWidthArr[_i11].width, measureText(items, yAxisFontSizes) + 5);
        return items;
      });
      var calibration = yData.calibration ? 4 * opts.pixelRatio : 0;
      yAxisWidthArr[_i11].width += calibration + 3 * opts.pixelRatio;
      if (yData.disabled === true) {
        yAxisWidthArr[_i11].width = 0;
      }};for (var _i11 = 0; _i11 < YLength; _i11++) {_loop3(_i11);
    }

  } else {
    var rangesArr = new Array(1);
    var rangesFormatArr = new Array(1);
    var yAxisWidthArr = new Array(1);
    rangesArr[0] = getYAxisTextList(series, opts, config, columnstyle.type);
    yAxisWidthArr[0] = { position: 'left', width: 0 };
    var yAxisFontSize = opts.yAxis.fontSize || config.fontSize;
    rangesFormatArr[0] = rangesArr[0].map(function (item) {
      item = util.toFixed(item, 6);
      item = opts.yAxis.format ? opts.yAxis.format(Number(item)) : item;
      yAxisWidthArr[0].width = Math.max(yAxisWidthArr[0].width, measureText(item, yAxisFontSize) + 5);
      return item;
    });
    yAxisWidthArr[0].width += 3 * opts.pixelRatio;
    if (opts.yAxis.disabled === true) {
      yAxisWidthArr[0] = { position: 'left', width: 0 };
      opts.yAxis.data[0] = { disabled: true };
    } else {
      opts.yAxis.data[0] = { disabled: false, position: 'left', max: opts.yAxis.max, min: opts.yAxis.min, format: opts.yAxis.format };
    }

  }

  return {
    rangesFormat: rangesFormatArr,
    ranges: rangesArr,
    yAxisWidth: yAxisWidthArr };


}

function calTooltipYAxisData(point, series, opts, config, eachSpacing) {
  var ranges = [].concat(opts.chartData.yAxisData.ranges);
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  var minAxis = opts.area[0];
  var items = [];
  for (var i = 0; i < ranges.length; i++) {
    var maxVal = ranges[i].shift();
    var minVal = ranges[i].pop();
    var item = maxVal - (maxVal - minVal) * (point - minAxis) / spacingValid;
    item = opts.yAxis.data[i].format ? opts.yAxis.data[i].format(Number(item)) : item.toFixed(0);
    items.push(String(item));
  }
  return items;
}

function calMarkLineData(points, opts) {
  var minRange, maxRange;
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  for (var i = 0; i < points.length; i++) {
    points[i].yAxisIndex = points[i].yAxisIndex ? points[i].yAxisIndex : 0;
    var range = [].concat(opts.chartData.yAxisData.ranges[points[i].yAxisIndex]);
    minRange = range.pop();
    maxRange = range.shift();
    var height = spacingValid * (points[i].value - minRange) / (maxRange - minRange);
    points[i].y = opts.height - Math.round(height) - opts.area[2];
  }
  return points;
}

function contextRotate(context, opts) {
  if (opts.rotateLock !== true) {
    context.translate(opts.height, 0);
    context.rotate(90 * Math.PI / 180);
  } else if (opts._rotate_ !== true) {
    context.translate(opts.height, 0);
    context.rotate(90 * Math.PI / 180);
    opts._rotate_ = true;
  }
}

function drawPointShape(points, color, shape, context, opts) {
  context.beginPath();
  if (opts.dataPointShapeType == 'hollow') {
    context.setStrokeStyle(color);
    context.setFillStyle(opts.background);
    context.setLineWidth(2 * opts.pixelRatio);
  } else {
    context.setStrokeStyle("#ffffff");
    context.setFillStyle(color);
    context.setLineWidth(1 * opts.pixelRatio);
  }
  if (shape === 'diamond') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x, item.y - 4.5);
        context.lineTo(item.x - 4.5, item.y);
        context.lineTo(item.x, item.y + 4.5);
        context.lineTo(item.x + 4.5, item.y);
        context.lineTo(item.x, item.y - 4.5);
      }
    });
  } else if (shape === 'circle') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x + 2.5 * opts.pixelRatio, item.y);
        context.arc(item.x, item.y, 3 * opts.pixelRatio, 0, 2 * Math.PI, false);
      }
    });
  } else if (shape === 'rect') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x - 3.5, item.y - 3.5);
        context.rect(item.x - 3.5, item.y - 3.5, 7, 7);
      }
    });
  } else if (shape === 'triangle') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x, item.y - 4.5);
        context.lineTo(item.x - 4.5, item.y + 4.5);
        context.lineTo(item.x + 4.5, item.y + 4.5);
        context.lineTo(item.x, item.y - 4.5);
      }
    });
  }
  context.closePath();
  context.fill();
  context.stroke();
}

function drawRingTitle(opts, config, context, center) {
  var titlefontSize = opts.title.fontSize || config.titleFontSize;
  var subtitlefontSize = opts.subtitle.fontSize || config.subtitleFontSize;
  var title = opts.title.name || '';
  var subtitle = opts.subtitle.name || '';
  var titleFontColor = opts.title.color || config.titleColor;
  var subtitleFontColor = opts.subtitle.color || config.subtitleColor;
  var titleHeight = title ? titlefontSize : 0;
  var subtitleHeight = subtitle ? subtitlefontSize : 0;
  var margin = 5;

  if (subtitle) {
    var textWidth = measureText(subtitle, subtitlefontSize);
    var startX = center.x - textWidth / 2 + (opts.subtitle.offsetX || 0);
    var startY = center.y + subtitlefontSize / 2 + (opts.subtitle.offsetY || 0);
    if (title) {
      startY += (titleHeight + margin) / 2;
    }
    context.beginPath();
    context.setFontSize(subtitlefontSize);
    context.setFillStyle(subtitleFontColor);
    context.fillText(subtitle, startX, startY);
    context.closePath();
    context.stroke();
  }
  if (title) {
    var _textWidth = measureText(title, titlefontSize);
    var _startX = center.x - _textWidth / 2 + (opts.title.offsetX || 0);
    var _startY = center.y + titlefontSize / 2 + (opts.title.offsetY || 0);
    if (subtitle) {
      _startY -= (subtitleHeight + margin) / 2;
    }
    context.beginPath();
    context.setFontSize(titlefontSize);
    context.setFillStyle(titleFontColor);
    context.fillText(title, _startX, _startY);
    context.closePath();
    context.stroke();
  }
}

function drawPointText(points, series, config, context) {
  // 绘制数据文案
  var data = series.data;
  points.forEach(function (item, index) {
    if (item !== null) {
      //var formatVal = series.format ? series.format(data[index]) : data[index];
      context.beginPath();
      context.setFontSize(series.textSize || config.fontSize);
      context.setFillStyle(series.textColor || '#666666');
      var value = data[index];
      if (typeof data[index] === 'object' && data[index] !== null) {
        if (data[index].constructor == Array) {
          value = data[index][1];
        } else {
          value = data[index].value;
        }
      }
      var formatVal = series.format ? series.format(value) : value;
      context.fillText(String(formatVal), item.x - measureText(formatVal, series.textSize || config.fontSize) / 2, item.y - 4);
      context.closePath();
      context.stroke();
    }
  });

}

function drawGaugeLabel(gaugeOption, radius, centerPosition, opts, config, context) {
  radius -= gaugeOption.width / 2 + config.gaugeLabelTextMargin;

  var totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
  var splitAngle = totalAngle / gaugeOption.splitLine.splitNumber;
  var totalNumber = gaugeOption.endNumber - gaugeOption.startNumber;
  var splitNumber = totalNumber / gaugeOption.splitLine.splitNumber;
  var nowAngle = gaugeOption.startAngle;
  var nowNumber = gaugeOption.startNumber;
  for (var i = 0; i < gaugeOption.splitLine.splitNumber + 1; i++) {
    var pos = {
      x: radius * Math.cos(nowAngle * Math.PI),
      y: radius * Math.sin(nowAngle * Math.PI) };

    var labelText = gaugeOption.labelFormat ? gaugeOption.labelFormat(nowNumber) : nowNumber;
    pos.x += centerPosition.x - measureText(labelText) / 2;
    pos.y += centerPosition.y;
    var startX = pos.x;
    var startY = pos.y;
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(gaugeOption.labelColor || '#666666');
    context.fillText(labelText, startX, startY + config.fontSize / 2);
    context.closePath();
    context.stroke();

    nowAngle += splitAngle;
    if (nowAngle >= 2) {
      nowAngle = nowAngle % 2;
    }
    nowNumber += splitNumber;
  }

}

function drawRadarLabel(angleList, radius, centerPosition, opts, config, context) {
  var radarOption = opts.extra.radar || {};
  radius += config.radarLabelTextMargin;

  angleList.forEach(function (angle, index) {
    var pos = {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle) };

    var posRelativeCanvas = convertCoordinateOrigin(pos.x, pos.y, centerPosition);
    var startX = posRelativeCanvas.x;
    var startY = posRelativeCanvas.y;
    if (util.approximatelyEqual(pos.x, 0)) {
      startX -= measureText(opts.categories[index] || '') / 2;
    } else if (pos.x < 0) {
      startX -= measureText(opts.categories[index] || '');
    }
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(radarOption.labelColor || '#666666');
    context.fillText(opts.categories[index] || '', startX, startY + config.fontSize / 2);
    context.closePath();
    context.stroke();
  });

}

function drawPieText(series, opts, config, context, radius, center) {
  var lineRadius = config.pieChartLinePadding;
  var textObjectCollection = [];
  var lastTextObject = null;

  var seriesConvert = series.map(function (item) {
    var text = item.format ? item.format(+item._proportion_.toFixed(2)) : util.toFixed(item._proportion_.toFixed(4) * 100) + '%';
    if (item._rose_proportion_) item._proportion_ = item._rose_proportion_;
    var arc = 2 * Math.PI - (item._start_ + 2 * Math.PI * item._proportion_ / 2);
    var color = item.color;
    var radius = item._radius_;
    return {
      arc: arc,
      text: text,
      color: color,
      radius: radius,
      textColor: item.textColor,
      textSize: item.textSize };

  });
  for (var i = 0; i < seriesConvert.length; i++) {
    var item = seriesConvert[i];
    // line end
    var orginX1 = Math.cos(item.arc) * (item.radius + lineRadius);
    var orginY1 = Math.sin(item.arc) * (item.radius + lineRadius);

    // line start
    var orginX2 = Math.cos(item.arc) * item.radius;
    var orginY2 = Math.sin(item.arc) * item.radius;

    // text start
    var orginX3 = orginX1 >= 0 ? orginX1 + config.pieChartTextPadding : orginX1 - config.pieChartTextPadding;
    var orginY3 = orginY1;
    var textWidth = measureText(item.text, item.textSize || config.fontSize);
    var startY = orginY3;

    if (lastTextObject && util.isSameXCoordinateArea(lastTextObject.start, {
      x: orginX3 }))
    {
      if (orginX3 > 0) {
        startY = Math.min(orginY3, lastTextObject.start.y);
      } else if (orginX1 < 0) {
        startY = Math.max(orginY3, lastTextObject.start.y);
      } else {
        if (orginY3 > 0) {
          startY = Math.max(orginY3, lastTextObject.start.y);
        } else {
          startY = Math.min(orginY3, lastTextObject.start.y);
        }
      }
    }
    if (orginX3 < 0) {
      orginX3 -= textWidth;
    }

    var textObject = {
      lineStart: {
        x: orginX2,
        y: orginY2 },

      lineEnd: {
        x: orginX1,
        y: orginY1 },

      start: {
        x: orginX3,
        y: startY },

      width: textWidth,
      height: config.fontSize,
      text: item.text,
      color: item.color,
      textColor: item.textColor,
      textSize: item.textSize };

    lastTextObject = avoidCollision(textObject, lastTextObject);
    textObjectCollection.push(lastTextObject);
  }

  for (var _i12 = 0; _i12 < textObjectCollection.length; _i12++) {
    var _item6 = textObjectCollection[_i12];
    var lineStartPoistion = convertCoordinateOrigin(_item6.lineStart.x, _item6.lineStart.y, center);
    var lineEndPoistion = convertCoordinateOrigin(_item6.lineEnd.x, _item6.lineEnd.y, center);
    var textPosition = convertCoordinateOrigin(_item6.start.x, _item6.start.y, center);
    context.setLineWidth(1 * opts.pixelRatio);
    context.setFontSize(config.fontSize);
    context.beginPath();
    context.setStrokeStyle(_item6.color);
    context.setFillStyle(_item6.color);
    context.moveTo(lineStartPoistion.x, lineStartPoistion.y);
    var curveStartX = _item6.start.x < 0 ? textPosition.x + _item6.width : textPosition.x;
    var textStartX = _item6.start.x < 0 ? textPosition.x - 5 : textPosition.x + 5;
    context.quadraticCurveTo(lineEndPoistion.x, lineEndPoistion.y, curveStartX, textPosition.y);
    context.moveTo(lineStartPoistion.x, lineStartPoistion.y);
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(textPosition.x + _item6.width, textPosition.y);
    context.arc(curveStartX, textPosition.y, 2, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
    context.beginPath();
    context.setFontSize(_item6.textSize || config.fontSize);
    context.setFillStyle(_item6.textColor || '#666666');
    context.fillText(_item6.text, textStartX, textPosition.y + 3);
    context.closePath();
    context.stroke();
    context.closePath();
  }
}

function drawToolTipSplitLine(offsetX, opts, config, context) {
  var toolTipOption = opts.extra.tooltip || {};
  toolTipOption.gridType = toolTipOption.gridType == undefined ? 'solid' : toolTipOption.gridType;
  toolTipOption.dashLength = toolTipOption.dashLength == undefined ? 4 : toolTipOption.dashLength;
  var startY = opts.area[0];
  var endY = opts.height - opts.area[2];

  if (toolTipOption.gridType == 'dash') {
    context.setLineDash([toolTipOption.dashLength, toolTipOption.dashLength]);
  }
  context.setStrokeStyle(toolTipOption.gridColor || '#cccccc');
  context.setLineWidth(1 * opts.pixelRatio);
  context.beginPath();
  context.moveTo(offsetX, startY);
  context.lineTo(offsetX, endY);
  context.stroke();
  context.setLineDash([]);

  if (toolTipOption.xAxisLabel) {
    var labelText = opts.categories[opts.tooltip.index];
    context.setFontSize(config.fontSize);
    var textWidth = measureText(labelText, config.fontSize);

    var textX = offsetX - 0.5 * textWidth;
    var textY = endY;
    context.beginPath();
    context.setFillStyle(hexToRgb(toolTipOption.labelBgColor || config.toolTipBackground, toolTipOption.labelBgOpacity || config.toolTipOpacity));
    context.setStrokeStyle(toolTipOption.labelBgColor || config.toolTipBackground);
    context.setLineWidth(1 * opts.pixelRatio);
    context.rect(textX - config.toolTipPadding, textY, textWidth + 2 * config.toolTipPadding, config.fontSize + 2 * config.toolTipPadding);
    context.closePath();
    context.stroke();
    context.fill();

    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(toolTipOption.labelFontColor || config.fontColor);
    context.fillText(String(labelText), textX, textY + config.toolTipPadding + config.fontSize);
    context.closePath();
    context.stroke();
  }
}

function drawMarkLine(opts, config, context) {
  var markLineOption = assign({}, {
    type: 'solid',
    dashLength: 4,
    data: [] },
  opts.extra.markLine);
  var startX = opts.area[3];
  var endX = opts.width - opts.area[1];
  var points = calMarkLineData(markLineOption.data, opts);

  for (var i = 0; i < points.length; i++) {
    var item = assign({}, {
      lineColor: '#DE4A42',
      showLabel: false,
      labelFontColor: '#666666',
      labelBgColor: '#DFE8FF',
      labelBgOpacity: 0.8,
      yAxisIndex: 0 },
    points[i]);

    if (markLineOption.type == 'dash') {
      context.setLineDash([markLineOption.dashLength, markLineOption.dashLength]);
    }
    context.setStrokeStyle(item.lineColor);
    context.setLineWidth(1 * opts.pixelRatio);
    context.beginPath();
    context.moveTo(startX, item.y);
    context.lineTo(endX, item.y);
    context.stroke();
    context.setLineDash([]);
    if (item.showLabel) {
      var labelText = opts.yAxis.format ? opts.yAxis.format(Number(item.value)) : item.value;
      context.setFontSize(config.fontSize);
      var textWidth = measureText(labelText, config.fontSize);
      var bgStartX = opts.padding[3] + config.yAxisTitleWidth - config.toolTipPadding;
      var bgEndX = Math.max(opts.area[3], textWidth + config.toolTipPadding * 2);
      var bgWidth = bgEndX - bgStartX;

      var textX = bgStartX + (bgWidth - textWidth) / 2;
      var textY = item.y;
      context.setFillStyle(hexToRgb(item.labelBgColor, item.labelBgOpacity));
      context.setStrokeStyle(item.labelBgColor);
      context.setLineWidth(1 * opts.pixelRatio);
      context.beginPath();
      context.rect(bgStartX, textY - 0.5 * config.fontSize - config.toolTipPadding, bgWidth, config.fontSize + 2 * config.toolTipPadding);
      context.closePath();
      context.stroke();
      context.fill();

      context.beginPath();
      context.setFontSize(config.fontSize);
      context.setFillStyle(item.labelFontColor);
      context.fillText(String(labelText), textX, textY + 0.5 * config.fontSize);
      context.stroke();
    }
  }
}

function drawToolTipHorizentalLine(opts, config, context, eachSpacing, xAxisPoints) {
  var toolTipOption = assign({}, {
    gridType: 'solid',
    dashLength: 4 },
  opts.extra.tooltip);

  var startX = opts.area[3];
  var endX = opts.width - opts.area[1];

  if (toolTipOption.gridType == 'dash') {
    context.setLineDash([toolTipOption.dashLength, toolTipOption.dashLength]);
  }
  context.setStrokeStyle(toolTipOption.gridColor || '#cccccc');
  context.setLineWidth(1 * opts.pixelRatio);
  context.beginPath();
  context.moveTo(startX, opts.tooltip.offset.y);
  context.lineTo(endX, opts.tooltip.offset.y);
  context.stroke();
  context.setLineDash([]);

  if (toolTipOption.yAxisLabel) {
    var labelText = calTooltipYAxisData(opts.tooltip.offset.y, opts.series, opts, config, eachSpacing);
    var widthArr = opts.chartData.yAxisData.yAxisWidth;
    var tStartLeft = opts.area[3];
    var tStartRight = opts.width - opts.area[1];
    for (var i = 0; i < labelText.length; i++) {
      context.setFontSize(config.fontSize);
      var textWidth = measureText(labelText[i], config.fontSize);
      var bgStartX = void 0,bgEndX = void 0,bgWidth = void 0;
      if (widthArr[i].position == 'left') {
        bgStartX = tStartLeft - widthArr[i].width;
        bgEndX = Math.max(bgStartX, bgStartX + textWidth + config.toolTipPadding * 2);
      } else {
        bgStartX = tStartRight;
        bgEndX = Math.max(bgStartX + widthArr[i].width, bgStartX + textWidth + config.toolTipPadding * 2);
      }
      bgWidth = bgEndX - bgStartX;

      var textX = bgStartX + (bgWidth - textWidth) / 2;
      var textY = opts.tooltip.offset.y;
      context.beginPath();
      context.setFillStyle(hexToRgb(toolTipOption.labelBgColor || config.toolTipBackground, toolTipOption.labelBgOpacity || config.toolTipOpacity));
      context.setStrokeStyle(toolTipOption.labelBgColor || config.toolTipBackground);
      context.setLineWidth(1 * opts.pixelRatio);
      context.rect(bgStartX, textY - 0.5 * config.fontSize - config.toolTipPadding, bgWidth, config.fontSize + 2 * config.toolTipPadding);
      context.closePath();
      context.stroke();
      context.fill();

      context.beginPath();
      context.setFontSize(config.fontSize);
      context.setFillStyle(toolTipOption.labelFontColor || config.fontColor);
      context.fillText(labelText[i], textX, textY + 0.5 * config.fontSize);
      context.closePath();
      context.stroke();
      if (widthArr[i].position == 'left') {
        tStartLeft -= widthArr[i].width + opts.yAxis.padding;
      } else {
        tStartRight += widthArr[i].width + opts.yAxis.padding;
      }
    }
  }
}

function drawToolTipSplitArea(offsetX, opts, config, context, eachSpacing) {
  var toolTipOption = assign({}, {
    activeBgColor: '#000000',
    activeBgOpacity: 0.08 },
  opts.extra.tooltip);
  var startY = opts.area[0];
  var endY = opts.height - opts.area[2];
  context.beginPath();
  context.setFillStyle(hexToRgb(toolTipOption.activeBgColor, toolTipOption.activeBgOpacity));
  context.rect(offsetX - eachSpacing / 2, startY, eachSpacing, endY - startY);
  context.closePath();
  context.fill();
}

function drawToolTip(textList, offset, opts, config, context, eachSpacing, xAxisPoints) {
  var toolTipOption = assign({}, {
    showBox: true,
    bgColor: '#000000',
    bgOpacity: 0.7,
    fontColor: '#FFFFFF' },
  opts.extra.tooltip);
  var legendWidth = 4 * opts.pixelRatio;
  var legendMarginRight = 5 * opts.pixelRatio;
  var arrowWidth = 8 * opts.pixelRatio;
  var isOverRightBorder = false;
  if (opts.type == 'line' || opts.type == 'area' || opts.type == 'candle' || opts.type == 'mix') {
    drawToolTipSplitLine(opts.tooltip.offset.x, opts, config, context);
  }

  offset = assign({
    x: 0,
    y: 0 },
  offset);
  offset.y -= 8 * opts.pixelRatio;
  var textWidth = textList.map(function (item) {
    return measureText(item.text, config.fontSize);
  });
  var toolTipWidth = legendWidth + legendMarginRight + 4 * config.toolTipPadding + Math.max.apply(null, textWidth);
  var toolTipHeight = 2 * config.toolTipPadding + textList.length * config.toolTipLineHeight;

  if (toolTipOption.showBox == false) {return;}
  // if beyond the right border
  if (offset.x - Math.abs(opts._scrollDistance_) + arrowWidth + toolTipWidth > opts.width) {
    isOverRightBorder = true;
  }
  if (toolTipHeight + offset.y > opts.height) {
    offset.y = opts.height - toolTipHeight;
  }
  // draw background rect
  context.beginPath();
  context.setFillStyle(hexToRgb(toolTipOption.bgColor || config.toolTipBackground, toolTipOption.bgOpacity || config.toolTipOpacity));
  if (isOverRightBorder) {
    context.moveTo(offset.x, offset.y + 10 * opts.pixelRatio);
    context.lineTo(offset.x - arrowWidth, offset.y + 10 * opts.pixelRatio - 5 * opts.pixelRatio);
    context.lineTo(offset.x - arrowWidth, offset.y);
    context.lineTo(offset.x - arrowWidth - Math.round(toolTipWidth), offset.y);
    context.lineTo(offset.x - arrowWidth - Math.round(toolTipWidth), offset.y + toolTipHeight);
    context.lineTo(offset.x - arrowWidth, offset.y + toolTipHeight);
    context.lineTo(offset.x - arrowWidth, offset.y + 10 * opts.pixelRatio + 5 * opts.pixelRatio);
    context.lineTo(offset.x, offset.y + 10 * opts.pixelRatio);
  } else {
    context.moveTo(offset.x, offset.y + 10 * opts.pixelRatio);
    context.lineTo(offset.x + arrowWidth, offset.y + 10 * opts.pixelRatio - 5 * opts.pixelRatio);
    context.lineTo(offset.x + arrowWidth, offset.y);
    context.lineTo(offset.x + arrowWidth + Math.round(toolTipWidth), offset.y);
    context.lineTo(offset.x + arrowWidth + Math.round(toolTipWidth), offset.y + toolTipHeight);
    context.lineTo(offset.x + arrowWidth, offset.y + toolTipHeight);
    context.lineTo(offset.x + arrowWidth, offset.y + 10 * opts.pixelRatio + 5 * opts.pixelRatio);
    context.lineTo(offset.x, offset.y + 10 * opts.pixelRatio);
  }

  context.closePath();
  context.fill();

  // draw legend
  textList.forEach(function (item, index) {
    if (item.color !== null) {
      context.beginPath();
      context.setFillStyle(item.color);
      var startX = offset.x + arrowWidth + 2 * config.toolTipPadding;
      var startY = offset.y + (config.toolTipLineHeight - config.fontSize) / 2 + config.toolTipLineHeight * index +
      config.toolTipPadding + 1;
      if (isOverRightBorder) {
        startX = offset.x - toolTipWidth - arrowWidth + 2 * config.toolTipPadding;
      }
      context.fillRect(startX, startY, legendWidth, config.fontSize);
      context.closePath();
    }
  });

  // draw text list

  textList.forEach(function (item, index) {
    var startX = offset.x + arrowWidth + 2 * config.toolTipPadding + legendWidth + legendMarginRight;
    if (isOverRightBorder) {
      startX = offset.x - toolTipWidth - arrowWidth + 2 * config.toolTipPadding + +legendWidth + legendMarginRight;
    }
    var startY = offset.y + (config.toolTipLineHeight - config.fontSize) / 2 + config.toolTipLineHeight * index +
    config.toolTipPadding;
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(toolTipOption.fontColor);
    context.fillText(item.text, startX, startY + config.fontSize);
    context.closePath();
    context.stroke();
  });
}

function drawYAxisTitle(title, opts, config, context) {
  var startX = config.xAxisHeight + (opts.height - config.xAxisHeight - measureText(title)) / 2;
  context.save();
  context.beginPath();
  context.setFontSize(config.fontSize);
  context.setFillStyle(opts.yAxis.titleFontColor || '#333333');
  context.translate(0, opts.height);
  context.rotate(-90 * Math.PI / 180);
  context.fillText(title, startX, opts.padding[3] + 0.5 * config.fontSize);
  context.closePath();
  context.stroke();
  context.restore();
}

function drawColumnDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;
  var columnOption = assign({}, {
    type: 'group',
    width: eachSpacing / 2,
    meter: {
      border: 4,
      fillColor: '#FFFFFF' } },

  opts.extra.column);

  var calPoints = [];
  context.save();

  var leftNum = -2;
  var rightNum = xAxisPoints.length + 2;

  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
    leftNum = Math.floor(-opts._scrollDistance_ / eachSpacing) - 2;
    rightNum = leftNum + opts.xAxis.itemCount + 4;
  }
  if (opts.tooltip && opts.tooltip.textList && opts.tooltip.textList.length && process === 1) {
    drawToolTipSplitArea(opts.tooltip.offset.x, opts, config, context, eachSpacing);
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();

    var data = eachSeries.data;
    switch (columnOption.type) {
      case 'group':
        var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
        var tooltipPoints = getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, series, process);
        calPoints.push(tooltipPoints);
        points = fixColumeData(points, eachSpacing, series.length, seriesIndex, config, opts);
        for (var i = 0; i < points.length; i++) {
          var item = points[i];
          if (item !== null && i > leftNum && i < rightNum) {
            context.beginPath();
            context.setStrokeStyle(item.color || eachSeries.color);
            context.setLineWidth(1);
            context.setFillStyle(item.color || eachSeries.color);
            var startX = item.x - item.width / 2;
            var height = opts.height - item.y - opts.area[2];
            context.moveTo(startX - 1, item.y);
            context.lineTo(startX + item.width - 2, item.y);
            context.lineTo(startX + item.width - 2, opts.height - opts.area[2]);
            context.lineTo(startX, opts.height - opts.area[2]);
            context.lineTo(startX, item.y);
            context.closePath();
            context.stroke();
            context.fill();
          }
        };
        break;
      case 'stack':
        // 绘制堆叠数据图
        var points = getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, series, process);
        calPoints.push(points);
        points = fixColumeStackData(points, eachSpacing, series.length, seriesIndex, config, opts, series);

        for (var _i13 = 0; _i13 < points.length; _i13++) {
          var _item7 = points[_i13];
          if (_item7 !== null && _i13 > leftNum && _i13 < rightNum) {
            context.beginPath();
            context.setFillStyle(_item7.color || eachSeries.color);
            var startX = _item7.x - _item7.width / 2 + 1;
            var height = opts.height - _item7.y - opts.area[2];
            var height0 = opts.height - _item7.y0 - opts.area[2];
            if (seriesIndex > 0) {
              height -= height0;
            }
            context.moveTo(startX, _item7.y);
            context.fillRect(startX, _item7.y, _item7.width - 2, height);
            context.closePath();
            context.fill();
          }
        };
        break;
      case 'meter':
        // 绘制温度计数据图
        var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
        calPoints.push(points);
        points = fixColumeMeterData(points, eachSpacing, series.length, seriesIndex, config, opts, columnOption.meter.border);
        if (seriesIndex == 0) {
          for (var _i14 = 0; _i14 < points.length; _i14++) {
            var _item8 = points[_i14];
            if (_item8 !== null && _i14 > leftNum && _i14 < rightNum) {
              //画背景颜色
              context.beginPath();
              context.setFillStyle(columnOption.meter.fillColor);
              var startX = _item8.x - _item8.width / 2;
              var height = opts.height - _item8.y - opts.area[2];
              context.moveTo(startX, _item8.y);
              context.fillRect(startX, _item8.y, _item8.width, height);
              context.closePath();
              context.fill();
              //画边框线
              if (columnOption.meter.border > 0) {
                context.beginPath();
                context.setStrokeStyle(eachSeries.color);
                context.setLineWidth(columnOption.meter.border * opts.pixelRatio);
                context.moveTo(startX + columnOption.meter.border * 0.5, _item8.y + height);
                context.lineTo(startX + columnOption.meter.border * 0.5, _item8.y + columnOption.meter.border * 0.5);
                context.lineTo(startX + _item8.width - columnOption.meter.border * 0.5, _item8.y + columnOption.meter.border * 0.5);
                context.lineTo(startX + _item8.width - columnOption.meter.border * 0.5, _item8.y + height);
                context.stroke();
              }
            }
          };
        } else {
          for (var _i15 = 0; _i15 < points.length; _i15++) {
            var _item9 = points[_i15];
            if (_item9 !== null && _i15 > leftNum && _i15 < rightNum) {
              context.beginPath();
              context.setFillStyle(_item9.color || eachSeries.color);
              var startX = _item9.x - _item9.width / 2;
              var height = opts.height - _item9.y - opts.area[2];
              context.moveTo(startX, _item9.y);
              context.fillRect(startX, _item9.y, _item9.width, height);
              context.closePath();
              context.fill();
            }
          };
        }
        break;}

  });

  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;
      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();
      var data = eachSeries.data;
      switch (columnOption.type) {
        case 'group':
          var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
          points = fixColumeData(points, eachSpacing, series.length, seriesIndex, config, opts);
          drawPointText(points, eachSeries, config, context);
          break;
        case 'stack':
          var points = getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, series, process);
          drawPointText(points, eachSeries, config, context);
          break;
        case 'meter':
          var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
          drawPointText(points, eachSeries, config, context);
          break;}

    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawCandleDataPoints(series, seriesMA, opts, config, context) {
  var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  var candleOption = assign({}, {
    color: {},
    average: {} },
  opts.extra.candle);
  candleOption.color = assign({}, {
    upLine: '#f04864',
    upFill: '#f04864',
    downLine: '#2fc25b',
    downFill: '#2fc25b' },
  candleOption.color);
  candleOption.average = assign({}, {
    show: false,
    name: [],
    day: [],
    color: config.colors },
  candleOption.average);
  opts.extra.candle = candleOption;

  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;

  var calPoints = [];

  context.save();

  var leftNum = -2;
  var rightNum = xAxisPoints.length + 2;
  var leftSpace = 0;
  var rightSpace = opts.width + eachSpacing;

  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
    leftNum = Math.floor(-opts._scrollDistance_ / eachSpacing) - 2;
    rightNum = leftNum + opts.xAxis.itemCount + 4;
    leftSpace = -opts._scrollDistance_ - eachSpacing + opts.area[3];
    rightSpace = leftSpace + (opts.xAxis.itemCount + 4) * eachSpacing;
  }

  //画均线
  if (candleOption.average.show) {
    seriesMA.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;
      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();

      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      var splitPointList = splitPoints(points);

      for (var i = 0; i < splitPointList.length; i++) {
        var _points = splitPointList[i];
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setLineWidth(1);
        if (_points.length === 1) {
          context.moveTo(_points[0].x, _points[0].y);
          context.arc(_points[0].x, _points[0].y, 1, 0, 2 * Math.PI);
        } else {
          context.moveTo(_points[0].x, _points[0].y);
          var startPoint = 0;
          for (var j = 0; j < _points.length; j++) {
            var item = _points[j];
            if (startPoint == 0 && item.x > leftSpace) {
              context.moveTo(item.x, item.y);
              startPoint = 1;
            }
            if (j > 0 && item.x > leftSpace && item.x < rightSpace) {
              var ctrlPoint = createCurveControlPoints(_points, j - 1);
              context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.y);
            }
          }
          context.moveTo(_points[0].x, _points[0].y);
        }
        context.closePath();
        context.stroke();
      }
    });
  }
  //画K线
  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();
    var data = eachSeries.data;
    var points = getCandleDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);
    var splitPointList = splitPoints(points);

    for (var i = 0; i < splitPointList[0].length; i++) {
      if (i > leftNum && i < rightNum) {
        var item = splitPointList[0][i];
        context.beginPath();
        //如果上涨
        if (data[i][1] - data[i][0] > 0) {
          context.setStrokeStyle(candleOption.color.upLine);
          context.setFillStyle(candleOption.color.upFill);
          context.setLineWidth(1 * opts.pixelRatio);
          context.moveTo(item[3].x, item[3].y); //顶点
          context.lineTo(item[1].x, item[1].y); //收盘中间点
          context.lineTo(item[1].x - eachSpacing / 4, item[1].y); //收盘左侧点
          context.lineTo(item[0].x - eachSpacing / 4, item[0].y); //开盘左侧点
          context.lineTo(item[0].x, item[0].y); //开盘中间点
          context.lineTo(item[2].x, item[2].y); //底点
          context.lineTo(item[0].x, item[0].y); //开盘中间点
          context.lineTo(item[0].x + eachSpacing / 4, item[0].y); //开盘右侧点
          context.lineTo(item[1].x + eachSpacing / 4, item[1].y); //收盘右侧点
          context.lineTo(item[1].x, item[1].y); //收盘中间点
          context.moveTo(item[3].x, item[3].y); //顶点
        } else {
          context.setStrokeStyle(candleOption.color.downLine);
          context.setFillStyle(candleOption.color.downFill);
          context.setLineWidth(1 * opts.pixelRatio);
          context.moveTo(item[3].x, item[3].y); //顶点
          context.lineTo(item[0].x, item[0].y); //开盘中间点
          context.lineTo(item[0].x - eachSpacing / 4, item[0].y); //开盘左侧点
          context.lineTo(item[1].x - eachSpacing / 4, item[1].y); //收盘左侧点
          context.lineTo(item[1].x, item[1].y); //收盘中间点
          context.lineTo(item[2].x, item[2].y); //底点
          context.lineTo(item[1].x, item[1].y); //收盘中间点
          context.lineTo(item[1].x + eachSpacing / 4, item[1].y); //收盘右侧点
          context.lineTo(item[0].x + eachSpacing / 4, item[0].y); //开盘右侧点
          context.lineTo(item[0].x, item[0].y); //开盘中间点
          context.moveTo(item[3].x, item[3].y); //顶点
        }
        context.closePath();
        context.fill();
        context.stroke();
      }
    }
  });

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawAreaDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var areaOption = assign({}, {
    type: 'straight',
    opacity: 0.2,
    addLine: false,
    width: 2,
    gradient: false },
  opts.extra.area);

  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;

  var endY = opts.height - opts.area[2];
  var calPoints = [];

  context.save();
  var leftSpace = 0;
  var rightSpace = opts.width + eachSpacing;
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
    leftSpace = -opts._scrollDistance_ - eachSpacing + opts.area[3];
    rightSpace = leftSpace + (opts.xAxis.itemCount + 4) * eachSpacing;
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();
    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);

    var splitPointList = splitPoints(points);
    for (var i = 0; i < splitPointList.length; i++) {
      var _points2 = splitPointList[i];
      // 绘制区域数
      context.beginPath();
      context.setStrokeStyle(hexToRgb(eachSeries.color, areaOption.opacity));
      if (areaOption.gradient) {
        var gradient = context.createLinearGradient(0, opts.area[0], 0, opts.height - opts.area[2]);
        gradient.addColorStop('0', hexToRgb(eachSeries.color, areaOption.opacity));
        gradient.addColorStop('1.0', hexToRgb("#FFFFFF", 0.1));
        context.setFillStyle(gradient);
      } else {
        context.setFillStyle(hexToRgb(eachSeries.color, areaOption.opacity));
      }
      context.setLineWidth(areaOption.width * opts.pixelRatio);
      if (_points2.length > 1) {
        var firstPoint = _points2[0];
        var lastPoint = _points2[_points2.length - 1];
        context.moveTo(firstPoint.x, firstPoint.y);
        var startPoint = 0;
        if (areaOption.type === 'curve') {
          for (var j = 0; j < _points2.length; j++) {
            var item = _points2[j];
            if (startPoint == 0 && item.x > leftSpace) {
              context.moveTo(item.x, item.y);
              startPoint = 1;
            }
            if (j > 0 && item.x > leftSpace && item.x < rightSpace) {
              var ctrlPoint = createCurveControlPoints(_points2, j - 1);
              context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.y);
            }
          };
        } else {
          for (var _j = 0; _j < _points2.length; _j++) {
            var _item10 = _points2[_j];
            if (startPoint == 0 && _item10.x > leftSpace) {
              context.moveTo(_item10.x, _item10.y);
              startPoint = 1;
            }
            if (_j > 0 && _item10.x > leftSpace && _item10.x < rightSpace) {
              context.lineTo(_item10.x, _item10.y);
            }
          };
        }

        context.lineTo(lastPoint.x, endY);
        context.lineTo(firstPoint.x, endY);
        context.lineTo(firstPoint.x, firstPoint.y);
      } else {
        var _item11 = _points2[0];
        context.moveTo(_item11.x - eachSpacing / 2, _item11.y);
        context.lineTo(_item11.x + eachSpacing / 2, _item11.y);
        context.lineTo(_item11.x + eachSpacing / 2, endY);
        context.lineTo(_item11.x - eachSpacing / 2, endY);
        context.moveTo(_item11.x - eachSpacing / 2, _item11.y);
      }
      context.closePath();
      context.fill();

      //画连线
      if (areaOption.addLine) {
        if (eachSeries.lineType == 'dash') {
          var dashLength = eachSeries.dashLength ? eachSeries.dashLength : 8;
          dashLength *= opts.pixelRatio;
          context.setLineDash([dashLength, dashLength]);
        }
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setLineWidth(areaOption.width * opts.pixelRatio);
        if (_points2.length === 1) {
          context.moveTo(_points2[0].x, _points2[0].y);
          context.arc(_points2[0].x, _points2[0].y, 1, 0, 2 * Math.PI);
        } else {
          context.moveTo(_points2[0].x, _points2[0].y);
          var _startPoint = 0;
          if (areaOption.type === 'curve') {
            for (var _j2 = 0; _j2 < _points2.length; _j2++) {
              var _item12 = _points2[_j2];
              if (_startPoint == 0 && _item12.x > leftSpace) {
                context.moveTo(_item12.x, _item12.y);
                _startPoint = 1;
              }
              if (_j2 > 0 && _item12.x > leftSpace && _item12.x < rightSpace) {
                var _ctrlPoint = createCurveControlPoints(_points2, _j2 - 1);
                context.bezierCurveTo(_ctrlPoint.ctrA.x, _ctrlPoint.ctrA.y, _ctrlPoint.ctrB.x, _ctrlPoint.ctrB.y, _item12.x, _item12.y);
              }
            };
          } else {
            for (var _j3 = 0; _j3 < _points2.length; _j3++) {
              var _item13 = _points2[_j3];
              if (_startPoint == 0 && _item13.x > leftSpace) {
                context.moveTo(_item13.x, _item13.y);
                _startPoint = 1;
              }
              if (_j3 > 0 && _item13.x > leftSpace && _item13.x < rightSpace) {
                context.lineTo(_item13.x, _item13.y);
              }
            };
          }
          context.moveTo(_points2[0].x, _points2[0].y);
        }
        context.stroke();
        context.setLineDash([]);
      }
    }

    //画点
    if (opts.dataPointShape !== false) {
      drawPointShape(points, eachSeries.color, eachSeries.pointShape, context, opts);
    }

  });

  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;
      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();
      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      drawPointText(points, eachSeries, config, context);
    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawLineDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var lineOption = assign({}, {
    type: 'straight',
    width: 2 },
  opts.extra.line);
  lineOption.width *= opts.pixelRatio;

  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;
  var calPoints = [];

  context.save();
  var leftSpace = 0;
  var rightSpace = opts.width + eachSpacing;
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
    leftSpace = -opts._scrollDistance_ - eachSpacing + opts.area[3];
    rightSpace = leftSpace + (opts.xAxis.itemCount + 4) * eachSpacing;
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();
    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);
    var splitPointList = splitPoints(points);

    if (eachSeries.lineType == 'dash') {
      var dashLength = eachSeries.dashLength ? eachSeries.dashLength : 8;
      dashLength *= opts.pixelRatio;
      context.setLineDash([dashLength, dashLength]);
    }
    context.beginPath();
    context.setStrokeStyle(eachSeries.color);
    context.setLineWidth(lineOption.width);

    splitPointList.forEach(function (points, index) {

      if (points.length === 1) {
        context.moveTo(points[0].x, points[0].y);
        context.arc(points[0].x, points[0].y, 1, 0, 2 * Math.PI);
      } else {
        context.moveTo(points[0].x, points[0].y);
        var startPoint = 0;
        if (lineOption.type === 'curve') {
          for (var j = 0; j < points.length; j++) {
            var item = points[j];
            if (startPoint == 0 && item.x > leftSpace) {
              context.moveTo(item.x, item.y);
              startPoint = 1;
            }
            if (j > 0 && item.x > leftSpace && item.x < rightSpace) {
              var ctrlPoint = createCurveControlPoints(points, j - 1);
              context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.y);
            }
          };
        } else {
          for (var _j4 = 0; _j4 < points.length; _j4++) {
            var _item14 = points[_j4];
            if (startPoint == 0 && _item14.x > leftSpace) {
              context.moveTo(_item14.x, _item14.y);
              startPoint = 1;
            }
            if (_j4 > 0 && _item14.x > leftSpace && _item14.x < rightSpace) {
              context.lineTo(_item14.x, _item14.y);
            }
          };
        }
        context.moveTo(points[0].x, points[0].y);
      }

    });

    context.stroke();
    context.setLineDash([]);

    if (opts.dataPointShape !== false) {
      drawPointShape(points, eachSeries.color, eachSeries.pointShape, context, opts);
    }
  });

  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;
      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();
      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      drawPointText(points, eachSeries, config, context);
    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawMixDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;

  var endY = opts.height - opts.area[2];
  var calPoints = [];

  var columnIndex = 0;
  var columnLength = 0;
  series.forEach(function (eachSeries, seriesIndex) {
    if (eachSeries.type == 'column') {
      columnLength += 1;
    }
  });
  context.save();
  var leftNum = -2;
  var rightNum = xAxisPoints.length + 2;
  var leftSpace = 0;
  var rightSpace = opts.width + eachSpacing;
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
    leftNum = Math.floor(-opts._scrollDistance_ / eachSpacing) - 2;
    rightNum = leftNum + opts.xAxis.itemCount + 4;
    leftSpace = -opts._scrollDistance_ - eachSpacing + opts.area[3];
    rightSpace = leftSpace + (opts.xAxis.itemCount + 4) * eachSpacing;
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;

    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();

    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);

    // 绘制柱状数据图
    if (eachSeries.type == 'column') {
      points = fixColumeData(points, eachSpacing, columnLength, columnIndex, config, opts);
      for (var i = 0; i < points.length; i++) {
        var item = points[i];
        if (item !== null && i > leftNum && i < rightNum) {
          context.beginPath();
          context.setStrokeStyle(item.color || eachSeries.color);
          context.setLineWidth(1);
          context.setFillStyle(item.color || eachSeries.color);
          var startX = item.x - item.width / 2;
          var height = opts.height - item.y - opts.area[2];
          context.moveTo(startX, item.y);
          context.moveTo(startX - 1, item.y);
          context.lineTo(startX + item.width - 2, item.y);
          context.lineTo(startX + item.width - 2, opts.height - opts.area[2]);
          context.lineTo(startX, opts.height - opts.area[2]);
          context.lineTo(startX, item.y);
          context.closePath();
          context.stroke();
          context.fill();
          context.closePath();
          context.fill();
        }
      }
      columnIndex += 1;
    }

    //绘制区域图数据

    if (eachSeries.type == 'area') {
      var _splitPointList = splitPoints(points);
      for (var _i16 = 0; _i16 < _splitPointList.length; _i16++) {
        var _points3 = _splitPointList[_i16];
        // 绘制区域数据
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setFillStyle(hexToRgb(eachSeries.color, 0.2));
        context.setLineWidth(2 * opts.pixelRatio);
        if (_points3.length > 1) {
          var firstPoint = _points3[0];
          var lastPoint = _points3[_points3.length - 1];
          context.moveTo(firstPoint.x, firstPoint.y);
          var startPoint = 0;
          if (eachSeries.style === 'curve') {
            for (var j = 0; j < _points3.length; j++) {
              var _item15 = _points3[j];
              if (startPoint == 0 && _item15.x > leftSpace) {
                context.moveTo(_item15.x, _item15.y);
                startPoint = 1;
              }
              if (j > 0 && _item15.x > leftSpace && _item15.x < rightSpace) {
                var ctrlPoint = createCurveControlPoints(_points3, j - 1);
                context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, _item15.x, _item15.y);
              }
            };
          } else {
            for (var _j5 = 0; _j5 < _points3.length; _j5++) {
              var _item16 = _points3[_j5];
              if (startPoint == 0 && _item16.x > leftSpace) {
                context.moveTo(_item16.x, _item16.y);
                startPoint = 1;
              }
              if (_j5 > 0 && _item16.x > leftSpace && _item16.x < rightSpace) {
                context.lineTo(_item16.x, _item16.y);
              }
            };
          }
          context.lineTo(lastPoint.x, endY);
          context.lineTo(firstPoint.x, endY);
          context.lineTo(firstPoint.x, firstPoint.y);
        } else {
          var _item17 = _points3[0];
          context.moveTo(_item17.x - eachSpacing / 2, _item17.y);
          context.lineTo(_item17.x + eachSpacing / 2, _item17.y);
          context.lineTo(_item17.x + eachSpacing / 2, endY);
          context.lineTo(_item17.x - eachSpacing / 2, endY);
          context.moveTo(_item17.x - eachSpacing / 2, _item17.y);
        }
        context.closePath();
        context.fill();
      }
    }

    // 绘制折线数据图
    if (eachSeries.type == 'line') {
      var splitPointList = splitPoints(points);
      splitPointList.forEach(function (points, index) {
        if (eachSeries.lineType == 'dash') {
          var dashLength = eachSeries.dashLength ? eachSeries.dashLength : 8;
          dashLength *= opts.pixelRatio;
          context.setLineDash([dashLength, dashLength]);
        }
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setLineWidth(2 * opts.pixelRatio);
        if (points.length === 1) {
          context.moveTo(points[0].x, points[0].y);
          context.arc(points[0].x, points[0].y, 1, 0, 2 * Math.PI);
        } else {
          context.moveTo(points[0].x, points[0].y);
          var _startPoint2 = 0;
          if (eachSeries.style == 'curve') {
            for (var _j6 = 0; _j6 < points.length; _j6++) {
              var _item18 = points[_j6];
              if (_startPoint2 == 0 && _item18.x > leftSpace) {
                context.moveTo(_item18.x, _item18.y);
                _startPoint2 = 1;
              }
              if (_j6 > 0 && _item18.x > leftSpace && _item18.x < rightSpace) {
                var ctrlPoint = createCurveControlPoints(points, _j6 - 1);
                context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, _item18.x, _item18.y);
              }
            }
          } else {
            for (var _j7 = 0; _j7 < points.length; _j7++) {
              var _item19 = points[_j7];
              if (_startPoint2 == 0 && _item19.x > leftSpace) {
                context.moveTo(_item19.x, _item19.y);
                _startPoint2 = 1;
              }
              if (_j7 > 0 && _item19.x > leftSpace && _item19.x < rightSpace) {
                context.lineTo(_item19.x, _item19.y);
              }
            }
          }
          context.moveTo(points[0].x, points[0].y);
        }
        context.stroke();
        context.setLineDash([]);
      });
    }

    // 绘制点数据图
    if (eachSeries.type == 'point') {
      eachSeries.addPoint = true;
    }

    if (eachSeries.addPoint == true && eachSeries.type !== 'column') {
      drawPointShape(points, eachSeries.color, eachSeries.pointShape, context, opts);
    }
  });
  if (opts.dataLabel !== false && process === 1) {
    var columnIndex = 0;
    series.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;

      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();

      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      if (eachSeries.type !== 'column') {
        drawPointText(points, eachSeries, config, context);
      } else {
        points = fixColumeData(points, eachSpacing, columnLength, columnIndex, config, opts);
        drawPointText(points, eachSeries, config, context);
        columnIndex += 1;
      }

    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints) {
  var toolTipOption = opts.extra.tooltip || {};
  if (toolTipOption.horizentalLine && opts.tooltip && process === 1 && (opts.type == 'line' || opts.type == 'area' || opts.type == 'column' || opts.type == 'candle' || opts.type == 'mix')) {
    drawToolTipHorizentalLine(opts, config, context, eachSpacing, xAxisPoints);
  }
  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }
  if (opts.tooltip && opts.tooltip.textList && opts.tooltip.textList.length && process === 1) {
    drawToolTip(opts.tooltip.textList, opts.tooltip.offset, opts, config, context, eachSpacing, xAxisPoints);
  }
  context.restore();

}

function drawXAxis(categories, opts, config, context) {

  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  startX = xAxisData.startX,
  endX = xAxisData.endX,
  eachSpacing = xAxisData.eachSpacing;
  var boundaryGap = 'center';
  if (opts.type == 'line' || opts.type == 'area') {
    boundaryGap = opts.xAxis.boundaryGap;
  }
  var startY = opts.height - opts.area[2];
  var endY = opts.area[0];

  //绘制滚动条
  if (opts.enableScroll && opts.xAxis.scrollShow) {
    var scrollY = opts.height - opts.area[2] + config.xAxisHeight;
    var scrollScreenWidth = endX - startX;
    var scrollTotalWidth = eachSpacing * (xAxisPoints.length - 1);
    var scrollWidth = scrollScreenWidth * scrollScreenWidth / scrollTotalWidth;
    var scrollLeft = 0;
    if (opts._scrollDistance_) {
      scrollLeft = -opts._scrollDistance_ * scrollScreenWidth / scrollTotalWidth;
    }
    context.beginPath();
    context.setLineCap('round');
    context.setLineWidth(6 * opts.pixelRatio);
    context.setStrokeStyle(opts.xAxis.scrollBackgroundColor || "#EFEBEF");
    context.moveTo(startX, scrollY);
    context.lineTo(endX, scrollY);
    context.stroke();
    context.closePath();
    context.beginPath();
    context.setLineCap('round');
    context.setLineWidth(6 * opts.pixelRatio);
    context.setStrokeStyle(opts.xAxis.scrollColor || "#A6A6A6");
    context.moveTo(startX + scrollLeft, scrollY);
    context.lineTo(startX + scrollLeft + scrollWidth, scrollY);
    context.stroke();
    context.closePath();
    context.setLineCap('butt');
  }

  context.save();

  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0) {
    context.translate(opts._scrollDistance_, 0);
  }

  //绘制X轴刻度线
  if (opts.xAxis.calibration === true) {
    context.setStrokeStyle(opts.xAxis.gridColor || "#cccccc");
    context.setLineCap('butt');
    context.setLineWidth(1 * opts.pixelRatio);
    xAxisPoints.forEach(function (item, index) {
      if (index > 0) {
        context.beginPath();
        context.moveTo(item - eachSpacing / 2, startY);
        context.lineTo(item - eachSpacing / 2, startY + 3 * opts.pixelRatio);
        context.closePath();
        context.stroke();
      }
    });
  }
  //绘制X轴网格
  if (opts.xAxis.disableGrid !== true) {
    context.setStrokeStyle(opts.xAxis.gridColor || "#cccccc");
    context.setLineCap('butt');
    context.setLineWidth(1 * opts.pixelRatio);
    if (opts.xAxis.gridType == 'dash') {
      context.setLineDash([opts.xAxis.dashLength, opts.xAxis.dashLength]);
    }
    opts.xAxis.gridEval = opts.xAxis.gridEval || 1;
    xAxisPoints.forEach(function (item, index) {
      if (index % opts.xAxis.gridEval == 0) {
        context.beginPath();
        context.moveTo(item, startY);
        context.lineTo(item, endY);
        context.stroke();
      }
    });
    context.setLineDash([]);
  }


  //绘制X轴文案
  if (opts.xAxis.disabled !== true) {
    // 对X轴列表做抽稀处理
    //默认全部显示X轴标签
    var maxXAxisListLength = categories.length;
    //如果设置了X轴单屏数量
    if (opts.xAxis.labelCount) {
      //如果设置X轴密度
      if (opts.xAxis.itemCount) {
        maxXAxisListLength = Math.ceil(categories.length / opts.xAxis.itemCount * opts.xAxis.labelCount);
      } else {
        maxXAxisListLength = opts.xAxis.labelCount;
      }
      maxXAxisListLength -= 1;
    }

    var ratio = Math.ceil(categories.length / maxXAxisListLength);

    var newCategories = [];
    var cgLength = categories.length;
    for (var i = 0; i < cgLength; i++) {
      if (i % ratio !== 0) {
        newCategories.push("");
      } else {
        newCategories.push(categories[i]);
      }
    }
    newCategories[cgLength - 1] = categories[cgLength - 1];

    var xAxisFontSize = opts.xAxis.fontSize || config.fontSize;
    if (config._xAxisTextAngle_ === 0) {
      newCategories.forEach(function (item, index) {
        var offset = -measureText(String(item), xAxisFontSize) / 2;
        if (boundaryGap == 'center') {
          offset += eachSpacing / 2;
        }
        var scrollHeight = 0;
        if (opts.xAxis.scrollShow) {
          scrollHeight = 6 * opts.pixelRatio;
        }
        context.beginPath();
        context.setFontSize(xAxisFontSize);
        context.setFillStyle(opts.xAxis.fontColor || '#666666');
        context.fillText(String(item), xAxisPoints[index] + offset, startY + xAxisFontSize + (config.xAxisHeight - scrollHeight - xAxisFontSize) / 2);
        context.closePath();
        context.stroke();
      });

    } else {
      newCategories.forEach(function (item, index) {
        context.save();
        context.beginPath();
        context.setFontSize(xAxisFontSize);
        context.setFillStyle(opts.xAxis.fontColor || '#666666');
        var textWidth = measureText(String(item), xAxisFontSize);
        var offset = -textWidth;
        if (boundaryGap == 'center') {
          offset += eachSpacing / 2;
        }
        var _calRotateTranslate = calRotateTranslate(xAxisPoints[index] + eachSpacing / 2, startY + xAxisFontSize / 2 + 5, opts.height),
        transX = _calRotateTranslate.transX,
        transY = _calRotateTranslate.transY;

        context.rotate(-1 * config._xAxisTextAngle_);
        context.translate(transX, transY);
        context.fillText(String(item), xAxisPoints[index] + offset, startY + xAxisFontSize + 5);
        context.closePath();
        context.stroke();
        context.restore();
      });
    }
  }
  context.restore();

  //绘制X轴轴线
  if (opts.xAxis.axisLine) {
    context.beginPath();
    context.setStrokeStyle(opts.xAxis.axisLineColor);
    context.setLineWidth(1 * opts.pixelRatio);
    context.moveTo(startX, opts.height - opts.area[2]);
    context.lineTo(endX, opts.height - opts.area[2]);
    context.stroke();
  }
}

function drawYAxisGrid(categories, opts, config, context) {
  if (opts.yAxis.disableGrid === true) {
    return;
  }
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  var eachSpacing = spacingValid / opts.yAxis.splitNumber;
  var startX = opts.area[3];
  var xAxisPoints = opts.chartData.xAxisData.xAxisPoints,
  xAxiseachSpacing = opts.chartData.xAxisData.eachSpacing;
  var TotalWidth = xAxiseachSpacing * (xAxisPoints.length - 1);
  var endX = startX + TotalWidth;

  var points = [];
  for (var i = 0; i < opts.yAxis.splitNumber + 1; i++) {
    points.push(opts.height - opts.area[2] - eachSpacing * i);
  }

  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0) {
    context.translate(opts._scrollDistance_, 0);
  }

  if (opts.yAxis.gridType == 'dash') {
    context.setLineDash([opts.yAxis.dashLength, opts.yAxis.dashLength]);
  }
  context.setStrokeStyle(opts.yAxis.gridColor);
  context.setLineWidth(1 * opts.pixelRatio);
  points.forEach(function (item, index) {
    context.beginPath();
    context.moveTo(startX, item);
    context.lineTo(endX, item);
    context.stroke();
  });
  context.setLineDash([]);

  context.restore();
}

function drawYAxis(series, opts, config, context) {
  if (opts.yAxis.disabled === true) {
    return;
  }
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  var eachSpacing = spacingValid / opts.yAxis.splitNumber;
  var startX = opts.area[3];
  var endX = opts.width - opts.area[1];
  var endY = opts.height - opts.area[2];
  var fillEndY = endY + config.xAxisHeight;
  if (opts.xAxis.scrollShow) {
    fillEndY -= 3 * opts.pixelRatio;
  }
  if (opts.xAxis.rotateLabel) {
    fillEndY = opts.height - opts.area[2] + 3;
  }
  // set YAxis background
  context.beginPath();
  context.setFillStyle(opts.background || '#ffffff');
  if (opts._scrollDistance_ < 0) {
    context.fillRect(0, 0, startX, fillEndY);
  }
  if (opts.enableScroll == true) {
    context.fillRect(endX, 0, opts.width, fillEndY);
  }
  context.closePath();
  context.stroke();

  var points = [];
  for (var i = 0; i <= opts.yAxis.splitNumber; i++) {
    points.push(opts.area[0] + eachSpacing * i);
  }

  var tStartLeft = opts.area[3];
  var tStartRight = opts.width - opts.area[1];var _loop4 = function _loop4(

  _i17) {
    var yData = opts.yAxis.data[_i17];
    if (yData.disabled !== true) {
      var rangesFormat = opts.chartData.yAxisData.rangesFormat[_i17];
      var yAxisFontSize = yData.fontSize || config.fontSize;
      var yAxisWidth = opts.chartData.yAxisData.yAxisWidth[_i17];
      //画Y轴刻度及文案
      rangesFormat.forEach(function (item, index) {
        var pos = points[index] ? points[index] : endY;
        context.beginPath();
        context.setFontSize(yAxisFontSize);
        context.setLineWidth(1 * opts.pixelRatio);
        context.setStrokeStyle(yData.axisLineColor || '#cccccc');
        context.setFillStyle(yData.fontColor || '#666666');
        if (yAxisWidth.position == 'left') {
          context.fillText(String(item), tStartLeft - yAxisWidth.width, pos + yAxisFontSize / 2);
          //画刻度线
          if (yData.calibration == true) {
            context.moveTo(tStartLeft, pos);
            context.lineTo(tStartLeft - 3 * opts.pixelRatio, pos);
          }
        } else {
          context.fillText(String(item), tStartRight + 4 * opts.pixelRatio, pos + yAxisFontSize / 2);
          //画刻度线
          if (yData.calibration == true) {
            context.moveTo(tStartRight, pos);
            context.lineTo(tStartRight + 3 * opts.pixelRatio, pos);
          }
        }
        context.closePath();
        context.stroke();
      });
      //画Y轴轴线
      if (yData.axisLine !== false) {
        context.beginPath();
        context.setStrokeStyle(yData.axisLineColor || '#cccccc');
        context.setLineWidth(1 * opts.pixelRatio);
        if (yAxisWidth.position == 'left') {
          context.moveTo(tStartLeft, opts.height - opts.area[2]);
          context.lineTo(tStartLeft, opts.area[0]);
        } else {
          context.moveTo(tStartRight, opts.height - opts.area[2]);
          context.lineTo(tStartRight, opts.area[0]);
        }
        context.stroke();
      }

      //画Y轴标题
      if (opts.yAxis.showTitle) {

        var titleFontSize = yData.titleFontSize || config.fontSize;
        var title = yData.title;
        context.beginPath();
        context.setFontSize(titleFontSize);
        context.setFillStyle(yData.titleFontColor || '#666666');
        if (yAxisWidth.position == 'left') {
          context.fillText(title, tStartLeft - measureText(title, titleFontSize) / 2, opts.area[0] - 10 * opts.pixelRatio);
        } else {
          context.fillText(title, tStartRight - measureText(title, titleFontSize) / 2, opts.area[0] - 10 * opts.pixelRatio);
        }
        context.closePath();
        context.stroke();
      }
      if (yAxisWidth.position == 'left') {
        tStartLeft -= yAxisWidth.width + opts.yAxis.padding;
      } else {
        tStartRight += yAxisWidth.width + opts.yAxis.padding;
      }
    }};for (var _i17 = 0; _i17 < opts.yAxis.data.length; _i17++) {_loop4(_i17);
  }
}

function drawLegend(series, opts, config, context, chartData) {
  if (opts.legend.show === false) {
    return;
  }
  var legendData = chartData.legendData;
  var legendList = legendData.points;
  var legendArea = legendData.area;
  var padding = opts.legend.padding;
  var fontSize = opts.legend.fontSize;
  var shapeWidth = 15 * opts.pixelRatio;
  var shapeRight = 5 * opts.pixelRatio;
  var itemGap = opts.legend.itemGap;
  var lineHeight = Math.max(opts.legend.lineHeight * opts.pixelRatio, fontSize);

  //画背景及边框
  context.beginPath();
  context.setLineWidth(opts.legend.borderWidth);
  context.setStrokeStyle(opts.legend.borderColor);
  context.setFillStyle(opts.legend.backgroundColor);
  context.moveTo(legendArea.start.x, legendArea.start.y);
  context.rect(legendArea.start.x, legendArea.start.y, legendArea.width, legendArea.height);
  context.closePath();
  context.fill();
  context.stroke();

  legendList.forEach(function (itemList, listIndex) {
    var width = 0;
    var height = 0;
    width = legendData.widthArr[listIndex];
    height = legendData.heightArr[listIndex];
    var startX = 0;
    var startY = 0;
    if (opts.legend.position == 'top' || opts.legend.position == 'bottom') {
      startX = legendArea.start.x + (legendArea.width - width) / 2;
      startY = legendArea.start.y + padding + listIndex * lineHeight;
    } else {
      if (listIndex == 0) {
        width = 0;
      } else {
        width = legendData.widthArr[listIndex - 1];
      }
      startX = legendArea.start.x + padding + width;
      startY = legendArea.start.y + padding + (legendArea.height - height) / 2;
    }

    context.setFontSize(config.fontSize);
    for (var i = 0; i < itemList.length; i++) {
      var item = itemList[i];
      item.area = [0, 0, 0, 0];
      item.area[0] = startX;
      item.area[1] = startY;
      item.area[3] = startY + lineHeight;
      context.beginPath();
      context.setLineWidth(1 * opts.pixelRatio);
      context.setStrokeStyle(item.show ? item.color : opts.legend.hiddenColor);
      context.setFillStyle(item.show ? item.color : opts.legend.hiddenColor);
      switch (item.legendShape) {
        case 'line':
          context.moveTo(startX, startY + 0.5 * lineHeight - 2 * opts.pixelRatio);
          context.fillRect(startX, startY + 0.5 * lineHeight - 2 * opts.pixelRatio, 15 * opts.pixelRatio, 4 * opts.pixelRatio);
          break;
        case 'triangle':
          context.moveTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          context.lineTo(startX + 2.5 * opts.pixelRatio, startY + 0.5 * lineHeight + 5 * opts.pixelRatio);
          context.lineTo(startX + 12.5 * opts.pixelRatio, startY + 0.5 * lineHeight + 5 * opts.pixelRatio);
          context.lineTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          break;
        case 'diamond':
          context.moveTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          context.lineTo(startX + 2.5 * opts.pixelRatio, startY + 0.5 * lineHeight);
          context.lineTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight + 5 * opts.pixelRatio);
          context.lineTo(startX + 12.5 * opts.pixelRatio, startY + 0.5 * lineHeight);
          context.lineTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          break;
        case 'circle':
          context.moveTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight);
          context.arc(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight, 5 * opts.pixelRatio, 0, 2 * Math.PI);
          break;
        case 'rect':
          context.moveTo(startX, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          context.fillRect(startX, startY + 0.5 * lineHeight - 5 * opts.pixelRatio, 15 * opts.pixelRatio, 10 * opts.pixelRatio);
          break;
        default:
          context.moveTo(startX, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          context.fillRect(startX, startY + 0.5 * lineHeight - 5 * opts.pixelRatio, 15 * opts.pixelRatio, 10 * opts.pixelRatio);}

      context.closePath();
      context.fill();
      context.stroke();

      startX += shapeWidth + shapeRight;
      var fontTrans = 0.5 * lineHeight + 0.5 * fontSize - 2;
      context.beginPath();
      context.setFontSize(fontSize);
      context.setFillStyle(item.show ? opts.legend.fontColor : opts.legend.hiddenColor);
      context.fillText(item.name, startX, startY + fontTrans);
      context.closePath();
      context.stroke();
      if (opts.legend.position == 'top' || opts.legend.position == 'bottom') {
        startX += measureText(item.name, fontSize) + itemGap;
        item.area[2] = startX;
      } else {
        item.area[2] = startX + measureText(item.name, fontSize) + itemGap;;
        startX -= shapeWidth + shapeRight;
        startY += lineHeight;
      }
    }
  });
}

function drawPieDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var pieOption = assign({}, {
    activeOpacity: 0.5,
    activeRadius: 10 * opts.pixelRatio,
    offsetAngle: 0,
    labelWidth: 15 * opts.pixelRatio,
    ringWidth: 0,
    border: false,
    borderWidth: 2,
    borderColor: '#FFFFFF' },
  opts.extra.pie);
  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.area[0] + (opts.height - opts.area[0] - opts.area[2]) / 2 };

  if (config.pieChartLinePadding == 0) {
    config.pieChartLinePadding = pieOption.activeRadius;
  }

  var radius = Math.min((opts.width - opts.area[1] - opts.area[3]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding - config._pieTextMaxLength_, (opts.height - opts.area[0] - opts.area[2]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding);

  series = getPieDataPoints(series, radius, process);

  var activeRadius = pieOption.activeRadius;

  series = series.map(function (eachSeries) {
    eachSeries._start_ += pieOption.offsetAngle * Math.PI / 180;
    return eachSeries;
  });
  series.forEach(function (eachSeries, seriesIndex) {
    if (opts.tooltip) {
      if (opts.tooltip.index == seriesIndex) {
        context.beginPath();
        context.setFillStyle(hexToRgb(eachSeries.color, opts.extra.pie.activeOpacity || 0.5));
        context.moveTo(centerPosition.x, centerPosition.y);
        context.arc(centerPosition.x, centerPosition.y, eachSeries._radius_ + activeRadius, eachSeries._start_,
        eachSeries._start_ + 2 *
        eachSeries._proportion_ * Math.PI);
        context.closePath();
        context.fill();
      }
    }
    context.beginPath();
    context.setLineWidth(pieOption.borderWidth * opts.pixelRatio);
    context.lineJoin = "round";
    context.setStrokeStyle(pieOption.borderColor);
    context.setFillStyle(eachSeries.color);
    context.moveTo(centerPosition.x, centerPosition.y);
    context.arc(centerPosition.x, centerPosition.y, eachSeries._radius_, eachSeries._start_, eachSeries._start_ + 2 * eachSeries._proportion_ * Math.PI);
    context.closePath();
    context.fill();
    if (pieOption.border == true) {
      context.stroke();
    }
  });

  if (opts.type === 'ring') {
    var innerPieWidth = radius * 0.6;
    if (typeof opts.extra.pie.ringWidth === 'number' && opts.extra.pie.ringWidth > 0) {
      innerPieWidth = Math.max(0, radius - opts.extra.pie.ringWidth);
    }
    context.beginPath();
    context.setFillStyle(opts.background || '#ffffff');
    context.moveTo(centerPosition.x, centerPosition.y);
    context.arc(centerPosition.x, centerPosition.y, innerPieWidth, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
  }

  if (opts.dataLabel !== false && process === 1) {
    var valid = false;
    for (var i = 0, len = series.length; i < len; i++) {
      if (series[i].data > 0) {
        valid = true;
        break;
      }
    }

    if (valid) {
      drawPieText(series, opts, config, context, radius, centerPosition);
    }
  }

  if (process === 1 && opts.type === 'ring') {
    drawRingTitle(opts, config, context, centerPosition);
  }

  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawRoseDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var roseOption = assign({}, {
    type: 'area',
    activeOpacity: 0.5,
    activeRadius: 10 * opts.pixelRatio,
    offsetAngle: 0,
    labelWidth: 15 * opts.pixelRatio,
    border: false,
    borderWidth: 2,
    borderColor: '#FFFFFF' },
  opts.extra.rose);
  if (config.pieChartLinePadding == 0) {
    config.pieChartLinePadding = roseOption.activeRadius;
  }
  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.area[0] + (opts.height - opts.area[0] - opts.area[2]) / 2 };

  var radius = Math.min((opts.width - opts.area[1] - opts.area[3]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding - config._pieTextMaxLength_, (opts.height - opts.area[0] - opts.area[2]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding);
  var minRadius = roseOption.minRadius || radius * 0.5;

  series = getRoseDataPoints(series, roseOption.type, minRadius, radius, process);

  var activeRadius = roseOption.activeRadius;

  series = series.map(function (eachSeries) {
    eachSeries._start_ += (roseOption.offsetAngle || 0) * Math.PI / 180;
    return eachSeries;
  });

  series.forEach(function (eachSeries, seriesIndex) {
    if (opts.tooltip) {
      if (opts.tooltip.index == seriesIndex) {
        context.beginPath();
        context.setFillStyle(hexToRgb(eachSeries.color, roseOption.activeOpacity || 0.5));
        context.moveTo(centerPosition.x, centerPosition.y);
        context.arc(centerPosition.x, centerPosition.y, activeRadius + eachSeries._radius_, eachSeries._start_,
        eachSeries._start_ + 2 * eachSeries._rose_proportion_ * Math.PI);
        context.closePath();
        context.fill();
      }
    }
    context.beginPath();
    context.setLineWidth(roseOption.borderWidth * opts.pixelRatio);
    context.lineJoin = "round";
    context.setStrokeStyle(roseOption.borderColor);
    context.setFillStyle(eachSeries.color);
    context.moveTo(centerPosition.x, centerPosition.y);
    context.arc(centerPosition.x, centerPosition.y, eachSeries._radius_, eachSeries._start_, eachSeries._start_ + 2 *
    eachSeries._rose_proportion_ * Math.PI);
    context.closePath();
    context.fill();
    if (roseOption.border == true) {
      context.stroke();
    }
  });

  if (opts.dataLabel !== false && process === 1) {
    var valid = false;
    for (var i = 0, len = series.length; i < len; i++) {
      if (series[i].data > 0) {
        valid = true;
        break;
      }
    }

    if (valid) {
      drawPieText(series, opts, config, context, radius, centerPosition);
    }
  }

  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawArcbarDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var arcbarOption = assign({}, {
    startAngle: 0.75,
    endAngle: 0.25,
    type: 'default',
    width: 12 * opts.pixelRatio,
    gap: 2 * opts.pixelRatio },
  opts.extra.arcbar);

  series = getArcbarDataPoints(series, arcbarOption, process);

  var centerPosition;
  if (arcbarOption.center) {
    centerPosition = arcbarOption.center;
  } else {
    centerPosition = {
      x: opts.width / 2,
      y: opts.height / 2 };

  }

  var radius;
  if (arcbarOption.radius) {
    radius = arcbarOption.radius;
  } else {
    radius = Math.min(centerPosition.x, centerPosition.y);
    radius -= 5 * opts.pixelRatio;
    radius -= arcbarOption.width / 2;
  }

  for (var i = 0; i < series.length; i++) {
    var eachSeries = series[i];
    //背景颜色
    context.setLineWidth(arcbarOption.width);
    context.setStrokeStyle(arcbarOption.backgroundColor || '#E9E9E9');
    context.setLineCap('round');
    context.beginPath();
    if (arcbarOption.type == 'default') {
      context.arc(centerPosition.x, centerPosition.y, radius - (arcbarOption.width + arcbarOption.gap) * i, arcbarOption.startAngle * Math.PI, arcbarOption.endAngle * Math.PI, false);
    } else {
      context.arc(centerPosition.x, centerPosition.y, radius - (arcbarOption.width + arcbarOption.gap) * i, 0, 2 * Math.PI, false);
    }
    context.stroke();
    //进度条
    context.setLineWidth(arcbarOption.width);
    context.setStrokeStyle(eachSeries.color);
    context.setLineCap('round');
    context.beginPath();
    context.arc(centerPosition.x, centerPosition.y, radius - (arcbarOption.width + arcbarOption.gap) * i, arcbarOption.startAngle * Math.PI, eachSeries._proportion_ * Math.PI, false);
    context.stroke();
  }

  drawRingTitle(opts, config, context, centerPosition);

  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawGaugeDataPoints(categories, series, opts, config, context) {
  var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  var gaugeOption = assign({}, {
    type: 'default',
    startAngle: 0.75,
    endAngle: 0.25,
    width: 15,
    splitLine: {
      fixRadius: 0,
      splitNumber: 10,
      width: 15,
      color: '#FFFFFF',
      childNumber: 5,
      childWidth: 5 },

    pointer: {
      width: 15,
      color: 'auto' } },

  opts.extra.gauge);

  if (gaugeOption.oldAngle == undefined) {
    gaugeOption.oldAngle = gaugeOption.startAngle;
  }
  if (gaugeOption.oldData == undefined) {
    gaugeOption.oldData = 0;
  }
  categories = getGaugeAxisPoints(categories, gaugeOption.startAngle, gaugeOption.endAngle);

  var centerPosition = {
    x: opts.width / 2,
    y: opts.height / 2 };

  var radius = Math.min(centerPosition.x, centerPosition.y);
  radius -= 5 * opts.pixelRatio;
  radius -= gaugeOption.width / 2;
  var innerRadius = radius - gaugeOption.width;
  var totalAngle = 0;

  //判断仪表盘的样式：default百度样式，progress新样式
  if (gaugeOption.type == 'progress') {

    //## 第一步画中心圆形背景和进度条背景
    //中心圆形背景
    var pieRadius = radius - gaugeOption.width * 3;
    context.beginPath();
    var gradient = context.createLinearGradient(centerPosition.x, centerPosition.y - pieRadius, centerPosition.x, centerPosition.y + pieRadius);
    //配置渐变填充（起点：中心点向上减半径；结束点中心点向下加半径）
    gradient.addColorStop('0', hexToRgb(series[0].color, 0.3));
    gradient.addColorStop('1.0', hexToRgb("#FFFFFF", 0.1));
    context.setFillStyle(gradient);
    context.arc(centerPosition.x, centerPosition.y, pieRadius, 0, 2 * Math.PI, false);
    context.fill();
    //画进度条背景
    context.setLineWidth(gaugeOption.width);
    context.setStrokeStyle(hexToRgb(series[0].color, 0.3));
    context.setLineCap('round');
    context.beginPath();
    context.arc(centerPosition.x, centerPosition.y, innerRadius, gaugeOption.startAngle * Math.PI, gaugeOption.endAngle * Math.PI, false);
    context.stroke();

    //## 第二步画刻度线
    totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
    var splitAngle = totalAngle / gaugeOption.splitLine.splitNumber;
    var childAngle = totalAngle / gaugeOption.splitLine.splitNumber / gaugeOption.splitLine.childNumber;
    var startX = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius;
    var endX = -radius - gaugeOption.width - gaugeOption.splitLine.fixRadius + gaugeOption.splitLine.width;
    context.save();
    context.translate(centerPosition.x, centerPosition.y);
    context.rotate((gaugeOption.startAngle - 1) * Math.PI);
    var len = gaugeOption.splitLine.splitNumber * gaugeOption.splitLine.childNumber + 1;
    var proc = series[0].data * process;
    for (var i = 0; i < len; i++) {
      context.beginPath();
      //刻度线随进度变色
      if (proc > i / len) {
        context.setStrokeStyle(hexToRgb(series[0].color, 1));
      } else {
        context.setStrokeStyle(hexToRgb(series[0].color, 0.3));
      }
      context.setLineWidth(3 * opts.pixelRatio);
      context.moveTo(startX, 0);
      context.lineTo(endX, 0);
      context.stroke();
      context.rotate(childAngle * Math.PI);
    }
    context.restore();

    //## 第三步画进度条
    series = getArcbarDataPoints(series, gaugeOption, process);
    context.setLineWidth(gaugeOption.width);
    context.setStrokeStyle(series[0].color);
    context.setLineCap('round');
    context.beginPath();
    context.arc(centerPosition.x, centerPosition.y, innerRadius, gaugeOption.startAngle * Math.PI, series[0]._proportion_ * Math.PI, false);
    context.stroke();

    //## 第四步画指针
    var pointerRadius = radius - gaugeOption.width * 2.5;
    context.save();
    context.translate(centerPosition.x, centerPosition.y);
    context.rotate((series[0]._proportion_ - 1) * Math.PI);
    context.beginPath();
    context.setLineWidth(gaugeOption.width / 3);
    var gradient3 = context.createLinearGradient(0, -pointerRadius * 0.6, 0, pointerRadius * 0.6);
    gradient3.addColorStop('0', hexToRgb('#FFFFFF', 0));
    gradient3.addColorStop('0.5', hexToRgb(series[0].color, 1));
    gradient3.addColorStop('1.0', hexToRgb('#FFFFFF', 0));
    context.setStrokeStyle(gradient3);
    context.arc(0, 0, pointerRadius, 0.85 * Math.PI, 1.15 * Math.PI, false);
    context.stroke();
    context.beginPath();
    context.setLineWidth(1);
    context.setStrokeStyle(series[0].color);
    context.setFillStyle(series[0].color);
    context.moveTo(-pointerRadius - gaugeOption.width / 3 / 2, -4);
    context.lineTo(-pointerRadius - gaugeOption.width / 3 / 2 - 4, 0);
    context.lineTo(-pointerRadius - gaugeOption.width / 3 / 2, 4);
    context.lineTo(-pointerRadius - gaugeOption.width / 3 / 2, -4);
    context.stroke();
    context.fill();
    context.restore();

    //default百度样式
  } else {
    //画背景
    context.setLineWidth(gaugeOption.width);
    context.setLineCap('butt');
    for (var _i18 = 0; _i18 < categories.length; _i18++) {
      var eachCategories = categories[_i18];
      context.beginPath();
      context.setStrokeStyle(eachCategories.color);
      context.arc(centerPosition.x, centerPosition.y, radius, eachCategories._startAngle_ * Math.PI, eachCategories._endAngle_ * Math.PI, false);
      context.stroke();
    }
    context.save();

    //画刻度线
    totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
    var _splitAngle = totalAngle / gaugeOption.splitLine.splitNumber;
    var _childAngle = totalAngle / gaugeOption.splitLine.splitNumber / gaugeOption.splitLine.childNumber;
    var _startX2 = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius;
    var _endX = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius + gaugeOption.splitLine.width;
    var childendX = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius + gaugeOption.splitLine.childWidth;

    context.translate(centerPosition.x, centerPosition.y);
    context.rotate((gaugeOption.startAngle - 1) * Math.PI);

    for (var _i19 = 0; _i19 < gaugeOption.splitLine.splitNumber + 1; _i19++) {
      context.beginPath();
      context.setStrokeStyle(gaugeOption.splitLine.color);
      context.setLineWidth(2 * opts.pixelRatio);
      context.moveTo(_startX2, 0);
      context.lineTo(_endX, 0);
      context.stroke();
      context.rotate(_splitAngle * Math.PI);
    }
    context.restore();

    context.save();
    context.translate(centerPosition.x, centerPosition.y);
    context.rotate((gaugeOption.startAngle - 1) * Math.PI);

    for (var _i20 = 0; _i20 < gaugeOption.splitLine.splitNumber * gaugeOption.splitLine.childNumber + 1; _i20++) {
      context.beginPath();
      context.setStrokeStyle(gaugeOption.splitLine.color);
      context.setLineWidth(1 * opts.pixelRatio);
      context.moveTo(_startX2, 0);
      context.lineTo(childendX, 0);
      context.stroke();
      context.rotate(_childAngle * Math.PI);
    }
    context.restore();

    //画指针
    series = getGaugeDataPoints(series, categories, gaugeOption, process);

    for (var _i21 = 0; _i21 < series.length; _i21++) {
      var eachSeries = series[_i21];
      context.save();
      context.translate(centerPosition.x, centerPosition.y);
      context.rotate((eachSeries._proportion_ - 1) * Math.PI);
      context.beginPath();
      context.setFillStyle(eachSeries.color);
      context.moveTo(gaugeOption.pointer.width, 0);
      context.lineTo(0, -gaugeOption.pointer.width / 2);
      context.lineTo(-innerRadius, 0);
      context.lineTo(0, gaugeOption.pointer.width / 2);
      context.lineTo(gaugeOption.pointer.width, 0);
      context.closePath();
      context.fill();
      context.beginPath();
      context.setFillStyle('#FFFFFF');
      context.arc(0, 0, gaugeOption.pointer.width / 6, 0, 2 * Math.PI, false);
      context.fill();
      context.restore();
    }

    if (opts.dataLabel !== false) {
      drawGaugeLabel(gaugeOption, radius, centerPosition, opts, config, context);
    }
  }

  //画仪表盘标题，副标题
  drawRingTitle(opts, config, context, centerPosition);

  if (process === 1 && opts.type === 'gauge') {
    opts.extra.gauge.oldAngle = series[0]._proportion_;
    opts.extra.gauge.oldData = series[0].data;
  }
  return {
    center: centerPosition,
    radius: radius,
    innerRadius: innerRadius,
    categories: categories,
    totalAngle: totalAngle };

}

function drawRadarDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var radarOption = assign({}, {
    gridColor: '#cccccc',
    labelColor: '#666666',
    opacity: 0.2,
    gridCount: 3 },
  opts.extra.radar);

  var coordinateAngle = getRadarCoordinateSeries(opts.categories.length);

  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.area[0] + (opts.height - opts.area[0] - opts.area[2]) / 2 };


  var radius = Math.min(centerPosition.x - (getMaxTextListLength(opts.categories) + config.radarLabelTextMargin),
  centerPosition.y - config.radarLabelTextMargin);
  //TODO逻辑不对
  radius -= opts.padding[1];

  // draw grid
  context.beginPath();
  context.setLineWidth(1 * opts.pixelRatio);
  context.setStrokeStyle(radarOption.gridColor);
  coordinateAngle.forEach(function (angle) {
    var pos = convertCoordinateOrigin(radius * Math.cos(angle), radius * Math.sin(angle), centerPosition);
    context.moveTo(centerPosition.x, centerPosition.y);
    context.lineTo(pos.x, pos.y);
  });
  context.stroke();
  context.closePath();
  // draw split line grid

  var _loop = function _loop(i) {
    var startPos = {};
    context.beginPath();
    context.setLineWidth(1 * opts.pixelRatio);
    context.setStrokeStyle(radarOption.gridColor);
    coordinateAngle.forEach(function (angle, index) {
      var pos = convertCoordinateOrigin(radius / radarOption.gridCount * i * Math.cos(angle), radius / radarOption.gridCount * i * Math.sin(angle), centerPosition);
      if (index === 0) {
        startPos = pos;
        context.moveTo(pos.x, pos.y);
      } else {
        context.lineTo(pos.x, pos.y);
      }
    });
    context.lineTo(startPos.x, startPos.y);
    context.stroke();
    context.closePath();
  };

  for (var i = 1; i <= radarOption.gridCount; i++) {
    _loop(i);
  }

  var radarDataPoints = getRadarDataPoints(coordinateAngle, centerPosition, radius, series, opts, process);

  radarDataPoints.forEach(function (eachSeries, seriesIndex) {
    // 绘制区域数据
    context.beginPath();
    context.setFillStyle(hexToRgb(eachSeries.color, radarOption.opacity));
    eachSeries.data.forEach(function (item, index) {
      if (index === 0) {
        context.moveTo(item.position.x, item.position.y);
      } else {
        context.lineTo(item.position.x, item.position.y);
      }
    });
    context.closePath();
    context.fill();

    if (opts.dataPointShape !== false) {
      var points = eachSeries.data.map(function (item) {
        return item.position;
      });
      drawPointShape(points, eachSeries.color, eachSeries.pointShape, context, opts);
    }
  });
  // draw label text
  drawRadarLabel(coordinateAngle, radius, centerPosition, opts, config, context);

  return {
    center: centerPosition,
    radius: radius,
    angleList: coordinateAngle };

}

function normalInt(min, max, iter) {
  iter = iter == 0 ? 1 : iter;
  var arr = [];
  for (var i = 0; i < iter; i++) {
    arr[i] = Math.random();
  };
  return Math.floor(arr.reduce(function (i, j) {return i + j;}) / iter * (max - min)) + min;
};

function collisionNew(area, points, width, height) {
  var isIn = false;
  for (var i = 0; i < points.length; i++) {
    if (points[i].area) {
      if (area[3] < points[i].area[1] || area[0] > points[i].area[2] || area[1] > points[i].area[3] || area[2] < points[i].area[0]) {
        if (area[0] < 0 || area[1] < 0 || area[2] > width || area[3] > height) {
          isIn = true;
          break;
        } else {
          isIn = false;
        }
      } else {
        isIn = true;
        break;
      }
    }
  }
  return isIn;
};

function getBoundingBox(data) {
  var bounds = {},coords;
  bounds.xMin = 180;
  bounds.xMax = 0;
  bounds.yMin = 90;
  bounds.yMax = 0;
  for (var i = 0; i < data.length; i++) {
    var coorda = data[i].geometry.coordinates;
    for (var k = 0; k < coorda.length; k++) {
      coords = coorda[k];
      if (coords.length == 1) {
        coords = coords[0];
      }
      for (var j = 0; j < coords.length; j++) {
        var longitude = coords[j][0];
        var latitude = coords[j][1];
        var point = {
          x: longitude,
          y: latitude };

        bounds.xMin = bounds.xMin < point.x ? bounds.xMin : point.x;
        bounds.xMax = bounds.xMax > point.x ? bounds.xMax : point.x;
        bounds.yMin = bounds.yMin < point.y ? bounds.yMin : point.y;
        bounds.yMax = bounds.yMax > point.y ? bounds.yMax : point.y;
      }
    }
  }
  return bounds;
}

function coordinateToPoint(latitude, longitude, bounds, scale, xoffset, yoffset) {
  return {
    x: (longitude - bounds.xMin) * scale + xoffset,
    y: (bounds.yMax - latitude) * scale + yoffset };

}

function pointToCoordinate(pointY, pointX, bounds, scale, xoffset, yoffset) {
  return {
    x: (pointX - xoffset) / scale + bounds.xMin,
    y: bounds.yMax - (pointY - yoffset) / scale };

}

function isRayIntersectsSegment(poi, s_poi, e_poi) {
  if (s_poi[1] == e_poi[1]) {return false;}
  if (s_poi[1] > poi[1] && e_poi[1] > poi[1]) {return false;}
  if (s_poi[1] < poi[1] && e_poi[1] < poi[1]) {return false;}
  if (s_poi[1] == poi[1] && e_poi[1] > poi[1]) {return false;}
  if (e_poi[1] == poi[1] && s_poi[1] > poi[1]) {return false;}
  if (s_poi[0] < poi[0] && e_poi[1] < poi[1]) {return false;}
  var xseg = e_poi[0] - (e_poi[0] - s_poi[0]) * (e_poi[1] - poi[1]) / (e_poi[1] - s_poi[1]);
  if (xseg < poi[0]) {
    return false;
  } else {
    return true;
  }
}

function isPoiWithinPoly(poi, poly) {
  var sinsc = 0;
  for (var i = 0; i < poly.length; i++) {
    var epoly = poly[i][0];
    if (poly.length == 1) {
      epoly = poly[i][0];
    }
    for (var j = 0; j < epoly.length - 1; j++) {
      var s_poi = epoly[j];
      var e_poi = epoly[j + 1];
      if (isRayIntersectsSegment(poi, s_poi, e_poi)) {
        sinsc += 1;
      }
    }
  }

  if (sinsc % 2 == 1) {
    return true;
  } else {
    return false;
  }
}


function drawMapDataPoints(series, opts, config, context) {
  var mapOption = assign({}, {
    border: true,
    borderWidth: 1,
    borderColor: '#666666',
    fillOpacity: 0.6,
    activeBorderColor: '#f04864',
    activeFillColor: '#facc14',
    activeFillOpacity: 1 },
  opts.extra.map);
  var coords, point;
  var data = series;
  var bounds = getBoundingBox(data);
  var xScale = opts.width / Math.abs(bounds.xMax - bounds.xMin);
  var yScale = opts.height / Math.abs(bounds.yMax - bounds.yMin);
  var scale = xScale < yScale ? xScale : yScale;
  var xoffset = opts.width / 2 - Math.abs(bounds.xMax - bounds.xMin) / 2 * scale;
  var yoffset = opts.height / 2 - Math.abs(bounds.yMax - bounds.yMin) / 2 * scale;
  context.beginPath();
  context.clearRect(0, 0, opts.width, opts.height);
  context.setFillStyle(opts.background || '#FFFFFF');
  context.rect(0, 0, opts.width, opts.height);
  context.fill();
  for (var i = 0; i < data.length; i++) {
    context.beginPath();
    context.setLineWidth(mapOption.borderWidth * opts.pixelRatio);
    context.setStrokeStyle(mapOption.borderColor);
    context.setFillStyle(hexToRgb(series[i].color, mapOption.fillOpacity));
    if (opts.tooltip) {
      if (opts.tooltip.index == i) {
        context.setStrokeStyle(mapOption.activeBorderColor);
        context.setFillStyle(hexToRgb(mapOption.activeFillColor, mapOption.activeFillOpacity));
      }
    }
    var coorda = data[i].geometry.coordinates;
    for (var k = 0; k < coorda.length; k++) {
      coords = coorda[k];
      if (coords.length == 1) {
        coords = coords[0];
      }
      for (var j = 0; j < coords.length; j++) {
        point = coordinateToPoint(coords[j][1], coords[j][0], bounds, scale, xoffset, yoffset);
        if (j === 0) {
          context.beginPath();
          context.moveTo(point.x, point.y);
        } else {
          context.lineTo(point.x, point.y);
        }
      }
      context.fill();
      if (mapOption.border == true) {
        context.stroke();
      }
    }
    if (opts.dataLabel == true) {
      var centerPoint = data[i].properties.centroid;
      if (centerPoint) {
        point = coordinateToPoint(centerPoint[1], centerPoint[0], bounds, scale, xoffset, yoffset);
        var fontSize = data[i].textSize || config.fontSize;
        var text = data[i].properties.name;
        context.beginPath();
        context.setFontSize(fontSize);
        context.setFillStyle(data[i].textColor || '#666666');
        context.fillText(text, point.x - measureText(text, fontSize) / 2, point.y + fontSize / 2);
        context.closePath();
        context.stroke();
      }
    }
  }
  opts.chartData.mapData = {
    bounds: bounds,
    scale: scale,
    xoffset: xoffset,
    yoffset: yoffset };

  drawToolTipBridge(opts, config, context, 1);
  context.draw();
}

function getWordCloudPoint(opts, type) {
  var points = opts.series.sort(function (a, b) {return parseInt(b.textSize) - parseInt(a.textSize);});
  switch (type) {
    case 'normal':
      for (var i = 0; i < points.length; i++) {
        var text = points[i].name;
        var tHeight = points[i].textSize;
        var tWidth = measureText(text, tHeight);
        var x = void 0,y = void 0;
        var area = void 0;
        var breaknum = 0;
        while (true) {
          breaknum++;
          x = normalInt(-opts.width / 2, opts.width / 2, 5) - tWidth / 2;
          y = normalInt(-opts.height / 2, opts.height / 2, 5) + tHeight / 2;
          area = [x - 5 + opts.width / 2, y - 5 - tHeight + opts.height / 2, x + tWidth + 5 + opts.width / 2, y + 5 + opts.height / 2];
          var isCollision = collisionNew(area, points, opts.width, opts.height);
          if (!isCollision) break;
          if (breaknum == 1000) {
            area = [-100, -100, -100, -100];
            break;
          }
        };
        points[i].area = area;
      }
      break;
    case 'vertical':var
      Spin = function Spin() {
        //获取均匀随机值，是否旋转，旋转的概率为（1-0.5）
        if (Math.random() > 0.7) {
          return true;
        } else {return false;};
      };;
      for (var _i22 = 0; _i22 < points.length; _i22++) {
        var _text = points[_i22].name;
        var _tHeight = points[_i22].textSize;
        var _tWidth = measureText(_text, _tHeight);
        var isSpin = Spin();
        var _x = void 0,_y = void 0,_area = void 0,areav = void 0;
        var _breaknum = 0;
        while (true) {
          _breaknum++;
          var _isCollision = void 0;
          if (isSpin) {
            _x = normalInt(-opts.width / 2, opts.width / 2, 5) - _tWidth / 2;
            _y = normalInt(-opts.height / 2, opts.height / 2, 5) + _tHeight / 2;
            _area = [_y - 5 - _tWidth + opts.width / 2, -_x - 5 + opts.height / 2, _y + 5 + opts.width / 2, -_x + _tHeight + 5 + opts.height / 2];
            areav = [opts.width - (opts.width / 2 - opts.height / 2) - (-_x + _tHeight + 5 + opts.height / 2) - 5, opts.height / 2 - opts.width / 2 + (_y - 5 - _tWidth + opts.width / 2) - 5, opts.width - (opts.width / 2 - opts.height / 2) - (-_x + _tHeight + 5 + opts.height / 2) + _tHeight, opts.height / 2 - opts.width / 2 + (_y - 5 - _tWidth + opts.width / 2) + _tWidth + 5];
            _isCollision = collisionNew(areav, points, opts.height, opts.width);
          } else {
            _x = normalInt(-opts.width / 2, opts.width / 2, 5) - _tWidth / 2;
            _y = normalInt(-opts.height / 2, opts.height / 2, 5) + _tHeight / 2;
            _area = [_x - 5 + opts.width / 2, _y - 5 - _tHeight + opts.height / 2, _x + _tWidth + 5 + opts.width / 2, _y + 5 + opts.height / 2];
            _isCollision = collisionNew(_area, points, opts.width, opts.height);
          }
          if (!_isCollision) break;
          if (_breaknum == 1000) {
            _area = [-1000, -1000, -1000, -1000];
            break;
          }
        };
        if (isSpin) {
          points[_i22].area = areav;
          points[_i22].areav = _area;
        } else {
          points[_i22].area = _area;
        }
        points[_i22].rotate = isSpin;
      };
      break;}

  return points;
}


function drawWordCloudDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var wordOption = assign({}, {
    type: 'normal',
    autoColors: true },
  opts.extra.word);

  context.beginPath();
  context.setFillStyle(opts.background || '#FFFFFF');
  context.rect(0, 0, opts.width, opts.height);
  context.fill();
  context.save();
  var points = opts.chartData.wordCloudData;
  context.translate(opts.width / 2, opts.height / 2);

  for (var i = 0; i < points.length; i++) {
    context.save();
    if (points[i].rotate) {
      context.rotate(90 * Math.PI / 180);
    }
    var text = points[i].name;
    var tHeight = points[i].textSize;
    var tWidth = measureText(text, tHeight);
    context.beginPath();
    context.setStrokeStyle(points[i].color);
    context.setFillStyle(points[i].color);
    context.setFontSize(tHeight);
    if (points[i].rotate) {
      if (points[i].areav[0] > 0) {
        if (opts.tooltip) {
          if (opts.tooltip.index == i) {
            context.strokeText(text, (points[i].areav[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].areav[1] + 5 + tHeight - opts.height / 2) * process);
          } else {
            context.fillText(text, (points[i].areav[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].areav[1] + 5 + tHeight - opts.height / 2) * process);
          }
        } else {
          context.fillText(text, (points[i].areav[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].areav[1] + 5 + tHeight - opts.height / 2) * process);
        }
      }
    } else {
      if (points[i].area[0] > 0) {
        if (opts.tooltip) {
          if (opts.tooltip.index == i) {
            context.strokeText(text, (points[i].area[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].area[1] + 5 + tHeight - opts.height / 2) * process);
          } else {
            context.fillText(text, (points[i].area[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].area[1] + 5 + tHeight - opts.height / 2) * process);
          }
        } else {
          context.fillText(text, (points[i].area[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].area[1] + 5 + tHeight - opts.height / 2) * process);
        }

      }
    }

    context.stroke();
    context.restore();
  }
  context.restore();
}

function drawFunnelDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var funnelOption = assign({}, {
    activeWidth: 10,
    activeOpacity: 0.3,
    border: false,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    fillOpacity: 1,
    labelAlign: 'right' },
  opts.extra.funnel);
  var eachSpacing = (opts.height - opts.area[0] - opts.area[2]) / series.length;
  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.height - opts.area[2] };

  var activeWidth = funnelOption.activeWidth;
  var radius = Math.min((opts.width - opts.area[1] - opts.area[3]) / 2 - activeWidth, (opts.height - opts.area[0] - opts.area[2]) / 2 - activeWidth);
  series = getFunnelDataPoints(series, radius, process);
  context.save();
  context.translate(centerPosition.x, centerPosition.y);
  for (var i = 0; i < series.length; i++) {
    if (i == 0) {
      if (opts.tooltip) {
        if (opts.tooltip.index == i) {
          context.beginPath();
          context.setFillStyle(hexToRgb(series[i].color, funnelOption.activeOpacity));
          context.moveTo(-activeWidth, 0);
          context.lineTo(-series[i].radius - activeWidth, -eachSpacing);
          context.lineTo(series[i].radius + activeWidth, -eachSpacing);
          context.lineTo(activeWidth, 0);
          context.lineTo(-activeWidth, 0);
          context.closePath();
          context.fill();
        }
      }
      series[i].funnelArea = [centerPosition.x - series[i].radius, centerPosition.y - eachSpacing, centerPosition.x + series[i].radius, centerPosition.y];
      context.beginPath();
      context.setLineWidth(funnelOption.borderWidth * opts.pixelRatio);
      context.setStrokeStyle(funnelOption.borderColor);
      context.setFillStyle(hexToRgb(series[i].color, funnelOption.fillOpacity));
      context.moveTo(0, 0);
      context.lineTo(-series[i].radius, -eachSpacing);
      context.lineTo(series[i].radius, -eachSpacing);
      context.lineTo(0, 0);
      context.closePath();
      context.fill();
      if (funnelOption.border == true) {
        context.stroke();
      }
    } else {
      if (opts.tooltip) {
        if (opts.tooltip.index == i) {
          context.beginPath();
          context.setFillStyle(hexToRgb(series[i].color, funnelOption.activeOpacity));
          context.moveTo(0, 0);
          context.lineTo(-series[i - 1].radius - activeWidth, 0);
          context.lineTo(-series[i].radius - activeWidth, -eachSpacing);
          context.lineTo(series[i].radius + activeWidth, -eachSpacing);
          context.lineTo(series[i - 1].radius + activeWidth, 0);
          context.lineTo(0, 0);
          context.closePath();
          context.fill();
        }
      }
      series[i].funnelArea = [centerPosition.x - series[i].radius, centerPosition.y - eachSpacing * (i + 1), centerPosition.x + series[i].radius, centerPosition.y - eachSpacing * i];
      context.beginPath();
      context.setLineWidth(funnelOption.borderWidth * opts.pixelRatio);
      context.setStrokeStyle(funnelOption.borderColor);
      context.setFillStyle(hexToRgb(series[i].color, funnelOption.fillOpacity));
      context.moveTo(0, 0);
      context.lineTo(-series[i - 1].radius, 0);
      context.lineTo(-series[i].radius, -eachSpacing);
      context.lineTo(series[i].radius, -eachSpacing);
      context.lineTo(series[i - 1].radius, 0);
      context.lineTo(0, 0);
      context.closePath();
      context.fill();
      if (funnelOption.border == true) {
        context.stroke();
      }
    }
    context.translate(0, -eachSpacing);
  }
  context.restore();

  if (opts.dataLabel !== false && process === 1) {
    drawFunnelText(series, opts, context, eachSpacing, funnelOption.labelAlign, activeWidth, centerPosition);
  }

  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawFunnelText(series, opts, context, eachSpacing, labelAlign, activeWidth, centerPosition) {
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    var startX = void 0,endX = void 0,startY = void 0,fontSize = void 0;
    var text = item.format ? item.format(+item._proportion_.toFixed(2)) : util.toFixed(item._proportion_ * 100) + '%';
    if (labelAlign == 'right') {
      if (i == 0) {
        startX = (item.funnelArea[2] + centerPosition.x) / 2;
      } else {
        startX = (item.funnelArea[2] + series[i - 1].funnelArea[2]) / 2;
      }
      endX = startX + activeWidth * 2;
      startY = item.funnelArea[1] + eachSpacing / 2;
      fontSize = item.textSize || opts.fontSize;
      context.setLineWidth(1 * opts.pixelRatio);
      context.setStrokeStyle(item.color);
      context.setFillStyle(item.color);
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(endX, startY);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.moveTo(endX, startY);
      context.arc(endX, startY, 2, 0, 2 * Math.PI);
      context.closePath();
      context.fill();
      context.beginPath();
      context.setFontSize(fontSize);
      context.setFillStyle(item.textColor || '#666666');
      context.fillText(text, endX + 5, startY + fontSize / 2 - 2);
      context.closePath();
      context.stroke();
      context.closePath();
    } else {
      if (i == 0) {
        startX = (item.funnelArea[0] + centerPosition.x) / 2;
      } else {
        startX = (item.funnelArea[0] + series[i - 1].funnelArea[0]) / 2;
      }
      endX = startX - activeWidth * 2;
      startY = item.funnelArea[1] + eachSpacing / 2;
      fontSize = item.textSize || opts.fontSize;
      context.setLineWidth(1 * opts.pixelRatio);
      context.setStrokeStyle(item.color);
      context.setFillStyle(item.color);
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(endX, startY);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.moveTo(endX, startY);
      context.arc(endX, startY, 2, 0, 2 * Math.PI);
      context.closePath();
      context.fill();
      context.beginPath();
      context.setFontSize(fontSize);
      context.setFillStyle(item.textColor || '#666666');
      context.fillText(text, endX - 5 - measureText(text), startY + fontSize / 2 - 2);
      context.closePath();
      context.stroke();
      context.closePath();
    }

  }
}


function drawCanvas(opts, context) {
  context.draw();
}

var Timing = {
  easeIn: function easeIn(pos) {
    return Math.pow(pos, 3);
  },
  easeOut: function easeOut(pos) {
    return Math.pow(pos - 1, 3) + 1;
  },
  easeInOut: function easeInOut(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 3);
    } else {
      return 0.5 * (Math.pow(pos - 2, 3) + 2);
    }
  },
  linear: function linear(pos) {
    return pos;
  } };


function Animation(opts) {
  this.isStop = false;
  opts.duration = typeof opts.duration === 'undefined' ? 1000 : opts.duration;
  opts.timing = opts.timing || 'linear';
  var delay = 17;

  function createAnimationFrame() {
    if (typeof setTimeout !== 'undefined') {
      return function (step, delay) {
        setTimeout(function () {
          var timeStamp = +new Date();
          step(timeStamp);
        }, delay);
      };
    } else if (typeof requestAnimationFrame !== 'undefined') {
      return requestAnimationFrame;
    } else {
      return function (step) {
        step(null);
      };
    }
  };
  var animationFrame = createAnimationFrame();
  var startTimeStamp = null;
  var _step = function step(timestamp) {
    if (timestamp === null || this.isStop === true) {
      opts.onProcess && opts.onProcess(1);
      opts.onAnimationFinish && opts.onAnimationFinish();
      return;
    }
    if (startTimeStamp === null) {
      startTimeStamp = timestamp;
    }
    if (timestamp - startTimeStamp < opts.duration) {
      var process = (timestamp - startTimeStamp) / opts.duration;
      var timingFunction = Timing[opts.timing];
      process = timingFunction(process);

      opts.onProcess && opts.onProcess(process);
      animationFrame(_step, delay);
    } else {
      opts.onProcess && opts.onProcess(1);
      opts.onAnimationFinish && opts.onAnimationFinish();
    }
  };
  _step = _step.bind(this);
  animationFrame(_step, delay);
}

// stop animation immediately
// and tigger onAnimationFinish
Animation.prototype.stop = function () {
  this.isStop = true;
};

function drawCharts(type, opts, config, context) {
  var _this = this;
  var series = opts.series;
  var categories = opts.categories;
  series = fillSeries(series, opts, config);
  var duration = opts.animation ? opts.duration : 0;
  _this.animationInstance && _this.animationInstance.stop();
  var seriesMA = null;
  if (type == 'candle') {
    var average = assign({}, opts.extra.candle.average);
    if (average.show) {
      seriesMA = calCandleMA(average.day, average.name, average.color, series[0].data);
      seriesMA = fillSeries(seriesMA, opts, config);
      opts.seriesMA = seriesMA;
    } else if (opts.seriesMA) {
      seriesMA = opts.seriesMA = fillSeries(opts.seriesMA, opts, config);
    } else {
      seriesMA = series;
    }
  } else {
    seriesMA = series;
  }

  /* 过滤掉show=false的series */
  opts._series_ = series = filterSeries(series);

  //重新计算图表区域

  opts.area = new Array(4);
  //复位绘图区域
  for (var j = 0; j < 4; j++) {
    opts.area[j] = opts.padding[j];
  }

  //通过计算三大区域：图例、X轴、Y轴的大小，确定绘图区域
  var _calLegendData = calLegendData(seriesMA, opts, config, opts.chartData),
  legendHeight = _calLegendData.area.wholeHeight,
  legendWidth = _calLegendData.area.wholeWidth;

  switch (opts.legend.position) {
    case 'top':
      opts.area[0] += legendHeight;
      break;
    case 'bottom':
      opts.area[2] += legendHeight;
      break;
    case 'left':
      opts.area[3] += legendWidth;
      break;
    case 'right':
      opts.area[1] += legendWidth;
      break;}


  var _calYAxisData = {},yAxisWidth = 0;
  if (opts.type === 'line' || opts.type === 'column' || opts.type === 'area' || opts.type === 'mix' || opts.type === 'candle') {
    _calYAxisData = calYAxisData(series, opts, config);
    yAxisWidth = _calYAxisData.yAxisWidth;
    //如果显示Y轴标题
    if (opts.yAxis.showTitle) {
      var maxTitleHeight = 0;
      for (var i = 0; i < opts.yAxis.data.length; i++) {
        maxTitleHeight = Math.max(maxTitleHeight, opts.yAxis.data[i].titleFontSize ? opts.yAxis.data[i].titleFontSize : config.fontSize);
      }
      opts.area[0] += (maxTitleHeight + 6) * opts.pixelRatio;
    }
    var rightIndex = 0,leftIndex = 0;
    //计算主绘图区域左右位置
    for (var _i23 = 0; _i23 < yAxisWidth.length; _i23++) {
      if (yAxisWidth[_i23].position == 'left') {
        if (leftIndex > 0) {
          opts.area[3] += yAxisWidth[_i23].width + opts.yAxis.padding;
        } else {
          opts.area[3] += yAxisWidth[_i23].width;
        }
        leftIndex += 1;
      } else {
        if (rightIndex > 0) {
          opts.area[1] += yAxisWidth[_i23].width + opts.yAxis.padding;
        } else {
          opts.area[1] += yAxisWidth[_i23].width;
        }
        rightIndex += 1;
      }
    }
  } else {
    config.yAxisWidth = yAxisWidth;
  }
  opts.chartData.yAxisData = _calYAxisData;

  if (opts.categories && opts.categories.length) {
    opts.chartData.xAxisData = getXAxisPoints(opts.categories, opts, config);
    var _calCategoriesData = calCategoriesData(opts.categories, opts, config, opts.chartData.xAxisData.eachSpacing),
    xAxisHeight = _calCategoriesData.xAxisHeight,
    angle = _calCategoriesData.angle;
    config.xAxisHeight = xAxisHeight;
    config._xAxisTextAngle_ = angle;
    opts.area[2] += xAxisHeight;
    opts.chartData.categoriesData = _calCategoriesData;
  } else {
    if (opts.type === 'line' || opts.type === 'area' || opts.type === 'points') {
      opts.chartData.xAxisData = calXAxisData(series, opts, config);
      categories = opts.chartData.xAxisData.rangesFormat;
      var _calCategoriesData2 = calCategoriesData(categories, opts, config, opts.chartData.xAxisData.eachSpacing),
      _xAxisHeight = _calCategoriesData2.xAxisHeight,
      _angle = _calCategoriesData2.angle;
      config.xAxisHeight = _xAxisHeight;
      config._xAxisTextAngle_ = _angle;
      opts.area[2] += _xAxisHeight;
      opts.chartData.categoriesData = _calCategoriesData2;
    } else {
      opts.chartData.xAxisData = {
        xAxisPoints: [] };

    }
  }
  //计算右对齐偏移距离
  if (opts.enableScroll && opts.xAxis.scrollAlign == 'right' && opts._scrollDistance_ === undefined) {
    var offsetLeft = 0,
    xAxisPoints = opts.chartData.xAxisData.xAxisPoints,
    startX = opts.chartData.xAxisData.startX,
    endX = opts.chartData.xAxisData.endX,
    eachSpacing = opts.chartData.xAxisData.eachSpacing;
    var totalWidth = eachSpacing * (xAxisPoints.length - 1);
    var screenWidth = endX - startX;
    offsetLeft = screenWidth - totalWidth;
    _this.scrollOption = {
      currentOffset: offsetLeft,
      startTouchX: offsetLeft,
      distance: 0,
      lastMoveTime: 0 };

    opts._scrollDistance_ = offsetLeft;
  }

  if (type === 'pie' || type === 'ring' || type === 'rose') {
    config._pieTextMaxLength_ = opts.dataLabel === false ? 0 : getPieTextMaxLength(seriesMA);
  }

  switch (type) {
    case 'word':
      var wordOption = assign({}, {
        type: 'normal',
        autoColors: true },
      opts.extra.word);
      if (opts.updateData == true || opts.updateData == undefined) {
        opts.chartData.wordCloudData = getWordCloudPoint(opts, wordOption.type);
      }
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawWordCloudDataPoints(series, opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'map':
      context.clearRect(0, 0, opts.width, opts.height);
      drawMapDataPoints(series, opts, config, context);
      break;
    case 'funnel':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.funnelData = drawFunnelDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'line':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawLineDataPoints = drawLineDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawLineDataPoints.xAxisPoints,
          calPoints = _drawLineDataPoints.calPoints,
          eachSpacing = _drawLineDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);

        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'mix':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawMixDataPoints = drawMixDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawMixDataPoints.xAxisPoints,
          calPoints = _drawMixDataPoints.calPoints,
          eachSpacing = _drawMixDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'column':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawColumnDataPoints = drawColumnDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawColumnDataPoints.xAxisPoints,
          calPoints = _drawColumnDataPoints.calPoints,
          eachSpacing = _drawColumnDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'area':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawAreaDataPoints = drawAreaDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawAreaDataPoints.xAxisPoints,
          calPoints = _drawAreaDataPoints.calPoints,
          eachSpacing = _drawAreaDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'ring':
    case 'pie':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.pieData = drawPieDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'rose':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.pieData = drawRoseDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'radar':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.radarData = drawRadarDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'arcbar':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.arcbarData = drawArcbarDataPoints(series, opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'gauge':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.gaugeData = drawGaugeDataPoints(categories, series, opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'candle':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawCandleDataPoints = drawCandleDataPoints(series, seriesMA, opts, config, context, process),
          xAxisPoints = _drawCandleDataPoints.xAxisPoints,
          calPoints = _drawCandleDataPoints.calPoints,
          eachSpacing = _drawCandleDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          if (seriesMA) {
            drawLegend(seriesMA, opts, config, context, opts.chartData);
          } else {
            drawLegend(opts.series, opts, config, context, opts.chartData);
          }
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;}

}

// simple event implement

function Event() {
  this.events = {};
}

Event.prototype.addEventListener = function (type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};

Event.prototype.trigger = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var type = args[0];
  var params = args.slice(1);
  if (!!this.events[type]) {
    this.events[type].forEach(function (listener) {
      try {
        listener.apply(null, params);
      } catch (e) {
        console.error(e);
      }
    });
  }
};

var Charts = function Charts(opts) {
  opts.pixelRatio = opts.pixelRatio ? opts.pixelRatio : 1;
  opts.fontSize = opts.fontSize ? opts.fontSize * opts.pixelRatio : 13 * opts.pixelRatio;
  opts.title = assign({}, opts.title);
  opts.subtitle = assign({}, opts.subtitle);
  opts.duration = opts.duration ? opts.duration : 1000;
  opts.yAxis = assign({}, {
    data: [],
    showTitle: false,
    disabled: false,
    disableGrid: false,
    splitNumber: 5,
    gridType: 'solid',
    dashLength: 4 * opts.pixelRatio,
    gridColor: '#cccccc',
    padding: 10,
    fontColor: '#666666' },
  opts.yAxis);
  opts.yAxis.dashLength *= opts.pixelRatio;
  opts.yAxis.padding *= opts.pixelRatio;
  opts.xAxis = assign({}, {
    rotateLabel: false,
    type: 'calibration',
    gridType: 'solid',
    dashLength: 4,
    scrollAlign: 'left',
    boundaryGap: 'center',
    axisLine: true,
    axisLineColor: '#cccccc' },
  opts.xAxis);
  opts.xAxis.dashLength *= opts.pixelRatio;
  opts.legend = assign({}, {
    show: true,
    position: 'bottom',
    float: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    padding: 5,
    margin: 5,
    itemGap: 10,
    fontSize: opts.fontSize,
    lineHeight: opts.fontSize,
    fontColor: '#333333',
    format: {},
    hiddenColor: '#CECECE' },
  opts.legend);
  opts.legend.borderWidth = opts.legend.borderWidth * opts.pixelRatio;
  opts.legend.itemGap = opts.legend.itemGap * opts.pixelRatio;
  opts.legend.padding = opts.legend.padding * opts.pixelRatio;
  opts.legend.margin = opts.legend.margin * opts.pixelRatio;
  opts.extra = assign({}, opts.extra);
  opts.rotate = opts.rotate ? true : false;
  opts.animation = opts.animation ? true : false;
  opts.rotate = opts.rotate ? true : false;

  var config$$1 = JSON.parse(JSON.stringify(config));
  config$$1.colors = opts.colors ? opts.colors : config$$1.colors;
  config$$1.yAxisTitleWidth = opts.yAxis.disabled !== true && opts.yAxis.title ? config$$1.yAxisTitleWidth : 0;
  if (opts.type == 'pie' || opts.type == 'ring') {
    config$$1.pieChartLinePadding = opts.dataLabel === false ? 0 : opts.extra.pie.labelWidth * opts.pixelRatio || config$$1.pieChartLinePadding * opts.pixelRatio;
  }
  if (opts.type == 'rose') {
    config$$1.pieChartLinePadding = opts.dataLabel === false ? 0 : opts.extra.rose.labelWidth * opts.pixelRatio || config$$1.pieChartLinePadding * opts.pixelRatio;
  }
  config$$1.pieChartTextPadding = opts.dataLabel === false ? 0 : config$$1.pieChartTextPadding * opts.pixelRatio;
  config$$1.yAxisSplit = opts.yAxis.splitNumber ? opts.yAxis.splitNumber : config.yAxisSplit;

  //屏幕旋转
  config$$1.rotate = opts.rotate;
  if (opts.rotate) {
    var tempWidth = opts.width;
    var tempHeight = opts.height;
    opts.width = tempHeight;
    opts.height = tempWidth;
  }

  //适配高分屏
  opts.padding = opts.padding ? opts.padding : config$$1.padding;
  for (var i = 0; i < 4; i++) {
    opts.padding[i] *= opts.pixelRatio;
  }
  config$$1.yAxisWidth = config.yAxisWidth * opts.pixelRatio;
  config$$1.xAxisHeight = config.xAxisHeight * opts.pixelRatio;
  if (opts.enableScroll && opts.xAxis.scrollShow) {
    config$$1.xAxisHeight += 6 * opts.pixelRatio;
  }
  config$$1.xAxisLineHeight = config.xAxisLineHeight * opts.pixelRatio;
  config$$1.fontSize = opts.fontSize;
  config$$1.titleFontSize = config.titleFontSize * opts.pixelRatio;
  config$$1.subtitleFontSize = config.subtitleFontSize * opts.pixelRatio;
  config$$1.toolTipPadding = config.toolTipPadding * opts.pixelRatio;
  config$$1.toolTipLineHeight = config.toolTipLineHeight * opts.pixelRatio;
  config$$1.columePadding = config.columePadding * opts.pixelRatio;
  opts.$this = opts.$this ? opts.$this : this;

  this.context = uni.createCanvasContext(opts.canvasId, opts.$this);
  /* 兼容原生H5
                                                                     this.context = document.getElementById(opts.canvasId).getContext("2d");
                                                                     this.context.setStrokeStyle = function(e){ return this.strokeStyle=e; }
                                                                     this.context.setLineWidth = function(e){ return this.lineWidth=e; }
                                                                     this.context.setLineCap = function(e){ return this.lineCap=e; }
                                                                     this.context.setFontSize = function(e){ return this.font=e+"px sans-serif"; }
                                                                     this.context.setFillStyle = function(e){ return this.fillStyle=e; }
                                                                     this.context.draw = function(){ }
                                                                     */

  opts.chartData = {};
  this.event = new Event();
  this.scrollOption = {
    currentOffset: 0,
    startTouchX: 0,
    distance: 0,
    lastMoveTime: 0 };


  this.opts = opts;
  this.config = config$$1;

  drawCharts.call(this, opts.type, opts, config$$1, this.context);
};

Charts.prototype.updateData = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  this.opts = assign({}, this.opts, data);
  this.opts.updateData = true;
  var scrollPosition = data.scrollPosition || 'current';
  switch (scrollPosition) {
    case 'current':
      this.opts._scrollDistance_ = this.scrollOption.currentOffset;
      break;
    case 'left':
      this.opts._scrollDistance_ = 0;
      this.scrollOption = {
        currentOffset: 0,
        startTouchX: 0,
        distance: 0,
        lastMoveTime: 0 };

      break;
    case 'right':
      var _calYAxisData = calYAxisData(this.opts.series, this.opts, this.config),
      yAxisWidth = _calYAxisData.yAxisWidth;
      this.config.yAxisWidth = yAxisWidth;
      var offsetLeft = 0;
      var _getXAxisPoints0 = getXAxisPoints(this.opts.categories, this.opts, this.config),
      xAxisPoints = _getXAxisPoints0.xAxisPoints,
      startX = _getXAxisPoints0.startX,
      endX = _getXAxisPoints0.endX,
      eachSpacing = _getXAxisPoints0.eachSpacing;
      var totalWidth = eachSpacing * (xAxisPoints.length - 1);
      var screenWidth = endX - startX;
      offsetLeft = screenWidth - totalWidth;
      this.scrollOption = {
        currentOffset: offsetLeft,
        startTouchX: offsetLeft,
        distance: 0,
        lastMoveTime: 0 };

      this.opts._scrollDistance_ = offsetLeft;
      break;}

  drawCharts.call(this, this.opts.type, this.opts, this.config, this.context);
};

Charts.prototype.zoom = function () {
  var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.opts.xAxis.itemCount;
  if (this.opts.enableScroll !== true) {
    console.log('请启用滚动条后使用！');
    return;
  }
  //当前屏幕中间点
  var centerPoint = Math.round(Math.abs(this.scrollOption.currentOffset) / this.opts.chartData.eachSpacing) + Math.round(
  this.opts.xAxis.itemCount / 2);
  this.opts.animation = false;
  this.opts.xAxis.itemCount = val.itemCount;
  //重新计算x轴偏移距离
  var _calYAxisData = calYAxisData(this.opts.series, this.opts, this.config),
  yAxisWidth = _calYAxisData.yAxisWidth;
  this.config.yAxisWidth = yAxisWidth;
  var offsetLeft = 0;
  var _getXAxisPoints0 = getXAxisPoints(this.opts.categories, this.opts, this.config),
  xAxisPoints = _getXAxisPoints0.xAxisPoints,
  startX = _getXAxisPoints0.startX,
  endX = _getXAxisPoints0.endX,
  eachSpacing = _getXAxisPoints0.eachSpacing;
  var centerLeft = eachSpacing * centerPoint;
  var screenWidth = endX - startX;
  var MaxLeft = screenWidth - eachSpacing * (xAxisPoints.length - 1);
  offsetLeft = screenWidth / 2 - centerLeft;
  if (offsetLeft > 0) {
    offsetLeft = 0;
  }
  if (offsetLeft < MaxLeft) {
    offsetLeft = MaxLeft;
  }
  this.scrollOption = {
    currentOffset: offsetLeft,
    startTouchX: offsetLeft,
    distance: 0,
    lastMoveTime: 0 };

  this.opts._scrollDistance_ = offsetLeft;
  drawCharts.call(this, this.opts.type, this.opts, this.config, this.context);
};

Charts.prototype.stopAnimation = function () {
  this.animationInstance && this.animationInstance.stop();
};

Charts.prototype.addEventListener = function (type, listener) {
  this.event.addEventListener(type, listener);
};

Charts.prototype.getCurrentDataIndex = function (e) {
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches) {
    var _touches$ = getTouches(touches, this.opts, e);
    if (this.opts.type === 'pie' || this.opts.type === 'ring' || this.opts.type === 'rose') {
      return findPieChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.pieData);
    } else if (this.opts.type === 'radar') {
      return findRadarChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.radarData, this.opts.categories.length);
    } else if (this.opts.type === 'funnel') {
      return findFunnelChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.funnelData);
    } else if (this.opts.type === 'map') {
      return findMapChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts);
    } else if (this.opts.type === 'word') {
      return findWordChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.wordCloudData);
    } else {
      return findCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.calPoints, this.opts, this.config, Math.abs(this.scrollOption.currentOffset));
    }
  }
  return -1;
};

Charts.prototype.getLegendDataIndex = function (e) {
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches) {
    var _touches$ = getTouches(touches, this.opts, e);
    return findLegendIndex({
      x: _touches$.x,
      y: _touches$.y },
    this.opts.chartData.legendData);
  }
  return -1;
};

Charts.prototype.touchLegend = function (e) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches) {
    var _touches$ = getTouches(touches, this.opts, e);
    var index = this.getLegendDataIndex(e);
    if (index >= 0) {
      this.opts.series[index].show = !this.opts.series[index].show;
      this.opts.animation = option.animation ? true : false;
      this.opts._scrollDistance_ = this.scrollOption.currentOffset;
      drawCharts.call(this, this.opts.type, this.opts, this.config, this.context);
    }
  }

};

Charts.prototype.showToolTip = function (e) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (!touches) {
    console.log("touchError");
  }
  var _touches$ = getTouches(touches, this.opts, e);
  var currentOffset = this.scrollOption.currentOffset;
  var opts = assign({}, this.opts, {
    _scrollDistance_: currentOffset,
    animation: false });

  if (this.opts.type === 'line' || this.opts.type === 'area' || this.opts.type === 'column') {
    var index = this.getCurrentDataIndex(e);
    if (index > -1) {
      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var _getToolTipData = getToolTipData(seriesData, this.opts.chartData.calPoints, index, this.opts.categories, option),
        textList = _getToolTipData.textList,
        offset = _getToolTipData.offset;
        offset.y = _touches$.y;
        opts.tooltip = {
          textList: textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'mix') {
    var index = this.getCurrentDataIndex(e);
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var _getMixToolTipData = getMixToolTipData(seriesData, this.opts.chartData.calPoints, index, this.opts.categories, option),
        textList = _getMixToolTipData.textList,
        offset = _getMixToolTipData.offset;
        offset.y = _touches$.y;
        opts.tooltip = {
          textList: textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'candle') {
    var index = this.getCurrentDataIndex(e);
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var _getToolTipData = getCandleToolTipData(this.opts.series[0].data, seriesData, this.opts.chartData.calPoints,
        index, this.opts.categories, this.opts.extra.candle, option),
        textList = _getToolTipData.textList,
        offset = _getToolTipData.offset;
        offset.y = _touches$.y;
        opts.tooltip = {
          textList: textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'pie' || this.opts.type === 'ring' || this.opts.type === 'rose' || this.opts.type === 'funnel') {
    var index = this.getCurrentDataIndex(e);
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = this.opts._series_[index];
      var textList = [{
        text: option.format ? option.format(seriesData) : seriesData.name + ': ' + seriesData.data,
        color: seriesData.color }];

      var offset = {
        x: _touches$.x,
        y: _touches$.y };

      opts.tooltip = {
        textList: textList,
        offset: offset,
        option: option,
        index: index };

    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'map' || this.opts.type === 'word') {
    var index = this.getCurrentDataIndex(e);
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = this.opts._series_[index];
      var textList = [{
        text: option.format ? option.format(seriesData) : seriesData.properties.name,
        color: seriesData.color }];

      var offset = {
        x: _touches$.x,
        y: _touches$.y };

      opts.tooltip = {
        textList: textList,
        offset: offset,
        option: option,
        index: index };

    }
    opts.updateData = false;
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'radar') {
    var index = this.getCurrentDataIndex(e);
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var textList = seriesData.map(function (item) {
          return {
            text: option.format ? option.format(item) : item.name + ': ' + item.data,
            color: item.color };

        });
        var offset = {
          x: _touches$.x,
          y: _touches$.y };

        opts.tooltip = {
          textList: textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
};

Charts.prototype.translate = function (distance) {
  this.scrollOption = {
    currentOffset: distance,
    startTouchX: distance,
    distance: 0,
    lastMoveTime: 0 };

  var opts = assign({}, this.opts, {
    _scrollDistance_: distance,
    animation: false });

  drawCharts.call(this, this.opts.type, opts, this.config, this.context);
};

Charts.prototype.scrollStart = function (e) {
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  var _touches$ = getTouches(touches, this.opts, e);
  if (touches && this.opts.enableScroll === true) {
    this.scrollOption.startTouchX = _touches$.x;
  }
};

Charts.prototype.scroll = function (e) {
  if (this.scrollOption.lastMoveTime === 0) {
    this.scrollOption.lastMoveTime = Date.now();
  }
  var Limit = this.opts.extra.touchMoveLimit || 20;
  var currMoveTime = Date.now();
  var duration = currMoveTime - this.scrollOption.lastMoveTime;
  if (duration < Math.floor(1000 / Limit)) return;
  this.scrollOption.lastMoveTime = currMoveTime;
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches && this.opts.enableScroll === true) {
    var _touches$ = getTouches(touches, this.opts, e);
    var _distance;
    _distance = _touches$.x - this.scrollOption.startTouchX;
    var currentOffset = this.scrollOption.currentOffset;
    var validDistance = calValidDistance(this, currentOffset + _distance, this.opts.chartData, this.config, this.opts);
    this.scrollOption.distance = _distance = validDistance - currentOffset;
    var opts = assign({}, this.opts, {
      _scrollDistance_: currentOffset + _distance,
      animation: false });

    drawCharts.call(this, opts.type, opts, this.config, this.context);
    return currentOffset + _distance;
  }
};

Charts.prototype.scrollEnd = function (e) {
  if (this.opts.enableScroll === true) {
    var _scrollOption = this.scrollOption,
    currentOffset = _scrollOption.currentOffset,
    distance = _scrollOption.distance;
    this.scrollOption.currentOffset = currentOffset + distance;
    this.scrollOption.distance = 0;
  }
};
if ( true && typeof module.exports === "object") {
  module.exports = Charts;
  //export default Charts;//建议使用nodejs的module导出方式，如报错请使用export方式导出
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 694:
/*!**************************************!*\
  !*** E:/MB/mb-yun/common/checker.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports = {
  error: '',
  isJSON: function isJSON(str) {
    if (typeof str == 'string') {
      try {
        var obj = JSON.parse(str);
        if (typeof obj == 'object' && obj) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        console.log('error：' + str + '!!!' + e);
        return false;
      }
    }
  },
  isNumber: function isNumber(checkVal) {
    var reg = /^-?[1-9][0-9]?.?[0-9]*$/;
    return reg.test(checkVal);
  } };

/***/ }),

/***/ 70:
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 71);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 71:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ 72:
/*!***********************************************!*\
  !*** E:/MB/mb-yun/static/mbcJs/focusStore.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.focusStore = focusStore;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 69));var _api = __webpack_require__(/*! @/static/mbcJs/api */ 45);





var _landRegistra = __webpack_require__(/*! @/static/mbcJs/landRegistra */ 56);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}console.log(_api.api1, _api.api2, _api.api3);
var api2Url = _api.api2;
var returnValue = {
  success: false, // 接口返回状态
  data: null, // 接口返回值
  type: null // 调取的类型
};
var params = null; // 接口参数
function focusStoreCount(way, paramsUrl, paramsUrl2, paramsJSH) {
  // way:方法，get post
  // paramsUrl: 接口地址
  // paramsJSH： 参数
  console.log(way, paramsUrl, paramsUrl2, paramsJSH);
  return new Promise(function (resolve) {
    // uni.showLoading({
    // 	// 展示loading
    // 	title: '加载中'
    // });
    if (!uni.getStorageSync('landRegist')) {
      (0, _landRegistra.landRegistra)(); // 判断登录状态
    }
    if (uni.getStorageSync('landRegist')) {
      var landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
      console.log(landRegistLG.user.id);
      uni.request({
        url: api2Url + paramsUrl, //接口地址。
        data: paramsJSH,
        method: way,
        header: {
          Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
        },
        success: function success(response) {
          console.log(response.data, '---------------response.data--------------');
          // uni.hideLoading(); // 隐藏 loading
          if (response.data.ret === '200') {
            returnValue.success = true;
            resolve(returnValue);
          } else if (response.data.ret === '202') {
            console.log('202');
            uni.removeStorageSync('landRegist');
            uni.removeStorageSync('clickItems');
            uni.showToast({
              title: '登录已过期，请重新登录',
              icon: 'none',
              duration: 1000 });

            if (!uni.getStorageSync('landRegist')) {
              (0, _landRegistra.landRegistra)(); // 判断登录状态
            }
          } else if (response.data.ret === '400') {
            uni.request({
              url: api2Url + paramsUrl2, //接口地址。
              data: paramsJSH,
              method: way,
              header: {
                Authorization: "Bearer " + landRegistLG.token //将token放到请求头中
              },
              success: function success(response) {
                console.log(response.data, '---------------response.data--------------');
                // uni.hideLoading(); // 隐藏 loading
                if (response.data.ret === '200') {
                  returnValue.success = false;
                  resolve(returnValue);
                } else if (response.data.ret === '202') {
                  console.log('202');
                  uni.removeStorageSync('landRegist');
                  uni.removeStorageSync('clickItems');
                  uni.showToast({
                    title: '登录已过期，请重新登录',
                    icon: 'none',
                    duration: 1000 });

                  if (!uni.getStorageSync('landRegist')) {
                    (0, _landRegistra.landRegistra)(); // 判断登录状态
                  }
                } else if (response.data.ret === '400') {
                  uni.showToast({
                    title: response.data.msg,
                    icon: 'none',
                    duration: 1000 });

                };
                returnValue.data = response.data;
                returnValue.type = paramsJSH.type;
                console.log(returnValue, '成功数据返回');
              },
              fail: function fail(error) {
                // uni.hideLoading(); // 隐藏 loading
                returnValue.data = 0;
                returnValue.type = paramsJSH.type;
                uni.showToast({
                  title: '网络繁忙，请稍后',
                  icon: 'none',
                  duration: 1000 });

                console.log(error, '网络繁忙，请稍后');
                console.log(returnValue, '失败数据返回');
                resolve(returnValue);
              } });

          };
          returnValue.data = response.data;
          returnValue.type = paramsJSH.type;
          console.log(returnValue, '成功数据返回');
        },
        fail: function fail(error) {
          // uni.hideLoading(); // 隐藏 loading
          returnValue.success = false;
          returnValue.data = 0;
          returnValue.type = paramsJSH.type;
          uni.showToast({
            title: '网络繁忙，请稍后',
            icon: 'none',
            duration: 1000 });

          console.log(error, '网络繁忙，请稍后');
          console.log(returnValue, '失败数据返回');
          resolve(returnValue);
        } });

    }
  });
}function

focusStore(_x) {return _focusStore.apply(this, arguments);}function _focusStore() {_focusStore = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(CYDparams) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
            params = CYDparams;_context.next = 3;return (
              focusStoreCount('GET', '/rest-rp/follow/user', '/rest-rp/follow/cancelUser', params));case 3:return _context.abrupt("return", _context.sent);case 4:case "end":return _context.stop();}}}, _callee, this);}));return _focusStore.apply(this, arguments);}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 73:
/*!****************************************************************!*\
  !*** E:/MB/mb-yun/static/mbcJs/shareEachPage/shareEachPage.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.shareEachPage = shareEachPage;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 69));var _api = __webpack_require__(/*! @/static/mbcJs/api */ 45);
var _browserType = __webpack_require__(/*! @/static/mbcJs/browserType */ 52);
var _shareSdkConfig = __webpack_require__(/*! ./H5Share/shareSdkConfig */ 74);
var _shareH5params = __webpack_require__(/*! ./H5Share/shareH5params */ 75);
var _platformAccount = __webpack_require__(/*! @/static/mbcJs/platformAccount */ 68);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}
// import {wxJSDK} from '@/static/mbcJs/wxJSDK';
// console.log(wxJSDK, 'wxJSDK');
console.log(_api.api1, _api.api2, _api.api3);
console.log(_browserType.isWeiXin);
// var origin = location.origin;
// H5分享
function H5Share(_x, _x2, _x3, _x4, _x5, _x6) {return _H5Share.apply(this, arguments);}















































































































// 小程序分享
function _H5Share() {_H5Share = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(defaultParams, customParams, needCount, needCountParams, isFlow, routeParam) {var jweixin, sdkConfig;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0: // defaultParams 默认分享参数
            // CustomParams 自定义分享参数
            console.log('H5分享！');console.log(uni.getStorageSync('getSystemInfo').platform);jweixin = __webpack_require__(/*! jweixin-module */ 76);_context.next = 5;return (0, _shareSdkConfig.shareSdkConfig)();case 5:sdkConfig = _context.sent;console.log(sdkConfig, 'sdkConfig');jweixin.config({ debug: false, appId: sdkConfig.appId, timestamp: sdkConfig.timestamp, nonceStr: sdkConfig.nonceStr, signature: sdkConfig.signature, jsApiList: ['onMenuShareAppMessage', // 获取“分享给朋友”按钮点击状态及自定义分享内容接口
              'onMenuShareTimeline' // 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
              ] });console.log(sdkConfig, 'jweixin.config');jweixin.ready(function () {console.log('jweixin.ready'); // alert('jweixin.ready');
              if (customParams) {// alert('分享详情!');
                //分享给朋友接口
                jweixin.onMenuShareAppMessage({ title: customParams.shareTitle, desc: customParams.shareIntro, link: customParams.shareLink, imgUrl: customParams.shareImg, success: function success(res) {//用户点击分享后的回调，这里可以进行统计 
                    if (needCount && needCount === 1) {console.log('这里转发需要计数');console.log(needCountParams, '计数参数');(0, _platformAccount.platformAccount)(isFlow, 1, needCountParams, routeParam).then(function (res) {console.log(res);}).catch(function (err) {console.log(err);});}}, cancel: function cancel(res) {} }); //分享到朋友圈接口  
                jweixin.onMenuShareTimeline({ title: customParams.shareTitle, link: customParams.shareLink, imgUrl: customParams.shareImg, success: function success(res) {//用户点击分享后的回调，这里可以进行统计 
                    if (needCount && needCount === 1) {console.log('这里转发需要计数');console.log(needCountParams, '计数参数');(0, _platformAccount.platformAccount)(isFlow, 1, needCountParams, routeParam).then(function (res) {console.log(res);}).catch(function (err) {console.log(err);});}}, cancel: function cancel(res) {} });} else {// alert('分享平台!');
                //分享给朋友接口
                jweixin.onMenuShareAppMessage({ title: defaultParams.shareTitle, desc: defaultParams.shareIntro, link: defaultParams.shareLink, imgUrl: defaultParams.shareImg, success: function success(res) {//用户点击分享后的回调，这里可以进行统计 
                    if (needCount && needCount === 1) {console.log('这里转发需要计数');console.log(needCountParams, '计数参数');(0, _platformAccount.platformAccount)(isFlow, 1, needCountParams, null).then(function (res) {console.log(res);}).catch(function (err) {console.log(err);});}}, cancel: function cancel(res) {} }); //分享到朋友圈接口  
                jweixin.onMenuShareTimeline({ title: defaultParams.shareTitle, link: defaultParams.shareLink, imgUrl: defaultParams.shareImg, success: function success(res) {//用户点击分享后的回调，这里可以进行统计 
                    if (needCount && needCount === 1) {console.log('这里转发需要计数');console.log(needCountParams, '计数参数');(0, _platformAccount.platformAccount)(isFlow, 1, needCountParams, null).then(function (res) {console.log(res);}).catch(function (err) {console.log(err);});}}, cancel: function cancel(res) {} });};});case 10:case "end":return _context.stop();}}}, _callee, this);}));return _H5Share.apply(this, arguments);}function MPShare() {console.log('小程序分享！');}function shareEachPage(customSharParams, needCount, needCountParams, isFlow, routeParam) {// CustomSharParams 自定义分享参数
  console.log(customSharParams, needCount, needCountParams, isFlow, routeParam, '分享需要的参数！');console.log('分享');console.log('进入小程序分享');MPShare();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 74:
/*!*************************************************************************!*\
  !*** E:/MB/mb-yun/static/mbcJs/shareEachPage/H5Share/shareSdkConfig.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.shareSdkConfig = shareSdkConfig;var _api = __webpack_require__(/*! @/static/mbcJs/api */ 45);

var _landRegistra = __webpack_require__(/*! @/static/mbcJs/landRegistra */ 56);console.log(_api.api1, _api.api2, _api.api3);
function resetUrl(url) {
  var A = 'from=singlemessage&isappinstalled=0'; // 分享给朋友自动添加的
  var B = 'from=timeline&isappinstalled=0'; // 分享给朋友圈自动添加的
  var C = 'groupmessage&isappinstalled=0'; // 分享给微信群自动添加的
  if (url.indexOf(A) !== -1) {
    return url.split(A)[0] + encodeURIComponent(A);
  } else if (url.indexOf(B) !== -1) {
    return url.split(B)[0] + encodeURIComponent(B);
  } else if (url.indexOf(C) !== -1) {
    return url.split(C)[0] + encodeURIComponent(C);
  } else {
    return url;
  }
};
function shareSdkConfig() {
  // let resetUrls = resetUrl(window.location.href);
  var urlParams = window.location.href.split("#")[0];
  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (isAndroid === true) {
    // alert('安卓027:' + urlParams);
  } else {
      // urlParams =  uni.getStorageSync('shareConfigUrl');
      // alert('ios:027' + urlParams);
    }
  urlParams = urlParams.replace(/\&/g, '%26');
  var params = {
    url: urlParams };
  // 请求总数居时 参数为空
  return new Promise(function (resolve) {
    uni.showLoading({
      // 展示loading
      title: '加载中' });

    uni.request({
      url: _api.api2 + '/rest-rp/wechat/portal/createJsapiSignature', //接口地址。
      data: params,
      method: 'POST',
      header: {
        Authorization: 'Bearer ' //将token放到请求头中
      },
      success: function success(response) {
        console.log(response.data, '---------------response.data--------------');
        if (response.data.ret === '200') {
          uni.hideLoading(); // 隐藏 loading
          console.log('分享SDK配置');
          resolve(response.data.content);
        } else {
          uni.hideLoading(); // 隐藏 loading
          uni.showToast({
            title: '网络开小差了，请稍后重试',
            icon: 'none',
            duration: 1000 });

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

  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 75:
/*!************************************************************************!*\
  !*** E:/MB/mb-yun/static/mbcJs/shareEachPage/H5Share/shareH5params.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.shareH5params = void 0; // var origin = location.origin;
var shareH5params = {
  shareTitle: '陌拜', // 分享标题
  shareIntro: '陌拜一下，每天都有新商机', // 分享文字介绍
  shareImg: 'https://style.iambuyer.com/img/shareimg.png', // 分享图片
  shareLink: 'http://so.iambuyer.com' // 分享链接
};exports.shareH5params = shareH5params;

/***/ }),

/***/ 76:
/*!*************************************************************!*\
  !*** E:/MB/mb-yun/node_modules/jweixin-module/out/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}!function (e, n) { true ? module.exports = n(e) : undefined;}(window, function (o, e) {function c(n, e, i) {o.WeixinJSBridge ? WeixinJSBridge.invoke(n, r(e), function (e) {a(n, e, i);}) : d(n, i);}function i(n, i, t) {o.WeixinJSBridge ? WeixinJSBridge.on(n, function (e) {t && t.trigger && t.trigger(e), a(n, e, i);}) : d(n, t || i);}function r(e) {return (e = e || {}).appId = M.appId, e.verifyAppId = M.appId, e.verifySignType = "sha1", e.verifyTimestamp = M.timestamp + "", e.verifyNonceStr = M.nonceStr, e.verifySignature = M.signature, e;}function n(e) {return { timeStamp: e.timestamp + "", nonceStr: e.nonceStr, package: e.package, paySign: e.paySign, signType: e.signType || "SHA1" };}function a(e, n, i) {"openEnterpriseChat" == e && (n.errCode = n.err_code), delete n.err_code, delete n.err_desc, delete n.err_detail;var t = n.errMsg;t || (t = n.err_msg, delete n.err_msg, t = function (e, n) {var i = e,t = f[i];t && (i = t);var o = "ok";if (n) {var r = n.indexOf(":");"confirm" == (o = n.substring(r + 1)) && (o = "ok"), "failed" == o && (o = "fail"), -1 != o.indexOf("failed_") && (o = o.substring(7)), -1 != o.indexOf("fail_") && (o = o.substring(5)), "access denied" != (o = (o = o.replace(/_/g, " ")).toLowerCase()) && "no permission to execute" != o || (o = "permission denied"), "config" == i && "function not exist" == o && (o = "ok"), "" == o && (o = "fail");}return n = i + ":" + o;}(e, t), n.errMsg = t), (i = i || {})._complete && (i._complete(n), delete i._complete), t = n.errMsg || "", M.debug && !i.isInnerInvoke && alert(JSON.stringify(n));var o = t.indexOf(":");switch (t.substring(o + 1)) {case "ok":i.success && i.success(n);break;case "cancel":i.cancel && i.cancel(n);break;default:i.fail && i.fail(n);}i.complete && i.complete(n);}function s(e) {if (e) {for (var n = 0, i = e.length; n < i; ++n) {var t = e[n],o = p[t];o && (e[n] = o);}return e;}}function d(e, n) {if (!(!M.debug || n && n.isInnerInvoke)) {var i = f[e];i && (e = i), n && n._complete && delete n._complete, console.log('"' + e + '",', n || "");}}function l() {return new Date().getTime();}function u(e) {I && (o.WeixinJSBridge ? e() : t.addEventListener && t.addEventListener("WeixinJSBridgeReady", e, !1));}if (!o.jWeixin) {var _C;var p = { config: "preVerifyJSAPI", onMenuShareTimeline: "menu:share:timeline", onMenuShareAppMessage: "menu:share:appmessage", onMenuShareQQ: "menu:share:qq", onMenuShareWeibo: "menu:share:weiboApp", onMenuShareQZone: "menu:share:QZone", previewImage: "imagePreview", getLocation: "geoLocation", openProductSpecificView: "openProductViewWithPid", addCard: "batchAddCard", openCard: "batchViewCard", chooseWXPay: "getBrandWCPayRequest", openEnterpriseRedPacket: "getRecevieBizHongBaoRequest", startSearchBeacons: "startMonitoringBeacons", stopSearchBeacons: "stopMonitoringBeacons", onSearchBeacons: "onBeaconsInRange", consumeAndShareCard: "consumedShareCard", openAddress: "editAddress" },f = function () {var e = {};for (var n in p) {e[p[n]] = n;}return e;}(),t = o.document,m = t.title,g = navigator.userAgent.toLowerCase(),h = navigator.platform.toLowerCase(),v = !(!h.match("mac") && !h.match("win")),S = -1 != g.indexOf("wxdebugger"),I = -1 != g.indexOf("micromessenger"),y = -1 != g.indexOf("android"),_ = -1 != g.indexOf("iphone") || -1 != g.indexOf("ipad"),w = (O = g.match(/micromessenger\/(\d+\.\d+\.\d+)/) || g.match(/micromessenger\/(\d+\.\d+)/)) ? O[1] : "",k = { initStartTime: l(), initEndTime: 0, preVerifyStartTime: 0, preVerifyEndTime: 0 },T = { version: 1, appId: "", initTime: 0, preVerifyTime: 0, networkType: "", isPreVerifyOk: 1, systemType: _ ? 1 : y ? 2 : -1, clientVersion: w, url: encodeURIComponent(location.href) },M = {},P = { _completes: [] },x = { state: 0, data: {} };u(function () {k.initEndTime = l();});var A = !1,V = [],C = (_C = { config: function config(e) {d("config", M = e);var t = !1 !== M.check;u(function () {if (t) c(p.config, { verifyJsApiList: s(M.jsApiList) }, function () {P._complete = function (e) {k.preVerifyEndTime = l(), x.state = 1, x.data = e;}, P.success = function (e) {T.isPreVerifyOk = 0;}, P.fail = function (e) {P._fail ? P._fail(e) : x.state = -1;};var t = P._completes;return t.push(function () {!function (e) {if (!(v || S || M.debug || w < "6.0.2" || T.systemType < 0)) {var i = new Image();T.appId = M.appId, T.initTime = k.initEndTime - k.initStartTime, T.preVerifyTime = k.preVerifyEndTime - k.preVerifyStartTime, C.getNetworkType({ isInnerInvoke: !0, success: function success(e) {T.networkType = e.networkType;var n = "https://open.weixin.qq.com/sdk/report?v=" + T.version + "&o=" + T.isPreVerifyOk + "&s=" + T.systemType + "&c=" + T.clientVersion + "&a=" + T.appId + "&n=" + T.networkType + "&i=" + T.initTime + "&p=" + T.preVerifyTime + "&u=" + T.url;i.src = n;} });}}();}), P.complete = function (e) {for (var n = 0, i = t.length; n < i; ++n) {t[n]();}P._completes = [];}, P;}()), k.preVerifyStartTime = l();else {x.state = 1;for (var e = P._completes, n = 0, i = e.length; n < i; ++n) {e[n]();}P._completes = [];}}), C.invoke || (C.invoke = function (e, n, i) {o.WeixinJSBridge && WeixinJSBridge.invoke(e, r(n), i);}, C.on = function (e, n) {o.WeixinJSBridge && WeixinJSBridge.on(e, n);});}, ready: function ready(e) {0 != x.state ? e() : (P._completes.push(e), !I && M.debug && e());}, error: function error(e) {w < "6.0.2" || (-1 == x.state ? e(x.data) : P._fail = e);}, checkJsApi: function checkJsApi(e) {c("checkJsApi", { jsApiList: s(e.jsApiList) }, (e._complete = function (e) {if (y) {var n = e.checkResult;n && (e.checkResult = JSON.parse(n));}e = function (e) {var n = e.checkResult;for (var i in n) {var t = f[i];t && (n[t] = n[i], delete n[i]);}return e;}(e);}, e));}, onMenuShareTimeline: function onMenuShareTimeline(e) {i(p.onMenuShareTimeline, { complete: function complete() {c("shareTimeline", { title: e.title || m, desc: e.title || m, img_url: e.imgUrl || "", link: e.link || location.href, type: e.type || "link", data_url: e.dataUrl || "" }, e);} }, e);}, onMenuShareAppMessage: function onMenuShareAppMessage(n) {i(p.onMenuShareAppMessage, { complete: function complete(e) {"favorite" === e.scene ? c("sendAppMessage", { title: n.title || m, desc: n.desc || "", link: n.link || location.href, img_url: n.imgUrl || "", type: n.type || "link", data_url: n.dataUrl || "" }) : c("sendAppMessage", { title: n.title || m, desc: n.desc || "", link: n.link || location.href, img_url: n.imgUrl || "", type: n.type || "link", data_url: n.dataUrl || "" }, n);} }, n);}, onMenuShareQQ: function onMenuShareQQ(e) {i(p.onMenuShareQQ, { complete: function complete() {c("shareQQ", { title: e.title || m, desc: e.desc || "", img_url: e.imgUrl || "", link: e.link || location.href }, e);} }, e);}, onMenuShareWeibo: function onMenuShareWeibo(e) {i(p.onMenuShareWeibo, { complete: function complete() {c("shareWeiboApp", { title: e.title || m, desc: e.desc || "", img_url: e.imgUrl || "", link: e.link || location.href }, e);} }, e);}, onMenuShareQZone: function onMenuShareQZone(e) {i(p.onMenuShareQZone, { complete: function complete() {c("shareQZone", { title: e.title || m, desc: e.desc || "", img_url: e.imgUrl || "", link: e.link || location.href }, e);} }, e);}, updateTimelineShareData: function updateTimelineShareData(e) {c("updateTimelineShareData", { title: e.title, link: e.link, imgUrl: e.imgUrl }, e);}, updateAppMessageShareData: function updateAppMessageShareData(e) {c("updateAppMessageShareData", { title: e.title, desc: e.desc, link: e.link, imgUrl: e.imgUrl }, e);}, startRecord: function startRecord(e) {c("startRecord", {}, e);}, stopRecord: function stopRecord(e) {c("stopRecord", {}, e);}, onVoiceRecordEnd: function onVoiceRecordEnd(e) {i("onVoiceRecordEnd", e);}, playVoice: function playVoice(e) {c("playVoice", { localId: e.localId }, e);}, pauseVoice: function pauseVoice(e) {c("pauseVoice", { localId: e.localId }, e);}, stopVoice: function stopVoice(e) {c("stopVoice", { localId: e.localId }, e);}, onVoicePlayEnd: function onVoicePlayEnd(e) {i("onVoicePlayEnd", e);}, uploadVoice: function uploadVoice(e) {c("uploadVoice", { localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1 }, e);}, downloadVoice: function downloadVoice(e) {c("downloadVoice", { serverId: e.serverId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1 }, e);}, translateVoice: function translateVoice(e) {c("translateVoice", { localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1 }, e);}, chooseImage: function chooseImage(e) {c("chooseImage", { scene: "1|2", count: e.count || 9, sizeType: e.sizeType || ["original", "compressed"], sourceType: e.sourceType || ["album", "camera"] }, (e._complete = function (e) {if (y) {var n = e.localIds;try {n && (e.localIds = JSON.parse(n));} catch (e) {}}}, e));}, getLocation: function getLocation(e) {}, previewImage: function previewImage(e) {c(p.previewImage, { current: e.current, urls: e.urls }, e);}, uploadImage: function uploadImage(e) {c("uploadImage", { localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1 }, e);}, downloadImage: function downloadImage(e) {c("downloadImage", { serverId: e.serverId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1 }, e);}, getLocalImgData: function getLocalImgData(e) {!1 === A ? (A = !0, c("getLocalImgData", { localId: e.localId }, (e._complete = function (e) {if (A = !1, 0 < V.length) {var n = V.shift();wx.getLocalImgData(n);}}, e))) : V.push(e);}, getNetworkType: function getNetworkType(e) {c("getNetworkType", {}, (e._complete = function (e) {e = function (e) {var n = e.errMsg;e.errMsg = "getNetworkType:ok";var i = e.subtype;if (delete e.subtype, i) e.networkType = i;else {var t = n.indexOf(":"),o = n.substring(t + 1);switch (o) {case "wifi":case "edge":case "wwan":e.networkType = o;break;default:e.errMsg = "getNetworkType:fail";}}return e;}(e);}, e));}, openLocation: function openLocation(e) {c("openLocation", { latitude: e.latitude, longitude: e.longitude, name: e.name || "", address: e.address || "", scale: e.scale || 28, infoUrl: e.infoUrl || "" }, e);} }, _defineProperty(_C, "getLocation", function getLocation(e) {c(p.getLocation, { type: (e = e || {}).type || "wgs84" }, (e._complete = function (e) {delete e.type;}, e));}), _defineProperty(_C, "hideOptionMenu", function hideOptionMenu(e) {c("hideOptionMenu", {}, e);}), _defineProperty(_C, "showOptionMenu", function showOptionMenu(e) {c("showOptionMenu", {}, e);}), _defineProperty(_C, "closeWindow", function closeWindow(e) {c("closeWindow", {}, e = e || {});}), _defineProperty(_C, "hideMenuItems", function hideMenuItems(e) {c("hideMenuItems", { menuList: e.menuList }, e);}), _defineProperty(_C, "showMenuItems", function showMenuItems(e) {c("showMenuItems", { menuList: e.menuList }, e);}), _defineProperty(_C, "hideAllNonBaseMenuItem", function hideAllNonBaseMenuItem(e) {c("hideAllNonBaseMenuItem", {}, e);}), _defineProperty(_C, "showAllNonBaseMenuItem", function showAllNonBaseMenuItem(e) {c("showAllNonBaseMenuItem", {}, e);}), _defineProperty(_C, "scanQRCode", function scanQRCode(e) {c("scanQRCode", { needResult: (e = e || {}).needResult || 0, scanType: e.scanType || ["qrCode", "barCode"] }, (e._complete = function (e) {if (_) {var n = e.resultStr;if (n) {var i = JSON.parse(n);e.resultStr = i && i.scan_code && i.scan_code.scan_result;}}}, e));}), _defineProperty(_C, "openAddress", function openAddress(e) {c(p.openAddress, {}, (e._complete = function (e) {var n;(n = e).postalCode = n.addressPostalCode, delete n.addressPostalCode, n.provinceName = n.proviceFirstStageName, delete n.proviceFirstStageName, n.cityName = n.addressCitySecondStageName, delete n.addressCitySecondStageName, n.countryName = n.addressCountiesThirdStageName, delete n.addressCountiesThirdStageName, n.detailInfo = n.addressDetailInfo, delete n.addressDetailInfo, e = n;}, e));}), _defineProperty(_C, "openProductSpecificView", function openProductSpecificView(e) {c(p.openProductSpecificView, { pid: e.productId, view_type: e.viewType || 0, ext_info: e.extInfo }, e);}), _defineProperty(_C, "addCard", function addCard(e) {for (var n = e.cardList, i = [], t = 0, o = n.length; t < o; ++t) {var r = n[t],a = { card_id: r.cardId, card_ext: r.cardExt };i.push(a);}c(p.addCard, { card_list: i }, (e._complete = function (e) {var n = e.card_list;if (n) {for (var i = 0, t = (n = JSON.parse(n)).length; i < t; ++i) {var o = n[i];o.cardId = o.card_id, o.cardExt = o.card_ext, o.isSuccess = !!o.is_succ, delete o.card_id, delete o.card_ext, delete o.is_succ;}e.cardList = n, delete e.card_list;}}, e));}), _defineProperty(_C, "chooseCard", function chooseCard(e) {c("chooseCard", { app_id: M.appId, location_id: e.shopId || "", sign_type: e.signType || "SHA1", card_id: e.cardId || "", card_type: e.cardType || "", card_sign: e.cardSign, time_stamp: e.timestamp + "", nonce_str: e.nonceStr }, (e._complete = function (e) {e.cardList = e.choose_card_info, delete e.choose_card_info;}, e));}), _defineProperty(_C, "openCard", function openCard(e) {for (var n = e.cardList, i = [], t = 0, o = n.length; t < o; ++t) {var r = n[t],a = { card_id: r.cardId, code: r.code };i.push(a);}c(p.openCard, { card_list: i }, e);}), _defineProperty(_C, "consumeAndShareCard", function consumeAndShareCard(e) {c(p.consumeAndShareCard, { consumedCardId: e.cardId, consumedCode: e.code }, e);}), _defineProperty(_C, "chooseWXPay", function chooseWXPay(e) {c(p.chooseWXPay, n(e), e);}), _defineProperty(_C, "openEnterpriseRedPacket", function openEnterpriseRedPacket(e) {c(p.openEnterpriseRedPacket, n(e), e);}), _defineProperty(_C, "startSearchBeacons", function startSearchBeacons(e) {c(p.startSearchBeacons, { ticket: e.ticket }, e);}), _defineProperty(_C, "stopSearchBeacons", function stopSearchBeacons(e) {c(p.stopSearchBeacons, {}, e);}), _defineProperty(_C, "onSearchBeacons", function onSearchBeacons(e) {i(p.onSearchBeacons, e);}), _defineProperty(_C, "openEnterpriseChat", function openEnterpriseChat(e) {c("openEnterpriseChat", { useridlist: e.userIds, chatname: e.groupName }, e);}), _defineProperty(_C, "launchMiniProgram", function launchMiniProgram(e) {c("launchMiniProgram", { targetAppId: e.targetAppId, path: function (e) {if ("string" == typeof e && 0 < e.length) {var n = e.split("?")[0],i = e.split("?")[1];return n += ".html", void 0 !== i ? n + "?" + i : n;}}(e.path), envVersion: e.envVersion }, e);}), _defineProperty(_C, "miniProgram", { navigateBack: function navigateBack(e) {e = e || {}, u(function () {c("invokeMiniProgramAPI", { name: "navigateBack", arg: { delta: e.delta || 1 } }, e);});}, navigateTo: function navigateTo(e) {u(function () {c("invokeMiniProgramAPI", { name: "navigateTo", arg: { url: e.url } }, e);});}, redirectTo: function redirectTo(e) {u(function () {c("invokeMiniProgramAPI", { name: "redirectTo", arg: { url: e.url } }, e);});}, switchTab: function switchTab(e) {u(function () {c("invokeMiniProgramAPI", { name: "switchTab", arg: { url: e.url } }, e);});}, reLaunch: function reLaunch(e) {u(function () {c("invokeMiniProgramAPI", { name: "reLaunch", arg: { url: e.url } }, e);});}, postMessage: function postMessage(e) {u(function () {c("invokeMiniProgramAPI", { name: "postMessage", arg: e.data || {} }, e);});}, getEnv: function getEnv(e) {u(function () {e({ miniprogram: "miniprogram" === o.__wxjs_environment });});} }), _C),L = 1,B = {};return t.addEventListener("error", function (e) {if (!y) {var n = e.target,i = n.tagName,t = n.src;if (("IMG" == i || "VIDEO" == i || "AUDIO" == i || "SOURCE" == i) && -1 != t.indexOf("wxlocalresource://")) {e.preventDefault(), e.stopPropagation();var o = n["wx-id"];if (o || (o = L++, n["wx-id"] = o), B[o]) return;B[o] = !0, wx.ready(function () {wx.getLocalImgData({ localId: t, success: function success(e) {n.src = e.localData;} });});}}}, !0), t.addEventListener("load", function (e) {if (!y) {var n = e.target,i = n.tagName;if (n.src, "IMG" == i || "VIDEO" == i || "AUDIO" == i || "SOURCE" == i) {var t = n["wx-id"];t && (B[t] = !1);}}}, !0), e && (o.wx = o.jWeixin = C), C;}var O;});

/***/ }),

/***/ 77:
/*!*********************************************!*\
  !*** E:/MB/mb-yun/static/mbcJs/resetURL.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.resetURL = resetURL;function resetURL(path, pathAll) {
  console.log(path, '页面所在路径');
  console.log(pathAll, '页面全路径,包括参数');












}

/***/ }),

/***/ 78:
/*!*********************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"pages%2Fproject%2FMBBO%2Fhome"} ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _home = _interopRequireDefault(__webpack_require__(/*! ./pages/project/MBBO/home.vue */ 79));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_home.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 84:
/*!****************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"pages%2FlandRegistration%2Fmp%2FlandRegistration"} ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _landRegistration = _interopRequireDefault(__webpack_require__(/*! ./pages/landRegistration/mp/landRegistration.vue */ 85));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_landRegistration.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 850:
/*!***************************************************************!*\
  !*** E:/MB/mb-yun/components/common/provinceCity/areaCity.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.county = exports.city = exports.province = void 0; // 省份
var province = [
{
  "name": "北京",
  "value": "110000" },

{
  "name": "天津",
  "value": "120000" },

{
  "name": "河北",
  "value": "130000" },

{
  "name": "山西",
  "value": "140000" },

{
  "name": "内蒙古",
  "value": "150000" },

{
  "name": "辽宁",
  "value": "210000" },

{
  "name": "吉林",
  "value": "220000" },

{
  "name": "黑龙江",
  "value": "230000" },

{
  "name": "上海",
  "value": "310000" },

{
  "name": "江苏",
  "value": "320000" },

{
  "name": "浙江",
  "value": "330000" },

{
  "name": "安徽",
  "value": "340000" },

{
  "name": "福建",
  "value": "350000" },

{
  "name": "江西",
  "value": "360000" },

{
  "name": "山东",
  "value": "370000" },

{
  "name": "河南",
  "value": "410000" },

{
  "name": "湖北",
  "value": "420000" },

{
  "name": "湖南",
  "value": "430000" },

{
  "name": "广东",
  "value": "440000" },

{
  "name": "广西",
  "value": "450000" },

{
  "name": "海南",
  "value": "460000" },

{
  "name": "重庆",
  "value": "500000" },

{
  "name": "四川",
  "value": "510000" },

{
  "name": "贵州",
  "value": "520000" },

{
  "name": "云南",
  "value": "530000" },

{
  "name": "西藏",
  "value": "540000" },

{
  "name": "陕西",
  "value": "610000" },

{
  "name": "甘肃",
  "value": "620000" },

{
  "name": "青海",
  "value": "630000" },

{
  "name": "宁夏",
  "value": "640000" },

{
  "name": "新疆",
  "value": "650000" }];


// 城市
exports.province = province;var city = [
[
{
  "name": "北京市",
  "value": "110100" }],


[
{
  "name": "天津市",
  "value": "120100" }],


[
{
  "name": "石家庄市",
  "value": "130100" },

{
  "name": "唐山市",
  "value": "130200" },

{
  "name": "秦皇岛市",
  "value": "130300" },

{
  "name": "邯郸市",
  "value": "130400" },

{
  "name": "邢台市",
  "value": "130500" },

{
  "name": "保定市",
  "value": "130600" },

{
  "name": "张家口市",
  "value": "130700" },

{
  "name": "承德市",
  "value": "130800" },

{
  "name": "沧州市",
  "value": "130900" },

{
  "name": "廊坊市",
  "value": "131000" },

{
  "name": "衡水市",
  "value": "131100" }],


[
{
  "name": "太原市",
  "value": "140100" },

{
  "name": "大同市",
  "value": "140200" },

{
  "name": "阳泉市",
  "value": "140300" },

{
  "name": "长治市",
  "value": "140400" },

{
  "name": "晋城市",
  "value": "140500" },

{
  "name": "朔州市",
  "value": "140600" },

{
  "name": "晋中市",
  "value": "140700" },

{
  "name": "运城市",
  "value": "140800" },

{
  "name": "忻州市",
  "value": "140900" },

{
  "name": "临汾市",
  "value": "141000" },

{
  "name": "吕梁市",
  "value": "141100" }],


[
{
  "name": "呼和浩特市",
  "value": "150100" },

{
  "name": "包头市",
  "value": "150200" },

{
  "name": "乌海市",
  "value": "150300" },

{
  "name": "赤峰市",
  "value": "150400" },

{
  "name": "通辽市",
  "value": "150500" },

{
  "name": "鄂尔多斯市",
  "value": "150600" },

{
  "name": "呼伦贝尔市",
  "value": "150700" },

{
  "name": "巴彦淖尔市",
  "value": "150800" },

{
  "name": "乌兰察布市",
  "value": "150900" },

{
  "name": "兴安盟",
  "value": "152200" },

{
  "name": "锡林郭勒盟",
  "value": "152500" },

{
  "name": "阿拉善盟",
  "value": "152900" }],


[
{
  "name": "沈阳市",
  "value": "210100" },

{
  "name": "大连市",
  "value": "210200" },

{
  "name": "鞍山市",
  "value": "210300" },

{
  "name": "抚顺市",
  "value": "210400" },

{
  "name": "本溪市",
  "value": "210500" },

{
  "name": "丹东市",
  "value": "210600" },

{
  "name": "锦州市",
  "value": "210700" },

{
  "name": "营口市",
  "value": "210800" },

{
  "name": "阜新市",
  "value": "210900" },

{
  "name": "辽阳市",
  "value": "211000" },

{
  "name": "盘锦市",
  "value": "211100" },

{
  "name": "铁岭市",
  "value": "211200" },

{
  "name": "朝阳市",
  "value": "211300" },

{
  "name": "葫芦岛市",
  "value": "211400" }],


[
{
  "name": "长春市",
  "value": "220100" },

{
  "name": "吉林市",
  "value": "220200" },

{
  "name": "四平市",
  "value": "220300" },

{
  "name": "辽源市",
  "value": "220400" },

{
  "name": "通化市",
  "value": "220500" },

{
  "name": "白山市",
  "value": "220600" },

{
  "name": "松原市",
  "value": "220700" },

{
  "name": "白城市",
  "value": "220800" },

{
  "name": "延边朝鲜族自治州",
  "value": "222400" }],


[
{
  "name": "哈尔滨市",
  "value": "230100" },

{
  "name": "齐齐哈尔市",
  "value": "230200" },

{
  "name": "鸡西市",
  "value": "230300" },

{
  "name": "鹤岗市",
  "value": "230400" },

{
  "name": "双鸭山市",
  "value": "230500" },

{
  "name": "大庆市",
  "value": "230600" },

{
  "name": "伊春市",
  "value": "230700" },

{
  "name": "佳木斯市",
  "value": "230800" },

{
  "name": "七台河市",
  "value": "230900" },

{
  "name": "牡丹江市",
  "value": "231000" },

{
  "name": "黑河市",
  "value": "231100" },

{
  "name": "绥化市",
  "value": "231200" },

{
  "name": "大兴安岭地区",
  "value": "232700" }],


[
{
  "name": "上海市",
  "value": "310100" }],


[
{
  "name": "南京市",
  "value": "320100" },

{
  "name": "无锡市",
  "value": "320200" },

{
  "name": "江阴市",
  "value": "329281" },

{
  "name": "徐州市",
  "value": "320300" },

{
  "name": "常州市",
  "value": "320400" },

{
  "name": "苏州市",
  "value": "320500" },

{
  "name": "南通市",
  "value": "320600" },

{
  "name": "连云港市",
  "value": "320700" },

{
  "name": "淮安市",
  "value": "320800" },

{
  "name": "盐城市",
  "value": "320900" },

{
  "name": "扬州市",
  "value": "321000" },

{
  "name": "镇江市",
  "value": "321100" },

{
  "name": "泰州市",
  "value": "321200" },

{
  "name": "宿迁市",
  "value": "321300" }],


[
{
  "name": "杭州市",
  "value": "330100" },

{
  "name": "宁波市",
  "value": "330200" },

{
  "name": "温州市",
  "value": "330300" },

{
  "name": "嘉兴市",
  "value": "330400" },

{
  "name": "湖州市",
  "value": "330500" },

{
  "name": "绍兴市",
  "value": "330600" },

{
  "name": "金华市",
  "value": "330700" },

{
  "name": "衢州市",
  "value": "330800" },

{
  "name": "舟山市",
  "value": "330900" },

{
  "name": "台州市",
  "value": "331000" },

{
  "name": "丽水市",
  "value": "331100" }],


[
{
  "name": "合肥市",
  "value": "340100" },

{
  "name": "芜湖市",
  "value": "340200" },

{
  "name": "蚌埠市",
  "value": "340300" },

{
  "name": "淮南市",
  "value": "340400" },

{
  "name": "马鞍山市",
  "value": "340500" },

{
  "name": "淮北市",
  "value": "340600" },

{
  "name": "铜陵市",
  "value": "340700" },

{
  "name": "安庆市",
  "value": "340800" },

{
  "name": "黄山市",
  "value": "341000" },

{
  "name": "滁州市",
  "value": "341100" },

{
  "name": "阜阳市",
  "value": "341200" },

{
  "name": "宿州市",
  "value": "341300" },

{
  "name": "巢湖市",
  "value": "341400" },

{
  "name": "六安市",
  "value": "341500" },

{
  "name": "亳州市",
  "value": "341600" },

{
  "name": "池州市",
  "value": "341700" },

{
  "name": "宣城市",
  "value": "341800" }],


[
{
  "name": "福州市",
  "value": "350100" },

{
  "name": "厦门市",
  "value": "350200" },

{
  "name": "莆田市",
  "value": "350300" },

{
  "name": "三明市",
  "value": "350400" },

{
  "name": "泉州市",
  "value": "350500" },

{
  "name": "漳州市",
  "value": "350600" },

{
  "name": "南平市",
  "value": "350700" },

{
  "name": "龙岩市",
  "value": "350800" },

{
  "name": "宁德市",
  "value": "350900" }],


[
{
  "name": "南昌市",
  "value": "360100" },

{
  "name": "景德镇市",
  "value": "360200" },

{
  "name": "萍乡市",
  "value": "360300" },

{
  "name": "九江市",
  "value": "360400" },

{
  "name": "新余市",
  "value": "360500" },

{
  "name": "鹰潭市",
  "value": "360600" },

{
  "name": "赣州市",
  "value": "360700" },

{
  "name": "吉安市",
  "value": "360800" },

{
  "name": "宜春市",
  "value": "360900" },

{
  "name": "抚州市",
  "value": "361000" },

{
  "name": "上饶市",
  "value": "361100" }],


[
{
  "name": "济南市",
  "value": "370100" },

{
  "name": "青岛市",
  "value": "370200" },

{
  "name": "淄博市",
  "value": "370300" },

{
  "name": "枣庄市",
  "value": "370400" },

{
  "name": "东营市",
  "value": "370500" },

{
  "name": "烟台市",
  "value": "370600" },

{
  "name": "潍坊市",
  "value": "370700" },

{
  "name": "济宁市",
  "value": "370800" },

{
  "name": "泰安市",
  "value": "370900" },

{
  "name": "威海市",
  "value": "371000" },

{
  "name": "日照市",
  "value": "371100" },

{
  "name": "莱芜市",
  "value": "371200" },

{
  "name": "临沂市",
  "value": "371300" },

{
  "name": "德州市",
  "value": "371400" },

{
  "name": "聊城市",
  "value": "371500" },

{
  "name": "滨州市",
  "value": "371600" },

{
  "name": "菏泽市",
  "value": "371700" }],


[
{
  "name": "郑州市",
  "value": "410100" },

{
  "name": "开封市",
  "value": "410200" },

{
  "name": "洛阳市",
  "value": "410300" },

{
  "name": "平顶山市",
  "value": "410400" },

{
  "name": "安阳市",
  "value": "410500" },

{
  "name": "鹤壁市",
  "value": "410600" },

{
  "name": "新乡市",
  "value": "410700" },

{
  "name": "焦作市",
  "value": "410800" },

{
  "name": "济源市",
  "value": "411900" },

{
  "name": "濮阳市",
  "value": "410900" },

{
  "name": "许昌市",
  "value": "411000" },

{
  "name": "漯河市",
  "value": "411100" },

{
  "name": "三门峡市",
  "value": "411200" },

{
  "name": "南阳市",
  "value": "411300" },

{
  "name": "商丘市",
  "value": "411400" },

{
  "name": "信阳市",
  "value": "411500" },

{
  "name": "周口市",
  "value": "411600" },

{
  "name": "驻马店市",
  "value": "411700" }],


[
{
  "name": "武汉市",
  "value": "420100" },

{
  "name": "黄石市",
  "value": "420200" },

{
  "name": "十堰市",
  "value": "420300" },

{
  "name": "宜昌市",
  "value": "420500" },

{
  "name": "襄阳市",
  "value": "420600" },

{
  "name": "鄂州市",
  "value": "420700" },

{
  "name": "荆门市",
  "value": "420800" },

{
  "name": "孝感市",
  "value": "420900" },

{
  "name": "荆州市",
  "value": "421000" },

{
  "name": "黄冈市",
  "value": "421100" },

{
  "name": "咸宁市",
  "value": "421200" },

{
  "name": "随州市",
  "value": "421300" },

{
  "name": "恩施土家族苗族自治州",
  "value": "422800" },

{
  "name": "省直辖县级行政单位",
  "value": "429000" }],


[
{
  "name": "长沙市",
  "value": "430100" },

{
  "name": "株洲市",
  "value": "430200" },

{
  "name": "湘潭市",
  "value": "430300" },

{
  "name": "衡阳市",
  "value": "430400" },

{
  "name": "邵阳市",
  "value": "430500" },

{
  "name": "岳阳市",
  "value": "430600" },

{
  "name": "常德市",
  "value": "430700" },

{
  "name": "张家界市",
  "value": "430800" },

{
  "name": "益阳市",
  "value": "430900" },

{
  "name": "郴州市",
  "value": "431000" },

{
  "name": "永州市",
  "value": "431100" },

{
  "name": "怀化市",
  "value": "431200" },

{
  "name": "娄底市",
  "value": "431300" },

{
  "name": "湘西土家族苗族自治州",
  "value": "433100" }],


[
{
  "name": "广州市",
  "value": "440100" },

{
  "name": "韶关市",
  "value": "440200" },

{
  "name": "深圳市",
  "value": "440300" },

{
  "name": "珠海市",
  "value": "440400" },

{
  "name": "汕头市",
  "value": "440500" },

{
  "name": "佛山市",
  "value": "440600" },

{
  "name": "江门市",
  "value": "440700" },

{
  "name": "湛江市",
  "value": "440800" },

{
  "name": "茂名市",
  "value": "440900" },

{
  "name": "肇庆市",
  "value": "441200" },

{
  "name": "惠州市",
  "value": "441300" },

{
  "name": "梅州市",
  "value": "441400" },

{
  "name": "汕尾市",
  "value": "441500" },

{
  "name": "河源市",
  "value": "441600" },

{
  "name": "阳江市",
  "value": "441700" },

{
  "name": "清远市",
  "value": "441800" },

{
  "name": "东莞市",
  "value": "441900" },

{
  "name": "潮州市",
  "value": "445100" },

{
  "name": "揭阳市",
  "value": "445200" },

{
  "name": "云浮市",
  "value": "445300" },

{
  "name": "中山市",
  "value": "442000" }],


[
{
  "name": "南宁市",
  "value": "450100" },

{
  "name": "柳州市",
  "value": "450200" },

{
  "name": "桂林市",
  "value": "450300" },

{
  "name": "梧州市",
  "value": "450400" },

{
  "name": "北海市",
  "value": "450500" },

{
  "name": "防城港市",
  "value": "450600" },

{
  "name": "钦州市",
  "value": "450700" },

{
  "name": "贵港市",
  "value": "450800" },

{
  "name": "玉林市",
  "value": "450900" },

{
  "name": "百色市",
  "value": "451000" },

{
  "name": "贺州市",
  "value": "451100" },

{
  "name": "河池市",
  "value": "451200" },

{
  "name": "来宾市",
  "value": "451300" },

{
  "name": "崇左市",
  "value": "451400" }],


[
{
  "name": "海口市",
  "value": "460100" },

{
  "name": "三沙市",
  "value": "460300" },

{
  "name": "省直辖县级行政单位",
  "value": "469000" },

{
  "name": "三亚市",
  "value": "460200" }],


[
{
  "name": "重庆市",
  "value": "500100" }],


[
{
  "name": "成都市",
  "value": "510100" },

{
  "name": "自贡市",
  "value": "510300" },

{
  "name": "攀枝花市",
  "value": "510400" },

{
  "name": "泸州市",
  "value": "510500" },

{
  "name": "德阳市",
  "value": "510600" },

{
  "name": "绵阳市",
  "value": "510700" },

{
  "name": "广元市",
  "value": "510800" },

{
  "name": "遂宁市",
  "value": "510900" },

{
  "name": "内江市",
  "value": "511000" },

{
  "name": "乐山市",
  "value": "511100" },

{
  "name": "南充市",
  "value": "511300" },

{
  "name": "眉山市",
  "value": "511400" },

{
  "name": "宜宾市",
  "value": "511500" },

{
  "name": "广安市",
  "value": "511600" },

{
  "name": "达州市",
  "value": "511700" },

{
  "name": "雅安市",
  "value": "511800" },

{
  "name": "巴中市",
  "value": "511900" },

{
  "name": "资阳市",
  "value": "512000" },

{
  "name": "阿坝藏族羌族自治州",
  "value": "513200" },

{
  "name": "甘孜藏族自治州",
  "value": "513300" },

{
  "name": "凉山彝族自治州",
  "value": "513400" }],


[
{
  "name": "贵阳市",
  "value": "520100" },

{
  "name": "六盘水市",
  "value": "520200" },

{
  "name": "遵义市",
  "value": "520300" },

{
  "name": "安顺市",
  "value": "520400" },

{
  "name": "毕节市",
  "value": "520600" },

{
  "name": "铜仁市",
  "value": "520500" },

{
  "name": "铜仁地区",
  "value": "522200" },

{
  "name": "黔西南布依族苗族自治州",
  "value": "522300" },

{
  "name": "毕节地区",
  "value": "522400" },

{
  "name": "黔东南苗族侗族自治州",
  "value": "522600" },

{
  "name": "黔南布依族苗族自治州",
  "value": "522700" }],


[
{
  "name": "昆明市",
  "value": "530100" },

{
  "name": "曲靖市",
  "value": "530300" },

{
  "name": "玉溪市",
  "value": "530400" },

{
  "name": "保山市",
  "value": "530500" },

{
  "name": "昭通市",
  "value": "530600" },

{
  "name": "丽江市",
  "value": "530700" },

{
  "name": "普洱市",
  "value": "530800" },

{
  "name": "临沧市",
  "value": "530900" },

{
  "name": "楚雄彝族自治州",
  "value": "532300" },

{
  "name": "红河哈尼族彝族自治州",
  "value": "532500" },

{
  "name": "文山壮族苗族自治州",
  "value": "532600" },

{
  "name": "西双版纳傣族自治州",
  "value": "532800" },

{
  "name": "大理白族自治州",
  "value": "532900" },

{
  "name": "德宏傣族景颇族自治州",
  "value": "533100" },

{
  "name": "怒江傈僳族自治州",
  "value": "533300" },

{
  "name": "迪庆藏族自治州",
  "value": "533400" }],


[
{
  "name": "拉萨市",
  "value": "540100" },

{
  "name": "昌都地区",
  "value": "542100" },

{
  "name": "山南地区",
  "value": "542200" },

{
  "name": "日喀则地区",
  "value": "542300" },

{
  "name": "那曲地区",
  "value": "542400" },

{
  "name": "阿里地区",
  "value": "542500" },

{
  "name": "林芝地区",
  "value": "542600" }],


[
{
  "name": "西安市",
  "value": "610100" },

{
  "name": "铜川市",
  "value": "610200" },

{
  "name": "宝鸡市",
  "value": "610300" },

{
  "name": "咸阳市",
  "value": "610400" },

{
  "name": "渭南市",
  "value": "610500" },

{
  "name": "延安市",
  "value": "610600" },

{
  "name": "汉中市",
  "value": "610700" },

{
  "name": "榆林市",
  "value": "610800" },

{
  "name": "安康市",
  "value": "610900" },

{
  "name": "商洛市",
  "value": "611000" }],


[
{
  "name": "兰州市",
  "value": "620100" },

{
  "name": "嘉峪关市",
  "value": "620200" },

{
  "name": "金昌市",
  "value": "620300" },

{
  "name": "白银市",
  "value": "620400" },

{
  "name": "天水市",
  "value": "620500" },

{
  "name": "武威市",
  "value": "620600" },

{
  "name": "张掖市",
  "value": "620700" },

{
  "name": "平凉市",
  "value": "620800" },

{
  "name": "酒泉市",
  "value": "620900" },

{
  "name": "庆阳市",
  "value": "621000" },

{
  "name": "定西市",
  "value": "621100" },

{
  "name": "陇南市",
  "value": "621200" },

{
  "name": "临夏回族自治州",
  "value": "622900" },

{
  "name": "甘南藏族自治州",
  "value": "623000" }],


[
{
  "name": "西宁市",
  "value": "630100" },

{
  "name": "海东地区",
  "value": "632100" },

{
  "name": "海北藏族自治州",
  "value": "632200" },

{
  "name": "黄南藏族自治州",
  "value": "632300" },

{
  "name": "海南藏族自治州",
  "value": "632500" },

{
  "name": "果洛藏族自治州",
  "value": "632600" },

{
  "name": "玉树藏族自治州",
  "value": "632700" },

{
  "name": "海西蒙古族藏族自治州",
  "value": "632800" }],


[
{
  "name": "银川市",
  "value": "640100" },

{
  "name": "石嘴山市",
  "value": "640200" },

{
  "name": "吴忠市",
  "value": "640300" },

{
  "name": "固原市",
  "value": "640400" },

{
  "name": "中卫市",
  "value": "640500" }],


[
{
  "name": "乌鲁木齐市",
  "value": "650100" },

{
  "name": "克拉玛依市",
  "value": "650200" },

{
  "name": "吐鲁番地区",
  "value": "652100" },

{
  "name": "哈密地区",
  "value": "652200" },

{
  "name": "昌吉回族自治州",
  "value": "652300" },

{
  "name": "博尔塔拉蒙古自治州",
  "value": "652700" },

{
  "name": "巴音郭楞蒙古自治州",
  "value": "652800" },

{
  "name": "阿克苏地区",
  "value": "652900" },

{
  "name": "克孜勒苏柯尔克孜自治州",
  "value": "653000" },

{
  "name": "喀什地区",
  "value": "653100" },

{
  "name": "和田地区",
  "value": "653200" },

{
  "name": "伊犁哈萨克自治州",
  "value": "654000" },

{
  "name": "塔城地区",
  "value": "654200" },

{
  "name": "阿勒泰地区",
  "value": "654300" },

{
  "name": "省直辖县级行政单位",
  "value": "659000" }]];



// 区县
exports.city = city;var county = [
[
[
{
  "name": "东城区",
  "value": "110101" },

{
  "name": "西城区",
  "value": "110102" },

{
  "name": "崇文区",
  "value": "110103" },

{
  "name": "宣武区",
  "value": "110104" },

{
  "name": "朝阳区",
  "value": "110105" },

{
  "name": "丰台区",
  "value": "110106" },

{
  "name": "石景山区",
  "value": "110107" },

{
  "name": "海淀区",
  "value": "110108" },

{
  "name": "门头沟区",
  "value": "110109" },

{
  "name": "房山区",
  "value": "110111" },

{
  "name": "通州区",
  "value": "110112" },

{
  "name": "顺义区",
  "value": "110113" },

{
  "name": "昌平区",
  "value": "110114" },

{
  "name": "大兴区",
  "value": "110115" },

{
  "name": "怀柔区",
  "value": "110116" },

{
  "name": "平谷区",
  "value": "110117" },

{
  "name": "密云县",
  "value": "110228" },

{
  "name": "延庆县",
  "value": "110229" }]],



[
[
{
  "name": "和平区",
  "value": "120101" },

{
  "name": "河东区",
  "value": "120102" },

{
  "name": "河西区",
  "value": "120103" },

{
  "name": "南开区",
  "value": "120104" },

{
  "name": "河北区",
  "value": "120105" },

{
  "name": "红桥区",
  "value": "120106" },

{
  "name": "塘沽区",
  "value": "120107" },

{
  "name": "汉沽区",
  "value": "120108" },

{
  "name": "大港区",
  "value": "120109" },

{
  "name": "东丽区",
  "value": "120110" },

{
  "name": "西青区",
  "value": "120111" },

{
  "name": "津南区",
  "value": "120112" },

{
  "name": "北辰区",
  "value": "120113" },

{
  "name": "武清区",
  "value": "120114" },

{
  "name": "宝坻区",
  "value": "120115" },

{
  "name": "宁河县",
  "value": "120221" },

{
  "name": "静海县",
  "value": "120223" },

{
  "name": "蓟县",
  "value": "120225" },

{
  "name": "保税区",
  "value": "120226" },

{
  "name": "经济技术开发区",
  "value": "120230" },

{
  "name": "高新区",
  "value": "120237" },

{
  "name": "滨海新区",
  "value": "120238" }]],



[
[
{
  "name": "长安区",
  "value": "130102" },

{
  "name": "桥东区",
  "value": "130103" },

{
  "name": "桥西区",
  "value": "130104" },

{
  "name": "新华区",
  "value": "130105" },

{
  "name": "井陉矿区",
  "value": "130107" },

{
  "name": "裕华区",
  "value": "130108" },

{
  "name": "井陉县",
  "value": "130121" },

{
  "name": "正定县",
  "value": "130123" },

{
  "name": "栾城县",
  "value": "130124" },

{
  "name": "行唐县",
  "value": "130125" },

{
  "name": "灵寿县",
  "value": "130126" },

{
  "name": "高邑县",
  "value": "130127" },

{
  "name": "深泽县",
  "value": "130128" },

{
  "name": "赞皇县",
  "value": "130129" },

{
  "name": "无极县",
  "value": "130130" },

{
  "name": "平山县",
  "value": "130131" },

{
  "name": "元氏县",
  "value": "130132" },

{
  "name": "赵县",
  "value": "130133" },

{
  "name": "辛集市",
  "value": "130181" },

{
  "name": "藁城市",
  "value": "130182" },

{
  "name": "晋州市",
  "value": "130183" },

{
  "name": "新乐市",
  "value": "130184" },

{
  "name": "鹿泉市",
  "value": "130185" },

{
  "name": "高新技术开发区",
  "value": "131204" }],


[
{
  "name": "路南区",
  "value": "130202" },

{
  "name": "路北区",
  "value": "130203" },

{
  "name": "古冶区",
  "value": "130204" },

{
  "name": "开平区",
  "value": "130205" },

{
  "name": "丰南区",
  "value": "130207" },

{
  "name": "丰润区",
  "value": "130208" },

{
  "name": "滦县",
  "value": "130223" },

{
  "name": "滦南县",
  "value": "130224" },

{
  "name": "乐亭县",
  "value": "130225" },

{
  "name": "迁西县",
  "value": "130227" },

{
  "name": "玉田县",
  "value": "130229" },

{
  "name": "唐海县",
  "value": "130230" },

{
  "name": "遵化市",
  "value": "130281" },

{
  "name": "迁安市",
  "value": "130283" },

{
  "name": "高新区",
  "value": "131198" },

{
  "name": "汉沽管理区",
  "value": "131199" },

{
  "name": "海港开发区",
  "value": "131200" },

{
  "name": "芦台开发区",
  "value": "131201" },

{
  "name": "南堡开发区",
  "value": "131202" },

{
  "name": "曹妃甸区",
  "value": "131203" }],


[
{
  "name": "海港区",
  "value": "130302" },

{
  "name": "山海关区",
  "value": "130303" },

{
  "name": "北戴河区",
  "value": "130304" },

{
  "name": "青龙满族自治县",
  "value": "130321" },

{
  "name": "昌黎县",
  "value": "130322" },

{
  "name": "抚宁县",
  "value": "130323" },

{
  "name": "卢龙县",
  "value": "130324" },

{
  "name": "经济技术开发区",
  "value": "131196" }],


[
{
  "name": "邯山区",
  "value": "130402" },

{
  "name": "丛台区",
  "value": "130403" },

{
  "name": "复兴区",
  "value": "130404" },

{
  "name": "峰峰矿区",
  "value": "130406" },

{
  "name": "邯郸县",
  "value": "130421" },

{
  "name": "临漳县",
  "value": "130423" },

{
  "name": "成安县",
  "value": "130424" },

{
  "name": "大名县",
  "value": "130425" },

{
  "name": "涉县",
  "value": "130426" },

{
  "name": "磁县",
  "value": "130427" },

{
  "name": "肥乡县",
  "value": "130428" },

{
  "name": "永年县",
  "value": "130429" },

{
  "name": "邱县",
  "value": "130430" },

{
  "name": "鸡泽县",
  "value": "130431" },

{
  "name": "广平县",
  "value": "130432" },

{
  "name": "馆陶县",
  "value": "130433" },

{
  "name": "魏县",
  "value": "130434" },

{
  "name": "曲周县",
  "value": "130435" },

{
  "name": "武安市",
  "value": "130481" },

{
  "name": "经济开发区",
  "value": "131197" }],


[
{
  "name": "桥东区",
  "value": "130502" },

{
  "name": "桥西区",
  "value": "130503" },

{
  "name": "邢台县",
  "value": "130521" },

{
  "name": "临城县",
  "value": "130522" },

{
  "name": "内丘县",
  "value": "130523" },

{
  "name": "柏乡县",
  "value": "130524" },

{
  "name": "隆尧县",
  "value": "130525" },

{
  "name": "任县",
  "value": "130526" },

{
  "name": "南和县",
  "value": "130527" },

{
  "name": "宁晋县",
  "value": "130528" },

{
  "name": "巨鹿县",
  "value": "130529" },

{
  "name": "新河县",
  "value": "130530" },

{
  "name": "广宗县",
  "value": "130531" },

{
  "name": "平乡县",
  "value": "130532" },

{
  "name": "威县",
  "value": "130533" },

{
  "name": "清河县",
  "value": "130534" },

{
  "name": "临西县",
  "value": "130535" },

{
  "name": "南宫市",
  "value": "130581" },

{
  "name": "沙河市",
  "value": "130582" }],


[
{
  "name": "新市区",
  "value": "130602" },

{
  "name": "南市区",
  "value": "130603" },

{
  "name": "北市区",
  "value": "130604" },

{
  "name": "满城县",
  "value": "130621" },

{
  "name": "清苑县",
  "value": "130622" },

{
  "name": "涞水县",
  "value": "130623" },

{
  "name": "阜平县",
  "value": "130624" },

{
  "name": "徐水县",
  "value": "130625" },

{
  "name": "定兴县",
  "value": "130626" },

{
  "name": "唐县",
  "value": "130627" },

{
  "name": "高阳县",
  "value": "130628" },

{
  "name": "容城县",
  "value": "130629" },

{
  "name": "涞源县",
  "value": "130630" },

{
  "name": "望都县",
  "value": "130631" },

{
  "name": "安新县",
  "value": "130632" },

{
  "name": "易县",
  "value": "130633" },

{
  "name": "曲阳县",
  "value": "130634" },

{
  "name": "蠡县",
  "value": "130635" },

{
  "name": "顺平县",
  "value": "130636" },

{
  "name": "博野县",
  "value": "130637" },

{
  "name": "雄县",
  "value": "130638" },

{
  "name": "涿州市",
  "value": "130681" },

{
  "name": "定州市",
  "value": "130682" },

{
  "name": "安国市",
  "value": "130683" },

{
  "name": "高碑店市",
  "value": "130684" },

{
  "name": "高开区",
  "value": "130685" }],


[
{
  "name": "桥东区",
  "value": "130702" },

{
  "name": "桥西区",
  "value": "130703" },

{
  "name": "安新县",
  "value": "130704" },

{
  "name": "宣化区",
  "value": "130705" },

{
  "name": "下花园区",
  "value": "130706" },

{
  "name": "宣化县",
  "value": "130721" },

{
  "name": "张北县",
  "value": "130722" },

{
  "name": "康保县",
  "value": "130723" },

{
  "name": "沽源县",
  "value": "130724" },

{
  "name": "尚义县",
  "value": "130725" },

{
  "name": "蔚县",
  "value": "130726" },

{
  "name": "阳原县",
  "value": "130727" },

{
  "name": "怀安县",
  "value": "130728" },

{
  "name": "万全县",
  "value": "130729" },

{
  "name": "怀来县",
  "value": "130730" },

{
  "name": "涿鹿县",
  "value": "130731" },

{
  "name": "赤城县",
  "value": "130732" },

{
  "name": "崇礼县",
  "value": "130733" }],


[
{
  "name": "双桥区",
  "value": "130802" },

{
  "name": "双滦区",
  "value": "130803" },

{
  "name": "鹰手营子矿区",
  "value": "130804" },

{
  "name": "承德县",
  "value": "130821" },

{
  "name": "兴隆县",
  "value": "130822" },

{
  "name": "平泉县",
  "value": "130823" },

{
  "name": "滦平县",
  "value": "130824" },

{
  "name": "隆化县",
  "value": "130825" },

{
  "name": "丰宁满族自治县",
  "value": "130826" },

{
  "name": "宽城满族自治县",
  "value": "130827" },

{
  "name": "围场满族蒙古族自治县",
  "value": "130828" }],


[
{
  "name": "新华区",
  "value": "130902" },

{
  "name": "运河区",
  "value": "130903" },

{
  "name": "沧县",
  "value": "130921" },

{
  "name": "青县",
  "value": "130922" },

{
  "name": "东光县",
  "value": "130923" },

{
  "name": "海兴县",
  "value": "130924" },

{
  "name": "盐山县",
  "value": "130925" },

{
  "name": "肃宁县",
  "value": "130926" },

{
  "name": "南皮县",
  "value": "130927" },

{
  "name": "吴桥县",
  "value": "130928" },

{
  "name": "献县",
  "value": "130929" },

{
  "name": "孟村回族自治县",
  "value": "130930" },

{
  "name": "泊头市",
  "value": "130981" },

{
  "name": "任丘市",
  "value": "130982" },

{
  "name": "黄骅市",
  "value": "130983" },

{
  "name": "河间市",
  "value": "130984" }],


[
{
  "name": "安次区",
  "value": "131002" },

{
  "name": "广阳区",
  "value": "131003" },

{
  "name": "固安县",
  "value": "131022" },

{
  "name": "永清县",
  "value": "131023" },

{
  "name": "香河县",
  "value": "131024" },

{
  "name": "大城县",
  "value": "131025" },

{
  "name": "文安县",
  "value": "131026" },

{
  "name": "大厂回族自治县",
  "value": "131028" },

{
  "name": "霸州市",
  "value": "131081" },

{
  "name": "三河市",
  "value": "131082" },

{
  "name": "燕郊经济技术开发区",
  "value": "131187" },

{
  "name": "开发区",
  "value": "131205" }],


[
{
  "name": "桃城区",
  "value": "131102" },

{
  "name": "枣强县",
  "value": "131121" },

{
  "name": "武邑县",
  "value": "131122" },

{
  "name": "武强县",
  "value": "131123" },

{
  "name": "饶阳县",
  "value": "131124" },

{
  "name": "安平县",
  "value": "131125" },

{
  "name": "故城县",
  "value": "131126" },

{
  "name": "景县",
  "value": "131127" },

{
  "name": "阜城县",
  "value": "131128" },

{
  "name": "冀州市",
  "value": "131181" },

{
  "name": "深州市",
  "value": "131182" }]],



[
[
{
  "name": "小店区",
  "value": "140105" },

{
  "name": "迎泽区",
  "value": "140106" },

{
  "name": "杏花岭区",
  "value": "140107" },

{
  "name": "尖草坪区",
  "value": "140108" },

{
  "name": "万柏林区",
  "value": "140109" },

{
  "name": "晋源区",
  "value": "140110" },

{
  "name": "城区",
  "value": "140111" },

{
  "name": "清徐县",
  "value": "140121" },

{
  "name": "阳曲县",
  "value": "140122" },

{
  "name": "娄烦县",
  "value": "140123" },

{
  "name": "古交市",
  "value": "140181" }],


[
{
  "name": "城区",
  "value": "140202" },

{
  "name": "矿区",
  "value": "140203" },

{
  "name": "南郊区",
  "value": "140211" },

{
  "name": "新荣区",
  "value": "140212" },

{
  "name": "阳高县",
  "value": "140221" },

{
  "name": "天镇县",
  "value": "140222" },

{
  "name": "广灵县",
  "value": "140223" },

{
  "name": "灵丘县",
  "value": "140224" },

{
  "name": "浑源县",
  "value": "140225" },

{
  "name": "左云县",
  "value": "140226" },

{
  "name": "大同县",
  "value": "140227" }],


[
{
  "name": "城区",
  "value": "140302" },

{
  "name": "矿区",
  "value": "140303" },

{
  "name": "郊区",
  "value": "140311" },

{
  "name": "平定县",
  "value": "140321" },

{
  "name": "盂县",
  "value": "140322" }],


[
{
  "name": "城区",
  "value": "140402" },

{
  "name": "郊区",
  "value": "140411" },

{
  "name": "长治县",
  "value": "140421" },

{
  "name": "襄垣县",
  "value": "140423" },

{
  "name": "屯留县",
  "value": "140424" },

{
  "name": "平顺县",
  "value": "140425" },

{
  "name": "黎城县",
  "value": "140426" },

{
  "name": "壶关县",
  "value": "140427" },

{
  "name": "长子县",
  "value": "140428" },

{
  "name": "武乡县",
  "value": "140429" },

{
  "name": "沁县",
  "value": "140430" },

{
  "name": "沁源县",
  "value": "140431" },

{
  "name": "潞城市",
  "value": "140481" },

{
  "name": "高新产业技术开发区",
  "value": "140482" }],


[
{
  "name": "城区",
  "value": "140502" },

{
  "name": "沁水县",
  "value": "140521" },

{
  "name": "阳城县",
  "value": "140522" },

{
  "name": "陵川县",
  "value": "140524" },

{
  "name": "泽州县",
  "value": "140525" },

{
  "name": "高平市",
  "value": "140581" }],


[
{
  "name": "朔城区",
  "value": "140602" },

{
  "name": "平鲁区",
  "value": "140603" },

{
  "name": "山阴县",
  "value": "140621" },

{
  "name": "应县",
  "value": "140622" },

{
  "name": "右玉县",
  "value": "140623" },

{
  "name": "怀仁县",
  "value": "140624" }],


[
{
  "name": "榆次区",
  "value": "140702" },

{
  "name": "榆社县",
  "value": "140721" },

{
  "name": "左权县",
  "value": "140722" },

{
  "name": "和顺县",
  "value": "140723" },

{
  "name": "昔阳县",
  "value": "140724" },

{
  "name": "寿阳县",
  "value": "140725" },

{
  "name": "太谷县",
  "value": "140726" },

{
  "name": "祁县",
  "value": "140727" },

{
  "name": "平遥县",
  "value": "140728" },

{
  "name": "灵石县",
  "value": "140729" },

{
  "name": "介休市",
  "value": "140781" }],


[
{
  "name": "盐湖区",
  "value": "140802" },

{
  "name": "临猗县",
  "value": "140821" },

{
  "name": "万荣县",
  "value": "140822" },

{
  "name": "闻喜县",
  "value": "140823" },

{
  "name": "稷山县",
  "value": "140824" },

{
  "name": "新绛县",
  "value": "140825" },

{
  "name": "绛县",
  "value": "140826" },

{
  "name": "垣曲县",
  "value": "140827" },

{
  "name": "夏县",
  "value": "140828" },

{
  "name": "平陆县",
  "value": "140829" },

{
  "name": "芮城县",
  "value": "140830" },

{
  "name": "永济市",
  "value": "140881" },

{
  "name": "河津市",
  "value": "140882" }],


[
{
  "name": "忻府区",
  "value": "140902" },

{
  "name": "定襄县",
  "value": "140921" },

{
  "name": "五台县",
  "value": "140922" },

{
  "name": "代县",
  "value": "140923" },

{
  "name": "繁峙县",
  "value": "140924" },

{
  "name": "宁武县",
  "value": "140925" },

{
  "name": "静乐县",
  "value": "140926" },

{
  "name": "神池县",
  "value": "140927" },

{
  "name": "五寨县",
  "value": "140928" },

{
  "name": "岢岚县",
  "value": "140929" },

{
  "name": "河曲县",
  "value": "140930" },

{
  "name": "保德县",
  "value": "140931" },

{
  "name": "偏关县",
  "value": "140932" },

{
  "name": "原平市",
  "value": "140981" }],


[
{
  "name": "尧都区",
  "value": "141002" },

{
  "name": "曲沃县",
  "value": "141021" },

{
  "name": "翼城县",
  "value": "141022" },

{
  "name": "襄汾县",
  "value": "141023" },

{
  "name": "洪洞县",
  "value": "141024" },

{
  "name": "古县",
  "value": "141025" },

{
  "name": "安泽县",
  "value": "141026" },

{
  "name": "浮山县",
  "value": "141027" },

{
  "name": "吉县",
  "value": "141028" },

{
  "name": "乡宁县",
  "value": "141029" },

{
  "name": "大宁县",
  "value": "141030" },

{
  "name": "隰县",
  "value": "141031" },

{
  "name": "永和县",
  "value": "141032" },

{
  "name": "蒲县",
  "value": "141033" },

{
  "name": "汾西县",
  "value": "141034" },

{
  "name": "侯马市",
  "value": "141081" },

{
  "name": "霍州市",
  "value": "141082" }],


[
{
  "name": "离石区",
  "value": "141102" },

{
  "name": "文水县",
  "value": "141121" },

{
  "name": "交城县",
  "value": "141122" },

{
  "name": "兴县",
  "value": "141123" },

{
  "name": "临县",
  "value": "141124" },

{
  "name": "柳林县",
  "value": "141125" },

{
  "name": "石楼县",
  "value": "141126" },

{
  "name": "岚县",
  "value": "141127" },

{
  "name": "方山县",
  "value": "141128" },

{
  "name": "中阳县",
  "value": "141129" },

{
  "name": "交口县",
  "value": "141130" },

{
  "name": "孝义市",
  "value": "141181" },

{
  "name": "汾阳市",
  "value": "141182" }]],



[
[
{
  "name": "回民区",
  "value": "150102" },

{
  "name": "玉泉区",
  "value": "150103" },

{
  "name": "新城区",
  "value": "150104" },

{
  "name": "赛罕区",
  "value": "150105" },

{
  "name": "土默特左旗",
  "value": "150121" },

{
  "name": "托克托县",
  "value": "150122" },

{
  "name": "和林格尔县",
  "value": "150123" },

{
  "name": "清水河县",
  "value": "150124" },

{
  "name": "武川县",
  "value": "150125" },

{
  "name": "金川开发区",
  "value": "150126" }],


[
{
  "name": "东河区",
  "value": "150202" },

{
  "name": "昆都仑区",
  "value": "150203" },

{
  "name": "青山区",
  "value": "150204" },

{
  "name": "石拐区",
  "value": "150205" },

{
  "name": "白云鄂博矿区",
  "value": "150206" },

{
  "name": "九原区",
  "value": "150207" },

{
  "name": "土默特右旗",
  "value": "150221" },

{
  "name": "固阳县",
  "value": "150222" },

{
  "name": "达尔罕茂明安联合旗",
  "value": "150223" }],


[
{
  "name": "海勃湾区",
  "value": "150302" },

{
  "name": "海南区",
  "value": "150303" },

{
  "name": "乌达区",
  "value": "150304" }],


[
{
  "name": "红山区",
  "value": "150402" },

{
  "name": "元宝山区",
  "value": "150403" },

{
  "name": "松山区",
  "value": "150404" },

{
  "name": "阿鲁科尔沁旗",
  "value": "150421" },

{
  "name": "巴林左旗",
  "value": "150422" },

{
  "name": "巴林右旗",
  "value": "150423" },

{
  "name": "林西县",
  "value": "150424" },

{
  "name": "克什克腾旗",
  "value": "150425" },

{
  "name": "翁牛特旗",
  "value": "150426" },

{
  "name": "喀喇沁旗",
  "value": "150428" },

{
  "name": "宁城县",
  "value": "150429" },

{
  "name": "敖汉旗",
  "value": "150430" },

{
  "name": "新城区",
  "value": "150431" }],


[
{
  "name": "科尔沁区",
  "value": "150502" },

{
  "name": "科尔沁左翼中旗",
  "value": "150521" },

{
  "name": "科尔沁左翼后旗",
  "value": "150522" },

{
  "name": "开鲁县",
  "value": "150523" },

{
  "name": "库伦旗",
  "value": "150524" },

{
  "name": "奈曼旗",
  "value": "150525" },

{
  "name": "扎鲁特旗",
  "value": "150526" },

{
  "name": "霍林郭勒市",
  "value": "150581" }],


[
{
  "name": "东胜区",
  "value": "150602" },

{
  "name": "达拉特旗",
  "value": "150621" },

{
  "name": "准格尔旗",
  "value": "150622" },

{
  "name": "鄂托克前旗",
  "value": "150623" },

{
  "name": "鄂托克旗",
  "value": "150624" },

{
  "name": "杭锦旗",
  "value": "150625" },

{
  "name": "乌审旗",
  "value": "150626" },

{
  "name": "伊金霍洛旗",
  "value": "150627" }],


[
{
  "name": "海拉尔区",
  "value": "150702" },

{
  "name": "阿荣旗",
  "value": "150721" },

{
  "name": "莫力达瓦达斡尔族自治旗",
  "value": "150722" },

{
  "name": "鄂伦春自治旗",
  "value": "150723" },

{
  "name": "鄂温克族自治旗",
  "value": "150724" },

{
  "name": "陈巴尔虎旗",
  "value": "150725" },

{
  "name": "新巴尔虎左旗",
  "value": "150726" },

{
  "name": "新巴尔虎右旗",
  "value": "150727" },

{
  "name": "满洲里市",
  "value": "150781" },

{
  "name": "牙克石市",
  "value": "150782" },

{
  "name": "扎兰屯市",
  "value": "150783" },

{
  "name": "额尔古纳市",
  "value": "150784" },

{
  "name": "根河市",
  "value": "150785" }],


[
{
  "name": "临河区",
  "value": "150802" },

{
  "name": "五原县",
  "value": "150821" },

{
  "name": "磴口县",
  "value": "150822" },

{
  "name": "乌拉特前旗",
  "value": "150823" },

{
  "name": "乌拉特中旗",
  "value": "150824" },

{
  "name": "乌拉特后旗",
  "value": "150825" },

{
  "name": "杭锦后旗",
  "value": "150826" }],


[
{
  "name": "集宁区",
  "value": "150902" },

{
  "name": "卓资县",
  "value": "150921" },

{
  "name": "化德县",
  "value": "150922" },

{
  "name": "商都县",
  "value": "150923" },

{
  "name": "兴和县",
  "value": "150924" },

{
  "name": "凉城县",
  "value": "150925" },

{
  "name": "察哈尔右翼前旗",
  "value": "150926" },

{
  "name": "察哈尔右翼中旗",
  "value": "150927" },

{
  "name": "察哈尔右翼后旗",
  "value": "150928" },

{
  "name": "四子王旗",
  "value": "150929" },

{
  "name": "丰镇市",
  "value": "150981" }],


[
{
  "name": "乌兰浩特市",
  "value": "152201" },

{
  "name": "阿尔山市",
  "value": "152202" },

{
  "name": "科尔沁右翼前旗",
  "value": "152221" },

{
  "name": "科尔沁右翼中旗",
  "value": "152222" },

{
  "name": "扎赉特旗",
  "value": "152223" },

{
  "name": "突泉县",
  "value": "152224" }],


[
{
  "name": "二连浩特市",
  "value": "152501" },

{
  "name": "锡林浩特市",
  "value": "152502" },

{
  "name": "阿巴嘎旗",
  "value": "152522" },

{
  "name": "苏尼特左旗",
  "value": "152523" },

{
  "name": "苏尼特右旗",
  "value": "152524" },

{
  "name": "东乌珠穆沁旗",
  "value": "152525" },

{
  "name": "西乌珠穆沁旗",
  "value": "152526" },

{
  "name": "太仆寺旗",
  "value": "152527" },

{
  "name": "镶黄旗",
  "value": "152528" },

{
  "name": "正镶白旗",
  "value": "152529" },

{
  "name": "正蓝旗",
  "value": "152530" },

{
  "name": "多伦县",
  "value": "152531" },

{
  "name": "乌拉盖管理区",
  "value": "152532" }],


[
{
  "name": "阿拉善左旗",
  "value": "152921" },

{
  "name": "阿拉善右旗",
  "value": "152922" },

{
  "name": "额济纳旗",
  "value": "152923" }]],



[
[
{
  "name": "和平区",
  "value": "210102" },

{
  "name": "沈河区",
  "value": "210103" },

{
  "name": "大东区",
  "value": "210104" },

{
  "name": "皇姑区",
  "value": "210105" },

{
  "name": "铁西区",
  "value": "210106" },

{
  "name": "苏家屯区",
  "value": "210111" },

{
  "name": "东陵区",
  "value": "210112" },

{
  "name": "沈北新区",
  "value": "210113" },

{
  "name": "于洪区",
  "value": "210114" },

{
  "name": "张士开发区",
  "value": "210115" },

{
  "name": "辽中县",
  "value": "210122" },

{
  "name": "康平县",
  "value": "210123" },

{
  "name": "法库县",
  "value": "210124" },

{
  "name": "新民市",
  "value": "210181" },

{
  "name": "经济技术开发区",
  "value": "211505" },

{
  "name": "浑南新区",
  "value": "211506" },

{
  "name": "新城子经济技术开发区",
  "value": "211507" }],


[
{
  "name": "中山区",
  "value": "210202" },

{
  "name": "西岗区",
  "value": "210203" },

{
  "name": "沙河口区",
  "value": "210204" },

{
  "name": "甘井子区",
  "value": "210211" },

{
  "name": "旅顺口区",
  "value": "210212" },

{
  "name": "金州区",
  "value": "210213" },

{
  "name": "长海县",
  "value": "210224" },

{
  "name": "瓦房店市",
  "value": "210281" },

{
  "name": "普兰店市",
  "value": "210282" },

{
  "name": "庄河市",
  "value": "210283" },

{
  "name": "开发区",
  "value": "211503" },

{
  "name": "保税区",
  "value": "211504" }],


[
{
  "name": "铁东区",
  "value": "210302" },

{
  "name": "铁西区",
  "value": "210303" },

{
  "name": "立山区",
  "value": "210304" },

{
  "name": "千山区",
  "value": "210311" },

{
  "name": "台安县",
  "value": "210321" },

{
  "name": "岫岩满族自治县",
  "value": "210323" },

{
  "name": "海城市",
  "value": "210381" },

{
  "name": "铁东高新区",
  "value": "210382" }],


[
{
  "name": "新抚区",
  "value": "210402" },

{
  "name": "东洲区",
  "value": "210403" },

{
  "name": "望花区",
  "value": "210404" },

{
  "name": "顺城区",
  "value": "210411" },

{
  "name": "抚顺县",
  "value": "210421" },

{
  "name": "新宾满族自治县",
  "value": "210422" },

{
  "name": "清原满族自治县",
  "value": "210423" }],


[
{
  "name": "平山区",
  "value": "210502" },

{
  "name": "明山区",
  "value": "210503" },

{
  "name": "溪湖区",
  "value": "210504" },

{
  "name": "南芬区",
  "value": "210505" },

{
  "name": "本溪满族自治县",
  "value": "210521" },

{
  "name": "桓仁满族自治县",
  "value": "210522" }],


[
{
  "name": "元宝区",
  "value": "210602" },

{
  "name": "振兴区",
  "value": "210603" },

{
  "name": "振安区",
  "value": "210604" },

{
  "name": "宽甸满族自治县",
  "value": "210624" },

{
  "name": "东港市",
  "value": "210681" },

{
  "name": "凤城市",
  "value": "210682" }],


[
{
  "name": "古塔区",
  "value": "210702" },

{
  "name": "凌河区",
  "value": "210703" },

{
  "name": "太和区",
  "value": "210711" },

{
  "name": "黑山县",
  "value": "210726" },

{
  "name": "义县",
  "value": "210727" },

{
  "name": "凌海市",
  "value": "210781" },

{
  "name": "北宁市",
  "value": "210782" },

{
  "name": "松山新区",
  "value": "211508" },

{
  "name": "经济技术开发区",
  "value": "211509" },

{
  "name": "北镇市",
  "value": "211510" }],


[
{
  "name": "站前区",
  "value": "210802" },

{
  "name": "西市区",
  "value": "210803" },

{
  "name": "鲅鱼圈区",
  "value": "210804" },

{
  "name": "老边区",
  "value": "210811" },

{
  "name": "盖州市",
  "value": "210881" },

{
  "name": "大石桥市",
  "value": "210882" }],


[
{
  "name": "海州区",
  "value": "210902" },

{
  "name": "新邱区",
  "value": "210903" },

{
  "name": "太平区",
  "value": "210904" },

{
  "name": "清河门区",
  "value": "210905" },

{
  "name": "细河区",
  "value": "210911" },

{
  "name": "阜新蒙古族自治县",
  "value": "210921" },

{
  "name": "彰武县",
  "value": "210922" }],


[
{
  "name": "白塔区",
  "value": "211002" },

{
  "name": "文圣区",
  "value": "211003" },

{
  "name": "宏伟区",
  "value": "211004" },

{
  "name": "弓长岭区",
  "value": "211005" },

{
  "name": "太子河区",
  "value": "211011" },

{
  "name": "辽阳县",
  "value": "211021" },

{
  "name": "灯塔市",
  "value": "211081" }],


[
{
  "name": "双台子区",
  "value": "211102" },

{
  "name": "兴隆台区",
  "value": "211103" },

{
  "name": "大洼县",
  "value": "211121" },

{
  "name": "盘山县",
  "value": "211122" }],


[
{
  "name": "银州区",
  "value": "211202" },

{
  "name": "清河区",
  "value": "211204" },

{
  "name": "铁岭县",
  "value": "211221" },

{
  "name": "西丰县",
  "value": "211223" },

{
  "name": "昌图县",
  "value": "211224" },

{
  "name": "调兵山市",
  "value": "211281" },

{
  "name": "开原市",
  "value": "211282" }],


[
{
  "name": "双塔区",
  "value": "211302" },

{
  "name": "龙城区",
  "value": "211303" },

{
  "name": "朝阳县",
  "value": "211321" },

{
  "name": "建平县",
  "value": "211322" },

{
  "name": "喀喇沁左翼蒙古族自治县",
  "value": "211324" },

{
  "name": "北票市",
  "value": "211381" },

{
  "name": "凌源市",
  "value": "211382" }],


[
{
  "name": "连山区",
  "value": "211402" },

{
  "name": "龙港区",
  "value": "211403" },

{
  "name": "南票区",
  "value": "211404" },

{
  "name": "绥中县",
  "value": "211421" },

{
  "name": "建昌县",
  "value": "211422" },

{
  "name": "兴城市",
  "value": "211481" }]],



[
[
{
  "name": "南关区",
  "value": "220102" },

{
  "name": "宽城区",
  "value": "220103" },

{
  "name": "朝阳区",
  "value": "220104" },

{
  "name": "二道区",
  "value": "220105" },

{
  "name": "绿园区",
  "value": "220106" },

{
  "name": "双阳区",
  "value": "220112" },

{
  "name": "农安县",
  "value": "220122" },

{
  "name": "九台市",
  "value": "220181" },

{
  "name": "榆树市",
  "value": "220182" },

{
  "name": "德惠市",
  "value": "220183" },

{
  "name": "净月经济开发区",
  "value": "222439" },

{
  "name": "高新技术产业开发区",
  "value": "222440" },

{
  "name": "经济技术开发区",
  "value": "222441" },

{
  "name": "汽车产业开发区",
  "value": "222442" }],


[
{
  "name": "昌邑区",
  "value": "220202" },

{
  "name": "龙潭区",
  "value": "220203" },

{
  "name": "船营区",
  "value": "220204" },

{
  "name": "丰满区",
  "value": "220211" },

{
  "name": "永吉县",
  "value": "220221" },

{
  "name": "蛟河市",
  "value": "220281" },

{
  "name": "桦甸市",
  "value": "220282" },

{
  "name": "舒兰市",
  "value": "220283" },

{
  "name": "磐石市",
  "value": "220284" }],


[
{
  "name": "铁西区",
  "value": "220302" },

{
  "name": "铁东区",
  "value": "220303" },

{
  "name": "梨树县",
  "value": "220322" },

{
  "name": "伊通满族自治县",
  "value": "220323" },

{
  "name": "公主岭市",
  "value": "220381" },

{
  "name": "双辽市",
  "value": "220382" }],


[
{
  "name": "龙山区",
  "value": "220402" },

{
  "name": "西安区",
  "value": "220403" },

{
  "name": "东丰县",
  "value": "220421" },

{
  "name": "东辽县",
  "value": "220422" }],


[
{
  "name": "东昌区",
  "value": "220502" },

{
  "name": "二道江区",
  "value": "220503" },

{
  "name": "通化县",
  "value": "220521" },

{
  "name": "辉南县",
  "value": "220523" },

{
  "name": "柳河县",
  "value": "220524" },

{
  "name": "梅河口市",
  "value": "220581" },

{
  "name": "集安市",
  "value": "220582" }],


[
{
  "name": "浑江区",
  "value": "220602" },

{
  "name": "江源区",
  "value": "220603" },

{
  "name": "抚松县",
  "value": "220621" },

{
  "name": "靖宇县",
  "value": "220622" },

{
  "name": "长白朝鲜族自治县",
  "value": "220623" },

{
  "name": "江源区",
  "value": "220625" },

{
  "name": "临江市",
  "value": "220681" }],


[
{
  "name": "宁江区",
  "value": "220702" },

{
  "name": "前郭尔罗斯蒙古族自治县",
  "value": "220721" },

{
  "name": "长岭县",
  "value": "220722" },

{
  "name": "乾安县",
  "value": "220723" },

{
  "name": "扶余市",
  "value": "220724" }],


[
{
  "name": "洮北区",
  "value": "220802" },

{
  "name": "镇赉县",
  "value": "220821" },

{
  "name": "通榆县",
  "value": "220822" },

{
  "name": "洮南市",
  "value": "220881" },

{
  "name": "大安市",
  "value": "220882" }],


[
{
  "name": "延吉市",
  "value": "222401" },

{
  "name": "图们市",
  "value": "222402" },

{
  "name": "敦化市",
  "value": "222403" },

{
  "name": "珲春市",
  "value": "222404" },

{
  "name": "龙井市",
  "value": "222405" },

{
  "name": "和龙市",
  "value": "222406" },

{
  "name": "汪清县",
  "value": "222424" },

{
  "name": "安图县",
  "value": "222426" }]],



[
[
{
  "name": "道里区",
  "value": "230102" },

{
  "name": "南岗区",
  "value": "230103" },

{
  "name": "道外区",
  "value": "230104" },

{
  "name": "香坊区",
  "value": "230106" },

{
  "name": "动力区",
  "value": "230107" },

{
  "name": "平房区",
  "value": "230108" },

{
  "name": "松北区",
  "value": "230109" },

{
  "name": "呼兰区",
  "value": "230111" },

{
  "name": "依兰县",
  "value": "230123" },

{
  "name": "方正县",
  "value": "230124" },

{
  "name": "宾县",
  "value": "230125" },

{
  "name": "巴彦县",
  "value": "230126" },

{
  "name": "木兰县",
  "value": "230127" },

{
  "name": "通河县",
  "value": "230128" },

{
  "name": "延寿县",
  "value": "230129" },

{
  "name": "阿城区",
  "value": "230181" },

{
  "name": "双城市",
  "value": "230182" },

{
  "name": "尚志市",
  "value": "230183" },

{
  "name": "五常市",
  "value": "230184" }],


[
{
  "name": "龙沙区",
  "value": "230202" },

{
  "name": "建华区",
  "value": "230203" },

{
  "name": "铁锋区",
  "value": "230204" },

{
  "name": "昂昂溪区",
  "value": "230205" },

{
  "name": "富拉尔基区",
  "value": "230206" },

{
  "name": "碾子山区",
  "value": "230207" },

{
  "name": "梅里斯达斡尔族区",
  "value": "230208" },

{
  "name": "龙江县",
  "value": "230221" },

{
  "name": "依安县",
  "value": "230223" },

{
  "name": "泰来县",
  "value": "230224" },

{
  "name": "甘南县",
  "value": "230225" },

{
  "name": "富裕县",
  "value": "230227" },

{
  "name": "克山县",
  "value": "230229" },

{
  "name": "克东县",
  "value": "230230" },

{
  "name": "拜泉县",
  "value": "230231" },

{
  "name": "讷河市",
  "value": "230281" }],


[
{
  "name": "鸡冠区",
  "value": "230302" },

{
  "name": "恒山区",
  "value": "230303" },

{
  "name": "滴道区",
  "value": "230304" },

{
  "name": "梨树区",
  "value": "230305" },

{
  "name": "城子河区",
  "value": "230306" },

{
  "name": "麻山区",
  "value": "230307" },

{
  "name": "鸡东县",
  "value": "230321" },

{
  "name": "虎林市",
  "value": "230381" },

{
  "name": "密山市",
  "value": "230382" },

{
  "name": "桥北开发区",
  "value": "230383" }],


[
{
  "name": "向阳区",
  "value": "230402" },

{
  "name": "工农区",
  "value": "230403" },

{
  "name": "南山区",
  "value": "230404" },

{
  "name": "兴安区",
  "value": "230405" },

{
  "name": "东山区",
  "value": "230406" },

{
  "name": "兴山区",
  "value": "230407" },

{
  "name": "萝北县",
  "value": "230421" },

{
  "name": "绥滨县",
  "value": "230422" }],


[
{
  "name": "尖山区",
  "value": "230502" },

{
  "name": "岭东区",
  "value": "230503" },

{
  "name": "四方台区",
  "value": "230505" },

{
  "name": "宝山区",
  "value": "230506" },

{
  "name": "集贤县",
  "value": "230521" },

{
  "name": "友谊县",
  "value": "230522" },

{
  "name": "宝清县",
  "value": "230523" },

{
  "name": "饶河县",
  "value": "230524" }],


[
{
  "name": "萨尔图区",
  "value": "230602" },

{
  "name": "龙凤区",
  "value": "230603" },

{
  "name": "让胡路区",
  "value": "230604" },

{
  "name": "红岗区",
  "value": "230605" },

{
  "name": "大同区",
  "value": "230606" },

{
  "name": "新村开发区",
  "value": "230607" },

{
  "name": "肇州县",
  "value": "230621" },

{
  "name": "肇源县",
  "value": "230622" },

{
  "name": "林甸县",
  "value": "230623" },

{
  "name": "杜尔伯特蒙古族自治县",
  "value": "230624" }],


[
{
  "name": "伊春区",
  "value": "230702" },

{
  "name": "南岔区",
  "value": "230703" },

{
  "name": "友好区",
  "value": "230704" },

{
  "name": "西林区",
  "value": "230705" },

{
  "name": "翠峦区",
  "value": "230706" },

{
  "name": "新青区",
  "value": "230707" },

{
  "name": "美溪区",
  "value": "230708" },

{
  "name": "金山屯区",
  "value": "230709" },

{
  "name": "五营区",
  "value": "230710" },

{
  "name": "乌马河区",
  "value": "230711" },

{
  "name": "汤旺河区",
  "value": "230712" },

{
  "name": "带岭区",
  "value": "230713" },

{
  "name": "乌伊岭区",
  "value": "230714" },

{
  "name": "红星区",
  "value": "230715" },

{
  "name": "上甘岭区",
  "value": "230716" },

{
  "name": "嘉荫县",
  "value": "230722" },

{
  "name": "铁力市",
  "value": "230781" }],


[
{
  "name": "向阳区",
  "value": "230803" },

{
  "name": "前进区",
  "value": "230804" },

{
  "name": "东风区",
  "value": "230805" },

{
  "name": "郊区",
  "value": "230811" },

{
  "name": "桦南县",
  "value": "230822" },

{
  "name": "桦川县",
  "value": "230826" },

{
  "name": "汤原县",
  "value": "230828" },

{
  "name": "抚远县",
  "value": "230833" },

{
  "name": "同江市",
  "value": "230881" },

{
  "name": "富锦市",
  "value": "230882" }],


[
{
  "name": "新兴区",
  "value": "230902" },

{
  "name": "桃山区",
  "value": "230903" },

{
  "name": "茄子河区",
  "value": "230904" },

{
  "name": "勃利县",
  "value": "230921" }],


[
{
  "name": "东安区",
  "value": "231002" },

{
  "name": "爱民区",
  "value": "231003" },

{
  "name": "阳明区",
  "value": "231004" },

{
  "name": "西安区",
  "value": "231005" },

{
  "name": "东宁县",
  "value": "231024" },

{
  "name": "林口县",
  "value": "231025" },

{
  "name": "绥芬河市",
  "value": "231081" },

{
  "name": "海林市",
  "value": "231083" },

{
  "name": "宁安市",
  "value": "231084" },

{
  "name": "穆棱市",
  "value": "231085" }],


[
{
  "name": "爱辉区",
  "value": "231102" },

{
  "name": "嫩江县",
  "value": "231121" },

{
  "name": "逊克县",
  "value": "231123" },

{
  "name": "孙吴县",
  "value": "231124" },

{
  "name": "北安市",
  "value": "231181" },

{
  "name": "五大连池市",
  "value": "231182" }],


[
{
  "name": "北林区",
  "value": "231202" },

{
  "name": "望奎县",
  "value": "231221" },

{
  "name": "兰西县",
  "value": "231222" },

{
  "name": "青冈县",
  "value": "231223" },

{
  "name": "庆安县",
  "value": "231224" },

{
  "name": "明水县",
  "value": "231225" },

{
  "name": "绥棱县",
  "value": "231226" },

{
  "name": "安达市",
  "value": "231281" },

{
  "name": "肇东市",
  "value": "231282" },

{
  "name": "海伦市",
  "value": "231283" }],


[
{
  "name": "呼玛县",
  "value": "232721" },

{
  "name": "塔河县",
  "value": "232722" },

{
  "name": "漠河县",
  "value": "232723" },

{
  "name": "加格达奇区",
  "value": "232740" },

{
  "name": "松岭区",
  "value": "232741" },

{
  "name": "新林区",
  "value": "232742" },

{
  "name": "呼中区",
  "value": "232743" }]],



[
[
{
  "name": "黄浦区",
  "value": "310101" },

{
  "name": "卢湾区",
  "value": "310103" },

{
  "name": "徐汇区",
  "value": "310104" },

{
  "name": "长宁区",
  "value": "310105" },

{
  "name": "静安区",
  "value": "310106" },

{
  "name": "普陀区",
  "value": "310107" },

{
  "name": "闸北区",
  "value": "310108" },

{
  "name": "虹口区",
  "value": "310109" },

{
  "name": "杨浦区",
  "value": "310110" },

{
  "name": "闵行区",
  "value": "310112" },

{
  "name": "宝山区",
  "value": "310113" },

{
  "name": "嘉定区",
  "value": "310114" },

{
  "name": "浦东新区",
  "value": "310115" },

{
  "name": "金山区",
  "value": "310116" },

{
  "name": "松江区",
  "value": "310117" },

{
  "name": "青浦区",
  "value": "310118" },

{
  "name": "南汇区",
  "value": "310119" },

{
  "name": "奉贤区",
  "value": "310120" },

{
  "name": "崇明县",
  "value": "310230" }]],



[
[
{
  "name": "玄武区",
  "value": "320102" },

{
  "name": "白下区",
  "value": "320103" },

{
  "name": "秦淮区",
  "value": "320104" },

{
  "name": "建邺区",
  "value": "320105" },

{
  "name": "鼓楼区",
  "value": "320106" },

{
  "name": "下关区",
  "value": "320107" },

{
  "name": "浦口区",
  "value": "320111" },

{
  "name": "栖霞区",
  "value": "320113" },

{
  "name": "雨花台区",
  "value": "320114" },

{
  "name": "江宁区",
  "value": "320115" },

{
  "name": "六合区",
  "value": "320116" },

{
  "name": "溧水区",
  "value": "320124" },

{
  "name": "高淳区",
  "value": "320125" }],


[
{
  "name": "崇安区",
  "value": "320202" },

{
  "name": "南长区",
  "value": "320203" },

{
  "name": "北塘区",
  "value": "320204" },

{
  "name": "锡山区",
  "value": "320205" },

{
  "name": "惠山区",
  "value": "320206" },

{
  "name": "滨湖区",
  "value": "320211" },

{
  "name": "宜兴市",
  "value": "320282" },

{
  "name": "新区",
  "value": "321325" }],


[
{
  "name": "江阴市",
  "value": "320281" }],


[
{
  "name": "云龙区",
  "value": "320302" },

{
  "name": "鼓楼区",
  "value": "320303" },

{
  "name": "九里区",
  "value": "320304" },

{
  "name": "泉山区",
  "value": "320305" },

{
  "name": "铜山区",
  "value": "320311" },

{
  "name": "贾汪区",
  "value": "320321" },

{
  "name": "丰县",
  "value": "320322" },

{
  "name": "沛县",
  "value": "320323" },

{
  "name": "睢宁县",
  "value": "320324" },

{
  "name": "新沂市",
  "value": "320381" },

{
  "name": "邳州市",
  "value": "320382" }],


[
{
  "name": "天宁区",
  "value": "320402" },

{
  "name": "钟楼区",
  "value": "320404" },

{
  "name": "戚墅堰区",
  "value": "320405" },

{
  "name": "新北区",
  "value": "320411" },

{
  "name": "武进区",
  "value": "320412" },

{
  "name": "溧阳市",
  "value": "320481" },

{
  "name": "金坛市",
  "value": "320482" }],


[
{
  "name": "沧浪区",
  "value": "320502" },

{
  "name": "平江区",
  "value": "320503" },

{
  "name": "金阊区",
  "value": "320504" },

{
  "name": "虎丘区",
  "value": "320505" },

{
  "name": "吴中区",
  "value": "320506" },

{
  "name": "相城区",
  "value": "320507" },

{
  "name": "姑苏区",
  "value": "320508" },

{
  "name": "常熟市",
  "value": "320581" },

{
  "name": "张家港市",
  "value": "320582" },

{
  "name": "昆山市",
  "value": "320583" },

{
  "name": "吴江区",
  "value": "320584" },

{
  "name": "太仓市",
  "value": "320585" },

{
  "name": "工业园区",
  "value": "321341" },

{
  "name": "高新区",
  "value": "321344" }],


[
{
  "name": "崇川区",
  "value": "320602" },

{
  "name": "港闸区",
  "value": "320611" },

{
  "name": "海安县",
  "value": "320621" },

{
  "name": "如东县",
  "value": "320623" },

{
  "name": "启东市",
  "value": "320681" },

{
  "name": "如皋市",
  "value": "320682" },

{
  "name": "通州区",
  "value": "320683" },

{
  "name": "海门市",
  "value": "320684" },

{
  "name": "经济技术开发区",
  "value": "321342" }],


[
{
  "name": "连云区",
  "value": "320703" },

{
  "name": "新浦区",
  "value": "320705" },

{
  "name": "海州区",
  "value": "320706" },

{
  "name": "赣榆县",
  "value": "320721" },

{
  "name": "东海县",
  "value": "320722" },

{
  "name": "灌云县",
  "value": "320723" },

{
  "name": "灌南县",
  "value": "320724" }],


[
{
  "name": "清河区",
  "value": "320802" },

{
  "name": "淮安区",
  "value": "320803" },

{
  "name": "淮阴区",
  "value": "320804" },

{
  "name": "清浦区",
  "value": "320811" },

{
  "name": "涟水县",
  "value": "320826" },

{
  "name": "洪泽县",
  "value": "320829" },

{
  "name": "盱眙县",
  "value": "320830" },

{
  "name": "金湖县",
  "value": "320831" }],


[
{
  "name": "亭湖区",
  "value": "320902" },

{
  "name": "盐都区",
  "value": "320903" },

{
  "name": "响水县",
  "value": "320921" },

{
  "name": "滨海县",
  "value": "320922" },

{
  "name": "阜宁县",
  "value": "320923" },

{
  "name": "射阳县",
  "value": "320924" },

{
  "name": "建湖县",
  "value": "320925" },

{
  "name": "东台市",
  "value": "320981" },

{
  "name": "大丰市",
  "value": "320982" }],


[
{
  "name": "广陵区",
  "value": "321002" },

{
  "name": "邗江区",
  "value": "321003" },

{
  "name": "江都区",
  "value": "321012" },

{
  "name": "宝应县",
  "value": "321023" },

{
  "name": "仪征市",
  "value": "321081" },

{
  "name": "高邮市",
  "value": "321084" },

{
  "name": "江都区",
  "value": "321088" },

{
  "name": "维扬区",
  "value": "321343" },

{
  "name": "经济开发区",
  "value": "321359" }],


[
{
  "name": "京口区",
  "value": "321102" },

{
  "name": "润州区",
  "value": "321111" },

{
  "name": "丹徒区",
  "value": "321112" },

{
  "name": "丹阳市",
  "value": "321181" },

{
  "name": "扬中市",
  "value": "321182" },

{
  "name": "句容市",
  "value": "321183" },

{
  "name": "新区",
  "value": "321360" }],


[
{
  "name": "海陵区",
  "value": "321202" },

{
  "name": "高港区",
  "value": "321203" },

{
  "name": "兴化市",
  "value": "321281" },

{
  "name": "靖江市",
  "value": "321282" },

{
  "name": "泰兴市",
  "value": "321283" },

{
  "name": "姜堰区",
  "value": "321284" }],


[
{
  "name": "宿城区",
  "value": "321302" },

{
  "name": "宿豫区",
  "value": "321311" },

{
  "name": "沭阳县",
  "value": "321322" },

{
  "name": "泗阳县",
  "value": "321323" },

{
  "name": "泗洪县",
  "value": "321324" }]],



[
[
{
  "name": "上城区",
  "value": "330102" },

{
  "name": "下城区",
  "value": "330103" },

{
  "name": "江干区",
  "value": "330104" },

{
  "name": "拱墅区",
  "value": "330105" },

{
  "name": "西湖区",
  "value": "330106" },

{
  "name": "滨江区",
  "value": "330108" },

{
  "name": "萧山区",
  "value": "330109" },

{
  "name": "余杭区",
  "value": "330110" },

{
  "name": "桐庐县",
  "value": "330122" },

{
  "name": "淳安县",
  "value": "330127" },

{
  "name": "建德市",
  "value": "330182" },

{
  "name": "富阳市",
  "value": "330183" },

{
  "name": "临安市",
  "value": "330185" }],


[
{
  "name": "海曙区",
  "value": "330203" },

{
  "name": "江东区",
  "value": "330204" },

{
  "name": "江北区",
  "value": "330205" },

{
  "name": "北仑区",
  "value": "330206" },

{
  "name": "镇海区",
  "value": "330211" },

{
  "name": "鄞州区",
  "value": "330212" },

{
  "name": "象山县",
  "value": "330225" },

{
  "name": "宁海县",
  "value": "330226" },

{
  "name": "余姚市",
  "value": "330281" },

{
  "name": "慈溪市",
  "value": "330282" },

{
  "name": "奉化市",
  "value": "330283" },

{
  "name": "国家高新区",
  "value": "330284" }],


[
{
  "name": "鹿城区",
  "value": "330302" },

{
  "name": "龙湾区",
  "value": "330303" },

{
  "name": "瓯海区",
  "value": "330304" },

{
  "name": "洞头县",
  "value": "330322" },

{
  "name": "永嘉县",
  "value": "330324" },

{
  "name": "平阳县",
  "value": "330326" },

{
  "name": "苍南县",
  "value": "330327" },

{
  "name": "文成县",
  "value": "330328" },

{
  "name": "泰顺县",
  "value": "330329" },

{
  "name": "瑞安市",
  "value": "330381" },

{
  "name": "乐清市",
  "value": "330382" }],


[
{
  "name": "秀洲区",
  "value": "330411" },

{
  "name": "嘉善县",
  "value": "330421" },

{
  "name": "海盐县",
  "value": "330424" },

{
  "name": "海宁市",
  "value": "330481" },

{
  "name": "平湖市",
  "value": "330482" },

{
  "name": "桐乡市",
  "value": "330483" },

{
  "name": "南湖区",
  "value": "331198" }],


[
{
  "name": "吴兴区",
  "value": "330502" },

{
  "name": "南浔区",
  "value": "330503" },

{
  "name": "德清县",
  "value": "330521" },

{
  "name": "长兴县",
  "value": "330522" },

{
  "name": "安吉县",
  "value": "330523" }],


[
{
  "name": "越城区",
  "value": "330602" },

{
  "name": "柯桥区",
  "value": "330603" },

{
  "name": "绍兴县",
  "value": "330621" },

{
  "name": "新昌县",
  "value": "330624" },

{
  "name": "诸暨市",
  "value": "330681" },

{
  "name": "上虞区",
  "value": "330682" },

{
  "name": "嵊州市",
  "value": "330683" }],


[
{
  "name": "婺城区",
  "value": "330702" },

{
  "name": "金东区",
  "value": "330703" },

{
  "name": "武义县",
  "value": "330723" },

{
  "name": "浦江县",
  "value": "330726" },

{
  "name": "磐安县",
  "value": "330727" },

{
  "name": "兰溪市",
  "value": "330781" },

{
  "name": "义乌市",
  "value": "330782" },

{
  "name": "东阳市",
  "value": "330783" },

{
  "name": "永康市",
  "value": "330784" }],


[
{
  "name": "柯城区",
  "value": "330802" },

{
  "name": "衢江区",
  "value": "330803" },

{
  "name": "常山县",
  "value": "330822" },

{
  "name": "开化县",
  "value": "330824" },

{
  "name": "龙游县",
  "value": "330825" },

{
  "name": "江山市",
  "value": "330881" }],


[
{
  "name": "定海区",
  "value": "330902" },

{
  "name": "普陀区",
  "value": "330903" },

{
  "name": "岱山县",
  "value": "330921" },

{
  "name": "嵊泗县",
  "value": "330922" }],


[
{
  "name": "椒江区",
  "value": "331002" },

{
  "name": "路桥区",
  "value": "331003" },

{
  "name": "黄岩区",
  "value": "331004" },

{
  "name": "玉环县",
  "value": "331021" },

{
  "name": "三门县",
  "value": "331022" },

{
  "name": "天台县",
  "value": "331023" },

{
  "name": "仙居县",
  "value": "331024" },

{
  "name": "温岭市",
  "value": "331081" },

{
  "name": "临海市",
  "value": "331082" }],


[
{
  "name": "莲都区",
  "value": "331102" },

{
  "name": "青田县",
  "value": "331121" },

{
  "name": "缙云县",
  "value": "331122" },

{
  "name": "遂昌县",
  "value": "331123" },

{
  "name": "松阳县",
  "value": "331124" },

{
  "name": "云和县",
  "value": "331125" },

{
  "name": "庆元县",
  "value": "331126" },

{
  "name": "景宁畲族自治县",
  "value": "331127" },

{
  "name": "龙泉市",
  "value": "331181" }]],



[
[
{
  "name": "瑶海区",
  "value": "340102" },

{
  "name": "庐阳区",
  "value": "340103" },

{
  "name": "蜀山区",
  "value": "340104" },

{
  "name": "包河区",
  "value": "340111" },

{
  "name": "长丰县",
  "value": "340121" },

{
  "name": "肥东县",
  "value": "340122" },

{
  "name": "肥西县",
  "value": "340123" },

{
  "name": "庐江县",
  "value": "340124" },

{
  "name": "巢湖市",
  "value": "340181" },

{
  "name": "经济技术开发区",
  "value": "341913" },

{
  "name": "新站试验区",
  "value": "341914" },

{
  "name": "政务文化新区",
  "value": "341915" },

{
  "name": "高新技术产业开发区",
  "value": "341916" }],


[
{
  "name": "镜湖区",
  "value": "340202" },

{
  "name": "鸠江区",
  "value": "340207" },

{
  "name": "芜湖县",
  "value": "340221" },

{
  "name": "繁昌县",
  "value": "340222" },

{
  "name": "南陵县",
  "value": "340223" },

{
  "name": "无为县",
  "value": "340225" },

{
  "name": "弋江区",
  "value": "341908" },

{
  "name": "三山区",
  "value": "341910" }],


[
{
  "name": "龙子湖区",
  "value": "340302" },

{
  "name": "蚌山区",
  "value": "340303" },

{
  "name": "禹会区",
  "value": "340304" },

{
  "name": "高新技术产业开发区",
  "value": "340305" },

{
  "name": "淮上区",
  "value": "340311" },

{
  "name": "怀远县",
  "value": "340321" },

{
  "name": "五河县",
  "value": "340322" },

{
  "name": "固镇县",
  "value": "340323" }],


[
{
  "name": "大通区",
  "value": "340402" },

{
  "name": "田家庵区",
  "value": "340403" },

{
  "name": "谢家集区",
  "value": "340404" },

{
  "name": "八公山区",
  "value": "340405" },

{
  "name": "潘集区",
  "value": "340406" },

{
  "name": "凤台县",
  "value": "340421" }],


[
{
  "name": "雨山区",
  "value": "340502" },

{
  "name": "花山区",
  "value": "340503" },

{
  "name": "金家庄区",
  "value": "340504" },

{
  "name": "含山县",
  "value": "340505" },

{
  "name": "博望区",
  "value": "340506" },

{
  "name": "当涂县",
  "value": "340521" },

{
  "name": "含山县",
  "value": "340522" },

{
  "name": "和县",
  "value": "340523" },

{
  "name": "经济技术开发区",
  "value": "341909" }],


[
{
  "name": "杜集区",
  "value": "340602" },

{
  "name": "相山区",
  "value": "340603" },

{
  "name": "烈山区",
  "value": "340604" },

{
  "name": "濉溪县",
  "value": "340621" }],


[
{
  "name": "铜官山区",
  "value": "340702" },

{
  "name": "狮子山区",
  "value": "340703" },

{
  "name": "郊区",
  "value": "340711" },

{
  "name": "铜陵县",
  "value": "340721" }],


[
{
  "name": "迎江区",
  "value": "340802" },

{
  "name": "大观区",
  "value": "340803" },

{
  "name": "怀宁县",
  "value": "340822" },

{
  "name": "枞阳县",
  "value": "340823" },

{
  "name": "潜山县",
  "value": "340824" },

{
  "name": "太湖县",
  "value": "340825" },

{
  "name": "宿松县",
  "value": "340826" },

{
  "name": "望江县",
  "value": "340827" },

{
  "name": "岳西县",
  "value": "340828" },

{
  "name": "桐城市",
  "value": "340881" },

{
  "name": "宜秀区",
  "value": "341911" }],


[
{
  "name": "屯溪区",
  "value": "341002" },

{
  "name": "黄山区",
  "value": "341003" },

{
  "name": "徽州区",
  "value": "341004" },

{
  "name": "歙县",
  "value": "341021" },

{
  "name": "休宁县",
  "value": "341022" },

{
  "name": "黟县",
  "value": "341023" },

{
  "name": "祁门县",
  "value": "341024" }],


[
{
  "name": "琅琊区",
  "value": "341102" },

{
  "name": "南谯区",
  "value": "341103" },

{
  "name": "来安县",
  "value": "341122" },

{
  "name": "全椒县",
  "value": "341124" },

{
  "name": "定远县",
  "value": "341125" },

{
  "name": "凤阳县",
  "value": "341126" },

{
  "name": "天长市",
  "value": "341181" },

{
  "name": "明光市",
  "value": "341182" }],


[
{
  "name": "颍州区",
  "value": "341202" },

{
  "name": "颍东区",
  "value": "341203" },

{
  "name": "颍泉区",
  "value": "341204" },

{
  "name": "临泉县",
  "value": "341221" },

{
  "name": "太和县",
  "value": "341222" },

{
  "name": "阜南县",
  "value": "341225" },

{
  "name": "颍上县",
  "value": "341226" },

{
  "name": "界首市",
  "value": "341282" },

{
  "name": "经济开发区",
  "value": "341912" }],


[
{
  "name": "埇桥区",
  "value": "341302" },

{
  "name": "砀山县",
  "value": "341321" },

{
  "name": "萧县",
  "value": "341322" },

{
  "name": "灵璧县",
  "value": "341323" },

{
  "name": "泗县",
  "value": "341324" }],


[
{
  "name": "居巢区",
  "value": "341402" },

{
  "name": "庐江县",
  "value": "341421" },

{
  "name": "无为县",
  "value": "341422" },

{
  "name": "含山县",
  "value": "341423" },

{
  "name": "和县",
  "value": "341424" }],


[
{
  "name": "金安区",
  "value": "341502" },

{
  "name": "裕安区",
  "value": "341503" },

{
  "name": "叶集试验区",
  "value": "341504" },

{
  "name": "寿县",
  "value": "341521" },

{
  "name": "霍邱县",
  "value": "341522" },

{
  "name": "舒城县",
  "value": "341523" },

{
  "name": "金寨县",
  "value": "341524" },

{
  "name": "霍山县",
  "value": "341525" }],


[
{
  "name": "谯城区",
  "value": "341602" },

{
  "name": "涡阳县",
  "value": "341621" },

{
  "name": "蒙城县",
  "value": "341622" },

{
  "name": "利辛县",
  "value": "341623" }],


[
{
  "name": "贵池区",
  "value": "341702" },

{
  "name": "东至县",
  "value": "341721" },

{
  "name": "石台县",
  "value": "341722" },

{
  "name": "青阳县",
  "value": "341723" }],


[
{
  "name": "宣州区",
  "value": "341802" },

{
  "name": "郎溪县",
  "value": "341821" },

{
  "name": "广德县",
  "value": "341822" },

{
  "name": "泾县",
  "value": "341823" },

{
  "name": "绩溪县",
  "value": "341824" },

{
  "name": "旌德县",
  "value": "341825" },

{
  "name": "宁国市",
  "value": "341881" }]],



[
[
{
  "name": "鼓楼区",
  "value": "350102" },

{
  "name": "台江区",
  "value": "350103" },

{
  "name": "仓山区",
  "value": "350104" },

{
  "name": "马尾区",
  "value": "350105" },

{
  "name": "晋安区",
  "value": "350111" },

{
  "name": "闽侯县",
  "value": "350121" },

{
  "name": "连江县",
  "value": "350122" },

{
  "name": "罗源县",
  "value": "350123" },

{
  "name": "闽清县",
  "value": "350124" },

{
  "name": "永泰县",
  "value": "350125" },

{
  "name": "平潭县",
  "value": "350128" },

{
  "name": "福清市",
  "value": "350181" },

{
  "name": "长乐市",
  "value": "350182" }],


[
{
  "name": "思明区",
  "value": "350203" },

{
  "name": "海沧区",
  "value": "350205" },

{
  "name": "湖里区",
  "value": "350206" },

{
  "name": "集美区",
  "value": "350211" },

{
  "name": "同安区",
  "value": "350212" },

{
  "name": "翔安区",
  "value": "350213" },

{
  "name": "鼓浪屿区",
  "value": "350983" },

{
  "name": "象屿保税区",
  "value": "350999" },

{
  "name": "火炬高新区",
  "value": "351000" }],


[
{
  "name": "城厢区",
  "value": "350302" },

{
  "name": "涵江区",
  "value": "350303" },

{
  "name": "荔城区",
  "value": "350304" },

{
  "name": "秀屿区",
  "value": "350305" },

{
  "name": "仙游县",
  "value": "350322" }],


[
{
  "name": "梅列区",
  "value": "350402" },

{
  "name": "三元区",
  "value": "350403" },

{
  "name": "明溪县",
  "value": "350421" },

{
  "name": "清流县",
  "value": "350423" },

{
  "name": "宁化县",
  "value": "350424" },

{
  "name": "大田县",
  "value": "350425" },

{
  "name": "尤溪县",
  "value": "350426" },

{
  "name": "沙县",
  "value": "350427" },

{
  "name": "将乐县",
  "value": "350428" },

{
  "name": "泰宁县",
  "value": "350429" },

{
  "name": "建宁县",
  "value": "350430" },

{
  "name": "永安市",
  "value": "350481" }],


[
{
  "name": "鲤城区",
  "value": "350502" },

{
  "name": "丰泽区",
  "value": "350503" },

{
  "name": "洛江区",
  "value": "350504" },

{
  "name": "泉港区",
  "value": "350505" },

{
  "name": "惠安县",
  "value": "350521" },

{
  "name": "安溪县",
  "value": "350524" },

{
  "name": "永春县",
  "value": "350525" },

{
  "name": "德化县",
  "value": "350526" },

{
  "name": "金门县",
  "value": "350527" },

{
  "name": "石狮市",
  "value": "350581" },

{
  "name": "晋江市",
  "value": "350582" },

{
  "name": "南安市",
  "value": "350583" },

{
  "name": "经济技术开发区",
  "value": "351001" }],


[
{
  "name": "芗城区",
  "value": "350602" },

{
  "name": "龙文区",
  "value": "350603" },

{
  "name": "云霄县",
  "value": "350622" },

{
  "name": "漳浦县",
  "value": "350623" },

{
  "name": "诏安县",
  "value": "350624" },

{
  "name": "长泰县",
  "value": "350625" },

{
  "name": "东山县",
  "value": "350626" },

{
  "name": "南靖县",
  "value": "350627" },

{
  "name": "平和县",
  "value": "350628" },

{
  "name": "华安县",
  "value": "350629" },

{
  "name": "龙海市",
  "value": "350681" }],


[
{
  "name": "延平区",
  "value": "350702" },

{
  "name": "顺昌县",
  "value": "350721" },

{
  "name": "浦城县",
  "value": "350722" },

{
  "name": "光泽县",
  "value": "350723" },

{
  "name": "松溪县",
  "value": "350724" },

{
  "name": "政和县",
  "value": "350725" },

{
  "name": "邵武市",
  "value": "350781" },

{
  "name": "武夷山市",
  "value": "350782" },

{
  "name": "建瓯市",
  "value": "350783" },

{
  "name": "建阳市",
  "value": "350784" }],


[
{
  "name": "新罗区",
  "value": "350802" },

{
  "name": "长汀县",
  "value": "350821" },

{
  "name": "永定县",
  "value": "350822" },

{
  "name": "上杭县",
  "value": "350823" },

{
  "name": "武平县",
  "value": "350824" },

{
  "name": "连城县",
  "value": "350825" },

{
  "name": "漳平市",
  "value": "350881" }],


[
{
  "name": "蕉城区",
  "value": "350902" },

{
  "name": "霞浦县",
  "value": "350921" },

{
  "name": "古田县",
  "value": "350922" },

{
  "name": "屏南县",
  "value": "350923" },

{
  "name": "寿宁县",
  "value": "350924" },

{
  "name": "周宁县",
  "value": "350925" },

{
  "name": "柘荣县",
  "value": "350926" },

{
  "name": "福安市",
  "value": "350981" },

{
  "name": "福鼎市",
  "value": "350982" }]],



[
[
{
  "name": "东湖区",
  "value": "360102" },

{
  "name": "西湖区",
  "value": "360103" },

{
  "name": "青云谱区",
  "value": "360104" },

{
  "name": "湾里区",
  "value": "360105" },

{
  "name": "昌北区",
  "value": "360106" },

{
  "name": "青山湖区",
  "value": "360111" },

{
  "name": "南昌县",
  "value": "360121" },

{
  "name": "新建县",
  "value": "360122" },

{
  "name": "安义县",
  "value": "360123" },

{
  "name": "进贤县",
  "value": "360124" },

{
  "name": "经济技术开发区",
  "value": "361195" },

{
  "name": "红谷滩新区",
  "value": "361196" },

{
  "name": "高新技术产业开发区",
  "value": "361197" },

{
  "name": "桑海经济技术开发区",
  "value": "361198" },

{
  "name": "英雄经济开发区",
  "value": "361199" }],


[
{
  "name": "昌江区",
  "value": "360202" },

{
  "name": "珠山区",
  "value": "360203" },

{
  "name": "浮梁县",
  "value": "360222" },

{
  "name": "乐平市",
  "value": "360281" }],


[
{
  "name": "安源区",
  "value": "360302" },

{
  "name": "湘东区",
  "value": "360313" },

{
  "name": "莲花县",
  "value": "360321" },

{
  "name": "上栗县",
  "value": "360322" },

{
  "name": "芦溪县",
  "value": "360323" }],


[
{
  "name": "庐山区",
  "value": "360402" },

{
  "name": "浔阳区",
  "value": "360403" },

{
  "name": "九江县",
  "value": "360421" },

{
  "name": "武宁县",
  "value": "360423" },

{
  "name": "修水县",
  "value": "360424" },

{
  "name": "永修县",
  "value": "360425" },

{
  "name": "德安县",
  "value": "360426" },

{
  "name": "星子县",
  "value": "360427" },

{
  "name": "都昌县",
  "value": "360428" },

{
  "name": "湖口县",
  "value": "360429" },

{
  "name": "彭泽县",
  "value": "360430" },

{
  "name": "瑞昌市",
  "value": "360481" },

{
  "name": "共青城市",
  "value": "361200" }],


[
{
  "name": "渝水区",
  "value": "360502" },

{
  "name": "分宜县",
  "value": "360521" }],


[
{
  "name": "月湖区",
  "value": "360602" },

{
  "name": "余江县",
  "value": "360622" },

{
  "name": "贵溪市",
  "value": "360681" }],


[
{
  "name": "章贡区",
  "value": "360702" },

{
  "name": "赣县",
  "value": "360721" },

{
  "name": "信丰县",
  "value": "360722" },

{
  "name": "大余县",
  "value": "360723" },

{
  "name": "上犹县",
  "value": "360724" },

{
  "name": "崇义县",
  "value": "360725" },

{
  "name": "安远县",
  "value": "360726" },

{
  "name": "龙南县",
  "value": "360727" },

{
  "name": "定南县",
  "value": "360728" },

{
  "name": "全南县",
  "value": "360729" },

{
  "name": "宁都县",
  "value": "360730" },

{
  "name": "于都县",
  "value": "360731" },

{
  "name": "兴国县",
  "value": "360732" },

{
  "name": "会昌县",
  "value": "360733" },

{
  "name": "寻乌县",
  "value": "360734" },

{
  "name": "石城县",
  "value": "360735" },

{
  "name": "瑞金市",
  "value": "360781" },

{
  "name": "南康区",
  "value": "360782" },

{
  "name": "黄金经济开发区",
  "value": "360783" }],


[
{
  "name": "吉州区",
  "value": "360802" },

{
  "name": "青原区",
  "value": "360803" },

{
  "name": "吉安县",
  "value": "360821" },

{
  "name": "吉水县",
  "value": "360822" },

{
  "name": "峡江县",
  "value": "360823" },

{
  "name": "新干县",
  "value": "360824" },

{
  "name": "永丰县",
  "value": "360825" },

{
  "name": "泰和县",
  "value": "360826" },

{
  "name": "遂川县",
  "value": "360827" },

{
  "name": "万安县",
  "value": "360828" },

{
  "name": "安福县",
  "value": "360829" },

{
  "name": "永新县",
  "value": "360830" },

{
  "name": "井冈山市",
  "value": "360881" }],


[
{
  "name": "袁州区",
  "value": "360902" },

{
  "name": "奉新县",
  "value": "360921" },

{
  "name": "万载县",
  "value": "360922" },

{
  "name": "上高县",
  "value": "360923" },

{
  "name": "宜丰县",
  "value": "360924" },

{
  "name": "靖安县",
  "value": "360925" },

{
  "name": "铜鼓县",
  "value": "360926" },

{
  "name": "丰城市",
  "value": "360981" },

{
  "name": "樟树市",
  "value": "360982" },

{
  "name": "高安市",
  "value": "360983" }],


[
{
  "name": "临川区",
  "value": "361002" },

{
  "name": "南城县",
  "value": "361021" },

{
  "name": "黎川县",
  "value": "361022" },

{
  "name": "南丰县",
  "value": "361023" },

{
  "name": "崇仁县",
  "value": "361024" },

{
  "name": "乐安县",
  "value": "361025" },

{
  "name": "宜黄县",
  "value": "361026" },

{
  "name": "金溪县",
  "value": "361027" },

{
  "name": "资溪县",
  "value": "361028" },

{
  "name": "东乡县",
  "value": "361029" },

{
  "name": "广昌县",
  "value": "361030" }],


[
{
  "name": "信州区",
  "value": "361102" },

{
  "name": "上饶县",
  "value": "361121" },

{
  "name": "广丰县",
  "value": "361122" },

{
  "name": "玉山县",
  "value": "361123" },

{
  "name": "铅山县",
  "value": "361124" },

{
  "name": "横峰县",
  "value": "361125" },

{
  "name": "弋阳县",
  "value": "361126" },

{
  "name": "余干县",
  "value": "361127" },

{
  "name": "鄱阳县",
  "value": "361128" },

{
  "name": "万年县",
  "value": "361129" },

{
  "name": "婺源县",
  "value": "361130" },

{
  "name": "德兴市",
  "value": "361181" }]],



[
[
{
  "name": "历下区",
  "value": "370102" },

{
  "name": "市中区",
  "value": "370103" },

{
  "name": "槐荫区",
  "value": "370104" },

{
  "name": "天桥区",
  "value": "370105" },

{
  "name": "历城区",
  "value": "370112" },

{
  "name": "长清区",
  "value": "370113" },

{
  "name": "平阴县",
  "value": "370124" },

{
  "name": "济阳县",
  "value": "370125" },

{
  "name": "商河县",
  "value": "370126" },

{
  "name": "章丘市",
  "value": "370181" },

{
  "name": "高新区",
  "value": "371763" },

{
  "name": "经济开发区",
  "value": "371764" }],


[
{
  "name": "市南区",
  "value": "370202" },

{
  "name": "市北区",
  "value": "370203" },

{
  "name": "四方区",
  "value": "370205" },

{
  "name": "黄岛区",
  "value": "370211" },

{
  "name": "崂山区",
  "value": "370212" },

{
  "name": "李沧区",
  "value": "370213" },

{
  "name": "城阳区",
  "value": "370214" },

{
  "name": "开发区",
  "value": "370215" },

{
  "name": "胶州市",
  "value": "370281" },

{
  "name": "即墨市",
  "value": "370282" },

{
  "name": "平度市",
  "value": "370283" },

{
  "name": "胶南市",
  "value": "370284" },

{
  "name": "莱西市",
  "value": "370285" }],


[
{
  "name": "淄川区",
  "value": "370302" },

{
  "name": "张店区",
  "value": "370303" },

{
  "name": "博山区",
  "value": "370304" },

{
  "name": "临淄区",
  "value": "370305" },

{
  "name": "周村区",
  "value": "370306" },

{
  "name": "桓台县",
  "value": "370321" },

{
  "name": "高青县",
  "value": "370322" },

{
  "name": "沂源县",
  "value": "370323" },

{
  "name": "高新区",
  "value": "371762" }],


[
{
  "name": "市中区",
  "value": "370402" },

{
  "name": "薛城区",
  "value": "370403" },

{
  "name": "峄城区",
  "value": "370404" },

{
  "name": "台儿庄区",
  "value": "370405" },

{
  "name": "山亭区",
  "value": "370406" },

{
  "name": "滕州市",
  "value": "370481" }],


[
{
  "name": "东营区",
  "value": "370502" },

{
  "name": "河口区",
  "value": "370503" },

{
  "name": "垦利县",
  "value": "370521" },

{
  "name": "利津县",
  "value": "370522" },

{
  "name": "广饶县",
  "value": "370523" },

{
  "name": "西城区",
  "value": "370524" },

{
  "name": "东城区",
  "value": "370525" }],


[
{
  "name": "芝罘区",
  "value": "370602" },

{
  "name": "福山区",
  "value": "370611" },

{
  "name": "牟平区",
  "value": "370612" },

{
  "name": "莱山区",
  "value": "370613" },

{
  "name": "长岛县",
  "value": "370634" },

{
  "name": "龙口市",
  "value": "370681" },

{
  "name": "莱阳市",
  "value": "370682" },

{
  "name": "莱州市",
  "value": "370683" },

{
  "name": "蓬莱市",
  "value": "370684" },

{
  "name": "招远市",
  "value": "370685" },

{
  "name": "栖霞市",
  "value": "370686" },

{
  "name": "海阳市",
  "value": "370687" },

{
  "name": "开发区",
  "value": "371730" }],


[
{
  "name": "潍城区",
  "value": "370702" },

{
  "name": "寒亭区",
  "value": "370703" },

{
  "name": "坊子区",
  "value": "370704" },

{
  "name": "奎文区",
  "value": "370705" },

{
  "name": "临朐县",
  "value": "370724" },

{
  "name": "昌乐县",
  "value": "370725" },

{
  "name": "青州市",
  "value": "370781" },

{
  "name": "诸城市",
  "value": "370782" },

{
  "name": "寿光市",
  "value": "370783" },

{
  "name": "安丘市",
  "value": "370784" },

{
  "name": "高密市",
  "value": "370785" },

{
  "name": "昌邑市",
  "value": "370786" },

{
  "name": "经济开发区",
  "value": "371731" },

{
  "name": "滨海经济开发区",
  "value": "371759" },

{
  "name": "高新技术开发区",
  "value": "371760" },

{
  "name": "出口加工区",
  "value": "371761" }],


[
{
  "name": "市中区",
  "value": "370802" },

{
  "name": "任城区",
  "value": "370811" },

{
  "name": "微山县",
  "value": "370826" },

{
  "name": "鱼台县",
  "value": "370827" },

{
  "name": "金乡县",
  "value": "370828" },

{
  "name": "嘉祥县",
  "value": "370829" },

{
  "name": "汶上县",
  "value": "370830" },

{
  "name": "泗水县",
  "value": "370831" },

{
  "name": "梁山县",
  "value": "370832" },

{
  "name": "曲阜市",
  "value": "370881" },

{
  "name": "兖州区",
  "value": "370882" },

{
  "name": "邹城市",
  "value": "370883" }],


[
{
  "name": "泰山区",
  "value": "370902" },

{
  "name": "岱岳区",
  "value": "370903" },

{
  "name": "宁阳县",
  "value": "370921" },

{
  "name": "东平县",
  "value": "370923" },

{
  "name": "新泰市",
  "value": "370982" },

{
  "name": "肥城市",
  "value": "370983" }],


[
{
  "name": "环翠区",
  "value": "371002" },

{
  "name": "文登市",
  "value": "371081" },

{
  "name": "荣成市",
  "value": "371082" },

{
  "name": "乳山市",
  "value": "371083" },

{
  "name": "经济技术开发区",
  "value": "371733" },

{
  "name": "高技术开发区",
  "value": "371734" }],


[
{
  "name": "东港区",
  "value": "371102" },

{
  "name": "岚山区",
  "value": "371103" },

{
  "name": "五莲县",
  "value": "371121" },

{
  "name": "莒县",
  "value": "371122" }],


[
{
  "name": "莱城区",
  "value": "371202" },

{
  "name": "钢城区",
  "value": "371203" }],


[
{
  "name": "兰山区",
  "value": "371302" },

{
  "name": "罗庄区",
  "value": "371311" },

{
  "name": "河东区",
  "value": "371312" },

{
  "name": "沂南县",
  "value": "371321" },

{
  "name": "郯城县",
  "value": "371322" },

{
  "name": "沂水县",
  "value": "371323" },

{
  "name": "苍山县",
  "value": "371324" },

{
  "name": "费县",
  "value": "371325" },

{
  "name": "平邑县",
  "value": "371326" },

{
  "name": "莒南县",
  "value": "371327" },

{
  "name": "蒙阴县",
  "value": "371328" },

{
  "name": "临沭县",
  "value": "371329" }],


[
{
  "name": "德城区",
  "value": "371402" },

{
  "name": "陵县",
  "value": "371421" },

{
  "name": "宁津县",
  "value": "371422" },

{
  "name": "庆云县",
  "value": "371423" },

{
  "name": "临邑县",
  "value": "371424" },

{
  "name": "齐河县",
  "value": "371425" },

{
  "name": "平原县",
  "value": "371426" },

{
  "name": "夏津县",
  "value": "371427" },

{
  "name": "武城县",
  "value": "371428" },

{
  "name": "乐陵市",
  "value": "371481" },

{
  "name": "禹城市",
  "value": "371482" },

{
  "name": "开发区",
  "value": "371483" }],


[
{
  "name": "东昌府区",
  "value": "371502" },

{
  "name": "阳谷县",
  "value": "371521" },

{
  "name": "莘县",
  "value": "371522" },

{
  "name": "茌平县",
  "value": "371523" },

{
  "name": "东阿县",
  "value": "371524" },

{
  "name": "冠县",
  "value": "371525" },

{
  "name": "高唐县",
  "value": "371526" },

{
  "name": "临清市",
  "value": "371581" }],


[
{
  "name": "滨城区",
  "value": "371602" },

{
  "name": "惠民县",
  "value": "371621" },

{
  "name": "阳信县",
  "value": "371622" },

{
  "name": "无棣县",
  "value": "371623" },

{
  "name": "沾化县",
  "value": "371624" },

{
  "name": "博兴县",
  "value": "371625" },

{
  "name": "邹平县",
  "value": "371626" }],


[
{
  "name": "牡丹区",
  "value": "371702" },

{
  "name": "曹县",
  "value": "371721" },

{
  "name": "单县",
  "value": "371722" },

{
  "name": "成武县",
  "value": "371723" },

{
  "name": "巨野县",
  "value": "371724" },

{
  "name": "郓城县",
  "value": "371725" },

{
  "name": "鄄城县",
  "value": "371726" },

{
  "name": "定陶县",
  "value": "371727" },

{
  "name": "东明县",
  "value": "371728" }]],



[
[
{
  "name": "中原区",
  "value": "410102" },

{
  "name": "二七区",
  "value": "410103" },

{
  "name": "管城回族区",
  "value": "410104" },

{
  "name": "金水区",
  "value": "410105" },

{
  "name": "上街区",
  "value": "410106" },

{
  "name": "中牟县",
  "value": "410122" },

{
  "name": "巩义市",
  "value": "410181" },

{
  "name": "荥阳市",
  "value": "410182" },

{
  "name": "新密市",
  "value": "410183" },

{
  "name": "新郑市",
  "value": "410184" },

{
  "name": "登封市",
  "value": "410185" },

{
  "name": "高新技术开发区",
  "value": "411733" },

{
  "name": "惠济区",
  "value": "411755" },

{
  "name": "经济技术开发区",
  "value": "411756" },

{
  "name": "郑东新区",
  "value": "411757" },

{
  "name": "出口加工区",
  "value": "411758" }],


[
{
  "name": "龙亭区",
  "value": "410202" },

{
  "name": "顺河回族区",
  "value": "410203" },

{
  "name": "鼓楼区",
  "value": "410204" },

{
  "name": "杞县",
  "value": "410221" },

{
  "name": "通许县",
  "value": "410222" },

{
  "name": "尉氏县",
  "value": "410223" },

{
  "name": "开封县",
  "value": "410224" },

{
  "name": "兰考县",
  "value": "410225" },

{
  "name": "金明区",
  "value": "411752" },

{
  "name": "禹王台区",
  "value": "411753" }],


[
{
  "name": "老城区",
  "value": "410302" },

{
  "name": "西工区",
  "value": "410303" },

{
  "name": "瀍河回族区",
  "value": "410304" },

{
  "name": "涧西区",
  "value": "410305" },

{
  "name": "吉利区",
  "value": "410306" },

{
  "name": "洛龙区",
  "value": "410307" },

{
  "name": "孟津县",
  "value": "410322" },

{
  "name": "新安县",
  "value": "410323" },

{
  "name": "栾川县",
  "value": "410324" },

{
  "name": "嵩县",
  "value": "410325" },

{
  "name": "汝阳县",
  "value": "410326" },

{
  "name": "宜阳县",
  "value": "410327" },

{
  "name": "洛宁县",
  "value": "410328" },

{
  "name": "伊川县",
  "value": "410329" },

{
  "name": "偃师市",
  "value": "410381" },

{
  "name": "高新技术开发区",
  "value": "411754" },

{
  "name": "经济技术开发区",
  "value": "411759" }],


[
{
  "name": "新华区",
  "value": "410402" },

{
  "name": "卫东区",
  "value": "410403" },

{
  "name": "石龙区",
  "value": "410404" },

{
  "name": "湛河区",
  "value": "410411" },

{
  "name": "宝丰县",
  "value": "410421" },

{
  "name": "叶县",
  "value": "410422" },

{
  "name": "鲁山县",
  "value": "410423" },

{
  "name": "郏县",
  "value": "410425" },

{
  "name": "舞钢市",
  "value": "410481" },

{
  "name": "汝州市",
  "value": "410482" }],


[
{
  "name": "文峰区",
  "value": "410502" },

{
  "name": "北关区",
  "value": "410503" },

{
  "name": "殷都区",
  "value": "410505" },

{
  "name": "龙安区",
  "value": "410506" },

{
  "name": "安阳县",
  "value": "410522" },

{
  "name": "汤阴县",
  "value": "410523" },

{
  "name": "滑县",
  "value": "410526" },

{
  "name": "内黄县",
  "value": "410527" },

{
  "name": "林州市",
  "value": "410581" }],


[
{
  "name": "鹤山区",
  "value": "410602" },

{
  "name": "山城区",
  "value": "410603" },

{
  "name": "淇滨区",
  "value": "410611" },

{
  "name": "浚县",
  "value": "410621" },

{
  "name": "淇县",
  "value": "410622" }],


[
{
  "name": "红旗区",
  "value": "410702" },

{
  "name": "卫滨区",
  "value": "410703" },

{
  "name": "凤泉区",
  "value": "410704" },

{
  "name": "牧野区",
  "value": "410711" },

{
  "name": "新乡县",
  "value": "410721" },

{
  "name": "获嘉县",
  "value": "410724" },

{
  "name": "原阳县",
  "value": "410725" },

{
  "name": "延津县",
  "value": "410726" },

{
  "name": "封丘县",
  "value": "410727" },

{
  "name": "长垣县",
  "value": "410728" },

{
  "name": "卫辉市",
  "value": "410781" },

{
  "name": "辉县市",
  "value": "410782" }],


[
{
  "name": "解放区",
  "value": "410802" },

{
  "name": "中站区",
  "value": "410803" },

{
  "name": "马村区",
  "value": "410804" },

{
  "name": "山阳区",
  "value": "410811" },

{
  "name": "修武县",
  "value": "410821" },

{
  "name": "博爱县",
  "value": "410822" },

{
  "name": "武陟县",
  "value": "410823" },

{
  "name": "温县",
  "value": "410825" },

{
  "name": "沁阳市",
  "value": "410882" },

{
  "name": "孟州市",
  "value": "410883" }],


[
{
  "name": "济源市",
  "value": "410881" }],


[
{
  "name": "华龙区",
  "value": "410902" },

{
  "name": "清丰县",
  "value": "410922" },

{
  "name": "南乐县",
  "value": "410923" },

{
  "name": "范县",
  "value": "410926" },

{
  "name": "台前县",
  "value": "410927" },

{
  "name": "濮阳县",
  "value": "410928" }],


[
{
  "name": "魏都区",
  "value": "411002" },

{
  "name": "许昌县",
  "value": "411023" },

{
  "name": "鄢陵县",
  "value": "411024" },

{
  "name": "襄城县",
  "value": "411025" },

{
  "name": "禹州市",
  "value": "411081" },

{
  "name": "长葛市",
  "value": "411082" }],


[
{
  "name": "源汇区",
  "value": "411102" },

{
  "name": "郾城区",
  "value": "411103" },

{
  "name": "召陵区",
  "value": "411104" },

{
  "name": "舞阳县",
  "value": "411121" },

{
  "name": "临颍县",
  "value": "411122" }],


[
{
  "name": "湖滨区",
  "value": "411202" },

{
  "name": "渑池县",
  "value": "411221" },

{
  "name": "陕县",
  "value": "411222" },

{
  "name": "卢氏县",
  "value": "411224" },

{
  "name": "义马市",
  "value": "411281" },

{
  "name": "灵宝市",
  "value": "411282" }],


[
{
  "name": "宛城区",
  "value": "411302" },

{
  "name": "卧龙区",
  "value": "411303" },

{
  "name": "南召县",
  "value": "411321" },

{
  "name": "方城县",
  "value": "411322" },

{
  "name": "西峡县",
  "value": "411323" },

{
  "name": "镇平县",
  "value": "411324" },

{
  "name": "内乡县",
  "value": "411325" },

{
  "name": "淅川县",
  "value": "411326" },

{
  "name": "社旗县",
  "value": "411327" },

{
  "name": "唐河县",
  "value": "411328" },

{
  "name": "新野县",
  "value": "411329" },

{
  "name": "桐柏县",
  "value": "411330" },

{
  "name": "邓州市",
  "value": "411381" }],


[
{
  "name": "梁园区",
  "value": "411402" },

{
  "name": "睢阳区",
  "value": "411403" },

{
  "name": "民权县",
  "value": "411421" },

{
  "name": "睢县",
  "value": "411422" },

{
  "name": "宁陵县",
  "value": "411423" },

{
  "name": "柘城县",
  "value": "411424" },

{
  "name": "虞城县",
  "value": "411425" },

{
  "name": "夏邑县",
  "value": "411426" },

{
  "name": "永城市",
  "value": "411481" }],


[
{
  "name": "浉河区",
  "value": "411502" },

{
  "name": "平桥区",
  "value": "411503" },

{
  "name": "罗山县",
  "value": "411521" },

{
  "name": "光山县",
  "value": "411522" },

{
  "name": "新县",
  "value": "411523" },

{
  "name": "商城县",
  "value": "411524" },

{
  "name": "固始县",
  "value": "411525" },

{
  "name": "潢川县",
  "value": "411526" },

{
  "name": "淮滨县",
  "value": "411527" },

{
  "name": "息县",
  "value": "411528" }],


[
{
  "name": "川汇区",
  "value": "411602" },

{
  "name": "扶沟县",
  "value": "411621" },

{
  "name": "西华县",
  "value": "411622" },

{
  "name": "商水县",
  "value": "411623" },

{
  "name": "沈丘县",
  "value": "411624" },

{
  "name": "郸城县",
  "value": "411625" },

{
  "name": "淮阳县",
  "value": "411626" },

{
  "name": "太康县",
  "value": "411627" },

{
  "name": "鹿邑县",
  "value": "411628" },

{
  "name": "项城市",
  "value": "411681" }],


[
{
  "name": "驿城区",
  "value": "411702" },

{
  "name": "西平县",
  "value": "411721" },

{
  "name": "上蔡县",
  "value": "411722" },

{
  "name": "平舆县",
  "value": "411723" },

{
  "name": "正阳县",
  "value": "411724" },

{
  "name": "确山县",
  "value": "411725" },

{
  "name": "泌阳县",
  "value": "411726" },

{
  "name": "汝南县",
  "value": "411727" },

{
  "name": "遂平县",
  "value": "411728" },

{
  "name": "新蔡县",
  "value": "411729" }]],



[
[
{
  "name": "江岸区",
  "value": "420102" },

{
  "name": "江汉区",
  "value": "420103" },

{
  "name": "硚口区",
  "value": "420104" },

{
  "name": "汉阳区",
  "value": "420105" },

{
  "name": "武昌区",
  "value": "420106" },

{
  "name": "青山区",
  "value": "420107" },

{
  "name": "洪山区",
  "value": "420111" },

{
  "name": "东西湖区",
  "value": "420112" },

{
  "name": "汉南区",
  "value": "420113" },

{
  "name": "蔡甸区",
  "value": "420114" },

{
  "name": "江夏区",
  "value": "420115" },

{
  "name": "黄陂区",
  "value": "420116" },

{
  "name": "新洲区",
  "value": "420117" }],


[
{
  "name": "黄石港区",
  "value": "420202" },

{
  "name": "西塞山区",
  "value": "420203" },

{
  "name": "下陆区",
  "value": "420204" },

{
  "name": "铁山区",
  "value": "420205" },

{
  "name": "阳新县",
  "value": "420222" },

{
  "name": "大冶市",
  "value": "420281" }],


[
{
  "name": "茅箭区",
  "value": "420302" },

{
  "name": "张湾区",
  "value": "420303" },

{
  "name": "郧县",
  "value": "420321" },

{
  "name": "郧西县",
  "value": "420322" },

{
  "name": "竹山县",
  "value": "420323" },

{
  "name": "竹溪县",
  "value": "420324" },

{
  "name": "房县",
  "value": "420325" },

{
  "name": "丹江口市",
  "value": "420381" }],


[
{
  "name": "西陵区",
  "value": "420502" },

{
  "name": "伍家岗区",
  "value": "420503" },

{
  "name": "点军区",
  "value": "420504" },

{
  "name": "猇亭区",
  "value": "420505" },

{
  "name": "夷陵区",
  "value": "420506" },

{
  "name": "远安县",
  "value": "420525" },

{
  "name": "兴山县",
  "value": "420526" },

{
  "name": "秭归县",
  "value": "420527" },

{
  "name": "长阳土家族自治县",
  "value": "420528" },

{
  "name": "五峰土家族自治县",
  "value": "420529" },

{
  "name": "宜都市",
  "value": "420581" },

{
  "name": "当阳市",
  "value": "420582" },

{
  "name": "枝江市",
  "value": "420583" },

{
  "name": "经济技术开发区",
  "value": "429038" }],


[
{
  "name": "襄城区",
  "value": "420602" },

{
  "name": "襄州区",
  "value": "420603" },

{
  "name": "樊城区",
  "value": "420606" },

{
  "name": "襄阳区",
  "value": "420607" },

{
  "name": "南漳县",
  "value": "420624" },

{
  "name": "谷城县",
  "value": "420625" },

{
  "name": "保康县",
  "value": "420626" },

{
  "name": "老河口市",
  "value": "420682" },

{
  "name": "枣阳市",
  "value": "420683" },

{
  "name": "宜城市",
  "value": "420684" }],


[
{
  "name": "梁子湖区",
  "value": "420702" },

{
  "name": "华容区",
  "value": "420703" },

{
  "name": "鄂城区",
  "value": "420704" }],


[
{
  "name": "东宝区",
  "value": "420802" },

{
  "name": "掇刀区",
  "value": "420804" },

{
  "name": "京山县",
  "value": "420821" },

{
  "name": "沙洋县",
  "value": "420822" },

{
  "name": "钟祥市",
  "value": "420881" }],


[
{
  "name": "孝南区",
  "value": "420902" },

{
  "name": "孝昌县",
  "value": "420921" },

{
  "name": "大悟县",
  "value": "420922" },

{
  "name": "云梦县",
  "value": "420923" },

{
  "name": "应城市",
  "value": "420981" },

{
  "name": "安陆市",
  "value": "420982" },

{
  "name": "汉川市",
  "value": "420984" }],


[
{
  "name": "沙市区",
  "value": "421002" },

{
  "name": "荆州区",
  "value": "421003" },

{
  "name": "公安县",
  "value": "421022" },

{
  "name": "监利县",
  "value": "421023" },

{
  "name": "江陵县",
  "value": "421024" },

{
  "name": "石首市",
  "value": "421081" },

{
  "name": "洪湖市",
  "value": "421083" },

{
  "name": "松滋市",
  "value": "421087" }],


[
{
  "name": "黄州区",
  "value": "421102" },

{
  "name": "团风县",
  "value": "421121" },

{
  "name": "红安县",
  "value": "421122" },

{
  "name": "罗田县",
  "value": "421123" },

{
  "name": "英山县",
  "value": "421124" },

{
  "name": "浠水县",
  "value": "421125" },

{
  "name": "蕲春县",
  "value": "421126" },

{
  "name": "黄梅县",
  "value": "421127" },

{
  "name": "麻城市",
  "value": "421181" },

{
  "name": "武穴市",
  "value": "421182" }],


[
{
  "name": "咸安区",
  "value": "421202" },

{
  "name": "嘉鱼县",
  "value": "421221" },

{
  "name": "通城县",
  "value": "421222" },

{
  "name": "崇阳县",
  "value": "421223" },

{
  "name": "通山县",
  "value": "421224" },

{
  "name": "赤壁市",
  "value": "421281" }],


[
{
  "name": "曾都区",
  "value": "421302" },

{
  "name": "随县",
  "value": "421303" },

{
  "name": "广水市",
  "value": "421381" }],


[
{
  "name": "恩施市",
  "value": "422801" },

{
  "name": "利川市",
  "value": "422802" },

{
  "name": "建始县",
  "value": "422822" },

{
  "name": "巴东县",
  "value": "422823" },

{
  "name": "宣恩县",
  "value": "422825" },

{
  "name": "咸丰县",
  "value": "422826" },

{
  "name": "来凤县",
  "value": "422827" },

{
  "name": "鹤峰县",
  "value": "422828" }],


[
{
  "name": "仙桃市",
  "value": "429004" },

{
  "name": "潜江市",
  "value": "429005" },

{
  "name": "天门市",
  "value": "429006" },

{
  "name": "神农架林区",
  "value": "429021" }]],



[
[
{
  "name": "芙蓉区",
  "value": "430102" },

{
  "name": "天心区",
  "value": "430103" },

{
  "name": "岳麓区",
  "value": "430104" },

{
  "name": "开福区",
  "value": "430105" },

{
  "name": "雨花区",
  "value": "430111" },

{
  "name": "望城区",
  "value": "430112" },

{
  "name": "长沙县",
  "value": "430121" },

{
  "name": "望城县",
  "value": "430122" },

{
  "name": "宁乡县",
  "value": "430124" },

{
  "name": "浏阳市",
  "value": "430181" }],


[
{
  "name": "荷塘区",
  "value": "430202" },

{
  "name": "芦淞区",
  "value": "430203" },

{
  "name": "石峰区",
  "value": "430204" },

{
  "name": "天元区",
  "value": "430211" },

{
  "name": "株洲县",
  "value": "430221" },

{
  "name": "攸县",
  "value": "430223" },

{
  "name": "茶陵县",
  "value": "430224" },

{
  "name": "炎陵县",
  "value": "430225" },

{
  "name": "醴陵市",
  "value": "430281" }],


[
{
  "name": "雨湖区",
  "value": "430302" },

{
  "name": "岳塘区",
  "value": "430304" },

{
  "name": "湘潭县",
  "value": "430321" },

{
  "name": "湘乡市",
  "value": "430381" },

{
  "name": "韶山市",
  "value": "430382" }],


[
{
  "name": "珠晖区",
  "value": "430405" },

{
  "name": "雁峰区",
  "value": "430406" },

{
  "name": "石鼓区",
  "value": "430407" },

{
  "name": "蒸湘区",
  "value": "430408" },

{
  "name": "南岳区",
  "value": "430412" },

{
  "name": "衡阳县",
  "value": "430421" },

{
  "name": "衡南县",
  "value": "430422" },

{
  "name": "衡山县",
  "value": "430423" },

{
  "name": "衡东县",
  "value": "430424" },

{
  "name": "祁东县",
  "value": "430426" },

{
  "name": "耒阳市",
  "value": "430481" },

{
  "name": "常宁市",
  "value": "430482" }],


[
{
  "name": "双清区",
  "value": "430502" },

{
  "name": "大祥区",
  "value": "430503" },

{
  "name": "北塔区",
  "value": "430511" },

{
  "name": "邵东县",
  "value": "430521" },

{
  "name": "新邵县",
  "value": "430522" },

{
  "name": "邵阳县",
  "value": "430523" },

{
  "name": "隆回县",
  "value": "430524" },

{
  "name": "洞口县",
  "value": "430525" },

{
  "name": "绥宁县",
  "value": "430527" },

{
  "name": "新宁县",
  "value": "430528" },

{
  "name": "城步苗族自治县",
  "value": "430529" },

{
  "name": "武冈市",
  "value": "430581" }],


[
{
  "name": "岳阳楼区",
  "value": "430602" },

{
  "name": "云溪区",
  "value": "430603" },

{
  "name": "君山区",
  "value": "430611" },

{
  "name": "岳阳县",
  "value": "430621" },

{
  "name": "华容县",
  "value": "430623" },

{
  "name": "湘阴县",
  "value": "430624" },

{
  "name": "平江县",
  "value": "430626" },

{
  "name": "汨罗市",
  "value": "430681" },

{
  "name": "临湘市",
  "value": "430682" }],


[
{
  "name": "武陵区",
  "value": "430702" },

{
  "name": "鼎城区",
  "value": "430703" },

{
  "name": "安乡县",
  "value": "430721" },

{
  "name": "汉寿县",
  "value": "430722" },

{
  "name": "澧县",
  "value": "430723" },

{
  "name": "临澧县",
  "value": "430724" },

{
  "name": "桃源县",
  "value": "430725" },

{
  "name": "石门县",
  "value": "430726" },

{
  "name": "津市市",
  "value": "430781" }],


[
{
  "name": "永定区",
  "value": "430802" },

{
  "name": "武陵源区",
  "value": "430811" },

{
  "name": "慈利县",
  "value": "430821" },

{
  "name": "桑植县",
  "value": "430822" }],


[
{
  "name": "资阳区",
  "value": "430902" },

{
  "name": "赫山区",
  "value": "430903" },

{
  "name": "南县",
  "value": "430921" },

{
  "name": "桃江县",
  "value": "430922" },

{
  "name": "安化县",
  "value": "430923" },

{
  "name": "沅江市",
  "value": "430981" }],


[
{
  "name": "北湖区",
  "value": "431002" },

{
  "name": "苏仙区",
  "value": "431003" },

{
  "name": "桂阳县",
  "value": "431021" },

{
  "name": "宜章县",
  "value": "431022" },

{
  "name": "永兴县",
  "value": "431023" },

{
  "name": "嘉禾县",
  "value": "431024" },

{
  "name": "临武县",
  "value": "431025" },

{
  "name": "汝城县",
  "value": "431026" },

{
  "name": "桂东县",
  "value": "431027" },

{
  "name": "安仁县",
  "value": "431028" },

{
  "name": "资兴市",
  "value": "431081" }],


[
{
  "name": "冷水滩区",
  "value": "431103" },

{
  "name": "祁阳县",
  "value": "431121" },

{
  "name": "东安县",
  "value": "431122" },

{
  "name": "双牌县",
  "value": "431123" },

{
  "name": "道县",
  "value": "431124" },

{
  "name": "江永县",
  "value": "431125" },

{
  "name": "宁远县",
  "value": "431126" },

{
  "name": "蓝山县",
  "value": "431127" },

{
  "name": "新田县",
  "value": "431128" },

{
  "name": "江华瑶族自治县",
  "value": "431129" },

{
  "name": "零陵区",
  "value": "433147" }],


[
{
  "name": "鹤城区",
  "value": "431202" },

{
  "name": "中方县",
  "value": "431221" },

{
  "name": "沅陵县",
  "value": "431222" },

{
  "name": "辰溪县",
  "value": "431223" },

{
  "name": "溆浦县",
  "value": "431224" },

{
  "name": "会同县",
  "value": "431225" },

{
  "name": "麻阳苗族自治县",
  "value": "431226" },

{
  "name": "新晃侗族自治县",
  "value": "431227" },

{
  "name": "芷江侗族自治县",
  "value": "431228" },

{
  "name": "靖州苗族侗族自治县",
  "value": "431229" },

{
  "name": "通道侗族自治县",
  "value": "431230" },

{
  "name": "洪江市",
  "value": "431281" }],


[
{
  "name": "娄星区",
  "value": "431302" },

{
  "name": "双峰县",
  "value": "431321" },

{
  "name": "新化县",
  "value": "431322" },

{
  "name": "冷水江市",
  "value": "431381" },

{
  "name": "涟源市",
  "value": "431382" }],


[
{
  "name": "吉首市",
  "value": "433101" },

{
  "name": "泸溪县",
  "value": "433122" },

{
  "name": "凤凰县",
  "value": "433123" },

{
  "name": "花垣县",
  "value": "433124" },

{
  "name": "保靖县",
  "value": "433125" },

{
  "name": "古丈县",
  "value": "433126" },

{
  "name": "永顺县",
  "value": "433127" },

{
  "name": "龙山县",
  "value": "433130" }]],



[
[
{
  "name": "荔湾区",
  "value": "440103" },

{
  "name": "越秀区",
  "value": "440104" },

{
  "name": "海珠区",
  "value": "440105" },

{
  "name": "天河区",
  "value": "440106" },

{
  "name": "白云区",
  "value": "440111" },

{
  "name": "黄埔区",
  "value": "440112" },

{
  "name": "番禺区",
  "value": "440113" },

{
  "name": "花都区",
  "value": "440114" },

{
  "name": "增城市",
  "value": "440183" },

{
  "name": "从化市",
  "value": "440184" },

{
  "name": "南沙区",
  "value": "445426" },

{
  "name": "萝岗区",
  "value": "445427" }],


[
{
  "name": "武江区",
  "value": "440203" },

{
  "name": "浈江区",
  "value": "440204" },

{
  "name": "曲江区",
  "value": "440205" },

{
  "name": "始兴县",
  "value": "440222" },

{
  "name": "仁化县",
  "value": "440224" },

{
  "name": "翁源县",
  "value": "440229" },

{
  "name": "乳源瑶族自治县",
  "value": "440232" },

{
  "name": "新丰县",
  "value": "440233" },

{
  "name": "乐昌市",
  "value": "440281" },

{
  "name": "南雄市",
  "value": "440282" }],


[
{
  "name": "罗湖区",
  "value": "440303" },

{
  "name": "福田区",
  "value": "440304" },

{
  "name": "南山区",
  "value": "440305" },

{
  "name": "宝安区",
  "value": "440306" },

{
  "name": "龙岗区",
  "value": "440307" },

{
  "name": "盐田区",
  "value": "440308" },

{
  "name": "光明新区",
  "value": "445436" },

{
  "name": "坪山新区",
  "value": "445437" }],


[
{
  "name": "香洲区",
  "value": "440402" },

{
  "name": "斗门区",
  "value": "440403" },

{
  "name": "金湾区",
  "value": "440404" }],


[
{
  "name": "龙湖区",
  "value": "440507" },

{
  "name": "金平区",
  "value": "440511" },

{
  "name": "濠江区",
  "value": "440512" },

{
  "name": "潮阳区",
  "value": "440513" },

{
  "name": "潮南区",
  "value": "440514" },

{
  "name": "澄海区",
  "value": "440515" },

{
  "name": "南澳县",
  "value": "440523" }],


[
{
  "name": "禅城区",
  "value": "440604" },

{
  "name": "南海区",
  "value": "440605" },

{
  "name": "顺德区",
  "value": "440606" },

{
  "name": "三水区",
  "value": "440607" },

{
  "name": "高明区",
  "value": "440608" }],


[
{
  "name": "蓬江区",
  "value": "440703" },

{
  "name": "江海区",
  "value": "440704" },

{
  "name": "新会区",
  "value": "440705" },

{
  "name": "台山市",
  "value": "440781" },

{
  "name": "开平市",
  "value": "440783" },

{
  "name": "鹤山市",
  "value": "440784" },

{
  "name": "恩平市",
  "value": "440785" }],


[
{
  "name": "赤坎区",
  "value": "440802" },

{
  "name": "霞山区",
  "value": "440803" },

{
  "name": "坡头区",
  "value": "440804" },

{
  "name": "麻章区",
  "value": "440811" },

{
  "name": "遂溪县",
  "value": "440823" },

{
  "name": "徐闻县",
  "value": "440825" },

{
  "name": "廉江市",
  "value": "440881" },

{
  "name": "雷州市",
  "value": "440882" },

{
  "name": "吴川市",
  "value": "440883" },

{
  "name": "开发区",
  "value": "445395" }],


[
{
  "name": "茂南区",
  "value": "440902" },

{
  "name": "茂港区",
  "value": "440903" },

{
  "name": "电白县",
  "value": "440923" },

{
  "name": "高州市",
  "value": "440981" },

{
  "name": "化州市",
  "value": "440982" },

{
  "name": "信宜市",
  "value": "440983" }],


[
{
  "name": "端州区",
  "value": "441202" },

{
  "name": "鼎湖区",
  "value": "441203" },

{
  "name": "广宁县",
  "value": "441223" },

{
  "name": "怀集县",
  "value": "441224" },

{
  "name": "封开县",
  "value": "441225" },

{
  "name": "德庆县",
  "value": "441226" },

{
  "name": "高要市",
  "value": "441283" },

{
  "name": "四会市",
  "value": "441284" },

{
  "name": "高新技术产业开发区",
  "value": "445435" }],


[
{
  "name": "惠城区",
  "value": "441302" },

{
  "name": "惠阳区",
  "value": "441303" },

{
  "name": "博罗县",
  "value": "441322" },

{
  "name": "惠东县",
  "value": "441323" },

{
  "name": "龙门县",
  "value": "441324" },

{
  "name": "大亚湾区",
  "value": "445430" },

{
  "name": "仲恺高新区",
  "value": "445431" }],


[
{
  "name": "梅江区",
  "value": "441402" },

{
  "name": "梅县区",
  "value": "441421" },

{
  "name": "大埔县",
  "value": "441422" },

{
  "name": "丰顺县",
  "value": "441423" },

{
  "name": "五华县",
  "value": "441424" },

{
  "name": "平远县",
  "value": "441426" },

{
  "name": "蕉岭县",
  "value": "441427" },

{
  "name": "兴宁市",
  "value": "441481" }],


[
{
  "name": "城区",
  "value": "441502" },

{
  "name": "陆丰市",
  "value": "441521" },

{
  "name": "海丰县",
  "value": "441523" },

{
  "name": "陆河县",
  "value": "441581" }],


[
{
  "name": "源城区",
  "value": "441602" },

{
  "name": "紫金县",
  "value": "441621" },

{
  "name": "龙川县",
  "value": "441622" },

{
  "name": "连平县",
  "value": "441623" },

{
  "name": "和平县",
  "value": "441624" },

{
  "name": "东源县",
  "value": "441625" }],


[
{
  "name": "江城区",
  "value": "441702" },

{
  "name": "阳西县",
  "value": "441721" },

{
  "name": "阳东县",
  "value": "441723" },

{
  "name": "阳春市",
  "value": "441781" }],


[
{
  "name": "清城区",
  "value": "441802" },

{
  "name": "佛冈县",
  "value": "441821" },

{
  "name": "阳山县",
  "value": "441823" },

{
  "name": "连山壮族瑶族自治县",
  "value": "441825" },

{
  "name": "连南瑶族自治县",
  "value": "441826" },

{
  "name": "清新区",
  "value": "441827" },

{
  "name": "英德市",
  "value": "441881" },

{
  "name": "连州市",
  "value": "441882" }],


[
{
  "name": "东莞市",
  "value": "441999" },

{
  "name": "南城区",
  "value": "445382" },

{
  "name": "石龙镇",
  "value": "445383" },

{
  "name": "长安镇",
  "value": "445384" },

{
  "name": "虎门镇",
  "value": "445385" },

{
  "name": "横沥镇",
  "value": "445386" },

{
  "name": "寮步镇",
  "value": "445387" },

{
  "name": "黄江镇",
  "value": "445388" },

{
  "name": "清溪镇",
  "value": "445389" },

{
  "name": "莞城区",
  "value": "445438" },

{
  "name": "万江区",
  "value": "445439" },

{
  "name": "东城区",
  "value": "445440" },

{
  "name": "石碣镇",
  "value": "445441" },

{
  "name": "茶山镇",
  "value": "445442" },

{
  "name": "石排镇",
  "value": "445443" },

{
  "name": "企石镇",
  "value": "445444" },

{
  "name": "桥头镇",
  "value": "445445" },

{
  "name": "谢岗镇",
  "value": "445446" },

{
  "name": "东坑镇",
  "value": "445447" },

{
  "name": "常平镇",
  "value": "445448" },

{
  "name": "大朗镇",
  "value": "445449" },

{
  "name": "塘厦镇",
  "value": "445450" },

{
  "name": "凤岗镇",
  "value": "445451" },

{
  "name": "厚街镇",
  "value": "445452" },

{
  "name": "沙田镇",
  "value": "445453" },

{
  "name": "道滘镇",
  "value": "445454" },

{
  "name": "洪梅镇",
  "value": "445455" },

{
  "name": "麻涌镇",
  "value": "445456" },

{
  "name": "中堂镇",
  "value": "445457" },

{
  "name": "高埗镇",
  "value": "445458" },

{
  "name": "樟木头镇",
  "value": "445459" },

{
  "name": "大岭山镇",
  "value": "445460" },

{
  "name": "望牛墩镇",
  "value": "445461" }],


[
{
  "name": "湘桥区",
  "value": "445102" },

{
  "name": "潮安区",
  "value": "445121" },

{
  "name": "饶平县",
  "value": "445122" }],


[
{
  "name": "榕城区",
  "value": "445202" },

{
  "name": "揭东区",
  "value": "445221" },

{
  "name": "揭西县",
  "value": "445222" },

{
  "name": "惠来县",
  "value": "445224" },

{
  "name": "普宁市",
  "value": "445281" },

{
  "name": "东山区",
  "value": "445432" },

{
  "name": "普侨区",
  "value": "445433" },

{
  "name": "大南山侨区",
  "value": "445434" }],


[
{
  "name": "云城区",
  "value": "445302" },

{
  "name": "新兴县",
  "value": "445321" },

{
  "name": "郁南县",
  "value": "445322" },

{
  "name": "云安县",
  "value": "445323" },

{
  "name": "罗定市",
  "value": "445381" }],


[
{
  "name": "中山市",
  "value": "445429" }]],



[
[
{
  "name": "兴宁区",
  "value": "450102" },

{
  "name": "青秀区",
  "value": "450103" },

{
  "name": "江南区",
  "value": "450105" },

{
  "name": "西乡塘区",
  "value": "450107" },

{
  "name": "良庆区",
  "value": "450108" },

{
  "name": "邕宁区",
  "value": "450109" },

{
  "name": "武鸣县",
  "value": "450122" },

{
  "name": "隆安县",
  "value": "450123" },

{
  "name": "马山县",
  "value": "450124" },

{
  "name": "上林县",
  "value": "450125" },

{
  "name": "宾阳县",
  "value": "450126" },

{
  "name": "横县",
  "value": "450127" }],


[
{
  "name": "城中区",
  "value": "450202" },

{
  "name": "鱼峰区",
  "value": "450203" },

{
  "name": "柳南区",
  "value": "450204" },

{
  "name": "柳北区",
  "value": "450205" },

{
  "name": "柳江县",
  "value": "450221" },

{
  "name": "柳城县",
  "value": "450222" },

{
  "name": "鹿寨县",
  "value": "450223" },

{
  "name": "融安县",
  "value": "450224" },

{
  "name": "融水苗族自治县",
  "value": "450225" },

{
  "name": "三江侗族自治县",
  "value": "450226" }],


[
{
  "name": "秀峰区",
  "value": "450302" },

{
  "name": "叠彩区",
  "value": "450303" },

{
  "name": "象山区",
  "value": "450304" },

{
  "name": "七星区",
  "value": "450305" },

{
  "name": "雁山区",
  "value": "450311" },

{
  "name": "阳朔县",
  "value": "450321" },

{
  "name": "临桂区",
  "value": "450322" },

{
  "name": "灵川县",
  "value": "450323" },

{
  "name": "全州县",
  "value": "450324" },

{
  "name": "兴安县",
  "value": "450325" },

{
  "name": "永福县",
  "value": "450326" },

{
  "name": "灌阳县",
  "value": "450327" },

{
  "name": "龙胜各族自治县",
  "value": "450328" },

{
  "name": "资源县",
  "value": "450329" },

{
  "name": "平乐县",
  "value": "450330" },

{
  "name": "荔浦县",
  "value": "450331" },

{
  "name": "恭城瑶族自治县",
  "value": "450332" }],


[
{
  "name": "万秀区",
  "value": "450403" },

{
  "name": "蝶山区",
  "value": "450404" },

{
  "name": "长洲区",
  "value": "450405" },

{
  "name": "龙圩区",
  "value": "450406" },

{
  "name": "苍梧县",
  "value": "450421" },

{
  "name": "藤县",
  "value": "450422" },

{
  "name": "蒙山县",
  "value": "450423" },

{
  "name": "岑溪市",
  "value": "450481" }],


[
{
  "name": "海城区",
  "value": "450502" },

{
  "name": "银海区",
  "value": "450503" },

{
  "name": "铁山港区",
  "value": "450512" },

{
  "name": "合浦县",
  "value": "450521" }],


[
{
  "name": "港口区",
  "value": "450602" },

{
  "name": "防城区",
  "value": "450603" },

{
  "name": "上思县",
  "value": "450621" },

{
  "name": "东兴市",
  "value": "450681" }],


[
{
  "name": "钦南区",
  "value": "450702" },

{
  "name": "钦北区",
  "value": "450703" },

{
  "name": "灵山县",
  "value": "450721" },

{
  "name": "浦北县",
  "value": "450722" },

{
  "name": "钦州港经济开发区",
  "value": "451500" }],


[
{
  "name": "港北区",
  "value": "450802" },

{
  "name": "港南区",
  "value": "450803" },

{
  "name": "覃塘区",
  "value": "450804" },

{
  "name": "平南县",
  "value": "450821" },

{
  "name": "桂平市",
  "value": "450881" }],


[
{
  "name": "玉州区",
  "value": "450902" },

{
  "name": "福绵区",
  "value": "450903" },

{
  "name": "容县",
  "value": "450921" },

{
  "name": "陆川县",
  "value": "450922" },

{
  "name": "博白县",
  "value": "450923" },

{
  "name": "兴业县",
  "value": "450924" },

{
  "name": "北流市",
  "value": "450981" }],


[
{
  "name": "右江区",
  "value": "451002" },

{
  "name": "田阳县",
  "value": "451021" },

{
  "name": "田东县",
  "value": "451022" },

{
  "name": "平果县",
  "value": "451023" },

{
  "name": "德保县",
  "value": "451024" },

{
  "name": "靖西县",
  "value": "451025" },

{
  "name": "那坡县",
  "value": "451026" },

{
  "name": "凌云县",
  "value": "451027" },

{
  "name": "乐业县",
  "value": "451028" },

{
  "name": "田林县",
  "value": "451029" },

{
  "name": "西林县",
  "value": "451030" },

{
  "name": "隆林各族自治县",
  "value": "451031" }],


[
{
  "name": "八步区",
  "value": "451102" },

{
  "name": "平桂管理区",
  "value": "451103" },

{
  "name": "昭平县",
  "value": "451121" },

{
  "name": "钟山县",
  "value": "451122" },

{
  "name": "富川瑶族自治县",
  "value": "451123" }],


[
{
  "name": "金城江区",
  "value": "451202" },

{
  "name": "南丹县",
  "value": "451221" },

{
  "name": "天峨县",
  "value": "451222" },

{
  "name": "凤山县",
  "value": "451223" },

{
  "name": "东兰县",
  "value": "451224" },

{
  "name": "罗城仫佬族自治县",
  "value": "451225" },

{
  "name": "环江毛南族自治县",
  "value": "451226" },

{
  "name": "巴马瑶族自治县",
  "value": "451227" },

{
  "name": "都安瑶族自治县",
  "value": "451228" },

{
  "name": "大化瑶族自治县",
  "value": "451229" },

{
  "name": "宜州市",
  "value": "451281" }],


[
{
  "name": "兴宾区",
  "value": "451302" },

{
  "name": "忻城县",
  "value": "451321" },

{
  "name": "象州县",
  "value": "451322" },

{
  "name": "武宣县",
  "value": "451323" },

{
  "name": "金秀瑶族自治县",
  "value": "451324" },

{
  "name": "合山市",
  "value": "451381" }],


[
{
  "name": "江洲区",
  "value": "451402" },

{
  "name": "扶绥县",
  "value": "451421" },

{
  "name": "宁明县",
  "value": "451422" },

{
  "name": "龙州县",
  "value": "451423" },

{
  "name": "大新县",
  "value": "451424" },

{
  "name": "天等县",
  "value": "451425" },

{
  "name": "凭祥市",
  "value": "451481" }]],



[
[
{
  "name": "秀英区",
  "value": "460105" },

{
  "name": "龙华区",
  "value": "460106" },

{
  "name": "琼山区",
  "value": "460107" },

{
  "name": "美兰区",
  "value": "460108" }],


[
{
  "name": "南沙群岛",
  "value": "460322" },

{
  "name": "西沙群岛",
  "value": "460323" },

{
  "name": "中沙群岛",
  "value": "460324" }],


[
{
  "name": "五指山市",
  "value": "469001" },

{
  "name": "琼海市",
  "value": "469002" },

{
  "name": "儋州市",
  "value": "469003" },

{
  "name": "文昌市",
  "value": "469005" },

{
  "name": "万宁市",
  "value": "469006" },

{
  "name": "东方市",
  "value": "469007" },

{
  "name": "高新区",
  "value": "469008" },

{
  "name": "定安县",
  "value": "469025" },

{
  "name": "屯昌县",
  "value": "469026" },

{
  "name": "澄迈县",
  "value": "469027" },

{
  "name": "临高县",
  "value": "469028" },

{
  "name": "白沙黎族自治县",
  "value": "469030" },

{
  "name": "昌江黎族自治县",
  "value": "469031" },

{
  "name": "乐东黎族自治县",
  "value": "469033" },

{
  "name": "陵水黎族自治县",
  "value": "469034" },

{
  "name": "保亭黎族苗族自治县",
  "value": "469035" },

{
  "name": "琼中黎族苗族自治县",
  "value": "469036" },

{
  "name": "西、南、中沙群岛办事处",
  "value": "469051" }],


[
{
  "name": "河西区",
  "value": "469040" },

{
  "name": "河东区",
  "value": "469041" },

{
  "name": "市辖区",
  "value": "469042" },

{
  "name": "田独镇",
  "value": "469043" },

{
  "name": "凤凰镇",
  "value": "469044" },

{
  "name": "三亚市",
  "value": "469052" },

{
  "name": "崖城镇",
  "value": "469053" },

{
  "name": "天涯镇",
  "value": "469054" },

{
  "name": "育才乡",
  "value": "469055" },

{
  "name": "海棠湾镇",
  "value": "469056" }]],



[
[
{
  "name": "万州区",
  "value": "500101" },

{
  "name": "涪陵区",
  "value": "500102" },

{
  "name": "渝中区",
  "value": "500103" },

{
  "name": "大渡口区",
  "value": "500104" },

{
  "name": "江北区",
  "value": "500105" },

{
  "name": "沙坪坝区",
  "value": "500106" },

{
  "name": "九龙坡区",
  "value": "500107" },

{
  "name": "南岸区",
  "value": "500108" },

{
  "name": "北碚区",
  "value": "500109" },

{
  "name": "万盛区",
  "value": "500110" },

{
  "name": "綦江区",
  "value": "50011001" },

{
  "name": "双桥区",
  "value": "500111" },

{
  "name": "大足区",
  "value": "50011101" },

{
  "name": "渝北区",
  "value": "500112" },

{
  "name": "巴南区",
  "value": "500113" },

{
  "name": "黔江区",
  "value": "500114" },

{
  "name": "长寿区",
  "value": "500115" },

{
  "name": "綦江区",
  "value": "500222" },

{
  "name": "潼南县",
  "value": "500223" },

{
  "name": "铜梁县",
  "value": "500224" },

{
  "name": "大足区",
  "value": "500225" },

{
  "name": "荣昌县",
  "value": "500226" },

{
  "name": "璧山县",
  "value": "500227" },

{
  "name": "梁平县",
  "value": "500228" },

{
  "name": "城口县",
  "value": "500229" },

{
  "name": "丰都县",
  "value": "500230" },

{
  "name": "垫江县",
  "value": "500231" },

{
  "name": "武隆县",
  "value": "500232" },

{
  "name": "忠县",
  "value": "500233" },

{
  "name": "开县",
  "value": "500234" },

{
  "name": "云阳县",
  "value": "500235" },

{
  "name": "奉节县",
  "value": "500236" },

{
  "name": "巫山县",
  "value": "500237" },

{
  "name": "巫溪县",
  "value": "500238" },

{
  "name": "石柱土家族自治县",
  "value": "500240" },

{
  "name": "秀山土家族苗族自治县",
  "value": "500241" },

{
  "name": "酉阳土家族苗族自治县",
  "value": "500242" },

{
  "name": "彭水苗族土家族自治县",
  "value": "500243" },

{
  "name": "高新区",
  "value": "500244" },

{
  "name": "江津区",
  "value": "500381" },

{
  "name": "合川区",
  "value": "500382" },

{
  "name": "永川区",
  "value": "500383" },

{
  "name": "南川区",
  "value": "500384" }]],



[
[
{
  "name": "锦江区",
  "value": "510104" },

{
  "name": "青羊区",
  "value": "510105" },

{
  "name": "金牛区",
  "value": "510106" },

{
  "name": "武侯区",
  "value": "510107" },

{
  "name": "成华区",
  "value": "510108" },

{
  "name": "龙泉驿区",
  "value": "510112" },

{
  "name": "青白江区",
  "value": "510113" },

{
  "name": "新都区",
  "value": "510114" },

{
  "name": "温江区",
  "value": "510115" },

{
  "name": "金堂县",
  "value": "510121" },

{
  "name": "双流县",
  "value": "510122" },

{
  "name": "郫县",
  "value": "510124" },

{
  "name": "大邑县",
  "value": "510129" },

{
  "name": "蒲江县",
  "value": "510131" },

{
  "name": "新津县",
  "value": "510132" },

{
  "name": "都江堰市",
  "value": "510181" },

{
  "name": "彭州市",
  "value": "510182" },

{
  "name": "邛崃市",
  "value": "510183" },

{
  "name": "崇州市",
  "value": "510184" },

{
  "name": "高新区",
  "value": "513460" },

{
  "name": "高新西区",
  "value": "513465" }],


[
{
  "name": "自流井区",
  "value": "510302" },

{
  "name": "贡井区",
  "value": "510303" },

{
  "name": "大安区",
  "value": "510304" },

{
  "name": "沿滩区",
  "value": "510311" },

{
  "name": "荣县",
  "value": "510321" },

{
  "name": "富顺县",
  "value": "510322" }],


[
{
  "name": "东区",
  "value": "510402" },

{
  "name": "西区",
  "value": "510403" },

{
  "name": "仁和区",
  "value": "510411" },

{
  "name": "米易县",
  "value": "510421" },

{
  "name": "盐边县",
  "value": "510422" }],


[
{
  "name": "江阳区",
  "value": "510502" },

{
  "name": "纳溪区",
  "value": "510503" },

{
  "name": "龙马潭区",
  "value": "510504" },

{
  "name": "泸县",
  "value": "510521" },

{
  "name": "合江县",
  "value": "510522" },

{
  "name": "叙永县",
  "value": "510524" },

{
  "name": "古蔺县",
  "value": "510525" }],


[
{
  "name": "旌阳区",
  "value": "510603" },

{
  "name": "中江县",
  "value": "510623" },

{
  "name": "罗江县",
  "value": "510626" },

{
  "name": "广汉市",
  "value": "510681" },

{
  "name": "什邡市",
  "value": "510682" },

{
  "name": "绵竹市",
  "value": "510683" }],


[
{
  "name": "涪城区",
  "value": "510703" },

{
  "name": "游仙区",
  "value": "510704" },

{
  "name": "三台县",
  "value": "510722" },

{
  "name": "盐亭县",
  "value": "510723" },

{
  "name": "安县",
  "value": "510724" },

{
  "name": "梓潼县",
  "value": "510725" },

{
  "name": "北川羌族自治县",
  "value": "510726" },

{
  "name": "平武县",
  "value": "510727" },

{
  "name": "江油市",
  "value": "510781" },

{
  "name": "农科区",
  "value": "513461" },

{
  "name": "经济技术开发区",
  "value": "513462" },

{
  "name": "高新区",
  "value": "513463" },

{
  "name": "仙海区",
  "value": "513464" }],


[
{
  "name": "利州区",
  "value": "510802" },

{
  "name": "昭化区",
  "value": "510811" },

{
  "name": "朝天区",
  "value": "510812" },

{
  "name": "旺苍县",
  "value": "510821" },

{
  "name": "青川县",
  "value": "510822" },

{
  "name": "剑阁县",
  "value": "510823" },

{
  "name": "苍溪县",
  "value": "510824" }],


[
{
  "name": "船山区",
  "value": "510903" },

{
  "name": "安居区",
  "value": "510904" },

{
  "name": "蓬溪县",
  "value": "510921" },

{
  "name": "射洪县",
  "value": "510922" },

{
  "name": "大英县",
  "value": "510923" }],


[
{
  "name": "市中区",
  "value": "511002" },

{
  "name": "东兴区",
  "value": "511011" },

{
  "name": "威远县",
  "value": "511024" },

{
  "name": "资中县",
  "value": "511025" },

{
  "name": "隆昌县",
  "value": "511028" }],


[
{
  "name": "市中区",
  "value": "511102" },

{
  "name": "沙湾区",
  "value": "511111" },

{
  "name": "五通桥区",
  "value": "511112" },

{
  "name": "金口河区",
  "value": "511113" },

{
  "name": "犍为县",
  "value": "511123" },

{
  "name": "井研县",
  "value": "511124" },

{
  "name": "夹江县",
  "value": "511126" },

{
  "name": "沐川县",
  "value": "511129" },

{
  "name": "峨边彝族自治县",
  "value": "511132" },

{
  "name": "马边彝族自治县",
  "value": "511133" },

{
  "name": "峨眉山市",
  "value": "511181" }],


[
{
  "name": "顺庆区",
  "value": "511302" },

{
  "name": "高坪区",
  "value": "511303" },

{
  "name": "嘉陵区",
  "value": "511304" },

{
  "name": "南部县",
  "value": "511321" },

{
  "name": "营山县",
  "value": "511322" },

{
  "name": "蓬安县",
  "value": "511323" },

{
  "name": "仪陇县",
  "value": "511324" },

{
  "name": "西充县",
  "value": "511325" },

{
  "name": "阆中市",
  "value": "511381" }],


[
{
  "name": "东坡区",
  "value": "511402" },

{
  "name": "仁寿县",
  "value": "511421" },

{
  "name": "彭山县",
  "value": "511422" },

{
  "name": "洪雅县",
  "value": "511423" },

{
  "name": "丹棱县",
  "value": "511424" },

{
  "name": "青神县",
  "value": "511425" }],


[
{
  "name": "翠屏区",
  "value": "511502" },

{
  "name": "南溪区",
  "value": "511503" },

{
  "name": "宜宾县",
  "value": "511521" },

{
  "name": "南溪县",
  "value": "511522" },

{
  "name": "江安县",
  "value": "511523" },

{
  "name": "长宁县",
  "value": "511524" },

{
  "name": "高县",
  "value": "511525" },

{
  "name": "珙县",
  "value": "511526" },

{
  "name": "筠连县",
  "value": "511527" },

{
  "name": "兴文县",
  "value": "511528" },

{
  "name": "屏山县",
  "value": "511529" }],


[
{
  "name": "广安区",
  "value": "511602" },

{
  "name": "前锋区",
  "value": "511603" },

{
  "name": "岳池县",
  "value": "511621" },

{
  "name": "武胜县",
  "value": "511622" },

{
  "name": "邻水县",
  "value": "511623" },

{
  "name": "华蓥市",
  "value": "511681" }],


[
{
  "name": "通川区",
  "value": "511702" },

{
  "name": "达川区",
  "value": "511721" },

{
  "name": "宣汉县",
  "value": "511722" },

{
  "name": "开江县",
  "value": "511723" },

{
  "name": "大竹县",
  "value": "511724" },

{
  "name": "渠县",
  "value": "511725" },

{
  "name": "万源市",
  "value": "511781" }],


[
{
  "name": "雨城区",
  "value": "511802" },

{
  "name": "名山区",
  "value": "511821" },

{
  "name": "荥经县",
  "value": "511822" },

{
  "name": "汉源县",
  "value": "511823" },

{
  "name": "石棉县",
  "value": "511824" },

{
  "name": "天全县",
  "value": "511825" },

{
  "name": "芦山县",
  "value": "511826" },

{
  "name": "宝兴县",
  "value": "511827" }],


[
{
  "name": "巴州区",
  "value": "511902" },

{
  "name": "恩阳区",
  "value": "511903" },

{
  "name": "通江县",
  "value": "511921" },

{
  "name": "南江县",
  "value": "511922" },

{
  "name": "平昌县",
  "value": "511923" }],


[
{
  "name": "雁江区",
  "value": "512002" },

{
  "name": "安岳县",
  "value": "512021" },

{
  "name": "乐至县",
  "value": "512022" },

{
  "name": "简阳市",
  "value": "512081" }],


[
{
  "name": "汶川县",
  "value": "513221" },

{
  "name": "理县",
  "value": "513222" },

{
  "name": "茂县",
  "value": "513223" },

{
  "name": "松潘县",
  "value": "513224" },

{
  "name": "九寨沟县",
  "value": "513225" },

{
  "name": "金川县",
  "value": "513226" },

{
  "name": "小金县",
  "value": "513227" },

{
  "name": "黑水县",
  "value": "513228" },

{
  "name": "马尔康县",
  "value": "513229" },

{
  "name": "壤塘县",
  "value": "513230" },

{
  "name": "阿坝县",
  "value": "513231" },

{
  "name": "若尔盖县",
  "value": "513232" },

{
  "name": "红原县",
  "value": "513233" }],


[
{
  "name": "康定县",
  "value": "513321" },

{
  "name": "泸定县",
  "value": "513322" },

{
  "name": "丹巴县",
  "value": "513323" },

{
  "name": "九龙县",
  "value": "513324" },

{
  "name": "雅江县",
  "value": "513325" },

{
  "name": "道孚县",
  "value": "513326" },

{
  "name": "炉霍县",
  "value": "513327" },

{
  "name": "甘孜县",
  "value": "513328" },

{
  "name": "新龙县",
  "value": "513329" },

{
  "name": "德格县",
  "value": "513330" },

{
  "name": "白玉县",
  "value": "513331" },

{
  "name": "石渠县",
  "value": "513332" },

{
  "name": "色达县",
  "value": "513333" },

{
  "name": "理塘县",
  "value": "513334" },

{
  "name": "巴塘县",
  "value": "513335" },

{
  "name": "乡城县",
  "value": "513336" },

{
  "name": "稻城县",
  "value": "513337" },

{
  "name": "得荣县",
  "value": "513338" }],


[
{
  "name": "西昌市",
  "value": "513401" },

{
  "name": "木里藏族自治县",
  "value": "513422" },

{
  "name": "盐源县",
  "value": "513423" },

{
  "name": "德昌县",
  "value": "513424" },

{
  "name": "会理县",
  "value": "513425" },

{
  "name": "会东县",
  "value": "513426" },

{
  "name": "宁南县",
  "value": "513427" },

{
  "name": "普格县",
  "value": "513428" },

{
  "name": "布拖县",
  "value": "513429" },

{
  "name": "金阳县",
  "value": "513430" },

{
  "name": "昭觉县",
  "value": "513431" },

{
  "name": "喜德县",
  "value": "513432" },

{
  "name": "冕宁县",
  "value": "513433" },

{
  "name": "越西县",
  "value": "513434" },

{
  "name": "甘洛县",
  "value": "513435" },

{
  "name": "美姑县",
  "value": "513436" },

{
  "name": "雷波县",
  "value": "513437" }]],



[
[
{
  "name": "南明区",
  "value": "520102" },

{
  "name": "云岩区",
  "value": "520103" },

{
  "name": "花溪区",
  "value": "520111" },

{
  "name": "乌当区",
  "value": "520112" },

{
  "name": "白云区",
  "value": "520113" },

{
  "name": "小河区",
  "value": "520114" },

{
  "name": "观山湖区",
  "value": "520115" },

{
  "name": "开阳县",
  "value": "520121" },

{
  "name": "息烽县",
  "value": "520122" },

{
  "name": "修文县",
  "value": "520123" },

{
  "name": "清镇市",
  "value": "520181" },

{
  "name": "金阳新区",
  "value": "522745" }],


[
{
  "name": "钟山区",
  "value": "520201" },

{
  "name": "六枝特区",
  "value": "520203" },

{
  "name": "水城县",
  "value": "520221" },

{
  "name": "盘县",
  "value": "520222" }],


[
{
  "name": "红花岗区",
  "value": "520302" },

{
  "name": "汇川区",
  "value": "520303" },

{
  "name": "遵义县",
  "value": "520321" },

{
  "name": "桐梓县",
  "value": "520322" },

{
  "name": "绥阳县",
  "value": "520323" },

{
  "name": "正安县",
  "value": "520324" },

{
  "name": "道真仡佬族苗族自治县",
  "value": "520325" },

{
  "name": "务川仡佬族苗族自治县",
  "value": "520326" },

{
  "name": "凤冈县",
  "value": "520327" },

{
  "name": "湄潭县",
  "value": "520328" },

{
  "name": "余庆县",
  "value": "520329" },

{
  "name": "习水县",
  "value": "520330" },

{
  "name": "赤水市",
  "value": "520381" },

{
  "name": "仁怀市",
  "value": "520382" }],


[
{
  "name": "西秀区",
  "value": "520402" },

{
  "name": "平坝县",
  "value": "520421" },

{
  "name": "普定县",
  "value": "520422" },

{
  "name": "镇宁布依族苗族自治县",
  "value": "520423" },

{
  "name": "关岭布依族苗族自治县",
  "value": "520424" },

{
  "name": "紫云苗族布依族自治县",
  "value": "520425" }],


[
{
  "name": "市辖区",
  "value": "520501" },

{
  "name": "七星关区",
  "value": "520502" },

{
  "name": "大方县",
  "value": "520521" },

{
  "name": "黔西县",
  "value": "520522" },

{
  "name": "金沙县",
  "value": "520523" },

{
  "name": "织金县",
  "value": "520524" },

{
  "name": "纳雍县",
  "value": "520525" },

{
  "name": "威宁彝族回族苗族自治县",
  "value": "520526" },

{
  "name": "赫章县",
  "value": "520527" }],


[
{
  "name": "市辖区",
  "value": "520601" },

{
  "name": "碧江区",
  "value": "520602" },

{
  "name": "万山区",
  "value": "520603" },

{
  "name": "江口县",
  "value": "520621" },

{
  "name": "玉屏侗族自治县",
  "value": "520622" },

{
  "name": "石阡县",
  "value": "520623" },

{
  "name": "思南县",
  "value": "520624" },

{
  "name": "印江土家族苗族自治县",
  "value": "520625" },

{
  "name": "德江县",
  "value": "520626" },

{
  "name": "沿河土家族自治县",
  "value": "520627" },

{
  "name": "松桃苗族自治县",
  "value": "520628" }],


[
{
  "name": "铜仁市",
  "value": "522201" },

{
  "name": "江口县",
  "value": "522222" },

{
  "name": "玉屏侗族自治县",
  "value": "522223" },

{
  "name": "石阡县",
  "value": "522224" },

{
  "name": "思南县",
  "value": "522225" },

{
  "name": "印江土家族苗族自治县",
  "value": "522226" },

{
  "name": "德江县",
  "value": "522227" },

{
  "name": "沿河土家族自治县",
  "value": "522228" },

{
  "name": "松桃苗族自治县",
  "value": "522229" },

{
  "name": "万山特区",
  "value": "522230" }],


[
{
  "name": "兴义市",
  "value": "522301" },

{
  "name": "兴仁县",
  "value": "522322" },

{
  "name": "普安县",
  "value": "522323" },

{
  "name": "晴隆县",
  "value": "522324" },

{
  "name": "贞丰县",
  "value": "522325" },

{
  "name": "望谟县",
  "value": "522326" },

{
  "name": "册亨县",
  "value": "522327" },

{
  "name": "安龙县",
  "value": "522328" }],


[
{
  "name": "毕节市",
  "value": "522401" },

{
  "name": "大方县",
  "value": "522422" },

{
  "name": "黔西县",
  "value": "522423" },

{
  "name": "金沙县",
  "value": "522424" },

{
  "name": "织金县",
  "value": "522425" },

{
  "name": "纳雍县",
  "value": "522426" },

{
  "name": "威宁彝族回族苗族自治县",
  "value": "522427" },

{
  "name": "赫章县",
  "value": "522428" }],


[
{
  "name": "凯里市",
  "value": "522601" },

{
  "name": "黄平县",
  "value": "522622" },

{
  "name": "施秉县",
  "value": "522623" },

{
  "name": "三穗县",
  "value": "522624" },

{
  "name": "镇远县",
  "value": "522625" },

{
  "name": "岑巩县",
  "value": "522626" },

{
  "name": "天柱县",
  "value": "522627" },

{
  "name": "锦屏县",
  "value": "522628" },

{
  "name": "剑河县",
  "value": "522629" },

{
  "name": "台江县",
  "value": "522630" },

{
  "name": "黎平县",
  "value": "522631" },

{
  "name": "榕江县",
  "value": "522632" },

{
  "name": "从江县",
  "value": "522633" },

{
  "name": "雷山县",
  "value": "522634" },

{
  "name": "麻江县",
  "value": "522635" },

{
  "name": "丹寨县",
  "value": "522636" }],


[
{
  "name": "都匀市",
  "value": "522701" },

{
  "name": "福泉市",
  "value": "522702" },

{
  "name": "荔波县",
  "value": "522722" },

{
  "name": "贵定县",
  "value": "522723" },

{
  "name": "瓮安县",
  "value": "522725" },

{
  "name": "独山县",
  "value": "522726" },

{
  "name": "平塘县",
  "value": "522727" },

{
  "name": "罗甸县",
  "value": "522728" },

{
  "name": "长顺县",
  "value": "522729" },

{
  "name": "龙里县",
  "value": "522730" },

{
  "name": "惠水县",
  "value": "522731" },

{
  "name": "三都水族自治县",
  "value": "522732" }]],



[
[
{
  "name": "五华区",
  "value": "530102" },

{
  "name": "盘龙区",
  "value": "530103" },

{
  "name": "经济技术开发区",
  "value": "530104" },

{
  "name": "官渡区",
  "value": "530111" },

{
  "name": "西山区",
  "value": "530112" },

{
  "name": "东川区",
  "value": "530113" },

{
  "name": "呈贡区",
  "value": "530114" },

{
  "name": "呈贡区",
  "value": "530121" },

{
  "name": "晋宁县",
  "value": "530122" },

{
  "name": "富民县",
  "value": "530124" },

{
  "name": "宜良县",
  "value": "530125" },

{
  "name": "石林彝族自治县",
  "value": "530126" },

{
  "name": "嵩明县",
  "value": "530127" },

{
  "name": "禄劝彝族苗族自治县",
  "value": "530128" },

{
  "name": "寻甸回族彝族自治县",
  "value": "530129" },

{
  "name": "安宁市",
  "value": "530181" }],


[
{
  "name": "麒麟区",
  "value": "530302" },

{
  "name": "马龙县",
  "value": "530321" },

{
  "name": "陆良县",
  "value": "530322" },

{
  "name": "师宗县",
  "value": "530323" },

{
  "name": "罗平县",
  "value": "530324" },

{
  "name": "富源县",
  "value": "530325" },

{
  "name": "会泽县",
  "value": "530326" },

{
  "name": "沾益县",
  "value": "530328" },

{
  "name": "宣威市",
  "value": "530381" }],


[
{
  "name": "红塔区",
  "value": "530402" },

{
  "name": "江川县",
  "value": "530421" },

{
  "name": "澄江县",
  "value": "530422" },

{
  "name": "通海县",
  "value": "530423" },

{
  "name": "华宁县",
  "value": "530424" },

{
  "name": "易门县",
  "value": "530425" },

{
  "name": "峨山彝族自治县",
  "value": "530426" },

{
  "name": "新平彝族傣族自治县",
  "value": "530427" },

{
  "name": "元江哈尼族彝族傣族自治县",
  "value": "530428" }],


[
{
  "name": "隆阳区",
  "value": "530502" },

{
  "name": "施甸县",
  "value": "530521" },

{
  "name": "腾冲县",
  "value": "530522" },

{
  "name": "龙陵县",
  "value": "530523" },

{
  "name": "昌宁县",
  "value": "530524" }],


[
{
  "name": "昭阳区",
  "value": "530602" },

{
  "name": "鲁甸县",
  "value": "530621" },

{
  "name": "巧家县",
  "value": "530622" },

{
  "name": "盐津县",
  "value": "530623" },

{
  "name": "大关县",
  "value": "530624" },

{
  "name": "永善县",
  "value": "530625" },

{
  "name": "绥江县",
  "value": "530626" },

{
  "name": "镇雄县",
  "value": "530627" },

{
  "name": "彝良县",
  "value": "530628" },

{
  "name": "威信县",
  "value": "530629" },

{
  "name": "水富县",
  "value": "530630" }],


[
{
  "name": "古城区",
  "value": "530702" },

{
  "name": "玉龙纳西族自治县",
  "value": "530721" },

{
  "name": "永胜县",
  "value": "530722" },

{
  "name": "华坪县",
  "value": "530723" },

{
  "name": "宁蒗彝族自治县",
  "value": "530724" }],


[
{
  "name": "思茅区",
  "value": "530802" },

{
  "name": "宁洱哈尼族彝族自治县",
  "value": "530821" },

{
  "name": "墨江哈尼族自治县",
  "value": "530822" },

{
  "name": "景东彝族自治县",
  "value": "530823" },

{
  "name": "景谷傣族彝族自治县",
  "value": "530824" },

{
  "name": "镇沅彝族哈尼族拉祜族自治县",
  "value": "530825" },

{
  "name": "江城哈尼族彝族自治县",
  "value": "530826" },

{
  "name": "孟连傣族拉祜族佤族自治县",
  "value": "530827" },

{
  "name": "澜沧拉祜族自治县",
  "value": "530828" },

{
  "name": "西盟佤族自治县",
  "value": "530829" }],


[
{
  "name": "临翔区",
  "value": "530902" },

{
  "name": "凤庆县",
  "value": "530921" },

{
  "name": "云县",
  "value": "530922" },

{
  "name": "永德县",
  "value": "530923" },

{
  "name": "镇康县",
  "value": "530924" },

{
  "name": "双江拉祜族佤族布朗族傣族自治县",
  "value": "530925" },

{
  "name": "耿马傣族佤族自治县",
  "value": "530926" },

{
  "name": "沧源佤族自治县",
  "value": "530927" }],


[
{
  "name": "楚雄市",
  "value": "532301" },

{
  "name": "双柏县",
  "value": "532322" },

{
  "name": "牟定县",
  "value": "532323" },

{
  "name": "南华县",
  "value": "532324" },

{
  "name": "姚安县",
  "value": "532325" },

{
  "name": "大姚县",
  "value": "532326" },

{
  "name": "永仁县",
  "value": "532327" },

{
  "name": "元谋县",
  "value": "532328" },

{
  "name": "武定县",
  "value": "532329" },

{
  "name": "禄丰县",
  "value": "532331" }],


[
{
  "name": "个旧市",
  "value": "532501" },

{
  "name": "开远市",
  "value": "532502" },

{
  "name": "蒙自市",
  "value": "532522" },

{
  "name": "屏边苗族自治县",
  "value": "532523" },

{
  "name": "建水县",
  "value": "532524" },

{
  "name": "石屏县",
  "value": "532525" },

{
  "name": "弥勒区",
  "value": "532526" },

{
  "name": "泸西县",
  "value": "532527" },

{
  "name": "元阳县",
  "value": "532528" },

{
  "name": "红河县",
  "value": "532529" },

{
  "name": "金平苗族瑶族傣族自治县",
  "value": "532530" },

{
  "name": "绿春县",
  "value": "532531" },

{
  "name": "河口瑶族自治县",
  "value": "532532" }],


[
{
  "name": "文山市",
  "value": "532601" },

{
  "name": "文山市",
  "value": "532621" },

{
  "name": "砚山县",
  "value": "532622" },

{
  "name": "西畴县",
  "value": "532623" },

{
  "name": "麻栗坡县",
  "value": "532624" },

{
  "name": "马关县",
  "value": "532625" },

{
  "name": "丘北县",
  "value": "532626" },

{
  "name": "广南县",
  "value": "532627" },

{
  "name": "富宁县",
  "value": "532628" }],


[
{
  "name": "景洪市",
  "value": "532801" },

{
  "name": "勐海县",
  "value": "532822" },

{
  "name": "勐腊县",
  "value": "532823" }],


[
{
  "name": "大理市",
  "value": "532901" },

{
  "name": "漾濞彝族自治县",
  "value": "532922" },

{
  "name": "祥云县",
  "value": "532923" },

{
  "name": "宾川县",
  "value": "532924" },

{
  "name": "弥渡县",
  "value": "532925" },

{
  "name": "南涧彝族自治县",
  "value": "532926" },

{
  "name": "巍山彝族回族自治县",
  "value": "532927" },

{
  "name": "永平县",
  "value": "532928" },

{
  "name": "云龙县",
  "value": "532929" },

{
  "name": "洱源县",
  "value": "532930" },

{
  "name": "剑川县",
  "value": "532931" },

{
  "name": "鹤庆县",
  "value": "532932" }],


[
{
  "name": "瑞丽市",
  "value": "533102" },

{
  "name": "芒市",
  "value": "533103" },

{
  "name": "梁河县",
  "value": "533122" },

{
  "name": "盈江县",
  "value": "533123" },

{
  "name": "陇川县",
  "value": "533124" }],


[
{
  "name": "泸水县",
  "value": "533321" },

{
  "name": "福贡县",
  "value": "533323" },

{
  "name": "贡山独龙族怒族自治县",
  "value": "533324" },

{
  "name": "兰坪白族普米族自治县",
  "value": "533325" }],


[
{
  "name": "香格里拉县",
  "value": "533421" },

{
  "name": "德钦县",
  "value": "533422" },

{
  "name": "维西傈僳族自治县",
  "value": "533423" }]],



[
[
{
  "name": "城关区",
  "value": "540102" },

{
  "name": "林周县",
  "value": "540121" },

{
  "name": "当雄县",
  "value": "540122" },

{
  "name": "尼木县",
  "value": "540123" },

{
  "name": "曲水县",
  "value": "540124" },

{
  "name": "堆龙德庆县",
  "value": "540125" },

{
  "name": "达孜县",
  "value": "540126" },

{
  "name": "墨竹工卡县",
  "value": "540127" }],


[
{
  "name": "昌都县",
  "value": "542121" },

{
  "name": "江达县",
  "value": "542122" },

{
  "name": "贡觉县",
  "value": "542123" },

{
  "name": "类乌齐县",
  "value": "542124" },

{
  "name": "丁青县",
  "value": "542125" },

{
  "name": "察雅县",
  "value": "542126" },

{
  "name": "八宿县",
  "value": "542127" },

{
  "name": "左贡县",
  "value": "542128" },

{
  "name": "芒康县",
  "value": "542129" },

{
  "name": "洛隆县",
  "value": "542132" },

{
  "name": "边坝县",
  "value": "542133" }],


[
{
  "name": "乃东县",
  "value": "542221" },

{
  "name": "扎囊县",
  "value": "542222" },

{
  "name": "贡嘎县",
  "value": "542223" },

{
  "name": "桑日县",
  "value": "542224" },

{
  "name": "琼结县",
  "value": "542225" },

{
  "name": "曲松县",
  "value": "542226" },

{
  "name": "措美县",
  "value": "542227" },

{
  "name": "洛扎县",
  "value": "542228" },

{
  "name": "加查县",
  "value": "542229" },

{
  "name": "隆子县",
  "value": "542231" },

{
  "name": "错那县",
  "value": "542232" },

{
  "name": "浪卡子县",
  "value": "542233" }],


[
{
  "name": "日喀则市",
  "value": "542301" },

{
  "name": "南木林县",
  "value": "542322" },

{
  "name": "江孜县",
  "value": "542323" },

{
  "name": "定日县",
  "value": "542324" },

{
  "name": "萨迦县",
  "value": "542325" },

{
  "name": "拉孜县",
  "value": "542326" },

{
  "name": "昂仁县",
  "value": "542327" },

{
  "name": "谢通门县",
  "value": "542328" },

{
  "name": "白朗县",
  "value": "542329" },

{
  "name": "仁布县",
  "value": "542330" },

{
  "name": "康马县",
  "value": "542331" },

{
  "name": "定结县",
  "value": "542332" },

{
  "name": "仲巴县",
  "value": "542333" },

{
  "name": "亚东县",
  "value": "542334" },

{
  "name": "吉隆县",
  "value": "542335" },

{
  "name": "聂拉木县",
  "value": "542336" },

{
  "name": "萨嘎县",
  "value": "542337" },

{
  "name": "岗巴县",
  "value": "542338" }],


[
{
  "name": "那曲县",
  "value": "542421" },

{
  "name": "嘉黎县",
  "value": "542422" },

{
  "name": "比如县",
  "value": "542423" },

{
  "name": "聂荣县",
  "value": "542424" },

{
  "name": "安多县",
  "value": "542425" },

{
  "name": "申扎县",
  "value": "542426" },

{
  "name": "索县",
  "value": "542427" },

{
  "name": "班戈县",
  "value": "542428" },

{
  "name": "巴青县",
  "value": "542429" },

{
  "name": "尼玛县",
  "value": "542430" }],


[
{
  "name": "普兰县",
  "value": "542521" },

{
  "name": "札达县",
  "value": "542522" },

{
  "name": "噶尔县",
  "value": "542523" },

{
  "name": "日土县",
  "value": "542524" },

{
  "name": "革吉县",
  "value": "542525" },

{
  "name": "改则县",
  "value": "542526" },

{
  "name": "措勤县",
  "value": "542527" }],


[
{
  "name": "林芝县",
  "value": "542621" },

{
  "name": "工布江达县",
  "value": "542622" },

{
  "name": "米林县",
  "value": "542623" },

{
  "name": "墨脱县",
  "value": "542624" },

{
  "name": "波密县",
  "value": "542625" },

{
  "name": "察隅县",
  "value": "542626" },

{
  "name": "朗县",
  "value": "542627" }]],



[
[
{
  "name": "新城区",
  "value": "610102" },

{
  "name": "碑林区",
  "value": "610103" },

{
  "name": "莲湖区",
  "value": "610104" },

{
  "name": "灞桥区",
  "value": "610111" },

{
  "name": "未央区",
  "value": "610112" },

{
  "name": "雁塔区",
  "value": "610113" },

{
  "name": "阎良区",
  "value": "610114" },

{
  "name": "临潼区",
  "value": "610115" },

{
  "name": "长安区",
  "value": "610116" },

{
  "name": "蓝田县",
  "value": "610122" },

{
  "name": "周至县",
  "value": "610124" },

{
  "name": "户县",
  "value": "610125" },

{
  "name": "高陵县",
  "value": "610126" },

{
  "name": "高新区",
  "value": "611052" }],


[
{
  "name": "王益区",
  "value": "610202" },

{
  "name": "印台区",
  "value": "610203" },

{
  "name": "耀州区",
  "value": "610204" },

{
  "name": "宜君县",
  "value": "610222" },

{
  "name": "新区",
  "value": "611053" }],


[
{
  "name": "渭滨区",
  "value": "610302" },

{
  "name": "金台区",
  "value": "610303" },

{
  "name": "陈仓区",
  "value": "610304" },

{
  "name": "凤翔县",
  "value": "610322" },

{
  "name": "岐山县",
  "value": "610323" },

{
  "name": "扶风县",
  "value": "610324" },

{
  "name": "眉县",
  "value": "610326" },

{
  "name": "陇县",
  "value": "610327" },

{
  "name": "千阳县",
  "value": "610328" },

{
  "name": "麟游县",
  "value": "610329" },

{
  "name": "凤县",
  "value": "610330" },

{
  "name": "太白县",
  "value": "610331" }],


[
{
  "name": "秦都区",
  "value": "610402" },

{
  "name": "渭城区",
  "value": "610403" },

{
  "name": "杨陵区",
  "value": "610404" },

{
  "name": "三原县",
  "value": "610422" },

{
  "name": "泾阳县",
  "value": "610423" },

{
  "name": "兴平市",
  "value": "610424" },

{
  "name": "乾县",
  "value": "610425" },

{
  "name": "礼泉县",
  "value": "610426" },

{
  "name": "永寿县",
  "value": "610427" },

{
  "name": "彬县",
  "value": "610428" },

{
  "name": "长武县",
  "value": "610429" },

{
  "name": "旬邑县",
  "value": "610430" },

{
  "name": "淳化县",
  "value": "610431" },

{
  "name": "武功县",
  "value": "610481" }],


[
{
  "name": "临渭区",
  "value": "610502" },

{
  "name": "华县",
  "value": "610521" },

{
  "name": "潼关县",
  "value": "610522" },

{
  "name": "大荔县",
  "value": "610523" },

{
  "name": "合阳县",
  "value": "610524" },

{
  "name": "澄城县",
  "value": "610525" },

{
  "name": "蒲城县",
  "value": "610526" },

{
  "name": "白水县",
  "value": "610527" },

{
  "name": "富平县",
  "value": "610528" },

{
  "name": "韩城市",
  "value": "610581" },

{
  "name": "华阴市",
  "value": "610582" }],


[
{
  "name": "宝塔区",
  "value": "610602" },

{
  "name": "延长县",
  "value": "610621" },

{
  "name": "延川县",
  "value": "610622" },

{
  "name": "子长县",
  "value": "610623" },

{
  "name": "安塞县",
  "value": "610624" },

{
  "name": "志丹县",
  "value": "610625" },

{
  "name": "吴起县",
  "value": "610626" },

{
  "name": "甘泉县",
  "value": "610627" },

{
  "name": "富县",
  "value": "610628" },

{
  "name": "洛川县",
  "value": "610629" },

{
  "name": "宜川县",
  "value": "610630" },

{
  "name": "黄龙县",
  "value": "610631" },

{
  "name": "黄陵县",
  "value": "610632" }],


[
{
  "name": "汉台区",
  "value": "610702" },

{
  "name": "南郑县",
  "value": "610721" },

{
  "name": "城固县",
  "value": "610722" },

{
  "name": "洋县",
  "value": "610723" },

{
  "name": "西乡县",
  "value": "610724" },

{
  "name": "勉县",
  "value": "610725" },

{
  "name": "宁强县",
  "value": "610726" },

{
  "name": "略阳县",
  "value": "610727" },

{
  "name": "镇巴县",
  "value": "610728" },

{
  "name": "留坝县",
  "value": "610729" },

{
  "name": "佛坪县",
  "value": "610730" },

{
  "name": "经济开发区",
  "value": "611051" }],


[
{
  "name": "榆阳区",
  "value": "610802" },

{
  "name": "神木县",
  "value": "610821" },

{
  "name": "府谷县",
  "value": "610822" },

{
  "name": "横山县",
  "value": "610823" },

{
  "name": "靖边县",
  "value": "610824" },

{
  "name": "定边县",
  "value": "610825" },

{
  "name": "绥德县",
  "value": "610826" },

{
  "name": "米脂县",
  "value": "610827" },

{
  "name": "佳县",
  "value": "610828" },

{
  "name": "吴堡县",
  "value": "610829" },

{
  "name": "清涧县",
  "value": "610830" },

{
  "name": "子洲县",
  "value": "610831" }],


[
{
  "name": "汉滨区",
  "value": "610902" },

{
  "name": "汉阴县",
  "value": "610921" },

{
  "name": "石泉县",
  "value": "610922" },

{
  "name": "宁陕县",
  "value": "610923" },

{
  "name": "紫阳县",
  "value": "610924" },

{
  "name": "岚皋县",
  "value": "610925" },

{
  "name": "平利县",
  "value": "610926" },

{
  "name": "镇坪县",
  "value": "610927" },

{
  "name": "旬阳县",
  "value": "610928" },

{
  "name": "白河县",
  "value": "610929" }],


[
{
  "name": "商州区",
  "value": "611002" },

{
  "name": "洛南县",
  "value": "611021" },

{
  "name": "丹凤县",
  "value": "611022" },

{
  "name": "商南县",
  "value": "611023" },

{
  "name": "山阳县",
  "value": "611024" },

{
  "name": "镇安县",
  "value": "611025" },

{
  "name": "柞水县",
  "value": "611026" }]],



[
[
{
  "name": "城关区",
  "value": "620102" },

{
  "name": "七里河区",
  "value": "620103" },

{
  "name": "西固区",
  "value": "620104" },

{
  "name": "安宁区",
  "value": "620105" },

{
  "name": "红古区",
  "value": "620111" },

{
  "name": "永登县",
  "value": "620121" },

{
  "name": "皋兰县",
  "value": "620122" },

{
  "name": "榆中县",
  "value": "620123" }],


[
{
  "name": "嘉峪关市",
  "value": "620201" }],


[
{
  "name": "金川区",
  "value": "620302" },

{
  "name": "永昌县",
  "value": "620321" }],


[
{
  "name": "白银区",
  "value": "620402" },

{
  "name": "平川区",
  "value": "620403" },

{
  "name": "靖远县",
  "value": "620421" },

{
  "name": "会宁县",
  "value": "620422" },

{
  "name": "景泰县",
  "value": "620423" }],


[
{
  "name": "秦州区",
  "value": "620502" },

{
  "name": "麦积区",
  "value": "620503" },

{
  "name": "清水县",
  "value": "620521" },

{
  "name": "秦安县",
  "value": "620522" },

{
  "name": "甘谷县",
  "value": "620523" },

{
  "name": "武山县",
  "value": "620524" },

{
  "name": "张家川回族自治县",
  "value": "620525" }],


[
{
  "name": "凉州区",
  "value": "620602" },

{
  "name": "民勤县",
  "value": "620621" },

{
  "name": "古浪县",
  "value": "620622" },

{
  "name": "天祝藏族自治县",
  "value": "620623" }],


[
{
  "name": "甘州区",
  "value": "620702" },

{
  "name": "肃南裕固族自治县",
  "value": "620721" },

{
  "name": "民乐县",
  "value": "620722" },

{
  "name": "临泽县",
  "value": "620723" },

{
  "name": "高台县",
  "value": "620724" },

{
  "name": "山丹县",
  "value": "620725" }],


[
{
  "name": "崆峒区",
  "value": "620802" },

{
  "name": "泾川县",
  "value": "620821" },

{
  "name": "灵台县",
  "value": "620822" },

{
  "name": "崇信县",
  "value": "620823" },

{
  "name": "华亭县",
  "value": "620824" },

{
  "name": "庄浪县",
  "value": "620825" },

{
  "name": "静宁县",
  "value": "620826" }],


[
{
  "name": "肃州区",
  "value": "620902" },

{
  "name": "金塔县",
  "value": "620921" },

{
  "name": "瓜州县",
  "value": "620922" },

{
  "name": "肃北蒙古族自治县",
  "value": "620923" },

{
  "name": "阿克塞哈萨克族自治县",
  "value": "620924" },

{
  "name": "玉门市",
  "value": "620981" },

{
  "name": "敦煌市",
  "value": "620982" }],


[
{
  "name": "西峰区",
  "value": "621002" },

{
  "name": "庆城县",
  "value": "621021" },

{
  "name": "环县",
  "value": "621022" },

{
  "name": "华池县",
  "value": "621023" },

{
  "name": "合水县",
  "value": "621024" },

{
  "name": "正宁县",
  "value": "621025" },

{
  "name": "宁县",
  "value": "621026" },

{
  "name": "镇原县",
  "value": "621027" }],


[
{
  "name": "安定区",
  "value": "621102" },

{
  "name": "通渭县",
  "value": "621121" },

{
  "name": "陇西县",
  "value": "621122" },

{
  "name": "渭源县",
  "value": "621123" },

{
  "name": "临洮县",
  "value": "621124" },

{
  "name": "漳县",
  "value": "621125" },

{
  "name": "岷县",
  "value": "621126" }],


[
{
  "name": "武都区",
  "value": "621202" },

{
  "name": "成县",
  "value": "621221" },

{
  "name": "文县",
  "value": "621222" },

{
  "name": "宕昌县",
  "value": "621223" },

{
  "name": "康县",
  "value": "621224" },

{
  "name": "西和县",
  "value": "621225" },

{
  "name": "礼县",
  "value": "621226" },

{
  "name": "徽县",
  "value": "621227" },

{
  "name": "两当县",
  "value": "621228" }],


[
{
  "name": "临夏市",
  "value": "622901" },

{
  "name": "临夏县",
  "value": "622921" },

{
  "name": "康乐县",
  "value": "622922" },

{
  "name": "永靖县",
  "value": "622923" },

{
  "name": "广河县",
  "value": "622924" },

{
  "name": "和政县",
  "value": "622925" },

{
  "name": "东乡族自治县",
  "value": "622926" },

{
  "name": "积石山保安族东乡族撒拉族自治县",
  "value": "622927" }],


[
{
  "name": "合作市",
  "value": "623001" },

{
  "name": "临潭县",
  "value": "623021" },

{
  "name": "卓尼县",
  "value": "623022" },

{
  "name": "舟曲县",
  "value": "623023" },

{
  "name": "迭部县",
  "value": "623024" },

{
  "name": "玛曲县",
  "value": "623025" },

{
  "name": "碌曲县",
  "value": "623026" },

{
  "name": "夏河县",
  "value": "623027" }]],



[
[
{
  "name": "城东区",
  "value": "630102" },

{
  "name": "城中区",
  "value": "630103" },

{
  "name": "城西区",
  "value": "630104" },

{
  "name": "城北区",
  "value": "630105" },

{
  "name": "大通回族土族自治县",
  "value": "630121" },

{
  "name": "湟中县",
  "value": "630122" },

{
  "name": "湟源县",
  "value": "630123" }],


[
{
  "name": "平安县",
  "value": "632121" },

{
  "name": "民和回族土族自治县",
  "value": "632122" },

{
  "name": "乐都区",
  "value": "632123" },

{
  "name": "互助土族自治县",
  "value": "632126" },

{
  "name": "化隆回族自治县",
  "value": "632127" },

{
  "name": "循化撒拉族自治县",
  "value": "632128" }],


[
{
  "name": "门源回族自治县",
  "value": "632221" },

{
  "name": "祁连县",
  "value": "632222" },

{
  "name": "海晏县",
  "value": "632223" },

{
  "name": "刚察县",
  "value": "632224" }],


[
{
  "name": "同仁县",
  "value": "632321" },

{
  "name": "尖扎县",
  "value": "632322" },

{
  "name": "泽库县",
  "value": "632323" },

{
  "name": "河南蒙古族自治县",
  "value": "632324" }],


[
{
  "name": "共和县",
  "value": "632521" },

{
  "name": "同德县",
  "value": "632522" },

{
  "name": "贵德县",
  "value": "632523" },

{
  "name": "兴海县",
  "value": "632524" },

{
  "name": "贵南县",
  "value": "632525" }],


[
{
  "name": "玛沁县",
  "value": "632621" },

{
  "name": "班玛县",
  "value": "632622" },

{
  "name": "甘德县",
  "value": "632623" },

{
  "name": "达日县",
  "value": "632624" },

{
  "name": "久治县",
  "value": "632625" },

{
  "name": "玛多县",
  "value": "632626" }],


[
{
  "name": "玉树市",
  "value": "632721" },

{
  "name": "杂多县",
  "value": "632722" },

{
  "name": "称多县",
  "value": "632723" },

{
  "name": "治多县",
  "value": "632724" },

{
  "name": "囊谦县",
  "value": "632725" },

{
  "name": "曲麻莱县",
  "value": "632726" }],


[
{
  "name": "格尔木市",
  "value": "632801" },

{
  "name": "德令哈市",
  "value": "632802" },

{
  "name": "乌兰县",
  "value": "632821" },

{
  "name": "都兰县",
  "value": "632822" },

{
  "name": "天峻县",
  "value": "632823" },

{
  "name": "大柴旦行委",
  "value": "632833" }]],



[
[
{
  "name": "兴庆区",
  "value": "640104" },

{
  "name": "西夏区",
  "value": "640105" },

{
  "name": "金凤区",
  "value": "640106" },

{
  "name": "永宁县",
  "value": "640121" },

{
  "name": "贺兰县",
  "value": "640122" },

{
  "name": "灵武市",
  "value": "640181" }],


[
{
  "name": "大武口区",
  "value": "640202" },

{
  "name": "惠农区",
  "value": "640205" },

{
  "name": "平罗县",
  "value": "640221" }],


[
{
  "name": "利通区",
  "value": "640302" },

{
  "name": "盐池县",
  "value": "640323" },

{
  "name": "同心县",
  "value": "640324" },

{
  "name": "青铜峡市",
  "value": "640381" },

{
  "name": "红寺堡区",
  "value": "640382" }],


[
{
  "name": "原州区",
  "value": "640402" },

{
  "name": "西吉县",
  "value": "640422" },

{
  "name": "隆德县",
  "value": "640423" },

{
  "name": "泾源县",
  "value": "640424" },

{
  "name": "彭阳县",
  "value": "640425" }],


[
{
  "name": "沙坡头区",
  "value": "640502" },

{
  "name": "中宁县",
  "value": "640521" },

{
  "name": "海原县",
  "value": "640522" }]],



[
[
{
  "name": "天山区",
  "value": "650102" },

{
  "name": "沙依巴克区",
  "value": "650103" },

{
  "name": "新市区",
  "value": "650104" },

{
  "name": "水磨沟区",
  "value": "650105" },

{
  "name": "头屯河区",
  "value": "650106" },

{
  "name": "达坂城区",
  "value": "650107" },

{
  "name": "米东区",
  "value": "650108" },

{
  "name": "乌鲁木齐县",
  "value": "650121" },

{
  "name": "东山区",
  "value": "650122" }],


[
{
  "name": "独山子区",
  "value": "650202" },

{
  "name": "克拉玛依区",
  "value": "650203" },

{
  "name": "白碱滩区",
  "value": "650204" },

{
  "name": "乌尔禾区",
  "value": "650205" }],


[
{
  "name": "吐鲁番市",
  "value": "652101" },

{
  "name": "鄯善县",
  "value": "652122" },

{
  "name": "托克逊县",
  "value": "652123" }],


[
{
  "name": "哈密市",
  "value": "652201" },

{
  "name": "巴里坤哈萨克自治县",
  "value": "652222" },

{
  "name": "伊吾县",
  "value": "652223" }],


[
{
  "name": "昌吉市",
  "value": "652301" },

{
  "name": "阜康市",
  "value": "652302" },

{
  "name": "米泉市",
  "value": "652303" },

{
  "name": "呼图壁县",
  "value": "652323" },

{
  "name": "玛纳斯县",
  "value": "652324" },

{
  "name": "奇台县",
  "value": "652325" },

{
  "name": "吉木萨尔县",
  "value": "652327" },

{
  "name": "木垒哈萨克自治县",
  "value": "652328" }],


[
{
  "name": "博乐市",
  "value": "652701" },

{
  "name": "精河县",
  "value": "652722" },

{
  "name": "温泉县",
  "value": "652723" }],


[
{
  "name": "库尔勒市",
  "value": "652801" },

{
  "name": "轮台县",
  "value": "652822" },

{
  "name": "尉犁县",
  "value": "652823" },

{
  "name": "若羌县",
  "value": "652824" },

{
  "name": "且末县",
  "value": "652825" },

{
  "name": "焉耆回族自治县",
  "value": "652826" },

{
  "name": "和静县",
  "value": "652827" },

{
  "name": "和硕县",
  "value": "652828" },

{
  "name": "博湖县",
  "value": "652829" }],


[
{
  "name": "阿克苏市",
  "value": "652901" },

{
  "name": "温宿县",
  "value": "652922" },

{
  "name": "库车县",
  "value": "652923" },

{
  "name": "沙雅县",
  "value": "652924" },

{
  "name": "新和县",
  "value": "652925" },

{
  "name": "拜城县",
  "value": "652926" },

{
  "name": "乌什县",
  "value": "652927" },

{
  "name": "阿瓦提县",
  "value": "652928" },

{
  "name": "柯坪县",
  "value": "652929" }],


[
{
  "name": "阿图什市",
  "value": "653001" },

{
  "name": "阿克陶县",
  "value": "653022" },

{
  "name": "阿合奇县",
  "value": "653023" },

{
  "name": "乌恰县",
  "value": "653024" }],


[
{
  "name": "喀什市",
  "value": "653101" },

{
  "name": "疏附县",
  "value": "653121" },

{
  "name": "疏勒县",
  "value": "653122" },

{
  "name": "英吉沙县",
  "value": "653123" },

{
  "name": "泽普县",
  "value": "653124" },

{
  "name": "莎车县",
  "value": "653125" },

{
  "name": "叶城县",
  "value": "653126" },

{
  "name": "麦盖提县",
  "value": "653127" },

{
  "name": "岳普湖县",
  "value": "653128" },

{
  "name": "伽师县",
  "value": "653129" },

{
  "name": "巴楚县",
  "value": "653130" },

{
  "name": "塔什库尔干塔吉克自治县",
  "value": "653131" }],


[
{
  "name": "和田市",
  "value": "653201" },

{
  "name": "和田县",
  "value": "653221" },

{
  "name": "墨玉县",
  "value": "653222" },

{
  "name": "皮山县",
  "value": "653223" },

{
  "name": "洛浦县",
  "value": "653224" },

{
  "name": "策勒县",
  "value": "653225" },

{
  "name": "于田县",
  "value": "653226" },

{
  "name": "民丰县",
  "value": "653227" }],


[
{
  "name": "伊宁市",
  "value": "654002" },

{
  "name": "奎屯市",
  "value": "654003" },

{
  "name": "伊宁县",
  "value": "654021" },

{
  "name": "察布查尔锡伯自治县",
  "value": "654022" },

{
  "name": "霍城县",
  "value": "654023" },

{
  "name": "巩留县",
  "value": "654024" },

{
  "name": "新源县",
  "value": "654025" },

{
  "name": "昭苏县",
  "value": "654026" },

{
  "name": "特克斯县",
  "value": "654027" },

{
  "name": "尼勒克县",
  "value": "654028" }],


[
{
  "name": "塔城市",
  "value": "654201" },

{
  "name": "乌苏市",
  "value": "654202" },

{
  "name": "额敏县",
  "value": "654221" },

{
  "name": "沙湾县",
  "value": "654223" },

{
  "name": "托里县",
  "value": "654224" },

{
  "name": "裕民县",
  "value": "654225" },

{
  "name": "和布克赛尔蒙古自治县",
  "value": "654226" }],


[
{
  "name": "阿勒泰市",
  "value": "654301" },

{
  "name": "布尔津县",
  "value": "654321" },

{
  "name": "富蕴县",
  "value": "654322" },

{
  "name": "福海县",
  "value": "654323" },

{
  "name": "哈巴河县",
  "value": "654324" },

{
  "name": "青河县",
  "value": "654325" },

{
  "name": "吉木乃县",
  "value": "654326" }],


[
{
  "name": "石河子市",
  "value": "659001" },

{
  "name": "阿拉尔市",
  "value": "659002" },

{
  "name": "图木舒克市",
  "value": "659003" },

{
  "name": "五家渠市",
  "value": "659004" },

{
  "name": "北屯市",
  "value": "659005" }]]];exports.county = county;

/***/ }),

/***/ 92:
/*!*****************************************************************************************!*\
  !*** E:/MB/mb-yun/main.js?{"page":"modules%2FaLittle%2FputInBusiness%2FputInBusiness"} ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _putInBusiness = _interopRequireDefault(__webpack_require__(/*! ./modules/aLittle/putInBusiness/putInBusiness.vue */ 93));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_putInBusiness.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map