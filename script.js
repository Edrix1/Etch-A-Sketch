const gridContainer = document.querySelector('.grid-container');
const gridSquare = document.querySelectorAll('.grid-square');
const resetButton = document.querySelector('#user-input');
const gridSize = 16;

//creates the default grid
for (let i = 0; i < gridSize * gridSize; i++) {
    const createSquare = document.createElement('div');
    createSquare.classList.add('grid-square');
    gridContainer.appendChild(createSquare);
}

//creates a grid prompted by user
function createGrid(size) {
    gridContainer.innerHTML = ''; // clears existing grid
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size * size; i++) {
        const createSquare = document.createElement('div');
        createSquare.classList.add('grid-square');
        gridContainer.appendChild(createSquare);
    }
}

//user inputs number of squares
resetButton.addEventListener('click', () => {
const userInput = parseInt(prompt('Enter the number of squares per side (1-100)'));
if (!isNaN(userInput) && userInput > 0 && userInput <= 100) {
    createGrid(userInput);
} else {
    alert("please choose a number between 1-100")
}
});

//changes back-ground color when hovered
gridContainer.addEventListener('mouseenter', (event) =>{
    if (event.target.classList.contains('grid-square')) {
        event.target.classList.add('mouse-enter');
        console.log(event.target);
    }
});
