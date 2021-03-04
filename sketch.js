var engine,world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;



function setup(){
    createCanvas(800,700);
    engine = Engine.create();
    
    world = engine.world;

    ground=new Ground(680,0,800,20);

    Engine.run(engine);
}
function draw(){
    background("brown")
ground.display();
}
