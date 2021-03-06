class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        this.tail = [];
        this.prevDirection = null;
    };

    draw() {
        ctx.fillStyle = '#bebebe';
        ctx.fillRect(this.x, this.y, scale, scale);
        ctx.fillStyle = '#ffffff';
        for (let coordinates of this.tail) {
            ctx.fillRect(coordinates[0], coordinates[1], scale, scale);
        }
    }

    update() {
        let width = canvas.width - scale;
        let height = canvas.height - scale;

        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i][0] = this.tail[i + 1][0];
            this.tail[i][1] = this.tail[i + 1][1];
        }

        if (this.tail.length) {
            this.tail[this.tail.length - 1][0] = this.x;
            this.tail[this.tail.length - 1][1] = this.y;
        }

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > width) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = width;
        }
        if (this.y > height) {
            this.y = 0;
        } else if (this.y < 0) {
            this.y = height;
        }

        for (let coordinates of this.tail){
            if (this.x === coordinates[0] && this.y === coordinates[1]){
                console.log(`Game over score: ${fruit.score}`)
            }
        }
    };


    changeDirection(direction) {
        switch (direction) {
            case "Up":
                if (this.prevDirection != "Down") {
                    this.xSpeed = 0;
                    this.ySpeed = scale * -1;
                    this.prevDirection = direction;
                }
                break;
            case "Down":
                if (this.prevDirection != "Up") {
                    this.xSpeed = 0;
                    this.ySpeed = scale * 1;
                    this.prevDirection = direction;
                }
                break;
            case "Right":
                if (this.prevDirection != "Left") {
                    this.xSpeed = scale * 1;
                    this.ySpeed = 0;
                    this.prevDirection = direction;
                }
                break;
            case "Left":
                if (this.prevDirection != "Right") {
                    this.xSpeed = scale * -1;
                    this.ySpeed = 0;
                    this.prevDirection = direction;
                }
                break;
            default:
                break;
        }
    };
}