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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function(){
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 480;
  canvas.height = 640;
  var fps = 32;

  var corgiWidth = 32;
  var corgi1X = (100 - corgiWidth);
  var corgi1Y = (100 - corgiWidth);
  var corgi2X = (canvas.width - corgiWidth);
  var corgi2Y = (canvas.height - corgiWidth);
  var activeCorgi = 1;
  var dy = -5;

  function drawCorgi(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  }


  document.addEventListener("mousemove", mouseMoveHandler1, false);
  document.addEventListener("click", mouseClickHandler, false);

  function mouseMoveHandler1(e) {
    var relativeX = e.clientX - corgiWidth;
    if(relativeX > 0 && relativeX < canvas.width/2 - corgiWidth) {
        corgi1X = relativeX;
    }
    var relativeY = e.clientY - corgiWidth;
    if(relativeY > corgiWidth && relativeY < canvas.height - corgiWidth) {
        corgi1Y = relativeY;
    }
    activeCorgi = 2;
  }

  function mouseMoveHandler2(e) {
    var relativeX = e.clientX - corgiWidth;
    if(relativeX > (canvas.width/2) && relativeX < canvas.width - corgiWidth) {
      corgi2X = relativeX;
    }
    var relativeY = e.clientY - 10;
    if(relativeY > corgiWidth && relativeY < canvas.height - corgiWidth) {
      corgi2Y = relativeY;
    }
    activeCorgi = 1;
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var Corgi1 = drawCorgi(corgi1X, corgi1Y, corgiWidth, corgiWidth, "red");
    var Corgi2 = drawCorgi(corgi2X, corgi2Y, corgiWidth, corgiWidth, "blue");
  }

  // function ballDrop() {
  //   while (ballCenterY < canvas.height - radius) {
  //     ballCenterY -= dy;
  //   }
  // }

  function mouseClickHandler(e, num) {
    if (activeCorgi === 2) {
      document.removeEventListener("mousemove", mouseMoveHandler1);
      document.addEventListener("mousemove", mouseMoveHandler2);
    }
    else {
      document.removeEventListener("mousemove", mouseMoveHandler2);
      document.addEventListener("mousemove", mouseMoveHandler1);
    }
    // setInterval(ballDrop, 1000);
  }

  setInterval(draw, 1000/fps);

});


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map