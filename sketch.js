const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var any1;
var ground;
function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world
 var option1 = {
   restitution:1
 }
  any1=Bodies.circle(200,100,20,option1)
  World.add(world,any1)
  var option={
    isStatic:true
  } 
  ground=Bodies.rectangle(200,390,400,15,option)
  World.add(world,ground)
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background("blue");
  Engine.update(engine)
  ellipseMode(RADIUS)
  ellipse(any1.position.x,any1.position.y,20)
  rectMode(CENTER)
 rect(ground.position.x,ground.position.y,400,15)

  
  drawSprites();

}