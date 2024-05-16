/*
1. creo la tabella con le 76 celle
*/

const numbers = []

const createNumbers = () => {
    const table = document.getElementById("table")
    for (let i = 1; i <= 76; i++) {
        //numbers.push(i)
        const numberCell = document.createElement("div") // creo un div
        numberCell.classList.add("num") // aggiungo una classe al div
        const cellNumber = document.createElement("h3") // creo un <h3>
        cellNumber.innerText = i // assegno all'<h3> il valore i 

        numberCell.appendChild(cellNumber)
        table.appendChild(cellNumber)
    }
    
    function extracNumber() {
        const num = Math.floor(Math.random() * 76) + 1;
        const cella = document.getElementById()
    }

    extracNumber()
}

createNumbers()

const button = document.querySelector("btn")
// selezionato il bottone procedo a creare un event

button.addEventListener("click")

const saveNumbers = event => {
    event.preventDefault()
}

/*
    window.addEventListener("DOMContentLoaded", () => {
        const n = numbers[i]
        createNumbers(n)
    })*/