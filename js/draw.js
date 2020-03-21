const scoreBoard = document.getElementById('scoreBoard');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const scale = 10;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

const snake = new Snake();
const fruit = new Fruit();

// functions
fruit.location();

function keyDown(key, func) {
    window.addEventListener('keydown', (e) => {
        if (e.key === key) {
            func();
        }
    })
}

function setup() {
    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        fruit.draw();
        if (fruit.ifEaten()) {
            fruit.score++;
            scoreBoard.textContent = fruit.score;
        }

        snake.update();
        snake.draw();
    }, 50);
};

// events
window.addEventListener('keydown', (e) => {
    const direction = e.key.replace('Arrow', '');
    snake.changeDirection(direction);
});


keyDown(" ", () => {
    setup();
    document.getElementById('main').style.display = 'flex'
    document.getElementById('intro').style.display = 'none'
});

// code
document.getElementById('main').style.display = 'none';