const container = document.querySelector("#grid-container");


//Grid creator
function gridBuilder (squaresPerSide) {
    let totalSquares = squaresPerSide * squaresPerSide;

        for (let i = 0; i < totalSquares; i++) {
            const square = document.createElement('div');
            const squareSize = 100 / squaresPerSide;
                square.classList.add('square');
                square.style.width = `${squareSize}%`;
                square.style.height = `${squareSize}%`;
                container.appendChild(square);

                square.addEventListener('mouseenter', () => {
                    square.style.backgroundColor = getRandomColor();
                    square.classList.add('colored');
                });
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


//Eraser
const eraser = document.querySelector('#eraser');

let isEraserActive = false;

eraser.addEventListener = ('click', () => {
    isEraserActive = !isEraserActive;

    eraser.addEventListener = ('mouseover', () => {
       if (isEraserActive) {
        square.style.backgroundColor = 'white';
       } else {
        square.style.backgroundColor = rgb(255, 0, 128) 
       }
    });
});

//Color randomizer
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

gridBuilder(16);