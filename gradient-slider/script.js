// gradient rings
const colors = [
  '#FFB3C6', // pastel pink
  '#FFB3E6', // pastel pink-purple
  '#D1A7FF', // pastel lavender
  '#A7C8FF', // pastel light blue
  '#A7D8FF', // pastel blue
  '#A7FFE6', // pastel turquoise
  '#B3FFB3', // pastel mint
  '#FFF5A5', // pastel yellow
  '#FFD1FF', // pastel lilac
  '#E6B3FF', // pastel purple
  '#FFDAC1', // pastel peach
  '#BFD8B8', // pastel sage
  '#B8D6FF', // pastel sky blue
  '#F7D1C9', // pastel coral
  '#000000', // outerspace black
];

// defining the slider
const slider = document.getElementById('gradientSlider');

function updateGradient() {
  const value = parseInt(slider.value);
  const spacing = value / 2; // controls how spread out the colors are

  // create gradient stops for each color
  const stops = colors
    .map((color, index) => {
      const position = index * spacing + value / 2;
      return `${color} ${position}%`;
    })
    .join(', ');

  // create and apply the gradient
  const gradient = `radial-gradient(circle at center, ${stops})`;
  document.body.style.background = gradient;
}

// add event listener for slider movement
slider.addEventListener('input', updateGradient);

// initialize gradient on page load
updateGradient();
