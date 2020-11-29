
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0;

function preload(){

  monkey_running =                                   loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

  }



function setup() {
  createCanvas(600,600)
    
  //creating monkey sprite
  monkey = createSprite(30,80.30,30);
  monkey.addAnimation( "running",monkey_running);
  monkey.scale = 0.1;
    
  //creating ground sprite
  ground = createSprite(200,580,600,20);
  ground.x = ground.width /2;
  ground.scale = 0.5;
    
  
  
 

  }


function draw() {
  
  ground.velocityX = -4;
    
  //jump when space key is pressed
  if(keydown("space")) {
    monkey.velocityY = -10; }
    
  //add gravity
  monkey.velocityY = monkey.velocityY + 0.9;
    
  
  if (ground.x < 0){
      ground.x = ground.width/2; }
    
  monkey.collide(ground);
  
  drawSprites();
    
  spawnFood();
    
  spawnObstacles();
  }


function spawnFood() {
  if(frameCount % 80===0) {
  var banana = createSprite(600,200,10,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage)
    banana.scale = 0.5;
    banana.velocityX = -3; 
  
    banana.lifetime = 200;
    
    FoodGroup.add(banana);
}
 

}

function spawnObstacles() {
  if(frameCount % 300===0) {
  var obstacle = createSprite(200,580,30,30);
  obstacle.addImage(obstacleImage);
  obstacle.lifetime = 200;
  }
  
}

  stroke("white");
  textSize(20);  
  fill("white");
  text("Score:"+ score, 500,50);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);


      
  
    





