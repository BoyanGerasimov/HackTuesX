// Get the fish element
const fish = document.querySelector('.fish');

// Function to generate random direction
function getRandomDirection() {
  const angle = Math.random() * Math.PI * 2;
  const x = Math.cos(angle) * 100; // adjust 100 to control distance
  const y = Math.sin(angle) * 100; // adjust 100 to control distance
  return { x, y };
}

// Update CSS variables for fish animation
function updateAnimation() {
  const direction = getRandomDirection();
  fish.style.setProperty('--x', `${direction.x}%`);
  fish.style.setProperty('--y', `${direction.y}%`);
}

// Call the update function initially and then at regular intervals
updateAnimation();
setInterval(updateAnimation, 100); // Adjust the interval as needed
