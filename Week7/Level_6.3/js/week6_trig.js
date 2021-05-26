
var canvas;
var context;
var timer;
var interval;
var player;
var sight;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject();
	player.force = 1;
	player.width = 50;
	player.height = 50;
	
	sight = new GameObject();
	sight.color = "blue";
	sight.x = player.x;
	sight.y = player.y;
	sight.height = 20;
	sight.width = 20;
	
	turret1 = new GameObject({x:700, y:600, width:25, color:"cyan"});
	turret2 = new GameObject({x:700, y:400, width:25, color:"cyan"});
	turret3 = new GameObject({x:700, y:200, width:25, color:"cyan"});
	
	
	bullet1 = new GameObject({x:200, y:200, width:25, color:"magenta"});
	bullet2 = new GameObject({x:200, y:200, width:25, color:"magenta"});
	bullet3 = new GameObject({x:200, y:200, width:25, color:"magenta"});
	
	canvasTrigger = new GameObject({width:canvas.width, height:canvas.height});

	
	
	//friction
	var fX = .80;
	var fY = .80;
	
	var angle = 0;
	
	//gravity gets added to the vy
	var gravity = 0;

	interval = 1000/60;
	timer = setInterval(animate, interval);
	

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	


	angularMovement();
	

	var dx = player.x - turret1.x; 
	var dy = player.y - turret1.y; 
	var radians = Math.atan2(dy, dx);
	var deg = radians * 180/Math.PI
	//
	var dx1 = player.x - turret2.x; 
	var dy1 = player.y - turret2.y; 
	var radians1 = Math.atan2(dy1, dx1);
	var deg1 = radians1 * 180/Math.PI
	//
	var dx2 = player.x - turret3.x; 
	var dy2 = player.y - turret3.y; 
	var radians2 = Math.atan2(dy2, dx2);
	var deg2 = radians2 * 180/Math.PI



	turret1.angle = deg;
	turret2.angle = deg1;
	turret3.angle = deg2;


	


	if(bullet1.hitTestObject(canvasTrigger) == false)
	{
	 bullet1.x = turre1t.x;
	 bullet1.y = turret1.y;
	}

	if(bullet2.hitTestObject(canvasTrigger) == false)
	{
	 bullet2.x = turret2.x;
	 bullet2.y = turret2.y;
	}

	if(bullet3.hitTestObject(canvasTrigger) == false)
	{
	 bullet3.x = turret3.x;
	 bullet3.y = turret3.y;
	}
	//bullets finish

	
	if(bullet1.x == turret1.x && bullet1.y == turret1.y)
	{
		bullet1.vx = Math.cos(turret1.angle * Math.PI/180) * 5;
		bullet1.vy = Math.sin(turret1.angle * Math.PI/180) * 5;
	}

	if(bullet2.x == turret2.x && bullet2.y == turret2.y)
	{
		bullet2.vx = Math.cos(turret2.angle * Math.PI/180) * 5;
		bullet2.vy = Math.sin(turret2.angle * Math.PI/180) * 5;
	}

	if(bullet3.x == turret3.x && bullet3.y == turret3.y)
	{
		bullet3.vx = Math.cos(turret3.angle * Math.PI/180) * 5;
		bullet3.vy = Math.sin(turret3.angle * Math.PI/180) * 5;
	}

	if(turret1.hitTestObject(turret2))
	{
		turret2.x = turret2.x + 2;
		turret2.y = turret2.y + 2;
	}
	if(turret1.hitTestObject(turret3))
	{
		turret3.x = turret3.x + 2;
		turret3.y = turret3.y + 2;
	}
	if(turret2.hitTestObject(turret3))
	{
		turret3.x = turret3.x + 2;
		turret3.y = turret3.y + 2;
	}

	context.fillText("This is to represent the mechanic of AI, try and get close to the attackers, watch them make space and attack propperly", 300, 400);
//AI
	
	if(player.x >= turret1.x + 10)
	{
		turret1.x = turret1.x + 1;
	}
	if(player.x <= turret1.x - 10)
	{
		turret1.x = turret1.x - 1;
	}

	if(player.x >= turret1.x + 10)
	{
		turret1.x = turret1.x + 1;
	}
	if(player.x <= turret1.x - 10)
	{
		turret1.x = turret1.x - 1;
	}
//
if(player.x >= turret2.x + 10)
{
	turret2.x = turret2.x + 1;
}
if(player.x <= turret2.x - 10)
{
	turret2.x = turret2.x - 1;
}

if(player.x >= turret2.x + 10)
{
	turret2.x = turret2.x + 1;
}
if(player.x <= turret2.x - 10)
{
	turret2.x = turret2.x - 1;
}
//

if(player.x >= turret3.x + 10)
{
	turret3.x = turret3.x + 1;
}
if(player.x <= turret3.x - 10)
{
	turret3.x = turret3.x - 1;
}

if(player.x >= turret3.x + 10)
{
	turret3.x = turret3.x + 1;
}
if(player.x <= turret3.x - 10)
{
	turret3.x = turret3.x - 1;
}
//x axis

if(player.y >= turret1.y + 10)
{
	turret1.y = turret1.y + 1;
}
if(player.y <= turret1.y - 10)
{
	turret1.y = turret1.y - 1;
}
//
if(player.y >= turret2.y + 10)
{
	turret2.y = turret2.y + 1;
}
if(player.y <= turret2.y - 10)
{
	turret2.y = turret2.y - 1;
}
//
if(player.y >= turret3.y + 10)
{
	turret3.y = turret3.y + 1;
}
if(player.y <= turret3.y - 10)
{
	turret3.y = turret3.y - 1;
}
// y axis
	
	turret3.drawTriangle();
	turret2.drawTriangle();
	turret1.drawTriangle();

	player.drawTriangle();
		
	bullet.drawCircle();

}

function angularMovement()
{
	if(w)
	{	
		//Convert Angle to Radians
		var radians = player.angle * Math.PI/180;
		sight.y = player.y - 10;
		
		//Calculate acceleration modifiers (lengtha and height of triangle)
		player.ax = Math.cos(radians);
		player.ay = Math.sin(radians);
		
		player.vx += player.ax * player.force;
		player.vy += player.ay * player.force;
	}
	
	if(s)
	{
		//Convert Angle to Radians
		var radians = player.angle * Math.PI/180;
		sight.y = player.y + 10;
		//Calculate acceleration modifiers (lengtha and height of triangle)
		player.ax = Math.cos(radians);
		player.ay = Math.sin(radians);
		
		player.vx += player.ax * -player.force;
		player.vy += player.ay * -player.force;
	}
	
	//Rotate Counter Clockwise
	if(a)
	{
		sight.x = player.x - 10;
		player.angle-=2;
	}
	//Rotate Clockwise
	if(d)
	{
		sight.x = player.x + 10;
		player.angle+=2;
	}

	//apply physics to velocity
	player.vx *= fX;
	player.vy *= fY;
	
	//apply gravity to velocity
	player.vy += gravity;
	
	//move player
	player.move();
}

