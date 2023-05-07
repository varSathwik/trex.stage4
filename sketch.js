var trex, trexRunning, trexCollided;
var ground, invisibleGround, groundImage;
var clouds, cloudsImage;
var obstaclegroup, obstacle1, obstacle2,obstacle3, obstacle4, obstacle5, obstacle6;
var score;

function preload(){
  trexRunning = loadAnimation("trex1.png","trex3.png","trex4.png");
  trexCollided = loadAnimation("trex_collided.png");

  groundImage = loadImage("ground2.png");
  cloudsImage = loadImage("cloud.png");

  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");

}

function setup(){
createCanvas(600,200);

trex = createSprite(50,180,20,50);
trex.addAnimation("running",trexRunning);
trex.addAnimation("collided",trexCollided);

trex.scale = 0.6;


ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width/2;
ground.velocityX = -4;

invisibleGround = createSprite(200,190,400,10);
invisibleGround.visible = false;

console.log("Hello + 5");

score = 0;
}

function draw(){
  background("cyan");

  text("score: "+score,500,50);
  score = score + Math.round(frameCount/60);

  ground.velocityX = -4
  console.log(ground.x);

if(keyDown("space")  && trex.y >= 100){
  trex.velcoityY = -0.8;
}

if(ground.x < 0){
ground.x = ground.width/2;
}

trex.velcityY = trex.velocityY + 0.9;

spawnObstacles();
spawnClouds();
trex.collide(invisibleGround);
drawSprites();
}
function spawnClouds(){
  if(frameCount % 60  == 0){
    clouds = createSprite(600,50,40,10);
    clouds.addImage("clouds",cloudsImage);
    clouds.Y = Math.round(random(60,10));
    clouds.scale = 0.5;
    clouds.velocityX = -3;
    
    
    clouds.depth = trex.depth;
    trex.depth = trex.depth + 1;
}


}


function spawnObstacles(){
  if(frameCount % 60 === 0){
    var obstacle = createSprite(400,165,10,40);
    obstacle.velocityX = -6;

    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1:obstacle.addImage(obstacle1);
      break;
      case 2:obstacle.addImage(obstacle2);
      break;
      case 3:obstacle.addImage(obstacle3);
      break;
      case 4:obstacle.addImage(obstacle4);
      break;
      case 5:obstacle.addImage(obstacle5);
      break;
      case 6:obstacle.addImage(obstacle6);
      break;
      default: break;
    }
obstacle.scale = 0.5;
obstacle.lifetime = 300;
  }
}