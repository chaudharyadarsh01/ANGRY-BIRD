const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,object,box1,box2,box3,box4,ground;
function setup() {
  createCanvas(800,400);

engine = Engine.create();
world = engine.world ;


box1 = new Box(220,50,50,50);
box2 = new Box(220,130,50,50);
box3 = new Box(200,250,50,50);
box4 = new Box(200,350,50,50);


ground = new Ground(200,400,400,20);
}

function draw() {
  background("blue"); 
  Engine.update(engine);
 

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  ground.display();
}