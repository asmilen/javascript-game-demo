function Obstacle() {
    this.status = true;
    this.x = Math.floor((Math.random() * canvas.height) + 1);
    this.y = 0;
    this.dx = Math.random();
    this.dy = Math.random();
    this.width = Math.floor((Math.random() * 50) + 30);
    this.height = Math.floor((Math.random() * 50) + 30);

    this.draw = function () {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
        this.collisionDetection();
    };

    this.move = function () {
        this.x += this.dx;
        this.y += this.dy;
    };

    this.collisionDetection = function () {
        if (this.x > canvas.width || this.x < 0 || this.y + this.height > canvas.height) {
            this.status = false;
            return 1;
        }

        if (this.y + this.height > canvas.height - ship.height && (this.x > ship.x && this.x < ship.x + ship.width || ship.x >= this.x && ship.x < this.x + this.width)) {
            lives--;
            if (!lives) {
                alert("GAME OVER");
                document.location.reload();
            }
            this.status = false;
        }
    }
}