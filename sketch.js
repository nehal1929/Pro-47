const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var  paperObject,groundObject	
var world;
var backGround,backGroundImage
var bird , birdSprite
var obstacleUp , obstacleDown
var obstacleUpImage , obstacleDownImage


function preload()
{
	backGroundImage = loadImage("Images/background.jpg");
	BirdAnimation = loadAnimation("Images/b1.jpg","Images/b2.jpg","Images/b3.jpg","Images/b4.png")
	obstacleUpImage= loadImage("Images/obs1.png")
	obstacleDownImage = loadImage ("Images/obs2.png")
  
}


function setup() {

	createCanvas(800,600);
	rectMode(CENTER);

	backGround = createSprite(600,400,800,600)
	backGround.addImage(backGroundImage)
	backGround.velocityX = -5




	birdSprite = createSprite(200,200,50,50)
	birdSprite.addAnimation("flying",BirdAnimation)
	birdSprite.scale=0.7

	obstacleUp = createSprite(150,70,50,50)



	
	
	engine = Engine.create();
	world = engine.world;

	bird = new Bird(200,200,60);
	
	
	
	



	Engine.run(engine);
	
}


function draw() {
  
  background("red");
  
  if (backGround.x < 300){
	backGround.x = backGround.width/2;
	  } 
 
	
 
  
  
 if(keyDown("space")) {


	birdSprite.velocityY = -7;
	birdSprite.velocityX = 4 ;
	
}
birdSprite.velocityY = birdSprite.velocityY + 0.8





	



 
 
  
  Engine.update(engine)
  drawSprites()
 
}

