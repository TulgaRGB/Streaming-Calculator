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

/***/ "./components/calculator/Calculator.module.css":
/*!*****************************************************!*\
  !*** ./components/calculator/Calculator.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Calculator_container__2qs6K",
	"altContainer": "Calculator_altContainer__2Uh2m",
	"underline": "Calculator_underline__EgvJu",
	"input": "Calculator_input__eVS2h",
	"arrowAndStreams": "Calculator_arrowAndStreams__Ubj6M",
	"arrow": "Calculator_arrow__19BTj",
	"slide": "Calculator_slide__FWnEw",
	"invisibleArrow": "Calculator_invisibleArrow__2K1u-"
};

/***/ }),

/***/ "./components/calculator/Calculator.tsx":
/*!**********************************************!*\
  !*** ./components/calculator/Calculator.tsx ***!
  \**********************************************/
/*! exports provided: Calculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calculator", function() { return Calculator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Calculator_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calculator.module.css */ "./components/calculator/Calculator.module.css");
/* harmony import */ var _Calculator_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Calculator_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/coding/next-ts/components/calculator/Calculator.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




function Calculator(props) {
  const {
    0: count,
    1: setCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  function handleChange(value) {
    if (isNaN(Number(value))) {
      alert("field can only be a number");
      if (count === undefined) setCount('');else setCount(count);
      return;
    }

    setCount(value);
    props.streaming.count = Number(value);
    props.calculateTotal();
  }

  const classname = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    "container": count === undefined,
    "altContainer": count !== undefined
  });
  return __jsx("div", {
    className: count === undefined || count === '' ? _Calculator_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container : _Calculator_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.altContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, props.streaming.name, __jsx("div", {
    className: _Calculator_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.arrowAndStreams,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: count === undefined || count === '' ? _Calculator_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.arrow : _Calculator_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.invisibleArrow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("div", {
    className: _Calculator_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.underline,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("input", {
    placeholder: "N. of streams",
    className: _Calculator_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.input,
    value: count,
    onChange: event => handleChange(event.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }))));
}

/***/ }),

/***/ "./components/header/Header.module.css":
/*!*********************************************!*\
  !*** ./components/header/Header.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"outerContainer": "Header_outerContainer__20h9g",
	"container": "Header_container__17dkn",
	"image": "Header_image__o0_49"
};

/***/ }),

/***/ "./components/header/Header.tsx":
/*!**************************************!*\
  !*** ./components/header/Header.tsx ***!
  \**************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.module.css */ "./components/header/Header.module.css");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/coding/next-ts/components/header/Header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


function Header() {
  return __jsx("div", {
    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.outerContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/result/Result.module.css":
/*!*********************************************!*\
  !*** ./components/result/Result.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Result_container__M8R2t",
	"coloranimation": "Result_coloranimation__1gH5x",
	"fadein": "Result_fadein__1ebBH",
	"movement": "Result_movement__3BBJu"
};

/***/ }),

/***/ "./components/result/Result.tsx":
/*!**************************************!*\
  !*** ./components/result/Result.tsx ***!
  \**************************************/
/*! exports provided: Result */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Result_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Result.module.css */ "./components/result/Result.module.css");
/* harmony import */ var _Result_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Result_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/coding/next-ts/components/result/Result.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


function Result(props) {
  return __jsx("div", {
    className: _Result_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "You Earn: ", props.totalResult.toFixed(2), "\u20AC");
}

/***/ }),

/***/ "./pages/index.module.css":
/*!********************************!*\
  !*** ./pages/index.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"page": "index_page__1H83q",
	"container": "index_container__3XRMM",
	"mymove": "index_mymove__1bm2R",
	"header": "index_header__1p3mc",
	"streamingsContainer": "index_streamingsContainer__3u3d-"
};

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _components_result_Result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/result/Result */ "./components/result/Result.tsx");
/* harmony import */ var _components_calculator_Calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/calculator/Calculator */ "./components/calculator/Calculator.tsx");
/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/Header */ "./components/header/Header.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/coding/next-ts/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





class Home extends react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      streamingServices: streamingServices
    };
  }

  render() {
    const calculateTotal = () => {
      let currentTotal = 0;
      this.state.streamingServices.forEach(streaming => {
        currentTotal += streaming.count * streaming.rate;
      });
      this.setState({
        total: currentTotal
      });
    };

    return __jsx("div", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.page,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("head", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "The streaming salary calculator"), __jsx("meta", {
      name: "viewport",
      content: "initial-scale=1.0, maximum-scale=1.0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), __jsx("meta", {
      name: "description",
      content: "Modern tool to give you information about your streaming earning. Choose all your platforms and get your informations.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    })), __jsx("div", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("div", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx(_components_header_Header__WEBPACK_IMPORTED_MODULE_2__["Header"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    })), __jsx("div", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.streamingsContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, streamingServices.map(streaming => __jsx("div", {
      key: streaming.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx(_components_calculator_Calculator__WEBPACK_IMPORTED_MODULE_1__["Calculator"], {
      streaming: streaming,
      calculateTotal: calculateTotal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    })))), __jsx(_components_result_Result__WEBPACK_IMPORTED_MODULE_0__["Result"], {
      totalResult: this.state.total,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })));
  }

}
const streamingServices = [{
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

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/coding/next-ts/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map