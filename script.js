const divMain = document.querySelector("#divMain");
const sizeInput = document.querySelector("#sizeInput");
const setGridBtn = document.querySelector("#setGridBtn");

function createGrid(size) {
  divMain.innerHTML = "";
  const numOfSquares = size * size;
  const squareSize = 100 / size;

  for (let i = 0; i < numOfSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}%`;

    square.addEventListener("mouseenter", () => {
      const randomColor = `hsl(${Math.random() * 360}, 90%, 40%)`;
      square.style.backgroundColor = randomColor;
    });

    divMain.appendChild(square);
  }
}

setGridBtn.addEventListener("click", () => {
  let size = parseInt(sizeInput.value);
  if (isNaN(size) || size < 4) size = 4;
  if (size > 100) size = 100;
  createGrid(size);
});

createGrid(16);
