module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Users.js":
/*!*****************************!*\
  !*** ./components/Users.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/actions/index */ "./redux/actions/index.js");

var _jsxFileName = "/home/ann/Development/Projects/Work/agile-nix-test/front/components/Users.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const sumStateToProps = state => {
  return {
    sum: state.sum
  };
};

const dataStateToProps = state => {
  return {
    data: state.data
  };
};

function sumDispatchToProps(dispatch) {
  return {
    addSum: sum => dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_7__["addSum"])(sum))
  };
}

function dataDispatchToProps(dispatch) {
  return {
    addData: data => dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_7__["addData"])(data))
  };
}

const axiosGitHubGraphQL = axios__WEBPACK_IMPORTED_MODULE_5___default.a.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: 'bearer 2cdc2aa829e6a0fe455edaf962cdda54e923b505'
  }
});
const GET_RATE = `
{
    search(   
      type: USER, query:"location:Kharkiv sort:followers-desc"
      first: 10) {
      nodes {
        ... on User {
          name
          login
          avatarUrl
          url
          bio
          location
          email
          repositories{totalCount}
          topRepositories(first: 100, orderBy:{field: STARGAZERS, direction: DESC}) {
            edges {
              node {
                stargazers{totalCount}
              }
            }
          }
        }
      }
    }
  }
`;
const Divider = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.hr`
    background: rgba(128, 128, 128, 0.5);
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    height: 1px;
    border: 0;
`;
const Avatar = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.img`
    width: 75px;
    margin-top: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
`;
const Info = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
    display: flex;
    width: 88%;
    flex-flow: column;
    margin-top: 10px;
`;
const Login = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
    width: 88%;
    display: flex;
`;
const Status = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
    margin-top: 10px;
    padding-left: 10px;
`;
const Link = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.a`
    text-decoration: blink;
    padding-left: 10px;
    color: #2664d9;
`;
const Name = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.p`
    padding-left: 10px;
    margin: 0;
`;
const Icons = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
    display: flex;
    margin-top: 10px;
    color: #858585;
`;
const LocationIcon = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
    padding-left: 10px;
`;
const MailIcon = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
    padding-left: 40px;
`;
const StarIcon = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
    padding-left: 40px;
`;
const Stars = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
    padding-left: 10px;
`;
const Location = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
    padding-left: 10px;
`;
const MailAdress = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
    padding-left: 10px;
`;
const Block = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
`;
const Loading = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
    display: flex;
    align-items: center;
    height: 100vh;
    justify-content: center;
`;

