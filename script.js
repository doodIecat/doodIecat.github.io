// Variable to keep track of mouse movement
var mouseMoved = false;

// Function to show the mouse cursor
function showMouseCursor() {
  document.body.style.cursor = 'auto';
}

// Function to hide the mouse cursor
function hideMouseCursor() {
  document.body.style.cursor = 'none';
}

// Event listener for key press
document.addEventListener('keydown', function(event) {
  if (event.key === 'h') {
    hideMouseCursor();
  }
});

// Event listener for mouse movement
document.addEventListener('mousemove', function() {
  if (!mouseMoved) {
    showMouseCursor();
    mouseMoved = true;
  }
});
