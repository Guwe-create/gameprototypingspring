
var canvas;
var context;
var timer;
var interval;
var player;
var text;
var health = 100;
var ammo = 40;
var ammo1;
var healthP;
var startgame = 0;
var lives = 3;
var goalcounter = 0;

var keytruth = 0;
var level = 0;
var resetswitch = false;
var shot = false;
var zshot = [];
var shot12 = 12;

var zombiesleft = 12;
var turret2health = 100;
var turret3health = 100;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	canvas.addEventListener("mousemove", track);
	canvas.addEventListener("click", startGame);

	player = new GameObject({x:100, y:canvas.height/2-100, width:30, height:20});

var platform = [];
var amount = 10;

var mouse = {x:0,y:0};

var totalhealth = new GameObject({x:10, y:20, width:100, height:50, color:"green"});

		healthP = new GameObject();
		healthP.width = 30;
		healthP.height = 30;
		healthP.x = Math.random() * canvas.width;
		healthP.y = Math.random() * canvas.height;
		healthP.color = "purple";

		ammo1 = new GameObject();
		ammo1.width = 30;
		ammo1.height = 30;
		ammo1.x = Math.random() * canvas.width;
		ammo1.y = Math.random() * canvas.height;
		ammo1.color = "green";

var startX = player.x;
var startY = player.y;
		
	goal = new GameObject({width:24, height:50, x:canvas.width-50, y:1000, color:"#00ffff"});
	key = new GameObject({width:24, height:50, x:Math.random() * canvas.width, y:Math.random() * canvas.height, color:"yellow"})

	var instructions = new GameObject({x:500, y:600, width:300, height:100, color:"green"});
	var dot = new GameObject({x:500, y:300, width:300, height:100, color:"red"});
	var backtomenu = new GameObject({x:100, y:600, width:300, height:50, color:"red"});
	var reset = new GameObject({x:50, y:600, width:100, height:50, color:"red"});

	var cursor = new GameObject({x:mouse.x, y:mouse.y, width:20, height:20, color:"orange"});


	var fX = .85;
	var fY = .97;


	var zombie = [];

	turret2 = new GameObject({x:700, y:400, width:25, color:"green"});
	turret3 = new GameObject({x:700, y:200, width:25, color:"green"});
	
	bullet1 = new GameObject({x:200, y:200, width:25, color:"magenta"});
	bullet2 = new GameObject({x:200, y:200, width:25, color:"magenta"});
	bullet3 = new GameObject({x:200, y:200, width:25, color:"magenta"});

	projectile0 = new GameObject({x:player.x, y:10000, width:15, color:"yellow"});

	canvasTrigger = new GameObject({width:canvas.width, height:canvas.height});

	function dead()
	{
		for(var i = 0; i < amount; i++)
		{
		if(zombie[i].hitTestObject(player))
		{
			health = health + .1;
		}
		zombie[i].x = Math.random() * canvas.width;
		zombie[i].y = Math.random() * canvas.height;
		zombie[i].color = "white";
		}
	}

