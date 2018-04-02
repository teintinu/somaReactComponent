/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.test.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@hoda5/somalib/dist/soma.js":
/*!**************************************************!*\
  !*** ./node_modules/@hoda5/somalib/dist/soma.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function soma(a, b) {
    if (a <= 0 || b <= 0) {
        throw new Error("Use apenas numeros naturais");
    }
    return a + b;
}
exports.soma = soma;


/***/ }),

/***/ "./src/index.test.tsx":
/*!****************************!*\
  !*** ./src/index.test.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var somalib_1 = __webpack_require__(/*! ./somalib */ "./src/somalib.tsx");
ReactDOM.render(React.createElement(somalib_1.Hello, null), document.getElementById("app"));


/***/ }),

/***/ "./src/somalib.tsx":
/*!*************************!*\
  !*** ./src/somalib.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var somalib = __webpack_require__(/*! @hoda5/somalib */ "./node_modules/@hoda5/somalib/dist/soma.js");
var Hello = /** @class */ (function (_super) {
    __extends(Hello, _super);
    function Hello(props) {
        var _this = _super.call(this, props) || this;
        _this.dados = { valorA: null, valorB: null, resultadoSoma: 0 };
        _this.onKeyUpA = _this.onKeyUpA.bind(_this);
        _this.onKeyUpB = _this.onKeyUpB.bind(_this);
        return _this;
    }
    Hello.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("input", { type: "number", onKeyUp: this.onKeyUpA, placeholder: "Digite o n\u00FAmero a" }),
            React.createElement("input", { type: "number", onKeyUp: this.onKeyUpB, placeholder: "Digite o n\u00FAmero b" }),
            React.createElement("h1", null,
                " ",
                this.dados.resultadoSoma,
                " "));
    };
    Hello.prototype.onKeyUpA = function (e) {
        if (this.dados.valorA == e.target.value)
            return;
        this.dados.valorA = parseInt(e.target.value);
        this.calcular();
    };
    Hello.prototype.onKeyUpB = function (e) {
        if (this.dados.valorB == e.target.value)
            return;
        this.dados.valorB = parseInt(e.target.value);
        this.calcular();
    };
    Hello.prototype.calcular = function () {
        if (this.dados.valorA && this.dados.valorB) {
            this.dados.resultadoSoma = somalib.soma(this.dados.valorA, this.dados.valorB);
        }
        else
            this.dados.resultadoSoma = 0;
        this.setState({});
    };
    return Hello;
}(React.Component));
exports.Hello = Hello;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map