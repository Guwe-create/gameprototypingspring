

var canvas;
var context;
var timer;

var mainTimer = setInterval(animate, 1000/60);
var ball;
var speed;
speed = 1;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	
	ball = new GameObject();
	ball.x = 20;
	

function animate()
{
	
	
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	
	if (speed == 1)
	{
		ball.x = ball.x + 1;
	}
	if (ball.x == 980)
	{
		speed = 2;
	}
	if (speed == 2)
	{
		ball.x = ball.x - 1;
	}
	if (ball.x == 15)
	{
		speed = 1;
	}

		
	
	ball.drawCircle();
}

