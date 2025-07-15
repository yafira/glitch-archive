const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

// fixes the flicker as the clock resets transformation location (at 12)
function fixFlickerGlitch(element, deg) {
  if (deg === 90) {
    element.style.transition = "all 0.0s";
  }
}

function setDate() {
  const now = new Date();

  // calculate the degrees of rotation
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hoursDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  fixFlickerGlitch(secondHand, secondsDegrees);
  fixFlickerGlitch(minsHand, minsDegrees);
  fixFlickerGlitch(hourHand, hoursDegrees);
}
// runs the setDate function at every second
setInterval(setDate, 1000);
