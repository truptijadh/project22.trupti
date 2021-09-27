const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var ball;
var ground;

function setup() {
	createCanvas(1280, 500);

	engine = Engine.create();

	world = engine.world;
  

	var ball_options = {
		isStatic: false,
		restitution: 0.08,
		friction: 0,
		density: 0.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(200, 250, 15, ball_options);
    World.add(world, ball);

	ground =new Ground(500,490,1000,10);
	wall1 = new Ground(790, 440, 10, 105);
	wall2 = new Ground(590, 440, 10, 105);

	Engine.run(engine);

}


function draw() {
  background(0);
 

  ground.display();
  wall1.display();
  wall2.display();
  
  fill("white");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20);

  Engine.update(engine);

  drawSprites();

 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:600,y:500}, {x:3,y:3.5});
	}
}
