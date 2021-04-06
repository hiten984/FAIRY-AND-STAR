var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var rand

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	//fairyVoice.play();  

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	rand=Math.round(random(1,800));

	star = createSprite(rand,30);
	star.addImage(starImg);
	star.scale = 0.2;
	

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  while(star.x % 10  >0){
	star.x=star.x+1
	}

	if(fairy.x+20===star.x){
		star.velocityY=3
	}

	if(keyDown(LEFT_ARROW)){
		fairy.x=fairy.x-10
	}

	if(keyDown(RIGHT_ARROW)){
		fairy.x=fairy.x+10
	}

	if(star.y===471){
		star.y=471
		star.x=fairy.x+120
		star.velocityY=0

		//if(keyDown(LEFT_ARROW)){
		//	star.x=fairy.x+20
		//}
	
		//if(keyDown(RIGHT_ARROW)){
		  //  star.x=fairy.x+20
		//}
	}

 console.log(star.x)

  drawSprites();

}

