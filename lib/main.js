document.addEventListener("DOMContentLoaded", function(){
  var canvas = document.getElementById("myCanvas");
  canvas.width = 480;
  canvas.height = 640;

  var ctx = canvas.getContext("2d");
  var radius = 20;
  var ballCenterX = (canvas.width - radius);
  var ballCenterY = (canvas.height - radius);

  function drawBall() {
    ctx.beginPath();
    ctx.arc(ballCenterX, ballCenterY, radius, 0, 2*Math.PI, true);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
  }


  document.addEventListener("mousemove", mouseMoveHandler, false);

  function mouseMoveHandler(e) {
      var relativeX = e.clientX - 10;
      if(relativeX > radius && relativeX < canvas.width - 10) {
          ballCenterX = relativeX;
      }
      var relativeY = e.clientY - 10;
      if(relativeY > radius && relativeY < canvas.height - 10) {
          ballCenterY = relativeY;
      }
  }

  function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall();
  }

  setInterval(draw, 10);

});
