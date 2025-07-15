const add = document.getElementById("add");
const remove = document.getElementById("remove");
const clear = document.getElementById("clear");

const apple = document.getElementById("apple-shelf")
const orange = document.getElementById("orange-shelf")
const lemon = document.getElementById("lemon-shelf")
const grapes = document.getElementById("grapes-shelf")
const strawberry = document.getElementById("strawberry-shelf")

let counter = 0;

function allFruits(counter) {
  let apple_total = "";
  let orange_total = "";
  let lemon_total = "";
  let grapes_total = "";
  let strawberry_total = "";

  for (let i = 0; i < counter; i++) {
    apple_total += "🍎";
    orange_total += "🍑";
    lemon_total += "🍋";
    grapes_total += "🍇";
    strawberry_total += "🍓";
  }

  apple.innerHTML = apple_total;
  orange.innerHTML = orange_total;
  lemon.innerHTML = lemon_total;
  grapes.innerHTML = grapes_total;
  strawberry.innerHTML = strawberry_total;
}

function addFruit() {
  if (counter < 20) counter++;
  allFruits(counter);
}

function removeFruit() {
  if (counter > 1) counter--;
  allFruits(counter);
}

function clearAll() {
  counter = 0;
  allFruits()
}



add.addEventListener("click", addFruit);
remove.addEventListener("click", removeFruit);
clear.addEventListener("click", clearAll);