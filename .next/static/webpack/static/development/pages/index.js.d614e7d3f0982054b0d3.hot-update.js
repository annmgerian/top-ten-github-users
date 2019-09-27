webpackHotUpdate("static/development/pages/index.js",{

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/action-types */ "./redux/constants/action-types.js");



var initialState = {
  data: [],
  sum: {}
};

function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _constants_action_types__WEBPACK_IMPORTED_MODULE_2__["ADD_DATA"]) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
      data: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.data), [{
        avatarUrl: action.payload.data[0],
        bio: action.payload.data[1],
        email: action.payload.data[2],
        location: action.payload.data[3],
        login: action.payload.data[4],
        name: action.payload.data[5],
        url: action.payload.data[6]
      }])
    });
  } else if (action.type === _constants_action_types__WEBPACK_IMPORTED_MODULE_2__["ADD_SUM"]) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, action.payload);
  }

  return state;
}

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ })

})
//# sourceMappingURL=index.js.d614e7d3f0982054b0d3.hot-update.js.map