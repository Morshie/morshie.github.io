// Cookie counter
let cookieCount = 0;

// Cookie button event listener
document.getElementById('acceptButton').addEventListener('click', function() {
  cookieCount += getRandomInt(3, 12);
  document.getElementById('cookieCounter').textContent = 'Cookies Accepted: ' + cookieCount;

  // Display message based on cookie count
  if (cookieCount >= 10 && cookieCount < 50) {
    displayMessage('The website knows you\'re on it.');
  } else if (cookieCount >= 50 && cookieCount < 75) {
    displayMessage('The website knows your IP address.');
  } else if (cookieCount >= 75 && cookieCount < 100) {
    displayMessage('The website knows your computer type.');
  } else if (cookieCount >= 100 && cookieCount < 150) {
    displayMessage('The website knows what city you live in.');
  } else if (cookieCount >= 150 && cookieCount < 250) {
    displayMessage('The website knows if your computer is on or off.');
  } else if (cookieCount >= 250 && cookieCount < 500) {
    displayMessage('The website knows your first name.');
  } else if (cookieCount >= 500 && cookieCount < 750) {
    displayMessage('The website knows what browser you\'re using.');
  } else if (cookieCount >= 750 && cookieCount < 1250) {
    displayMessage('The website knows your mom\'s name.');
  } else if (cookieCount >= 1250 && cookieCount < 2000) {
    displayMessage('The website knows your computer name.');
  } else if (cookieCount >= 2000 && cookieCount < 2500) {
    displayMessage('The website knows who your friends are.');
  } else if (cookieCount >= 2500 && cookieCount < 4000) {
    displayMessage('The website knows what you can see on your screen right now.');
  } else if (cookieCount >= 4000 && cookieCount < 5000) {
    displayMessage('The website knows your family tree.');
  } else if (cookieCount >= 5000 && cookieCount < 7500) {
    displayMessage('The website knows what you look like.');
  } else if (cookieCount >= 7500 && cookieCount < 10000) {
    displayMessage('The website knows your address.');
  } else if (cookieCount >= 10000 && cookieCount < 12500) {
    displayMessage('The website knows your entire diet, car type, genes, what your voice sounds like, and where you sleep.');
  } else if (cookieCount >= 12500) {
    displayMessage('You are the website. (The End. Stop Clicking.)');
    document.getElementById('acceptButton').disabled = true; // Disable the button
  }
});

// Helper function to generate random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Display message
function displayMessage(message) {
  document.getElementById('message').textContent = message;
}

// Update cookie count at milestones
setInterval(function() {
  if (cookieCount >= 1000 && cookieCount < 5000) {
    cookieCount += getRandomInt(13, 65);
    document.getElementById('cookieCounter').textContent = 'Cookies Accepted: ' + cookieCount;
  } else if (cookieCount >= 5000) {
    cookieCount += getRandomInt(58, 129);
    document.getElementById('cookieCounter').textContent = 'Cookies Accepted: ' + cookieCount;
  }
}, 5000);
