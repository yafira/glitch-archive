let img1, img2, boltImg, link1, link2;
let tracklist = [
  "🎵",
  "zelda",
  "super mario",
  "pink panther",
  "nokia",
  "pac man",
  "keyboard cat",
  "tetris",
];
let description = `bliss box io is an Arduino-powered fidget-like device created by Alanna Okun and Yafira Martinez that combines nostalgic gaming with emotional wellness. Drawing inspiration from the golden age of gaming, bliss box io reimagines the handheld console as a mindfulness tool. This retro-inspired console plays classic chiptune melodies from games like Super Mario, Zelda, and Tetris while delivering uplifting messages through its OLED display. 

Complete with glowing miniature lights and tactile buttons, it serves as a comforting companion during moments of need. Whether you're feeling down or craving a dose of 90's gaming nostalgia, bliss box io offers a digital hug through familiar bleeps and bloops that shaped our childhood.`;

let input, button, guestbookButton, tracklistButton;
let randomMessages = [];
let boxY;
let contentBounds = {};
let displayedMessage = '';
let modalVisible = false;
let tracklistModalVisible = false;
let canvas;

function preload() {
  img1 = loadImage('https://cdn.glitch.global/07e386b9-96c8-476e-8af9-4dfb3f65954c/alanna.png?v=1729557315478');
  img2 = loadImage('https://cdn.glitch.global/07e386b9-96c8-476e-8af9-4dfb3f65954c/yafira.png?v=1729557317442');
  boltImg = loadImage('https://cdn.glitch.global/07e386b9-96c8-476e-8af9-4dfb3f65954c/boltImg.png?v=1729397754089');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  noLoop();
  randomGradient();

  setupContentBounds();
  setupInputElements();
  setupImages();
  
  loadMessages();

  canvas.elt.addEventListener('mousedown', handleInteraction);
  canvas.elt.addEventListener('touchstart', handleInteraction, { passive: false });
}

function loadMessages() {
  const messages = JSON.parse(localStorage.getItem('messages')) || [];
  randomMessages = messages;
  updateDisplayedMessage();
}

function setupContentBounds() {
  contentBounds.boxWidth = 550;
  contentBounds.boxHeight = 550;
  contentBounds.boxX = (width - contentBounds.boxWidth) / 2;
  contentBounds.boxY = (height - contentBounds.boxHeight) / 2;
  
  contentBounds.inputY = contentBounds.boxY + contentBounds.boxHeight + 20;
  contentBounds.buttonBottom = contentBounds.inputY + 80;
  contentBounds.imagesY = contentBounds.boxY - 120;
}

function setupInputElements() {
  input = createInput();
  input.size(500);
  input.attribute('maxlength', 50);
  input.attribute('placeholder', 'Did you play with bliss box io? Tell us what you think!');
  input.style('background-color', '#ECECEC');
  input.style('border', 'none');
  input.style('border-radius', '20px');
  input.style('padding', '10px');
  input.style('color', '#000');
  input.style('font-size', '16px');
  input.style('::placeholder', 'color: #a0a0a0');
  
  input.elt.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      addMessage();
    }
  });

  button = createButton('Submit');
  button.size(100);
  button.style('background-color', '#ECECEC');
  button.style('border', 'none');
  button.style('border-radius', '10px');
  button.style('padding', '10px');
  button.style('cursor', 'pointer');
  button.mousePressed(addMessage);

  guestbookButton = createButton('Guestbook');
  guestbookButton.size(100);
  guestbookButton.style('background-color', '#ECECEC');
  guestbookButton.style('border', 'none');
  guestbookButton.style('border-radius', '10px');
  guestbookButton.style('padding', '10px');
  guestbookButton.style('cursor', 'pointer');
  guestbookButton.mousePressed(showGuestbook);

  tracklistButton = createButton('Tracklist');
  tracklistButton.size(100);
  tracklistButton.style('background-color', '#ECECEC');
  tracklistButton.style('border', 'none');
  tracklistButton.style('border-radius', '10px');
  tracklistButton.style('padding', '10px');
  tracklistButton.style('cursor', 'pointer');
  tracklistButton.mousePressed(showTracklist);
}

