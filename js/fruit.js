class Fruit {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.score = 0;
    }

    draw(){
        ctx.fillStyle = "lime";
        ctx.fillRect(this.x, this.y, scale, scale)
    }

    location() {
        this.x = (Math.floor(Math.random() * columns)) * scale;
        this.y = (Math.floor(Math.random() * rows)) * scale;
    }
    
    ifEaten(){
        if (snake.x === this.x && snake.y === this.y) {
            this.location();
            snake.tail.push([undefined,undefined]);
            return true;
        } else {
            return false;
        }
    }
}   