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
/******/ 	return __webpack_require__(__webpack_require__.s = 153);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/features/miscellaneous/session-timeout.js":
/*!*******************************************************************************!*\
  !*** ./resources/metronic/js/pages/features/miscellaneous/session-timeout.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar KTSessionTimeoutDemo = function () {\n  var initDemo = function initDemo() {\n    $.sessionTimeout({\n      title: 'Session Timeout Notification',\n      message: 'Your session is about to expire.',\n      keepAliveUrl: HOST_URL + '/api//session-timeout/keepalive.php',\n      redirUrl: '?p=page_user_lock_1',\n      logoutUrl: '?p=page_user_login_1',\n      warnAfter: 5000,\n      //warn after 5 seconds\n      redirAfter: 15000,\n      //redirect after 15 secons,\n      ignoreUserActivity: true,\n      countdownMessage: 'Redirecting in {timer} seconds.',\n      countdownBar: true\n    });\n  };\n  return {\n    //main function to initiate the module\n    init: function init() {\n      initDemo();\n    }\n  };\n}();\njQuery(document).ready(function () {\n  KTSessionTimeoutDemo.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWV0cm9uaWMvanMvcGFnZXMvZmVhdHVyZXMvbWlzY2VsbGFuZW91cy9zZXNzaW9uLXRpbWVvdXQuanM/NjU5YiJdLCJuYW1lcyI6WyJLVFNlc3Npb25UaW1lb3V0RGVtbyIsImluaXREZW1vIiwiJCIsInNlc3Npb25UaW1lb3V0IiwidGl0bGUiLCJtZXNzYWdlIiwia2VlcEFsaXZlVXJsIiwiSE9TVF9VUkwiLCJyZWRpclVybCIsImxvZ291dFVybCIsIndhcm5BZnRlciIsInJlZGlyQWZ0ZXIiLCJpZ25vcmVVc2VyQWN0aXZpdHkiLCJjb3VudGRvd25NZXNzYWdlIiwiY291bnRkb3duQmFyIiwiaW5pdCIsImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiXSwibWFwcGluZ3MiOiJBQUFhOztBQUViLElBQUlBLG9CQUFvQixHQUFHLFlBQVk7RUFDbkMsSUFBSUMsUUFBUSxHQUFHLFNBQVhBLFFBQVEsR0FBZTtJQUN2QkMsQ0FBQyxDQUFDQyxjQUFjLENBQUM7TUFDYkMsS0FBSyxFQUFFLDhCQUE4QjtNQUNyQ0MsT0FBTyxFQUFFLGtDQUFrQztNQUMzQ0MsWUFBWSxFQUFFQyxRQUFRLEdBQUcscUNBQXFDO01BQzlEQyxRQUFRLEVBQUUscUJBQXFCO01BQy9CQyxTQUFTLEVBQUUsc0JBQXNCO01BQ2pDQyxTQUFTLEVBQUUsSUFBSTtNQUFFO01BQ2pCQyxVQUFVLEVBQUUsS0FBSztNQUFFO01BQ25CQyxrQkFBa0IsRUFBRSxJQUFJO01BQ3hCQyxnQkFBZ0IsRUFBRSxpQ0FBaUM7TUFDbkRDLFlBQVksRUFBRTtJQUNsQixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQsT0FBTztJQUNIO0lBQ0FDLElBQUksRUFBRSxnQkFBWTtNQUNkZCxRQUFRLEVBQUU7SUFDZDtFQUNKLENBQUM7QUFDTCxDQUFDLEVBQUU7QUFFSGUsTUFBTSxDQUFDQyxRQUFRLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFlBQVc7RUFDOUJsQixvQkFBb0IsQ0FBQ2UsSUFBSSxFQUFFO0FBQy9CLENBQUMsQ0FBQyIsImZpbGUiOiIuL3Jlc291cmNlcy9tZXRyb25pYy9qcy9wYWdlcy9mZWF0dXJlcy9taXNjZWxsYW5lb3VzL3Nlc3Npb24tdGltZW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIEtUU2Vzc2lvblRpbWVvdXREZW1vID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGluaXREZW1vID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQuc2Vzc2lvblRpbWVvdXQoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1Nlc3Npb24gVGltZW91dCBOb3RpZmljYXRpb24nLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnWW91ciBzZXNzaW9uIGlzIGFib3V0IHRvIGV4cGlyZS4nLFxyXG4gICAgICAgICAgICBrZWVwQWxpdmVVcmw6IEhPU1RfVVJMICsgJy9hcGkvL3Nlc3Npb24tdGltZW91dC9rZWVwYWxpdmUucGhwJyxcclxuICAgICAgICAgICAgcmVkaXJVcmw6ICc/cD1wYWdlX3VzZXJfbG9ja18xJyxcclxuICAgICAgICAgICAgbG9nb3V0VXJsOiAnP3A9cGFnZV91c2VyX2xvZ2luXzEnLFxyXG4gICAgICAgICAgICB3YXJuQWZ0ZXI6IDUwMDAsIC8vd2FybiBhZnRlciA1IHNlY29uZHNcclxuICAgICAgICAgICAgcmVkaXJBZnRlcjogMTUwMDAsIC8vcmVkaXJlY3QgYWZ0ZXIgMTUgc2Vjb25zLFxyXG4gICAgICAgICAgICBpZ25vcmVVc2VyQWN0aXZpdHk6IHRydWUsXHJcbiAgICAgICAgICAgIGNvdW50ZG93bk1lc3NhZ2U6ICdSZWRpcmVjdGluZyBpbiB7dGltZXJ9IHNlY29uZHMuJyxcclxuICAgICAgICAgICAgY291bnRkb3duQmFyOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL21haW4gZnVuY3Rpb24gdG8gaW5pdGlhdGUgdGhlIG1vZHVsZVxyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaW5pdERlbW8oKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgS1RTZXNzaW9uVGltZW91dERlbW8uaW5pdCgpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/metronic/js/pages/features/miscellaneous/session-timeout.js\n");

/***/ }),

/***/ 153:
/*!*************************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/features/miscellaneous/session-timeout.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WorkDir\Projects\metronic-laravel\resources\metronic\js\pages\features\miscellaneous\session-timeout.js */"./resources/metronic/js/pages/features/miscellaneous/session-timeout.js");


/***/ })

/******/ });