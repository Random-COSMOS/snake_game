class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        this.tail = [];
    };

    draw() {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(this.x, this.y, scale, scale);
        for (let coordinates of this.tail) {
            ctx.fillRect(coordinates[0], coordinates[1], scale, scale);
        }
    }

    update() {


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

        if (this.x > canvas.width) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = canvas.width;
        }
        if (this.y > canvas.height) {
            this.y = 0;
        } else if (this.y < 0) {
            this.y = canvas.height;
        }
    };


    changeDirection(direction) {
        switch (direction) {
            case "Up":
                this.xSpeed = 0;
                this.ySpeed = scale * -1;
                break;
            case "Down":
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                break;
            case "Right":
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                break;
            case "Left":
                this.xSpeed = scale * -1;
                this.ySpeed = 0;
                break;
            default:
                break;
        }
    };
}