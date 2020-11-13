
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var log1;
var ground;
var groundBody;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  
  
      

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


  Engine.run(engine);
  
  ground=createSprite(200,650,1000,5)
  ground.shapeColor=color("white")
  groundBody=Bodies.rectangle(200,650,1000,5,{isStaic:true})

    log1=new dustbin(650,200,20,100)
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();


  log1.display();
  
 
}



