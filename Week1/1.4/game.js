

var canvas;
var context;
var timer;

var mainTimer = setInterval(animate, 1000/60);
var ball;
var speed;
speed = 1;

var up;
up = 1;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	
	ball = new GameObject();
	ball.x = 20;
	

function animate()
{
	
	
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	if (up == 1)
	{
		ball.y = ball.y + 1;
	}
	if (ball.y == 760)
	{
		up = 2;
	}
	if (speed == 1)
	{
		ball.x = ball.x + 1;
	}
	if (up == 2)
	{
		ball.y = ball.y - 1;
	}
	if (ball.y == 30)
	{
		up = 1;
	}
	if (ball.x == 980)
	{
		speed = 2;
	}
	if (speed == 2)
	{
		ball.x = ball.x - 1;
	}
	if (ball.x == 30)
	{
		speed = 1;
	}

		
	
	ball.drawCircle();
}

