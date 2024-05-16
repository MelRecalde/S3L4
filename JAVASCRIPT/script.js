
const numbers = [];

const createBoard = () => {
    const board = document.getElementById("board")
    for (let index = 0; index < 76; index++) {
        numbers.push([])
       
        const cell = document.createElement("div")
        cell.classList.add("cell")
        const cellNum = document.createElement("h3")
        cellNum.innerText = index + 1

        cell.appendChild(cellNum)
        board.appendChild(cell)
    }
}
        const button = document.getElementById("btn")
        button.addEventListener("click", (event) => {
            const randomNum = Math.floor(Math.random() * 76) + 1;
            const cells = document.querySelectorAll(".cell")
        cells[randomNum].classList.add("rn")
    
})

window.addEventListener("DOMContentLoaded",(e)=> {
createBoard()
})
/*
const board = [];

const createBoard = () => {
  const boardContainer = document.getElementById("board");

  for (let i = 0; i < 76; i++) {
    board.push([]);

    const numberCell = document.createElement("div");
    numberCell.classList.add("cell");

    const cellValue = document.createElement("h3");
    cellValue.innerText = i + 1;

    numberCell.appendChild(cellValue);

    boardContainer.appendChild(numberCell);
  }
};

const button = document.getElementById("btn");

button.addEventListener("click", (event) => {
  const randomNumber = Math.floor(Math.random() * 76) + 1;

  const cells = document.querySelectorAll(".cell");

  cells[randomNumber - 1].classList.add("rn");
});

window.addEventListener("DOMContentLoaded", (event) => {
  createBoard();
});*/