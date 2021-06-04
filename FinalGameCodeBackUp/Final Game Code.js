
var canvas;
var context;
var timer;
var interval;
var player;
var text;
var health = 100;
var ammo = 0;
var ammo1;
var healthP;
var startgame = 0;
var lives = 3;
var goalcounter = 0;

var keytruth = false;
var level = 0;



	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	canvas.addEventListener("mousemove", track);
	canvas.addEventListener("click", startGame);

	player = new GameObject({x:100, y:canvas.height/2-100, width:30, height:20});

var platform = [];
var amount = 10;

var zombie = [];

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

	var fX = .85;
	var fY = .97;

function startGame()
{
	var dx = dot.x - mouse.x;
	var dy = dot.y - mouse.y;
	var dist = Math.sqrt(dx*dx + dy * dy);

	var dx1 = instructions.x - mouse.x;
	var dy1 = instructions.y - mouse.y;
	var dist1 = Math.sqrt(dx1*dx1 + dy1 * dy1);

	var dx2 = backtomenu.x - mouse.x;
	var dy2 = backtomenu.y - mouse.y;
	var dist2 = Math.sqrt(dx2*dx2 + dy2 * dy2);


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
}

function track(e)
{
	var rect = canvas.getBoundingClientRect();
	mouse.x = e.clientX - rect.left;
	mouse.y = e.clientY - rect.top;
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
	for(var p = 0; p < platform.length; p++)
	{	
	
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

if(keytruth == false)
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

	
	if(player.hitTestObject(healthP))
	{
		healthP.y = 100;
		healthP.x = 200;
		if(health < 100)
		{
			health = health + 50;
		}
		
		keytruth = true;
	}
	if(player.hitTestObject(ammo1))
	{
		ammo1.y = 100;
		ammo1.x = 300;
		ammo = ammo + 20;
		keytruth = true;
	}


	if(player.hitTestObject(goal))
	{
		goal.y = 1000;
		player.x = startX;
		player.y = startY;
		keytruth = true;
		goalcounter = 1;
		ammo1.x = Math.random() * canvas.width;
		ammo1.y = Math.random() * canvas.height;
		healthP.x = Math.random() * canvas.width;
		healthP.y = Math.random() * canvas.height;
		key.x = Math.random() * canvas.width;
		key.y = Math.random() * canvas.height;

	for(var i = 0; i < amount; i++)
	{

	platform[i].x = Math.random() * canvas.width;
	platform[i].y = Math.random() * canvas.height;
	platform[i].width = Math.random() * (400 - 20) + 20;
	platform[i].height = Math.random() * (400 - 20) + 20;
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
		keytruth = true;
		goalcounter = 0;
	}

	
	
	dot.y = 10000;
	instructions.y = 10000;
	


	key.drawRect();

	healthP.drawRect();
	ammo1.drawRect();
	totalhealth.drawRect();
	player.drawRect();
	goal.drawCircle();
context.fillText(health, 10, 20)
}

if(startgame == 0)
{
	dot.drawRect();
	instructions.drawRect();
	context.fillText("START", 490, 300);
	context.fillText("INSTRUCTIONS", 470, 600);
	context.fillText("Zombie Run Survival", 470, 100);
	context.fillText("By: William Roy", 470, 140);

	goalcounter = 1;

	lives = 3;

	dot.y = 300;
	instructions.y = 600;

	for(var i = 0; i < amount; i++)
	{

	platform[i].x = Math.random() * canvas.width;
	platform[i].y = Math.random() * canvas.height;
	platform[i].width = Math.random() * (400 - 20) + 20;
	platform[i].height = Math.random() * (400 - 20) + 20;
	}

}
if(startgame == 2)
{
	context.fillText("CONTROLS", 500, 100);
	context.fillText("Up = W", 500, 200);
	context.fillText("Right = D", 500, 230);
	context.fillText("Left = A", 500, 260);
	context.fillText("Down = S", 500, 290);

	context.fillText("Fight the endless horde to survive!", 500, 600);
	
	backtomenu.drawRect();
	context.fillText("BACK TO MENU", 100, 600);

	dot.y = 10000;
	instructions.y = 10000;
}

}

