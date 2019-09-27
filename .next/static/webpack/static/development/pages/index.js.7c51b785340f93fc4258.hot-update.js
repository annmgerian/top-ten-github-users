webpackHotUpdate("static/development/pages/index.js",{

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/action-types */ "./redux/constants/action-types.js");


var initialState = {
  data: [],
  sum: {}
};

function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _constants_action_types__WEBPACK_IMPORTED_MODULE_1__["ADD_DATA"]) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      data: [action.payload]
    });
  } else if (action.type === _constants_action_types__WEBPACK_IMPORTED_MODULE_1__["ADD_SUM"]) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, action.payload);
  }

  return state;
}

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ })

})
//# sourceMappingURL=index.js.7c51b785340f93fc4258.hot-update.js.map