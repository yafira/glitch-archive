const grid = document.querySelector(".canvas");
const userInput = document.getElementById("quantity");
const resetButton = document.querySelector(".reset");

// create 16x16 grid of 256 square divs
function createCanvas() {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    grid.appendChild(div);
  }
}

// user can choose value of grid size
function updateCanvas() {
  grid.innerHTML = "";
  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${userInput.value}, 2fr)`
  );
  grid.style.setProperty(
    "grid-template-rows",
    `repeat(${userInput.value}, 2fr)`
  );

  for (let i = 0; i < userInput.value * userInput.value; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    grid.appendChild(div);
  }
  console.log(userInput.value);
}

// hover effect, handles mouseover and touch event
function hoverEffect(e) {
    e.target.classList.replace("cell", "color");
}

document.querySelectorAll("div").forEach(item => {
    item.addEventListener('mouseover', hoverEffect)
});

document.querySelectorAll("div").forEach(item => {
    item.addEventListener('touchstart', hoverEffect)
});

document.querySelectorAll("div").forEach(item => {
    item.addEventListener('touchmove', hoverEffect)
});

document.querySelectorAll("div").forEach(item => {
    item.addEventListener('touchend', hoverEffect)
});

// update grid with user input
userInput.addEventListener("change", updateCanvas);

// resets grid to default values
resetButton.addEventListener("click", function() {
  grid.innerHTML = "";
  userInput.value = "";
  grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
  grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
  createCanvas();
});

createCanvas();