function setupImages() {
  const imgWidth = 100;
  const imgHeight = 100;
  const boltWidth = 50;
  const boltHeight = 50;
  const spacing = 10;

  const totalWidth = imgWidth * 2 + boltWidth + spacing * 2;
  const startX = (width - totalWidth) / 2;

  contentBounds.imagesTop = contentBounds.imagesY;
  contentBounds.imagesBottom = contentBounds.imagesY + imgHeight;
  contentBounds.imagesLeft = startX;
  contentBounds.imagesRight = startX + totalWidth;

  if (!link1) {
    link1 = createA('https://www.alannaokun.xyz/', '');
    createImg('https://cdn.glitch.global/07e386b9-96c8-476e-8af9-4dfb3f65954c/alanna.png?v=1729557315478')
      .size(imgWidth, imgHeight)
      .parent(link1);
  }

  if (!link2) {
    link2 = createA('https://yafira.xyz/', '');
    createImg('https://cdn.glitch.global/07e386b9-96c8-476e-8af9-4dfb3f65954c/yafira.png?v=1729557317442')
      .size(imgWidth, imgHeight)
      .parent(link2);
  }

  link1.position(startX, contentBounds.imagesY);
  link2.position(startX + imgWidth + spacing + boltWidth + spacing, contentBounds.imagesY);
}

function updateDisplayedMessage() {
  if (randomMessages.length > 0) {
    displayedMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];
  } else {
    displayedMessage = 'Be the first to leave a message!';
  }
  redraw();
}

function draw() {
  randomGradient();

  fill("#ECECEC");
  rect(contentBounds.boxX, contentBounds.boxY, contentBounds.boxWidth, contentBounds.boxHeight);

  fill("#000000");
  textFont("Pixelify Sans");
  textSize(50);
  text("bliss box io", width / 2, contentBounds.boxY + 50);

  textAlign(LEFT, TOP);
  textSize(20);
  textLeading(24);
  text(description, contentBounds.boxX + 40, contentBounds.boxY + 100, 470);

  // Display random message under input field
  textAlign(CENTER, TOP);
  fill(0);
  textSize(16);
  text(displayedMessage, width / 2, contentBounds.inputY + 100);

  input.position((width - input.width) / 2, contentBounds.inputY);

  let buttonY = contentBounds.inputY + 50;
  let totalButtonWidth = button.width + guestbookButton.width + tracklistButton.width + 30;

  button.position((width - totalButtonWidth) / 2, buttonY);
  guestbookButton.position(button.x + button.width + 10, buttonY);
  tracklistButton.position(guestbookButton.x + guestbookButton.width + 10, buttonY);

  const imgWidth = 100;
  const imgHeight = 100;
  const boltWidth = 50;
  const boltHeight = 50;
  const spacing = 10;
  const boltX = contentBounds.imagesLeft + imgWidth + spacing;
  image(boltImg, boltX, contentBounds.imagesTop + (imgHeight - boltHeight) / 2, boltWidth, boltHeight);

  if (modalVisible) {
    displayModal();
  }

  if (tracklistModalVisible) {
    displayTracklistModal();
  }
}

