	const body = document.body;

// Create container
const container = document.createElement("div");
container.classList.add("container");

body.appendChild(container);

const colors = [
  "#e74c3c",
  "#8e44ad",
  "#3498db",
  "#e67e22",
  "#2ecc71",
  "#f1c40f"
];

// Create 800 squares
for (let i = 0; i < 800; i++) {
  const square = document.createElement("div");

  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseout", () => {
    removeColor(square);
  });

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();

  element.style.backgroundColor = color;

  element.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";

  element.style.boxShadow = "none";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}