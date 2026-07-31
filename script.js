const container = document.querySelector("#grid-container");

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
                    square.classList.add('colored');
                });
            }
}

const btn = document.querySelector("#btn");

btn.addEventListener('click', () => {
    let userInput = Number(prompt("", "ex. 10"));
    container.innerHTML = "";
    gridBuilder(userInput);
});

gridBuilder(16);