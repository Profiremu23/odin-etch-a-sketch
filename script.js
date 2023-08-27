// Initializing grid setup logic
const container = document.getElementById('container');

function createTable(cells) {
    for (let rows = 0; rows < cells; rows++) {
        for (let columns = 0; columns < cells; columns++) {
          let cell = document.createElement('div');
        cell.classList.add('frame');
        cell.style.width = 512/cells + "px";
        cell.style.height = 512/cells + "px";
        container.appendChild(cell);
        }
    }
}
createTable(16); // Pre-created frame to start sketching

// Clearing function
const grid = document.querySelector('#container');

function clearTable(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// New grid button functions
function refreshGrid() {
    const newTable = prompt("How many frames should your new Etch-a-Pro have in a row?")
    clearTable(grid);
    createTable(newTable);
    defaultColor();
}

// Sketching with all colors
function defaultColor() {
    const frames = document.querySelectorAll('.frame');
    frames.forEach((div) => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "black";
    }));
}
defaultColor();

function colorWhite() {
    const frames = document.querySelectorAll('.frame');
    frames.forEach((div) => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "white"
    }));
}

function colorGrey() {
    const frames = document.querySelectorAll('.frame');
    frames.forEach((div) => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "grey";
    }));
}

function colorRed() {
    const frames = document.querySelectorAll('.frame');
    frames.forEach((div) => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "red";
    }));
}

function colorOrange() {
    const frames = document.querySelectorAll('.frame');
    frames.forEach((div) => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "orange";
    }));
}

function colorYellow() {
    const frames = document.querySelectorAll('.frame');
    frames.forEach((div) => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "yellow";
    }));
}

function colorLime() {
    const frames = document.querySelectorAll('.frame');
    frames.forEach((div) => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "lime";
    }));
}

function colorGreen() {
    const frames = document.querySelectorAll('.frame');
    frames.forEach((div) => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "green";
    }));
}

function colorCyan() {
    const frames = document.querySelectorAll('.frame');
    frames.forEach((div) => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "cyan";
    }));
}

function colorBlue() {
    const frames = document.querySelectorAll('.frame');
    frames.forEach((div) => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "blue";
    }));
}

function colorDarkBlue() {
    const frames = document.querySelectorAll('.frame');
    frames.forEach((div) => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "darkblue";
    }));
}

function colorPurple() {
    const frames = document.querySelectorAll('.frame');
    frames.forEach((div) => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "purple";
    }));
}

function colorMagenta() {
    const frames = document.querySelectorAll('.frame');
    frames.forEach((div) => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "magenta";
    }));
}

function colorPink() {
    const frames = document.querySelectorAll('.frame');
    frames.forEach((div) => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "pink";
    }));
}

// Custom color picking
function colorCustom() {
    const frames = document.querySelectorAll('.frame');
    let customColor = document.getElementById('input').value;
    frames.forEach((div) => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = customColor;
    }));
}
