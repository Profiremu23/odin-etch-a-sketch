// Initializing grid setup logic
const container = document.getElementById('container');

function createTable(cells) {
    for (let i = 0; i < cells; i++) {
        let cell = document.createElement('div');
        cell.classList.add('frame');
        container.appendChild(cell);
    }
}
createTable(256); // Pre-created frame to start sketching

// Clearing function
const grid = document.querySelector('#container');

function clearTable(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// New grid button functions
function refreshGrid() {
    const newTable = prompt("How many frames your new Etch-a-Pro should contain in a square?")
    clearTable(grid);
    createTable(newTable);
    sketchColor();
}

// Coloring by hover function
function sketchColor() {
    const frames = document.querySelectorAll('.frame');
    frames.forEach((div) => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "#000000";
    }));
}
sketchColor();

// To-do: Color picking for sketchColor() function