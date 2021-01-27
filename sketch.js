const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var boy1,boyImg;
var ground1;
var tree1;
var stone1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11;
var thrower;

function preload(){
  boyImg=loadImage("images/boy.png"); 
}

function setup() {
  createCanvas(800,700);
 
  engine = Engine.create();
  world = engine.world;

  boy1=Matter.Bodies.rectangle(200,630,10,10);

  ground1=new ground(400,690,800,20);

  tree1 = new tree(580,490,2,2)

  stone1=new stone(430,490,30,20);
  mango1=new mango(640,360,30,20);
  mango2=new mango(410,390,30,40);
  mango3=new mango(470,410,40,30);
  mango4=new mango(490,470,38,32);
  mango5=new mango(543,410,31,30);
  mango6=new mango(555,460,30,35);
  mango7=new mango(494,350,30,28);
  mango8=new mango(443,430,20,20);
  mango9 = new mango(640,450,30,20);
  mango10= new mango(750,390,30,21);
  mango11= new mango(777,450,30,30);

  thrower=new constraint(stone1.body,{x:170,y:580});
}

function draw() {
  background("lightBlue");  

  Engine.update(engine);
  imageMode(CENTER);
  image(boyImg,boy1.position.x,boy1.position.y,100,200);

  tree1.display();
  ground1.display();
  stone1.display();

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
  mango11.display();
  
  thrower.display();

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);
  detectCollision(stone1,mango7);
  detectCollision(stone1,mango8);
  detectCollision(stone1,mango9);
  detectCollision(stone1,mango10);
  detectCollision(stone1,mango11);

  fill("pink")
  stroke(255);
  textSize(30)
  text("Press spacebar to get another chance!!",50,50)
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  thrower.fly();
}

function keyPressed(){
  if(keyCode===32){
    thrower.attach(stone1.body);
  }
}