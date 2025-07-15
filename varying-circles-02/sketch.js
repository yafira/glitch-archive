let circleX;
let circleY;

function setup() {
  createCanvas(2000, 2000);
  // background(0);
  noStroke();
}

function draw(){
  // reassign the elliipse's x position to be a random position
  circleX = random(0, width);

  // reassign the elliipse's y position to be a random position
  circleY = random(0, height);

  // set the fill to be a random value between white and black
  fill(random(0, 256));

  // create an ellipse with defined variables passed in
  ellipse(circleX, circleY, 50, 50);
}