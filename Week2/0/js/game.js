

var canvas;
var context;
var timer;

var mainTimer = setInterval(animate, 1000/60);
var player1; 

	
	canvas = document.getElementById("canvas");
	context = canvas.getContext('2d');

 player1 = new GameObject();

 player1.x = 50;
 player1.y = 150;

function animate()
{

	context.clearRect(0,0,canvas.width, canvas.height);	
	

	
	player1.drawRect();
}

