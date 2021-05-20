//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
var text;
var level = 1;


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
		
	goal = new GameObject({width:24, height:50, x:canvas.width-50, y:100, color:"#00ffff"});
	goal1 = new GameObject({width:24, height:50, x:800, y:1000, color:"red"})
	goal2 = new GameObject({width:24, height:50, x:800, y:1000, color:"green"})
	key = new GameObject({width:24, height:50, x:800, y:1000, color:"yellow"})

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
	
	
	//---------Objective: Treasure!!!!!!!---------------------------------------------------------------------------------------------------- 
	//---------Run this program first.
	//---------Get Creative. Find a new way to get your player from the platform to the pearl. 
	//---------You can do anything you would like except break the following rules:
	//---------RULE1: You cannot spawn your player on the pearl!
	//---------RULE2: You cannot change the innitial locations of platform0 or the goal! 
		

	//I made subsequent platforms for the player to climb to reach the goal
	//jump from platform to platform to reach the end




	if(player.hitTestObject(goal))
	{
		goal.y = 10000;
		platform0.y = 500;
		platform0.x = 500;
		platform1.y = 700;
		platform1.x = 800;
		platform2.y = 500;
		platform2.x = 300;
		platform3.y = 1000;
		player.y = 400;
		player.x = 300;
		goal1.y = 600;
		level = level + 1;
	}

	if(player.hitTestObject(goal1))
	{
		goal1.y = 10000;
		player.y = 300;
		player.x = 300;
		platform0.y = 700;
		platform0.x = 400;
		platform1.y = 500;
		platform1.x = 600;
		platform2.y = 700;
		platform2.x = 600;
		platform3.y = 600;
		platform3.x = 800;
		key.y = 600;
		key.x = 600;
		level = level + 1;
	}
	if(player.hitTestObject(key))
	{
		goal2.y = 500;
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


	if(text == true)
	{
	context.fillText("You Win!!!", 500, 300);
	key.y = 10000;
	}
	context.fillText("Level", 200, 100)
	context.fillText(level, 230, 100)
	context.fillText("This is to represent the mechanic of levels!", 700, 100)
	
	
	
	platform0.drawRect();
	platform1.drawRect();
	platform2.drawRect();
	platform3.drawRect();
	goal1.drawCircle();
	goal2.drawCircle();
	key.drawRect();
	//Show hit points
	player.drawRect();
	goal.drawCircle();
}

