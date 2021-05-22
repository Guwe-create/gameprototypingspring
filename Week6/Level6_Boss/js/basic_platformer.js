//Declare my variables

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


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:100, y:canvas.height/2-100});

	platform0 = new GameObject();
		platform0.width = 200;
		platform0.x = platform0.width/2;
		platform0.y = canvas.height - platform0.height/2;
		platform0.color = "#66ff33";

		platform1 = new GameObject();
		platform1.width = 200;
		platform1.x = 400;
		platform1.y = 600;
		platform1.color = "#66ff33";

		platform2 = new GameObject();
		platform2.width = 200;
		platform2.x = 600;
		platform2.y = 400;
		platform2.color = "#66ff33";

		platform3 = new GameObject();
		platform3.width = 300;
		platform3.x = 800;
		platform3.y = 200;
		platform3.color = "#66ff33";

		platform4 = new GameObject();
		platform4.width = 300;
		platform4.x = 100;
		platform4.y = 400;
		platform4.color = "#66ff33";

		healthP = new GameObject();
		healthP.width = 30;
		healthP.height = 30;
		healthP.x = 100;
		healthP.y = 600;
		healthP.color = "purple";

		ammo1 = new GameObject();
		ammo1.width = 30;
		ammo1.height = 30;
		ammo1.x = 550;
		ammo1.y = 300;
		ammo1.color = "green";
		
	goal = new GameObject({width:24, height:50, x:canvas.width-50, y:1000, color:"#00ffff"});
	goal1 = new GameObject({width:24, height:50, x:800, y:1000, color:"red"})
	goal2 = new GameObject({width:24, height:50, x:800, y:1000, color:"green"})
	key = new GameObject({width:24, height:50, x:400, y:500, color:"yellow"})

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	text = false;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
	}

	if(a)
	{
		player.vx += -player.ax * player.force;
	}
	if(d)
	{
		player.vx += player.ax * player.force;
	}

	player.vx *= fX;
	player.vy *= fY;
	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);
	

	while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform0.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}

	while(platform1.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform1.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}

	while(platform2.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform2.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform2.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform2.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}

	while(platform3.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform3.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform3.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform3.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	
	while(platform4.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform4.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform4.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform4.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	
	//---------Objective: Treasure!!!!!!!---------------------------------------------------------------------------------------------------- 
	//---------Run this program first.
	//---------Get Creative. Find a new way to get your player from the platform to the pearl. 
	//---------You can do anything you would like except break the following rules:
	//---------RULE1: You cannot spawn your player on the pearl!
	//---------RULE2: You cannot change the innitial locations of platform0 or the goal! 
		

	//I made subsequent platforms for the player to climb to reach the goal
	//jump from platform to platform to reach the end
	if(player.hitTestObject(healthP))
	{
		healthP.y = 100;
		healthP.x = 200;
		health = 100;

	}
	if(player.hitTestObject(ammo1))
	{
		ammo1.y = 100;
		ammo1.x = 300;
		ammo = 100;

	}


	if(player.hitTestObject(goal))
	{
		goal.y = 100;
		goal.x = 400;
		health = 1000;

	}

	if(player.hitTestObject(key))
	{
		goal.y = 100;
		key.y = 100;
		key.x = 100;
	}
	if(player.hitTestObject(goal2))
	{
		platform0.y = 500;
		platform1.y = 500;
		platform0.x = 500;
		platform1.x = 400;
		platform2.x = 600;
		platform2.y = 500;
		platform3.y = 10000;
		goal2.y = 10000;
		player.x = 500;
		player.y = 300;
		level = level + 1;
		text = true;
	}

	health = health - .06;

	context.fillText("Items", 100, 150)
	context.fillText("Ammo", 100, 170)
	context.fillText(ammo, 140, 170)
	context.fillText("/", 160, 170)
	context.fillText("100", 170, 170)

	context.fillText("Health", 100, 190)
	context.fillText(health, 150, 190)
	context.fillText("Health", 80, 580)

	context.fillText("Key", 400, 450)
	context.fillText("Ammo", 600, 300)


	
	context.fillText("This is to represent the mechanic of item pick-ups!", 700, 100)
	
	
	
	platform0.drawRect();
	platform1.drawRect();
	platform2.drawRect();
	platform3.drawRect();
	goal1.drawCircle();
	goal2.drawCircle();
	key.drawRect();
	platform4.drawRect();
	healthP.drawRect();
	ammo1.drawRect();
	//Show hit points
	player.drawRect();
	goal.drawCircle();
}

