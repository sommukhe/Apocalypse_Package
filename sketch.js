var helicopterIMG, helicopterSprite, packageSprite,packageIMG, side1, side2, side3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	side1Sprite=createSprite(width/2, height-45, 110,10);
    side1Sprite.shapeColor = "red"
	side2Sprite=createSprite(width/2 - 60, height-70, 10,60);
	side2Sprite.shapeColor = "red"
	side3Sprite=createSprite(width/2 + 60, height-70, 10,60);
	side3Sprite.shapeColor = "red"

	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 
	side1 = Bodies.rectangle(60,640, 35, 10, {isStatic:true});
	World.add(world, side1);
	side2 = Bodies.rectangle(40,640, 10, 35, {isStatic:true});
	World.add(world, side2);
	side3 = Bodies.rectangle(80,640, 10, 35, {isStatic:true});
	World.add(world, side3);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	 Matter.Body.setStatic(packageBody,false);
  }
}




