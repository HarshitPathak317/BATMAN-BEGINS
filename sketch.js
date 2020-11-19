const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var umbrella,rain;

var maxDrops = 100;

function preload(){
    
    //umbrella = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png")
}

function setup(){
    createCanvas(500, 700);
	engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(220,200,300,);
    //rain = new Drops(200,0,5);
   
	Engine.run(engine);
}

function draw(){
    background(0);
    umbrella.display();
    rain.display();

    
    for(var i=0; i<maxDrops; i++){
        rain.push(new Drop(random(0,400), random(0,400)));
    }

    drawSprites();
}   

