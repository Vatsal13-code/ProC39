const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,engine,world
var particles = []
var plinkos = []
var divisions = []
var divisionHeight=300


function setup() {
  engine=Engine.create();
  world=engine.world;
  createCanvas(480,800)
  ground = new Ground(240,790,800,10)
  for (var k = 0; k <= width; k = k + 80)  {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight))
  }

  for (var j = 40; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,75))
  }

  for (var j = 15; j<= width-10; j=j+50) {
    plinkos.push(new Plinko(j,175))
  }

  for (var j = 15; j<= width-10; j=j+50) {
    plinkos.push(new Plinko(j,275))
  }

  for (var j = 15; j<= width-10; j=j+50) {
    plinkos.push(new Plinko(j,375))
  }
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)

  
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  
  for (var m = 0; m < plinkos.length; m++) {
    plinkos[m].display();
  }

  if(frameCount%60===0){ particles.push(new Particle(random(width/2-30, width/2+30), 10,10)); }
  ground.display()
  

}