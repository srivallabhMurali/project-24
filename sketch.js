var ground,dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbinPosition=width/2-100
	dustbinY=610;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");

	dustbinleftSprite=createSprite(dustbinPosition,dustbinY, 20,100);
	dustbinleftSprite.shapeColor=color(255,0,0);

	dustbinLeftBody = Bodies.rectangle(dustbinPosition+20, dustbinY, 20,100 , {isStatic:true} );
 	World.add(world, dustbinLeftBody);

 	dustbinBase=createSprite(dustbinPosition+100, dustbinY+40, 200,20);
 	dustbinBase.shapeColor=color(255,0,0);

 	dustbinBottomBody = Bodies.rectangle(dustbinPosition+100,dustbinY+45-20, 200,20 , {isStatic:true} );
 	World.add(world,dustbinBottomBody);

 	dustbinleftSprite=createSprite(dustbinPosition+200 ,dustbinY, 20,100);
 	dustbinleftSprite.shapeColor=color(255,0,0);

 	dustbinRightBody = Bodies.rectangle(dustbinPosition+200-20 , dustbinY, 20,100 , {isStatic:true} );
 	World.add(world, dustbinRightBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
 
}