function displayModal() {
  fill(0, 150);
  rect(0, 0, width, height);

  fill("#ECECEC");
  rect(contentBounds.boxX, contentBounds.boxY, contentBounds.boxWidth, contentBounds.boxHeight);

  let closeButtonX = contentBounds.boxX + contentBounds.boxWidth - 30;
  let closeButtonY = contentBounds.boxY + 20;
  fill(0);
  textSize(16);
  text("X", closeButtonX, closeButtonY);

  // Title
  textAlign(CENTER, TOP);
  textSize(20);
  text("Guestbook", width / 2, contentBounds.boxY + 50);

  // Display all messages with scrolling if needed
  textAlign(LEFT, TOP);
  textSize(16);
  let messageY = contentBounds.boxY + 100;
  let messageX = contentBounds.boxX + 40;
  let messageSpacing = 18;
  
  // Calculate max visible messages
  let maxVisibleMessages = Math.floor((contentBounds.boxHeight - 150) / messageSpacing);
  
  randomMessages.forEach((message, i) => {
    if (i < maxVisibleMessages) {
      text(`${i + 1}. ${message}`, messageX, messageY + (i * messageSpacing));
    }
  });

  // Display message count
  textAlign(CENTER, TOP);
  textSize(14);

  let mouseInCloseButton = mouseX > closeButtonX - 10 && mouseX < closeButtonX + 10 && 
                          mouseY > closeButtonY - 10 && mouseY < closeButtonY + 10;
  
  if (mouseInCloseButton) {
    canvas.style.cursor = 'pointer';
  } else {
    canvas.style.cursor = 'default';
  }
}

function displayTracklistModal() {
  fill(0, 150);
  rect(0, 0, width, height);

  fill("#ECECEC");
  rect(contentBounds.boxX, contentBounds.boxY, contentBounds.boxWidth, contentBounds.boxHeight);

  let closeButtonX = contentBounds.boxX + contentBounds.boxWidth - 30;
  let closeButtonY = contentBounds.boxY + 20;
  fill(0);
  textSize(16);
  text("X", closeButtonX, closeButtonY);

  textSize(30);
  text("Tracklist", width / 2, contentBounds.boxY + 50);

  textSize(20);
  let yPos = contentBounds.boxY + 100;
  tracklist.forEach((track, i) => {
    text(track, width / 2, yPos + (i * 30));
  });

  textSize(16);
  let creditY = contentBounds.boxY + contentBounds.boxHeight - 80;
  text("Arduino Music Credit/Source:", width / 2, creditY);
  text("Robson Cuoto", width / 2, creditY + 25);
  text("https://github.com/robsoncouto", width / 2, creditY + 50);

  let mouseInCloseButton = mouseX > closeButtonX - 10 && mouseX < closeButtonX + 10 && 
                          mouseY > closeButtonY - 10 && mouseY < closeButtonY + 10;
  
  if (mouseInCloseButton) {
    canvas.style.cursor = 'pointer';
  } else {
    canvas.style.cursor = 'default';
  }
}

function addMessage() {
  let message = input.value().trim();
  if (message !== '') {
    // Add the new message to the beginning of the array
    randomMessages.unshift(message);
    
    // Limit the number of stored messages if needed (optional)
    if (randomMessages.length > 50) {
      randomMessages = randomMessages.slice(0, 50);
    }

    // Save to localStorage
    localStorage.setItem('messages', JSON.stringify(randomMessages));
    
    // Clear input
    input.value('');
    
    // Update the displayed random message
    updateDisplayedMessage();
    
    // Redraw the canvas to show the updated messages if the modal is visible
    if (modalVisible) {
      redraw();
    }
  }
}

function showGuestbook() {
  modalVisible = true;
  tracklistModalVisible = false;
  redraw();
}

function showTracklist() {
  tracklistModalVisible = true;
  modalVisible = false;
  redraw();
}

function mousePressed() {
  if (modalVisible || tracklistModalVisible) {
    let closeButtonX = contentBounds.boxX + contentBounds.boxWidth - 30;
    let closeButtonY = contentBounds.boxY + 20;

    if (mouseX > closeButtonX - 10 && mouseX < closeButtonX + 10 && 
        mouseY > closeButtonY - 10 && mouseY < closeButtonY + 10) {
      modalVisible = false;
      tracklistModalVisible = false;
      redraw();
    }
  }
}

function handleInteraction(event) {
  event.preventDefault();
  if (modalVisible || tracklistModalVisible) {
    mousePressed();
  }
}

function randomGradient() {
  let c1 = color(random(255), random(255), random(255));
  let c2 = color(random(255), random(255), random(255));
  for (let i = 0; i <= height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, i, width, i);
  }
}