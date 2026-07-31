const eraserBtn = document.querySelector('#eraser');

let isEraserActive = false;

//eraser
eraserBtn.addEventListener('click', () => {
    isEraserActive = !isEraserActive;
});

//Create square
function createSquare(squareSize) {
    const square = document.createElement('div');

    square.classList.add('square');

    square.style.width = `${squareSize}%`;
    square.style.height = `${squareSize}%`;

    //eraser
    square.addEventListener('mouseover', () => {
        if (isEraserActive) {
            square.style.backgroundColor = 'beige';
            console.log("Current square inline style is:", square.style.backgroundColor);
        } else {
            square.style.backgroundColor = getRandomColor(); 
        }
    });

    return square;
}

const container = document.querySelector("#grid-container");

//Grid creator
function gridBuilder (squaresPerSide = 16) {
    const totalSquares = squaresPerSide * squaresPerSide;

    const squareSize = 100 / squaresPerSide;

    for (let i = 0; i < totalSquares; i++) {
        const newSquare = createSquare(squareSize);
        container.appendChild(newSquare);
    }
}

//UserInput prompt button
const btn = document.querySelector("#btn");

btn.addEventListener('click', () => {
    let userInput = Number(prompt("", "Please enter a number that is less than 100 :)"));

    if (!userInput || userInput <= 0 || !Number.isInteger(Number(userInput))) {
        return prompt("Oops. Invalid! Enter a valid number :D")
    } else if (userInput <= 100) {
        container.innerHTML = "";
        gridBuilder(userInput);
    }
});


//Reset button
const reset = document.querySelector("#reset-btn");

reset.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.style.backgroundColor = 'beige';
    });
});

//Color randomizer
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

gridBuilder();