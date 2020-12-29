
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime
var survivalTime=0
function preload(){
    
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
monkey=createSprite(150,450,20,100)
monkey.addAnimation("monkey",monkey_running)
monkey.scale=0.2
  
  
ground=createSprite(0,510,1200,10)
  
bananaGroup=new Group()
obstacleGroup=new Group()
}


function draw() {
background("white")
drawSprites()
spawnBanana()
spawnObstacle()

  
  stroke("black")
  textSize(20)
  fill("black")
 
  text("Survival Time: "+survivalTime,100,50)
   survivalTime = survivalTime + Math.round(getFrameRate()/60)
  
  
  if(ground.x<0) {
   ground.x=ground.width/2
 }
  
  
  
  if(keyDown("space")){
  monkey.velocityY=-10
  }
  
  monkey.velocityY = monkey.velocityY+0.5
  
  monkey.collide(ground)
  
  
}

function spawnBanana(){
  if(frameCount%80 == 0){
     banana=createSprite(450,100,80,10)
     banana.addImage(bananaImage)
     banana.scale=0.1
    
    banana.y=Math.round(random(120,200))
    banana.velocityX=-3
    banana.lifetime=200
  
    bananaGroup.add(banana)
  }
}
  
  function spawnObstacle(){
    if(frameCount%300 == 0){
      obstacle=createSprite(400,460,20,50)
      obstacle.addImage(obstacleImage)
      obstacle.scale=0.25
    
      obstacle.x=Math.round(random(300,600))
    obstacle.velocityX=-3
    obstacle.lifetime=200
    
    obstacleGroup.add(obstacle)
    }
  }
    
  
  





