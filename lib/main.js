document.addEventListener("DOMContentLoaded", function(){
  var canvas = document.getElementById("myCanvas");
  canvas.width = 480;
  canvas.height = 640;

  var ctx = canvas.getContext("2d");
  var ballCenterX = (canvas.width - 20);
  var ballCenterY = (canvas.height - 20);

  function drawBall() {
    ctx.beginPath();
    ctx.arc(ballCenterX, ballCenterY, 20, 0, 2*Math.PI, true);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
  }


  document.addEventListener("mousemove", mouseMoveHandler, false);

  function mouseMoveHandler(e) {
      var relativeX = e.clientX;
      if(relativeX > 0 && relativeX < canvas.width) {
          ballCenterX = relativeX - 10;
      }
      var relativeY = e.clientY;
      if(relativeY > 0 && relativeY < canvas.height) {
          ballCenterY = relativeY - 10;
      }
  }

  function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall();
  }

  setInterval(draw, 10);

});
