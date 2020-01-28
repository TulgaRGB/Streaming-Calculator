webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_result_Result__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/result/Result */ "./components/result/Result.tsx");
/* harmony import */ var _components_streamingService_StreamingService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/streamingService/StreamingService */ "./components/streamingService/StreamingService.tsx");
/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/header/Header */ "./components/header/Header.tsx");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "/Users/filippopiggici/WebstormProjects/streamingcalculator/Streamig-Calculator/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;







var Home =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Home, _React$PureComponent);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      total: 0,
      streamingServices: streamingServices
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var calculateTotal = function calculateTotal() {
        var currentTotal = 0;

        _this2.state.streamingServices.forEach(function (streaming) {
          currentTotal += streaming.count * streaming.rate;
        });

        _this2.setState({
          total: currentTotal
        });
      };

      return __jsx("div", {
        className: _index_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "The streaming salary calculator"), __jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, maximum-scale=1.0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), __jsx("meta", {
        name: "description",
        content: "Modern tool to give you information about your streaming earning. Choose all your platforms and get your informations.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })), __jsx("div", {
        className: _index_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("div", {
        className: _index_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx(_components_header_Header__WEBPACK_IMPORTED_MODULE_11__["Header"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), __jsx("div", {
        className: _index_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.streamingsContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, streamingServices.map(function (streaming) {
        return __jsx(_components_streamingService_StreamingService__WEBPACK_IMPORTED_MODULE_10__["StreamingService"], {
          streaming: streaming,
          calculateTotal: calculateTotal,
          key: streaming.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        });
      })), __jsx(_components_result_Result__WEBPACK_IMPORTED_MODULE_9__["Result"], {
        totalResult: this.state.total,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);


var streamingServices = [{
  name: 'Spotify',
  rate: 0.00437,
  count: 0
}, {
  name: 'Apple Music',
  rate: 0.00735,
  count: 0
}, {
  name: 'Tidal',
  rate: 0.0125,
  count: 0
}, {
  name: 'Deezer',
  rate: 0.0064,
  count: 0
}, {
  name: 'Napster',
  rate: 0.019,
  count: 0
}, {
  name: 'Pandora',
  rate: 0.00133,
  count: 0
}, {
  name: 'Amazon Music',
  rate: 0.00437,
  count: 0
}];

/***/ })

})
//# sourceMappingURL=index.js.f6026b4128060da39351.hot-update.js.map