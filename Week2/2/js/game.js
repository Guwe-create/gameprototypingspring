

var canvas;
var context;
var timer;

var mainTimer = setInterval(animate, 1000/60);
var player1; 

	
	canvas = document.getElementById("canvas");
	context = canvas.getContext('2d');

 player1 = new GameObject();

 player1.x = 50;
 player1.y = 10;

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
	
	player1.drawRect();
}

