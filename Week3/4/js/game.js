//Before main game

var canvas;
var context;
var timer;

var mainTimer = setInterval(animate, 1000/60);
var player1; 
var ball;
var tether;
var gravity = 1;
var score = 0;


var speed;
speed = 10;

var up;
up = 1;
	
	canvas = document.getElementById("canvas");
	context = canvas.getContext('2d');

 player1 = new GameObject(500, 570, 250, 40, "cyan");
 player1.vx = 1;

 ball = new GameObject();
 ball.x = 500;
 ball.color = "magenta";
 ball.vx = 0;
 ball.vy = 5;
 
 tether = new GameObject(player1.x, ball.x, 1, 100, "black")
//Main Game

function animate()
{

	context.clearRect(0,0,canvas.width, canvas.height);	
	
	context.font = "16px Arial";
	context.fillText(score, 80, 25);


	if(a)
	{
		player1.x = player1.x - 10;
		tether.x = tether.x - 10;
		
	}
	
	if(d)
	{
		player1.x = player1.x + 10;
		tether.x = tether.x + 10;
	}


	if(player1.x >= 890)
	{
		player1.x = 890;
	}
	if(player1.x <= 90)
	{
		player1.x = 90;
	}


if(ball.hitTestObject(player1))
	{
		ball.y = player1.y - player1.height/2 - ball.height;
		ball.vy = -25;
		score = score + 1;
		if(ball.x > player1.x + player1.width/3){
			ball.vx =  10*2;
		}
		else if(ball.x < player1.x - player1.width/3){
			ball.vx =  -10*2;
		}
		else if(ball.x > player1.x + player1.width/4){
			ball.vx = 10;
		}
		else if(ball.x < player1.x - player1.width/4){
			ball.vx = -10;
		}
		else{
			ball.vx = 0;
		}
	}





//Gravity
	ball.vy += gravity;
	
// Ball statements 


//Draw Line
context.beginPath();
context.moveTo(player1.x, player1.y);
context.lineTo(ball.x, ball.y);
context.stroke();


//Bottom
if (ball.y > canvas.height - ball.width/2)
{
	ball.y = canvas.height - ball.width/2;
	ball.vy = -ball.vy* .67;
	score = 0;
}
//Top
if (ball.y < ball.width/2)
{
	ball.y = ball.width/2;
	ball.vy = ball.vy;
}
//Right
if (ball.x > canvas.width - ball.width/2)
{
	ball.x = canvas.width - ball.width/2;
	ball.vx = -ball.vx;
}
//Left
if (ball.x < ball.width/2)
{
	ball.x = ball.width/2;
	ball.vx = 10;
}


	ball.move()	
	
	
	ball.drawCircle();
	player1.drawRect();
}

