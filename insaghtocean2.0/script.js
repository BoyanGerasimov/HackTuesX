/*document.addEventListener('DOMContentLoaded', function() {
    const bubbleContainer = document.getElementById('bubble-container');
    const numBubbles = 50; // Number of bubbles

    for (let i = 0; i < numBubbles; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = Math.random() * window.innerWidth + 'px'; // Random horizontal position
        bubble.style.bottom = -Math.random() * window.innerHeight + 'px'; // Start from bottom of screen
        bubble.style.animationDuration = (Math.random() * 5 + 5) + 's'; // Random animation duration
        bubble.style.animationDelay = (Math.random() * 5) + 's'; // Random animation delay
        bubbleContainer.appendChild(bubble);
    }
});*/
/*
document.addEventListener('DOMContentLoaded', function() {
    const bubbleContainer = document.getElementById('bubble-container');
    const maxBubbles = 2000; // Number of bubbles
    const initialBottomPosition = -100; // Initial position above the viewport
    let numBubbles = 0;

    for (let i = 0; i < maxBubbles; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = Math.random() * window.innerWidth - 25 + 'px'; // Random horizontal position
        bubble.style.top = initialBottomPosition + Math.random() * window.innerHeight + 75 + 'px'; // Random vertical position above viewport
        bubble.style.animationDuration = (Math.random() * 5 + 5) + 's'; // Random animation duration
        bubble.style.animationDelay = (Math.random() * 5) + 's'; // Random animation delay
        bubbleContainer.appendChild(bubble);
    }

    function removeBubbles() {
        const bubbles = document.querySelectorAll('.bubble');
        bubbles.forEach(bubble => {
            if (bubble.getBoundingClientRect().top < 0) {
                bubble.remove();
                numBubbles--;
            }
        });
    }

    setInterval(createBubble, 0); // Create new bubbles every 100 milliseconds
    setInterval(removeBubbles, 1000); // Check every second for bubbles to remove
});
*/
/*
document.addEventListener('DOMContentLoaded', function() {
    const bubbleContainer = document.getElementById('bubble-container');
    const maxBubbles = 2000; // Maximum number of bubbles
    let numBubbles = 0; // Current number of bubbles

    function createBubble() {
        if (numBubbles < maxBubbles) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            bubble.classList.add('bubble');
            bubble.style.left = Math.random() * window.innerWidth - 25 + 'px'; // Random horizontal position
            bubble.style.bottom = '-60px'; // Start from below the viewport
            bubble.style.animationDuration = (Math.random() * 2 + 2) + 's'; // Random animation duration
            bubble.style.animationDelay = (Math.random() * 0.5) + 'px'; // Random animation delay
            bubbleContainer.appendChild(bubble);
            numBubbles++;
        } else {
            clearInterval(bubbleInterval); // Stop creating bubbles if the maximum number is reached
        }
    }

    function removeBubbles() {
        const bubbles = document.querySelectorAll('.bubble');
        bubbles.forEach(bubble => {
            if (bubble.getBoundingClientRect().top < 0) {
                bubble.remove();
                numBubbles--;
            }
        });
    }

    const bubbleInterval = setInterval(createBubble, 0); // Create new bubbles every 50 milliseconds (denser)
    setInterval(removeBubbles, 100); // Check every second for bubbles to remove
});
*/







document.addEventListener('DOMContentLoaded', function() {
    const bubbleContainer = document.getElementById('bubble-container');
    const maxBubbles = 10000; // Maximum number of bubbles
    let numBubbles = 6000   ; // Current number of bubbles
    let bubbleInterval; // Interval for creating bubbles
    let removeInterval; // Interval for removing bubbles

    function createBubble() {
        if (numBubbles < maxBubbles) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            bubble.style.left = Math.random() * window.innerWidth - 25 + 'px'; // Random horizontal position
            bubble.style.bottom = '-80px'; // Start from below the viewport
            bubble.style.animationDuration = (Math.random() * 0.8 + 0.8) + 's'; // Random animation duration (faster)
            bubble.style.animationDelay = (Math.random() * 1) + 's'; // Random animation delay (faster)
            bubbleContainer.appendChild(bubble);
            numBubbles++;
        } else {
            clearInterval(bubbleInterval); // Stop creating bubbles if the maximum number is reached
        }
    }

    function removeBubbles() {
        const bubbles = document.querySelectorAll('.bubble');
        bubbles.forEach(bubble => {
            if (bubble.getBoundingClientRect().top < 0) {
                bubble.remove();
                numBubbles--;
            }
        });

        for (let i = 0; i < numBubbles; i++) {
            createBubble();
        }
    }

    bubbleInterval = setInterval(createBubble, 1); // Create new bubbles every 10 milliseconds (denser)
    removeInterval = setInterval(removeBubbles, 1); // Check every 100 milliseconds for bubbles to remove (faster)

    // Stop everything after 3 seconds
    setTimeout(function() {
        clearInterval(bubbleInterval);
        clearInterval(removeInterval);
    }, 1000);
});

