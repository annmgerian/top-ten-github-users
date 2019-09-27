webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Users.js":
/*!*****************************!*\
  !*** ./components/Users.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../redux/actions/index */ "./redux/actions/index.js");








var _jsxFileName = "/home/ann/Development/Projects/Work/agile-nix-test/front/components/Users.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _templateObject16() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    display: flex;\n    align-items: center;\n    height: 100vh;\n    justify-content: center;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    width: 700px;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    padding-left: 10px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    padding-left: 10px;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    padding-left: 10px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    padding-left: 40px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    padding-left: 40px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    padding-left: 10px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    display: flex;\n    margin-top: 10px;\n    color: #858585;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    padding-left: 10px;\n    margin: 0;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    text-decoration: blink;\n    padding-left: 10px;\n    color: #2664d9;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    margin-top: 10px;\n    padding-left: 10px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    width: 88%;\n    display: flex;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    display: flex;\n    width: 88%;\n    flex-flow: column;\n    margin-top: 10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    width: 75px;\n    margin-top: 10px;\n    border-radius: 10px;\n    margin-bottom: 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    background: rgba(128, 128, 128, 0.5);\n    width: 700px;\n    margin-left: auto;\n    margin-right: auto;\n    height: 1px;\n    border: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var sumStateToProps = function sumStateToProps(state) {
  return {
    sum: state.sum
  };
};

var dataStateToProps = function dataStateToProps(state) {
  return {
    data: state.data
  };
};

function sumDispatchToProps(dispatch) {
  return {
    addSum: function addSum(sum) {
      return dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_14__["addSum"])(sum));
    }
  };
}

function dataDispatchToProps(dispatch) {
  return {
    addData: function addData(data) {
      return dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_14__["addData"])(data));
    }
  };
}

var axiosGitHubGraphQL = axios__WEBPACK_IMPORTED_MODULE_12___default.a.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: 'bearer 2cdc2aa829e6a0fe455edaf962cdda54e923b505'
  }
});
var GET_RATE = "\n{\n    search(   \n      type: USER, query:\"location:Kharkiv sort:followers-desc\"\n      first: 10) {\n      nodes {\n        ... on User {\n          name\n          login\n          avatarUrl\n          url\n          bio\n          location\n          email\n          repositories{totalCount}\n          topRepositories(first: 100, orderBy:{field: STARGAZERS, direction: DESC}) {\n            edges {\n              node {\n                stargazers{totalCount}\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n";
var Divider = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].hr(_templateObject());
var Avatar = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].img(_templateObject2());
var Info = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject3());
var Login = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject4());
var Status = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject5());
var Link = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].a(_templateObject6());
var Name = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].p(_templateObject7());
var Icons = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject8());
var LocationIcon = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject9());
var MailIcon = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject10());
var StarIcon = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject11());
var Stars = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject12());
var Location = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject13());
var MailAdress = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject14());
var Block = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject15());
var Loading = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject16());

