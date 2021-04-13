
function GameObject(x,y,w,h,color)
{
	
	
	if(x == undefined)
	this.x = canvas.width/2;
else 
	this.x = x;
if(y == undefined)
	this.y = canvas.height/2;
else 
	this.y = y;
	
	if(w == undefined)
		this.width = 100;
	else 
		this.width = w;
	if(h == undefined)
		this.height = 100;
	else 
		this.height = h;
	
	
	if(color == undefined)
		this.color = "blue";
	else 
		this.color = color;


	
	this.drawCircle = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.beginPath();
			context.translate(this.x, this.y);
			context.arc(0, 0, this.width/2, 0, 360 *Math.PI/180, true);
			context.arc(0, 0, this.width/2, 0, 360 *Math.PI/180, true);
			context.closePath();
			context.fill();
		context.restore();
		
	}	
	
	this.move = function()
{
	this.x += this.vx * 2;
	this.y += this.vy * 2;
}
	
	
}
