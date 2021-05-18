const Engine = Matter.Engine ;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, canvas

function setup() {
 canvas = createCanvas(400,400);

 engine = Engine.create();
 world = engine.world;

 var options={
   isStatic:true
 }

 ground = Bodies.rectangle(200,380,400,10,options);
 World.add(world, ground);

 var option1={
   restitution: 1
 }

 ball = Bodies.circle(200,50,20,option1);
 World.add(world, ball);
 

}

function draw() {
  background(0); 
  Engine.update(engine);

  fill ("lightgreen");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,10);

  fill("purple");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10,10);

  drawSprites();
}