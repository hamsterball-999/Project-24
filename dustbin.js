class dustbin 
{
    Constructor (x,y)
}
{
    this.x=x;
    this.y=y;
    this.dustbinWidth = 200;
    this.dustbinHeight = 100;
    this. wallThickness = 20;
    this.angle = 0;

 this. bottombody = Bodies.rectanle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true})
 this. leftWallbody = Bodies.rectanle(this.x-this.dustbinWidth/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
 Matter . body . setAngle(this.leftWallbody,this.angle);

this.rightWallBody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
Matter.body.setAngle(this.rightWallBody,-1,this.angle);
World.add (world,this.bottombody);
World.add (world,this.leftWallbody);
World.add (world,this.rightWallbody);
}

display() 
{
    var posBottom = this.bottombody.position;
    var posLeft= this.leftWallbody.position;
    var posRight = this.rightWallBody.position;
}