function startGame()
{

	var dx8 = cursor.x - mouse.x;
	var dy8 = cursor.y - mouse.y;
	var dist8 = Math.sqrt(dx8*dx8 + dy8 * dy8);

	if(dist8 < cursor.radius())
	{
		shot = true;
	}

	var dx = dot.x - mouse.x;
	var dy = dot.y - mouse.y;
	var dist = Math.sqrt(dx*dx + dy * dy);

	var dx1 = instructions.x - mouse.x;
	var dy1 = instructions.y - mouse.y;
	var dist1 = Math.sqrt(dx1*dx1 + dy1 * dy1);

	var dx2 = backtomenu.x - mouse.x;
	var dy2 = backtomenu.y - mouse.y;
	var dist2 = Math.sqrt(dx2*dx2 + dy2 * dy2);

	var dx3 = reset.x - mouse.x;
	var dy3 = reset.y - mouse.y;
	var dist3 = Math.sqrt(dx3*dx3 + dy3 * dy3);


	if(dist < dot.radius())
	{
		startgame = 1;
	}

	if(dist1 < instructions.radius())
	{
		startgame = 2;
	}
	if(dist2 < backtomenu.radius())
	{
		startgame = 0;
	}
	if(dist3 < reset.radius())
	{
		startgame = 1;
		player.x = startX;
		player.y = startY;
		ammo1.x = Math.random() * canvas.width;
		ammo1.y = Math.random() * canvas.height;
		healthP.x = Math.random() * canvas.width;
		healthP.y = Math.random() * canvas.height;
		turret2.x = Math.random() * canvas.width;
		turret2.y = Math.random() * canvas.height;
		turret3.y = Math.random() * canvas.height;
		turret3.x = Math.random() * canvas.width;
		for(var i = 0; i < amount; i++)
		{
	
		platform[i].x = Math.random() * canvas.width;
		platform[i].y = Math.random() * canvas.height;
		platform[i].width = Math.random() * (400 - 20) + 20;
		platform[i].height = Math.random() * (400 - 20) + 20;
		}
		for(var i = 0; i < amount; i++)
		{
	
		zombie[i].x = Math.random() * canvas.width;
		zombie[i].y = Math.random() * canvas.height;
		zombie[i].color = "green";
		}
		
		key.x = Math.random() * canvas.width;
		key.y = Math.random() * canvas.height;
		goal.y = 10000;
		goal.x = Math.random() * canvas.width;
		
		resetswitch = true;
	}
}

function track(e)
{
	var rect = canvas.getBoundingClientRect();
	mouse.x = e.clientX - rect.left;
	mouse.y = e.clientY - rect.top;
	cursor.x = e.clientX - rect.left;
	cursor.y = e.clientY - rect.top;
}

	
for(var i = 0; i < amount; i++)
{
	platform[i] = new GameObject({width:10, height:10});
	
	
	platform[i].color = "blue";

	platform[i].x = Math.random() * canvas.width;
	platform[i].y = Math.random() * canvas.height;
	platform[i].width = Math.random() * (400 - 20) + 20;
	platform[i].height = Math.random() * (400 - 20) + 20;
}

for(var i = 0; i < amount; i++)
{
	zombie[i] = new GameObject();
	
	
	zombie[i].color = "green";

	zombie[i].x = Math.random() * canvas.width;
	zombie[i].y = Math.random() * canvas.height;
	zombie[i].width = 40;
	zombie[i].height = 25;
}

	text = false;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(w)
	{
		player.y = player.y - 7;
	}

	if(a)
	{
		player.x = player.x - 7;
	}
	if(d)
	{
		player.x = player.x + 7;
	}
	if(s)
	{
		player.y = player.y + 7;
	}

	player.vx *= fX;
	player.vy *= fY;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);

	if(player.y >= 800)
	{
		player.y = 800;
	}
	if(player.y <= 0)
	{
		player.y = 0;
	}
	if(player.x <= 0)
	{
		player.x = 0;
	}
	if(player.x >= 1000)
	{
		player.x = 1000;
	}

	
	
