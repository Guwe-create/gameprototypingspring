//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
var enemy;
var ammo = 0;
var bullet;



	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:100, y:canvas.height/2-100});

	platform0 = new GameObject();
		platform0.width = 1000;
		platform0.x = platform0.width/2;
		platform0.y = canvas.height - platform0.height/2;
		platform0.color = "#66ff33";

	enemy = new GameObject({x:800, y:canvas.height/2-100});


	
	gun = new GameObject();
	gun.width = 10;
	gun.x = 200;
	gun.y = 600;
	gun.color = "blue";

	bullet = new GameObject();
	bullet.x = gun.x;
	bullet.width = 10;
	bullet.height = 10;
	bullet.y = 10000;
	bullet.color = "yellow";

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

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



	if(ammo == 1)
	{
		if(g)
		{
			bullet.y = gun.y;
			
			bullet.x = bullet.x + 5;
			
		}
		if(g == false)
		{
			bullet.y = bullet.y;
			if(bullet.x == 700)
			{
				bullet.y = 10000;
			}
		}
		
	}

	player.vx *= fX;
	player.vy *= fY;
	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);

	enemy.vx *= fX;
	enemy.vy *= fY;
	
	enemy.vy += gravity;
	
	enemy.x += Math.round(enemy.vx);
	enemy.y += Math.round(enemy.vy);
	

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

	while(platform0.hitTestPoint(enemy.bottom()) && enemy.vy >=0)
	{
		enemy.y--;
		enemy.vy = 0;
		enemy.canJump = true;
	}
	while(platform0.hitTestPoint(enemy.left()) && enemy.vx <=0)
	{
		enemy.x++;
		enemy.vx = 0;
	}
	while(platform0.hitTestPoint(enemy.right()) && enemy.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(enemy.top()) && enemy.vy <=0)
	{
		enemy.y++;
		enemy.vy = 0;
	}

	if(player.x <= 500)
	{
		enemy.x = enemy.x - 2;
	}
	if(player.x >= 500)
	{
		enemy.x = enemy.x + 2;
	}
	
	enemy.vy = player.vy;
//Made a gun in the game that can hurt an enemy
context.font = "16px Arial";
	
if(enemy.hitTestObject(player))
{
	player.y = 1000;
}
if(player.hitTestObject(gun))
{
	gun.y = player.y;
	gun.x = player.x;
	ammo = 1;
	context.fillText("Press G!", 80, 25);
}
if(bullet.hitTestObject(enemy))
{
	enemy.y = 1000;
}


	
	
	
	platform0.drawRect();
	enemy.drawRect();
	bullet.drawRect()
	//Show hit points
	player.drawRect();
	gun.drawCircle();
}

