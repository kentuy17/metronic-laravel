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
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/crud/forms/editors/quill.js":
/*!*****************************************************************!*\
  !*** ./resources/metronic/js/pages/crud/forms/editors/quill.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Class definition\nvar KTQuilDemos = function () {\n  // Private functions\n  var demo1 = function demo1() {\n    var quill = new Quill('#kt_quil_1', {\n      modules: {\n        toolbar: [[{\n          header: [1, 2, false]\n        }], ['bold', 'italic', 'underline'], ['image', 'code-block']]\n      },\n      placeholder: 'Type your text here...',\n      theme: 'snow' // or 'bubble'\n    });\n  };\n\n  var demo2 = function demo2() {\n    var Delta = Quill[\"import\"]('delta');\n    var quill = new Quill('#kt_quil_2', {\n      modules: {\n        toolbar: true\n      },\n      placeholder: 'Type your text here...',\n      theme: 'snow'\n    });\n\n    // Store accumulated changes\n    var change = new Delta();\n    quill.on('text-change', function (delta) {\n      change = change.compose(delta);\n    });\n\n    // Save periodically\n    setInterval(function () {\n      if (change.length() > 0) {\n        console.log('Saving changes', change);\n        /*\r\n        Send partial changes\r\n        $.post('/your-endpoint', {\r\n          partial: JSON.stringify(change)\r\n        });\r\n          Send entire document\r\n        $.post('/your-endpoint', {\r\n          doc: JSON.stringify(quill.getContents())\r\n        });\r\n        */\n        change = new Delta();\n      }\n    }, 5 * 1000);\n\n    // Check for unsaved data\n    window.onbeforeunload = function () {\n      if (change.length() > 0) {\n        return 'There are unsaved changes. Are you sure you want to leave?';\n      }\n    };\n  };\n  return {\n    // public functions\n    init: function init() {\n      demo1();\n      demo2();\n    }\n  };\n}();\njQuery(document).ready(function () {\n  KTQuilDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWV0cm9uaWMvanMvcGFnZXMvY3J1ZC9mb3Jtcy9lZGl0b3JzL3F1aWxsLmpzPzE5NTEiXSwibmFtZXMiOlsiS1RRdWlsRGVtb3MiLCJkZW1vMSIsInF1aWxsIiwiUXVpbGwiLCJtb2R1bGVzIiwidG9vbGJhciIsImhlYWRlciIsInBsYWNlaG9sZGVyIiwidGhlbWUiLCJkZW1vMiIsIkRlbHRhIiwiY2hhbmdlIiwib24iLCJkZWx0YSIsImNvbXBvc2UiLCJzZXRJbnRlcnZhbCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJvbmJlZm9yZXVubG9hZCIsImluaXQiLCJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUlBLFdBQVcsR0FBRyxZQUFXO0VBRXpCO0VBQ0EsSUFBSUMsS0FBSyxHQUFHLFNBQVJBLEtBQUtBLENBQUEsRUFBYztJQUNuQixJQUFJQyxLQUFLLEdBQUcsSUFBSUMsS0FBSyxDQUFDLFlBQVksRUFBRTtNQUNoQ0MsT0FBTyxFQUFFO1FBQ0xDLE9BQU8sRUFBRSxDQUNMLENBQUM7VUFDR0MsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLO1FBQ3hCLENBQUMsQ0FBQyxFQUNGLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsRUFDL0IsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDO01BRS9CLENBQUM7TUFDREMsV0FBVyxFQUFFLHdCQUF3QjtNQUNyQ0MsS0FBSyxFQUFFLE1BQU0sQ0FBQztJQUNsQixDQUFDLENBQUM7RUFDTixDQUFDOztFQUVELElBQUlDLEtBQUssR0FBRyxTQUFSQSxLQUFLQSxDQUFBLEVBQWM7SUFDbkIsSUFBSUMsS0FBSyxHQUFHUCxLQUFLLFVBQU8sQ0FBQyxPQUFPLENBQUM7SUFDakMsSUFBSUQsS0FBSyxHQUFHLElBQUlDLEtBQUssQ0FBQyxZQUFZLEVBQUU7TUFDaENDLE9BQU8sRUFBRTtRQUNMQyxPQUFPLEVBQUU7TUFDYixDQUFDO01BQ0RFLFdBQVcsRUFBRSx3QkFBd0I7TUFDckNDLEtBQUssRUFBRTtJQUNYLENBQUMsQ0FBQzs7SUFFRjtJQUNBLElBQUlHLE1BQU0sR0FBRyxJQUFJRCxLQUFLLEVBQUU7SUFDeEJSLEtBQUssQ0FBQ1UsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFTQyxLQUFLLEVBQUU7TUFDcENGLE1BQU0sR0FBR0EsTUFBTSxDQUFDRyxPQUFPLENBQUNELEtBQUssQ0FBQztJQUNsQyxDQUFDLENBQUM7O0lBRUY7SUFDQUUsV0FBVyxDQUFDLFlBQVc7TUFDbkIsSUFBSUosTUFBTSxDQUFDSyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUU7UUFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixFQUFFUCxNQUFNLENBQUM7UUFDckM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO1FBRWdCQSxNQUFNLEdBQUcsSUFBSUQsS0FBSyxFQUFFO01BQ3hCO0lBQ0osQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7O0lBRVo7SUFDQVMsTUFBTSxDQUFDQyxjQUFjLEdBQUcsWUFBVztNQUMvQixJQUFJVCxNQUFNLENBQUNLLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRTtRQUNyQixPQUFPLDREQUE0RDtNQUN2RTtJQUNKLENBQUM7RUFDTCxDQUFDO0VBRUQsT0FBTztJQUNIO0lBQ0FLLElBQUksRUFBRSxTQUFBQSxLQUFBLEVBQVc7TUFDYnBCLEtBQUssRUFBRTtNQUNQUSxLQUFLLEVBQUU7SUFDWDtFQUNKLENBQUM7QUFDTCxDQUFDLEVBQUU7QUFFSGEsTUFBTSxDQUFDQyxRQUFRLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFlBQVc7RUFDOUJ4QixXQUFXLENBQUNxQixJQUFJLEVBQUU7QUFDdEIsQ0FBQyxDQUFDIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2NydWQvZm9ybXMvZWRpdG9ycy9xdWlsbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtUUXVpbERlbW9zID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBkZW1vMSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBxdWlsbCA9IG5ldyBRdWlsbCgnI2t0X3F1aWxfMScsIHtcclxuICAgICAgICAgICAgbW9kdWxlczoge1xyXG4gICAgICAgICAgICAgICAgdG9vbGJhcjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjogWzEsIDIsIGZhbHNlXVxyXG4gICAgICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgWydpbWFnZScsICdjb2RlLWJsb2NrJ11cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdUeXBlIHlvdXIgdGV4dCBoZXJlLi4uJyxcclxuICAgICAgICAgICAgdGhlbWU6ICdzbm93JyAvLyBvciAnYnViYmxlJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkZW1vMiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBEZWx0YSA9IFF1aWxsLmltcG9ydCgnZGVsdGEnKTtcclxuICAgICAgICB2YXIgcXVpbGwgPSBuZXcgUXVpbGwoJyNrdF9xdWlsXzInLCB7XHJcbiAgICAgICAgICAgIG1vZHVsZXM6IHtcclxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdUeXBlIHlvdXIgdGV4dCBoZXJlLi4uJyxcclxuICAgICAgICAgICAgdGhlbWU6ICdzbm93J1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTdG9yZSBhY2N1bXVsYXRlZCBjaGFuZ2VzXHJcbiAgICAgICAgdmFyIGNoYW5nZSA9IG5ldyBEZWx0YSgpO1xyXG4gICAgICAgIHF1aWxsLm9uKCd0ZXh0LWNoYW5nZScsIGZ1bmN0aW9uKGRlbHRhKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZSA9IGNoYW5nZS5jb21wb3NlKGRlbHRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU2F2ZSBwZXJpb2RpY2FsbHlcclxuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKGNoYW5nZS5sZW5ndGgoKSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTYXZpbmcgY2hhbmdlcycsIGNoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgU2VuZCBwYXJ0aWFsIGNoYW5nZXNcclxuICAgICAgICAgICAgICAgICQucG9zdCgnL3lvdXItZW5kcG9pbnQnLCB7XHJcbiAgICAgICAgICAgICAgICAgIHBhcnRpYWw6IEpTT04uc3RyaW5naWZ5KGNoYW5nZSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIFNlbmQgZW50aXJlIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAkLnBvc3QoJy95b3VyLWVuZHBvaW50Jywge1xyXG4gICAgICAgICAgICAgICAgICBkb2M6IEpTT04uc3RyaW5naWZ5KHF1aWxsLmdldENvbnRlbnRzKCkpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2UgPSBuZXcgRGVsdGEoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDUgKiAxMDAwKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgZm9yIHVuc2F2ZWQgZGF0YVxyXG4gICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoY2hhbmdlLmxlbmd0aCgpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdUaGVyZSBhcmUgdW5zYXZlZCBjaGFuZ2VzLiBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbGVhdmU/JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIHB1YmxpYyBmdW5jdGlvbnNcclxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZGVtbzEoKTtcclxuICAgICAgICAgICAgZGVtbzIoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgS1RRdWlsRGVtb3MuaW5pdCgpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/metronic/js/pages/crud/forms/editors/quill.js\n");

/***/ }),

/***/ 55:
/*!***********************************************************************!*\
  !*** multi ./resources/metronic/js/pages/crud/forms/editors/quill.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WorkDir\Projects\metronic-laravel\resources\metronic\js\pages\crud\forms\editors\quill.js */"./resources/metronic/js/pages/crud/forms/editors/quill.js");


/***/ })

/******/ });