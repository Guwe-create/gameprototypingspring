

var canvas;
var context;
var timer;

var mainTimer = setInterval(animate, 1000/60);
var ball;

	
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	
	ball = new GameObject();

function animate()
{

	context.clearRect(0,0,canvas.width, canvas.height);	
	
	ball.x = ball.x + 1;
	
	ball.drawCircle();
}

