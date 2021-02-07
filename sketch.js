
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(800,670,1600,20);
	paper=new Paper(200,450,40);
	dustbin=new Dustbin(1200,50)
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  })
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  drawSprites();
 paper.display();
 ground.display();
 dustbin.display();

}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
	}
}



