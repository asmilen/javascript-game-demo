function Bullet(x,y,id) {
    this.status = true;
    this.x = x;
    this.y = y;
    this.dx = 0;
    this.dy = -2;
    this.ballRadius = 5;

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
        this.collisionDetection();
    }

    this.move = function () {
        this.x += this.dx;
        this.y += this.dy;
    }

    this.collisionDetection = function () {
        let self = this;
        obstacles.forEach(function (obstacle) {
            if (obstacle.status) {
                if (self.x > obstacle.x && self.x < obstacle.x + obstacle.width)
                    if(self.y > obstacle.y && self.y < obstacle.y + obstacle.height)
                    {
                        self.status = false;
                        obstacle.status = false;
                        score++;
                        return;
                    }
            }
        });

        if (this.x < 0)
            this.status = false;
    }
}