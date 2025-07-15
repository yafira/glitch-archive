let t;
let x;
let y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  t = 0;
}

function draw() {
  background(0, 16);

  noStroke();
  fill('#25E59F');
  background('#FFFFFF');

  // incorporate the noise function, x position
  let x = width * noise(t + 15);

  // incorporate the noise function, y position
  let y = height * noise(t + 5);

  // ellipse with the variables for x and y passed in
  ellipse(x, y, 150, 150);

  // controls the noise amount
  t += 0.005;
}
