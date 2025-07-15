let shapeWidth = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);

  fill(0, 255, 0);
  circle(width / 2 - shapeWidth, shapeWidth, shapeWidth);

  fill(0, 50);
  square(width / 2 + shapeWidth / 2, shapeWidth / 2, shapeWidth);

  fill("pink");
  triangle(
    shapeWidth / 2,
    height / 2 + shapeWidth / 2,
    shapeWidth / 2,
    height - shapeWidth / 2,
    width / 2 - shapeWidth / 2,
    height / 2 + shapeWidth / 2
  );

  noFill();
  circle(width / 2 + shapeWidth, height / 2 + shapeWidth, shapeWidth);
}
