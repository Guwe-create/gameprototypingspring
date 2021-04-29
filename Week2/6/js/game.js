//Before main game

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
 player1.y = 50;
 player1.h = 100;
 player1.w = 50;



 ball = new GameObject();
 ball.x = 500;

//Main Game

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



if(ball.hitTestObject(player1))
	{
		speed = 1;
	}


if(ball.x == 30)
{
	ball.x = 500;
}


//Middle of paddle
if(ball.y >= player1.y + 2)
{
	if(ball.hitTestObject(player1))
	{
		up = 1;
	}
}


if(ball.y <= player1.y - 2)
{
	if(ball.hitTestObject(player1))
	{
		up = 2;
	}
}

if(ball.y == player1.y + 2)
{
	if(ball.hitTestObject(player1))
	{
		up = 0;
	}
}

if(ball.y == player1.y + 1)
{
	if(ball.hitTestObject(player1))
	{
		up = 0;
	}
}
if(ball.y == player1.y - 1)
{
	if(ball.hitTestObject(player1))
	{
		up = 0;
	}
}
if(ball.y == player1.y)
{
	if(ball.hitTestObject(player1))
	{
		up = 0;
	}
}
if(ball.y == player1.y - 2)
{
	if(ball.hitTestObject(player1))
	{
		up = 0;
	}
}





	if(player1.y == 15)
	{
		player1.y = 15;
	}
	if(player1.y == 10)
	{
		player1.y = 15;
	}
	if(player1.y == 5)
	{
		player1.y = 15;
	}

	if(player1.y == 770)
	{
		player1.y = 770;
	}
	if(player1.y == 775)
	{
		player1.y = 770;
	}
	if(player1.y == 785)
	{
		player1.y = 770;
	}

// Ball statements
	if (up == 0)
	{
		ball.y = ball.y + 0;
	}
	if (up == 1)
	{
		ball.y = ball.y + 2;
	}
	if (ball.y == 760)
	{
		up = 2;
		ball.color = "green";
	}
	if (ball.y == 762)
	{
		up = 2;
		ball.color = "green";
	}
	if (ball.y == 764)
	{
		up = 2;
		ball.color = "green";
	}


	if (speed == 1)
	{
		ball.x = ball.x + 2;
	}
	if (up == 2)
	{
		ball.y = ball.y - 2;
	}
	if (ball.y == 30)
	{
		up = 1;
		ball.color = "blue";
	}
	if (ball.y == 32)
	{
		up = 1;
		ball.color = "blue";
	}
	if (ball.y == 34)
	{
		up = 1;
		ball.color = "blue";
	}


	if (ball.x == 980)
	{
		speed = 2;
		ball.color = "yellow";
		
	}
	if (ball.x == 982)
	{
		speed = 2;
		ball.color = "yellow";
		
	}
	if (ball.x == 984)
	{
		speed = 2;
		ball.color = "yellow";
		
	}


	if (speed == 2)
	{
		ball.x = ball.x - 2;
	}
	if (ball.x == 30)
	{
		speed = 1;
		ball.color = "red";
		
	}

		
	
	ball.drawCircle();
	player1.drawRect();
}

