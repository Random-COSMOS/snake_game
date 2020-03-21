const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const scale = 20;

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
    }, 50);
}());

window.addEventListener('keydown', (e) => {
    const direction = e.key.replace('Arrow', '');
    snake.changeDirection(direction);
});

window.addEventListener('keydown', (e) => {
    const key = e.key;

    if (key === "s"){
        const show = setInterval(() => {
            console.log(`snake x: ${snake.x}, y: ${snake.y}`)
        }, 50);

        setInterval(() => {
            clearInterval(show);
        }, 500);
    } else if(key === "f"){
        console.log(`fruit x: ${fruit.x}, y: ${fruit.y}`)
    } else if (key === "p") {
        console.log(`speed xSpeed: ${snake.xSpeed}, ySpeed: ${snake.ySpeed}`)
    }
});