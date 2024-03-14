/*document.addEventListener('DOMContentLoaded', function() {
    const bubbleContainer = document.getElementById('bubble-container');
    const numBubbles = 2000; // Number of bubbles
    const initialBottomPosition = -100;

    for (let i = 0; i < numBubbles; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = Math.random() * window.innerWidth + 'px'; // Random horizontal position
        bubble.style.bottom = initialBottomPosition + Math.random() * window.innerHeight + 'px'; // Random vertical position above viewport
        bubble.style.animationDuration = (Math.random() * 5 + 5) + 's'; // Random animation duration
        bubble.style.animationDelay = (Math.random() * 5) + 's'; // Random animation delay
        bubbleContainer.appendChild(bubble);
    }
});*/
/*
document.addEventListener('DOMContentLoaded', function() {
    const bubbleContainer = document.getElementById('bubble-container');
    const numBubbles = 2000; // Number of bubbles
    const initialBottomPosition = window.innerHeight + 40; // Initial position below the screen
    const centerPosition = window.innerHeight / 2; // Center position of the screen

    // Create bubbles
    for (let i = 0; i < numBubbles; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = Math.random() * window.innerWidth + 'px'; // Random horizontal position
        //bubble.style.bottom = initialBottomPosition; // Start from below the screen
        bubble.style.animationDuration = (Math.random() * 5 + 5) + 's'; // Random animation duration
        bubble.style.animationDelay = (Math.random() * 5) + 's'; // Random animation delay
        bubbleContainer.appendChild(bubble);
    }

    // Set bubbles to move to the center
    setTimeout(function() {
        const bubbles = document.querySelectorAll('.bubble');
        bubbles.forEach(function(bubble) {
            bubble.style.bottom = centerPosition + 'px'; // Move bubbles to the center of the screen
        });
    }, 2000); // Delay before moving to the center (2 seconds)

    // Pause bubbles at the center for a few seconds
    setTimeout(function() {
        // Continue moving bubbles upwards after a delay
        const bubbles = document.querySelectorAll('.bubble');
        bubbles.forEach(function(bubble) {
            bubble.style.bottom = '0'; // Move bubbles to the top of the screen
        });
    }, 4000); // Pause duration (4 seconds)

    // Remove bubbles after total animation duration
    setTimeout(function() {
        const bubbles = document.querySelectorAll('.bubble');
        bubbles.forEach(function(bubble) {
            bubble.remove();
        });
    }, 8000); // Total animation duration (8 seconds)
});*/

// Function to change the content after the animation completes
function changeContent() {
    document.getElementById('stripes').innerHTML = "<h1>New Content</h1>";
    // You can also change the background image or any other styles dynamically here
}

// Add an event listener to trigger content change after the animation completes
document.querySelector('.stripes').addEventListener('animationend', changeContent);



