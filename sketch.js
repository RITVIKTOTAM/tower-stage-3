const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var polygon1,ground1,ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10,ball11,ball12,ball13,ball14,ball15,ball16;
var ground2,ground3,ball17,ball18,ball19,ball20,ball21,ball22,ball23,ball24,ball25,chain1,backgroundImage;


function preload(){

  backgroundImage = loadImage("white.png");
  getBackgroundImage();

}


function setup() {
	var canvas = createCanvas(800,400);

    
  
    engine = Engine.create();
    world = engine.world;
  

 
  polygon1 = new Polygon(100,335,40,40);
  ground1 = new Ground(395,400,800,10);
  ground2 = new Ground(500,350,160,10);
  ground3 = new Ground(700,259,120,10);
  ball1 = new Ball(440,329,20,30);
  ball2 = new Ball(460,329,20,30);
  ball3 = new Ball(480,329,20,30);
  ball4 = new Ball(500,329,20,30);
  ball5 = new Ball(520,329,20,30);
  ball6 = new Ball(540,329,20,30);
  ball7 = new Ball(560,329,20,30);
  ball8 = new Ball(460,299,20,30);
  ball9 = new Ball(480,299,20,30);
  ball10 = new Ball(500,299,20,30);
  ball11 = new Ball(520,299,20,30);
  ball12 = new Ball(540,299,20,30);
  ball13 = new Ball(520,269,20,30);
  ball14 = new Ball(500,269,20,30);
  ball15 = new Ball(480,269,20,30); 
  ball16 = new Ball(500,239,20,30);
  ball17 = new Paper(660,249,20,30);
  ball18 = new Paper(680,249,20,30);
  ball19 = new Paper(700,249,20,30);
  ball20 = new Paper(720,249,20,30);
  ball21 = new Paper(680,219,20,30);
  ball22 = new Paper(740,249,20,30);
  ball23 = new Paper(700,219,20,30);
  ball24 = new Paper(720,219,20,30);
  ball25 = new Paper(700,179,20,30);
  chain1 = new Chain(polygon1.body,{x:200,y:335});
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);
  Engine.update(engine);
 
  
   ground1.display();
   polygon1.display();
   ball1.display();
   ball2.display();
   ball3.display();
   ball4.display();
   ball5.display();
   ball6.display();
   ball7.display();
   ball8.display();
   ball9.display();
   ball10.display();
   ball11.display();
   ball12.display();
   ball13.display();
   ball14.display();
   ball15.display();
   ball16.display();
   ball17.display();
   ball18.display();
   ball19.display();
   ball20.display();
   ball21.display();
   ball22.display();
   ball23.display();
   ball24.display();
   ball25.display();
   ground2.display();
   ground3.display();
  
 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x:mouseX , y:mouseY});
}


function mouseReleased(){
  chain1.fly();
}

async  function getBackgroundImage(){

   var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
   var result = await response.json();
   var datetime = result.datetime;
   var hour = datetime.slice(11,13);
   console.log(hour);
   
   if(hour>18 || hour<6){

    backgroundImage = loadImage("black.png");

   }
   else{
    backgroundImage = loadImage("white.png");
   }

 }