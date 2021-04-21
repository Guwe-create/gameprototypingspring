

var canvas;
var context;
var timer;

var mainTimer = setInterval(animate, 1000/60);
var player1; 
var ball;
var speed;
speed = 1;

var up;
up = 1;
	
	canvas = document.getElementById("canvas");
	context = canvas.getContext('2d');

 player1 = new GameObject();

 player1.x = 50;
 player1.y = 10;

 ball = new GameObject();
 ball.x = 20;

function animate()
{

	context.clearRect(0,0,canvas.width, canvas.height);	
	
	if(w)
	{
		player1.y = player1.y - 5;
	}
	if(s)
	{
		player1.y = player1.y + 5;
	}

	if(player1.y <= 10)
	{
		player1.y = 10;
	}
	if(player1.y <= 5)
	{
		player1.y = 10;
	}
	if(player1.y <= 0)
	{
		player1.y = 10;
	}

	if(player1.y == 450)
	{
		player1.y = 450;
	}
	if(player1.y == 455)
	{
		player1.y = 450;
	}
	if(player1.y == 460)
	{
		player1.y = 450;
	}

	
	
	if (up == 1)
	{
		ball.y = ball.y + 1;
	}
	if (ball.y == 760)
	{
		up = 2;
		ball.color = "green";
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
		ball.color = "blue";
	}
	if (ball.x == 980)
	{
		speed = 2;
		ball.color = "yellow";
		
	}
	if (speed == 2)
	{
		ball.x = ball.x - 1;
	}
	if (ball.x == 30)
	{
		speed = 1;
		ball.color = "red";
		
	}

		
	
	ball.drawCircle();
	player1.drawRect();
}

