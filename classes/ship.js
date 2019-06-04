function Ship() {
    this.height = 20;
    this.width = 35;
    this.x = (canvas.width - this.width) / 2;
    this.y = canvas.height - this.height;

    this.draw = function () {
        ctx.beginPath();
        ctx.rect(this.x,this.y, this.width, this.height);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    };
}