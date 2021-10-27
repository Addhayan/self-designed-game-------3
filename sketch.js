var PLAY = 1
var END = 0
var gameState;

var hero;
var heroPunching;
var obstacles , obstacle1Img , obstacle2Img , obstacle3Img;
var powerups , healPowerup , speedPowerup;
var bg;
var Villain,villainImg;
var heart,emptyHeart;
var dieSound;
var punchingSound;
var ground;

function preload(){
  heroFlying = loadImage("images/hero_flying.png");
  heroPunching = loadImage("images/hero_punching.png");
  obstacle1Img = loadImage("images/obstacle_1.png");
  obstacle2Img = loadImage("images/obstacle_2.png");
  obstacle3Img = loadImage("images/obstacle_3.png");
  healPowerup = loadImage("images/heal_powerup.png");
  speedPowerup = loadImage("images/speedIncrease_powerup.png");
  bg = loadImage("images/city.png");
  villainImg = loadImage("images/main_villain.png");
  heartImg = loadImage("images/heart.png");
  emptyHeart = loadImage("images/empty_heart.png");
  dieSound = loadSound("sounds/herodie_sound.mp3");
  punchingSound = loadSound("sounds/punching_sound.wav")
}

function setup() {
  createCanvas(1500,700);

  ground = createSprite(1500,500,800,500);
  ground.addImage("ground",bg);
  ground.x = ground.width/2;
  ground.velocityX = -4;

 hero = createSprite(500,500,50,50);
 hero.addImage("flying",heroFlying);
 hero.addImage("punching",heroPunching);

 Villain = createSprite(1200,350,50,50);
 Villain.addImage("villain",villainImg);
 Villain.scale = 0.7;

 obstaclesGroup = createGroup();
 powerupsGroup = createGroup();
 
 
  
}

function draw() {
  background("black");
 if(ground.x < 0){
    ground.x = ground.width/2;
  } 

  hero.y =  World.mouseY;
  hero.x = World.mouseX;

 Obstacles();
 Powerups();
 //heart();



  drawSprites();
}

 /* function Heart(){
  heart = createSprite(200,200,50,50);
  heart.addImage("heart",heartImg);
} */

function Obstacles(){
  if(frameCount % 100 === 0){
    obstacles = createSprite(1000,500,50,50);
    obstacles.y = Math.round(random(150,550));
    //generating random obstacles
    var rand = Math.round(random(1,3));
    switch(rand){
      case 1 :  obstacles.addImage("1",obstacle1Img);
                break;
      case 2 :  obstacles.addImage("2",obstacle2Img);
                break;
      case 3 :  obstacles.addImage("3",obstacle3Img);
                break;
      default : break;
      
    }

  obstaclesGroup.add(obstacles);
  Obstacles.lifetime = 250;

  obstacles.velocityX = -6;
    obstacles.scale = 0.3;
  }
}

function Powerups(){
  if(frameCount % 150 === 0){
    powerups = createSprite(950,500,50,50);
    powerups.y = Math.round(random(150,550));
    //generating random powerups
    var rand = Math.round(random(1,2));
    switch(rand){
      case 1 : powerups.addImage("1",healPowerup);
               break;
      case 2 : powerups.addImage("2",speedPowerup);
               break;
      default : break;

    }

    powerupsGroup.add(powerups);
    powerups.lifetime = 190;

    powerups.velocityX = -5;
    powerups.scale = 0.3;


  }
}