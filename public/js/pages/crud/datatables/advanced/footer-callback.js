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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/crud/datatables/advanced/footer-callback.js":
/*!*********************************************************************************!*\
  !*** ./resources/metronic/js/pages/crud/datatables/advanced/footer-callback.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar KTDatatablesAdvancedFooterCalllback = function () {\n  var _init = function init() {\n    var table = $('#kt_datatable');\n\n    // begin first table\n    table.DataTable({\n      responsive: true,\n      pageLength: 5,\n      lengthMenu: [[2, 5, 10, 15, -1], [2, 5, 10, 15, 'All']],\n      footerCallback: function footerCallback(row, data, start, end, display) {\n        var column = 6;\n        var api = this.api(),\n          data;\n\n        // Remove the formatting to get integer data for summation\n        var intVal = function intVal(i) {\n          return typeof i === 'string' ? i.replace(/[\\$,]/g, '') * 1 : typeof i === 'number' ? i : 0;\n        };\n\n        // Total over all pages\n        var total = api.column(column).data().reduce(function (a, b) {\n          return intVal(a) + intVal(b);\n        }, 0);\n\n        // Total over this page\n        var pageTotal = api.column(column, {\n          page: 'current'\n        }).data().reduce(function (a, b) {\n          return intVal(a) + intVal(b);\n        }, 0);\n\n        // Update footer\n        $(api.column(column).footer()).html('$' + KTUtil.numberString(pageTotal.toFixed(2)) + '<br/> ( $' + KTUtil.numberString(total.toFixed(2)) + ' total)');\n      }\n    });\n  };\n  return {\n    //main function to initiate the module\n    init: function init() {\n      _init();\n    }\n  };\n}();\njQuery(document).ready(function () {\n  KTDatatablesAdvancedFooterCalllback.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWV0cm9uaWMvanMvcGFnZXMvY3J1ZC9kYXRhdGFibGVzL2FkdmFuY2VkL2Zvb3Rlci1jYWxsYmFjay5qcz9kNDcyIl0sIm5hbWVzIjpbIktURGF0YXRhYmxlc0FkdmFuY2VkRm9vdGVyQ2FsbGxiYWNrIiwiaW5pdCIsInRhYmxlIiwiJCIsIkRhdGFUYWJsZSIsInJlc3BvbnNpdmUiLCJwYWdlTGVuZ3RoIiwibGVuZ3RoTWVudSIsImZvb3RlckNhbGxiYWNrIiwicm93IiwiZGF0YSIsInN0YXJ0IiwiZW5kIiwiZGlzcGxheSIsImNvbHVtbiIsImFwaSIsImludFZhbCIsImkiLCJyZXBsYWNlIiwidG90YWwiLCJyZWR1Y2UiLCJhIiwiYiIsInBhZ2VUb3RhbCIsInBhZ2UiLCJmb290ZXIiLCJodG1sIiwiS1RVdGlsIiwibnVtYmVyU3RyaW5nIiwidG9GaXhlZCIsImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiXSwibWFwcGluZ3MiOiJBQUFhOztBQUNiLElBQUlBLG1DQUFtQyxHQUFHLFlBQVc7RUFFcEQsSUFBSUMsS0FBSSxHQUFHLFNBQVBBLElBQUksR0FBYztJQUNyQixJQUFJQyxLQUFLLEdBQUdDLENBQUMsQ0FBQyxlQUFlLENBQUM7O0lBRTlCO0lBQ0FELEtBQUssQ0FBQ0UsU0FBUyxDQUFDO01BQ2ZDLFVBQVUsRUFBRSxJQUFJO01BQ2hCQyxVQUFVLEVBQUUsQ0FBQztNQUNiQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO01BQ3ZEQyxjQUFjLEVBQUUsd0JBQVNDLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLEdBQUcsRUFBRUMsT0FBTyxFQUFFO1FBRXhELElBQUlDLE1BQU0sR0FBRyxDQUFDO1FBQ2QsSUFBSUMsR0FBRyxHQUFHLElBQUksQ0FBQ0EsR0FBRyxFQUFFO1VBQUVMLElBQUk7O1FBRTFCO1FBQ0EsSUFBSU0sTUFBTSxHQUFHLFNBQVRBLE1BQU0sQ0FBWUMsQ0FBQyxFQUFFO1VBQ3hCLE9BQU8sT0FBT0EsQ0FBQyxLQUFLLFFBQVEsR0FBR0EsQ0FBQyxDQUFDQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPRCxDQUFDLEtBQUssUUFBUSxHQUFHQSxDQUFDLEdBQUcsQ0FBQztRQUMzRixDQUFDOztRQUVEO1FBQ0EsSUFBSUUsS0FBSyxHQUFHSixHQUFHLENBQUNELE1BQU0sQ0FBQ0EsTUFBTSxDQUFDLENBQUNKLElBQUksRUFBRSxDQUFDVSxNQUFNLENBQUMsVUFBU0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7VUFDM0QsT0FBT04sTUFBTSxDQUFDSyxDQUFDLENBQUMsR0FBR0wsTUFBTSxDQUFDTSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7UUFFTDtRQUNBLElBQUlDLFNBQVMsR0FBR1IsR0FBRyxDQUFDRCxNQUFNLENBQUNBLE1BQU0sRUFBRTtVQUFDVSxJQUFJLEVBQUU7UUFBUyxDQUFDLENBQUMsQ0FBQ2QsSUFBSSxFQUFFLENBQUNVLE1BQU0sQ0FBQyxVQUFTQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtVQUNsRixPQUFPTixNQUFNLENBQUNLLENBQUMsQ0FBQyxHQUFHTCxNQUFNLENBQUNNLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUUsQ0FBQyxDQUFDOztRQUVMO1FBQ0FuQixDQUFDLENBQUNZLEdBQUcsQ0FBQ0QsTUFBTSxDQUFDQSxNQUFNLENBQUMsQ0FBQ1csTUFBTSxFQUFFLENBQUMsQ0FBQ0MsSUFBSSxDQUNsQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDTCxTQUFTLENBQUNNLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsR0FBR0YsTUFBTSxDQUFDQyxZQUFZLENBQUNULEtBQUssQ0FBQ1UsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUNqSDtNQUNGO0lBQ0QsQ0FBQyxDQUFDO0VBQ0gsQ0FBQztFQUVELE9BQU87SUFFTjtJQUNBNUIsSUFBSSxFQUFFLGdCQUFXO01BQ2hCQSxLQUFJLEVBQUU7SUFDUDtFQUVELENBQUM7QUFFRixDQUFDLEVBQUU7QUFFSDZCLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBQyxZQUFXO0VBQ2pDaEMsbUNBQW1DLENBQUNDLElBQUksRUFBRTtBQUMzQyxDQUFDLENBQUMiLCJmaWxlIjoiLi9yZXNvdXJjZXMvbWV0cm9uaWMvanMvcGFnZXMvY3J1ZC9kYXRhdGFibGVzL2FkdmFuY2VkL2Zvb3Rlci1jYWxsYmFjay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgS1REYXRhdGFibGVzQWR2YW5jZWRGb290ZXJDYWxsbGJhY2sgPSBmdW5jdGlvbigpIHtcclxuXHJcblx0dmFyIGluaXQgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciB0YWJsZSA9ICQoJyNrdF9kYXRhdGFibGUnKTtcclxuXHJcblx0XHQvLyBiZWdpbiBmaXJzdCB0YWJsZVxyXG5cdFx0dGFibGUuRGF0YVRhYmxlKHtcclxuXHRcdFx0cmVzcG9uc2l2ZTogdHJ1ZSxcclxuXHRcdFx0cGFnZUxlbmd0aDogNSxcclxuXHRcdFx0bGVuZ3RoTWVudTogW1syLCA1LCAxMCwgMTUsIC0xXSwgWzIsIDUsIDEwLCAxNSwgJ0FsbCddXSxcclxuXHRcdFx0Zm9vdGVyQ2FsbGJhY2s6IGZ1bmN0aW9uKHJvdywgZGF0YSwgc3RhcnQsIGVuZCwgZGlzcGxheSkge1xyXG5cclxuXHRcdFx0XHR2YXIgY29sdW1uID0gNjtcclxuXHRcdFx0XHR2YXIgYXBpID0gdGhpcy5hcGkoKSwgZGF0YTtcclxuXHJcblx0XHRcdFx0Ly8gUmVtb3ZlIHRoZSBmb3JtYXR0aW5nIHRvIGdldCBpbnRlZ2VyIGRhdGEgZm9yIHN1bW1hdGlvblxyXG5cdFx0XHRcdHZhciBpbnRWYWwgPSBmdW5jdGlvbihpKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIGkgPT09ICdzdHJpbmcnID8gaS5yZXBsYWNlKC9bXFwkLF0vZywgJycpICogMSA6IHR5cGVvZiBpID09PSAnbnVtYmVyJyA/IGkgOiAwO1xyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdC8vIFRvdGFsIG92ZXIgYWxsIHBhZ2VzXHJcblx0XHRcdFx0dmFyIHRvdGFsID0gYXBpLmNvbHVtbihjb2x1bW4pLmRhdGEoKS5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGludFZhbChhKSArIGludFZhbChiKTtcclxuXHRcdFx0XHR9LCAwKTtcclxuXHJcblx0XHRcdFx0Ly8gVG90YWwgb3ZlciB0aGlzIHBhZ2VcclxuXHRcdFx0XHR2YXIgcGFnZVRvdGFsID0gYXBpLmNvbHVtbihjb2x1bW4sIHtwYWdlOiAnY3VycmVudCd9KS5kYXRhKCkucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHtcclxuXHRcdFx0XHRcdHJldHVybiBpbnRWYWwoYSkgKyBpbnRWYWwoYik7XHJcblx0XHRcdFx0fSwgMCk7XHJcblxyXG5cdFx0XHRcdC8vIFVwZGF0ZSBmb290ZXJcclxuXHRcdFx0XHQkKGFwaS5jb2x1bW4oY29sdW1uKS5mb290ZXIoKSkuaHRtbChcclxuXHRcdFx0XHRcdCckJyArIEtUVXRpbC5udW1iZXJTdHJpbmcocGFnZVRvdGFsLnRvRml4ZWQoMikpICsgJzxici8+ICggJCcgKyBLVFV0aWwubnVtYmVyU3RyaW5nKHRvdGFsLnRvRml4ZWQoMikpICsgJyB0b3RhbCknLFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cclxuXHRcdC8vbWFpbiBmdW5jdGlvbiB0byBpbml0aWF0ZSB0aGUgbW9kdWxlXHJcblx0XHRpbml0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0aW5pdCgpO1xyXG5cdFx0fSxcclxuXHJcblx0fTtcclxuXHJcbn0oKTtcclxuXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0S1REYXRhdGFibGVzQWR2YW5jZWRGb290ZXJDYWxsbGJhY2suaW5pdCgpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/metronic/js/pages/crud/datatables/advanced/footer-callback.js\n");

/***/ }),

/***/ 22:
/*!***************************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/crud/datatables/advanced/footer-callback.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WorkDir\Projects\metronic-laravel\resources\metronic\js\pages\crud\datatables\advanced\footer-callback.js */"./resources/metronic/js/pages/crud/datatables/advanced/footer-callback.js");


/***/ })

/******/ });