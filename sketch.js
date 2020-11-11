const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
    world = engine.world;
  ground1 = new Ground(400,390,800,20);
  box1 = new Box(420,50,30,30)
  box2 = new Box(450,50,30,30)
  box3 = new Box(480,50,30,30)
  box4 = new Box(510,50,30,30)
  box5 = new Box(435,20,30,30)
  box6 = new Box(465,20,30,30)
  box7 = new Box(495,-10,30,30)
  box8 = new Box(480,-40,30,30)
  box9 = new Box(450,-70,30,30)
  box10 = new Box(465,-100,30,30)

  ball = new Box(100,200,30,30)
  sling = new SlingShot(ball.body,{x:100,y:200})
  
}

function draw() {
  background("grey");
  Engine.update(engine);
  ground1.display();  
  box1.display();
  box2.display()
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  ball.display();
  sling.display();


  
}
function mouseDragged()
{
	Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY}) 
}
function mouseReleased(){
  sling.fly()
}