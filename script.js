// Create the game canvas
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set the canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define game variables
let playerX = 50; // Initial player X position
let playerY = canvas.height / 2; // Initial player Y position
let gravity = 1; // Gravity value
let velocity = 0; // Player velocity

// Update player position
function updatePlayer() {
    // Apply gravity
    velocity += gravity;
    playerY += velocity;

    // Stop player from falling through the bottom
    if (playerY > canvas.height) {
        playerY = canvas.height;
        velocity = 0;
    }

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the player
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(playerX, playerY, 50, 50);

    // Call the updatePlayer function again
    requestAnimationFrame(updatePlayer);
}

// Handle key events
function handleKeyDown(event) {
    if (event.code === "Space") {
        // Jump when the space key is pressed
        velocity -= 15;
    }
}

// Add event listener for keydown events
document.addEventListener("keydown", handleKeyDown);

// Start the game loop
requestAnimationFrame(updatePlayer);
