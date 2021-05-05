//Before main game

var canvas;
var context;
var timer;

var mainTimer = setInterval(animate, 1000/60);
var player1; 
var ball;
var player2;
var speed;

speed = 1;

var up;
up = 1;
	
	canvas = document.getElementById("canvas");
	context = canvas.getContext('2d');

 player1 = new GameObject();
 player2 = new GameObject();


 player1.x = 70;
 player1.y = -400;
 player1.h = 100;
 player1.w = 50;

 player2.x = 1000;
 player2.y = -400;
 player2.h = 100;
 player2.w = 50;


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
	if(ups)
	{
		player2.y = player2.y - 5;
	}
	if(down)
	{
		player2.y = player2.y + 5;
	}

	if (player2.y <= 10)
	{
		player2.y = 10;
	}
	if (player1.y <= 10)
	{
		player1.y = 10;
	}


if(ball.hitTestObject(player1))
	{
		speed = 1;

	}
if(ball.hitTestObject(player2))
	{
		speed = 2;

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
		player2.y = player2.y;
	}
}
if(ball.y >= player2.y + 2)
{
	if(ball.hitTestObject(player2))
	{
		up = 1;
		player2.y = player2.y;
	}
}


if(ball.y <= player1.y - 2)
{
	if(ball.hitTestObject(player1))
	{
		up = 2;
		player2.y = player2.y;
	}
}

if(ball.y <= player2.y + 2)
{
	if(ball.hitTestObject(player2))
	{
		up = 2;
		player2.y = player2.y;
	}
}


if(ball.y == player1.y + 2)
{
	if(ball.hitTestObject(player1))
	{
		up = 0;
		player2.y = player2.y;
	}
}

if(ball.y == player2.y + 2)
{
	if(ball.hitTestObject(player2))
	{
		up = 0;
		player2.y = player2.y;
	}
}

if(ball.y == player1.y + 1)
{
	if(ball.hitTestObject(player1))
	{
		up = 0;
		player2.y = player2.y;
	}
}

if(ball.y == player2.y + 1)
{
	if(ball.hitTestObject(player2))
	{
		up = 0;
		player2.y = player2.y;
	}
}

if(ball.y == player1.y - 1)
{
	if(ball.hitTestObject(player1))
	{
		up = 0;
		player2.y = player2.y;
	}
}
if(ball.y == player2.y - 1)
{
	if(ball.hitTestObject(player2))
	{
		up = 0;
		player2.y = player2.y;
	}
}

if(ball.y == player1.y)
{
	if(ball.hitTestObject(player1))
	{
		up = 0;
		player2.y = player2.y;
	}
}

if(ball.y == player2.y)
{
	if(ball.hitTestObject(player2))
	{
		up = 0;
		player2.y = player2.y;
	}
}
if(ball.y == player1.y - 2)
{
	if(ball.hitTestObject(player1))
	{
		up = 0;
		player2.y = player2.y;
	}
}
if(ball.y == player2.y - 2)
{
	if(ball.hitTestObject(player2))
	{
		up = 0;
		player2.y = player2.y;
	}
}



//Collision

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


	if(player2.y == 15)
	{
		player2.y = 15;
	}
	if(player2.y == 10)
	{
		player2.y = 15;
	}
	if(player2.y == 5)
	{
		player2.y = 15;
	}

	if(player2.y == 770)
	{
		player2.y = 770;
	}
	if(player2.y == 775)
	{
		player2.y = 770;
	}
	if(player2.y == 785)
	{
		player2.y = 770;
	}

// Ball statements
	if (up == 0)
	{
		ball.y = ball.y + 0;
	}
	if (up == 1)
	{
		ball.y = ball.y + 4;
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
		ball.x = ball.x + 4;
	}
	if (up == 2)
	{
		ball.y = ball.y - 4;
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
		ball.x = 510;
		ball.color = "yellow";
		
	}
	if (ball.x == 982)
	{
		ball.x = 510;
		ball.color = "yellow";
		
	}
	if (ball.x == 984)
	{
		ball.x = 510;
		ball.color = "yellow";
		
	}


	if (speed == 2)
	{
		ball.x = ball.x - 4;
	}
	if (ball.x == 30)
	{
		speed = 1;
		ball.color = "red";
		
	}

		
	
	ball.drawCircle();
	player1.drawRect();
	player2.drawRect();
	s.drawRect();
}

