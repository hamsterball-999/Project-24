
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render  = Matter.Render;
var dustbinObj, paperObject , groundObject
var world;


function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER);

	//Create the Bodies Here.
	ngine = Engine.create();
	world = engine.world;
	dustbinObj =  new dustbin(1200,650);
	paperObject = new paper (200,450,40);
	groundObject = new ground( width/2,670, width,20);

	function KeyPressed(){
    if(keyCode === UP_ARROW){
    Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

	}
	}
	
	//Create a  Ground 

  var render = Render.create({
  element:document.body,
  engine:engine,
  options:{
	width:1200,
    height:700,
	wireframes:false
	
  }
});
 Engine.run(engine);
 //Render:run(render);

 function draw(){
	rectMode(CENTER);
	background(0);

	dustbinObj = display();
	paperObject = display();
	groundObject = display();

 }


	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



