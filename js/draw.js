const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const scale = 10;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

const snake = new Snake();
const fruit = new Fruit();

(function setup() {

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        fruit.draw();
        if (fruit.ifEaten()){
            console.log("eaten");
        }

        snake.update();
        snake.draw();
    }, 100);
}());

window.addEventListener('keydown', (e) => {
    const direction = e.key.replace('Arrow', '');
    snake.changeDirection(direction);
});