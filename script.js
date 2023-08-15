// Initializing grid setup
const container = document.getElementById('container');

function createTable(cells) {
    for (let i = 0; i < cells; i++) {
        let cell = document.createElement('div');
        container.appendChild(cell);
    }
}
createTable(256);