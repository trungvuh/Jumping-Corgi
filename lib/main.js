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
