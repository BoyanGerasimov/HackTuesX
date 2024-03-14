// Get the fish element
const fish = document.querySelector('.fish');

// Function to generate a random number between min and max
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to set random animation properties
function setAnimation() {
  const duration = random(3, 8); // Random duration between 3 and 8 seconds
  const distance = random(20, 80); // Random distance between 20% and 80% of tank width
  const direction = random(0, 1) ? 'left' : 'right'; // Random direction (left or right)

  // Set animation properties
  fish.style.animation = `swim-${direction} ${duration}s linear infinite`;
  fish.style.left = direction === 'left' ? '100%' : `-${distance}%`;
}

// Set initial animation
setAnimation();
