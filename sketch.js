var EYE;
var EYE2;
var eyesound;
function preload() {
  EYE = loadImage("assets/EYE.png");
  //EYE2 = loadImage("assets/EYE2.png");
 eyesound = loadSound("assets/EYESOUND.mp3");
}
function setup() {
 createCanvas (windowWidth,windowHeight);
  imageMode(CENTER);
  background(0, 255, 255);
  eyesound.setVolume(0.8);
  eyesound.play();
}






function draw() {
 //background (0,255,255);
  image(EYE, mouseY,mouseX, EYE.height/2, EYE.width/2);
  //image(EYE2,100,100, EYE2.height/2, EYE2.width/2);
}


//
//
//find the eye game
//
//
//
