let circleX;
let circleY;

function setup() {
  createCanvas(5000, 5000);
  background(0);
  noStroke();
}

function draw() {
  //TODO: reassign the elliipse's x position to be a random position
  circleX = random(0, width);

  //TODO: reassign the elliipse's y position to be a random position
  circleY = random(0, height);

  //TODO: set the fill to be a random value between white and black
  fill(random(256), random(256), random(256)); 


  //TODO: create an ellipse with defined variables passed in
  ellipse(circleX, circleY, 50, 50);
}
