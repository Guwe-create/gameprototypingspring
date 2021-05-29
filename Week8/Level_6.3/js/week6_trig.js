//--------------------Goal - To find an angle and rotate a turret to that angle--------------------------
//--------------------Description - Make the blue turret aim at the player even if the player moves.
//--------------------Don't touch the walls.------------------------------------------------------------------
//--------------------Read the commented instructions below to complete this assignment----------------------
//--------------------Upload your completed file to the ict server and submit a link-------------------------

var canvas;
var context;
var timer;
var interval;
var player;





	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject();
	player.force = 1;
	player.angle = 180;
	
	turret = new GameObject({x:200, y:200, width:25, color:"cyan"});
	
	bullet = new GameObject({x:player.x, y:player.y, width:25, color:"magenta"});
	
	canvasTrigger = new GameObject({width:canvas.width, height:canvas.height});

	enemy = new GameObject({x:700, y:200, width:25, color:"green"});

	enemy1 = new GameObject({x:700, y:400, width:25, color:"green"});

	enemy2 = new GameObject({x:700, y:600, width:25, color:"green"});

	enemy3 = new GameObject({x:700, y:1000, width:25, color:"orange"});

	enemy4 = new GameObject({x:700, y:1000, width:25, color:"orange"});

	enemy5 = new GameObject({x:700, y:1000, width:25, color:"orange"});

	//

	healthbar = new GameObject({x:700, y:130, width:50, height:10, color:"green"});

	healthbar1 = new GameObject({x:700, y:330, width:50, height:10, color:"green"});

	healthbar2 = new GameObject({x:700, y:530, width:50, height:10, color:"green"});

	healthbar3 = new GameObject({x:700, y:1000, width:50, height:10, color:"green"});

	healthbar4 = new GameObject({x:700, y:1000, width:50, height:10, color:"green"});

	healthbar5 = new GameObject({x:700, y:1000, width:50, height:10, color:"green"});

	harderlevel = new GameObject({x:100, y:700, width:50, height:10, color:"cyan"});

	block = new GameObject({x:100, y:1000, width:50, height:30, color:"white"});
	
	var amount = 4;
	var health = [];

	var amount1 = 4;
	var health1 = [];
	
	for(var i = 0; i < amount1; i++)
	{
		health1[i] = 200;
	}

	for(var i = 0; i < amount; i++)
	{
		health[i] = 100;
	}


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
	

	var dx = player.x - turret.x; 
	var dy = player.y - turret.y; 
	var radians = Math.atan2(dy, dx);
	var deg = radians * 180/Math.PI
	turret.angle = deg;
	

	if(health[1] <= 50)
	{
		healthbar.color = "red";
	}

	if(health[2] <= 50)
	{
		healthbar1.color = "red";
	}

	if(health[3] <= 50)
	{
		healthbar2.color = "red";
	}
	//
	if(health1[1] <= 150)
	{
		healthbar3.color = "yellow";
	}

	if(health1[2] <= 150)
	{
		healthbar4.color = "yellow";
	}

	if(health1[3] <= 150)
	{
		healthbar5.color = "yellow";
	}
	//
	if(health1[1] <= 100)
	{
		healthbar3.color = "orange";
	}

	if(health1[2] <= 100)
	{
		healthbar4.color = "orange";
	}

	if(health1[3] <= 100)
	{
		healthbar5.color = "orange";
	}
	//
	if(health1[1] <= 50)
	{
		healthbar3.color = "red";
	}

	if(health1[2] <= 50)
	{
		healthbar4.color = "red";
	}

	if(health1[3] <= 50)
	{
		healthbar5.color = "red";
	}
	
	if(bullet.hitTestObject(canvasTrigger) == false)
	{
	 bullet.x = player.x;
	 bullet.y = player.y;
	}

	if(bullet.x == player.x && bullet.y == player.y)
	{
		bullet.vx = Math.cos(player.angle * Math.PI/180) * 5;
		bullet.vy = Math.sin(player.angle * Math.PI/180) * 5;
	}

	if(player.hitTestObject(harderlevel))
	{
		enemy.y = 1000;
		enemy1.y = 1000;
		enemy2.y = 1000;
		healthbar.y = 1000;
		healthbar1.y = 1000;
		healthbar2.y = 1000;

		enemy3.y = 200;
		enemy4.y = 400;
		enemy5.y = 600;
		healthbar3.y = 130;
		healthbar4.y = 330;
		healthbar5.y = 530;
		harderlevel.y = 10000;
		block.y = 650;
	}

	healthbar.drawRect();
	healthbar1.drawRect();
	healthbar2.drawRect();
	healthbar3.drawRect();
	healthbar4.drawRect();
	healthbar5.drawRect();

	context.fillText("Go to harder enemies", 50, 600);
	context.fillText("Shoot the enemies!", 200, 200);

		if(bullet.hitTestObject(enemy))
		{
			
			health[1] = health[1] - 5;

			if(health[1] == 0)
			{
				enemy.y = 1000;
				healthbar.y = 1000;
			}
		}
		if(bullet.hitTestObject(enemy1))
		{
			health[2] = health[2] - 5;
			if(health[2] == 0)
			{
				enemy1.y = 1000;
				healthbar1.y = 1000;
			}
		}
		if(bullet.hitTestObject(enemy2))
		{
			
			health[3] = health[3] - 5;
			if(health[3] == 0)
			{
				enemy2.y = 1000;
				healthbar2.y = 1000;
			}
		}
// Yes this is gross
		if(bullet.hitTestObject(enemy3))
		{
			
			health1[1] = health1[1] - 5;

			if(health1[1] == 0)
			{
				enemy3.y = 1000;
				healthbar3.y = 1000;
			}
		}
		if(bullet.hitTestObject(enemy4))
		{
			health1[2] = health1[2] - 5;
			if(health1[2] == 0)
			{
				enemy4.y = 1000;
				healthbar4.y = 1000;
			}
		}
		if(bullet.hitTestObject(enemy5))
		{
			
			health1[3] = health1[3] - 5;
			if(health1[3] == 0)
			{
				enemy5.y = 1000;
				healthbar5.y = 1000;
			}
		}
	




	bullet.move();
	player.drawTriangle();

	bullet.drawCircle();
	enemy.drawRect();
	enemy1.drawRect();
	enemy2.drawRect();

	enemy3.drawRect();
	enemy4.drawRect();
	enemy5.drawRect();
	harderlevel.drawCircle();
}

function angularMovement()
{
	if(w)
	{	
		//Convert Angle to Radians
		var radians = player.angle * Math.PI/180;
		
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
		
		//Calculate acceleration modifiers (lengtha and height of triangle)
		player.ax = Math.cos(radians);
		player.ay = Math.sin(radians);
		
		player.vx += player.ax * -player.force;
		player.vy += player.ay * -player.force;
	}
	
	//Rotate Counter Clockwise
	if(a)
	{
		player.angle-=2;
	}
	//Rotate Clockwise
	if(d)
	{
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