class ConnectedUsers extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "GET_SUM_FIRST_HUNDRED", login => `query 
{
  search(   
    type: USER, query:"user:${login}"
    first: 1) {
    nodes {
      ... on User {
        login
        repositories (first:100) {
      pageInfo {
        hasNextPage,
        endCursor
      },
      nodes {
        stargazers{totalCount}
      }
      }
    }
  }
}
}`);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "GET_SUM_HUNDRED", (login, after) => `query 
{
  search(   
    type: USER, query:"user:${login}"
    first: 1) {
    nodes {
      ... on User {
        login
        repositories (first:100, after:"${after}") {
      pageInfo {
        hasNextPage,
        endCursor
      },
      nodes {
        stargazers{totalCount}
      }
      }
    }
  }
}
}`);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onFetchSumHundredFromGitHub", (user, number, endCursor) => {
      const that = this;
      const after = endCursor.toString();
      const login = user;
      const key = number;
      axiosGitHubGraphQL.post('', {
        query: that.GET_SUM_HUNDRED(login, after)
      }).then(result => {
        let array = result.data.data.search.nodes[0].repositories;
        that.getSumHundred(array, key);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onFetchSumForFirstHundredFromGitHub", (user, number) => {
      const that = this;
      const login = user;
      const key = number;
      axiosGitHubGraphQL.post('', {
        query: that.GET_SUM_FIRST_HUNDRED(login)
      }).then(result => {
        let array = result.data.data.search.nodes[0].repositories;
        that.getSumFirstHundred(array, key, login);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onFetchFromGitHub", () => {
      const that = this;
      axiosGitHubGraphQL.post('', {
        query: GET_RATE
      }).then(result => {
        let array = result.data.data.search.nodes;

        for (var i = 0; i < 10; i++) {
          this.props.addData({
            data: [array[i].avatarUrl, array[i].bio, array[i].email, array[i].location, array[i].login, array[i].name, array[i].url]
          });

          if (array[i].repositories.totalCount > 100) {
            that.onFetchSumForFirstHundredFromGitHub(array[i].login, i);
          } else {
            that.getSum(array[i].topRepositories.edges, i);
          }
        }
      }).catch(function (error) {
        alert(error);
      });
    });

    this.getSum = this.getSum.bind(this);
  }

  componentDidMount() {
    this.onFetchFromGitHub();
  }

  getSumHundred(array, number, name) {
    let key = number;
    let summ = 0;
    const login = name;
    const {
      sum
    } = this.props;
    array.nodes.forEach(element => {
      summ += element.stargazers.totalCount;
    });
    summ += sum[key];
    this.props.addSum({
      sum: [summ, key]
    });
  }

  getSumFirstHundred(array, number, name) {
    let key = number;
    let sum = 0;
    const login = name;
    array.nodes.forEach(element => {
      sum += element.stargazers.totalCount;
    });
    this.props.addSum({
      sum: [sum, key]
    });

    if (array.pageInfo.hasNextPage === true) {
      this.onFetchSumHundredFromGitHub(login, key, array.pageInfo.endCursor);
    }
  }

  getSum(array, number) {
    let key = number;
    let sum = 0;

    if (array !== undefined) {
      array.forEach(element => {
        sum += element.node.stargazers.totalCount;
      });
    }

    this.props.addSum({
      sum: [sum, key]
    });
  }

  render() {
    const {
      data,
      sum
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, data.length === 0 ? __jsx(Loading, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSpinner"],
      size: "4x",
      spin: true,
      pulse: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321
      },
      __self: this
    })) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(Divider, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330
      },
      __self: this
    }), data.map(user => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(Block, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334
      },
      __self: this
    }, __jsx(Avatar, {
      src: user.avatarUrl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335
      },
      __self: this
    }), __jsx(Info, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336
      },
      __self: this
    }, __jsx(Login, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337
      },
      __self: this
    }, __jsx(Link, {
      href: user.url,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338
      },
      __self: this
    }, user.login), __jsx(Name, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344
      },
      __self: this
    }, user.name)), __jsx(Status, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346
      },
      __self: this
    }, user.bio), __jsx(Icons, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347
      },
      __self: this
    }, __jsx(LocationIcon, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      size: "xs",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faMapMarkerAlt"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349
      },
      __self: this
    })), __jsx(Location, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354
      },
      __self: this
    }, user.location), user.email !== '' ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(MailIcon, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEnvelope"],
      size: "xs",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358
      },
      __self: this
    })), __jsx(MailAdress, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363
      },
      __self: this
    }, user.email)) : null, __jsx(StarIcon, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faStar"],
      size: "xs",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369
      },
      __self: this
    })), __jsx(Stars, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374
      },
      __self: this
    }, this.props.sum[data.indexOf(user)] === undefined ? ' ' : Number(this.props.sum[data.indexOf(user)]).toLocaleString())))), __jsx(Divider, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388
      },
      __self: this
    })))) // )
    );
  }

}

const UsersWithSumState = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(sumStateToProps, null)(ConnectedUsers);
const UsersWithDataState = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(dataStateToProps, null)(UsersWithSumState);
const UsersWithSumDispatched = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(null, sumDispatchToProps)(UsersWithDataState);
const Users = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(null, dataDispatchToProps)(UsersWithSumDispatched);
/* harmony default export */ __webpack_exports__["default"] = (Users);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Users */ "./components/Users.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store/index */ "./redux/store/index.js");
var _jsxFileName = "/home/ann/Development/Projects/Work/agile-nix-test/front/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Index = () => __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: _redux_store_index__WEBPACK_IMPORTED_MODULE_3__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(_components_Users__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

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
  // console.log(payload);
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["ADD_DATA"],
    payload
  };
}

function addSum(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["ADD_SUM"],
    payload
  };
}



/***/ }),

/***/ "./redux/constants/action-types.js":
/*!*****************************************!*\
  !*** ./redux/constants/action-types.js ***!
  \*****************************************/
/*! exports provided: ADD_SUM, ADD_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SUM", function() { return ADD_SUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_DATA", function() { return ADD_DATA; });
const ADD_SUM = 'ADD_SUM';
const ADD_DATA = 'ADD_DATA';


/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/action-types */ "./redux/constants/action-types.js");



const initialState = {
  data: [],
  sum: {}
};

function rootReducer(state = initialState, action) {
  if (action.type === _constants_action_types__WEBPACK_IMPORTED_MODULE_2__["ADD_DATA"]) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
      data: [...state.data, {
        avatarUrl: action.payload.data[0],
        bio: action.payload.data[1],
        email: action.payload.data[2],
        location: action.payload.data[3],
        login: action.payload.data[4],
        name: action.payload.data[5],
        url: action.payload.data[6]
      }]
    });
  } else if (action.type === _constants_action_types__WEBPACK_IMPORTED_MODULE_2__["ADD_SUM"]) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
      sum: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.sum, {
        [action.payload.sum[1]]: action.payload.sum[0]
      })
    });
  }

  return state;
}

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./redux/store/index.js":
/*!******************************!*\
  !*** ./redux/store/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/index */ "./redux/reducers/index.js");


const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ann/Development/Projects/Work/agile-nix-test/front/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map