if(startgame == 1)
{

	shot = false;
	
	for(var p = 0; p < platform.length; p++)
	{	
	//player
		while(platform[p].hitTestPoint(player.bottom()) && player.vy >=0)
		{
			player.y--;
			player.vy = 0;
			player.canJump = true;
		}
		while(platform[p].hitTestPoint(player.left()) && player.vx <=0)
		{
			player.x++;
			player.vx = 0;
		}
		while(platform[p].hitTestPoint(player.right()) && player.vx >=0)
		{
			player.x--;
			player.vx = 0;
		}
		while(platform[p].hitTestPoint(player.top()) && player.vy <=0)
		{
			player.y++;
			player.vy = 0;
		}
		//////////////
		if(projectile0.hitTestObject(platform[p]))
		{
			projectile0.x = player.x;
			projectile0.y = player.y;
			ammo = ammo - 1;
		}

		if(goal.hitTestObject(platform[p]))
		{
			if(goal.x <= 500)
			{
				goal.x = goal.x + 1;
			}
			if(goal.x >= 501)
			{
				goal.x = goal.x - 1;
			}
		}
		///////////////
		// turret 2
		while(platform[p].hitTestPoint(turret2.bottom()) && turret2.vy >=0)
		{
			turret2.y--;
			turret2.vy = 0;
			turret2.canJump = true;
		}
		while(platform[p].hitTestPoint(turret2.left()) && turret2.vx <=0)
		{
			turret2.x++;
			turret2.vx = 0;
		}
		while(platform[p].hitTestPoint(turret2.right()) && turret2.vx >=0)
		{
			turret2.x--;
			turret2.vx = 0;
		}
		while(platform[p].hitTestPoint(turret2.top()) && turret2.vy <=0)
		{
			turret2.y++;
			turret2.vy = 0;
		}
		// turret 3
		while(platform[p].hitTestPoint(turret3.bottom()) && turret3.vy >=0)
		{
			turret3.y--;
			turret3.vy = 0;
			turret3.canJump = true;
		}
		while(platform[p].hitTestPoint(turret3.left()) && turret3.vx <=0)
		{
			turret3.x++;
			turret3.vx = 0;
		}
		while(platform[p].hitTestPoint(turret3.right()) && turret3.vx >=0)
		{
			turret3.x--;
			turret3.vx = 0;
		}
		while(platform[p].hitTestPoint(turret3.top()) && turret3.vy <=0)
		{
			turret3.y++;
			turret3.vy = 0;
		}
		//turrets end

projectile0.drawCircle();

if(keytruth == 0)
{
	while(platform[p].hitTestPoint(key.bottom()) && key.vy >=0)
		{
			key.y--;
			key.vy = 0;
			key.canJump = true;
		}
		while(platform[p].hitTestPoint(player.left()) && player.vx <=0)
		{
			key.x++;
			key.vx = 0;
		}
		while(platform[p].hitTestPoint(player.right()) && player.vx >=0)
		{
			key.x--;
			player.vx = 0;
		}
		while(platform[p].hitTestPoint(player.top()) && player.vy <=0)
		{
			key.y++;
			player.vy = 0;
		}
		//
		while(platform[p].hitTestPoint(goal.bottom()) && goal.vy >=0)
		{
			goal.y--;
			goal.vy = 0;
			goal.canJump = true;
		}
		while(platform[p].hitTestPoint(goal.left()) && goal.vx <=0)
		{
			goal.x++;
			goal.vx = 0;
		}
		while(platform[p].hitTestPoint(goal.right()) && goal.vx >=0)
		{
			goal.x--;
			goal.vx = 0;
		}
		while(platform[p].hitTestPoint(goal.top()) && goal.vy <=0)
		{
			goal.y++;
			goal.vy = 0;
		}
		//
		while(platform[p].hitTestPoint(ammo1.bottom()) && ammo1.vy >=0)
		{
			ammo1.y--;
			ammo1.vy = 0;
			ammo1.canJump = true;
		}
		while(platform[p].hitTestPoint(ammo1.left()) && ammo1.vx <=0)
		{
			ammo1.x++;
			ammo1.vx = 0;
		}
		while(platform[p].hitTestPoint(ammo1.right()) && ammo1.vx >=0)
		{
			ammo1.x--;
			ammo1.vx = 0;
		}
		while(platform[p].hitTestPoint(ammo1.top()) && ammo1.vy <=0)
		{
			ammo1.y++;
			ammo1.vy = 0;
		}
		//
		while(platform[p].hitTestPoint(healthP.bottom()) && healthP.vy >=0)
		{
			healthP.y--;
			healthP.vy = 0;
			healthP.canJump = true;
		}
		while(platform[p].hitTestPoint(healthP.left()) && healthP.vx <=0)
		{
			healthP.x++;
			healthP.vx = 0;
		}
		while(platform[p].hitTestPoint(healthP.right()) && healthP.vx >=0)
		{
			healthP.x--;
			healthP.vx = 0;
		}
		while(platform[p].hitTestPoint(healthP.top()) && healthP.vy <=0)
		{
			healthP.y++;
			healthP.vy = 0;
		}

}


		platform[p].drawRect();
	}
if(turret2.hitTestObject(player))
{
	health = health - 5;
}
if(turret3.hitTestObject(player))
{
	health = health - 5;
}
if(projectile0.hitTestObject(turret2))
{
	turret2health = turret2health - 1;
}
if(projectile0.hitTestObject(turret3))
{
	turret3health = turret3health - 1;
}
if(turret2health <= 0)
{	
	turret2health = 100;
	goal.x = Math.random() * canvas.width;
	goal.y = Math.random() * canvas.height;
	turret2.y = 10000;
	
	
}
if(turret3health <= 0)
{
	turret3health = 100;
	goal.x = Math.random() * canvas.width;
	goal.y = Math.random() * canvas.height;

	turret3.y = 10000;
	
}


	for(var j = 0; j < zombie.length; j++)
	{
		if(zombie[j].y >= 800)
		{
			zombie[j].y = 800;
		}
		if(zombie[j].y <= 0)
		{
			zombie[j].y = 0;
		}
		if(zombie[j].x <= 0)
		{
			zombie[j].x = 0;
		}
		if(zombie[j].x >= 1000)
		{
			zombie[j].x = 1000;
		}

	
		for(var m = 0; m < platform.length; m++)
		{
	if(projectile0.hitTestObject(zombie[j]))
	{	
		zombie[j].y = platform[1].x;
		zombie[j].x = platform[1].y;
		zombie[j].color = "white";
	
	}
		while(platform[m].hitTestPoint(zombie[j].bottom()) && zombie[j].vy >=0)
		{
			zombie[j].y--;
			zombie[j].vy = 0;
			zombie[j].canJump = true;
		}
		while(platform[m].hitTestPoint(zombie[j].left()) && zombie[j].vx <=0)
		{
			zombie[j].x++;
			zombie[j].vx = 0;
		}
		while(platform[m].hitTestPoint(zombie[j].right()) && zombie[j].vx >=0)
		{
			zombie[j].x--;
			zombie[j].vx = 0;
		}
		while(platform[m].hitTestPoint(zombie[j].top()) && zombie[j].vy <=0)
		{
			zombie[j].y++;
			zombie[j].vy = 0;
		}
		}
		if(zombie[j].hitTestObject(player))
		{
			if(zombie[j].color == "green")
			{
				health = health - 3;
			}
			
			if(zombie[j].color == "white")
			{
			if(zombie[j].hitTestObject(player))
			{
				health = health + 0;
			}
			}
			
		}

	var dx = player.x - zombie[j].x; 
	var dy = player.y - zombie[j].y; 
	var radians = Math.atan2(dy, dx);
	var deg = radians * 180/Math.PI

	zombie[j].angle = deg;

	if(player.x >= zombie[j].x + 10)
	{
		zombie[j].x = zombie[j].x + 1;
	}
	if(player.x <= zombie[j].x - 10)
	{
		zombie[j].x = zombie[j].x - 1;
	}

	if(player.x >= zombie[j].x + 10)
	{
		zombie[j].x = zombie[j].x + 1;
	}
	if(player.x <= zombie[j].x - 10)
	{
		zombie[j].x = zombie[j].x - 1;
	}
	if(bullet1.hitTestObject(canvasTrigger) == false)
	{
	 bullet1.x = zombie[j].x;
	 bullet1.y = zombie[j].y;
	}
	if(bullet1.x == zombie[j].x && bullet1.y == zombie[j].y)
	{
		bullet1.vx = Math.cos(turret1.angle * Math.PI/180) * 5;
		bullet1.vy = Math.sin(turret1.angle * Math.PI/180) * 5;
	}
	if(zombie[j].hitTestObject(turret2))
	{
		turret2.x = turret2.x + 2;
		turret2.y = turret2.y + 2;
	}
	if(zombie[j].hitTestObject(turret3))
	{
		turret3.x = turret3.x + 2;
		turret3.y = turret3.y + 2;
	}
	//zombie movement
	if(player.y >= zombie[j].y + 10)
{
	zombie[j].y = zombie[j].y + 1;
}
if(player.y <= zombie[j].y - 10)
{
	zombie[j].y = zombie[j].y - 1;
}
//

if(zombie[j].color == "green")
{
	if(projectile0.hitTestObject(zombie[j]))
	{
		zombiesleft = zombiesleft - 1;
	}
	
}

	zombie[j].drawTriangle();
	}

	if(projectile0.hitTestObject(canvasTrigger) == false)
	{
	 projectile0.x = player.x;
	 projectile0.y = player.y;
	}
	
	//turrets code
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



	turret2.angle = deg1;
	turret3.angle = deg2;



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


	if(turret2.hitTestObject(turret3))
	{
		turret3.x = turret3.x + 2;
		turret3.y = turret3.y + 2;
	}
	// turrets functions
	//AI
		

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
/////////////
if(shot == false)
{
if(cursor.x >= projectile0.x + 10)
{
	projectile0.x = projectile0.x + 6;
}
if(cursor.x <= projectile0.x - 10)
{
	projectile0.x = projectile0.x - 6;
}
//
if(cursor.y >= projectile0.y + 10)
{
	projectile0.y = projectile0.y + 6;
}
if(cursor.y <= projectile0.y - 10)
{
	projectile0.y = projectile0.y - 6;
}

}

if( ammo <= 0)
{
	projectile0.y = 10000;
}



if(projectile0.hitTestObject(cursor))
{
	projectile0.x = player.x;
	projectile0.y = player.y;
	ammo = ammo - 1;
}
//


	if(lives == 0)
	{
		startgame = 0;
	}
	if(health <= 0)
	{
		totalhealth.color = "black";
		lives = lives - 1;
	}
	if(health <= 75)
	{
		totalhealth.color = "yellow";
	}
	if(health <= 50)
	{
		totalhealth.color = "orange";
	}
	if(health <= 25)
	{
		totalhealth.color = "red";
	}
	/////


	
	if(player.hitTestObject(healthP))
	{
		healthP.y = 100;
		healthP.x = 200;
		if(health < 100)
		{
			health = health + 50;
		}
		
		keytruth = 2;
	}
	if(player.hitTestObject(ammo1))
	{
		ammo1.y = 100;
		ammo1.x = 300;
		ammo = ammo + 100;
		keytruth = 2;
	}



	if(player.hitTestObject(goal))
	{
		level = level + 1;
		zombiesleft = 12;
		goal.y = 1000;
		player.x = startX;
		player.y = startY;
		keytruth = 2;
		goalcounter = 1;
		ammo1.x = Math.random() * canvas.width;
		ammo1.y = Math.random() * canvas.height;
		healthP.x = Math.random() * canvas.width;
		healthP.y = Math.random() * canvas.height;
		key.x = Math.random() * canvas.width;
		key.y = Math.random() * canvas.height;
		for(var m = 0; m < zombie.length; m++)
		{
			zombie[m].color = "green";
		}
		turret2.x = Math.random() * canvas.width;
		turret2.y = Math.random() * canvas.height;
		turret3.x = Math.random() * canvas.width;
		turret3.y = Math.random() * canvas.height;

	for(var i = 0; i < amount; i++)
	{
	platform[i].x = Math.random() * canvas.width;
	platform[i].y = Math.random() * canvas.height;
	platform[i].width = Math.random() * (400 - 20) + 20;
	platform[i].height = Math.random() * (400 - 20) + 20;
	}

	for(var i = 0; i < amount; i++)
	{
	zombie[i].x = Math.random() * canvas.width;
	zombie[i].y = Math.random() * canvas.height;
	zombie.color = "green";
	}

	}

	resetswitch = false;
	if(resetswitch == true)
	{
		startgame = 1;
		for(var i = 0; i < amount; i++)
		{
	
		platform[i].x = Math.random() * canvas.width;
		platform[i].y = Math.random() * canvas.height;
		platform[i].width = Math.random() * (400 - 20) + 20;
		platform[i].height = Math.random() * (400 - 20) + 20;
		}
		for(var i = 0; i < amount; i++)
		{
	
		zombie[i].x = Math.random() * canvas.width;
		zombie[i].y = Math.random() * canvas.height;
		zombie[i].width = Math.random() * (400 - 20) + 20;
		zombie[i].height = Math.random() * (400 - 20) + 20;
		zombie[i].color = "green";
		}
	}

	if(player.hitTestObject(key))
	{
		if(goalcounter == 1)
		{
			goal.y = Math.random() * canvas.height;
			goal.x = Math.random() * canvas.width;
		}
		
		key.y = 100;
		key.x = 100;
		keytruth = 2;
		goalcounter = 0;
	}
	if(keytruth == 2)
	{
		if(player.hitTestObject(healthP))
		{
			health = health - 50;
		}
		if(player.hitTestObject(ammo1))
		{
			ammo = ammo - 20;
		}
	}


	
	dot.y = 10000;
	instructions.y = 10000;
	


turret2.drawTriangle();
turret3.drawTriangle();
	key.drawRect();

	healthP.drawRect();
	ammo1.drawRect();
	totalhealth.drawRect();
	player.drawRect();
	goal.drawCircle();
context.fillText(health, 10, 20)
reset.drawRect();
context.fillText("REROLL THE LEVEL", 0, 600);
context.fillText("Level: ", 100, 50);
context.fillText(level, 130, 50);

context.fillText("Ammo: ", 160, 50);
context.fillText(ammo, 200, 50);

cursor.drawRect();
}

