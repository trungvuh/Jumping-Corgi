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

  var radius = 20;
  var ballCenterX = (canvas.width - radius);
  var ballCenterY = (canvas.height - radius);
  var dy = -5;

  function drawBall() {
    ctx.beginPath();
    ctx.arc(ballCenterX, ballCenterY, radius, 0, 2*Math.PI, true);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
  }

  document.addEventListener("mousemove", mouseMoveHandler, false);
  document.addEventListener("click", mouseClickHandler, false);

  function mouseMoveHandler(e) {
      var relativeX = e.clientX - 10;
      if(relativeX > radius && relativeX < canvas.width - radius) {
          ballCenterX = relativeX;
      }
      var relativeY = e.clientY - 10;
      if(relativeY > radius && relativeY < canvas.height - radius) {
          ballCenterY = relativeY;
      }
  }

  function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall();
  }

  function ballDrop() {
    while (ballCenterY < canvas.height - radius) {
      ballCenterY -= dy;
    }
  }

  function mouseClickHandler(e) {
    document.removeEventListener("mousemove", mouseMoveHandler);
    setInterval(ballDrop, 1000);
  }

  setInterval(draw, 10);

});


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map