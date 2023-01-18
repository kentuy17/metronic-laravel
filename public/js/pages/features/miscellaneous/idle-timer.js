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
/******/ 	return __webpack_require__(__webpack_require__.s = 150);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/features/miscellaneous/idle-timer.js":
/*!**************************************************************************!*\
  !*** ./resources/metronic/js/pages/features/miscellaneous/idle-timer.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar KTIdleTimerDemo = function () {\n  var _initDemo1 = function _initDemo1() {\n    //Define default\n    var docTimeout = 5000;\n\n    /*\r\n    Handle raised idle/active events\r\n    */\n    $(document).on(\"idle.idleTimer\", function (event, elem, obj) {\n      $(\"#docStatus\").val(function (i, v) {\n        return v + \"Idle @ \" + moment().format() + \" \\n\";\n      }).removeClass(\"alert-success\").addClass(\"alert-warning\").scrollTop($(\"#docStatus\")[0].scrollHeight);\n    });\n    $(document).on(\"active.idleTimer\", function (event, elem, obj, e) {\n      $(\"#docStatus\").val(function (i, v) {\n        return v + \"Active [\" + e.type + \"] [\" + e.target.nodeName + \"] @ \" + moment().format() + \" \\n\";\n      }).addClass(\"alert-success\").removeClass(\"alert-warning\").scrollTop($(\"#docStatus\")[0].scrollHeight);\n    });\n\n    /*\r\n    Handle button events\r\n    */\n    $(\"#btPause\").click(function () {\n      $(document).idleTimer(\"pause\");\n      $(\"#docStatus\").val(function (i, v) {\n        return v + \"Paused @ \" + moment().format() + \" \\n\";\n      }).scrollTop($(\"#docStatus\")[0].scrollHeight);\n      $(this).blur();\n      return false;\n    });\n    $(\"#btResume\").click(function () {\n      $(document).idleTimer(\"resume\");\n      $(\"#docStatus\").val(function (i, v) {\n        return v + \"Resumed @ \" + moment().format() + \" \\n\";\n      }).scrollTop($(\"#docStatus\")[0].scrollHeight);\n      $(this).blur();\n      return false;\n    });\n    $(\"#btElapsed\").click(function () {\n      $(\"#docStatus\").val(function (i, v) {\n        return v + \"Elapsed (since becoming active): \" + $(document).idleTimer(\"getElapsedTime\") + \" \\n\";\n      }).scrollTop($(\"#docStatus\")[0].scrollHeight);\n      $(this).blur();\n      return false;\n    });\n    $(\"#btDestroy\").click(function () {\n      $(document).idleTimer(\"destroy\");\n      $(\"#docStatus\").val(function (i, v) {\n        return v + \"Destroyed: @ \" + moment().format() + \" \\n\";\n      }).removeClass(\"alert-success\").removeClass(\"alert-warning\").scrollTop($(\"#docStatus\")[0].scrollHeight);\n      $(this).blur();\n      return false;\n    });\n    $(\"#btInit\").click(function () {\n      // for demo purposes show init with just object\n      $(document).idleTimer({\n        timeout: docTimeout\n      });\n      $(\"#docStatus\").val(function (i, v) {\n        return v + \"Init: @ \" + moment().format() + \" \\n\";\n      }).scrollTop($(\"#docStatus\")[0].scrollHeight);\n\n      //Apply classes for default state\n      if ($(document).idleTimer(\"isIdle\")) {\n        $(\"#docStatus\").removeClass(\"alert-success\").addClass(\"alert-warning\");\n      } else {\n        $(\"#docStatus\").addClass(\"alert-success\").removeClass(\"alert-warning\");\n      }\n      $(this).blur();\n      return false;\n    });\n\n    //Clear old statuses\n    $(\"#docStatus\").val(\"\");\n\n    //Start timeout, passing no options\n    //Same as $.idleTimer(docTimeout, docOptions);\n    $(document).idleTimer(docTimeout);\n\n    //For demo purposes, style based on initial state\n    if ($(document).idleTimer(\"isIdle\")) {\n      $(\"#docStatus\").val(function (i, v) {\n        return v + \"Initial Idle State @ \" + moment().format() + \" \\n\";\n      }).removeClass(\"alert-success\").addClass(\"alert-warning\").scrollTop($(\"#docStatus\")[0].scrollHeight);\n    } else {\n      $(\"#docStatus\").val(function (i, v) {\n        return v + \"Initial Active State @ \" + moment().format() + \" \\n\";\n      }).addClass(\"alert-success\").removeClass(\"alert-warning\").scrollTop($(\"#docStatus\")[0].scrollHeight);\n    }\n\n    //For demo purposes, display the actual timeout on the page\n    $(\"#docTimeout\").text(docTimeout / 1000);\n  };\n  var _initDemo2 = function _initDemo2() {\n    //Define textarea settings\n    var taTimeout = 3000;\n\n    /*\r\n    Handle raised idle/active events\r\n    */\n    $(\"#elStatus\").on(\"idle.idleTimer\", function (event, elem, obj) {\n      //If you dont stop propagation it will bubble up to document event handler\n      event.stopPropagation();\n      $(\"#elStatus\").val(function (i, v) {\n        return v + \"Idle @ \" + moment().format() + \" \\n\";\n      }).removeClass(\"alert-success\").addClass(\"alert-warning\").scrollTop($(\"#elStatus\")[0].scrollHeight);\n    });\n    $(\"#elStatus\").on(\"active.idleTimer\", function (event) {\n      //If you dont stop propagation it will bubble up to document event handler\n      event.stopPropagation();\n      $(\"#elStatus\").val(function (i, v) {\n        return v + \"Active @ \" + moment().format() + \" \\n\";\n      }).addClass(\"alert-success\").removeClass(\"alert-warning\").scrollTop($(\"#elStatus\")[0].scrollHeight);\n    });\n\n    /*\r\n    Handle button events\r\n    */\n    $(\"#btReset\").click(function () {\n      $(\"#elStatus\").idleTimer(\"reset\").val(function (i, v) {\n        return v + \"Reset @ \" + moment().format() + \" \\n\";\n      }).scrollTop($(\"#elStatus\")[0].scrollHeight);\n\n      //Apply classes for default state\n      if ($(\"#elStatus\").idleTimer(\"isIdle\")) {\n        $(\"#elStatus\").removeClass(\"alert-success\").addClass(\"alert-warning\");\n      } else {\n        $(\"#elStatus\").addClass(\"alert-success\").removeClass(\"alert-warning\");\n      }\n      $(this).blur();\n      return false;\n    });\n    $(\"#btRemaining\").click(function () {\n      $(\"#elStatus\").val(function (i, v) {\n        return v + \"Remaining: \" + $(\"#elStatus\").idleTimer(\"getRemainingTime\") + \" \\n\";\n      }).scrollTop($(\"#elStatus\")[0].scrollHeight);\n      $(this).blur();\n      return false;\n    });\n    $(\"#btLastActive\").click(function () {\n      $(\"#elStatus\").val(function (i, v) {\n        return v + \"LastActive: \" + $(\"#elStatus\").idleTimer(\"getLastActiveTime\") + \" \\n\";\n      }).scrollTop($(\"#elStatus\")[0].scrollHeight);\n      $(this).blur();\n      return false;\n    });\n    $(\"#btState\").click(function () {\n      $(\"#elStatus\").val(function (i, v) {\n        return v + \"State: \" + ($(\"#elStatus\").idleTimer(\"isIdle\") ? \"idle\" : \"active\") + \" \\n\";\n      }).scrollTop($(\"#elStatus\")[0].scrollHeight);\n      $(this).blur();\n      return false;\n    });\n\n    //Clear value if there was one cached & start time\n    $(\"#elStatus\").val(\"\").idleTimer(taTimeout);\n\n    //For demo purposes, show initial state\n    if ($(\"#elStatus\").idleTimer(\"isIdle\")) {\n      $(\"#elStatus\").val(function (i, v) {\n        return v + \"Initial Idle @ \" + moment().format() + \" \\n\";\n      }).removeClass(\"alert-success\").addClass(\"alert-warning\").scrollTop($(\"#elStatus\")[0].scrollHeight);\n    } else {\n      $(\"#elStatus\").val(function (i, v) {\n        return v + \"Initial Active @ \" + moment().format() + \" \\n\";\n      }).addClass(\"alert-success\").removeClass(\"alert-warning\").scrollTop($(\"#elStatus\")[0].scrollHeight);\n    }\n\n    // Display the actual timeout on the page\n    $(\"#elTimeout\").text(taTimeout / 1000);\n  };\n  return {\n    //main function to initiate the module\n    init: function init() {\n      _initDemo1();\n      _initDemo2();\n    }\n  };\n}();\njQuery(document).ready(function () {\n  KTIdleTimerDemo.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWV0cm9uaWMvanMvcGFnZXMvZmVhdHVyZXMvbWlzY2VsbGFuZW91cy9pZGxlLXRpbWVyLmpzPzFjMTMiXSwibmFtZXMiOlsiS1RJZGxlVGltZXJEZW1vIiwiX2luaXREZW1vMSIsImRvY1RpbWVvdXQiLCIkIiwiZG9jdW1lbnQiLCJvbiIsImV2ZW50IiwiZWxlbSIsIm9iaiIsInZhbCIsImkiLCJ2IiwibW9tZW50IiwiZm9ybWF0IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImUiLCJ0eXBlIiwidGFyZ2V0Iiwibm9kZU5hbWUiLCJjbGljayIsImlkbGVUaW1lciIsImJsdXIiLCJ0aW1lb3V0IiwidGV4dCIsIl9pbml0RGVtbzIiLCJ0YVRpbWVvdXQiLCJzdG9wUHJvcGFnYXRpb24iLCJpbml0IiwialF1ZXJ5IiwicmVhZHkiXSwibWFwcGluZ3MiOiJBQUFhOztBQUViLElBQUlBLGVBQWUsR0FBRyxZQUFXO0VBQzdCLElBQUlDLFVBQVUsR0FBRyxTQUFiQSxVQUFVLEdBQWM7SUFDeEI7SUFDQSxJQUFJQyxVQUFVLEdBQUcsSUFBSTs7SUFFckI7QUFDUjtBQUNBO0lBQ1FDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUNDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFTQyxLQUFLLEVBQUVDLElBQUksRUFBRUMsR0FBRyxFQUFFO01BQ3hETCxDQUFDLENBQUMsWUFBWSxDQUFDLENBQ1ZNLEdBQUcsQ0FBQyxVQUFTQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtRQUNoQixPQUFPQSxDQUFDLEdBQUcsU0FBUyxHQUFHQyxNQUFNLEVBQUUsQ0FBQ0MsTUFBTSxFQUFFLEdBQUcsS0FBSztNQUNwRCxDQUFDLENBQUMsQ0FDREMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUM1QkMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUN6QkMsU0FBUyxDQUFDYixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNjLFlBQVksQ0FBQztJQUNuRCxDQUFDLENBQUM7SUFDRmQsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLGtCQUFrQixFQUFFLFVBQVNDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxHQUFHLEVBQUVVLENBQUMsRUFBRTtNQUM3RGYsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUNWTSxHQUFHLENBQUMsVUFBU0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7UUFDaEIsT0FBT0EsQ0FBQyxHQUFHLFVBQVUsR0FBR08sQ0FBQyxDQUFDQyxJQUFJLEdBQUcsS0FBSyxHQUFHRCxDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsUUFBUSxHQUFHLE1BQU0sR0FBR1QsTUFBTSxFQUFFLENBQUNDLE1BQU0sRUFBRSxHQUFHLEtBQUs7TUFDbkcsQ0FBQyxDQUFDLENBQ0RFLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FDekJELFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FDNUJFLFNBQVMsQ0FBQ2IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDYyxZQUFZLENBQUM7SUFDbkQsQ0FBQyxDQUFDOztJQUVGO0FBQ1I7QUFDQTtJQUNRZCxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUNtQixLQUFLLENBQUMsWUFBVztNQUMzQm5CLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUNtQixTQUFTLENBQUMsT0FBTyxDQUFDO01BQzlCcEIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUNWTSxHQUFHLENBQUMsVUFBU0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7UUFDaEIsT0FBT0EsQ0FBQyxHQUFHLFdBQVcsR0FBR0MsTUFBTSxFQUFFLENBQUNDLE1BQU0sRUFBRSxHQUFHLEtBQUs7TUFDdEQsQ0FBQyxDQUFDLENBQ0RHLFNBQVMsQ0FBQ2IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDYyxZQUFZLENBQUM7TUFDL0NkLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3FCLElBQUksRUFBRTtNQUNkLE9BQU8sS0FBSztJQUNoQixDQUFDLENBQUM7SUFDRnJCLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQ21CLEtBQUssQ0FBQyxZQUFXO01BQzVCbkIsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQ21CLFNBQVMsQ0FBQyxRQUFRLENBQUM7TUFDL0JwQixDQUFDLENBQUMsWUFBWSxDQUFDLENBQ1ZNLEdBQUcsQ0FBQyxVQUFTQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtRQUNoQixPQUFPQSxDQUFDLEdBQUcsWUFBWSxHQUFHQyxNQUFNLEVBQUUsQ0FBQ0MsTUFBTSxFQUFFLEdBQUcsS0FBSztNQUN2RCxDQUFDLENBQUMsQ0FDREcsU0FBUyxDQUFDYixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNjLFlBQVksQ0FBQztNQUMvQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDcUIsSUFBSSxFQUFFO01BQ2QsT0FBTyxLQUFLO0lBQ2hCLENBQUMsQ0FBQztJQUNGckIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDbUIsS0FBSyxDQUFDLFlBQVc7TUFDN0JuQixDQUFDLENBQUMsWUFBWSxDQUFDLENBQ1ZNLEdBQUcsQ0FBQyxVQUFTQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtRQUNoQixPQUFPQSxDQUFDLEdBQUcsbUNBQW1DLEdBQUdSLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUNtQixTQUFTLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxLQUFLO01BQ3BHLENBQUMsQ0FBQyxDQUNEUCxTQUFTLENBQUNiLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ2MsWUFBWSxDQUFDO01BQy9DZCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNxQixJQUFJLEVBQUU7TUFDZCxPQUFPLEtBQUs7SUFDaEIsQ0FBQyxDQUFDO0lBQ0ZyQixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUNtQixLQUFLLENBQUMsWUFBVztNQUM3Qm5CLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUNtQixTQUFTLENBQUMsU0FBUyxDQUFDO01BQ2hDcEIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUNWTSxHQUFHLENBQUMsVUFBU0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7UUFDaEIsT0FBT0EsQ0FBQyxHQUFHLGVBQWUsR0FBR0MsTUFBTSxFQUFFLENBQUNDLE1BQU0sRUFBRSxHQUFHLEtBQUs7TUFDMUQsQ0FBQyxDQUFDLENBQ0RDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FDNUJBLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FDNUJFLFNBQVMsQ0FBQ2IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDYyxZQUFZLENBQUM7TUFDL0NkLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3FCLElBQUksRUFBRTtNQUNkLE9BQU8sS0FBSztJQUNoQixDQUFDLENBQUM7SUFDRnJCLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQ21CLEtBQUssQ0FBQyxZQUFXO01BQzFCO01BQ0FuQixDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDbUIsU0FBUyxDQUFDO1FBQ2xCRSxPQUFPLEVBQUV2QjtNQUNiLENBQUMsQ0FBQztNQUNGQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQ1ZNLEdBQUcsQ0FBQyxVQUFTQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtRQUNoQixPQUFPQSxDQUFDLEdBQUcsVUFBVSxHQUFHQyxNQUFNLEVBQUUsQ0FBQ0MsTUFBTSxFQUFFLEdBQUcsS0FBSztNQUNyRCxDQUFDLENBQUMsQ0FDREcsU0FBUyxDQUFDYixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNjLFlBQVksQ0FBQzs7TUFFL0M7TUFDQSxJQUFJZCxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDbUIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ2pDcEIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUNWVyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQzVCQyxRQUFRLENBQUMsZUFBZSxDQUFDO01BQ2xDLENBQUMsTUFBTTtRQUNIWixDQUFDLENBQUMsWUFBWSxDQUFDLENBQ1ZZLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FDekJELFdBQVcsQ0FBQyxlQUFlLENBQUM7TUFDckM7TUFDQVgsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDcUIsSUFBSSxFQUFFO01BQ2QsT0FBTyxLQUFLO0lBQ2hCLENBQUMsQ0FBQzs7SUFFRjtJQUNBckIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDTSxHQUFHLENBQUMsRUFBRSxDQUFDOztJQUV2QjtJQUNBO0lBQ0FOLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUNtQixTQUFTLENBQUNyQixVQUFVLENBQUM7O0lBRWpDO0lBQ0EsSUFBSUMsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQ21CLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTtNQUNqQ3BCLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FDVk0sR0FBRyxDQUFDLFVBQVNDLENBQUMsRUFBRUMsQ0FBQyxFQUFFO1FBQ2hCLE9BQU9BLENBQUMsR0FBRyx1QkFBdUIsR0FBR0MsTUFBTSxFQUFFLENBQUNDLE1BQU0sRUFBRSxHQUFHLEtBQUs7TUFDbEUsQ0FBQyxDQUFDLENBQ0RDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FDNUJDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FDekJDLFNBQVMsQ0FBQ2IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDYyxZQUFZLENBQUM7SUFDbkQsQ0FBQyxNQUFNO01BQ0hkLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FDVk0sR0FBRyxDQUFDLFVBQVNDLENBQUMsRUFBRUMsQ0FBQyxFQUFFO1FBQ2hCLE9BQU9BLENBQUMsR0FBRyx5QkFBeUIsR0FBR0MsTUFBTSxFQUFFLENBQUNDLE1BQU0sRUFBRSxHQUFHLEtBQUs7TUFDcEUsQ0FBQyxDQUFDLENBQ0RFLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FDekJELFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FDNUJFLFNBQVMsQ0FBQ2IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDYyxZQUFZLENBQUM7SUFDbkQ7O0lBR0E7SUFDQWQsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDdUIsSUFBSSxDQUFDeEIsVUFBVSxHQUFHLElBQUksQ0FBQztFQUM1QyxDQUFDO0VBRUQsSUFBSXlCLFVBQVUsR0FBRyxTQUFiQSxVQUFVLEdBQWM7SUFDeEI7SUFDQSxJQUNJQyxTQUFTLEdBQUcsSUFBSTs7SUFFcEI7QUFDUjtBQUNBO0lBQ1F6QixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUNFLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFTQyxLQUFLLEVBQUVDLElBQUksRUFBRUMsR0FBRyxFQUFFO01BQzNEO01BQ0FGLEtBQUssQ0FBQ3VCLGVBQWUsRUFBRTtNQUV2QjFCLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FDVE0sR0FBRyxDQUFDLFVBQVNDLENBQUMsRUFBRUMsQ0FBQyxFQUFFO1FBQ2hCLE9BQU9BLENBQUMsR0FBRyxTQUFTLEdBQUdDLE1BQU0sRUFBRSxDQUFDQyxNQUFNLEVBQUUsR0FBRyxLQUFLO01BQ3BELENBQUMsQ0FBQyxDQUNEQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQzVCQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQ3pCQyxTQUFTLENBQUNiLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ2MsWUFBWSxDQUFDO0lBRWxELENBQUMsQ0FBQztJQUNGZCxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUNFLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxVQUFTQyxLQUFLLEVBQUU7TUFDbEQ7TUFDQUEsS0FBSyxDQUFDdUIsZUFBZSxFQUFFO01BRXZCMUIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUNUTSxHQUFHLENBQUMsVUFBU0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7UUFDaEIsT0FBT0EsQ0FBQyxHQUFHLFdBQVcsR0FBR0MsTUFBTSxFQUFFLENBQUNDLE1BQU0sRUFBRSxHQUFHLEtBQUs7TUFDdEQsQ0FBQyxDQUFDLENBQ0RFLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FDekJELFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FDNUJFLFNBQVMsQ0FBQ2IsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDYyxZQUFZLENBQUM7SUFDbEQsQ0FBQyxDQUFDOztJQUVGO0FBQ1I7QUFDQTtJQUNRZCxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUNtQixLQUFLLENBQUMsWUFBVztNQUMzQm5CLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FDVG9CLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FDbEJkLEdBQUcsQ0FBQyxVQUFTQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtRQUNoQixPQUFPQSxDQUFDLEdBQUcsVUFBVSxHQUFHQyxNQUFNLEVBQUUsQ0FBQ0MsTUFBTSxFQUFFLEdBQUcsS0FBSztNQUNyRCxDQUFDLENBQUMsQ0FDREcsU0FBUyxDQUFDYixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNjLFlBQVksQ0FBQzs7TUFFOUM7TUFDQSxJQUFJZCxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUNvQixTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDcENwQixDQUFDLENBQUMsV0FBVyxDQUFDLENBQ1RXLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FDNUJDLFFBQVEsQ0FBQyxlQUFlLENBQUM7TUFDbEMsQ0FBQyxNQUFNO1FBQ0haLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FDVFksUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUN6QkQsV0FBVyxDQUFDLGVBQWUsQ0FBQztNQUNyQztNQUNBWCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNxQixJQUFJLEVBQUU7TUFDZCxPQUFPLEtBQUs7SUFDaEIsQ0FBQyxDQUFDO0lBQ0ZyQixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUNtQixLQUFLLENBQUMsWUFBVztNQUMvQm5CLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FDVE0sR0FBRyxDQUFDLFVBQVNDLENBQUMsRUFBRUMsQ0FBQyxFQUFFO1FBQ2hCLE9BQU9BLENBQUMsR0FBRyxhQUFhLEdBQUdSLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQ29CLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEtBQUs7TUFDbkYsQ0FBQyxDQUFDLENBQ0RQLFNBQVMsQ0FBQ2IsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDYyxZQUFZLENBQUM7TUFDOUNkLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3FCLElBQUksRUFBRTtNQUNkLE9BQU8sS0FBSztJQUNoQixDQUFDLENBQUM7SUFDRnJCLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ21CLEtBQUssQ0FBQyxZQUFXO01BQ2hDbkIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUNUTSxHQUFHLENBQUMsVUFBU0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7UUFDaEIsT0FBT0EsQ0FBQyxHQUFHLGNBQWMsR0FBR1IsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDb0IsU0FBUyxDQUFDLG1CQUFtQixDQUFDLEdBQUcsS0FBSztNQUNyRixDQUFDLENBQUMsQ0FDRFAsU0FBUyxDQUFDYixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNjLFlBQVksQ0FBQztNQUM5Q2QsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDcUIsSUFBSSxFQUFFO01BQ2QsT0FBTyxLQUFLO0lBQ2hCLENBQUMsQ0FBQztJQUNGckIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDbUIsS0FBSyxDQUFDLFlBQVc7TUFDM0JuQixDQUFDLENBQUMsV0FBVyxDQUFDLENBQ1RNLEdBQUcsQ0FBQyxVQUFTQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtRQUNoQixPQUFPQSxDQUFDLEdBQUcsU0FBUyxJQUFJUixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUNvQixTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEtBQUs7TUFDM0YsQ0FBQyxDQUFDLENBQ0RQLFNBQVMsQ0FBQ2IsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDYyxZQUFZLENBQUM7TUFDOUNkLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3FCLElBQUksRUFBRTtNQUNkLE9BQU8sS0FBSztJQUNoQixDQUFDLENBQUM7O0lBRUY7SUFDQXJCLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQ00sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDYyxTQUFTLENBQUNLLFNBQVMsQ0FBQzs7SUFFM0M7SUFDQSxJQUFJekIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDb0IsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO01BQ3BDcEIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUNUTSxHQUFHLENBQUMsVUFBU0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7UUFDaEIsT0FBT0EsQ0FBQyxHQUFHLGlCQUFpQixHQUFHQyxNQUFNLEVBQUUsQ0FBQ0MsTUFBTSxFQUFFLEdBQUcsS0FBSztNQUM1RCxDQUFDLENBQUMsQ0FDREMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUM1QkMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUN6QkMsU0FBUyxDQUFDYixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNjLFlBQVksQ0FBQztJQUNsRCxDQUFDLE1BQU07TUFDSGQsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUNUTSxHQUFHLENBQUMsVUFBU0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7UUFDaEIsT0FBT0EsQ0FBQyxHQUFHLG1CQUFtQixHQUFHQyxNQUFNLEVBQUUsQ0FBQ0MsTUFBTSxFQUFFLEdBQUcsS0FBSztNQUM5RCxDQUFDLENBQUMsQ0FDREUsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUN6QkQsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUM1QkUsU0FBUyxDQUFDYixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNjLFlBQVksQ0FBQztJQUNsRDs7SUFFQTtJQUNBZCxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUN1QixJQUFJLENBQUNFLFNBQVMsR0FBRyxJQUFJLENBQUM7RUFFMUMsQ0FBQztFQUVELE9BQU87SUFDSDtJQUNBRSxJQUFJLEVBQUUsZ0JBQVc7TUFDYjdCLFVBQVUsRUFBRTtNQUNaMEIsVUFBVSxFQUFFO0lBQ2hCO0VBQ0osQ0FBQztBQUNMLENBQUMsRUFBRTtBQUVISSxNQUFNLENBQUMzQixRQUFRLENBQUMsQ0FBQzRCLEtBQUssQ0FBQyxZQUFXO0VBQzlCaEMsZUFBZSxDQUFDOEIsSUFBSSxFQUFFO0FBQzFCLENBQUMsQ0FBQyIsImZpbGUiOiIuL3Jlc291cmNlcy9tZXRyb25pYy9qcy9wYWdlcy9mZWF0dXJlcy9taXNjZWxsYW5lb3VzL2lkbGUtdGltZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBLVElkbGVUaW1lckRlbW8gPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBfaW5pdERlbW8xID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy9EZWZpbmUgZGVmYXVsdFxyXG4gICAgICAgIHZhciBkb2NUaW1lb3V0ID0gNTAwMDtcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICBIYW5kbGUgcmFpc2VkIGlkbGUvYWN0aXZlIGV2ZW50c1xyXG4gICAgICAgICovXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oXCJpZGxlLmlkbGVUaW1lclwiLCBmdW5jdGlvbihldmVudCwgZWxlbSwgb2JqKSB7XHJcbiAgICAgICAgICAgICQoXCIjZG9jU3RhdHVzXCIpXHJcbiAgICAgICAgICAgICAgICAudmFsKGZ1bmN0aW9uKGksIHYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdiArIFwiSWRsZSBAIFwiICsgbW9tZW50KCkuZm9ybWF0KCkgKyBcIiBcXG5cIjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbGVydC1zdWNjZXNzXCIpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJhbGVydC13YXJuaW5nXCIpXHJcbiAgICAgICAgICAgICAgICAuc2Nyb2xsVG9wKCQoXCIjZG9jU3RhdHVzXCIpWzBdLnNjcm9sbEhlaWdodCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChkb2N1bWVudCkub24oXCJhY3RpdmUuaWRsZVRpbWVyXCIsIGZ1bmN0aW9uKGV2ZW50LCBlbGVtLCBvYmosIGUpIHtcclxuICAgICAgICAgICAgJChcIiNkb2NTdGF0dXNcIilcclxuICAgICAgICAgICAgICAgIC52YWwoZnVuY3Rpb24oaSwgdikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2ICsgXCJBY3RpdmUgW1wiICsgZS50eXBlICsgXCJdIFtcIiArIGUudGFyZ2V0Lm5vZGVOYW1lICsgXCJdIEAgXCIgKyBtb21lbnQoKS5mb3JtYXQoKSArIFwiIFxcblwiO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImFsZXJ0LXN1Y2Nlc3NcIilcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFsZXJ0LXdhcm5pbmdcIilcclxuICAgICAgICAgICAgICAgIC5zY3JvbGxUb3AoJChcIiNkb2NTdGF0dXNcIilbMF0uc2Nyb2xsSGVpZ2h0KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICBIYW5kbGUgYnV0dG9uIGV2ZW50c1xyXG4gICAgICAgICovXHJcbiAgICAgICAgJChcIiNidFBhdXNlXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5pZGxlVGltZXIoXCJwYXVzZVwiKTtcclxuICAgICAgICAgICAgJChcIiNkb2NTdGF0dXNcIilcclxuICAgICAgICAgICAgICAgIC52YWwoZnVuY3Rpb24oaSwgdikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2ICsgXCJQYXVzZWQgQCBcIiArIG1vbWVudCgpLmZvcm1hdCgpICsgXCIgXFxuXCI7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnNjcm9sbFRvcCgkKFwiI2RvY1N0YXR1c1wiKVswXS5zY3JvbGxIZWlnaHQpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmJsdXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoXCIjYnRSZXN1bWVcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmlkbGVUaW1lcihcInJlc3VtZVwiKTtcclxuICAgICAgICAgICAgJChcIiNkb2NTdGF0dXNcIilcclxuICAgICAgICAgICAgICAgIC52YWwoZnVuY3Rpb24oaSwgdikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2ICsgXCJSZXN1bWVkIEAgXCIgKyBtb21lbnQoKS5mb3JtYXQoKSArIFwiIFxcblwiO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zY3JvbGxUb3AoJChcIiNkb2NTdGF0dXNcIilbMF0uc2Nyb2xsSGVpZ2h0KTtcclxuICAgICAgICAgICAgJCh0aGlzKS5ibHVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiI2J0RWxhcHNlZFwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJChcIiNkb2NTdGF0dXNcIilcclxuICAgICAgICAgICAgICAgIC52YWwoZnVuY3Rpb24oaSwgdikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2ICsgXCJFbGFwc2VkIChzaW5jZSBiZWNvbWluZyBhY3RpdmUpOiBcIiArICQoZG9jdW1lbnQpLmlkbGVUaW1lcihcImdldEVsYXBzZWRUaW1lXCIpICsgXCIgXFxuXCI7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnNjcm9sbFRvcCgkKFwiI2RvY1N0YXR1c1wiKVswXS5zY3JvbGxIZWlnaHQpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmJsdXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoXCIjYnREZXN0cm95XCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5pZGxlVGltZXIoXCJkZXN0cm95XCIpO1xyXG4gICAgICAgICAgICAkKFwiI2RvY1N0YXR1c1wiKVxyXG4gICAgICAgICAgICAgICAgLnZhbChmdW5jdGlvbihpLCB2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYgKyBcIkRlc3Ryb3llZDogQCBcIiArIG1vbWVudCgpLmZvcm1hdCgpICsgXCIgXFxuXCI7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtc3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtd2FybmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgLnNjcm9sbFRvcCgkKFwiI2RvY1N0YXR1c1wiKVswXS5zY3JvbGxIZWlnaHQpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmJsdXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoXCIjYnRJbml0XCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvLyBmb3IgZGVtbyBwdXJwb3NlcyBzaG93IGluaXQgd2l0aCBqdXN0IG9iamVjdFxyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5pZGxlVGltZXIoe1xyXG4gICAgICAgICAgICAgICAgdGltZW91dDogZG9jVGltZW91dFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChcIiNkb2NTdGF0dXNcIilcclxuICAgICAgICAgICAgICAgIC52YWwoZnVuY3Rpb24oaSwgdikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2ICsgXCJJbml0OiBAIFwiICsgbW9tZW50KCkuZm9ybWF0KCkgKyBcIiBcXG5cIjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc2Nyb2xsVG9wKCQoXCIjZG9jU3RhdHVzXCIpWzBdLnNjcm9sbEhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvL0FwcGx5IGNsYXNzZXMgZm9yIGRlZmF1bHQgc3RhdGVcclxuICAgICAgICAgICAgaWYgKCQoZG9jdW1lbnQpLmlkbGVUaW1lcihcImlzSWRsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNkb2NTdGF0dXNcIilcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbGVydC1zdWNjZXNzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiYWxlcnQtd2FybmluZ1wiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIjZG9jU3RhdHVzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiYWxlcnQtc3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFsZXJ0LXdhcm5pbmdcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCh0aGlzKS5ibHVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9DbGVhciBvbGQgc3RhdHVzZXNcclxuICAgICAgICAkKFwiI2RvY1N0YXR1c1wiKS52YWwoXCJcIik7XHJcblxyXG4gICAgICAgIC8vU3RhcnQgdGltZW91dCwgcGFzc2luZyBubyBvcHRpb25zXHJcbiAgICAgICAgLy9TYW1lIGFzICQuaWRsZVRpbWVyKGRvY1RpbWVvdXQsIGRvY09wdGlvbnMpO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLmlkbGVUaW1lcihkb2NUaW1lb3V0KTtcclxuXHJcbiAgICAgICAgLy9Gb3IgZGVtbyBwdXJwb3Nlcywgc3R5bGUgYmFzZWQgb24gaW5pdGlhbCBzdGF0ZVxyXG4gICAgICAgIGlmICgkKGRvY3VtZW50KS5pZGxlVGltZXIoXCJpc0lkbGVcIikpIHtcclxuICAgICAgICAgICAgJChcIiNkb2NTdGF0dXNcIilcclxuICAgICAgICAgICAgICAgIC52YWwoZnVuY3Rpb24oaSwgdikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2ICsgXCJJbml0aWFsIElkbGUgU3RhdGUgQCBcIiArIG1vbWVudCgpLmZvcm1hdCgpICsgXCIgXFxuXCI7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtc3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiYWxlcnQtd2FybmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgLnNjcm9sbFRvcCgkKFwiI2RvY1N0YXR1c1wiKVswXS5zY3JvbGxIZWlnaHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZG9jU3RhdHVzXCIpXHJcbiAgICAgICAgICAgICAgICAudmFsKGZ1bmN0aW9uKGksIHYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdiArIFwiSW5pdGlhbCBBY3RpdmUgU3RhdGUgQCBcIiArIG1vbWVudCgpLmZvcm1hdCgpICsgXCIgXFxuXCI7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiYWxlcnQtc3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtd2FybmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgLnNjcm9sbFRvcCgkKFwiI2RvY1N0YXR1c1wiKVswXS5zY3JvbGxIZWlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vRm9yIGRlbW8gcHVycG9zZXMsIGRpc3BsYXkgdGhlIGFjdHVhbCB0aW1lb3V0IG9uIHRoZSBwYWdlXHJcbiAgICAgICAgJChcIiNkb2NUaW1lb3V0XCIpLnRleHQoZG9jVGltZW91dCAvIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBfaW5pdERlbW8yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy9EZWZpbmUgdGV4dGFyZWEgc2V0dGluZ3NcclxuICAgICAgICB2YXJcclxuICAgICAgICAgICAgdGFUaW1lb3V0ID0gMzAwMDtcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICBIYW5kbGUgcmFpc2VkIGlkbGUvYWN0aXZlIGV2ZW50c1xyXG4gICAgICAgICovXHJcbiAgICAgICAgJChcIiNlbFN0YXR1c1wiKS5vbihcImlkbGUuaWRsZVRpbWVyXCIsIGZ1bmN0aW9uKGV2ZW50LCBlbGVtLCBvYmopIHtcclxuICAgICAgICAgICAgLy9JZiB5b3UgZG9udCBzdG9wIHByb3BhZ2F0aW9uIGl0IHdpbGwgYnViYmxlIHVwIHRvIGRvY3VtZW50IGV2ZW50IGhhbmRsZXJcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAkKFwiI2VsU3RhdHVzXCIpXHJcbiAgICAgICAgICAgICAgICAudmFsKGZ1bmN0aW9uKGksIHYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdiArIFwiSWRsZSBAIFwiICsgbW9tZW50KCkuZm9ybWF0KCkgKyBcIiBcXG5cIjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbGVydC1zdWNjZXNzXCIpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJhbGVydC13YXJuaW5nXCIpXHJcbiAgICAgICAgICAgICAgICAuc2Nyb2xsVG9wKCQoXCIjZWxTdGF0dXNcIilbMF0uc2Nyb2xsSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChcIiNlbFN0YXR1c1wiKS5vbihcImFjdGl2ZS5pZGxlVGltZXJcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgLy9JZiB5b3UgZG9udCBzdG9wIHByb3BhZ2F0aW9uIGl0IHdpbGwgYnViYmxlIHVwIHRvIGRvY3VtZW50IGV2ZW50IGhhbmRsZXJcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAkKFwiI2VsU3RhdHVzXCIpXHJcbiAgICAgICAgICAgICAgICAudmFsKGZ1bmN0aW9uKGksIHYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdiArIFwiQWN0aXZlIEAgXCIgKyBtb21lbnQoKS5mb3JtYXQoKSArIFwiIFxcblwiO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImFsZXJ0LXN1Y2Nlc3NcIilcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFsZXJ0LXdhcm5pbmdcIilcclxuICAgICAgICAgICAgICAgIC5zY3JvbGxUb3AoJChcIiNlbFN0YXR1c1wiKVswXS5zY3JvbGxIZWlnaHQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgIEhhbmRsZSBidXR0b24gZXZlbnRzXHJcbiAgICAgICAgKi9cclxuICAgICAgICAkKFwiI2J0UmVzZXRcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoXCIjZWxTdGF0dXNcIilcclxuICAgICAgICAgICAgICAgIC5pZGxlVGltZXIoXCJyZXNldFwiKVxyXG4gICAgICAgICAgICAgICAgLnZhbChmdW5jdGlvbihpLCB2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYgKyBcIlJlc2V0IEAgXCIgKyBtb21lbnQoKS5mb3JtYXQoKSArIFwiIFxcblwiO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zY3JvbGxUb3AoJChcIiNlbFN0YXR1c1wiKVswXS5zY3JvbGxIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy9BcHBseSBjbGFzc2VzIGZvciBkZWZhdWx0IHN0YXRlXHJcbiAgICAgICAgICAgIGlmICgkKFwiI2VsU3RhdHVzXCIpLmlkbGVUaW1lcihcImlzSWRsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNlbFN0YXR1c1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFsZXJ0LXN1Y2Nlc3NcIilcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJhbGVydC13YXJuaW5nXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIiNlbFN0YXR1c1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImFsZXJ0LXN1Y2Nlc3NcIilcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbGVydC13YXJuaW5nXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQodGhpcykuYmx1cigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChcIiNidFJlbWFpbmluZ1wiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJChcIiNlbFN0YXR1c1wiKVxyXG4gICAgICAgICAgICAgICAgLnZhbChmdW5jdGlvbihpLCB2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYgKyBcIlJlbWFpbmluZzogXCIgKyAkKFwiI2VsU3RhdHVzXCIpLmlkbGVUaW1lcihcImdldFJlbWFpbmluZ1RpbWVcIikgKyBcIiBcXG5cIjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc2Nyb2xsVG9wKCQoXCIjZWxTdGF0dXNcIilbMF0uc2Nyb2xsSGVpZ2h0KTtcclxuICAgICAgICAgICAgJCh0aGlzKS5ibHVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiI2J0TGFzdEFjdGl2ZVwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJChcIiNlbFN0YXR1c1wiKVxyXG4gICAgICAgICAgICAgICAgLnZhbChmdW5jdGlvbihpLCB2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYgKyBcIkxhc3RBY3RpdmU6IFwiICsgJChcIiNlbFN0YXR1c1wiKS5pZGxlVGltZXIoXCJnZXRMYXN0QWN0aXZlVGltZVwiKSArIFwiIFxcblwiO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zY3JvbGxUb3AoJChcIiNlbFN0YXR1c1wiKVswXS5zY3JvbGxIZWlnaHQpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmJsdXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoXCIjYnRTdGF0ZVwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJChcIiNlbFN0YXR1c1wiKVxyXG4gICAgICAgICAgICAgICAgLnZhbChmdW5jdGlvbihpLCB2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYgKyBcIlN0YXRlOiBcIiArICgkKFwiI2VsU3RhdHVzXCIpLmlkbGVUaW1lcihcImlzSWRsZVwiKSA/IFwiaWRsZVwiIDogXCJhY3RpdmVcIikgKyBcIiBcXG5cIjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc2Nyb2xsVG9wKCQoXCIjZWxTdGF0dXNcIilbMF0uc2Nyb2xsSGVpZ2h0KTtcclxuICAgICAgICAgICAgJCh0aGlzKS5ibHVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9DbGVhciB2YWx1ZSBpZiB0aGVyZSB3YXMgb25lIGNhY2hlZCAmIHN0YXJ0IHRpbWVcclxuICAgICAgICAkKFwiI2VsU3RhdHVzXCIpLnZhbChcIlwiKS5pZGxlVGltZXIodGFUaW1lb3V0KTtcclxuXHJcbiAgICAgICAgLy9Gb3IgZGVtbyBwdXJwb3Nlcywgc2hvdyBpbml0aWFsIHN0YXRlXHJcbiAgICAgICAgaWYgKCQoXCIjZWxTdGF0dXNcIikuaWRsZVRpbWVyKFwiaXNJZGxlXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCIjZWxTdGF0dXNcIilcclxuICAgICAgICAgICAgICAgIC52YWwoZnVuY3Rpb24oaSwgdikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2ICsgXCJJbml0aWFsIElkbGUgQCBcIiArIG1vbWVudCgpLmZvcm1hdCgpICsgXCIgXFxuXCI7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtc3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiYWxlcnQtd2FybmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgLnNjcm9sbFRvcCgkKFwiI2VsU3RhdHVzXCIpWzBdLnNjcm9sbEhlaWdodCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNlbFN0YXR1c1wiKVxyXG4gICAgICAgICAgICAgICAgLnZhbChmdW5jdGlvbihpLCB2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYgKyBcIkluaXRpYWwgQWN0aXZlIEAgXCIgKyBtb21lbnQoKS5mb3JtYXQoKSArIFwiIFxcblwiO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImFsZXJ0LXN1Y2Nlc3NcIilcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFsZXJ0LXdhcm5pbmdcIilcclxuICAgICAgICAgICAgICAgIC5zY3JvbGxUb3AoJChcIiNlbFN0YXR1c1wiKVswXS5zY3JvbGxIZWlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRGlzcGxheSB0aGUgYWN0dWFsIHRpbWVvdXQgb24gdGhlIHBhZ2VcclxuICAgICAgICAkKFwiI2VsVGltZW91dFwiKS50ZXh0KHRhVGltZW91dCAvIDEwMDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vbWFpbiBmdW5jdGlvbiB0byBpbml0aWF0ZSB0aGUgbW9kdWxlXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIF9pbml0RGVtbzEoKTtcclxuICAgICAgICAgICAgX2luaXREZW1vMigpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICBLVElkbGVUaW1lckRlbW8uaW5pdCgpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/metronic/js/pages/features/miscellaneous/idle-timer.js\n");

/***/ }),

/***/ 150:
/*!********************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/features/miscellaneous/idle-timer.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WorkDir\Projects\metronic-laravel\resources\metronic\js\pages\features\miscellaneous\idle-timer.js */"./resources/metronic/js/pages/features/miscellaneous/idle-timer.js");


/***/ })

/******/ });