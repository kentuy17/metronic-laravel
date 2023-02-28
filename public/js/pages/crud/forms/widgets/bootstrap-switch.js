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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 67);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/crud/forms/widgets/bootstrap-switch.js":
/*!****************************************************************************!*\
  !*** ./resources/metronic/js/pages/crud/forms/widgets/bootstrap-switch.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Class definition\n\nvar KTBootstrapSwitch = function () {\n  // Private functions\n  var demos = function demos() {\n    // minimum setup\n    $('[data-switch=true]').bootstrapSwitch();\n  };\n  return {\n    // public functions\n    init: function init() {\n      demos();\n    }\n  };\n}();\njQuery(document).ready(function () {\n  KTBootstrapSwitch.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWV0cm9uaWMvanMvcGFnZXMvY3J1ZC9mb3Jtcy93aWRnZXRzL2Jvb3RzdHJhcC1zd2l0Y2guanM/MjFmYSJdLCJuYW1lcyI6WyJLVEJvb3RzdHJhcFN3aXRjaCIsImRlbW9zIiwiJCIsImJvb3RzdHJhcFN3aXRjaCIsImluaXQiLCJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFJQSxpQkFBaUIsR0FBRyxZQUFXO0VBRWpDO0VBQ0EsSUFBSUMsS0FBSyxHQUFHLFNBQVJBLEtBQUtBLENBQUEsRUFBYztJQUNyQjtJQUNBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQ0MsZUFBZSxFQUFFO0VBQzNDLENBQUM7RUFFRCxPQUFPO0lBQ0w7SUFDQUMsSUFBSSxFQUFFLFNBQUFBLEtBQUEsRUFBVztNQUNmSCxLQUFLLEVBQUU7SUFDVDtFQUNGLENBQUM7QUFDSCxDQUFDLEVBQUU7QUFFSEksTUFBTSxDQUFDQyxRQUFRLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFlBQVc7RUFDaENQLGlCQUFpQixDQUFDSSxJQUFJLEVBQUU7QUFDMUIsQ0FBQyxDQUFDIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2NydWQvZm9ybXMvd2lkZ2V0cy9ib290c3RyYXAtc3dpdGNoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG5cclxudmFyIEtUQm9vdHN0cmFwU3dpdGNoID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgdmFyIGRlbW9zID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBtaW5pbXVtIHNldHVwXHJcbiAgICAkKCdbZGF0YS1zd2l0Y2g9dHJ1ZV0nKS5ib290c3RyYXBTd2l0Y2goKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLy8gcHVibGljIGZ1bmN0aW9uc1xyXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGRlbW9zKCk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn0oKTtcclxuXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgS1RCb290c3RyYXBTd2l0Y2guaW5pdCgpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/metronic/js/pages/crud/forms/widgets/bootstrap-switch.js\n");

/***/ }),

/***/ 67:
/*!**********************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/crud/forms/widgets/bootstrap-switch.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WorkDir\Projects\metronic-laravel\resources\metronic\js\pages\crud\forms\widgets\bootstrap-switch.js */"./resources/metronic/js/pages/crud/forms/widgets/bootstrap-switch.js");


/***/ })

/******/ });