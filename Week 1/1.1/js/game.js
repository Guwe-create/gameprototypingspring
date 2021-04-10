

var canvas;
var context;
var timer;

var interval = 1000/60;
var player;

	
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	
	player = new GameObject();

	
	timer = setInterval(animate, interval);

function animate()
{

	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	
	player.drawCircle();
}

