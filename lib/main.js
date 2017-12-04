document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("myCanvas");
  canvasEl.width = 1000;
  canvasEl.height = 1000;

  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "teal";
  ctx.fillRect(200, 0, 480, 640);

  ctx.beginPath();
  ctx.arc(300, 300, 20, 0, 2*Math.PI, true);
  ctx.strokeStyle = "red";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = "yellow";
  ctx.fill();
});
