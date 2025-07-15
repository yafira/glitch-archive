let sparkleX;
let sparkleY;
let sparkleSize;

let starX = 0;
let starY = 0;
let starSize = 6;
let starSpeed = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // frame rate to 55 FPS
  frameRate(55);
}

function draw() {
  background(0, 50);

  // random values for every draw loop
  sparkleX = random(0, width);
  sparkleY = random(0, height);
  sparkleSize = random(0, 10);

  fill(255);
  noStroke();
  ellipse(sparkleX, sparkleY, sparkleSize);

  // shooting start animation defined in shootingStar() function
  shootingStar(4);
}

function shootingStar(starSpeed) {
  fill(255);
  noStroke();
  ellipse(starX, starY, starSize);
  starX = starX + starSpeed;
  starY = starY + starSpeed;
  starSize = starSize + 0.1;
  
  if(starX > width || starY > height){
    starX = 0;
    starY = 0;
    starSize = 1;
  }
}