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
/******/ 	return __webpack_require__(__webpack_require__.s = 97);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/custom/chat/chat.js":
/*!*********************************************************!*\
  !*** ./resources/metronic/js/pages/custom/chat/chat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Class definition\nvar KTAppChat = function () {\n  var _chatAsideEl;\n  var _chatAsideOffcanvasObj;\n  var _chatContentEl;\n\n  // Private functions\n  var _initAside = function _initAside() {\n    // Mobile offcanvas for mobile mode\n    _chatAsideOffcanvasObj = new KTOffcanvas(_chatAsideEl, {\n      overlay: true,\n      baseClass: 'offcanvas-mobile',\n      //closeBy: 'kt_chat_aside_close',\n      toggleBy: 'kt_app_chat_toggle'\n    });\n\n    // User listing\n    var cardScrollEl = KTUtil.find(_chatAsideEl, '.scroll');\n    var cardBodyEl = KTUtil.find(_chatAsideEl, '.card-body');\n    var searchEl = KTUtil.find(_chatAsideEl, '.input-group');\n    if (cardScrollEl) {\n      // Initialize perfect scrollbar(see:  https://github.com/utatti/perfect-scrollbar)\n      KTUtil.scrollInit(cardScrollEl, {\n        mobileNativeScroll: true,\n        // Enable native scroll for mobile\n        desktopNativeScroll: false,\n        // Disable native scroll and use custom scroll for desktop\n        resetHeightOnDestroy: true,\n        // Reset css height on scroll feature destroyed\n        handleWindowResize: true,\n        // Recalculate hight on window resize\n        rememberPosition: true,\n        // Remember scroll position in cookie\n        height: function height() {\n          // Calculate height\n          var height;\n          if (KTUtil.isBreakpointUp('lg')) {\n            height = KTLayoutContent.getHeight();\n          } else {\n            height = KTUtil.getViewPort().height;\n          }\n          if (_chatAsideEl) {\n            height = height - parseInt(KTUtil.css(_chatAsideEl, 'margin-top')) - parseInt(KTUtil.css(_chatAsideEl, 'margin-bottom'));\n            height = height - parseInt(KTUtil.css(_chatAsideEl, 'padding-top')) - parseInt(KTUtil.css(_chatAsideEl, 'padding-bottom'));\n          }\n          if (cardScrollEl) {\n            height = height - parseInt(KTUtil.css(cardScrollEl, 'margin-top')) - parseInt(KTUtil.css(cardScrollEl, 'margin-bottom'));\n          }\n          if (cardBodyEl) {\n            height = height - parseInt(KTUtil.css(cardBodyEl, 'padding-top')) - parseInt(KTUtil.css(cardBodyEl, 'padding-bottom'));\n          }\n          if (searchEl) {\n            height = height - parseInt(KTUtil.css(searchEl, 'height'));\n            height = height - parseInt(KTUtil.css(searchEl, 'margin-top')) - parseInt(KTUtil.css(searchEl, 'margin-bottom'));\n          }\n\n          // Remove additional space\n          height = height - 2;\n          return height;\n        }\n      });\n    }\n  };\n  return {\n    // Public functions\n    init: function init() {\n      // Elements\n      _chatAsideEl = KTUtil.getById('kt_chat_aside');\n      _chatContentEl = KTUtil.getById('kt_chat_content');\n\n      // Init aside and user list\n      _initAside();\n\n      // Init inline chat example\n      KTLayoutChat.setup(KTUtil.getById('kt_chat_content'));\n\n      // Trigger click to show popup modal chat on page load\n      if (KTUtil.getById('kt_app_chat_toggle')) {\n        setTimeout(function () {\n          KTUtil.getById('kt_app_chat_toggle').click();\n        }, 1000);\n      }\n    }\n  };\n}();\njQuery(document).ready(function () {\n  KTAppChat.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWV0cm9uaWMvanMvcGFnZXMvY3VzdG9tL2NoYXQvY2hhdC5qcz8xY2IyIl0sIm5hbWVzIjpbIktUQXBwQ2hhdCIsIl9jaGF0QXNpZGVFbCIsIl9jaGF0QXNpZGVPZmZjYW52YXNPYmoiLCJfY2hhdENvbnRlbnRFbCIsIl9pbml0QXNpZGUiLCJLVE9mZmNhbnZhcyIsIm92ZXJsYXkiLCJiYXNlQ2xhc3MiLCJ0b2dnbGVCeSIsImNhcmRTY3JvbGxFbCIsIktUVXRpbCIsImZpbmQiLCJjYXJkQm9keUVsIiwic2VhcmNoRWwiLCJzY3JvbGxJbml0IiwibW9iaWxlTmF0aXZlU2Nyb2xsIiwiZGVza3RvcE5hdGl2ZVNjcm9sbCIsInJlc2V0SGVpZ2h0T25EZXN0cm95IiwiaGFuZGxlV2luZG93UmVzaXplIiwicmVtZW1iZXJQb3NpdGlvbiIsImhlaWdodCIsImlzQnJlYWtwb2ludFVwIiwiS1RMYXlvdXRDb250ZW50IiwiZ2V0SGVpZ2h0IiwiZ2V0Vmlld1BvcnQiLCJwYXJzZUludCIsImNzcyIsImluaXQiLCJnZXRCeUlkIiwiS1RMYXlvdXRDaGF0Iiwic2V0dXAiLCJzZXRUaW1lb3V0IiwiY2xpY2siLCJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5Il0sIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBLElBQUlBLFNBQVMsR0FBRyxZQUFZO0VBQzNCLElBQUlDLFlBQVk7RUFDaEIsSUFBSUMsc0JBQXNCO0VBQzFCLElBQUlDLGNBQWM7O0VBRWxCO0VBQ0EsSUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQVUsR0FBZTtJQUM1QjtJQUNBRixzQkFBc0IsR0FBRyxJQUFJRyxXQUFXLENBQUNKLFlBQVksRUFBRTtNQUN0REssT0FBTyxFQUFFLElBQUk7TUFDSkMsU0FBUyxFQUFFLGtCQUFrQjtNQUM3QjtNQUNBQyxRQUFRLEVBQUU7SUFDZCxDQUFDLENBQUM7O0lBRVI7SUFDQSxJQUFJQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0Ms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QUFVLEVBQUU7O01BRVo7TUFDQXlCLFlBQVksQ0FBQ0MsS0FBSyxDQUFDcEIsTUFBTSxDQUFDa0IsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7O01BRXJEO01BQ0EsSUFBSWxCLE1BQU0sQ0FBQ2tCLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO1FBQ3pDRyxVQUFVLENBQUMsWUFBVztVQUNyQnJCLE1BQU0sQ0FBQ2tCLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDSSxLQUFLLEVBQUU7UUFDN0MsQ0FBQyxFQUFFLElBQUksQ0FBQztNQUNUO0lBQ0Q7RUFDRCxDQUFDO0FBQ0YsQ0FBQyxFQUFFO0FBRUhDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBQyxZQUFXO0VBQ2pDbkMsU0FBUyxDQUFDMkIsSUFBSSxFQUFFO0FBQ2pCLENBQUMsQ0FBQyIsImZpbGUiOiIuL3Jlc291cmNlcy9tZXRyb25pYy9qcy9wYWdlcy9jdXN0b20vY2hhdC9jaGF0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEFwcENoYXQgPSBmdW5jdGlvbiAoKSB7XHJcblx0dmFyIF9jaGF0QXNpZGVFbDtcclxuXHR2YXIgX2NoYXRBc2lkZU9mZmNhbnZhc09iajtcclxuXHR2YXIgX2NoYXRDb250ZW50RWw7XHJcblxyXG5cdC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcblx0dmFyIF9pbml0QXNpZGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHQvLyBNb2JpbGUgb2ZmY2FudmFzIGZvciBtb2JpbGUgbW9kZVxyXG5cdFx0X2NoYXRBc2lkZU9mZmNhbnZhc09iaiA9IG5ldyBLVE9mZmNhbnZhcyhfY2hhdEFzaWRlRWwsIHtcclxuXHRcdFx0b3ZlcmxheTogdHJ1ZSxcclxuICAgICAgICAgICAgYmFzZUNsYXNzOiAnb2ZmY2FudmFzLW1vYmlsZScsXHJcbiAgICAgICAgICAgIC8vY2xvc2VCeTogJ2t0X2NoYXRfYXNpZGVfY2xvc2UnLFxyXG4gICAgICAgICAgICB0b2dnbGVCeTogJ2t0X2FwcF9jaGF0X3RvZ2dsZSdcclxuICAgICAgICB9KTtcclxuXHJcblx0XHQvLyBVc2VyIGxpc3RpbmdcclxuXHRcdHZhciBjYXJkU2Nyb2xsRWwgPSBLVFV0aWwuZmluZChfY2hhdEFzaWRlRWwsICcuc2Nyb2xsJyk7XHJcblx0XHR2YXIgY2FyZEJvZHlFbCA9IEtUVXRpbC5maW5kKF9jaGF0QXNpZGVFbCwgJy5jYXJkLWJvZHknKTtcclxuXHRcdHZhciBzZWFyY2hFbCA9IEtUVXRpbC5maW5kKF9jaGF0QXNpZGVFbCwgJy5pbnB1dC1ncm91cCcpO1xyXG5cclxuXHRcdGlmIChjYXJkU2Nyb2xsRWwpIHtcclxuXHRcdFx0Ly8gSW5pdGlhbGl6ZSBwZXJmZWN0IHNjcm9sbGJhcihzZWU6ICBodHRwczovL2dpdGh1Yi5jb20vdXRhdHRpL3BlcmZlY3Qtc2Nyb2xsYmFyKVxyXG5cdFx0XHRLVFV0aWwuc2Nyb2xsSW5pdChjYXJkU2Nyb2xsRWwsIHtcclxuXHRcdFx0XHRtb2JpbGVOYXRpdmVTY3JvbGw6IHRydWUsICAvLyBFbmFibGUgbmF0aXZlIHNjcm9sbCBmb3IgbW9iaWxlXHJcblx0XHRcdFx0ZGVza3RvcE5hdGl2ZVNjcm9sbDogZmFsc2UsIC8vIERpc2FibGUgbmF0aXZlIHNjcm9sbCBhbmQgdXNlIGN1c3RvbSBzY3JvbGwgZm9yIGRlc2t0b3BcclxuXHRcdFx0XHRyZXNldEhlaWdodE9uRGVzdHJveTogdHJ1ZSwgIC8vIFJlc2V0IGNzcyBoZWlnaHQgb24gc2Nyb2xsIGZlYXR1cmUgZGVzdHJveWVkXHJcblx0XHRcdFx0aGFuZGxlV2luZG93UmVzaXplOiB0cnVlLCAvLyBSZWNhbGN1bGF0ZSBoaWdodCBvbiB3aW5kb3cgcmVzaXplXHJcblx0XHRcdFx0cmVtZW1iZXJQb3NpdGlvbjogdHJ1ZSwgLy8gUmVtZW1iZXIgc2Nyb2xsIHBvc2l0aW9uIGluIGNvb2tpZVxyXG5cdFx0XHRcdGhlaWdodDogZnVuY3Rpb24oKSB7ICAvLyBDYWxjdWxhdGUgaGVpZ2h0XHJcblx0XHRcdFx0XHR2YXIgaGVpZ2h0O1xyXG5cclxuXHRcdFx0XHRcdGlmIChLVFV0aWwuaXNCcmVha3BvaW50VXAoJ2xnJykpIHtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0ID0gS1RMYXlvdXRDb250ZW50LmdldEhlaWdodCgpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0ID0gS1RVdGlsLmdldFZpZXdQb3J0KCkuaGVpZ2h0O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChfY2hhdEFzaWRlRWwpIHtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0ID0gaGVpZ2h0IC0gcGFyc2VJbnQoS1RVdGlsLmNzcyhfY2hhdEFzaWRlRWwsICdtYXJnaW4tdG9wJykpIC0gcGFyc2VJbnQoS1RVdGlsLmNzcyhfY2hhdEFzaWRlRWwsICdtYXJnaW4tYm90dG9tJykpO1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQgPSBoZWlnaHQgLSBwYXJzZUludChLVFV0aWwuY3NzKF9jaGF0QXNpZGVFbCwgJ3BhZGRpbmctdG9wJykpIC0gcGFyc2VJbnQoS1RVdGlsLmNzcyhfY2hhdEFzaWRlRWwsICdwYWRkaW5nLWJvdHRvbScpKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoY2FyZFNjcm9sbEVsKSB7XHJcblx0XHRcdFx0XHRcdGhlaWdodCA9IGhlaWdodCAtIHBhcnNlSW50KEtUVXRpbC5jc3MoY2FyZFNjcm9sbEVsLCAnbWFyZ2luLXRvcCcpKSAtIHBhcnNlSW50KEtUVXRpbC5jc3MoY2FyZFNjcm9sbEVsLCAnbWFyZ2luLWJvdHRvbScpKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoY2FyZEJvZHlFbCkge1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQgPSBoZWlnaHQgLSBwYXJzZUludChLVFV0aWwuY3NzKGNhcmRCb2R5RWwsICdwYWRkaW5nLXRvcCcpKSAtIHBhcnNlSW50KEtUVXRpbC5jc3MoY2FyZEJvZHlFbCwgJ3BhZGRpbmctYm90dG9tJykpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChzZWFyY2hFbCkge1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQgPSBoZWlnaHQgLSBwYXJzZUludChLVFV0aWwuY3NzKHNlYXJjaEVsLCAnaGVpZ2h0JykpO1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQgPSBoZWlnaHQgLSBwYXJzZUludChLVFV0aWwuY3NzKHNlYXJjaEVsLCAnbWFyZ2luLXRvcCcpKSAtIHBhcnNlSW50KEtUVXRpbC5jc3Moc2VhcmNoRWwsICdtYXJnaW4tYm90dG9tJykpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIFJlbW92ZSBhZGRpdGlvbmFsIHNwYWNlXHJcblx0XHRcdFx0XHRoZWlnaHQgPSBoZWlnaHQgLSAyO1xyXG5cclxuXHRcdFx0XHRcdHJldHVybiBoZWlnaHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHQvLyBQdWJsaWMgZnVuY3Rpb25zXHJcblx0XHRpbml0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8gRWxlbWVudHNcclxuXHRcdFx0X2NoYXRBc2lkZUVsID0gS1RVdGlsLmdldEJ5SWQoJ2t0X2NoYXRfYXNpZGUnKTtcclxuXHRcdFx0X2NoYXRDb250ZW50RWwgPSBLVFV0aWwuZ2V0QnlJZCgna3RfY2hhdF9jb250ZW50Jyk7XHJcblxyXG5cdFx0XHQvLyBJbml0IGFzaWRlIGFuZCB1c2VyIGxpc3RcclxuXHRcdFx0X2luaXRBc2lkZSgpO1xyXG5cclxuXHRcdFx0Ly8gSW5pdCBpbmxpbmUgY2hhdCBleGFtcGxlXHJcblx0XHRcdEtUTGF5b3V0Q2hhdC5zZXR1cChLVFV0aWwuZ2V0QnlJZCgna3RfY2hhdF9jb250ZW50JykpO1xyXG5cclxuXHRcdFx0Ly8gVHJpZ2dlciBjbGljayB0byBzaG93IHBvcHVwIG1vZGFsIGNoYXQgb24gcGFnZSBsb2FkXHJcblx0XHRcdGlmIChLVFV0aWwuZ2V0QnlJZCgna3RfYXBwX2NoYXRfdG9nZ2xlJykpIHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0S1RVdGlsLmdldEJ5SWQoJ2t0X2FwcF9jaGF0X3RvZ2dsZScpLmNsaWNrKCk7XHJcblx0XHRcdFx0fSwgMTAwMCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59KCk7XHJcblxyXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdEtUQXBwQ2hhdC5pbml0KCk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/metronic/js/pages/custom/chat/chat.js\n");

/***/ }),

/***/ 97:
/*!***************************************************************!*\
  !*** multi ./resources/metronic/js/pages/custom/chat/chat.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WorkDir\Projects\metronic-laravel\resources\metronic\js\pages\custom\chat\chat.js */"./resources/metronic/js/pages/custom/chat/chat.js");


/***/ })

/******/ });