const container = document.querySelector('.grid-container');

for (let i = 0; i <256; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    container.appendChild(gridSquare);
}

const gridSquare = document.querySelectorAll('.grid-square');

gridSquare.forEach (gridSquare => (
    gridSquare.addEventListener('mouseenter', () => {
        gridSquare.classList.add('hover-square');
    })
))