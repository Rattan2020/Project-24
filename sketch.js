
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,line,line2,line3,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	groundSprite=createSprite(400,680,800,50);
	groundSprite.shapeColor=("black");


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	line=new Bin(600,600,10,100);
	line2=new Bin(750,600,10,100);
	line3=new Bin(675,650,150,10);
	ball=new Paper(85,645,20); 
  
	ground = Bodies.rectangle(400, 675, 800, 50 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
  
}



function draw() {
  
  background("yellow");


  ball.display();
  
  line.display();
  line2.display();

  line3.display();

 keyPressed();
  drawSprites();
 
}

function keyPressed(){

	if (keyDown("up")){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:-20});
	}
}

