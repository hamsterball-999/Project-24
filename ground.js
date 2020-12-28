class ground
{
Constructor (x,y,w,h)
}
var options ={
    isStatic:true 
}
this.x=x;
this.y=y;
this.w=w;
this.h=h;
this.body = bodies.rectangle(x,y,w,h, options);
world.add(world.this.body);

display()
{
var groundPos = this.body.position;

Push()
translate (groundPos.x,groundPos.y);
rectMode (CENTER)
strokeWeight(4);
fill(255,255,0)
rect(0,0,this.w,this.h);
Pop()

}