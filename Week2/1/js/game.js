

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
		player1.y = player1.y - 2;
	}
	if(s)
	{
		player1.y = player1.y + 2;
	}
	
	player1.drawRect();
}