var ConnectedUsers =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ConnectedUsers, _React$Component);

  function ConnectedUsers(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ConnectedUsers);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ConnectedUsers).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "GET_SUM_FIRST_HUNDRED", function (login) {
      return "query \n{\n  search(   \n    type: USER, query:\"user:".concat(login, "\"\n    first: 1) {\n    nodes {\n      ... on User {\n        login\n        repositories (first:100) {\n      pageInfo {\n        hasNextPage,\n        endCursor\n      },\n      nodes {\n        stargazers{totalCount}\n      }\n      }\n    }\n  }\n}\n}");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "GET_SUM_HUNDRED", function (login, after) {
      return "query \n{\n  search(   \n    type: USER, query:\"user:".concat(login, "\"\n    first: 1) {\n    nodes {\n      ... on User {\n        login\n        repositories (first:100, after:\"").concat(after, "\") {\n      pageInfo {\n        hasNextPage,\n        endCursor\n      },\n      nodes {\n        stargazers{totalCount}\n      }\n      }\n    }\n  }\n}\n}");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onFetchSumHundredFromGitHub", function (user, number, endCursor) {
      var that = Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this);

      var after = endCursor.toString();
      var login = user;
      var key = number;
      axiosGitHubGraphQL.post('', {
        query: that.GET_SUM_HUNDRED(login, after)
      }).then(function (result) {
        var array = result.data.data.search.nodes[0].repositories;
        that.getSumHundred(array, key);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onFetchSumForFirstHundredFromGitHub", function (user, number) {
      var that = Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this);

      var login = user;
      var key = number;
      axiosGitHubGraphQL.post('', {
        query: that.GET_SUM_FIRST_HUNDRED(login)
      }).then(function (result) {
        var array = result.data.data.search.nodes[0].repositories;
        that.getSumFirstHundred(array, key, login);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onFetchFromGitHub", function () {
      var that = Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this); // const { data } = this.props;


      axiosGitHubGraphQL.post('', {
        query: GET_RATE
      }).then(function (result) {
        var array = result.data.data.search.nodes;

        for (var i = 0; i < 10; i++) {
          // data.push({
          //     avatarUrl: array[i].avatarUrl,
          //     bio: array[i].bio,
          //     email: array[i].email,
          //     location: array[i].location,
          //     login: array[i].login,
          //     name: array[i].name,
          //     url: array[i].url
          // });
          // this.props.addData({ data: data });
          _this.props.addData({
            data: [array[i].avatarUrl, array[i].bio, array[i].email, array[i].location, array[i].login, array[i].name, array[i].url]
          }); // that.setState({ data: data });


          if (array[i].repositories.totalCount > 100) {
            that.onFetchSumForFirstHundredFromGitHub(array[i].login, i);
          } else {
            that.getSum(array[i].topRepositories.edges, i);
          }
        }
      })["catch"](function (error) {
        alert(error);
      });
    });

    _this.state = {// externalData: null
      // sum: {},
      // data: []
    };
    _this.getSum = _this.getSum.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  } // componentWillMount() {
  //     this._asyncRequest = this.onFetchFromGitHub().then(externalData => {
  //         this._asyncRequest = null;
  //         this.setState({ externalData });
  //     });
  // }


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ConnectedUsers, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onFetchFromGitHub();
    }
  }, {
    key: "getSumHundred",
    value: function getSumHundred(array, number, name) {
      var key = number;
      var summ = 0;
      var login = name;
      var sum = this.props.sum;
      array.nodes.forEach(function (element) {
        summ += element.stargazers.totalCount;
      }); // this.props.addSum({
      //     sum: Object.assign(sum, {
      //         [key]: summ + sum[key]
      //     })
      // });
      // this.setState({
      //     sum: Object.assign(this.state.sum, {
      //         [key]: sum + this.state.sum[key]
      //     })
      // });
    }
  }, {
    key: "getSumFirstHundred",
    value: function getSumFirstHundred(array, number, name) {
      var key = number;
      var sum = 0; // const { sum } = this.props;

      var login = name;
      array.nodes.forEach(function (element) {
        sum += element.stargazers.totalCount;
      }); // this.props.addSum({
      //     sum: Object.assign(sum, {
      //         [key]: summ
      //     })
      // });

      this.props.addSum({
        sum: [sum, key]
      }); // this.setState({ sum: Object.assign(this.state.sum, { [key]: sum }) });

      if (array.pageInfo.hasNextPage === true) {
        this.onFetchSumHundredFromGitHub(login, key, array.pageInfo.endCursor);
      }
    }
  }, {
    key: "getSum",
    value: function getSum(array, number) {
      var key = number;
      var sum = 0; // const { sum } = this.props;

      if (array !== undefined) {
        array.forEach(function (element) {
          sum += element.node.stargazers.totalCount;
        });
      }

      this.props.addSum({
        sum: [sum, key]
      }); // this.setState({ sum: Object.assign(this.state.sum, { [key]: sum }) });
    }
  }, {
    key: "render",
    value: function render() {
      // if (this.state.externalData === null) {
      //     // Render loading state ...
      //     console.log(0);
      // } else {
      var _this$props = this.props,
          data = _this$props.data,
          sum = _this$props.sum;
      console.log(data);
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }, "he") // <>
      //     {
      //         // data.length === 0
      //         // false ? (
      //         //     <Loading>
      //         //         <FontAwesomeIcon
      //         //             icon={faSpinner}
      //         //             size="4x"
      //         //             spin
      //         //             pulse
      //         //         />
      //         //     </Loading>
      //         // ) : (
      //         <>
      //             <Divider />
      //             {data.map(user => (
      //                 <>
      //                     <Block>
      //                         <Avatar src={user.avatarUrl}></Avatar>
      //                         <Info>
      //                             <Login>
      //                                 <Link
      //                                     href={user.url}
      //                                     target="_blank"
      //                                 >
      //                                     {user.login}
      //                                 </Link>
      //                                 <Name>{user.name}</Name>
      //                             </Login>
      //                             <Status>{user.bio}</Status>
      //                             <Icons>
      //                                 <LocationIcon>
      //                                     <FontAwesomeIcon
      //                                         size="xs"
      //                                         icon={faMapMarkerAlt}
      //                                     ></FontAwesomeIcon>
      //                                 </LocationIcon>
      //                                 <Location>{user.location}</Location>
      //                                 {user.email !== '' ? (
      //                                     <>
      //                                         <MailIcon>
      //                                             <FontAwesomeIcon
      //                                                 icon={faEnvelope}
      //                                                 size="xs"
      //                                             ></FontAwesomeIcon>
      //                                         </MailIcon>
      //                                         <MailAdress>
      //                                             {user.email}
      //                                         </MailAdress>
      //                                     </>
      //                                 ) : null}
      //                                 <StarIcon>
      //                                     <FontAwesomeIcon
      //                                         icon={faStar}
      //                                         size="xs"
      //                                     ></FontAwesomeIcon>
      //                                 </StarIcon>
      //                                 <Stars>
      //                                     {this.props.sum[
      //                                         data.indexOf(user)
      //                                     ] === undefined
      //                                         ? ' '
      //                                         : Number(
      //                                               this.props.sum[
      //                                                   data.indexOf(user)
      //                                               ]
      //                                           ).toLocaleString()}
      //                                 </Stars>
      //                             </Icons>
      //                         </Info>
      //                     </Block>
      //                     <Divider />
      //                 </>
      //             ))}
      //         </>
      //         // )
      //     }
      // </>
      ; // Render real UI ...
      // }
    }
  }]);

  return ConnectedUsers;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var UsersWithSumState = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(sumStateToProps, null)(ConnectedUsers);
var UsersWithDataState = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(dataStateToProps, null)(UsersWithSumState);
var UsersWithSumDispatched = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(null, sumDispatchToProps)(UsersWithDataState);
var Users = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(null, dataDispatchToProps)(UsersWithSumDispatched);
/* harmony default export */ __webpack_exports__["default"] = (Users);

/***/ })

})
//# sourceMappingURL=index.js.c1ea2c40c51cd65d86fc.hot-update.js.map