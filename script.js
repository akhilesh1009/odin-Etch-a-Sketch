const container = document.getElementById("container");
const gridSizeSlider = document.getElementById("grid-size-slider");
const gridSizeDisplay = document.getElementById("grid-size-display");
const gridSizeDisplay2 = document.getElementById("grid-size-display-2");
const blackModeButton = document.getElementById("black-mode-button");
const defaultModeButton = document.getElementById("default-mode-button");

let blackMode = false; // Tracks whether "Black Only" mode is active

// Function to create the grid
function createGrid(size) {
  // Clear the container
  container.innerHTML = "";

  // Calculate square size
  const squareSize = 500 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Add hover effect
    square.addEventListener("mouseenter", () => {
      const color = blackMode ? "black" : generateRandomColor();
      square.style.backgroundColor = color;
    });

    container.appendChild(square);
  }
}

// Function to generate random RGB color
function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Event listener to update the grid size dynamically
gridSizeSlider.addEventListener("input", (e) => {
  const size = e.target.value;
  gridSizeDisplay.textContent = size;
  gridSizeDisplay2.textContent = size;
  createGrid(size);
});

// Event listeners for mode toggles
blackModeButton.addEventListener("click", () => {
  blackMode = true;
});

defaultModeButton.addEventListener("click", () => {
  blackMode = false;
});

// Initialize the default grid
createGrid(16);
