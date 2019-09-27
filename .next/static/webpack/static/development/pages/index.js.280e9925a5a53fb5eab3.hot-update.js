webpackHotUpdate("static/development/pages/index.js",{

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: addSum, addData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSum", function() { return addSum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addData", function() { return addData; });
/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/action-types */ "./redux/constants/action-types.js");


function addData(payload) {
  console.log(payload);
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["ADD_DATA"],
    payload: payload
  };
}

function addSum(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["ADD_SUM"],
    payload: payload
  };
}



/***/ })

})
//# sourceMappingURL=index.js.280e9925a5a53fb5eab3.hot-update.js.map