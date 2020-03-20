class Fruit {
    constructor() {
        this.x = 120;
        this.y = 250;
    }

    draw(){
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, scale, scale)
    }

    location() {
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
        console.log(this.y);
    }
    
    ifEaten(){
        if (snake.x === this.x && snake.y === this.y) {
            this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
            this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;

            snake.tail.push([undefined,undefined]);
            return true;
        } else {
            return false;
        }
    }
}