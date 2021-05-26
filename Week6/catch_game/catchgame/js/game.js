	//----------------------------------------------------------Instructions------------------------------------------------
	//---------------------In this assignment you will draw a lazy version of the "matrix"----------------------------------
	//---------------------You will recalculate some particles positions and colors when they move off screen---------------
	//---------------------Follow the commented instructions below to complete this assignment------------------------------

var canvas;
var context;
var timer;
var interval;
var player;
var score = 0;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	canvas.style.backgroundColor="grey";
	
	var amount = 25;
	var particles = [];
	var particles2 = [];
	var colors = ["#88ff88"];
	var colors2 = ["red"];

	player = new GameObject();
	player.x = 500;
	player.y = 750;
	player.width = 60;
	player.height = 60;
	player.color = "yellow";
	
	for(var i = 0; i < amount; i++)
	{
		particles[i] = new GameObject({width:25, height:20});
		particles2[i] = new GameObject({width:25, height:20});
		
		var randomColor = Math.round(Math.random());
		particles[i].color = ["#88ff88"];
		particles2[i].color = ["red"];
	
		particles[i].x = Math.random() * canvas.width;
		particles[i].y = Math.random() * canvas.height;
		particles[i].vy = Math.random() * 10 + 5;

		particles2[i].x = Math.random() * canvas.width;
		particles2[i].y = Math.random() * canvas.height;
		particles2[i].vy = Math.random() * 10 + 5;
	}
	
	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{	
	context.clearRect(0,0,canvas.width, canvas.height);	

	// player controls
	if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
		player.color = "yellow";
	}

	if(a)
	{
		player.vx += -player.ax * player.force;
		player.color = "yellow";
	}
	if(d)
	{
		player.vx += player.ax * player.force;
		player.color = "yellow";
	}

	player.vx *= fX;
	player.vy *= fY;
	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);
	//player controls
	
	for(var p = 0; p < particles.length; p++)
	{	
		particles[p].x += particles[p].vx;
		particles[p].y += particles[p].vy;
			
		if(particles[p].y >= canvas.height)
		{
			particles[p].y = 0;
			particles[p].vy = Math.random() * 0 + 6;
			particles[p].x = Math.random() * canvas.width;
		}

		if(player.hitTestObject(particles[p]))
	{
		particles[p].y = 0;
		score = score + 1;
		particles[p].x = Math.random() * canvas.width;
		player.color = "#88ff88";
		
	}

		particles[p].drawRect();
	}

	for(var p = 0; p < particles2.length; p++)
	{	
		particles2[p].x += particles2[p].vx;
		particles2[p].y += particles2[p].vy;
			
		if(particles2[p].y >= canvas.height)
		{
			particles2[p].y = 0;
			particles2[p].vy = Math.random() * 0 + 6;
			particles2[p].x = Math.random() * canvas.width;
		}

		if(player.hitTestObject(particles2[p]))
	{
		particles2[p].y = 0;
		particles2[p].x = Math.random() * canvas.width;
		score = 0;
		player.color = "red";
	}

		particles2[p].drawCircle();
	}
	


	if(player.y >= 750)
	{
		player.y = 750;
		player.canJump = true;
		player.y++;
		player.vy = 0;
	}

	context.fillText(score, 100, 50)
	context.fillText(score, 100, 50)
	context.fillText(score, 100, 50)
	context.fillText(score, 100, 50)
	context.fillText(score, 100, 50)
	//embold
	player.drawRect();

}