if(startgame == 0)
{
	level = 0;
	totalhealth.color = "green";
	zombiesleft = 12;
	dot.drawRect();
	instructions.drawRect();
	context.fillText("START", 490, 300);
	context.fillText("INSTRUCTIONS", 470, 600);
	context.fillText("Zombie Run Survival", 470, 100);
	context.fillText("By: William Roy", 470, 140);

	goalcounter = 1;

	ammo = 100;
	lives = 3;
	health = 100;

	dot.y = 300;
	instructions.y = 600;

	for(var i = 0; i < amount; i++)
	{

	platform[i].x = Math.random() * canvas.width;
	platform[i].y = Math.random() * canvas.height;
	platform[i].width = Math.random() * (400 - 20) + 20;
	platform[i].height = Math.random() * (400 - 20) + 20;
	}

	for(var i = 0; i < amount; i++)
	{

	zombie[i].x = Math.random() * canvas.width;
	zombie[i].y = Math.random() * canvas.height;
	}

}
if(startgame == 2)
{
	context.fillText("CONTROLS", 500, 100);
	context.fillText("Up = W", 500, 200);
	context.fillText("Right = D", 500, 230);
	context.fillText("Left = A", 500, 260);
	context.fillText("Down = S", 500, 290);

	context.fillText("Becuase of the randomness of the levels there is a reset button in case you get stuck when playing,", 200, 400);
	context.fillText("this button is located where the [BACK TO MENU] button is.", 200, 430);

	context.fillText("Fight the endless horde to survive! Find loot to stay alive in this zombie apocalypse!", 500, 600);
	context.fillText("Try to survive the most amount of levels within the game!", 500, 630);


	
	backtomenu.drawRect();
	context.fillText("BACK TO MENU", 100, 600);

	dot.y = 10000;
	instructions.y = 10000;
}

}

