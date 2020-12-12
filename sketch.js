const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground







function setup() {
  createCanvas(800,480);
  //createSprite(400, 200, 50, 50);



  ground = new Ground (400,470,800,20);






}

function draw() {
  background(255);
  Engine.update(engine);
  drawSprites();

  ground.display();




}
