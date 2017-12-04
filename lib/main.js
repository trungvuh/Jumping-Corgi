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
  var dy1 = 0;
  var dy2 = 0;

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
    var relativeX = e.clientX - corgiWidth;
    if(relativeX > 0 && relativeX < canvas.width/2 - corgiWidth/2) {
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
    var relativeY = e.clientY - corgiWidth;
    if(relativeY > corgiWidth && relativeY < canvas.height - corgiWidth) {
      corgi2Y = relativeY;
    }
    activeCorgi = 1;
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
      dy1 = 5;
      dy2 = 0;
    }
    else {
      document.removeEventListener("mousemove", mouseMoveHandler2);
      document.addEventListener("mousemove", mouseMoveHandler1);
      dy1 = 0;
      dy2= 5;
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var Corgi1 = drawCorgi(corgi1X, corgi1Y, corgiWidth, corgiWidth, "red");
    var Corgi2 = drawCorgi(corgi2X, corgi2Y, corgiWidth, corgiWidth, "blue");
    corgi1Y += dy1;
    corgi2Y += dy2;
  }

  setInterval(draw, 1000/32);

});
