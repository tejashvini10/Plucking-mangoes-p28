
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var boy,stone,tree,mango,ground,treeimg,boyimg;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
function preload()
{
	boyimg=loadImage("boy.png");
	treeimg=loadImage("tree.png");



}

function setup() {
	createCanvas(1500, 800);


	engine = Engine.create();
	world = engine.world;

  ground=new Ground(width/2,700,width,20);
	//Create the Bodies Here.
    stone=new Stone(235,400,30);
mango1=new Mango(1000,160,30);
mango2=new Mango(850,300,30);
mango3=new Mango(1100,300,30);
mango4=new Mango(1000,230,30);
mango5=new Mango(900,250,40);
mango6=new Mango(1140,150,40);
mango7=new Mango(1100,230,40);
mango8=new Mango(1200,300,40);
mango9=new Mango(1300,300,40);
mango10=new Mango(950,300,30);

attach=new Throw(stone.body,{x:100,y:460});

tree=createSprite(1050,400);
tree.addImage(treeimg);
tree.scale=0.5;
boy=createSprite(200,580);
boy.addImage(boyimg);
boy.scale=0.2;

var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1500,
    height: 800,
    wireframes: false
  }
});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  stroke("white");
  textSize(20);
  fill("white");
  text("Press Space to get a second Chance ",50 ,50);
  
  
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);

  drawSprites();
 
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  attach.fly();
}
function detectCollision(lstone,lmango){
 mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=lmango.r+lstone.r)
{
  Matter.Body.setStatic(lmango.body,false);
}
}
function keyPressed(){
  if(keyCode===32){

    Matter.Body.setPosition(stone.body,{x:235,y:420})
    attach.Launch(stone.body);
  }
}

