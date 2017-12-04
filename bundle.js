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

  var shibaWidth = 32;
  var shiba1X = (100 - shibaWidth);
  var shiba1Y = (100 - shibaWidth);
  var shiba2X = (canvas.width - 100);
  var shiba2Y = (canvas.height - 100);
  var nextCorgi = 1; //start out with Corgi #1
  var dy1 = 0;
  var dy2 = 0;
  var vel = 5;

  function drawCorgi(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  }
  //
  // var img1 = new Image();
  // var img2 = new Image();
  // img1.src = '../assets/Corgi_test_right';
  // img2.src = '../assets/Corgi_test_left';


  document.addEventListener("mousemove", mouseMoveHandler1, false);
  document.addEventListener("click", mouseClickHandler, false);

  function mouseMoveHandler1(e) {
    var relativeX = e.clientX - shibaWidth;
    if(relativeX > 0 && relativeX < canvas.width/2 - shibaWidth/2) {
      shiba1X = relativeX;
    }
    var relativeY = e.clientY - shibaWidth;
    if(relativeY > shibaWidth && relativeY < canvas.height - shibaWidth) {
      shiba1Y = relativeY;
    }
    nextCorgi = 2; //setting up next Corgi
  }

  function mouseMoveHandler2(e) {
    //setting the cursot pointer to be the middle point of Corgi width
    var relativeX = e.clientX - shibaWidth;
    //only effective when the mouse is within the canvas area
    if(relativeX > (canvas.width/2) && relativeX < canvas.width - shibaWidth) {
      shiba2X = relativeX;
    }

    //setting the cursot pointer to be the middle point of Corgi height
    var relativeY = e.clientY - shibaWidth;
    if(relativeY > shibaWidth && relativeY < canvas.height - shibaWidth) {
      shiba2Y = relativeY;
    }
    nextCorgi = 1;
  }

  function mouseClickHandler(e) {
    if (nextCorgi === 2) {
      document.removeEventListener("mousemove", mouseMoveHandler1);
      document.addEventListener("mousemove", mouseMoveHandler2);

      dy1 = vel;
      dy2 = 0;
    }
    else {
      document.removeEventListener("mousemove", mouseMoveHandler2);
      document.addEventListener("mousemove", mouseMoveHandler1);
      dy1 = 0;
      dy2= vel;
    }
  }

  function bound() {

  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var Corgi1 = drawCorgi(shiba1X, shiba1Y, shibaWidth, shibaWidth, "red");
    var Corgi2 = drawCorgi(shiba2X, shiba2Y, shibaWidth, shibaWidth, "blue");

    if (shiba1Y < (canvas.height - shibaWidth)) {
      shiba1Y += dy1;
    }
    if (shiba2Y < (canvas.height - shibaWidth)) {
      shiba2Y += dy2;
    }
  }

  setInterval(draw, 1000/32);

});


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map