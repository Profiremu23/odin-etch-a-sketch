// Initializing grid setup
const container = document.getElementById('container');

function createTable(cells) {
    for (let i = 0; i < cells; i++) {
        let cell = document.createElement('div');
        cell.classList.add('frame');
        container.appendChild(cell);
    }
}
createTable(256);

// Hovering to color
const frames = document.querySelectorAll('.frame');
frames.forEach((div) => div.addEventListener('mouseover', () => {
    div.style.backgroundColor = "#000000";
}));