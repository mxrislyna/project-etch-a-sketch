const container = document.querySelector("#grid-container");

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    square.addEventListener('mouseenter', () => {
        square.classList.add('colored');
    });
}
