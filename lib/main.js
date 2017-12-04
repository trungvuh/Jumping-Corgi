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
