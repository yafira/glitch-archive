function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);

  // top-left quadrant
  stroke(127);
  strokeWeight(10);
  for (let posX = 0; posX < 10; posX++) {
    line(posX * 25, 0, posX * 25, height / 2);
  }

  // top-right quadrant
  noStroke();
  fill("#ffd700");

  for (let posX = 0; posX < 10; posX++) {
    for (let posY = 0; posY < 10; posY++) {
      if (posX % 2 == 0) {
        // posX is an even number
        circle(posX * 25 + width / 2 + 10, posY * 25 + 10, 10);
      } else {
        // posX is an odd number
        circle(posX * 25 + width / 2 + 10, posY * 25 + 10 + 10, 10);
      }
    }
  }

  // bottom-left quadrant
  noStroke();
  fill("fuchsia");

  for (let posX = 0; posX < 10; posX++) {
    for (let posY = 0; posY < 5; posY++) {
      // Offset y-position every other column
      if (posX % 2 == 0) {
        square(posX * 25, posY * 50 + height / 2, 25);
      } else {
        square(posX * 25, posY * 50 + 25 + height / 2, 25);
      }
    }
  }

  // bottom-right
  stroke(0, 0, 255);
  strokeWeight(10);

  for (let posX = 0; posX < 10; posX++) {
    // Left half
    line(width / 2, height - posX * 25, width / 2 + posX * 25, height);
    // Right half
    line(width / 2 + posX * 25, height / 2, width, height - posX * 25);
  }

  // Draw black borders
  stroke(0);
  strokeWeight(15);
  line(0, 5, width, 5);
  line(0, height - 5, width, height - 5);
  line(5, 0, 5, height);
  line(width - 5, 0, width - 5, height);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
}
