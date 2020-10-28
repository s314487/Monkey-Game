
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, bananaGroup
var score, survivalTime=0
var ground,groundImage

function preload(){
  
  
  monkey_running = loadAnimation( "sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 

}



function setup() {
  createCanvas(400,400)
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1
  ground = createSprite(400,350,900,10)
  
  FoodGroup = new Group();
  bananaGroup = new Group();
  obstacleGroup = new Group();

}


function draw() {
  background(255);
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time :"+survivalTime, 100,50)
  
  ground.velocityX = -4;
  ground.x = ground.width/2
  
  if(keyDown("space")) {
    monkey.velocityY = -16;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground)
  food()
  obstacles()
  drawSprites()
}


function food(){
  if(frameCount % 80 === 0){
    banana = createSprite(450,200,20,20);
    banana.addImage(bananaImage)
    banana.y = Math.round(random(120,200))
    banana.velocityX = -4
    banana.scale = 0.1
    banana.lifetime = 300
    bananaGroup.add(banana)
  }
  
}

function obstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(450, 330, 20, 20)
    obstacle.addImage(obstacleImage)
    obstacle.velocityX = -4
    obstacle.scale = 0.1
    obstacle.lifetime = 300
    obstacleGroup.add(obstacle)
  }
}



