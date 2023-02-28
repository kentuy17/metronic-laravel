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
eval("\n\n// Class definition\nvar KTAppChat = function () {\n  var _chatAsideEl;\n  var _chatAsideOffcanvasObj;\n  var _chatContentEl;\n\n  // Private functions\n  var _initAside = function _initAside() {\n    // Mobile offcanvas for mobile mode\n    _chatAsideOffcanvasObj = new KTOffcanvas(_chatAsideEl, {\n      overlay: true,\n      baseClass: 'offcanvas-mobile',\n      //closeBy: 'kt_chat_aside_close',\n      toggleBy: 'kt_app_chat_toggle'\n    });\n\n    // User listing\n    var cardScrollEl = KTUtil.find(_chatAsideEl, '.scroll');\n    var cardBodyEl = KTUtil.find(_chatAsideEl, '.card-body');\n    var searchEl = KTUtil.find(_chatAsideEl, '.input-group');\n    if (cardScrollEl) {\n      // Initialize perfect scrollbar(see:  https://github.com/utatti/perfect-scrollbar)\n      KTUtil.scrollInit(cardScrollEl, {\n        mobileNativeScroll: true,\n        // Enable native scroll for mobile\n        desktopNativeScroll: false,\n        // Disable native scroll and use custom scroll for desktop\n        resetHeightOnDestroy: true,\n        // Reset css height on scroll feature destroyed\n        handleWindowResize: true,\n        // Recalculate hight on window resize\n        rememberPosition: true,\n        // Remember scroll position in cookie\n        height: function height() {\n          // Calculate height\n          var height;\n          if (KTUtil.isBreakpointUp('lg')) {\n            height = KTLayoutContent.getHeight();\n          } else {\n            height = KTUtil.getViewPort().height;\n          }\n          if (_chatAsideEl) {\n            height = height - parseInt(KTUtil.css(_chatAsideEl, 'margin-top')) - parseInt(KTUtil.css(_chatAsideEl, 'margin-bottom'));\n            height = height - parseInt(KTUtil.css(_chatAsideEl, 'padding-top')) - parseInt(KTUtil.css(_chatAsideEl, 'padding-bottom'));\n          }\n          if (cardScrollEl) {\n            height = height - parseInt(KTUtil.css(cardScrollEl, 'margin-top')) - parseInt(KTUtil.css(cardScrollEl, 'margin-bottom'));\n          }\n          if (cardBodyEl) {\n            height = height - parseInt(KTUtil.css(cardBodyEl, 'padding-top')) - parseInt(KTUtil.css(cardBodyEl, 'padding-bottom'));\n          }\n          if (searchEl) {\n            height = height - parseInt(KTUtil.css(searchEl, 'height'));\n            height = height - parseInt(KTUtil.css(searchEl, 'margin-top')) - parseInt(KTUtil.css(searchEl, 'margin-bottom'));\n          }\n\n          // Remove additional space\n          height = height - 2;\n          return height;\n        }\n      });\n    }\n  };\n  return {\n    // Public functions\n    init: function init() {\n      // Elements\n      _chatAsideEl = KTUtil.getById('kt_chat_aside');\n      _chatContentEl = KTUtil.getById('kt_chat_content');\n\n      // Init aside and user list\n      _initAside();\n\n      // Init inline chat example\n      KTLayoutChat.setup(KTUtil.getById('kt_chat_content'));\n\n      // Trigger click to show popup modal chat on page load\n      if (KTUtil.getById('kt_app_chat_toggle')) {\n        setTimeout(function () {\n          KTUtil.getById('kt_app_chat_toggle').click();\n        }, 1000);\n      }\n    }\n  };\n}();\njQuery(document).ready(function () {\n  KTAppChat.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWV0cm9uaWMvanMvcGFnZXMvY3VzdG9tL2NoYXQvY2hhdC5qcz8xY2IyIl0sIm5hbWVzIjpbIktUQXBwQ2hhdCIsIl9jaGF0QXNpZGVFbCIsIl9jaGF0QXNpZGVPZmZjYW52YXNPYmoiLCJfY2hhdENvbnRlbnRFbCIsIl9pbml0QXNpZGUiLCJLVE9mZmNhbnZhcyIsIm92ZXJsYXkiLCJiYXNlQ2xhc3MiLCJ0b2dnbGVCeSIsImNhcmRTY3JvbGxFbCIsIktUVXRpbCIsImZpbmQiLCJjYXJkQm9keUVsIiwic2VhcmNoRWwiLCJzY3JvbGxJbml0IiwibW9iaWxlTmF0aXZlU2Nyb2xsIiwiZGVza3RvcE5hdGl2ZVNjcm9sbCIsInJlc2V0SGVpZ2h0T25EZXN0cm95IiwiaGFuZGxlV2luZG93UmVzaXplIiwicmVtZW1iZXJQb3NpdGlvbiIsImhlaWdodCIsImlzQnJlYWtwb2ludFVwIiwiS1RMYXlvdXRDb250ZW50IiwiZ2V0SGVpZ2h0IiwiZ2V0Vmlld1BvcnQiLCJwYXJzZUludCIsImNzcyIsImluaXQiLCJnZXRCeUlkIiwiS1RMYXlvdXRDaGF0Iiwic2V0dXAiLCJzZXRUaW1lb3V0IiwiY2xpY2siLCJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5Il0sIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBLElBQUlBLFNBQVMsR0FBRyxZQUFZO0VBQzNCLElBQUlDLFlBQVk7RUFDaEIsSUFBSUMsc0JBQXNCO0VBQzFCLElBQUlDLGNBQWM7O0VBRWxCO0VBQ0EsSUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBZTtJQUM1QjtJQUNBRixzQkFBc0IsR0FBRyxJQUFJRyxXQUFXLENBQUNKLFlBQVksRUFBRTtNQUN0REssT0FBTyxFQUFFLElBQUk7TUFDSkMsU0FBUyxFQUFFLGtCQUFrQjtNQUM3QjtNQUNBQyxRQUFRLEVBQUU7SUFDZCxDQUFDLENBQUM7O0lBRVI7SUFDQSxJQUFJQyxZQUFZLEdBQUdDLE1BQU0s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QkFBaUIsQ0FBQzs7TUFFbEQ7TUFDQXhCLFVBQVUsRUFBRTs7TUFFWjtNQUNBeUIsWUFBWSxDQUFDQyxLQUFLLENBQUNwQixNQUFNLENBQUNrQixPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7TUFFckQ7TUFDQSxJQUFJbEIsTUFBTSxDQUFDa0IsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEVBQUU7UUFDekNHLFVBQVUsQ0FBQyxZQUFXO1VBQ3JCckIsTUFBTSxDQUFDa0IsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUNJLEtBQUssRUFBRTtRQUM3QyxDQUFDLEVBQUUsSUFBSSxDQUFDO01BQ1Q7SUFDRDtFQUNELENBQUM7QUFDRixDQUFDLEVBQUU7QUFFSEMsTUFBTSxDQUFDQyxRQUFRLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFlBQVc7RUFDakNuQyxTQUFTLENBQUMyQixJQUFJLEVBQUU7QUFDakIsQ0FBQyxDQUFDIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2N1c3RvbS9jaGF0L2NoYXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtUQXBwQ2hhdCA9IGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgX2NoYXRBc2lkZUVsO1xyXG5cdHZhciBfY2hhdEFzaWRlT2ZmY2FudmFzT2JqO1xyXG5cdHZhciBfY2hhdENvbnRlbnRFbDtcclxuXHJcblx0Ly8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuXHR2YXIgX2luaXRBc2lkZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdC8vIE1vYmlsZSBvZmZjYW52YXMgZm9yIG1vYmlsZSBtb2RlXHJcblx0XHRfY2hhdEFzaWRlT2ZmY2FudmFzT2JqID0gbmV3IEtUT2ZmY2FudmFzKF9jaGF0QXNpZGVFbCwge1xyXG5cdFx0XHRvdmVybGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBiYXNlQ2xhc3M6ICdvZmZjYW52YXMtbW9iaWxlJyxcclxuICAgICAgICAgICAgLy9jbG9zZUJ5OiAna3RfY2hhdF9hc2lkZV9jbG9zZScsXHJcbiAgICAgICAgICAgIHRvZ2dsZUJ5OiAna3RfYXBwX2NoYXRfdG9nZ2xlJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHRcdC8vIFVzZXIgbGlzdGluZ1xyXG5cdFx0dmFyIGNhcmRTY3JvbGxFbCA9IEtUVXRpbC5maW5kKF9jaGF0QXNpZGVFbCwgJy5zY3JvbGwnKTtcclxuXHRcdHZhciBjYXJkQm9keUVsID0gS1RVdGlsLmZpbmQoX2NoYXRBc2lkZUVsLCAnLmNhcmQtYm9keScpO1xyXG5cdFx0dmFyIHNlYXJjaEVsID0gS1RVdGlsLmZpbmQoX2NoYXRBc2lkZUVsLCAnLmlucHV0LWdyb3VwJyk7XHJcblxyXG5cdFx0aWYgKGNhcmRTY3JvbGxFbCkge1xyXG5cdFx0XHQvLyBJbml0aWFsaXplIHBlcmZlY3Qgc2Nyb2xsYmFyKHNlZTogIGh0dHBzOi8vZ2l0aHViLmNvbS91dGF0dGkvcGVyZmVjdC1zY3JvbGxiYXIpXHJcblx0XHRcdEtUVXRpbC5zY3JvbGxJbml0KGNhcmRTY3JvbGxFbCwge1xyXG5cdFx0XHRcdG1vYmlsZU5hdGl2ZVNjcm9sbDogdHJ1ZSwgIC8vIEVuYWJsZSBuYXRpdmUgc2Nyb2xsIGZvciBtb2JpbGVcclxuXHRcdFx0XHRkZXNrdG9wTmF0aXZlU2Nyb2xsOiBmYWxzZSwgLy8gRGlzYWJsZSBuYXRpdmUgc2Nyb2xsIGFuZCB1c2UgY3VzdG9tIHNjcm9sbCBmb3IgZGVza3RvcFxyXG5cdFx0XHRcdHJlc2V0SGVpZ2h0T25EZXN0cm95OiB0cnVlLCAgLy8gUmVzZXQgY3NzIGhlaWdodCBvbiBzY3JvbGwgZmVhdHVyZSBkZXN0cm95ZWRcclxuXHRcdFx0XHRoYW5kbGVXaW5kb3dSZXNpemU6IHRydWUsIC8vIFJlY2FsY3VsYXRlIGhpZ2h0IG9uIHdpbmRvdyByZXNpemVcclxuXHRcdFx0XHRyZW1lbWJlclBvc2l0aW9uOiB0cnVlLCAvLyBSZW1lbWJlciBzY3JvbGwgcG9zaXRpb24gaW4gY29va2llXHJcblx0XHRcdFx0aGVpZ2h0OiBmdW5jdGlvbigpIHsgIC8vIENhbGN1bGF0ZSBoZWlnaHRcclxuXHRcdFx0XHRcdHZhciBoZWlnaHQ7XHJcblxyXG5cdFx0XHRcdFx0aWYgKEtUVXRpbC5pc0JyZWFrcG9pbnRVcCgnbGcnKSkge1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQgPSBLVExheW91dENvbnRlbnQuZ2V0SGVpZ2h0KCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQgPSBLVFV0aWwuZ2V0Vmlld1BvcnQoKS5oZWlnaHQ7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKF9jaGF0QXNpZGVFbCkge1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQgPSBoZWlnaHQgLSBwYXJzZUludChLVFV0aWwuY3NzKF9jaGF0QXNpZGVFbCwgJ21hcmdpbi10b3AnKSkgLSBwYXJzZUludChLVFV0aWwuY3NzKF9jaGF0QXNpZGVFbCwgJ21hcmdpbi1ib3R0b20nKSk7XHJcblx0XHRcdFx0XHRcdGhlaWdodCA9IGhlaWdodCAtIHBhcnNlSW50KEtUVXRpbC5jc3MoX2NoYXRBc2lkZUVsLCAncGFkZGluZy10b3AnKSkgLSBwYXJzZUludChLVFV0aWwuY3NzKF9jaGF0QXNpZGVFbCwgJ3BhZGRpbmctYm90dG9tJykpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChjYXJkU2Nyb2xsRWwpIHtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0ID0gaGVpZ2h0IC0gcGFyc2VJbnQoS1RVdGlsLmNzcyhjYXJkU2Nyb2xsRWwsICdtYXJnaW4tdG9wJykpIC0gcGFyc2VJbnQoS1RVdGlsLmNzcyhjYXJkU2Nyb2xsRWwsICdtYXJnaW4tYm90dG9tJykpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChjYXJkQm9keUVsKSB7XHJcblx0XHRcdFx0XHRcdGhlaWdodCA9IGhlaWdodCAtIHBhcnNlSW50KEtUVXRpbC5jc3MoY2FyZEJvZHlFbCwgJ3BhZGRpbmctdG9wJykpIC0gcGFyc2VJbnQoS1RVdGlsLmNzcyhjYXJkQm9keUVsLCAncGFkZGluZy1ib3R0b20nKSk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKHNlYXJjaEVsKSB7XHJcblx0XHRcdFx0XHRcdGhlaWdodCA9IGhlaWdodCAtIHBhcnNlSW50KEtUVXRpbC5jc3Moc2VhcmNoRWwsICdoZWlnaHQnKSk7XHJcblx0XHRcdFx0XHRcdGhlaWdodCA9IGhlaWdodCAtIHBhcnNlSW50KEtUVXRpbC5jc3Moc2VhcmNoRWwsICdtYXJnaW4tdG9wJykpIC0gcGFyc2VJbnQoS1RVdGlsLmNzcyhzZWFyY2hFbCwgJ21hcmdpbi1ib3R0b20nKSk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gUmVtb3ZlIGFkZGl0aW9uYWwgc3BhY2VcclxuXHRcdFx0XHRcdGhlaWdodCA9IGhlaWdodCAtIDI7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIGhlaWdodDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdC8vIFB1YmxpYyBmdW5jdGlvbnNcclxuXHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBFbGVtZW50c1xyXG5cdFx0XHRfY2hhdEFzaWRlRWwgPSBLVFV0aWwuZ2V0QnlJZCgna3RfY2hhdF9hc2lkZScpO1xyXG5cdFx0XHRfY2hhdENvbnRlbnRFbCA9IEtUVXRpbC5nZXRCeUlkKCdrdF9jaGF0X2NvbnRlbnQnKTtcclxuXHJcblx0XHRcdC8vIEluaXQgYXNpZGUgYW5kIHVzZXIgbGlzdFxyXG5cdFx0XHRfaW5pdEFzaWRlKCk7XHJcblxyXG5cdFx0XHQvLyBJbml0IGlubGluZSBjaGF0IGV4YW1wbGVcclxuXHRcdFx0S1RMYXlvdXRDaGF0LnNldHVwKEtUVXRpbC5nZXRCeUlkKCdrdF9jaGF0X2NvbnRlbnQnKSk7XHJcblxyXG5cdFx0XHQvLyBUcmlnZ2VyIGNsaWNrIHRvIHNob3cgcG9wdXAgbW9kYWwgY2hhdCBvbiBwYWdlIGxvYWRcclxuXHRcdFx0aWYgKEtUVXRpbC5nZXRCeUlkKCdrdF9hcHBfY2hhdF90b2dnbGUnKSkge1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRLVFV0aWwuZ2V0QnlJZCgna3RfYXBwX2NoYXRfdG9nZ2xlJykuY2xpY2soKTtcclxuXHRcdFx0XHR9LCAxMDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn0oKTtcclxuXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0S1RBcHBDaGF0LmluaXQoKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/metronic/js/pages/custom/chat/chat.js\n");

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