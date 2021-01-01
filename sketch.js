const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var player,ground,block1,block2,block3,block4;
var block5,block6,block7,block8,block9;
var block10,block11,block12,block13,block14,block15,block16,pentagon;
var sling,ground1;
var score=0;
var backgroundImg,blockImg;
function preload()
{
blockImg = loadImage("corona.png");
backgroundImg = loadImage("bg.jpg");
}

function setup() {
  createCanvas(1500,900);
  //createSprite(400, 200, 1200, 800);
  engine = Engine.create();
  world = engine.world;


 ground = new Ground(900, 400, 400, 15);
 ground1 = new Ground(500, 800, 2000, 20);

  block3 = new Block(830, 305, 30 ,40);
  //block3.addImage(blockImg);

  block4 = new Block(860, 305, 30 ,40);
  //block4.addImage(blockImg);

  block5 = new Block(890, 305, 30 ,40);
 // block5.addImage(blockImg);

  block6 = new Block(920, 305, 30, 40);
  //block6.addImage(blockImg);

  block7 = new Block(950, 305, 30, 40);
 // block7.addImage(blockImg);

  block8 = new Block(830, 265, 30, 40);
 // block8.addImage(blockImg);

  block9 = new Block(860, 265, 30, 40);
  //block9.addImage(blockImg);

  block10 = new Block(890, 265, 30, 40);
  //block10.addImage(blockImg);

  block11 = new Block(920, 265, 30, 40);
 // block11.addImage(blockImg);

  block12 = new Block(950, 265, 30, 40);
  //block12.addImage(blockImg);

  block13 = new Block(860, 225, 30, 40);
 // block13.addImage(blockImg);

  block14 = new Block(890, 225, 30, 40);
  //block14.addImage(blockImg);

  block15 = new Block(920, 225, 30, 40);
  //block15.addImage(blockImg);

  block16 = new Block(890, 185, 30, 40);
  //block16.addImage(blockImg);

  pentagon=new Pentagon(300,400)
  sling=new Slingshot(pentagon.body,{x:300 , y:400})
  
  Engine.run(engine);

}

function draw() {
  console.log(backgroundImg)
  if(backgroundImg){
    background(backgroundImg);
}
  textSize(35);
  fill("yellow")

  drawSprites();
 
  ground.display();
  //block1.display();
  //block2.display();
  fill("purple")
  block3.display();
  block3.score();
  //fill("yellow")
  block4.display();
  block4.score();

//  fill("purple")
  block5.display();  
    block5.score();

 // fill("yellow")
  block6.display();
  block6.score();

//  fill("purple")
  block7.display();
  block7.score();

 /// fill("yellow")
  block8.display();
  block8.score();

 /// fill("purple")
  block9.display();
  block9.score();

 /// fill("yellow")
  block10.display();
  block10.score();

 // fill("purple")
  block11.display();
  block11.score();

 // fill("yellow")
  block12.display();
  block12.score();

//  fill("purple")
  block13.display();
  block13.score();

//  fill("yellow")
  block14.display();
  block14.score();

 // fill("purple")
  block15.display();
  block15.score();

 // fill("yellow")
  block16.display();
  block16.score();

 pentagon.display();
sling.display();
fill("yellow")
ground1.display();
}
function mouseDragged(){
  Matter.Body.setPosition(pentagon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling.fly();
  
}
function keyPressed(){
  if (keyCode===32){
    sling.attach(pentagon.body);
  }
  }