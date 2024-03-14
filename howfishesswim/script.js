document.addEventListener('DOMContentLoaded', function() {
    // Get the fish element
    var fish = document.querySelector('.fish');

    // Function to change fish direction randomly
    function changeDirection() {
        var direction = Math.random() < 0.5 ? -1 : 1; // Randomly choose left or right direction
        fish.style.transform = 'scaleX(' + direction + ')'; // Flip the fish horizontally
    }

    // Function to move fish randomly within the container
    function moveFish() {
        var containerWidth = document.querySelector('.fish-container').offsetWidth;
        var fishWidth = fish.offsetWidth;
        var maxX = containerWidth - fishWidth; // Maximum x-coordinate for fish movement
        var randomX = Math.random() * maxX; // Random x-coordinate within container
        fish.style.left = randomX + 'px';
    }

    // Function to control fish movement
    function animateFish() {
        moveFish();
        changeDirection();
    }

    // Call the animateFish function every few seconds
    setInterval(animateFish, 2000); // Change the interval as needed
});
